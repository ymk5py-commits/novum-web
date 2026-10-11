import { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

/**
 * NeoButton — CTA estilo "Neo / Shiny" de 21st.dev adaptado a la paleta NOVUM:
 * borde en gradiente por capas, base navy, glow cobalto, texto degradado y
 * barrido de luz al hover. Renderiza un enlace.
 */
type Size = "sm" | "md" | "lg";

const SIZES: Record<Size, string> = {
  sm: "h-11 px-5 text-sm",
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
      {/* borde fino, sobrio */}
      <span className="absolute inset-0 rounded-full border border-cobalt-400/40 bg-navy-900/95" />
      <span className="absolute inset-[1px] rounded-full bg-gradient-to-b from-navy-800/60 to-navy-900/95" />

      {/* contenido */}
      <span className="relative z-10 flex items-center gap-2">
        {leftIcon}
        <span className="font-medium tracking-snug text-ivory-50">
          {children}
        </span>
        {icon && (
          <ArrowUpRight className="h-4 w-4 text-cobalt-300 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        )}
      </span>

      {/* hover sutil */}
      <span className="absolute inset-[1px] rounded-full bg-cobalt-400/0 transition-colors duration-300 group-hover:bg-cobalt-400/[0.06]" />
    </a>
  );
}
