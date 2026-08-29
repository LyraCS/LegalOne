import { useState } from "react";
import SectionHeading from "./SectionHeading";

type EntityKey = "perorangan" | "pt" | "cv";

type Tier = {
  name: string;
  price: string;
  featured?: boolean;
  items: string[];
};

type Entity = { label: string; tiers: Tier[] };

const ENTITIES: Record<EntityKey, Entity> = {
  perorangan: {
    label: "PT Perorangan",
    tiers: [
      {
        name: "Bronze",
        price: "Rp1.500.000",
        items: ["Dokumen Legalitas", "Rekening Giro Perusahaan", "Logo Perusahaan"],
      },
      {
        name: "Silver",
        price: "Rp3.500.000",
        featured: true,
        items: [
          "Dokumen Legalitas",
          "Rekening Giro Perusahaan",
          "Logo Perusahaan",
          "Virtual Office 1 Tahun",
          "Digital Marketing: Social Media Marketing, Landing Page, Facebook Ads & Google Business",
        ],
      },
      {
        name: "Gold",
        price: "Rp6.000.000",
        items: [
          "Dokumen Legalitas",
          "Rekening Giro Perusahaan",
          "Logo Perusahaan",
          "Virtual Office 1 Tahun",
          "Digital Marketing: Social Media Marketing, Landing Page, Facebook Ads & Google Business",
          "PKP",
        ],
      },
    ],
  },
  pt: {
    label: "PT",
    tiers: [
      { name: "Bronze", price: "Rp5.000.000", items: ["Dokumen Legalitas", "Rekening Giro Perusahaan", "Logo Perusahaan"] },
      {
        name: "Silver",
        price: "Rp7.000.000",
        featured: true,
        items: [
          "Dokumen Legalitas",
          "Rekening Giro Perusahaan",
          "Logo Perusahaan",
          "Virtual Office 1 Tahun",
          "Digital Marketing: Social Media Marketing, Landing Page, Facebook Ads & Google Business",
        ],
      },
      {
        name: "Gold",
        price: "Rp9.500.000",
        items: [
          "Dokumen Legalitas",
          "Rekening Giro Perusahaan",
          "Logo Perusahaan",
          "Virtual Office 1 Tahun",
          "Digital Marketing: Social Media Marketing, Landing Page, Facebook Ads & Google Business",
          "PKP",
        ],
      },
    ],
  },
  cv: {
    label: "CV",
    tiers: [
      { name: "Bronze", price: "Rp3.500.000", items: ["Dokumen Legalitas", "Rekening Giro Perusahaan", "Logo Perusahaan"] },
      {
        name: "Silver",
        price: "Rp5.500.000",
        featured: true,
        items: [
          "Dokumen Legalitas",
          "Rekening Giro Perusahaan",
          "Logo Perusahaan",
          "Virtual Office 1 Tahun",
          "Digital Marketing: Social Media Marketing, Landing Page, Facebook Ads & Google Business",
        ],
      },
      {
        name: "Gold",
        price: "Rp8.000.000",
        items: [
          "Dokumen Legalitas",
          "Rekening Giro Perusahaan",
          "Logo Perusahaan",
          "Virtual Office 1 Tahun",
          "Digital Marketing: Social Media Marketing, Landing Page, Facebook Ads & Google Business",
          "PKP",
        ],
      },
    ],
  },
};

const ADDONS = [
  { name: "Pendirian PT Perorangan", price: "Rp1,5 Jt" },
  { name: "Pendirian PT", price: "Rp5 Jt" },
  { name: "Pendirian CV", price: "Rp3,5 Jt" },
  { name: "Pendirian Yayasan", price: "Rp3,5 Jt" },
  { name: "Pendaftaran Merek", price: "Rp3.500.000/kelas" },
  { name: "PKP", price: "Rp2,5 Jt" },
  { name: "Virtual Office", price: "Rp2 Jt/Tahun" },
  { name: "Perpajakan", price: "Rp1,5 Jt/Bulan" },
];

export default function Pricing() {
  const [active, setActive] = useState<EntityKey>("perorangan");
  const entity = ENTITIES[active];

  return (
    <section id="paket" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-16 md:px-10 md:py-24">
      <SectionHeading num="03" label="PANDUAN PAKET" title="Tiga Cara Memulai, dari yang Paling Ringkas." />

      {/* TODO: replace with real content */}
      <p className="mt-6 max-w-2xl text-[16px] leading-relaxed text-ink/70">
        Semua paket sudah termasuk dokumen legalitas, rekening giro perusahaan, dan logo
        premium. Pilih sesuai skala usaha Anda · harga final, tanpa biaya tersembunyi.
      </p>

      <div className="mt-12" role="tablist" aria-label="Pilih jenis badan usaha">
        {(Object.keys(ENTITIES) as EntityKey[]).map((key, i) => (
          <span key={key}>
            {i > 0 && (
              <span aria-hidden="true" className="px-4 text-muted md:px-6">
                |
              </span>
            )}
            <button
              type="button"
              role="tab"
              aria-selected={active === key}
              onClick={() => setActive(key)}
              className={`border-b pb-1.5 text-[15px] font-semibold transition-colors ${
                active === key
                  ? "border-accent text-ink"
                  : "border-transparent text-muted hover:text-ink"
              }`}
            >
              {ENTITIES[key].label}
            </button>
          </span>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-1 items-stretch gap-6 md:grid-cols-3">
        {entity.tiers.map((tier) => (
          <div
            key={tier.name}
            className={`relative flex flex-col border border-ink/25 rounded-[2px] bg-paper p-7 md:p-8 ${
              tier.featured ? "border-ink" : ""
            }`}
          >
            {tier.featured && (
              <span className="absolute right-0 top-0 bg-accent px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-paper">
                Paling Banyak Dipilih
              </span>
            )}
            <h3 className="font-display text-xl font-semibold text-ink">{tier.name}</h3>
            <p className="mt-4 font-display text-4xl font-semibold tracking-tight text-ink md:text-[2.6rem] md:leading-none">
              {tier.price}
            </p>
            <ul className="mt-7 space-y-3">
              {tier.items.map((item) => (
                <li key={item} className="flex gap-3 text-[15px] leading-snug text-ink/75">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 16 16"
                    className="mt-[3px] h-4 w-4 shrink-0 text-accent"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M2.5 8.5 6 12 13.5 4.5" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <div className="grow" />
            <button
              type="button"
              className="btn-gold mt-8 w-full rounded-[2px]"
            >
              Pilih Paket Ini
            </button>
          </div>
        ))}
      </div>

      <div className="mt-16 border-t border-ink/15 pt-10 md:mt-20">
        <h3 className="kicker mb-8">LAYANAN TAMBAHAN</h3>
        <div className="grid grid-cols-1 gap-x-16 sm:grid-cols-2">
          {ADDONS.map((a) => (
            <div
              key={a.name}
              className="flex items-baseline justify-between border-b border-ink/10 py-3 text-[15px]"
            >
              <span className="text-ink/80">{a.name}</span>
              <span className="font-medium text-ink">{a.price}</span>
            </div>
          ))}
        </div>
        <p className="footnote mt-8">
          * Setiap paket disertai rekening giro perusahaan, logo perusahaan premium, dan
          desain stempel.
        </p>
      </div>
    </section>
  );
}