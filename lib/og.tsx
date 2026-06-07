import { ImageResponse } from "next/og";

async function loadFont(url: string) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`font ${url}`);
  return res.arrayBuffer();
}

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

/** Genera una imagen Open Graph de marca NOVUM (navy + azul). */
export async function brandOG({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  const [jost, inter, interSemi] = await Promise.all([
    loadFont("https://cdn.jsdelivr.net/fontsource/fonts/jost@latest/latin-300-normal.ttf"),
    loadFont("https://cdn.jsdelivr.net/fontsource/fonts/inter@latest/latin-400-normal.ttf"),
    loadFont("https://cdn.jsdelivr.net/fontsource/fonts/inter@latest/latin-600-normal.ttf"),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "linear-gradient(135deg, #15294A 0%, #0A1530 45%, #07142C 100%)",
          fontFamily: "Inter",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -160,
            left: 120,
            width: 700,
            height: 500,
            background: "radial-gradient(circle at center, rgba(46,131,245,0.45) 0%, rgba(7,15,34,0) 70%)",
            display: "flex",
          }}
        />

        {/* eyebrow */}
        <div style={{ display: "flex" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "8px 16px",
              borderRadius: 999,
              border: "1px solid rgba(95,161,251,0.35)",
              background: "rgba(46,131,245,0.12)",
              color: "#9AC4FF",
              fontFamily: "InterSemi",
              fontSize: 22,
              letterSpacing: 3,
              textTransform: "uppercase",
            }}
          >
            <div style={{ width: 10, height: 10, borderRadius: 999, background: "#2E83F5", display: "flex" }} />
            {eyebrow}
          </div>
        </div>

        {/* title + subtitle */}
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ display: "flex", fontFamily: "InterSemi", fontSize: 76, color: "#F3F1EA", lineHeight: 1.05, maxWidth: 1000 }}>
            {title}
          </div>
          {subtitle && (
            <div style={{ display: "flex", fontSize: 34, color: "#BFD3F5", maxWidth: 940 }}>{subtitle}</div>
          )}
        </div>

        {/* brand */}
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{ display: "flex", fontFamily: "Jost", fontSize: 34, color: "#F3F1EA", letterSpacing: 10 }}>NOVUM</div>
          <div style={{ display: "flex", width: 40, height: 2, background: "rgba(243,241,234,0.4)" }} />
          <div style={{ display: "flex", fontSize: 20, color: "rgba(243,241,234,0.6)", letterSpacing: 6, textTransform: "uppercase" }}>holding</div>
        </div>
      </div>
    ),
    {
      ...OG_SIZE,
      fonts: [
        { name: "Jost", data: jost, weight: 300 as const, style: "normal" as const },
        { name: "Inter", data: inter, weight: 400 as const, style: "normal" as const },
        { name: "InterSemi", data: interSemi, weight: 600 as const, style: "normal" as const },
      ],
    }
  );
}
