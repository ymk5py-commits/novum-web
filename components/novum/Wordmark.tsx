/** Logotipo tipográfico de NOVUM. La versión compacta conserva la composición del logo original. */
export default function Wordmark({
  tamano = "mast",
  className = "",
}: {
  tamano?: "mast" | "barra" | "pie";
  animado?: boolean;
  className?: string;
}) {
  return (
    <span className={`novum-wordmark novum-wordmark--${tamano} ${className}`} role="img" aria-label="NOVUM holding" translate="no">
      <span className="novum-wordmark__name" aria-hidden>NOVUM</span>
      <span className="novum-wordmark__sub" aria-hidden><span />holding<span /></span>
    </span>
  );
}
