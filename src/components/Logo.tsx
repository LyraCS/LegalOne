const ACCENT = "#E30613"

type LogoProps = {
  className?: string;
  tone?: "dark" | "light";
  variant?: "full" | "mark";
};

export default function Logo({
  className = "",
  tone = "dark",
  variant = "full",
}: LogoProps) {
  const ink = tone === "dark" ? "#111111" : "#FFFFFF";

  return (
    <span className={`inline-flex items-center ${className}`}>
      <svg
        viewBox="0 0 120 96"
        className="h-[1.15em] w-auto"
        role="img"
        aria-label="LegalOne"
      >
        <rect x="56" y="3" width="8" height="7" fill={ACCENT} />
        <rect x="25" y="8" width="70" height="4" fill={ink} />
        <rect x="57" y="12" width="6" height="52" fill={ink} />
        <rect x="44" y="64" width="32" height="5" fill={ink} />
        <rect x="23" y="12" width="4" height="36" fill={ink} />
        <rect x="93" y="12" width="4" height="36" fill={ink} />
        <path
          d="M 9 48 Q 25 58 41 48"
          fill="none"
          stroke={ink}
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M 79 48 Q 95 58 111 48"
          fill="none"
          stroke={ink}
          strokeWidth="3"
          strokeLinecap="round"
        />
        <text
          x="25"
          y="50"
          textAnchor="middle"
          fontFamily="Fraunces, Georgia, serif"
          fontSize="24"
          fontWeight="700"
          fill={ink}
        >
          L
        </text>
        <text
          x="95"
          y="50"
          textAnchor="middle"
          fontFamily="Fraunces, Georgia, serif"
          fontSize="24"
          fontWeight="700"
          fill={ink}
        >
          1
        </text>
      </svg>
      {variant === "full" && (
        <span className="ml-2.5 font-display font-black tracking-tight">
          LEGAL<span className="text-accent">ONE</span>
        </span>
      )}
    </span>
  );
}
