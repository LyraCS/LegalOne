# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Vite + React + TypeScript + Tailwind v4 (user-confirmed choice; static single-page, no SSR/routing needs).

## Users

Indonesian business owners and entrepreneurs establishing a legal entity (PT Perorangan, PT, CV, Yayasan) or registering a trademark, who find the legal process intimidating and want it explained clearly. Secondary: existing small businesses seeking bundled legal, banking, branding, and tax services.

## Product Purpose

LegalOne is a notary & business-legalization service (pendirian PT Perorangan, PT, CV, Yayasan, pendaftaran merek) with bundled packages (dokumen legalitas, rekening giro, logo, virtual office, digital marketing, perpajakan, PKP). This website is its standalone identity — not a reskin/continuation of "Legal IND" — and exists to make the legal process feel clear, approachable, and premium, so visitors start a consultation.

## Positioning

A business/legal identity built on editorial craft — typography and storytelling carry credibility instead of badges, statistics, or template card-grids. The site is framed to be "read" (like a magazine feature) rather than "scrolled" (like a SaaS landing page), which differentiates it from generic legal/company-profile templates.

## Operating Context

- Single-page "issue/spread" format with numbered sections 01–07 (Tentang, Layanan, Paket, Proses, Kenapa, Tim, Tanya Jawab) plus masthead, hero/cover story, pull-quote interlude, dark closing/contact spread, and colophon footer.
- Services: pendirian PT Perorangan/PT/CV/Yayasan, pendaftaran merek, PKP, virtual office, perpajakan, rekening giro, logo, digital marketing, stempel.
- Package tiers Bronze/Silver/Gold, selectable by entity (PT Perorangan / PT / CV) with the PRD's real pricing (e.g. PT Perorangan Bronze Rp1.500.000, Silver Rp3.500.000, Gold Rp6.000.000; PT 5jt/7jt/9,5jt; CV 3,5jt/5,5jt/8jt). Silver is "Paling Banyak Dipilih".
- Contact via WhatsApp/email/address + a minimal underlined-input form (Nama, Jenis Usaha, No. HP, Pesan).

## Capabilities and Constraints

- Single-page site, each section its own component, composed into one default-exported `LegalOnePage` so sections can be reordered/hidden (e.g. Tim may be hidden pending data).
- React + Tailwind only; design tokens via CSS variables / Tailwind theme config — no hardcoded hex or custom CSS files.
- Editorial system only: 1px rule lines (ink at low opacity), numbered kickers, asymmetric grids, no drop-shadows, no rounded cards (max 2px), minimal icons, gold used only as a small accent.
- Responsive: asymmetric columns stack to one; masthead collapses to a simple hamburger; section-04 timeline becomes vertical; package tabs stay usable on mobile.
- Content is Bahasa Indonesia; source of truth is `prd-legalone-editorial.md`. Pricing in section 03 is real data; all other copy (address, WhatsApp, email, team, stats, notary license) is placeholder and must be tagged `{/* TODO: replace with real content */}`.
- Placeholder headline/copy examples are given in the PRD where no real text exists.

## Brand Commitments

- Name "LEGALONE", wordmark rendered as plain text (serif or bold sans), no logo box.
- Color tokens: ink `#0F1B3C`, paper `#FBFAF7`, accent gold `#C9A227`, muted `#6B7280`, primary-dark `#0A1329`. Navy is the dominant text/rule color; gold is a small accent only (section numbers, underlines, quote marks, CTA links) — never a large fill.
- Typography: editorial serif display (Fraunces or Playfair Display) for hero statement, pull-quotes, big section titles; clean humanist sans (Inter or Public Sans) for body/UI; small uppercase wide-tracked sans for kickers/labels.
- Editorial design language throughout (magazine/business-press feel, The Economist/Monocle spirit): sharp corners, generous whitespace, thin rule lines, no heavy gradients, asymmetric cropping for imagery.

## Evidence on Hand

- `prd-legalone-editorial.md` — full structure, copy placeholders, real pricing, color/typography tokens.
- No real contact details, team names, addresses, stats, testimonials, or brand photo assets yet. These must not be fabricated — all such content stays as clearly-marked placeholders.

## Product Principles

1. Credibility through craft — typography and layout carry authority; badges and shouting stats are rejected.
2. Clarity over intimidation — legal process is framed as an easy read, never as jargon.
3. Fictional warmth, editorial restraint — premium and poised even as a young firm.
4. Functional, not decorative — every section serves a real decision (choose entity, pick package, start consultation) even when framed narratively.
5. Honest placeholders — no invented contacts, team, or proof until real data exists.