/* Imagen Open Graph de NOVUM con el sistema de design.md: papel claro, tinta navy,
 * wordmark del logo arriba, titular en Newsreader y un filete latón. */
import { ImageResponse } from "next/og";

const fuente = (f: string) =>
  fetch(`https://cdn.jsdelivr.net/fontsource/fonts/${f}.ttf`).then((r) => {
    if (!r.ok) throw new Error(`fuente ${f}`);
    return r.arrayBuffer();
  });

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

// Mismos valores que los tokens de app/globals.css, en hex (Satori no entiende oklch).
const PAPEL = "#f4f6fa";
const TINTA = "#14213a";
const GRIS = "#5c6577";
const FILETE = "#d3d8e1";
const LATON = "#c8962f";

export async function brandOG({ etiqueta, titulo, bajada }: { etiqueta: string; titulo: string; bajada?: string }) {
  const [news, mont5, mont3, mono] = await Promise.all([
    fuente("newsreader@latest/latin-300-normal"),
    fuente("montserrat@latest/latin-500-normal"),
    fuente("montserrat@latest/latin-300-normal"),
    fuente("ibm-plex-mono@latest/latin-400-normal"),
  ]);
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", background: PAPEL, color: TINTA, padding: "56px 72px" }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div style={{ fontFamily: "Montserrat", fontWeight: 500, fontSize: 40, letterSpacing: 13, marginRight: -13 }}>NOVUM</div>
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginTop: 6 }}>
            <div style={{ width: 54, height: 1, background: TINTA }} />
            <div style={{ fontFamily: "Montserrat", fontWeight: 300, fontSize: 14, letterSpacing: 6 }}>holding</div>
            <div style={{ width: 54, height: 1, background: TINTA }} />
          </div>
        </div>
        <div style={{ display: "flex", marginTop: 26, height: 4, borderTop: `1px solid ${TINTA}`, borderBottom: `1px solid ${TINTA}` }} />
        <div style={{ display: "flex", flexDirection: "column", flex: 1, justifyContent: "flex-end" }}>
          <div style={{ fontFamily: "Plex Mono", fontSize: 20, color: GRIS }}>{etiqueta}</div>
          <div style={{ fontFamily: "Newsreader", fontWeight: 300, fontSize: 76, lineHeight: 1.02, letterSpacing: -2, marginTop: 14, maxWidth: 980 }}>{titulo}</div>
          {bajada ? <div style={{ fontFamily: "Plex Mono", fontSize: 22, color: GRIS, marginTop: 22, maxWidth: 900 }}>{bajada}</div> : null}
          <div style={{ display: "flex", marginTop: 30, borderTop: `1px solid ${FILETE}` }}>
            <div style={{ width: 120, height: 3, background: LATON, marginTop: -2 }} />
          </div>
        </div>
      </div>
    ),
    {
      ...OG_SIZE,
      fonts: [
        { name: "Newsreader", data: news, weight: 300, style: "normal" },
        { name: "Montserrat", data: mont5, weight: 500, style: "normal" },
        { name: "Montserrat", data: mont3, weight: 300, style: "normal" },
        { name: "Plex Mono", data: mono, weight: 400, style: "normal" },
      ],
    },
  );
}
