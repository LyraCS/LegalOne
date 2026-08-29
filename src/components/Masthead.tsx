import { useState } from "react";

const NAV = [
  { label: "Tentang", href: "#tentang" },
  { label: "Layanan", href: "#layanan" },
  { label: "Paket", href: "#paket" },
  { label: "Proses", href: "#proses" },
  { label: "Kontak", href: "#kontak" },
];

export default function Masthead() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-paper/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 md:px-10">
        <a href="#top" className="flex shrink-0 items-center gap-2">
          <figure className="m-0 flex shrink-0 items-center">
            <img
              src="/icon-scale.png"
              alt=""
              className="h-9 w-auto"
            />
          </figure>
          <span className="font-display text-xl font-black tracking-tight text-ink">
            LEGALONE
          </span>
        </a>

        <nav className="hidden min-w-0 items-center lg:flex" aria-label="Navigasi utama">
          <ul className="flex min-w-0 items-center gap-4 lg:gap-6">
            {NAV.map((item, i) => (
              <li key={item.href} className="flex shrink-0 items-center">
                {i > 0 && (
                  <span aria-hidden="true" className="mr-3 h-4 w-px bg-ink/20 lg:mr-4" />
                )}
                <a
                  href={item.href}
                  className="whitespace-nowrap text-[13px] font-medium uppercase tracking-[0.18em] text-ink transition-colors hover:text-accent"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden shrink-0 items-center lg:flex">
          <a href="#kontak" className="btn-gold btn-gold-sm rounded-[2px]">
            Konsultasi Sekarang
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Tutup menu" : "Buka menu"}
          className="flex h-10 w-10 items-center justify-center text-ink lg:hidden"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
            {open ? (
              <path strokeLinecap="round" d="M5 5l14 14M19 5L5 19" />
            ) : (
              <path strokeLinecap="round" d="M3 7h18M3 12h13M3 17h18" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav id="mobile-menu" className="border-t border-ink/10 bg-paper px-6 pb-6 lg:hidden" aria-label="Navigasi mobile">
          <ul>
            {NAV.map((item) => (
              <li key={item.href} className="border-b border-ink/10 py-4">
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-[15px] font-medium uppercase tracking-[0.18em] text-ink"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#kontak" onClick={() => setOpen(false)} className="btn-gold mt-6 rounded-[2px]">
            Konsultasi Sekarang
          </a>
        </nav>
      )}
    </header>
  );
}