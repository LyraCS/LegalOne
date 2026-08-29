import SectionHeading from "./SectionHeading";

const ITEMS = [
  {
    name: "Waarmerking",
    price: "Rp 500.000/Nomor",
    desc: "Proses pendaftaran/register dokumen bawah tangan di buku khusus yang dibuat oleh Notaris",
  },
  {
    name: "Legalisasi",
    price: "Rp 1.000.000/Dokumen",
    desc: "Dokumen yang dibuat dan ditandatangani oleh para pihak dan disaksikan oleh Notaris",
  },
  {
    name: "Legalisir",
    price: "Rp 500.000/Dokumen + Rp 20.000/Lembar",
    desc: "Untuk Anda yang ingin melegalisir copy dari asli surat/dokumen Anda di Notaris",
  },
  {
    name: "Perjanjian Pisah Harta",
    price: "Rp 5.000.000",
    desc: "Suatu perjanjian mengenai harta benda suami istri selama perkawinan mereka, boleh dibuat sebelum atau selama dalam ikatan perkawinan",
  },
  {
    name: "Akta Jual Beli Saham",
    price: "Rp 2.000.000",
    desc: "Perjanjian jual beli dan pengalihan saham yang disepakati dan telah dilaksanakan oleh para pihak",
  },
  {
    name: "Perjanjian Kerjasama",
    price: "Mulai dari Rp 1.500.000",
    desc: "Perjanjian kerjasama untuk suatu pekerjaan antar kedua belah pihak",
  },
  {
    name: "Jasa Lainnya",
    price: "Menyesuaikan",
    desc: "PPJB, Roya, Cabut Sita Jaminan, AJB, Hibah, Balik Nama Waris, APHB, Pengakuan Hak, Peningkatan Hak, dll.",
  },
];

export default function NotarisPPAT() {
  return (
    <section id="notaris" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-16 md:px-10 md:py-24">
      <SectionHeading num="03" label="JASA NOTARIS/PPAT" title="Berbagai Layanan Notaris & PPAT." />

      <div className="mt-12 grid grid-cols-1 gap-x-20 lg:grid-cols-2">
        {ITEMS.map((item) => (
          <div key={item.name} className="flex flex-col border-b border-ink/10 py-5">
            <div className="flex flex-col gap-y-2">
              <h3 className="font-display text-xl font-semibold text-ink">{item.name}</h3>
              <span className="font-display font-semibold text-accent">{item.price}</span>
            </div>
            <p className="mt-2 text-[15px] leading-relaxed text-muted">{item.desc}</p>
          </div>
        ))}
      </div>

      <p className="footnote mt-10">* Biaya dapat disesuaikan dengan tingkat kesulitan dan kebutuhan dokumen.</p>
    </section>
  );
}
