import SectionHeading from "./SectionHeading";

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
    <section id="hukum" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-16 md:px-10 md:py-24">
      <SectionHeading num="05" label="JASA LAYANAN HUKUM" title="Pendampingan Hukum yang Terpercaya." />

      <ul className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s, i) => (
          <li key={s} className="flex items-start gap-4 rounded-[2px] border border-ink/25 bg-paper p-6">
            <p className="font-display text-2xl font-semibold text-accent">
              {String(i + 1).padStart(2, "0")}
            </p>
            <h3 className="mt-0.5 font-display text-lg font-semibold text-ink">{s}</h3>
          </li>
        ))}
      </ul>

      <div className="mt-12 border-t border-ink/15 pt-10">
        <p className="max-w-2xl text-[16px] leading-relaxed text-ink/75">
          Layanan hukum kami ditangani oleh penasihat hukum yang berpengalaman. Biaya
          disesuaikan dengan kompleksitas perkara.
        </p>
        <a href="#kontak" className="btn-gold mt-8 inline-block rounded-[2px]">
          Hubungi Kami untuk Konsultasi
        </a>
      </div>
    </section>
  );
}
