import type { ReactNode } from "react";

export default function SectionHeading({
  num,
  label,
  title,
}: {
  num: string;
  label: string;
  title: ReactNode;
}) {
  return (
    <div className="border-t border-ink/15 pt-6">
      <p className="kicker">
        <span className="text-accent">{num}</span>, {label}
      </p>
      <h2 className="mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-ink md:text-5xl">
        {title}
      </h2>
    </div>
  );
}