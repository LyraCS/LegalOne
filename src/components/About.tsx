import SectionHeading from "./SectionHeading";

const REASONS = [
  "Menyediakan hampir seluruh layanan jasa legal yang dibutuhkan pelaku usaha",
  "Memiliki dedikasi untuk memberikan pelayanan yang terbaik",
  "Luasnya pengalaman dan pengetahuan sektor yang terkandung dalam tim",
  "Komitmen dalam upaya pemberian layanan jasa hukum yang profesional",
];

export default function About() {
  return (
    <section id="tentang" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-16 md:px-10 md:py-24">
      <div className="grid grid-cols-1 gap-14 md:grid-cols-12">
        <div className="md:col-span-7">
          <SectionHeading num="01" label="TENTANG KAMI" title="Mitra Legalitas & Jasa Hukum Terpercaya." />

          <h3 className="kicker mt-14">MENGENAL LEBIH DEKAT LEGALONE</h3>
          <p className="mt-4 text-[16px] leading-[1.7] text-ink/80">
            Kami sangat berpengalaman dalam Layanan Pengurusan Legalitas dalam bentuk Pendirian
            PT Perorangan / PT Persekutuan Modal / CV / Yayasan / Perkumpulan / Firma. Selain
            itu, kami sangat berpengalaman dalam Layanan Notaris/PPAT antara lain Waarmerking,
            Legalisasi, Legalisir, Perjanjian Kawin/Pisah Harta, Perjanjian Kerjasama, Jual Beli
            Saham, PPJB, AJB, Roya, Cabut Sita Jaminan, Hibah, Balik Nama Waris, APHB, Pengakuan
            Hak, Peningkatan Hak, dll. Kami juga memiliki Layanan Hukum meliputi Hukum Bisnis,
            Hukum Pidana, Hukum Perdata, Hukum Kepailitan dan PKPU, dll.
          </p>
          <a href="#pendirian" className="cta-link mt-10 inline-block text-base">
            Lihat Layanan & Biaya →
          </a>
        </div>
        <ol className="md:col-span-5">
          <li className="border-t border-ink/15 py-4">
            <p className="kicker">ALASAN HARUS PILIH LEGALONE</p>
          </li>
          {REASONS.map((r, i) => (
            <li key={r} className="border-t border-ink/15 py-6">
              <p className="kicker mb-3">
                <span className="text-accent">0{i + 1}</span>
              </p>
              <p className="text-[16px] leading-relaxed text-ink">{r}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}