import SectionHeading from "./SectionHeading";

const POINTS = [
  {
    lead: "Proses cepat dalam hari kerja",
    desc: "Dokumen disiapkan tim kami, Anda tidak perlu mengurusnya sendiri atau bertanya-tanya kemana harus mulai.",
  },
  {
    lead: "Harga final, tanpa biaya tersembunyi",
    desc: "Semua biaya disepakati di awal, apa yang Anda lihat adalah apa yang Anda bayar.",
  },
  {
    lead: "Satu paket lengkap",
    desc: "Dokumen, rekening giro, logo, hingga perpajakan, tidak terpotong jadi layanan terpisah.",
  },
  {
    lead: "Konsultasi awal gratis",
    desc: "Tanyakan apa pun sebelum memutuskan. Diskusi pertama tidak dipungut biaya.",
  },
];

export default function Why() {
  return (
    <section id="kenapa" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-16 md:px-10 md:py-24">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <SectionHeading
            num="07"
            label="KENAPA LEGALONE"
            title="Alasan Memilih LegalOne untuk Usaha Anda."
          />
        </div>
        <div className="md:col-span-7">
          <div className="grid grid-cols-1 gap-px bg-ink/15 sm:grid-cols-2">
            {POINTS.map((p, i) => (
              <div key={p.lead} className="bg-paper p-8">
                <p className="font-display text-5xl font-semibold tracking-tight text-accent">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-5 font-display text-2xl font-semibold leading-tight text-ink">
                  {p.lead}
                </h3>
                {/* TODO: replace with real content */}
                <p className="mt-3 text-[15px] leading-relaxed text-muted">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}