# CollegePeak

The Peak of Strategic U.S. Admissions & Scholarships — a premium marketing website built to establish trust and convert visitors into booked strategy sessions.

Built with **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS**, **shadcn/ui**, **Framer Motion**, and **Lucide**.

---

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Build for production:

```bash
npm run build
npm run start
```

> Requires Node.js 18.18+ (Node 20 LTS recommended).

---

## Project structure

```
app/                     App Router pages + metadata, sitemap, robots
  page.tsx               Home (12 sections)
  mentorship/            Programs + comparison table
  success-system/        The 5-phase method
  success-stories/       Stats, testimonials, acceptance marquee
  resources/             Free resource grid
  faq/                   Full FAQ
  contact/               Contact + map
components/
  layout/                Navbar, Footer
  ui/                    shadcn primitives (button, badge, card, accordion)
  shared/                Reusable building blocks (GlassCard, Marquee, Reveal, …)
  sections/home/         Home page sections
  sections/mentorship/   Mentorship page sections
constants/               Site config (contact, CTAs), navigation
data/                    Universities, mentors, programs, content
lib/                     utils (cn, whatsappLink)
public/logos/            Drop official university SVGs here (see below)
```

## Editing content — no code required

Almost everything is data-driven. Update these files:

- **Contact info, WhatsApp, address, CTAs** → `constants/site.ts`
- **Navigation** → `constants/nav.ts`
- **Programs, pricing, comparison table** → `data/mentorship.ts`
- **Universities (acceptance marquee)** → `data/universities.ts`
- **Mentors** → `data/mentors.ts`
- **Success map, problem solver, testimonials, FAQ, resources, coming-soon** → `data/content.ts`

## University logos

By default the acceptance marquee and mentor cards render elegant **monogram crests** — this avoids shipping trademarked logo files. To use official marks:

1. Add the SVG at `public/logos/<slug>.svg` (slug matches `data/universities.ts` / `data/mentors.ts`).
2. Pass `hasLogo` to the `UniversityMark` in the relevant section — it swaps to `next/image` automatically.

## Design tokens

Colors, typography, radii, shadows, and animations live in `tailwind.config.ts` and `app/globals.css`.

| Token       | Value     |
| ----------- | --------- |
| Primary     | `#2563EB` |
| Background  | `#FFFFFF` |
| Surface     | `#F8FAFC` |
| Border      | `#E5E7EB` |
| Text (ink)  | `#0F172A` |
| Muted       | `#64748B` |

Fonts: **Sora** (display) + **Inter** (body), loaded via `next/font`.

## Accessibility & performance

- Semantic HTML, keyboard-focusable controls, visible focus rings.
- `prefers-reduced-motion` respected globally.
- Fonts self-hosted via `next/font`; images via `next/image`.
- Metadata, Open Graph, sitemap, and robots configured.

## Accessibility

- Semantic landmarks (`<main id="main">`), a "Skip to content" link, and one `<h1>` per page with an ordered heading hierarchy.
- Visible keyboard focus: buttons use a focus ring; links use a global `:focus-visible` outline.
- The comparison table uses `<th scope="col/row">`, a screen-reader `<caption>`, and hidden "Included / Not included" text so cells aren't icon-only.
- Motion respects the OS "reduce motion" setting globally via Framer Motion's `MotionConfig` plus CSS fallbacks.

## SEO

- Per-page `title`, `description`, and canonical URLs; Open Graph + Twitter cards from `constants/site.ts`.
- `EducationalOrganization` structured data in the root layout and `FAQPage` structured data on `/faq`.
- Generated `sitemap.xml` and `robots.txt`.

## Before launch — add real production assets

These are intentional placeholders (no brand art is shipped):

1. **`public/og.png`** — 1200×630 social share image (referenced by Open Graph / Twitter).
2. **`app/icon.png`** (or `favicon.ico`) — site favicon.
3. **`SITE.url`** in `constants/site.ts` — set to the real production domain so canonicals, sitemap, and OG URLs resolve.
4. Optional: drop official university SVGs into `public/logos/` (see below) to replace the monogram marks.

## Deploy

Optimized for **Vercel** — push to a Git repo and import. Set the production URL in `constants/site.ts` (`SITE.url`) so metadata and sitemap resolve correctly.
