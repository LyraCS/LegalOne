const SERVICES = [
  "Konsultasi Hukum",
  "Surat Somasi",
  "Surat Perjanjian",
  "Legal Opinion",
  "Mediasi",
  "Pendampingan Hukum di Kepolisian",
  "Pendampingan Hukum di dalam maupun di luar Pengadilan",
  "Hukum Bisnis",
  "Hukum Kepailitan dan PKPU",
  "Hukum Perdata",
  "Hukum Pidana",
  "Hukum Ketenagakerjaan",
  "Hukum Keluarga",
];

export default function JasaHukum() {
  return (
    <section id="hukum" className="scroll-mt-20 bg-primary-dark text-paper">
      <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24">
        <div className="border-t border-paper/15 pt-6">
          <p className="kicker text-paper/50">
            <span className="text-accent">05</span> · JASA LAYANAN HUKUM
          </p>
          <h2 className="mt-5 max-w-3xl font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl">
            Pendampingan Hukum yang Terpercaya.
          </h2>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <li key={s} className="flex items-start gap-4 rounded-[2px] border border-paper/20 p-6">
              <p className="font-display text-2xl font-semibold text-accent">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-0.5 font-display text-lg font-semibold text-paper">{s}</h3>
            </li>
          ))}
        </ul>

        <div className="mt-12 border-t border-paper/15 pt-10">
          <p className="max-w-2xl text-[16px] leading-relaxed text-paper/70">
            Layanan hukum kami ditangani oleh penasihat hukum yang berpengalaman. Biaya
            disesuaikan dengan kompleksitas perkara.
          </p>
          <a href="#kontak" className="btn-gold mt-8 inline-block rounded-[2px]">
            Hubungi Kami untuk Konsultasi
          </a>
        </div>
      </div>
    </section>
  );
}
