// The system prompt has two parts, kept in separate files on purpose:
//   RULESET.md   — persona, tone, and behavior rules (who the assistant is,
//                  how it talks, what it must never do). Imported directly
//                  as text (see the [[rules]] block in wrangler.toml) so
//                  there's exactly one copy of it, not a duplicate pasted
//                  into a JS string.
//   SITE_CONTEXT  — the grounding data below (services/projects/contact).
//                  This *is* manually kept in sync with src/data/services.ts,
//                  src/data/projects.ts, and About.tsx — the Worker build is
//                  separate from the site's Vite build, so it can't import
//                  those files directly. Update this when services/projects
//                  change materially.
import RULESET from "./RULESET.md";

const SITE_CONTEXT = `## About M-Tech

M-Tech (Morph Technologies) is a boutique software engineering shop founded in 2021, specializing in web delivery (Laravel, Spring Boot, Django/FastAPI, React), backend & API engineering (PHP, Java, Python), and system modernization. Work is delivered directly by the engineer who builds it — no handoffs, no juniors learning on a client's codebase.

Contact: mtechltd2021@gmail.com
LinkedIn: https://www.linkedin.com/company/mtechltdbd/
GitHub: https://github.com/m-tech-org

## Services

- **Web Development** — Custom web applications, responsive design, progressive web apps, e-commerce, CMS.
- **Mobile Applications** — Native and cross-platform apps for iOS and Android.
- **Cloud Solutions** — Cloud migration, infrastructure as code, DevOps, serverless architecture.
- **AI & Machine Learning** — Predictive analytics, NLP, computer vision, recommendation systems.
- **Cybersecurity** — Security audits, penetration testing, compliance management, incident response.
- **IT Consulting** — Digital strategy, technology roadmapping, process optimization, change management.

## Projects M-Tech has delivered or built

1. **School Transport Management Platform** (2026, Go/gRPC/Kafka/React) — A multi-tenant SaaS platform where transport companies manage school transportation across multiple schools. Parents book and pay online; admins run role-based portals. In active development, with a React admin portal and Flutter driver/manager/community apps.

2. **AI Website Chat Assistant** (2026, React/TypeScript/Cloudflare Workers) — A floating AI chat widget that answers visitor questions grounded in a site's own content, proxied through a rate-limited edge worker so the model API key never reaches the browser.

3. **laravel-gitstamp** (2026, PHP/Laravel, MIT licensed, open source) — A Laravel package that stamps a deploy-time version (date + git SHA) into an app, so you always know what's running in production without SSH access. CI-tested across Laravel 10-12. Available on GitHub at github.com/m-tech-org/laravel-gitstamp.

4. **VaultAGramBot** (2026, Go/PostgreSQL/Redis) — A Telegram bot that turns a private Telegram channel into free, unlimited file storage, with a JWT-secured admin API.

5. **Aerotia International — Corporate Website** (2025, Laravel 12/PHP/React 18/TypeScript) — A CMS-backed corporate website for Aerotia International, letting non-technical staff manage marketing content without redeploying the frontend. Live at aerotia.com.

6. **HRMACS — HR Management & Access Control** (2025, Laravel/PHP) — A modular, drop-in Laravel RBAC system (users, roles, permissions) built for reuse across larger HRMS builds.

7. **Aerotia Accounting Portal** (2024, Laravel 9/PHP/MySQL) — A ledger/accounting admin tool tracking organizations, projects, and project costs for Aerotia International, integrating laravel-gitstamp for deploy visibility.

8. **Crypto Signal Trading Bot** (2022, Java/Binance API) — A trading bot that detects chart-pattern breakout/breakdown signals on Binance and trades against a profit target.

## Additional Guidance

- If asked about team size or specific individuals, say M-Tech doesn't publish team details publicly and suggest reaching out directly.`;

export const SYSTEM_CONTEXT = `${RULESET}\n\n${SITE_CONTEXT}`;
