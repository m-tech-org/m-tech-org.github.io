# mtech-ai-proxy

Cloudflare Worker that proxies the site's floating AI chat widget to an OpenAI-compatible chat completions API (OpenRouter). It exists so the API key never reaches the browser: the frontend calls this Worker, the Worker calls the upstream model API.

This is a separate deployment from any other AI proxy in other repos — own name, own secrets, own rate limiter.

## What it does

- Only accepts `POST` requests from `https://m-tech-org.github.io` (and `http://localhost:3000` for local dev) — checked via the `Origin` header.
- Injects a fixed system prompt (`context.js`, grounded in M-Tech's real services/projects/contact info) server-side — the client can only ever send `user`/`assistant` turns, so it can't override or inject a fake system message.
- Caps message count, message length, and total conversation size before forwarding upstream, so a malicious client can't run up API costs.
- Optionally rate-limits by client IP if the `RATE_LIMITER` binding is present (fails open — if the binding isn't configured, requests aren't limited, they're just not extra-protected).

## Deploy steps

You'll need a [Cloudflare account](https://dash.cloudflare.com) and an [OpenRouter API key](https://openrouter.ai/keys) (or any other OpenAI-compatible chat completions endpoint).

```bash
npm install -g wrangler   # if you don't have it
cd workers/ai-proxy && wrangler login && cd ../..

make worker-secrets   # prompts for AI_API_KEY, then AI_BASE_URL (https://openrouter.ai/api/v1), then AI_MODEL
make worker-deploy
```

`AI_MODEL` is an OpenRouter model ID, e.g. `nvidia/nemotron-3-ultra-550b-a55b:free` (see [openrouter.ai/models](https://openrouter.ai/models) — filter by "free" to avoid needing paid credits). It's a secret rather than hardcoded so the model can be swapped without a redeploy.

Wrangler prints the deployed Worker URL, e.g. `https://mtech-ai-proxy.<your-subdomain>.workers.dev`.

## Wire it to the frontend

Add the deployed URL as `VITE_AI_WORKER_URL` in the repo root's `.env` (local dev) and as a `VITE_AI_WORKER_URL` GitHub Actions repo secret (production build — see `.github/workflows/deploy.yml`). Until this is set, the chat widget renders but shows a "not configured yet" state instead of trying to send messages.

## Choosing a model

Paid OpenRouter models return `402 Payment Required` if the account has no credits — pick a `:free`-suffixed model (or add credits at [openrouter.ai/settings/credits](https://openrouter.ai/settings/credits)). To change models later: `wrangler secret put AI_MODEL` from `workers/ai-proxy/`, then `make worker-deploy`.

## Rate limiter (optional)

The `[[ratelimits]]` block in `wrangler.toml` references a Cloudflare Rate Limiting binding. If you haven't created one, either remove that block or create the binding in the Cloudflare dashboard (Workers & Pages → your account → Rate Limiting) — the Worker skips rate limiting gracefully if the binding is absent.

## Updating what the assistant knows or how it behaves

The system prompt is split into two files:

- **`RULESET.md`** — persona, tone, and behavior rules (who it is, how it talks, what it must never do — e.g. never render Markdown, since the chat UI displays plain text). Edit this directly; `context.js` imports it as text at build time (`import RULESET from "./RULESET.md"`, enabled by the `[[rules]]` block in `wrangler.toml`), so there's one copy, not a duplicate pasted into JS.
- **`context.js`** (`SITE_CONTEXT`) — the grounding data: services, delivered projects, contact info. Manually kept in sync with `src/data/services.ts` and `src/data/projects.ts` — the Worker build doesn't share a build step with the Vite frontend, so there's no automatic sync.

Re-run `make worker-deploy` after editing either file.

## Local development

```bash
cp workers/ai-proxy/.dev.vars.example workers/ai-proxy/.dev.vars
# fill in real values in .dev.vars (gitignored)
make worker-dev
```

This serves the Worker locally (default `http://localhost:8787`) — point the frontend's `VITE_AI_WORKER_URL` at that during development if you want to test against a local Worker instead of the deployed one.

## Debugging

`make worker-tail` streams live logs from the deployed Worker — useful for seeing rejected requests (bad origin, rate limited, oversized payload) in real time.
