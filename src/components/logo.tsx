function PulseIcon({ variant = "dark", size = 28 }: { variant?: "light" | "dark"; size?: number }) {
  const bgFill = variant === "dark" ? "#0F172A" : "#FFFFFF";
  const lineFill = variant === "dark" ? "#FFFFFF" : "#0F172A";
  const accentFill = "#2563EB";
  const strokeBorder = variant === "light" ? "#E2E8F0" : "none";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      fill="none"
      width={size}
      height={size}
      className="shrink-0"
    >
      <rect x="4" y="4" width="56" height="56" rx="12" fill={bgFill} stroke={strokeBorder} strokeWidth={variant === "light" ? 1 : 0} />
      <line x1="12" y1="40" x2="22" y2="40" stroke={lineFill} strokeWidth="4" strokeLinecap="round" />
      <polyline points="22,40 27,40 32,14 37,40 42,40" stroke={accentFill} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <line x1="42" y1="40" x2="52" y2="40" stroke={lineFill} strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

export function Logo({ variant = "dark" }: { variant?: "light" | "dark" }) {
  return (
    <div className="flex items-center gap-2.5 font-display tracking-tight text-2xl">
      <PulseIcon variant={variant} size={32} />
      <div>
        <span className={`font-medium ${variant === "dark" ? "text-white" : "text-navy"}`}>Show</span>
        <span className="font-bold text-electric"> Rev</span>
      </div>
    </div>
  );
}
