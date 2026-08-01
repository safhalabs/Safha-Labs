# Safha Labs — Landing Page

Mitra Teknologi Anda untuk Digitalisasi yang Relevan dan Praktis.

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: TypeScript
- **Styling**: CSS Modules + Vanilla CSS
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**: Inter, Instrument Serif, IBM Plex Mono
- **Deployment**: [Vercel](https://vercel.com/)

## Getting Started

### Prerequisites
- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm start
```

## Deploy to Vercel

### Option 1: Auto-deploy from GitHub
1. Push this repository to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click **"New Project"** → Import your GitHub repository
4. Vercel auto-detects Next.js — click **Deploy**
5. Done! Your site is live.

### Option 2: Vercel CLI
```bash
npx vercel
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout + SEO metadata
│   ├── page.tsx            # Landing page (assembles sections)
│   └── globals.css         # Design tokens & global styles
└── components/
    ├── Navbar.tsx           # Sticky navigation with glassmorphism
    ├── Hero.tsx             # Hero with animated dashboard mockup
    ├── About.tsx            # Company story & vision
    ├── WhyUs.tsx            # 3 pillars of differentiation
    ├── Services.tsx         # 4 service use cases
    ├── Process.tsx          # 7-step collaboration timeline
    ├── Portfolio.tsx        # Project showcase
    └── Footer.tsx           # CTA + Contact + Footer (English)
```

## Customization

### Contact Information
- **WhatsApp**: Update the number in component files (currently `085117808182`)
- **Email**: Update `hello@safhalabs.id` placeholder in `Footer.tsx`
- **Instagram**: Update `@safhalabs` placeholder in `Footer.tsx`
- **Address**: Update "Jakarta, Indonesia" in `Footer.tsx`

### Colors
Design tokens are in `src/app/globals.css` under `:root`

## License

© 2026 Safha Labs. All rights reserved.
