import SectionHeading from "./SectionHeading";
import founder from "../img/founder.jpg";

// TODO: ganti nama & profil dengan data asli tim
const TEAM = [
  { name: "Ovan Setyawan Fadly, S.H", role: "Notaris & PPAT", img: founder },
  { name: "Nama Partner", role: "Partner Konsultan" },
];

export default function Team() {
  return (
    <section id="tim" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-16 md:px-10 md:py-24">
      <SectionHeading num="06" label="TIM" title="Ditulis oleh Mereka yang Menandatangani." />
      <div className="mt-14 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
        {TEAM.map((t) => (
          <figure key={t.name} className="flex items-center gap-6 border-t border-ink/15 pt-8">
            {t.img ? (
              <img
                src={t.img}
                alt={t.name}
                className="h-28 w-auto shrink-0 rounded-[2px] border border-ink/25 bg-paper object-cover md:h-40"
              />
            ) : (
              <span
                aria-hidden="true"
                className="flex h-16 w-16 shrink-0 items-center justify-center border border-ink/25 bg-paper font-display text-xl font-semibold text-accent md:h-20 md:w-20"
              >
                {t.name.charAt(0)}
              </span>
            )}
            <figcaption>
              <p className="kicker mb-2">{t.role}</p>
              <h3 className="font-display text-2xl font-semibold text-ink">{t.name}</h3>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}