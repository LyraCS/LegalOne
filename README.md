# LEGALONE

Single-page business/legal identity for LegalOne, a notary and business-legalization service. The site is framed like an editorial magazine "issue", not a template SaaS landing page, so the legal process reads as approachable and premium.

## Tech Stack

- Vite 6
- React 19 + TypeScript
- Tailwind CSS v4 (via `@tailwindcss/vite`)

## Getting Started

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
  components/          one component per page section
    Masthead, Hero, About, Services, Pricing,
    Process, PullQuote, Why, Team, FAQ, Contact, Colophon
  App.tsx              composes all sections into <LegalOnePage />
  index.css            design tokens & shared utilities (.btn-gold, kicker)
  img/                 static raster assets (e.g. founder.jpg)
public/
  icon-scale.png       favicon / brand mark
index.html             HTML shell, favicon, fonts
```

## Sections

1. **Tentang (About)** with drop-cap lead
2. **Layanan (Services)** priced service cards
3. **Paket (Pricing)** Bronze / Silver / Gold tiers with real pricing
4. **Proses (Process)** horizontal/vertical timeline
5. **PullQuote** editorial interlude
6. **Kenapa (Why)** 2x2 rule-line grid
7. **Tim (Team)** founder profile
8. **Tanya Jawab (FAQ)** accordion
9. **Kontak (Contact)** WhatsApp / maps / form

## Design Tokens

Defined in `src/index.css` via Tailwind `@theme`:

| Token          | Value     |
| -------------- | --------- |
| `--color-ink`  | `#0F1B3C` |
| `--color-paper`| `#FBFAF7` |
| `--color-accent`| `#C9A227` |
| `--color-muted`| `#6B7280` |

## Content Note

Site copy is Bahasa Indonesia. Pricing in section 03 is real data; placeholder items (address, WhatsApp, email, team, stats) are marked with `{/* TODO: replace with real content */}`. Source of truth: `prd-legalone-editorial.md`.
