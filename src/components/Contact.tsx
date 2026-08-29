import type { FormEvent } from "react";

const CONTACTS = [
  { label: "ALAMAT", value: "Ruko 92 Avenix BSD CITY, Jl. Raya Cisauk No.7 Blk F, Sampora, Kec. Cisauk, Kabupaten Tangerang, Banten 15345", href: "https://maps.app.goo.gl/SY7Wru4GsMBGYX8x6" },
  { label: "WHATSAPP", value: "+62 813-1841-5169", href: "https://wa.me/6281318415169" },
  { label: "EMAIL", value: "halo@legalone.co.id", href: "mailto:halo@legalone.co.id" },
];

function Field({
  id,
  label,
  placeholder,
  type = "text",
  required = false,
}: {
  id: string;
  label: string;
  placeholder: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.22em] text-paper/60">
        {label}
        {required && (
          <span aria-hidden="true" className="text-accent">
            {" "}
            *
          </span>
        )}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full border-b border-paper/25 bg-transparent py-3 text-[15px] text-paper placeholder-paper/35 outline-none transition-colors focus:border-accent"
      />
    </div>
  );
}

export default function Contact() {
  // TODO: wire to real form handling / backend; front-end only for now.
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <section id="kontak" className="scroll-mt-20 bg-primary-dark text-paper">
      <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
          <div className="flex flex-col md:col-span-6">
            <p className="kicker text-paper/50">
              <span className="text-accent">PENUTUP</span> · PERCAKAPAN DIMULAI
            </p>
            <h2 className="mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
              Mulai Babak Legal Usaha Anda.
            </h2>
            <p className="mt-7 max-w-md text-[15px] leading-relaxed text-paper/70">
              Ceritakan kebutuhan Anda · tim kami akan membantu memilih bentuk badan usaha
              dan paket yang paling sesuai.
            </p>

            <dl className="mt-12 border-t border-paper/15">
              {CONTACTS.map((c) => (
                <div key={c.label} className="flex items-baseline justify-between gap-6 border-b border-paper/15 py-4">
                  <dt className="w-24 shrink-0 text-[11px] font-semibold uppercase tracking-[0.22em] text-paper/50">
                    {c.label}
                  </dt>
                  {/* TODO: replace with real content */}
                  <dd className="min-w-0 text-right">
                    {c.href ? (
                      <a href={c.href} target="_blank" rel="noopener noreferrer" className="border-b border-accent pb-0.5 text-[15px] text-paper transition-colors hover:text-accent">
                        {c.value}
                      </a>
                    ) : (
                      <span className="text-[15px] text-paper">{c.value}</span>
                    )}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-12 md:mt-auto md:pt-10">
              <a href="https://wa.me/6281318415169" target="_blank" rel="noopener noreferrer" className="btn-gold rounded-[2px]">
                Hubungi Kami
              </a>
            </div>
          </div>

          <form onSubmit={onSubmit} className="flex flex-col md:col-span-5 md:col-start-8">
            <div className="space-y-7">
              <Field id="nama" label="Nama" placeholder="Nama lengkap Anda" required />
              <Field id="jenis-usaha" label="Jenis Usaha" placeholder="PT / CV / Yayasan / Belum tahu" />
              <Field id="no-hp" label="No. HP" placeholder="Nomor WhatsApp" type="tel" required />
              <div>
                <label htmlFor="pesan" className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.22em] text-paper/60">
                  Pesan
                </label>
                <textarea
                  id="pesan"
                  name="pesan"
                  rows={3}
                  placeholder="Ceritakan kebutuhan usaha Anda"
                  className="w-full resize-none border-b border-paper/25 bg-transparent py-3 text-[15px] text-paper placeholder-paper/35 outline-none transition-colors focus:border-accent"
                />
              </div>
            </div>
            <button
              type="submit"
              className="btn-gold mt-7 w-full rounded-[2px] md:mt-auto"
            >
              Kirim Pesan
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}