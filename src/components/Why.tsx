import SectionHeading from "./SectionHeading";

const POINTS = [
  {
    lead: "Usaha yang telah berhasil didirikan",
    desc: "Diukur sebagai kepercayaan, bukan sekadar angka · setiap akta adalah awal dari sesuatu yang nyata.",
  },
  {
    lead: "Proses dalam hitungan hari kerja",
    desc: "Alur yang terstandar dan komunikasi yang jelas, tanpa drama yang tidak perlu.",
  },
  {
    lead: "Satu paket, semua kebutuhan",
    desc: "Dokumen, rekening, logo, hingga perpajakan · tidak terpotong-potong jadi layanan terpisah.",
  },
  {
    lead: "Konsultasi awal tanpa biaya",
    desc: "Tanyakan apa pun sebelum memutuskan. Bertanya itu gratis.",
  },
];

export default function Why() {
  return (
    <section id="kenapa" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-16 md:px-10 md:py-24">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <SectionHeading
            num="05"
            label="KENAPA LEGALONE"
            title="Dipercaya karena Jelaskan, Bukan karena Berteriak."
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