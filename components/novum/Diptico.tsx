import Image from "next/image";
import type { Bloque } from "@/lib/productos";

export default function Diptico({ bloque, indice }: { bloque: Bloque; invertido?: boolean; indice: number }) {
  return (
    <article className="feature-row">
      <div className="feature-row__text">
        <span className="feature-row__number">0{indice + 1} / Funcionalidad</span>
        <h3>{bloque.t}</h3>
        <p>{bloque.d}</p>
      </div>
      <div className="feature-row__visual">
        {bloque.imagen ? (
          <figure>
            <Image src={bloque.imagen.src} alt={bloque.imagen.alt} width={2160} height={1350} sizes="(max-width: 800px) 100vw, 55vw" priority={indice === 0} />
            <figcaption>{bloque.imagen.pie}</figcaption>
          </figure>
        ) : (
          <ul className="feature-row__details">{bloque.detalle?.map((detalle) => <li key={detalle}>{detalle}</li>)}</ul>
        )}
      </div>
    </article>
  );
}
