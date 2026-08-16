export interface Product {
  id: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  image: string;
  screenshots?: string[];
  video?: string;
  overviewPdf?: string;
  technologies: string[];
  price: string;
  year: string;
  outcome: string;
  link: string;
  coupons?: { code: string; discount: string }[];
  /** Overrides the default "Buy Now — {price}" label on the modal's CTA button. */
  ctaLabel?: string;
  /** Shown as an install snippet in the modal for free/open-source products. */
  installCommand?: string;
  /** Marks a not-yet-released product; renders as a non-interactive teaser card. */
  status?: 'upcoming';
}

export const products: Product[] = [
  {
    id: "google-drive-backup-utility",
    title: "Google Drive Backup Utility Pro",
    category: "Automation",
    description:
      "A set-and-forget backup daemon that compresses databases and file storage and pushes them straight to your own Google Drive — no cloud middleman, no per-GB fees.",
    longDescription:
      "A Python-based backup utility with both a desktop control panel and a headless systemd service, built around one .env config file. Free tier covers file/folder backup to Drive; Pro adds MySQL/MariaDB/PostgreSQL database backup, client-side AES-256 encryption, failure alerts (Telegram, Discord/Slack, email), one-command restore, and retention policies — plus extra destinations (email, scp, Dropbox, OneDrive) running simultaneously.",
    image: "/images/products/gd-backup-utility-card.svg",
    screenshots: [
      "/images/products/gd-backup-utility-hero.png",
      "/images/products/gd-backup-utility-features.png",
      "/images/products/gd-backup-utility-pro.png",
    ],
    video: "/videos/products/gd-backup-utility-promo.mp4",
    overviewPdf: "/docs/products/gd-backup-utility-overview.pdf",
    technologies: [
      "Python",
      "Google Drive API",
      "Dropbox API",
      "SMTP",
      "MySQL",
      "PostgreSQL",
      "MariaDB SDK",
      "Docker",
      "Bash",
    ],
    price: "From $5 / 2 years",
    year: "2026",
    outcome:
      "Unattended, verifiable backups with automatic retry, retention, and multi-channel failure alerts — restorable with a single command.",
    link: "https://mtechltd.gumroad.com/l/google-drive-backup-utility",
    coupons: [
      { code: "27675BP", discount: "50% off — first 50 purchases" },
      { code: "4KOP5N0", discount: "30% off — first 100 purchases" },
    ],
  },
  {
    id: "ai-website-chat",
    title: "AI Website Chat",
    category: "AI / Chat Widget",
    description:
      "A floating AI chat assistant widget you can drop into any website — framework-agnostic, one npm install away.",
    longDescription:
      "Published on npm as chatling — the same widget M-Tech runs on this site. It mounts via a Custom Element or a framework-agnostic mount() function, so it works in React, Vue, plain HTML, or anything else, with no vendor lock-in.",
    image: "/images/products/ai-website-chat-card.svg",
    technologies: ["JavaScript", "TypeScript", "Web Components", "npm"],
    price: "Free & Open Source",
    year: "2026",
    outcome: "Drop-in AI chat widget — one npm install, live on your site in minutes.",
    link: "https://www.npmjs.com/package/chatling",
    ctaLabel: "View on npm",
    installCommand: "npm install chatling",
  },
  {
    id: "hrmacs",
    title: "HRMACS",
    category: "HR & Access Control",
    description:
      "A Laravel 12 Human Resource Management & Access Control System with full RBAC, ready to run standalone or as an installable module.",
    longDescription:
      "HRMACS ships User Management and Role Management as self-contained Laravel modules with full role-based access control. It's dual-purpose — a fully runnable, dockerized HR app on its own, and an installable Composer package that host applications can require to get the same modules in an integrated mode.",
    image: "/images/products/hrmacs-card.svg",
    technologies: ["Laravel", "PHP", "MySQL", "RBAC", "Docker"],
    price: "$1000 / lifetime",
    year: "2026",
    outcome: "Full RBAC user & role management out of the box — reused across every M-Tech Laravel product.",
    link: "#contact",
    ctaLabel: "Contact Sales",
  },
  {
    id: "laravel-gitstamp",
    title: "Laravel GitStamp",
    category: "Laravel Package",
    description:
      "Deploy-time git commit + date stamping for Laravel apps with no build pipeline — know what's actually running in production without SSHing in.",
    longDescription:
      "laravel-gitstamp generates a version stamp (date + short git SHA, e.g. 2026.07.18-6601bf7) once at deploy time and gives you a helper, a facade, and a Blade component to display it anywhere in your app — no git tags, no manual version bumping, no shelling out to git on every request.",
    image: "/images/products/laravel-gitstamp-card.svg",
    technologies: ["PHP", "Laravel", "Composer", "GitHub Actions"],
    price: "Free & Open Source",
    year: "2026",
    outcome: "Every deploy self-stamps with commit + date — no more SSHing in to check what's live.",
    link: "https://packagist.org/packages/m-tech-org/laravel-gitstamp",
    ctaLabel: "View on Packagist",
    installCommand: "composer require m-tech-org/laravel-gitstamp",
  },
  {
    id: "askentra",
    title: "Askentra",
    category: "AI / Document Search",
    description:
      "Natural-language search over your documents — S3, local filesystem, Google Drive, or a generic HTTP API — with AI-generated, cited answers.",
    longDescription:
      "A retrieval-augmented Q&A system: ask a plain-English question and get an answer synthesized from the actual retrieved passages, with the source document, excerpt, and similarity score attached to every response — not a black box. Deployable via Docker Compose for a pilot, a Helm chart for Kubernetes/OpenShift at scale, or as a single offline desktop executable with no source handed over. Runs fully on-prem/offline with zero data leaving the client's infrastructure, or against managed cloud infrastructure with a config change.",
    image: "/images/products/askentra-card.svg",
    screenshots: [
      "/images/products/askentra-banner.png",
      "/images/products/askentra-architecture.png",
    ],
    technologies: [
      "FastAPI",
      "React",
      "OpenSearch",
      "Ollama",
      "Redis",
      "Docker",
      "Kubernetes",
      "Helm",
    ],
    price: "Licensed per engagement",
    year: "2026",
    outcome:
      "Turns a document pile into something a team can just ask — every answer auditable back to its source.",
    link: "/pitch/askentra/index.html",
    ctaLabel: "View Pitch",
  },
  {
    id: "vaultagrambot",
    title: "VaultAGramBot",
    category: "Telegram Bot",
    description: "A Telegram bot for vault/backup operations — currently in development.",
    longDescription: "Details are still being finalized. VaultAGramBot will ship as a Freemium product — check back soon.",
    image: "/images/products/vaultagrambot-card.svg",
    technologies: ["Telegram Bot API"],
    price: "Freemium — Coming Soon",
    year: "2026",
    outcome: "Coming soon.",
    link: "",
    status: "upcoming",
  },
];
