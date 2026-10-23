# Levexa — Strategic Business Growth Advisory Portfolio

> **"Level up your excellence with Levexa."**  
> Helping businesses grow, scale, and build sustainable revenue.

---

## Overview

**Levexa** is a premier strategic growth advisory web application engineered to convert visitors into qualified business inquiries. It unifies four core commercial disciplines:
1. **Business Strategy** — Positioning, revenue models, and market differentiation.
2. **Marketing** — Precision demand generation and high-converting acquisition engines.
3. **Sales** — Pipeline velocity, objection handling, and enterprise deal acceleration.
4. **Business Growth** — Net revenue retention (NRR) and compounding scale economics.

---

## Technology Stack

- **Framework**: [Next.js 15 (App Router)](https://nextjs.org/) with React 19
- **Language**: TypeScript in strict mode
- **Styling**: [Tailwind CSS v3](https://tailwindcss.com/) with curated brand color tokens
- **Animations**: [Framer Motion](https://motion.dev/) (with `prefers-reduced-motion` compliance)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Linting & Formatting**: ESLint (Next.js core web vitals + TypeScript)
- **Deployment Target**: Vercel

---

## Brand Visual Identity

Strictly implemented according to the official Levexa visual identity:
- **Deep Navy (`#07192F`)**: Primary dark background, header, and card surfaces
- **Golden Yellow (`#F5A900`)**: Signature brand accent, primary CTA buttons, chevron highlights
- **Pure White (`#FFFFFF`)**: Primary typography and high-contrast accents
- **Cool Gray (`#F4F6F9`)**: Neutral highlights and borders
- **Muted Gray (`#AAB5C5`)**: Secondary text on dark backgrounds

---

## Website Architecture & Routes

| Route | Page | Purpose |
|---|---|---|
| `/` | **Home** | Editorial hero, positioning strip, about preview, core services preview, 4-stage growth process, featured work, final conversion CTA, and footer. |
| `/about` | **About** | Company overview, mission & vision, 3 pillars of unified growth philosophy, core values, and advisory network governance. |
| `/services` | **Services** | Deep-dive into Strategy, Marketing, Sales, and Growth, detailing core bottlenecks, strategic deliverables, and the Unified Flywheel. |
| `/work` | **Our Work** | Structured illustrative engagement models with category filters (**Strategy**, **Marketing**, **Sales**, **Growth**) and interactive Challenge / Approach / Solution tabs. |
| `/contact` | **Contact** | Strategic consultation enquiry page with direct channels, advisory desk info, response SLA, and accessible form. |
| `/privacy` | **Privacy Policy** | Transparent data retention policy and client privacy rights. |
| `/api/contact` | **API Route** | Server-side validation, rate limiting, anti-spam honeypot, safe logging, and Resend email dispatch integration. |
| `/sitemap.xml` | **SEO Sitemap** | Automated dynamic XML sitemap. |
| `/robots.txt` | **Robots** | Search crawler instructions protecting internal API routes. |

---

## Local Development & Setup

### 1. Prerequisites
- Node.js `v20.x` or `v24.x`
- npm `v10+` or `v11+`

### 2. Installation
```bash
npm install
```

### 3. Environment Variables
Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```
Fill in the values:
```env
NEXT_PUBLIC_SITE_URL=https://levexa.com
CONTACT_EMAIL_RECIPIENT=enquiry@levexa.com
RESEND_API_KEY=your_resend_api_key_here
```
*(Note: If `RESEND_API_KEY` is not provided, the contact endpoint safely logs inquiries locally and returns a successful response without failing.)*

### 4. Running Locally
```bash
# Start development server
npm run dev

# Or build and run production server
npm run build
npm run start
```
Visit `http://localhost:3000`.

---

## Validation & Quality Assurance Commands

- **Type Checking**: `npx tsc --noEmit`
- **Linting**: `npx eslint .`
- **Production Build**: `npm run build`

---

## Deployment to Vercel

1. Push code to your Git repository (GitHub / GitLab / Bitbucket).
2. Import the repository into [Vercel](https://vercel.com).
3. Set the Environment Variables:
   - `NEXT_PUBLIC_SITE_URL` = your live production domain (e.g. `https://levexa.com`)
   - `CONTACT_EMAIL_RECIPIENT` = client receiving email
   - `RESEND_API_KEY` = your email provider API key
4. Deploy with standard Next.js build preset (`npm run build`).
