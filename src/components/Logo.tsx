const ACCENT = "#E30613"

type LogoProps = {
  className?: string;
  variant?: "full" | "mark";
};

export default function Logo({
  className = "",
  variant = "full",
}: LogoProps) {
  return (
    <span className={`font-display font-black tracking-tight ${className}`}>
      LEGAL<span style={{ color: ACCENT }}>ONE</span>
      {variant === "full" && <span>.ID</span>}
    </span>
  );
}
