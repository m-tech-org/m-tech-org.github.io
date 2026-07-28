# M-Tech Portfolio

A modern, responsive company portfolio built with React, TypeScript, and Vite.

## Features

- 🚀 Pure React (no routing framework)
- ⚡ Vite for fast development and optimized builds
- 🎨 Glass morphism design with gradient effects
- 📱 Fully responsive with mobile menu
- 💌 EmailJS integration for contact form
- 🤖 Floating AI chat assistant, persistent and draggable across all pages
- 🎯 Hash-based client-side navigation
- 🔧 TypeScript for type safety
- 🎨 CSS Modules for scoped styling

## Project Structure

```
src/
├── components/       # Reusable UI components
│   ├── ui/          # shadcn-style UI library (buttons, dialog, carousel, etc.)
│   ├── ai-chat/     # chatling widget wrapper (ChatWidgetMount)
│   ├── Navigation.tsx
│   ├── Footer.tsx
│   ├── ProductDetailsDialog.tsx
│   └── TechStackCanvas.tsx
├── pages/           # Page components
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Services.tsx
│   ├── Projects.tsx
│   ├── Products.tsx
│   └── Contact.tsx
├── data/            # Typed content data (services, projects, products, team, navigation, tech stack)
├── hooks/           # Custom React hooks
├── config/          # Runtime config (AI chat, EmailJS)
├── services/        # Business logic (email)
├── styles/          # Global styles and tokens
├── App.tsx          # Main app component with hash-based routing
└── main.tsx         # Entry point

workers/
└── ai-proxy/        # Cloudflare Worker the chatling widget talks to for AI responses (see its README)
```

## Getting Started

A `Makefile` wraps the common commands — run `make help` to list them (`make install`, `make start`, `make build`, `make preview`, `make deployments-list`, `make deployments-remove LOGIN=<user>`, `make worker-dev`, `make worker-deploy`, `make worker-tail`, `make worker-secrets`).

### Install Dependencies

```bash
npm install
```

### Development

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

The build output will be in the `build/` directory (see `vite.config.ts`).

### Preview Production Build

```bash
npm run preview
```

## Navigation

The app uses hash-based routing:

- `#home` - Home page
- `#about` - About us
- `#services` - Services listing
- `#projects` - Portfolio projects
- `#products` - Products/Shop catalog
- `#contact` - Contact form

## EmailJS Setup

To enable the contact form:

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create a service and email template
3. Copy `.env.example` to `.env`
4. Add your EmailJS credentials

See `EMAILJS_SETUP.md` for detailed instructions.

## AI Chat Assistant Setup

The floating chat widget on every page calls a Cloudflare Worker proxy so the model API key never reaches the browser. Without `VITE_AI_WORKER_URL` configured, the widget still renders but shows a "not configured yet" state.

See `workers/ai-proxy/README.md` for deploying the Worker, then set `VITE_AI_WORKER_URL` in `.env` (local) or as a repo secret (production).

## Deployment

`.github/workflows/deploy.yml` builds the site and publishes it to GitHub Pages automatically on every push (or PR) to `develop`. The contact form's EmailJS credentials and the AI chat Worker URL are injected at build time from repo secrets (`VITE_EMAILJS_PUBLIC_KEY`, `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, `VITE_RECEIVER_EMAIL`, `VITE_AI_WORKER_URL`); locally these come from `.env` (see `EMAILJS_SETUP.md` and `workers/ai-proxy/README.md`).

`scripts/getDeployments.sh` and `scripts/remove_deployments.py` are maintenance scripts for listing/pruning old GitHub Pages deployments via the `gh` CLI.

### Build Output

```
build/
├── index.html
├── assets/
│   ├── index-[hash].js
│   └── index-[hash].css
└── [static assets]
```

## Technologies

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **CSS Modules** - Scoped styling
- **Lucide React** / **React Icons** (Simple Icons) - Icons and brand logos
- **Radix UI** - Accessible components
- **Embla Carousel** - Product details media carousel
- **EmailJS** - Email service
- **React Hook Form** - Form management
- **Sonner** - Toast notifications
- **chatling** - AI chat widget, backed by the `workers/ai-proxy` Cloudflare Worker

## License

MIT — see [LICENSE](./LICENSE).
