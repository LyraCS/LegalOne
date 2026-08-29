export default function PullQuote() {
  return (
    <section
      aria-label="Kutipan"
      className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24"
    >
      <div className="border-t border-ink/15 py-14 text-center md:py-16">
        <span
          aria-hidden="true"
          className="font-display text-7xl font-semibold leading-none text-accent"
        >
          “
        </span>
        {/* TODO: replace with real content */}
        <blockquote className="mx-auto mt-2 max-w-3xl font-display text-3xl font-medium italic leading-[1.25] tracking-tight text-ink md:text-5xl">
          Legalitas bukan garis akhir sebelum usaha dimulai · itu fondasi yang membuatnya
          bisa bertahan.
        </blockquote>
        <p className="kicker mt-8">· TIM LEGALONE</p>
      </div>
    </section>
  );
}