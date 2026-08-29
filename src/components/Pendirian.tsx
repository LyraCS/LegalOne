import { useState } from "react";
import SectionHeading from "./SectionHeading";

type Filter = "semua" | "pt" | "nonpt";

type Entity = {
  name: string;
  price: string;
  cat: "pt" | "nonpt";
  tagline: string;
  desc: string;
  didapat: string[];
  syarat: string[];
};

const ENTITIES: Entity[] = [
  {
    name: "PT Perorangan",
    price: "Rp 2.500.000",
    cat: "pt",
    tagline: "Sangat cocok untuk Anda yang ingin mendirikan perusahaan secara sendiri",
    desc: "PT Perorangan adalah badan hukum perseroan terbatas yang memenuhi ketentuan usaha mikro dan kecil dengan Modal Dasar minimal 50jt – 5 Milyar, yang mana pendirinya hanya 1 (satu) orang saja, tanpa akta notaris, harta perusahaan yang terpisah dengan harta pribadi, pendiri perusahaan selain sebagai pemegang saham juga berperan sebagai Direktur.",
    didapat: [
      "Dokumen Pernyataan Pendirian Perseroan Perorangan dari Kemenkumham",
      "Dokumen Sertifikat Pendaftaran Pendirian Perseroan Perorangan dari Kemenkumham",
      "NPWP Digital",
      "Izin Usaha NIB",
      "Pengurusan Rekening Giro Perusahaan",
      "Bonus Logo Premium untuk Perusahaan",
    ],
    syarat: ["Pendiri hanya 1 orang", "KTP dan NPWP Pendiri Perusahaan"],
  },
  {
    name: "PT Mikro (Modal Dasar 50 Juta – 1 Milyar)",
    price: "Rp 5.900.000",
    cat: "pt",
    tagline: "Sangat cocok untuk Anda yang ingin badan usaha dengan struktur kepemilikan yang jelas",
    desc: "PT Mikro adalah badan hukum perseroan terbatas yang memenuhi ketentuan usaha mikro dengan Modal Dasar antara 50 Juta - 1 Milyar, yang mana pendirinya minimal 2 orang, harta perusahaan yang terpisah dengan harta pribadi, pendiri perusahaan selain sebagai pemegang saham juga berperan sebagai Komisaris dan Direktur.",
    didapat: [
      "Akta Pendirian PT",
      "SK Kemenkumham",
      "NPWP Digital",
      "Izin Usaha NIB",
      "Rekening Giro Perusahaan",
      "Bonus Logo Premium untuk Perusahaan",
    ],
    syarat: ["Pendiri minimal 2 orang", "KTP dan NPWP Pendiri dan Pemegang Saham Perusahaan"],
  },
  {
    name: "PT Kecil (Modal Dasar 1 Milyar – 5 Milyar)",
    price: "Rp 6.900.000",
    cat: "pt",
    tagline: "Sangat cocok untuk Anda yang ingin badan usaha dengan struktur kepemilikan yang jelas",
    desc: "PT Kecil adalah badan hukum perseroan terbatas yang memenuhi ketentuan usaha kecil dengan Modal Dasar antara 1 Milyar – 5 Milyar, yang mana pendirinya minimal 2 orang, harta perusahaan yang terpisah dengan harta pribadi, pendiri perusahaan selain sebagai pemegang saham juga berperan sebagai Komisaris dan Direktur.",
    didapat: [
      "Akta Pendirian PT",
      "SK Kemenkumham",
      "NPWP Digital",
      "Izin Usaha NIB",
      "Rekening Giro Perusahaan",
      "Bonus Logo Premium untuk Perusahaan",
    ],
    syarat: ["Pendiri minimal 2 orang", "KTP dan NPWP Pendiri dan Pemegang Saham Perusahaan"],
  },
  {
    name: "PT Menengah (Modal Dasar 5 Milyar – 10 Milyar)",
    price: "Rp 7.900.000",
    cat: "pt",
    tagline: "Sangat cocok untuk Anda yang ingin badan usaha dengan struktur kepemilikan yang jelas",
    desc: "PT Menengah adalah badan hukum perseroan terbatas yang memenuhi ketentuan usaha menengah dengan Modal Dasar antara 5 Milyar – 10 Milyar, yang mana pendirinya minimal 2 orang, harta perusahaan yang terpisah dengan harta pribadi, pendiri perusahaan selain sebagai pemegang saham juga berperan sebagai Komisaris dan Direktur.",
    didapat: [
      "Akta Pendirian PT",
      "SK Kemenkumham",
      "NPWP Digital",
      "Izin Usaha NIB",
      "Rekening Giro Perusahaan",
      "Bonus Logo Premium untuk Perusahaan",
    ],
    syarat: ["Pendiri minimal 2 orang", "KTP dan NPWP Pendiri dan Pemegang Saham Perusahaan"],
  },
  {
    name: "PT Besar (Modal Dasar > 10 Milyar)",
    price: "Rp 9.900.000",
    cat: "pt",
    tagline: "Sangat cocok untuk Anda yang ingin badan usaha dengan struktur kepemilikan yang jelas",
    desc: "PT Besar adalah badan hukum perseroan terbatas yang memenuhi ketentuan usaha besar dengan Modal Dasar lebih dari 10 Milyar, yang mana pendirinya minimal 2 orang, harta perusahaan yang terpisah dengan harta pribadi, pendiri perusahaan selain sebagai pemegang saham juga berperan sebagai Komisaris dan Direktur.",
    didapat: [
      "Akta Pendirian PT",
      "SK Kemenkumham",
      "NPWP Digital",
      "Izin Usaha NIB",
      "Rekening Giro Perusahaan",
      "Bonus Logo Premium untuk Perusahaan",
    ],
    syarat: ["Pendiri minimal 2 orang", "KTP dan NPWP Pendiri dan Pemegang Saham Perusahaan"],
  },
  {
    name: "PT PMA (Modal Dasar > 10 Milyar)",
    price: "Rp 9.900.000",
    cat: "pt",
    tagline: "Sangat cocok untuk Anda yang ingin badan usaha dengan struktur kepemilikan yang jelas dan melibatkan atau kerjasama dengan Pihak Asing",
    desc: "PT PMA adalah badan hukum perseroan terbatas yang didirikan berdasarkan hukum Indonesia yang didalamnya terdapat penyertaan atau menggunakan modal asing baik menggunakan modal asing sepenuhnya maupun yang berpatungan dengan penanam modal dalam negeri yang memenuhi ketentuan usaha besar dengan Modal Dasar minimal 10 Milyar, yang mana pendirinya minimal 2 orang, harta perusahaan yang terpisah dengan harta pribadi, pendiri perusahaan selain sebagai pemegang saham juga berperan sebagai Komisaris dan Direktur.",
    didapat: [
      "Akta Pendirian PT",
      "SK Kemenkumham",
      "NPWP Digital",
      "Izin Usaha NIB",
      "Rekening Giro Perusahaan",
      "Bonus Logo Premium untuk Perusahaan",
    ],
    syarat: [
      "Pendiri minimal 2 orang",
      "KTP dan NPWP (WNI) Pendiri dan Pemegang Saham Perusahaan",
      "Passport/KITAS (WNA) para Pendiri dan Pemegang Saham Perusahaan",
    ],
  },
  {
    name: "Pendirian CV",
    price: "Rp 4.900.000",
    cat: "nonpt",
    tagline: "Sangat cocok untuk Anda yang ingin badan usaha dengan modal minim, sistem pengambilan keputusan yang lebih mudah, dan pajak yang lebih rendah",
    desc: "CV adalah salah satu bentuk badan usaha yang dibentuk oleh dua orang atau lebih yang kemudian mempercayakan modal yang dimiliki kepada dua orang atau lebih. Hal itu dilakukan untuk menjalankan perusahaan tersebut sekaligus dipercaya untuk memimpin perusahaan.",
    didapat: [
      "Akta Pendirian CV",
      "SK Kemenkumham",
      "NPWP Digital",
      "Izin Usaha NIB",
      "Rekening Giro Perusahaan",
      "Bonus Logo Premium untuk Perusahaan",
    ],
    syarat: ["Pendiri minimal 2 orang", "KTP dan NPWP Pendiri CV"],
  },
  {
    name: "Pendirian Yayasan",
    price: "Rp 4.900.000",
    cat: "nonpt",
    tagline: "Sangat cocok untuk Anda yang ingin mendirikan badan hukum dengan tujuan sosial, agama dan kemanusiaan",
    desc: "Yayasan adalah sebuah badan hukum yang bergerak dalam bidang sosial, kemanusiaan dan keagamaan. Yayasan memiliki kekayaan tersendiri dari berbagai macam sumber.",
    didapat: [
      "Akta Pendirian Yayasan",
      "SK Kemenkumham",
      "NPWP Digital",
      "Izin Usaha NIB",
      "Rekening Giro Yayasan",
      "Bonus Logo Premium untuk Yayasan",
    ],
    syarat: ["Fotokopi KTP dan NPWP pendiri, pembina, pengawas dan pengurus yayasan"],
  },
  {
    name: "Pendirian Perkumpulan",
    price: "Rp 4.900.000",
    cat: "nonpt",
    tagline: "Sangat cocok untuk Anda yang ingin mendirikan perkumpulan dengan maksud dan tujuan yang sama di bidang tertentu tanpa sistem pembagian keuntungan",
    desc: "Perkumpulan adalah badan hukum yang merupakan kumpulan orang, didirikan untuk mewujudkan kesamaan maksud dan tujuan tertentu di bidang sosial, keagamaan, dan kemanusiaan, dan tidak membagikan keuntungan kepada anggotanya.",
    didapat: [
      "Akta Pendirian Perkumpulan",
      "SK Kemenkumham",
      "NPWP Digital",
      "Izin Usaha NIB",
      "Rekening Giro Perkumpulan",
      "Bonus Logo Premium untuk Perkumpulan",
    ],
    syarat: ["Fotokopi KTP dan NPWP pendiri, pengurus, pengawas dan anggota perkumpulan"],
  },
  {
    name: "Pendirian Firma",
    price: "Rp 4.900.000",
    cat: "nonpt",
    tagline: "Sangat cocok untuk Anda yang membutuhkan badan usaha berbentuk persekutuan",
    desc: "Firma adalah suatu bentuk persekutuan antara dua orang atau lebih untuk menjalankan badan usaha di bawah satu nama yang digunakan bersama. Firma terdiri dari anggota minimal sebanyak 2 orang dan setiap anggota firma memiliki tanggung jawab penuh atas badan usaha ini.",
    didapat: [
      "Akta Pendirian Firma",
      "SK Kemenkumham",
      "NPWP Digital",
      "Izin Usaha NIB",
      "Rekening Giro Perkumpulan",
      "Bonus Logo Premium untuk Firma",
    ],
    syarat: ["Pendiri minimal 2 orang", "Fotokopi KTP dan NPWP pendiri perusahaan"],
  },
];

const FILTERS: { key: Filter; label: string }[] = [
  { key: "semua", label: "Semua" },
  { key: "pt", label: "Perseroan Terbatas" },
  { key: "nonpt", label: "Non-PT" },
];

const ADDONS = [
  { name: "PKP", price: "Rp2,5 Jt" },
  { name: "Virtual Office", price: "Rp2 Jt/Tahun" },
  { name: "Digital Marketing", price: "Menyesuaikan" },
  { name: "Perpajakan", price: "Rp1,5 Jt/Bulan" },
];

function Check({ children }: { children: string }) {
  return (
    <li className="flex items-start gap-2.5 text-[14px] leading-snug text-ink/75">
      <span aria-hidden="true" className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center border border-ink/30 text-[10px] text-accent">
        ✓
      </span>
      {children}
    </li>
  );
}

function EntityCard({ e, open, onToggle }: { e: Entity; open: boolean; onToggle: () => void }) {
  return (
    <li className="border border-ink/25 rounded-[2px] bg-paper">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="group flex w-full items-center justify-between gap-3 px-5 py-3.5 text-left transition-colors hover:bg-primary-dark sm:gap-4 sm:px-6 sm:py-4 md:p-6"
      >
        <span className="min-w-0">
          <span className="block font-display text-lg font-semibold text-ink transition-colors group-hover:text-paper md:text-2xl">{e.name}</span>
          <span className="mt-1 hidden text-[14px] text-muted transition-colors group-hover:text-paper/70 sm:block">{e.tagline}</span>
        </span>
        <span className="flex shrink-0 items-center gap-3 sm:gap-4">
          <span className="font-display text-base font-semibold text-accent transition-colors group-hover:text-paper md:text-xl">{e.price}</span>
          <span aria-hidden="true" className={`text-accent transition-transform ${open ? "rotate-45" : ""}`}>+</span>
        </span>
      </button>
      {open && (
        <div className="border-t border-ink/15 p-6">
          <p className="text-[15px] leading-relaxed text-ink/80">{e.desc}</p>
          <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <p className="kicker mb-3">APA SAJA YANG DIDAPAT?</p>
              <ul className="space-y-2.5">
                {e.didapat.map((d) => (
                  <Check key={d}>{d}</Check>
                ))}
              </ul>
            </div>
            <div>
              <p className="kicker mb-3">APA SAJA SYARATNYA?</p>
              <ul className="space-y-2.5">
                {e.syarat.map((s) => (
                  <Check key={s}>{s}</Check>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#kontak" className="btn-gold rounded-[2px]">
              Konsultasi Gratis
            </a>
            <span className="footnote">Harga final, tanpa biaya tersembunyi.</span>
          </div>
        </div>
      )}
    </li>
  );
}

export default function Pendirian() {
  const [filter, setFilter] = useState<Filter>("semua");
  const [open, setOpen] = useState<string | null>("PT Perorangan");
  const list = ENTITIES.filter((e) => filter === "semua" || e.cat === filter);

  return (
    <section id="pendirian" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-16 md:px-10 md:py-24">
      <SectionHeading num="02" label="PENDIRIAN LEGALITAS" title="Pilih Bentuk Usaha, Satu Harga Final." />

      <p className="mt-6 max-w-2xl text-[16px] leading-relaxed text-ink/70">
        Pendirian badan usaha dengan satu harga final per bentuk usaha. Klik untuk melihat
        detail dokumen yang didapat serta persyaratannya.
      </p>

      <div className="mt-12 flex flex-wrap gap-3" role="tablist" aria-label="Filter bentuk usaha">
        {FILTERS.map((f) => (
          <button
            key={f.key}
            type="button"
            role="tab"
            aria-selected={filter === f.key}
            onClick={() => {
              setFilter(f.key);
              setOpen(null);
            }}
            className={`border px-5 py-2.5 text-[14px] font-semibold transition-colors rounded-[2px] ${
              filter === f.key
                ? "border-ink bg-ink text-paper"
                : "border-ink/25 text-ink hover:border-accent"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <ul className="mt-10 space-y-4">
        {list.map((e) => (
          <EntityCard key={e.name} e={e} open={open === e.name} onToggle={() => setOpen(open === e.name ? null : e.name)} />
        ))}
      </ul>

      <div className="mt-16 border-t border-ink/15 pt-10 md:mt-20">
        <h3 className="kicker mb-8">LAYANAN TAMBAHAN</h3>
        <div className="grid grid-cols-1 gap-x-16 sm:grid-cols-2">
          {ADDONS.map((a) => (
            <div
              key={a.name}
              className="flex items-baseline justify-between border-b border-ink/10 py-3 text-[15px]"
            >
              <span className="text-ink/80">{a.name}</span>
              <span className="font-display font-medium text-ink">{a.price}</span>
            </div>
          ))}
        </div>
        <p className="footnote mt-8">* Layanan tambahan dipesan secara terpisah dari paket pendirian.</p>
      </div>
    </section>
  );
}
