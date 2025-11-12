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
├── data/            # Mock data
├── hooks/           # Custom React hooks
├── services/        # Business logic (email service)
├── styles/          # Global styles and tokens
├── App.tsx          # Main app component with routing
└── main.tsx         # Entry point
```

## Getting Started

### Install Dependencies

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

The build output will be in the `dist/` directory.

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

The built static files can be deployed to any static hosting service:

- **GitHub Pages**: Copy `dist/` contents to your gh-pages branch
- **Netlify**: Deploy the `dist/` folder
- **Vercel**: Deploy the `dist/` folder
- **Cloudflare Pages**: Deploy the `dist/` folder

### Build Output

```
dist/
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

Private project - All rights reserved
