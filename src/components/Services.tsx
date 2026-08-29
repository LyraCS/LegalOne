import SectionHeading from "./SectionHeading";

const SERVICES = [
  {
    name: "PT Perorangan",
    desc: "Pendirian cepat untuk usaha mikro & kecil.",
    items: ["Akta pendirian", "SK Kemenkumham", "NIB & izin dasar"],
  },
  {
    name: "PT · Perseroan Terbatas",
    desc: "Badan usaha berbadan hukum untuk skala menengah–besar.",
    items: ["Akta & SK Kemenkumham", "NIB & izin dasar", "Rekening perusahaan"],
  },
  {
    name: "CV · Persekutuan Komanditer",
    desc: "Cocok untuk usaha keluarga & kemitraan.",
    items: ["Akta pendirian", "NIB & izin dasar", "Pendampingan pajak"],
  },
  {
    name: "Yayasan",
    desc: "Badan hukum untuk kegiatan sosial & kemanusiaan.",
    items: ["Akta & SK Kemenkumham", "Statuta lengkap", "NIB & izin dasar"],
  },
  {
    name: "Pendaftaran Merek Usaha",
    desc: "Perlindungan hak merek dagang & jasa.",
    items: ["Cek keunikan merek", "Pendaftaran DJKI", "Pemantauan status"],
  },
];

export default function Services() {
  return (
    <section id="layanan" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-16 md:px-10 md:py-24">
      <SectionHeading num="02" label="LAYANAN" title="Lima Bentuk Legalitas, Satu Alur yang Jelas." />
      <ol className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s, i) => (
          <li key={s.name}>
            <a
              href="#paket"
              className="group flex h-full flex-col border border-ink/25 rounded-[2px] bg-paper p-7 transition-colors hover:border-accent"
            >
              <span className="w-10 shrink-0 font-display text-sm text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-6 font-display text-2xl font-semibold leading-tight text-ink transition-colors group-hover:text-accent">
                {s.name}
              </h3>
              {/* TODO: replace with real content */}
              <p className="mt-3 text-[15px] leading-relaxed text-muted">{s.desc}</p>
              <ul className="mt-6 space-y-2 border-t border-ink/15 pt-5">
                {s.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-[14px] leading-snug text-ink/75">
                    <span aria-hidden="true" className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center border border-ink/30 text-[10px] text-accent">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <span
                aria-hidden="true"
                className="mt-auto inline-block pt-6 text-right text-accent opacity-0 transition-opacity group-hover:opacity-100"
              >
                →
              </span>
            </a>
          </li>
        ))}
      </ol>
    </section>
  );
}