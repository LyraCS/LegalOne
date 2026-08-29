import SectionHeading from "./SectionHeading";

const ITEMS = [
  {
    name: "Pendaftaran Merek",
    price: "Rp 2.500.000/Kelas",
    desc: "Proses Pendaftaran Merek",
  },
  {
    name: "Sertifikat Standar (Menengah Rendah)",
    price: "Mulai dari Rp 500.000/Dokumen",
    desc: "Proses Sertifikat Standar untuk usaha risiko Menengah Rendah",
  },
  {
    name: "Sertifikat Standar (Menengah Tinggi)",
    price: "Mulai dari Rp 1.500.000/Dokumen",
    desc: "Proses Sertifikat Standar untuk usaha risiko Menengah Tinggi, biaya tergantung dari tingkat kesulitan proses perizinan dan transportasi",
  },
  {
    name: "Izin (Tinggi)",
    price: "Mulai dari Rp 2.500.000/Dokumen",
    desc: "Proses Izin untuk usaha risiko Tinggi, biaya tergantung dari tingkat kesulitan proses perizinan dan transportasi",
  },
  {
    name: "Izin Konstruksi SKA, KTA dan SBU (Sertifikat Badan Usaha)",
    price: "Mulai dari Rp 5.000.000",
    desc: "Paket lengkap proses pembuatan SKA, KTA dan SBU, biaya termasuk proses administrasi, antar jemput dokumen dan transportasi, biaya belum termasuk biaya SKA, KTA dan SBU",
  },
];

export default function Perizinan() {
  return (
    <section id="perizinan" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-16 md:px-10 md:py-24">
      <SectionHeading num="04" label="PERIZINAN KHUSUS" title="Perizinan Usaha Sesuai Risiko & Sektor." />

      <div className="mt-12 grid grid-cols-1 gap-x-20 lg:grid-cols-2">
        {ITEMS.map((item) => (
          <div key={item.name} className="flex flex-col border-b border-ink/10 py-5">
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="font-display text-xl font-semibold text-ink">{item.name}</h3>
              <span className="shrink-0 font-semibold text-accent">{item.price}</span>
            </div>
            <p className="mt-2 text-[15px] leading-relaxed text-muted">{item.desc}</p>
          </div>
        ))}
      </div>

      <p className="footnote mt-10">* Biaya perizinan dapat menyesuaikan dengan tingkat kesulitan dan kebutuhan dokumen.</p>
    </section>
  );
}
