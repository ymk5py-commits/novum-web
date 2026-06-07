import { CSSProperties } from "react";

type Size = "sm" | "md" | "lg" | "xl";

const MAP: Record<
  Size,
  { word: string; track: string; sub: string; subTrack: string; line: string; gap: string; pad: string }
> = {
  sm: { word: "text-lg",  track: "0.30em", sub: "text-[7px]",  subTrack: "0.42em", line: "w-3",  gap: "gap-1.5", pad: "mt-1" },
  md: { word: "text-3xl", track: "0.32em", sub: "text-[9px]",  subTrack: "0.46em", line: "w-5",  gap: "gap-2",   pad: "mt-1.5" },
  lg: { word: "text-6xl", track: "0.34em", sub: "text-[11px]", subTrack: "0.5em",  line: "w-8",  gap: "gap-3",   pad: "mt-2" },
  xl: {
    word: "text-[clamp(3.5rem,13vw,11rem)]",
    track: "0.30em",
    sub: "text-[clamp(10px,1.4vw,15px)]",
    subTrack: "0.55em",
    line: "w-[clamp(1.5rem,5vw,4rem)]",
    gap: "gap-[clamp(0.75rem,2vw,1.5rem)]",
    pad: "mt-2 sm:mt-4",
  },
};

/**
 * Wordmark NOVUM vectorizado (tipografía Jost) — fiel al logo de marca.
 * Hereda el color con currentColor, así funciona sobre cualquier fondo.
 */
export function NovumLogo({
  size = "md",
  subline = true,
  align = "center",
  className = "",
}: {
  size?: Size;
  subline?: boolean;
  align?: "center" | "left";
  className?: string;
}) {
  const s = MAP[size];
  const wordStyle: CSSProperties = { letterSpacing: s.track, paddingLeft: s.track };

  return (
    <div
      role="img"
      aria-label="NOVUM Holding"
      className={`inline-flex flex-col ${align === "center" ? "items-center" : "items-start"} leading-none ${className}`}
    >
      <span className={`font-logo font-light ${s.word} leading-[0.9]`} style={wordStyle}>
        NOVUM
      </span>
      {subline && (
        <span className={`flex items-center ${s.gap} ${s.pad} ${align === "left" ? "self-stretch" : ""}`}>
          <span className={`h-px ${s.line} bg-current opacity-40`} />
          <span
            className={`font-logo font-light ${s.sub} uppercase opacity-70`}
            style={{ letterSpacing: s.subTrack, paddingLeft: s.subTrack }}
          >
            holding
          </span>
          <span className={`h-px ${s.line} bg-current opacity-40`} />
        </span>
      )}
    </div>
  );
}

/** Monograma N — para marcas pequeñas / favicons inline. */
export function NovumMark({ className = "" }: { className?: string }) {
  return (
    <span
      className={`relative inline-flex h-8 w-8 items-center justify-center rounded-full bg-cobalt-500/15 ring-1 ring-cobalt-400/40 overflow-hidden ${className}`}
    >
      <span className="absolute inset-0 conic-glow opacity-50" />
      <span className="absolute inset-0 rounded-full animate-pulseRing" />
      <span className="relative z-10 font-logo text-sm font-light text-cobalt-200">N</span>
    </span>
  );
}
