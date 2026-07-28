# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository layout

This is the M-Tech company website (GitHub Pages), a single React + TypeScript + Vite project at the repo root (there is no `v1/`/`v2/`/`v3/` split — the site was promoted to the repo root and legacy versions archived).

The default branch is `develop`. **The deploy workflow (`.github/workflows/deploy.yml`) only triggers on push/PR to `master`** — pushing to `develop` does NOT deploy. To ship a change, it has to land on `master` (currently done by pushing/merging `develop` into `master`).

## Commands

```bash
npm install
npm start          # dev server on http://localhost:3000, binds --host (LAN-accessible)
npm run build      # tsc && vite build — outputs to ./build at the repo root
npm run preview
```

A `Makefile` wraps these plus deployment/worker helpers — run `make help` to list them.

There are no lint or test scripts. Type checking runs as part of `npm run build` (`tsc`).

## Deployment

GitHub Actions (`.github/workflows/deploy.yml`) builds the repo root into `./build` and deploys it to GitHub Pages on push/PR to `master`. Build-time secrets injected as `VITE_*` env vars: `VITE_EMAILJS_PUBLIC_KEY`, `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, `VITE_RECEIVER_EMAIL` (contact form, see `EMAILJS_SETUP.md`), and `VITE_AI_WORKER_URL` (chat widget, see `workers/ai-proxy/README.md`). Locally these come from `.env`; without them the contact form degrades gracefully via `isEmailJsConfigured()` and the chat widget shows an "unconfigured" state.

`scripts/getDeployments.sh` and `scripts/remove_deployments.py` are maintenance scripts for listing/pruning GitHub Pages deployments via the `gh` CLI.

`workers/ai-proxy/` is a Cloudflare Worker that the `chatling` widget calls for AI responses — deployed separately via `make worker-deploy` (Wrangler), not part of the Pages build.

## Architecture

React 19 + TypeScript + Vite. Key design decisions:

- **No routing library.** Navigation is hash-based: `App.tsx` listens to `hashchange` and switches between the page components in `src/pages/` (`#home`, `#about`, `#services`, `#projects`, `#products`, `#contact`). New pages must be wired into that switch, and into the shared nav list in `src/data/navigation.ts` (used by both `Navigation.tsx` and the footer's Quick Links).
- **Styling is CSS Modules + design tokens.** Each page/component has a co-located `*.module.css`; shared values live in `src/styles/tokens/` (colors, typography, spacing, animations, decorations) with `global.css`/`theme.css`/`reset.css` on top. Prefer tokens over hard-coded values. `global.css` also holds cross-page utility classes referenced by plain string (`className="reveal"` etc.), not through the CSS-module `styles` import — see the scroll-reveal pattern below.
- **`src/components/ui/`** is a shadcn-style component library built on Radix UI (one folder per component). Reuse these before writing new primitives.
- **Page content is data-driven**: services, projects, products, team, nav items, and the tech-stack list live in `src/data/` as typed arrays, separate from the page components that render them.
- **Scroll-reveal animation**: `src/hooks/use-in-view.ts` (`IntersectionObserver`-based) drives the global `.reveal` / `.reveal-stagger` classes in `src/styles/global.css`. Attach the hook's `ref` to a section/grid and toggle `is-visible` off `isInView` — used across Home, About, Services, and Contact.
- **`prefers-reduced-motion`** is handled globally in `src/styles/global.css` (crushes animation/transition durations sitewide); component-level exceptions (e.g. a functional loading spinner) re-enable themselves locally in their own module CSS.
- **Contact form flow**: `src/pages/Contact.tsx` → `src/services/email.ts` (`sendContactEmail`) → EmailJS, configured in `src/config/emailjs.ts` from `VITE_*` env vars.
- **AI chat widget**: `src/components/ai-chat/ChatWidgetMount.tsx` wraps the `chatling` npm package's `mount()`, configured in `src/config/aiChat.ts`. It's rendered once in `App.tsx` as a sibling of the routed page content (not inside it), so it survives hash navigation without remounting.
- **Products page** (`src/pages/Products.tsx`, data in `src/data/products.ts`): cards open a `ProductDetailsDialog` (carousel of screenshots/video/PDF via `embla-carousel-react`). A product's `status: 'upcoming'` renders it as a non-interactive, grayscale/overlaid teaser instead of a clickable card.
- **Home page tech-stack section** (`src/components/TechStackCanvas.tsx`): an animated `<canvas>` of floating logo nodes, data in `src/data/techStack.ts`. Logo path data is extracted ahead-of-time from Simple Icons (via `react-icons/si`) and embedded as raw SVG path strings — do not import `react-dom/server` client-side to rasterize icons, it bloats the bundle by ~100KB+ gzipped for no benefit. Items with no official logo (e.g. RAG, LLM) get a hand-drawn `customIcon` instead (see `drawCustomIcon` in that file).

## Design and content guidelines

`prompts/` contains the project's authored guidelines — design system, color rules, component library conventions, tech stack, content creation, and project structure. Consult these before making visual or content changes; they are the source of truth for the site's look and feel.
