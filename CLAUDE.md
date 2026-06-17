# Hallmarc National Fitouts — Website Build Brief

This file is the ground truth for every Claude Code session building hallmarcfitouts.com.au.
Read this before touching any file. Do not deviate from these specs without confirming with Sean.

---

## Project Overview

Rebuild hallmarcfitouts.com.au on Next.js 14 (App Router) + Tailwind CSS, hosted on Vercel.
Replace the existing Squarespace site. Keep the domain hallmarcfitouts.com.au (DNS cutover at launch).
Content is managed via MDX files — no CMS login, no developer needed for copy updates.

**Stack:**
- Framework: Next.js 14 (App Router, TypeScript)
- Styling: Tailwind CSS (config-first, no arbitrary values in JSX)
- Content: MDX files in `/content/` — one file per page section
- Email: Resend (contact form delivery to marcus@hallmarcfitouts.com.au + sean@omearagroup.com)
- Hosting: Vercel (auto-deploy from GitHub main branch)
- Analytics: Vercel Analytics (built-in, privacy-first)
- CRM: Attio (via centralised lead router API)

---

## Design System

### Palette (use ONLY these values — defined in tailwind.config.ts)

```
cream:   #F5F0E6   (page background)
cream2:  #EAE5D8   (card backgrounds, subtle sections)
cream3:  #DDD8CE   (borders, dividers)
black:   #0D0D0D   (primary text, nav, dark sections)
terra:   #B5502A   (accent — CTAs, active states, highlights)
dark:    #1A1A1A   (dark card backgrounds)
grey:    #888880   (secondary text, captions)
white:   #FFFFFF
```

### Typography

**Brand font: GT Eesti** (Grilli Type licence — files in `/HallMarc/Marketing Folder/HallmarcFont/GT Eesti/`)

Copy these font files into `/public/fonts/` at project setup:
```
GT-Eesti-Display-Medium.woff2   ← headlines, nav wordmark
GT-Eesti-Display-Regular.woff2  ← subheadings
GT-Eesti-Text-Regular.woff2     ← body copy
GT-Eesti-Text-Medium.woff2      ← bold body, buttons
GT-Eesti-Text-Light.woff2       ← captions, fine print
```

Declare via `@font-face` in `app/globals.css`, then wire into `tailwind.config.ts`:
```ts
fontFamily: {
  display: ["GT Eesti Display", "Arial Black", "Impact", "sans-serif"],
  body:    ["GT Eesti Text",    "Calibri",     "Georgia", "serif"],
}
```

- Display / Headlines: `font-display` → GT Eesti Display Medium
- Body: `font-body` → GT Eesti Text Regular
- All headings: `tracking-tight`, `font-bold`
- Section labels (eyebrow text): `text-xs tracking-[0.25em] uppercase font-body text-terra`

### Spacing & Layout

- Max content width: `max-w-7xl mx-auto px-6 lg:px-8`
- Section vertical padding: `py-20 lg:py-28`
- Card gap: `gap-6`
- Nav height: `h-14`

### Components (build these as reusable components in `/components/`)

- `<Nav />` — sticky, black, HALLMARC wordmark left, links right, ENQUIRE button terra
- `<Footer />` — black, 3-column, links + contact + licensing note
- `<HeroSection />` — full-width image, dark overlay, large headline, CTA buttons
- `<StatsBar />` — black strip, 4 stats in terracotta/grey
- `<ProjectGrid />` — responsive 1/2/3 col image grid with hover overlay labels
- `<VerticalCard />` — dark tile, terra accent line, title, sub-text, link
- `<TechTag />` — small dark pill, used in hospitality back-of-house section
- `<EnquiryForm />` — contact form, sends via Resend, fields below
- `<CounterStat />` — animated count-up on scroll enter (Intersection Observer)
- `<SectionLabel />` — terra eyebrow text above headings
- `<TerraAccent />` — 42px wide, 4px tall terracotta bar (decorative, under eyebrow)

---

## Site Architecture — 5 Pages

### Page 1: Homepage (`/`)

**Purpose:** Convert any visitor type. Establish brand authority. Route to correct vertical.

**Sections (top to bottom):**
1. `<Nav />`
2. Hero — full-width image (terminus.png), dark overlay 38%, headline "Fitouts built to be remembered.", subline "National fitouts for retail, commercial and hospitality — concept to completion.", two CTAs: "START YOUR PROJECT" (terra button) + "VIEW PROJECTS" (ghost button)
3. Stats bar (black) — `150+` Projects delivered · `8` Years established · `5 states` Licensed nationally · `0` Site safety incidents — all CounterStat animated
4. Project grid — 3 columns: Stylerunner (Retail), DISSH Head Office (Commercial), The Terminus Hotel (Hospitality). Each with hover label overlay.
5. Verticals — 3 dark tiles: Retail / Commercial / Hospitality. Each links to vertical page.
6. Differentiators — cream background, 3 columns: In-house joinery · Senior-led delivery · Concept to completion
7. Client logos — scrolling row: Stylerunner, Nudie Jeans, DISSH, Kate Spade, Hugo Boss, Lovisa, Peter Alexander, Honey Birdette, Zambrero, The Terminus Hotel, RSL NSW, TAB
8. CTA strip — terra background: "Ready to start?" headline + "Enquire now" button
9. `<Footer />`

**MDX file:** `/content/home.mdx` — contains all copy, stats values, project references

---

### Page 2: Retail (`/retail`)

**Purpose:** Retail brands, franchise rollouts, national programs.

**Sections:**
1. `<Nav />` (Retail active)
2. Hero — stylerunner_hero.jpg, "Retail fitouts that deliver on brand."
3. Intro — "From flagship stores to national rollout programs..." + client name strip
4. Featured projects grid — Stylerunner, Nudie Jeans, X&O (3 col)
5. Capabilities — 3 cards: Flagship stores · Multi-site rollouts · Brand compliance
6. Client logos — retail brands
7. Enquiry CTA + `<EnquiryForm enquiryType="Retail" />`
8. `<Footer />`

**MDX file:** `/content/retail.mdx`

---

### Page 3: Commercial (`/commercial`)

**Purpose:** Corporate workplaces, developer display suites, health, education.

**Sections:**
1. `<Nav />` (Commercial active)
2. Hero — commercial1.jpg (DISSH stripes), "Commercial fitouts built to impress."
3. Intro + sectors list: Workplaces · Display suites · Health & medical · Education · Government & civic · Corporate HQ
4. Case study feature — The Eveleigh (Broadbeach): "Developer display suite. Delivered in 4.5 weeks." — eveleigh.png full-width
5. Project grid — DISSH Head Office, commercial2.jpg, commercial_pro34.jpg
6. Enquiry CTA + `<EnquiryForm enquiryType="Commercial" />`
7. `<Footer />`

**MDX file:** `/content/commercial.mdx`

---

### Page 4: Hospitality (`/hospitality`)

**Purpose:** Restaurants, pubs, hotels, QSR — with back-of-house technical authority.

**Sections:**
1. `<Nav />` (Hospitality active)
2. Hero — terminus.png, "Hospitality fitouts that perform."
3. Intro — "Front-of-house design. Back-of-house engineering. Delivered by specialists."
4. Client strip — Zambrero · The Terminus Hotel · The King Hotel · RSL NSW · TAB · Zarraffa's Coffee
5. Technical expertise — dark band with TechTags: Commercial kitchens · 3-phase power · Grease traps · Exhausts · Hydraulics · Drainage · Waste · Fire
6. Featured project — The Terminus Hotel (full-width split image)
7. Enquiry CTA + `<EnquiryForm enquiryType="Hospitality" />`
8. `<Footer />`

**MDX file:** `/content/hospitality.mdx`

---

### Page 5: Partners (`/partners`)

**Purpose:** Architects, interior designers, project managers — peer-to-peer tone.
This page does NOT exist on the current site. It is new.

**Tone:** Not a sales page. Peer to peer. "Delivery partner" language throughout.

**Sections:**
1. `<Nav />` (Partners active)
2. Hero — dark background, commercial1.jpg right side, text-first left: "ARCHITECTS · INTERIOR DESIGNERS · PROJECT MANAGERS" eyebrow, headline "Your delivery partner. Not another contractor."
3. Three value props (cream cards):
   - 01 Protect design intent — "We build what you designed. Senior trade-qualified team, in-house joinery — no substitutions without approval."
   - 02 Early-stage input — "Involve us at concept stage. Buildability advice, cost guidance and program certainty before you tender."
   - 03 Referral revenue stream — "Refer a project, we handle the rest. We acknowledge your role and keep you informed throughout delivery."
4. How it works — dark band: 01 Introduce yourself · 02 We meet and align · 03 Refer a live project · 04 We deliver — you're kept in the loop
5. Partner enquiry form — `<EnquiryForm enquiryType="Partner" />` — fields: Name, Practice / Firm, Email, Project type (text)
6. Licensed note: "Licensed in VIC, QLD, SA, ACT and WA. Tasmania available on request."
7. `<Footer />`

**MDX file:** `/content/partners.mdx`

---

## Lead Router API

All form submissions go to a single serverless endpoint: `/api/leads`

```typescript
// POST /api/leads
// Body:
{
  firstName: string
  lastName?: string
  email: string
  phone?: string
  enquiryType: "Retail" | "Commercial" | "Hospitality" | "Partner" | "General"
  projectDescription?: string
  source: "website" | "meta" | "linkedin"
  utmCampaign?: string
  utmMedium?: string
  utmSource?: string
}
```

**What the endpoint does:**
1. Creates/upserts contact in Attio (fields: First Name, Last Name, Email, Phone, Enquiry Type, Lead Source, UTM Campaign, UTM Medium, UTM Source)
2. Moves contact to "Contacted" pipeline stage
3. Sends acknowledgement email via Resend to the submitter
4. Sends internal notification to marcus@hallmarcfitouts.com.au + sean@omearagroup.com
5. Returns 200 OK

**Environment variables needed (set in Vercel dashboard):**
```
ATTIO_API_KEY=
RESEND_API_KEY=
NOTIFICATION_EMAIL_TO=marcus@hallmarcfitouts.com.au,sean@omearagroup.com
NOTIFICATION_EMAIL_FROM=noreply@hallmarcfitouts.com.au
```

---

## EnquiryForm Component

Fields:
- First name (required)
- Last name
- Email (required)
- Phone
- Project description (textarea)
- Hidden: enquiryType (passed as prop)
- Hidden: UTM params (captured from URL on page load, stored in state)

On submit:
- POST to `/api/leads`
- Show success state: "Thanks — we'll be in touch within one business day."
- Show error state: "Something went wrong. Please email us directly at hello@hallmarcfitouts.com.au"

Styling: cream2 background, cream3 borders, terra submit button, body font, no labels — placeholder text only.

---

## Content — Key Copy Rules

These apply to every page and every component. Never deviate:

- "licensed across Australia" — never "Australia wide" or "every state and territory"
- "concept to completion" or "concept through to completion" — for end-to-end positioning
- "founded" — never "incepted"
- Never use "boasts" anywhere
- Never reference JB Hi-Fi (not a client)
- Use "building licences" not "contractor licences"
- Use "we" — not "Hallmarc National Projects boasts..."
- Licensed states: VIC, QLD, SA, ACT and WA. "Tasmania available on request."
- Cm3 certified, zero site safety incidents — use when relevant
- The Eveleigh, Broadbeach: "developer display suite delivered in 4.5 weeks" — key commercial case study

**Company:** Hallmarc National Fitouts (also: Hallmarc National Projects)
**Founded:** 2016 by Marcus Hall
**Website:** hallmarcfitouts.com.au
**Contact email for forms:** hello@hallmarcfitouts.com.au

---

## Images

All images are in `/public/images/`. Use Next.js `<Image />` component with `sizes` prop for responsive loading.

### Project photography (all 1600–2500px, ready to use):

**Hospitality:**
- `terminus.png` — The Terminus Hotel, Yarrawonga VIC — HERO image for hospitality page and homepage
- `hospofitout.jpg` — Back-of-house hospitality construction — use in technical section

**Retail:**
- `stylerunner.jpg`, `stylerunner_hero.jpg`, `stylerunner2.jpg` — Stylerunner
- `xo1.jpg`, `xo2.jpg`, `xo3.jpg` — X&O retail (jeans wall — excellent for retail hero)
- `nudie1.jpg`, `nudie2.jpg` — Nudie Jeans
- `retail_xo.jpg` — X&O retail

**Commercial:**
- `commercial1.jpg` — DISSH Head Office (dramatic stripes — USE AS COMMERCIAL HERO)
- `commercial2.jpg`, `commercial3.jpg`, `commercial_pro34.jpg` — office fitouts
- `disshhero.png` — DISSH branded hero
- `eveleigh.png` — The Eveleigh display suite, Broadbeach (1917×1080)

**Team / Partners:**
- `hero1.jpg` — team meeting / project planning session — use on Partners page

### Hallmarc Logo

The logo has three elements: HM icon (orange tile, tilted), lowercase "hallmarc" wordmark, "NATIONAL FITOUTS" subtext — all in GT Eesti.

- **Vector source:** `/HallMarc/Marketing Folder/Working Files/Hallmarc-Brand_v1.fig` (Figma — export SVG from here)
- **PNG references:** LinkedIn profile (400×400 HM icon) and cover (1584×396 full wordmark) in `/HallMarc/Marketing Folder/Hallmarc-Socials/LinkedIn/`
- **For nav/footer:** Use SVG exported from Figma. If unavailable, render the wordmark in GT Eesti Display Medium with the HM icon as an inline SVG placeholder. Request export from ShadowBoxer if needed.

### Images still needed (flag to Sean before those sections go live):
- Zambrero project photo — no usable fitout photo exists, only a logo crop
- King Hotel project photo — only logo available
- Hallmarc logo SVG — export from `Hallmarc-Brand_v1.fig` in Figma, or request from ShadowBoxer

### Client logos (download from Squarespace CDN — all 162×162px PNGs, use as-is at small size):
Stylerunner, DISSH, Kate Spade, Hugo Boss, Lovisa, Peter Alexander, Honey Birdette,
Zambrero, Terminus, King Hotel, RSL NSW, TAB, Zarraffa's Coffee, Nudie Jeans

---

## Counter Stats (manually updated in MDX)

These are NOT live from Attio. They are static values in the MDX content file.
Update them by editing `/content/home.mdx`. They animate (count up) on scroll.

Current values:
- Projects delivered: 150+
- Years established: 8
- States licensed: 5
- Site safety incidents: 0

---

## File Structure

```
hallmarc-web/
├── CLAUDE.md                    ← this file
├── app/
│   ├── layout.tsx               ← root layout, Nav + Footer, Vercel Analytics
│   ├── page.tsx                 ← homepage
│   ├── retail/page.tsx
│   ├── commercial/page.tsx
│   ├── hospitality/page.tsx
│   ├── partners/page.tsx
│   └── api/
│       └── leads/route.ts       ← lead router endpoint
├── components/
│   ├── Nav.tsx
│   ├── Footer.tsx
│   ├── HeroSection.tsx
│   ├── StatsBar.tsx
│   ├── ProjectGrid.tsx
│   ├── VerticalCard.tsx
│   ├── TechTag.tsx
│   ├── EnquiryForm.tsx
│   ├── CounterStat.tsx
│   ├── SectionLabel.tsx
│   └── ClientLogoRow.tsx
├── content/
│   ├── home.mdx
│   ├── retail.mdx
│   ├── commercial.mdx
│   ├── hospitality.mdx
│   └── partners.mdx
├── public/
│   └── images/                  ← all project photography
├── tailwind.config.ts           ← design tokens
├── next.config.ts
└── .env.local                   ← API keys (never commit)
```

---

## Build Order for Claude Code Sessions

Work in this order. Each session should complete one step fully before moving to the next:

1. **Scaffold** — `npx create-next-app@latest . --typescript --tailwind --app` then configure tailwind.config.ts with design tokens
2. **Nav + Footer** — build and verify responsive on mobile
3. **Lead router API** — `/api/leads/route.ts` with Attio + Resend integration, test with curl
4. **EnquiryForm component** — wired to lead router, success/error states
5. **Homepage** — all sections, mobile-first
6. **Hospitality page** — highest priority vertical
7. **Partners page** — new page, no existing equivalent
8. **Retail page**
9. **Commercial page**
10. **QA pass** — Lighthouse score >90, all forms tested, mobile breakpoints

---

## Vercel Deployment

- Connect GitHub repo to Vercel on first push
- Set environment variables in Vercel dashboard (never in code)
- Preview deployments auto-generate for every PR
- Production deploys from `main` branch only
- Domain: hallmarcfitouts.com.au — DNS records updated in Squarespace domain panel at go-live
- Squarespace subscription cancelled only AFTER DNS has propagated and new site is confirmed live

---

## Contact

Sean O'Meara — sean@omearagroup.com — Strategic Partnerships & Operations
Marcus Hall — marcus@hallmarcfitouts.com.au — Managing Director
