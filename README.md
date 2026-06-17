# Hallmarc Fitouts — Website

Marketing website for **Hallmarc Fitouts** — turnkey retail, commercial and hospitality fitouts, licensed across Australia. Tagline: *Spaces built to be remembered.*

## Stack

- **Next.js** (App Router) + **TypeScript**
- **Tailwind CSS** (v4)
- **GT Eesti** display/text font (self-hosted in `public/fonts`)
- Deployed on **Vercel** (auto-deploy from GitHub)
- Enquiry form → **Attio** CRM + **Resend** email (`app/api/leads/route.ts`)

## Local development

```bash
npm install
cp .env.example .env.local   # then fill in the keys
npm run dev                  # http://localhost:3000
```

## Environment variables

See `.env.example`. Set the same keys in Vercel → Settings → Environment Variables:

- `ATTIO_API_KEY` — Attio CRM enquiry capture
- `RESEND_API_KEY` — transactional email
- `NOTIFICATION_EMAIL_TO` / `NOTIFICATION_EMAIL_FROM` — enquiry notifications

## Structure

- `app/` — pages (home, retail, commercial, hospitality, partners) and `api/leads` route
- `components/` — shared UI (Nav, Footer, HeroCarousel, ProjectGrid, StatsBar, EnquiryForm, …)
- `public/` — fonts and project imagery

## Deploy

Pushing to `main` auto-deploys via the Vercel ↔ GitHub integration. Pull requests get preview URLs automatically.
