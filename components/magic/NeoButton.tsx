import { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

/**
 * NeoButton — CTA estilo "Neo / Shiny" de 21st.dev adaptado a la paleta NOVUM:
 * borde en gradiente por capas, base navy, glow cobalto, texto degradado y
 * barrido de luz al hover. Renderiza un enlace.
 */
type Size = "sm" | "md" | "lg";

const SIZES: Record<Size, string> = {
  sm: "h-10 px-5 text-sm",
  md: "h-12 px-6 text-sm",
  lg: "h-[52px] px-7 text-base",
};

export function NeoButton({
  href = "#",
  children,
  size = "md",
  icon = true,
  leftIcon,
  className = "",
}: {
  href?: string;
  children: ReactNode;
  size?: Size;
  icon?: boolean;
  leftIcon?: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`group relative inline-flex items-center justify-center overflow-hidden rounded-full transition-all duration-500 hover:-translate-y-0.5 ${SIZES[size]} ${className}`}
    >
      {/* borde en gradiente */}
      <span className="absolute inset-0 rounded-full bg-gradient-to-b from-cobalt-300 via-navy-800 to-cobalt-500 p-[1.5px]">
        <span className="absolute inset-0 rounded-full bg-navy-900 opacity-90" />
      </span>

      {/* capas de base */}
      <span className="absolute inset-[1.5px] rounded-full bg-navy-900 opacity-95" />
      <span className="absolute inset-[1.5px] rounded-full bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900 opacity-90" />
      <span className="absolute inset-[1.5px] rounded-full bg-gradient-to-br from-cobalt-400/15 via-navy-900 to-navy-800/60" />
      <span className="absolute inset-[1.5px] rounded-full shadow-[inset_0_0_15px_rgba(46,131,245,0.20)]" />

      {/* contenido */}
      <span className="relative z-10 flex items-center gap-2">
        {leftIcon}
        <span className="bg-gradient-to-b from-[#EAF2FF] to-[#9AC4FF] bg-clip-text font-medium tracking-snug text-transparent drop-shadow-[0_0_12px_rgba(46,131,245,0.35)]">
          {children}
        </span>
        {icon && (
          <ArrowUpRight className="h-4 w-4 text-cobalt-100 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        )}
      </span>

      {/* barrido de luz al hover */}
      <span className="absolute inset-[1.5px] rounded-full bg-gradient-to-r from-navy-800/20 via-cobalt-400/15 to-navy-800/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* glow exterior */}
      <span className="absolute -inset-1 -z-10 rounded-full bg-cobalt-500/0 blur-md transition-all duration-300 group-hover:bg-cobalt-500/15" />
    </a>
  );
}
