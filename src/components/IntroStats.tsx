import { useEffect, useRef, useState } from "react";

const VALUES = [
  { label: "Kepastian Legalitas", desc: "Tidak perlu ragu soal status hukum." },
  { label: "Proses Transparan", desc: "Status pekerjaan bisa dipantau setiap saat." },
  { label: "Efisien & Cepat", desc: "Satu paket, satu tim, hasil terjamin." },
];

const STATS = [
  { value: 500, suffix: "+", label: "Usaha Didirikan" },
  { value: 2024, suffix: "", label: "Sejak Beroperasi" },
  { value: 100, suffix: "%", label: "Proses Online" },
  { value: 34, suffix: "", label: "Provinsi Terjangkau" },
];

function CountUp({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        started.current = true;
        const duration = 1200;
        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - start) / duration, 1);
          setDisplay(Math.round(value * (1 - Math.pow(1 - p, 3))));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        obs.disconnect();
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [value]);

  return <span ref={ref}>{display.toLocaleString("id-ID")}</span>;
}

export default function IntroStats() {
  return (
    <section aria-label="Pengantar LegalOne" className="scroll-mt-20 bg-primary-dark text-paper">
      <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24">
        <div className="border-t border-paper/15 pt-6">
          <p className="kicker text-paper/50">
            <span className="text-accent">00</span> · SELAMAT DATANG DI LEGAL<span className="text-accent">ONE</span>
          </p>
          <h2 className="mt-5 max-w-3xl font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl">
            Mitra Anda Dalam Legalitas &amp; Kepatuhan Usaha.
          </h2>
          <p className="mt-8 max-w-2xl text-lg leading-[1.6] text-paper/75">
            Kami memberikan panduan yang jelas, andal, dan mudah dipahami sepanjang proses
            legalisasi usaha Anda di Indonesia — bukan sekadar pengolah dokumen.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-6 border-t border-paper/15 pt-8 sm:grid-cols-3">
            {VALUES.map((v) => (
              <div key={v.label} className="flex items-start gap-3">
                <span aria-hidden="true" className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center border border-paper/30 text-[10px] text-accent">
                  ✓
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-paper">{v.label}</h3>
                  {/* TODO: replace with real content */}
                  <p className="mt-1 text-[14px] leading-snug text-paper/60">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* stat counters */}
        <dl className="mt-14 grid grid-cols-1 divide-y divide-paper/15 border-y border-paper/15 sm:grid-cols-4 sm:divide-x sm:divide-y-0">
          {STATS.map((s) => (
            <div key={s.label} className="py-8 text-center sm:px-6 sm:first:pl-0 sm:last:pr-0">
              <dd className="font-display text-5xl font-semibold tracking-tight text-paper md:text-6xl">
                <CountUp value={s.value} />
                <span className="text-accent">{s.suffix}</span>
              </dd>
              {/* TODO: replace with real content */}
              <dt className="mt-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-paper/50">
                {s.label}
              </dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
