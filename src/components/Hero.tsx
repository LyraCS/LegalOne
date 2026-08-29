export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center justify-center scroll-mt-20 bg-cover bg-center"
      style={{
        backgroundImage:
          "url(https://images.pexels.com/photos/26646636/pexels-photo-26646636.png)",
      }}
    >
      <div className="absolute inset-0 bg-ink/70" aria-hidden="true" />

<h1 className="relative px-6 whitespace-nowrap text-center font-cinzel text-[clamp(2.1rem,9vw,8rem)] font-black leading-[0.95] tracking-[0.12em] text-paper">
        LEGAL<span className="text-accent">ONE</span><span className="text-paper">.ID</span>
      </h1>
    </section>
  );
}
