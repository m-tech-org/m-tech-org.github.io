# M-Tech Portfolio

A modern, responsive company portfolio built with React, TypeScript, and Vite.

## Features

- 🚀 Pure React (no routing framework)
- ⚡ Vite for fast development and optimized builds
- 🎨 Glass morphism design with gradient effects
- 📱 Fully responsive with mobile menu
- 💌 EmailJS integration for contact form
- 🎯 Hash-based client-side navigation
- 🔧 TypeScript for type safety
- 🎨 CSS Modules for scoped styling

## Project Structure

```
src/
├── components/       # Reusable UI components
│   ├── ui/          # UI library components (buttons, cards, etc.)
│   ├── Navigation.tsx
│   └── Footer.tsx
├── pages/           # Page components
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Services.tsx
│   ├── Projects.tsx
│   └── Contact.tsx
├── data/            # Typed content data (services, projects, team)
├── hooks/           # Custom React hooks
├── services/        # Business logic (email service)
├── styles/          # Global styles and tokens
├── App.tsx          # Main app component with routing
└── main.tsx         # Entry point
```

## Getting Started

A `Makefile` wraps the common commands — run `make help` to list them (`make install`, `make start`, `make build`, `make preview`, `make deployments-list`, `make deployments-remove LOGIN=<user>`).

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
- `#contact` - Contact form

## EmailJS Setup

To enable the contact form:

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create a service and email template
3. Copy `.env.example` to `.env`
4. Add your EmailJS credentials

See `EMAILJS_SETUP.md` for detailed instructions.

## Deployment

`.github/workflows/deploy.yml` builds the site and publishes it to GitHub Pages automatically on every push (or PR) to `develop`. The contact form's EmailJS credentials are injected at build time from repo secrets (`VITE_EMAILJS_PUBLIC_KEY`, `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, `VITE_RECEIVER_EMAIL`); locally these come from `.env` (see `EMAILJS_SETUP.md`).

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
- **Lucide React** - Icons
- **Radix UI** - Accessible components
- **EmailJS** - Email service
- **React Hook Form** - Form management
- **Sonner** - Toast notifications

## License

MIT — see [LICENSE](./LICENSE).
