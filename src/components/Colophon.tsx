import Logo from "./Logo";

const SOCIALS = [
  {
    label: "Instagram",
    path: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="0" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" stroke="none" />
      </>
    ),
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/6281318415169",
    path: (
      <path
        fill="currentColor"
        stroke="none"
        d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.21 5.09 4.5.71.31 1.27.5 1.7.64.72.23 1.37.2 1.89.12.58-.09 1.76-.72 2.01-1.42.25-.7.25-1.29.17-1.42-.07-.12-.26-.2-.55-.34zM19.05 4.91A9.82 9.82 0 0 0 12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.9-4.45 9.9-9.91a9.85 9.85 0 0 0-2.84-7.02zM12.05 20.15h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.25-8.23a8.2 8.2 0 0 1 8.24 8.24c0 4.54-3.7 8.23-8.24 8.23z"
      />
    ),
  },
];

export default function Colophon() {
  return (
    <footer className="border-t border-ink/10 bg-paper">
      <div className="mx-auto max-w-6xl px-6 py-14 md:px-10">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-3">
          <div className="md:col-start-1">
            <p className="text-lg text-ink">
              <Logo />
            </p>
            <p className="mt-2 text-[13px] text-muted">Diterbitkan oleh LegalOne · Panduan Legalitas Usaha 2026</p>
          </div>

          <nav aria-label="Navigasi footer" className="md:col-start-2 md:text-center">
            <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
              {[
                ["Tentang", "#tentang"],
                ["Layanan", "#layanan"],
                ["Paket", "#paket"],
                ["Proses", "#proses"],
                ["Kontak", "#kontak"],
              ].map(([label, href], i) => (
                <li key={href} className="flex items-center gap-5">
                  {i > 0 && <span aria-hidden="true" className="h-3 w-px bg-ink/20" />}
                  <a href={href} className="whitespace-nowrap text-[12px] font-medium uppercase tracking-[0.18em] text-ink/70 transition-colors hover:text-accent">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex justify-center gap-5 md:col-start-3 md:justify-end">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="text-ink/70 transition-colors hover:text-accent"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
                  {s.path}
                </svg>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-ink/10 pt-6 text-[12px] text-muted md:flex-row md:items-center md:justify-between">
          <p>© 2026 LegalOne. Seluruh hak cipta.</p>
          {/* TODO: ganti dengan nomor izin yang sah */}
          <p>Izin Notaris &amp; PPAT: [halaman izin · placeholder]</p>
        </div>
      </div>
    </footer>
  );
}