/**
 * BorderBeam — un haz de luz cobalto que recorre el borde de un contenedor
 * redondeado. Estilo MagicUI, implementado con CSS (@property + conic-gradient
 * enmascarado). El contenedor padre debe ser `relative` y tener border-radius.
 */
export function BorderBeam({
  duration,
  className = "",
}: {
  duration?: number;
  className?: string;
}) {
  return (
    <span
      aria-hidden
      className={`border-beam ${className}`}
      style={duration ? { animationDuration: `${duration}s` } : undefined}
    />
  );
}
