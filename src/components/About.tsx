import SectionHeading from "./SectionHeading";

const PILLARS = [
  { name: "Integritas", desc: "Setiap dokumen ditangani dengan kejujuran dan ketelitian yang bisa dipertanggungjawabkan." },
  { name: "Responsif", desc: "Setiap pertanyaan dijawab cepat · proses berjalan dengan komunikasi yang jelas." },
  { name: "Berpengalaman", desc: "Ribuan alur legalitas ditangani dengan standar yang sama di setiap langkah." },
];

export default function About() {
  return (
    <section id="tentang" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-16 md:px-10 md:py-24">
      <div className="grid grid-cols-1 gap-14 md:grid-cols-12">
        <div className="md:col-span-7">
          <SectionHeading num="01" label="TENTANG KAMI" title="Legalitas Terurus, Usaha Langsung Jalan." />
          <p className="mt-10 text-xl leading-[1.6] text-ink/85 md:text-2xl">
            Kami mengurus seluruh legalitas usaha Anda dalam satu paket: dari akta pendirian,
            NIB, hingga rekening perusahaan. Anda cukup menyiapkan data, sisanya kami kerjakan,
            tanpa harus memahami istilah hukum yang rumit.
          </p>
          <a href="#paket" className="cta-link mt-10 inline-block text-base">
            Lihat Paket & Biaya →
          </a>
        </div>
        <ol className="md:col-span-5">
          {PILLARS.map((p, i) => (
            <li key={p.name} className="border-t border-ink/15 py-6">
              <p className="kicker mb-3">
                <span className="text-accent">0{i + 1}</span>
              </p>
              <h3 className="font-display text-2xl font-semibold text-ink">{p.name}</h3>
              {/* TODO: replace with real content */}
              <p className="mt-2 text-[15px] leading-relaxed text-muted">{p.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}