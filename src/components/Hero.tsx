export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-6xl scroll-mt-20 px-6 pb-20 pt-14 md:px-10 md:pb-28 md:pt-20">
      <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-5">
          <img
            src="/icon-scale.png"
            alt="LegalOne"
            className="w-full"
          />
        </div>

        <div className="md:col-span-7">
          <p className="kicker">
            <span className="text-accent">EDISI</span> 2026 · PANDUAN MENDIRIKAN USAHA ANDA
          </p>
          <h1 className="mt-7 font-display text-5xl font-semibold leading-[1.02] tracking-tight text-ink md:text-7xl">
            Usaha Anda, <span className="italic">Legal</span>
            <span className="mt-1 block h-[3px] w-full max-w-[min(14ch,80%)] bg-accent" aria-hidden="true" />
            Sejak Halaman Pertama.
          </h1>
          {/* TODO: replace with real content */}
          <p className="mt-8 max-w-xl text-[17px] leading-relaxed text-ink/75">
            Dari akta pendirian hingga rekening perusahaan · LegalOne menyusun setiap
            langkah legalitas usaha Anda menjadi satu alur yang jelas, tanpa istilah
            yang membingungkan.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <a href="#kontak" className="btn-gold rounded-[2px]">
              Mulai Konsultasi Gratis
            </a>
            <a href="#paket" className="cta-link text-base">
              Lihat Paket →
            </a>
          </div>
          <p className="mt-10 border-t border-ink/15 pt-6 text-[12px] font-medium uppercase tracking-[0.18em] text-muted">
            PT Perorangan · PT · CV · Yayasan · Merek Usaha
          </p>
        </div>
      </div>
    </section>
  );
}