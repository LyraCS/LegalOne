import SectionHeading from "./SectionHeading";

const STEPS = [
  {
    title: "Konsultasi",
    desc: "Diskusikan kebutuhan badan usaha Anda.",
  },
  { title: "Pilih Paket", desc: "Sesuaikan dengan skala & anggaran." },
  { title: "Proses Legalitas", desc: "Tim kami mengurus dokumen & administrasi." },
  { title: "Usaha Siap Jalan", desc: "Terima dokumen lengkap & fasilitas pendukung." },
];

function Step({ index, title, desc }: { index: number; title: string; desc: string }) {
  return (
    <li className="flex gap-6 md:block">
      <span className="relative z-10 mt-1.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-[2px] border border-ink/40 bg-paper font-display text-[13px] font-semibold text-accent md:mt-0">
        {index}
      </span>
      <div>
        <h3 className="font-display text-xl font-semibold text-ink">{title}</h3>
        {/* TODO: replace with real content */}
        <p className="mt-2 text-[15px] leading-relaxed text-muted md:max-w-[22ch]">{desc}</p>
      </div>
    </li>
  );
}

export default function Process() {
  return (
    <section id="proses" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-16 md:px-10 md:py-24">
      <SectionHeading num="04" label="CARA KERJA" title="Empat Langkah, Satu Alur yang Terbaca." />

      {/* desktop: linimasa horizontal */}
      <ol className="relative mt-16 hidden gap-10 md:grid md:grid-cols-4 md:gap-8">
        <span
          aria-hidden="true"
          className="absolute left-0 right-0 top-[15px] h-px bg-ink/20"
        />
        {STEPS.map((s, i) => (
          <Step key={s.title} index={i + 1} title={s.title} desc={s.desc} />
        ))}
      </ol>

      {/* mobile: linimasa vertikal */}
      <ol className="mt-12 space-y-10 border-l border-ink/20 pl-8 md:hidden">
        {STEPS.map((s, i) => (
          <Step key={s.title} index={i + 1} title={s.title} desc={s.desc} />
        ))}
      </ol>
    </section>
  );
}