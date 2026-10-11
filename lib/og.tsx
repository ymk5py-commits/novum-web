import { ImageResponse } from "next/og";

const fuente = (font: string) =>
  fetch(`https://cdn.jsdelivr.net/fontsource/fonts/${font}.ttf`).then((response) => {
    if (!response.ok) throw new Error(`fuente ${font}`);
    return response.arrayBuffer();
  });

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

export async function brandOG({ etiqueta, titulo, bajada }: { etiqueta: string; titulo: string; bajada?: string }) {
  const [mont5, mono] = await Promise.all([
    fuente("montserrat@latest/latin-500-normal"),
    fuente("ibm-plex-mono@latest/latin-400-normal"),
  ]);

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", position: "relative", display: "flex", flexDirection: "column", overflow: "hidden", color: "#f8fbff", background: "#071832", padding: "56px 68px" }}>
        <div style={{ position: "absolute", right: -150, top: -180, display: "flex", width: 750, height: 750, borderRadius: 375, background: "radial-gradient(circle, rgba(28,145,212,.58), rgba(7,24,50,0) 68%)" }} />
        <div style={{ position: "absolute", right: 100, top: 60, display: "flex", width: 360, height: 360, border: "1px solid rgba(131,213,242,.2)", borderRadius: 180 }} />
        <div style={{ position: "absolute", right: 40, top: 0, display: "flex", width: 480, height: 480, border: "1px solid rgba(131,213,242,.14)", borderRadius: 240 }} />
        <div style={{ display: "flex", flexDirection: "column", width: 270, alignItems: "center", zIndex: 1 }}>
          <div style={{ fontFamily: "Montserrat", fontWeight: 500, fontSize: 35, letterSpacing: 9, marginRight: -9 }}>NOVUM</div>
          <div style={{ display: "flex", width: "100%", alignItems: "center", gap: 10, marginTop: 9, color: "#9bb8d6" }}>
            <div style={{ display: "flex", flex: 1, height: 1, background: "#9bb8d6" }} />
            <div style={{ fontFamily: "Plex Mono", fontSize: 11, letterSpacing: 4 }}>holding</div>
            <div style={{ display: "flex", flex: 1, height: 1, background: "#9bb8d6" }} />
          </div>
        </div>
        <div style={{ zIndex: 1, display: "flex", flexDirection: "column", flex: 1, justifyContent: "flex-end" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 11, fontFamily: "Plex Mono", fontSize: 17, color: "#8ce7f6", textTransform: "uppercase", letterSpacing: 2 }}>
            <div style={{ width: 8, height: 8, borderRadius: 4, background: "#8ce7f6" }} />{etiqueta}
          </div>
          <div style={{ fontFamily: "Montserrat", fontWeight: 500, fontSize: 64, lineHeight: 1.1, letterSpacing: -3, marginTop: 22, maxWidth: 920 }}>{titulo}</div>
          {bajada ? <div style={{ fontFamily: "Plex Mono", fontSize: 19, color: "#bbcee5", marginTop: 22, maxWidth: 900 }}>{bajada}</div> : null}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", zIndex: 1, marginTop: 38, paddingTop: 18, borderTop: "1px solid rgba(188,222,255,.27)", fontFamily: "Plex Mono", fontSize: 14, color: "#91aeca" }}><span>Productos propios · Software a medida</span><span>novumholding.lat</span></div>
      </div>
    ),
    { ...OG_SIZE, fonts: [{ name: "Montserrat", data: mont5, weight: 500, style: "normal" }, { name: "Plex Mono", data: mono, weight: 400, style: "normal" }] },
  );
}
