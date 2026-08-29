import { useState } from "react";
import SectionHeading from "./SectionHeading";

// TODO: ganti dengan FAQ asli / data yang disetujui
const FAQS = [
  {
    q: "Apa bedanya PT Perorangan dengan PT?",
    a: "PT Perorangan didirikan oleh satu orang pemilik tanpa kewajiban modal dasar tertentu · cocok untuk usaha mudah yang baru memulai. PT (Perseroan Terbatas) cocok untuk usaha yang ingin memiliki beberapa pemegang saham dan struktur yang lebih lengkap.",
  },
  {
    q: "Berapa lama proses legalitasnya?",
    a: "Umumnya proses selesai dalam hitungan hari kerja setelah dokumen dan data lengkap. Durasi pasti tergantung jenis badan usaha dan kelengkapan dokumen yang Anda serahkan.",
  },
  {
    q: "Apakah Virtual Office bisa digunakan untuk alamat NIB?",
    a: "Bisa. Alamat virtual office yang kami sediakan dapat dipakai sebagai alamat domisili untuk keperluan pendaftaran NIB dan dokumen perusahaan.",
  },
  {
    q: "Apa itu PKP dan apakah saya membutuhkannya?",
    a: "PKP (Pengusaha Kena Pajak) adalah status yang memungkinkan usaha menerbitkan faktur pajak. Umumnya dibutuhkan saat omzet usaha telah melewati batas tertentu atau saat bekerja sama dengan korporasi.",
  },
  {
    q: "Bisakah saya upgrade paket di kemudian hari?",
    a: "Bisa. Selisih layanan dapat dilengkapi kapan pun · misalnya menambahkan Virtual Office atau pengurusan PKP setelah usaha Anda berjalan.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-16 md:px-10 md:py-24">
      <SectionHeading num="06" label="TANYA JAWAB" title="Pertanyaan yang Paling Sering Diajukan." />
      <dl className="mt-14 border border-ink/25 rounded-[2px]">
        {FAQS.map((f, i) => {
          const open = openIndex === i;
          return (
            <div key={f.q} className={i > 0 ? "border-t border-ink/15" : ""}>
              <dt>
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? null : i)}
                  aria-expanded={open}
                  className="flex w-full items-center justify-between gap-6 px-7 py-6 text-left"
                >
                  <span className="font-display text-xl font-semibold text-ink md:text-2xl">
                    {f.q}
                  </span>
                  <span
                    aria-hidden="true"
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-[2px] border border-ink/30 text-lg font-medium text-accent"
                  >
                    {open ? "−" : "+"}
                  </span>
                </button>
              </dt>
              {open && (
                <dd className="mx-7 pb-7 -mt-2 max-w-3xl text-[15px] leading-relaxed text-muted">
                  {/* TODO: replace with real content */}
                  {f.a}
                </dd>
              )}
            </div>
          );
        })}
      </dl>
    </section>
  );
}