/* El logo de NOVUM como texto: «NOVUM» espaciado y «holding» entre dos filetes (copia de logo-azul.jpeg).
 * Con `animado`, entra una sola vez al cargar (CSS, corre antes de que llegue el JavaScript):
 * las letras suben escalonadas desde una máscara y los filetes se dibujan desde la palabra hacia afuera. */
import type { CSSProperties } from "react";

const LETRAS = ["N", "O", "V", "U", "M"];

const TAMANOS = {
  mast: { nombre: "clamp(1.9rem, 1.2rem + 3vw, 3.1rem)", holding: "clamp(0.62rem, 0.5rem + 0.4vw, 0.8rem)", filete: "clamp(2rem, 4vw, 3.4rem)" },
  barra: { nombre: "1.05rem", holding: "0.5rem", filete: "1.1rem" },
  pie: { nombre: "clamp(2.6rem, 1.4rem + 6vw, 6rem)", holding: "clamp(0.7rem, 0.5rem + 0.6vw, 1rem)", filete: "clamp(2.5rem, 7vw, 6rem)" },
} as const;

const d = (seg: number) => ({ "--d": `${seg}s` }) as CSSProperties;

export default function Wordmark({
  tamano = "mast",
  animado = false,
  className = "",
}: {
  tamano?: keyof typeof TAMANOS;
  animado?: boolean;
  className?: string;
}) {
  const t = TAMANOS[tamano];
  return (
    <span className={`inline-flex flex-col items-center font-wordmark leading-none ${className}`} role="img" aria-label="NOVUM holding">
      <span aria-hidden className="flex font-medium" style={{ fontSize: t.nombre, letterSpacing: "0.32em", marginRight: "-0.32em" }}>
        {LETRAS.map((l, i) => (
          <span key={i} className="inline-block overflow-hidden pb-[0.06em]">
            <span className={`inline-block ${animado ? "anim-subir" : ""}`} style={animado ? d(0.05 + i * 0.06) : undefined}>
              {l}
            </span>
          </span>
        ))}
      </span>
      <span aria-hidden className="mt-[0.5em] flex items-center gap-[0.9em]" style={{ fontSize: t.holding }}>
        <span className={`block h-px origin-right bg-current ${animado ? "anim-trazar" : ""}`} style={{ width: t.filete, ...(animado ? d(0.35) : {}) }} />
        <span className={`font-light ${animado ? "anim-fundido" : ""}`} style={{ letterSpacing: "0.42em", marginRight: "-0.42em", ...(animado ? d(0.45) : {}) }}>
          holding
        </span>
        <span className={`block h-px origin-left bg-current ${animado ? "anim-trazar" : ""}`} style={{ width: t.filete, ...(animado ? d(0.35) : {}) }} />
      </span>
    </span>
  );
}
