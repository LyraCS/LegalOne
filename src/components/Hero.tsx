export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center justify-center scroll-mt-20 bg-cover bg-center"
      style={{
        backgroundImage:
          "url(https://images.pexels.com/photos/16912372/pexels-photo-16912372.jpeg)",
      }}
    >
      <div className="absolute inset-0 bg-ink/70" aria-hidden="true" />

      <h1 className="relative px-6 text-center font-cinzel text-6xl font-black tracking-[0.18em] text-paper sm:text-7xl md:text-9xl">
        LEGAL<span className="text-accent">ONE</span>
      </h1>
    </section>
  );
}
