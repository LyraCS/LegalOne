# PRD: LegalOne — Editorial-Style Website

## 1. Overview
**LegalOne** adalah jasa notaris & konsultan legalitas usaha (pendirian PT Perorangan, PT, CV, Yayasan, serta pendaftaran merek) dengan paket bundling lengkap (dokumen legalitas, rekening giro, logo usaha, virtual office, digital marketing, perpajakan, PKP). Project ini dianggap sebagai identitas baru yang berdiri sendiri — bukan lanjutan/reskin dari Legal IND — dengan pendekatan desain yang jauh dari template company-profile/SaaS-landing yang generik.

Alih-alih grid card serba sama dan hero-stat-testimonial yang biasa dipakai firma legal, LegalOne dibangun dengan **bahasa visual editorial** — seperti majalah bisnis/hukum (mirip The Economist, Monocle, atau editorial fintech modern) — supaya terasa lebih matang, personal, dan "dibaca" bukan cuma "di-scroll".

## 2. Goals
- Membangun kredibilitas lewat **craft tipografi & storytelling**, bukan lewat badge/statistik yang berteriak
- Membuat proses legal yang biasanya terasa kaku/menakutkan jadi terasa **jelas dan approachable**, seperti membaca artikel penjelasan yang baik
- Tetap menyampaikan semua informasi fungsional (jenis badan usaha, paket, harga, kontak) — tapi dibingkai sebagai "bacaan", bukan "brosur"
- Terlihat premium & percaya diri meski firma masih baru — kesan editorial otomatis membangun otoritas
- CTA tetap jelas dan actionable meski framing-nya lebih naratif

## 3. Design Direction: Editorial
**Analogi**: bayangkan halaman ini sebagai cover story + feature spread di majalah bisnis, bukan landing page SaaS.

Elemen editorial yang dipakai:
- **Kicker/eyebrow label** di atas tiap section (kayak label kategori majalah — mis. "01 — TENTANG KAMI", "PANDUAN PAKET")
- **Large pull-quote style headline** di hero — bukan headline generik dengan 2 tombol CTA sejajar, tapi statement besar yang terasa seperti judul artikel
- **Asymmetric grid** — teks dan visual tidak selalu simetris/center-aligned, ada rasa "layout editor" yang disengaja
- **Nomor section berurutan** (01, 02, 03...) seperti daftar isi majalah/edisi
- **Pull quotes** — kutipan besar di tengah teks (bisa dari partner/notaris, atau statement value proposition) dengan tanda kutip besar dekoratif
- **Byline-style** untuk tim (bukan card generik, tapi kayak "ditulis oleh"/kredit editorial)
- **Footnote-style detail** — info kecil (syarat, catatan) diberi treatment seperti catatan kaki artikel, bukan disclaimer generik
- **Serif + sans pairing** — serif besar untuk headline/pull-quote (kesan "diterbitkan"/dicetak), sans-serif bersih untuk body & UI
- **Garis pembatas tipis (rule lines)** antar section, bukan card berbayang/shadow — kesan cetak/print, bukan digital app
- **Warna**: tetap navy (`#0F1B3C`) + gold (`#C9A227`) dari brand LegalOne, tapi dipakai lebih minim/editorial — banyak putih/krem, navy untuk teks, gold sebagai aksen kecil (garis bawah, nomor section, satu kata di headline) — bukan block warna besar

## 4. Color Tokens
| Token | Hex | Penggunaan |
|---|---|---|
| `--color-ink` | `#0F1B3C` (navy) | Body text, heading, garis pembatas — jadi warna dominan (ganti peran hitam) |
| `--color-paper` | `#FBFAF7` | Background utama — off-white hangat, kesan kertas majalah, bukan putih pure digital |
| `--color-accent` | `#C9A227` (gold) | Aksen kecil: nomor section, garis bawah kata, kutip dekoratif, CTA — dipakai sangat selektif |
| `--color-muted` | `#6B7280` | Caption, footnote, metadata (nama section, tanggal, dsb) |
| `--color-primary-dark` | `#0A1329` | Section kontak / dark closing spread |

## 5. Typography
- **Display/Headline**: Serif tebal editorial (contoh: Fraunces, Freight Display, Tiempos Headline, atau Playfair Display) — dipakai di hero statement, pull-quote, judul section besar
- **Body**: Sans-serif humanis yang nyaman dibaca panjang (contoh: Inter, Source Sans, Public Sans)
- **Kicker/label/metadata**: Sans-serif kecil, tracked/letter-spaced lebar, uppercase (contoh: "01 — LAYANAN")
- Hierarki dibuat lewat **ukuran & kontras serif-sans**, bukan cuma bold/warna

## 6. Site Structure (Single Page, "Issue/Spread" Format)

### 6.1 Masthead (Navbar, gaya kop majalah)
- Kiri: wordmark "LEGALONE" (serif atau bold sans, minimal — bukan logo box seperti versi lama)
- Tengah/kanan: nav sebagai daftar singkat, dipisah garis vertikal tipis — `Tentang` · `Layanan` · `Paket` · `Proses` · `Kontak`
- Tanggal/edisi kecil di pojok (opsional, kosmetik editorial) — mis. "Edisi 2026" atau "Panduan Legalitas Usaha"
- CTA tidak berupa tombol besar mencolok — bisa berupa link bergaris bawah gold "Mulai Konsultasi →"

### 6.2 Hero — "Cover Story"
- Kicker kecil di atas: "PANDUAN MENDIRIKAN USAHA ANDA" atau "EDISI: LEGALITAS USAHA 2026"
- Headline besar serif, seperti judul artikel utama:
  - *Placeholder: "Usaha Anda, Legal Sejak Halaman Pertama."*
- Sub-deck (1 paragraf, seperti dek pembuka artikel majalah):
  - *Placeholder: "Dari akta pendirian hingga rekening perusahaan — LegalOne menyusun setiap langkah legalitas usaha Anda menjadi satu alur yang jelas, tanpa istilah yang membingungkan."*
- Tidak ada dua tombol CTA sejajar besar — cukup 1 link bergaris bawah gold: "Mulai Konsultasi Gratis →"
- Visual: foto editorial (bukan stok generik tersenyum ke kamera) — bisa foto dokumen/tanda tangan/detail kerja notaris yang di-crop artistik, ditempatkan asimetris (mis. mengisi 40% lebar, bukan full-bleed penuh)

### 6.3 01 — Tentang Kami
- Kicker: "01 — TENTANG KAMI"
- Layout asimetris: paragraf pembuka besar (drop-cap di huruf pertama, opsional) di satu kolom, sementara 3 value pillar ditulis sebagai list bernomor kecil di kolom sempit sebelahnya — bukan 3 card sejajar
- Placeholder copy:
  - *"LegalOne berdiri dari satu pengamatan sederhana: banyak usaha tertunda bukan karena idenya kurang baik, tapi karena urusan legalitasnya terasa rumit. Kami menyusun ulang proses itu menjadi sesuatu yang bisa dijalani, bukan ditakuti."*
- 3 pillar (format list bernomor, bukan icon card): Integritas, Responsif, Berpengalaman — masing-masing 1 kalimat penjelas

### 6.4 02 — Layanan (Jenis Badan Usaha)
- Kicker: "02 — LAYANAN"
- Bukan grid 5 kartu ikon — melainkan **daftar editorial bernomor** (seperti daftar isi), tiap entri: nomor + nama badan usaha (serif, besar) + deskripsi singkat 1 baris di sebelah kanan, dipisah rule line tipis
  1. PT Perorangan — pendirian cepat untuk usaha mikro/kecil
  2. PT (Perseroan Terbatas) — badan usaha berbadan hukum skala menengah-besar
  3. CV (Persekutuan Komanditer) — cocok untuk usaha keluarga/kemitraan
  4. Yayasan — badan hukum untuk kegiatan sosial/kemanusiaan
  5. Pendaftaran Merek Usaha — perlindungan hak merek dagang/jasa
- Hover/tap tiap baris bisa scroll-link ke detail di section Paket

### 6.5 03 — Paket (Pricing sebagai "Panduan Memilih")
- Kicker: "03 — PANDUAN PAKET"
- Framing beda dari pricing table SaaS biasa: dibuka dengan 1-2 kalimat editorial *"Setiap usaha punya titik mulai yang berbeda. Berikut tiga cara kami membantu Anda memulai — dari yang paling ringkas, hingga yang paling lengkap."*
- Tab pemilihan entitas: **PT Perorangan | PT | CV** (teks sederhana dengan underline gold saat aktif, bukan pill button rame)
- Tiap tier (Bronze/Silver/Gold) ditampilkan sebagai **kolom editorial**, bukan card bershadow — dipisah garis vertikal tipis, dengan harga besar di serif dan checklist dalam bentuk teks rapi (bukan icon-heavy)

  **PT Perorangan**: Bronze Rp1.500.000 · Silver Rp3.500.000 · Gold Rp6.000.000
  **PT**: Bronze Rp5.000.000 · Silver Rp7.000.000 · Gold Rp9.500.000
  **CV**: Bronze Rp3.500.000 · Silver Rp5.500.000 · Gold Rp8.000.000

  Isi tiap tier (konsisten, makin lengkap ke atas):
  - Bronze: Dokumen Legalitas, Rekening Giro, Logo Perusahaan
  - Silver: + Virtual Office 1 Tahun / Digital Marketing (Social Media Marketing, Landing Page, Facebook Ads & Google Business)
  - Gold: + PKP

  Silver ditandai bukan dengan badge mencolok, tapi dengan label kecil bergaris bawah gold: "Paling Banyak Dipilih"

- Di bawah, "Layanan Tambahan" ditulis sebagai list singkat 2 kolom (bukan card): Pendirian PT Perorangan (Rp1,5 Jt), Pendirian PT (Rp5 Jt), Pendirian CV (Rp3,5 Jt), Pendirian Yayasan (Rp3,5 Jt), Pendaftaran Merek (Rp3.500.000/kelas), PKP (Rp2,5 Jt), Virtual Office (Rp2 Jt/Tahun), Perpajakan (Rp1,5 Jt/Bulan)
- Catatan bonus ditulis sebagai footnote kecil: *"Setiap paket disertai rekening giro perusahaan, logo perusahaan premium, dan desain stempel."*

### 6.6 04 — Proses
- Kicker: "04 — CARA KERJA"
- Ditampilkan sebagai **linimasa horizontal tipis** (garis dengan 4 titik), bukan 4 box angka besar — tiap titik: angka kecil + label + 1 kalimat
  1. Konsultasi — diskusikan kebutuhan badan usaha Anda
  2. Pilih Paket — sesuaikan dengan skala & anggaran
  3. Proses Legalitas — tim kami mengurus dokumen & administrasi
  4. Usaha Siap Jalan — terima dokumen lengkap & fasilitas pendukung

### 6.7 Pull Quote (interlude, di antara section)
- 1 kutipan besar serif, ditengah halaman, dengan tanda kutip dekoratif gold
- Placeholder: *"Legalitas bukan garis akhir sebelum usaha dimulai — itu fondasi yang membuatnya bisa bertahan."*
- Bisa diberi atribusi placeholder: "— Tim LegalOne" (atau nama partner nanti)

### 6.8 05 — Kenapa LegalOne
- Kicker: "05 — KENAPA LEGALONE"
- 4 poin ditulis sebagai **daftar bernomor dengan penjelasan singkat**, bukan stat box angka besar mencolok:
  - Usaha yang sudah berhasil didirikan (angka placeholder, ditulis wajar dalam kalimat, bukan mega-font)
  - Estimasi proses dalam hitungan hari kerja
  - Satu paket, semua kebutuhan — bukan potongan-potongan layanan terpisah
  - Konsultasi awal tanpa biaya

### 6.9 06 — Tim
- Kicker: "06 — TIM"
- Format byline editorial: foto kecil (atau silhouette placeholder) + nama + "Notaris & PPAT" ditulis seperti kredit penulis di majalah, bukan card besar
- Bisa 1-2 profil kunci saja untuk awal

### 6.10 07 — Tanya Jawab
- Kicker: "07 — TANYA JAWAB"
- Format Q&A sebagai teks rapi (tidak harus accordion tersembunyi — bisa expanded list dengan garis pembatas, lebih sesuai nuansa "artikel FAQ")
- 5 pertanyaan placeholder seputar PT Perorangan vs PT, lama proses, virtual office untuk NIB, PKP, upgrade paket

### 6.11 Penutup / Kontak — "Closing Spread"
- Full-bleed background navy gelap (`--color-primary-dark`), berperan sebagai "halaman penutup edisi"
- Headline serif besar putih: *"Mulai Babak Legal Usaha Anda."*
- Info kontak ditulis rapi (bukan form kompleks): alamat, WhatsApp, email — dengan 1 CTA garis bawah gold "Hubungi Kami →"
- Form kontak singkat opsional di bawahnya (Nama, Jenis Usaha, No. HP, Pesan) dengan style minimal (garis bawah input, bukan box border tebal)

### 6.12 Colophon (Footer, gaya kolofon majalah)
- Wordmark kecil + satu baris keterangan (kayak kolofon majalah: "Diterbitkan oleh LegalOne")
- Nav ringkas + social icons kecil
- Copyright + info izin notaris (jika perlu ditampilkan)

## 7. Layout & Visual Style Notes
- **Rule lines** (garis horizontal/vertikal tipis, `1px`, warna `--color-ink` opacity rendah) jadi pengganti card border/shadow di banyak tempat
- Whitespace besar, margin generous — kesan halaman majalah yang "bernapas", bukan padat seperti landing page konversi tinggi
- Section numbering (01–07) konsisten di seluruh halaman sebagai navigasi visual sekaligus struktur "edisi"
- Hindari drop-shadow, gradient berat, atau ikon-berat — ganti dengan tipografi & garis sebagai elemen dekoratif utama
- Foto (kalau dipakai) di-treat dengan crop asimetris/editorial, bukan foto stok tersenyum simetris penuh frame
- Sudut elemen: sharp, tanpa rounded — konsisten dengan nuansa cetak/editorial

## 8. Responsive Behavior
- Desktop: kolom asimetris (mis. 60/40 atau 70/30) untuk hero, about, dan pull-quote
- Mobile: kolom asimetris collapse jadi 1 kolom stack, tapi kicker/nomor section tetap dipertahankan sebagai penanda visual; linimasa proses di section 04 jadi vertikal
- Nav masthead jadi hamburger sederhana di mobile, tapi tetap minim (bukan mega-menu)

## 9. Content Status
- Semua copy di atas adalah placeholder — perlu direview dan diganti data asli (statistik, alamat, kontak resmi, profil tim)
- Struktur section bernomor tetap modular — section yang belum ada datanya (mis. Tim) bisa disembunyikan tanpa merusak alur "edisi"

## 10. Deliverables
- Landing page single-page (React + Tailwind)
- Warna & tipografi sebagai design token (CSS variable), bukan hex/font hardcode
- Wordmark sederhana "LEGALONE" (teks, bukan logo box) dipakai sementara sampai logo final ada
- Semua placeholder ditandai jelas dengan komentar kode

---

## Prompt Version (untuk OpenCode)

```
Build a single-page responsive website (React + Tailwind CSS) for "LegalOne", an Indonesian notary & business legalization service (helps clients establish PT Perorangan, PT, CV, Yayasan, and register trademarks, via bundled packages including legal documents, a company bank account, logo design, virtual office, digital marketing, tax consultation, and PKP processing).

This is a FRESH, standalone project — do not reuse any prior "company profile" template patterns (no card grids, no icon-boxes, no shadowed pricing cards, no stat-badge hero). Instead, build this in an EDITORIAL / MAGAZINE-STYLE design language — think a business/legal magazine feature spread (in the spirit of The Economist or Monocle), not a SaaS landing page.

All copy in Indonesian (Bahasa Indonesia), placeholder content clearly marked with {/* TODO: replace with real content */}.

--- DESIGN TOKENS ---
--color-ink: #0F1B3C        /* navy — dominant text/heading/rule-line color, replaces black */
--color-paper: #FBFAF7      /* warm off-white background, like magazine paper, not pure white */
--color-accent: #C9A227     /* gold — used sparingly: section numbers, underlines, pull-quote marks, CTA links */
--color-muted: #6B7280      /* captions, footnotes, metadata */
--color-primary-dark: #0A1329  /* dark navy for the closing/contact spread */

--- TYPOGRAPHY ---
- Display/headline font: an editorial serif (use a Google Font like Fraunces or Playfair Display) for hero statement, pull-quotes, and large section titles
- Body font: a clean humanist sans-serif (e.g. Inter or Public Sans)
- Kicker/label font: small sans-serif, uppercase, wide letter-spacing, used for section numbers/eyebrows like "01 — TENTANG KAMI"

--- CORE EDITORIAL PATTERNS TO USE THROUGHOUT ---
- Numbered section kickers (01, 02, 03...) above every major section title, styled like magazine department labels
- Thin 1px rule lines (using --color-ink at low opacity) as dividers instead of card borders, box-shadows, or rounded card backgrounds
- Asymmetric grid layouts (e.g. 60/40 or 70/30 column splits) instead of centered/symmetric card grids — vary this across sections so it doesn't feel templated
- No drop shadows, no heavy gradients, minimal icon use — typography and rule lines carry the visual weight
- Sharp corners throughout (no border-radius, or very minimal 2px max)
- Gold is used ONLY as a small accent — underlines on links/active states, section number color, quote marks, never as a large fill/background

--- SECTIONS TO BUILD, IN ORDER ---

1. Masthead (navbar) — "LEGALONE" wordmark in serif or bold sans on the left (plain text, no logo box), nav items (Tentang · Layanan · Paket · Proses · Kontak) separated by thin vertical rule lines, no filled CTA button — instead a small gold underlined text link "Mulai Konsultasi →" on the right. Optional small cosmetic label in the corner like "Edisi 2026" or "Panduan Legalitas Usaha".

2. Hero ("cover story") — small kicker above headline: "PANDUAN MENDIRIKAN USAHA ANDA". Large serif headline (placeholder: "Usaha Anda, Legal Sejak Halaman Pertama."). One paragraph sub-deck below (placeholder: "Dari akta pendirian hingga rekening perusahaan — LegalOne menyusun setiap langkah legalitas usaha Anda menjadi satu alur yang jelas, tanpa istilah yang membingungkan."). Single gold underlined CTA link "Mulai Konsultasi Gratis →" — no button pair. Layout asymmetric: text takes ~60%, an image placeholder (cropped, editorial-style, not full-bleed) takes ~40%, offset rather than centered.

3. Section 01 — Tentang Kami. Kicker "01 — TENTANG KAMI". Asymmetric two-column: a large opening paragraph (optional drop-cap on first letter) in the wider column, with 3 numbered value pillars (Integritas, Responsif, Berpengalaman — each with a one-line description) listed as a simple numbered list in the narrow column, not icon cards.

4. Section 02 — Layanan. Kicker "02 — LAYANAN". An editorial numbered list (not a card grid) of the 5 business entity types, each row: number + entity name in serif + one-line description on the right, separated by thin rule lines: PT Perorangan, PT (Perseroan Terbatas), CV (Persekutuan Komanditer), Yayasan, Pendaftaran Merek Usaha.

5. Section 03 — Paket. Kicker "03 — PANDUAN PAKET". Open with an editorial framing line: "Setiap usaha punya titik mulai yang berbeda. Berikut tiga cara kami membantu Anda memulai — dari yang paling ringkas, hingga yang paling lengkap." Build a simple text-based tab selector (underlined, not pill buttons) for "PT Perorangan | PT | CV". Each tab reveals three tiers (Bronze/Silver/Gold) as editorial columns separated by thin vertical rules (NOT shadowed cards) — large serif price, plain text checklist (not icon-heavy). Use this real data:
   - PT Perorangan: Bronze Rp1.500.000 (Dokumen Legalitas, Rekening Giro, Logo Perusahaan) · Silver Rp3.500.000 (+ Virtual Office 1 Tahun / Digital Marketing: Social Media Marketing, Landing Page, Facebook Ads & Google Business) · Gold Rp6.000.000 (+ PKP)
   - PT: Bronze Rp5.000.000 · Silver Rp7.000.000 · Gold Rp9.500.000 (same component pattern)
   - CV: Bronze Rp3.500.000 · Silver Rp5.500.000 · Gold Rp8.000.000 (same component pattern)
   Mark Silver with a small gold-underlined label "Paling Banyak Dipilih" instead of a loud badge.
   Below, add "Layanan Tambahan" as a plain 2-column text list (not cards): Pendirian PT Perorangan (Rp1,5 Jt), Pendirian PT (Rp5 Jt), Pendirian CV (Rp3,5 Jt), Pendirian Yayasan (Rp3,5 Jt), Pendaftaran Merek (Rp3.500.000/kelas), PKP (Rp2,5 Jt), Virtual Office (Rp2 Jt/Tahun), Perpajakan (Rp1,5 Jt/Bulan). Add a small footnote-style line: "Setiap paket disertai rekening giro perusahaan, logo perusahaan premium, dan desain stempel."

6. Section 04 — Proses. Kicker "04 — CARA KERJA". A thin horizontal timeline with 4 small dots/markers (vertical on mobile), each with a number, short label, and one-line description: Konsultasi, Pilih Paket, Proses Legalitas, Usaha Siap Jalan.

7. Pull-quote interlude — a large centered serif quote with decorative gold quotation marks: "Legalitas bukan garis akhir sebelum usaha dimulai — itu fondasi yang membuatnya bisa bertahan." with small attribution "— Tim LegalOne" below.

8. Section 05 — Kenapa LegalOne. Kicker "05 — KENAPA LEGALONE". 4 points as a numbered list with short explanatory sentences (not big stat-number boxes): usaha yang sudah berhasil didirikan, estimasi proses dalam hitungan hari kerja, satu paket untuk semua kebutuhan, konsultasi awal tanpa biaya.

9. Section 06 — Tim. Kicker "06 — TIM". Editorial byline style: small photo/avatar placeholder + name + "Notaris & PPAT" styled like a magazine author credit, not a card grid. 1-2 placeholder profiles.

10. Section 07 — Tanya Jawab. Kicker "07 — TANYA JAWAB". Present as an expanded Q&A list separated by rule lines (can still be collapsible/accordion, but styled plainly, not as boxed FAQ cards). 5 placeholder questions about PT Perorangan vs PT, process duration, virtual office for NIB registration, what PKP is, upgrading packages later.

11. Closing/Contact spread — full-bleed dark navy (--color-primary-dark) background, white text. Large serif headline "Mulai Babak Legal Usaha Anda." Contact info listed plainly (address, WhatsApp, email placeholders) with a single gold underlined CTA "Hubungi Kami →". A minimal contact form below (Nama, Jenis Usaha, No. HP, Pesan) with underlined inputs, not boxed/bordered inputs.

12. Colophon (footer) — small wordmark + one line like "Diterbitkan oleh LegalOne", short nav links, small social icons, copyright and notary license placeholder.

--- REQUIREMENTS ---
- Use Tailwind CSS utility classes only, referencing the color tokens via a theme config (no hardcoded hex, no custom CSS files).
- Fully responsive: masthead collapses to a simple hamburger on mobile (not a mega-menu), asymmetric columns stack to single-column, the section 04 timeline becomes vertical on mobile, package tabs remain usable via horizontal scroll or stacked selection.
- Mark all placeholder text with {/* TODO: replace with real content */}.
- Each section as its own component, composed into a single default-exported CompanyProfile (or LegalOnePage) component, so sections can be reordered/hidden later.
- No drop-shadows, no rounded cards, no icon-heavy grids — the editorial/magazine feel (rule lines, serif display type, numbered kickers, asymmetric layout) must be consistent across every section, not just the hero.
```
