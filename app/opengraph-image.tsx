import { ImageResponse } from "next/og";
import { SITE } from "@/lib/site";

export const runtime = "edge";
export const alt = `${SITE.name} — ${SITE.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function loadFont(url: string) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`font ${url}`);
  return res.arrayBuffer();
}

export default async function OG() {
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
          background:
            "linear-gradient(135deg, #15294A 0%, #0A1530 45%, #070F22 100%)",
          fontFamily: "Inter",
          position: "relative",
        }}
      >
        {/* glow */}
        <div
          style={{
            position: "absolute",
            top: -160,
            left: 120,
            width: 700,
            height: 500,
            background: "radial-gradient(circle at center, rgba(77,124,255,0.45) 0%, rgba(7,15,34,0) 70%)",
            display: "flex",
          }}
        />

        {/* top row */}
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "8px 16px",
              borderRadius: 999,
              border: "1px solid rgba(122,156,255,0.35)",
              background: "rgba(77,124,255,0.12)",
              color: "#A8C0FF",
              fontFamily: "InterSemi",
              fontSize: 22,
              letterSpacing: 4,
              textTransform: "uppercase",
            }}
          >
            <div style={{ width: 10, height: 10, borderRadius: 999, background: "#4D7CFF", display: "flex" }} />
            Holding · Studio
          </div>
        </div>

        {/* center brand */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontFamily: "Jost",
              fontSize: 168,
              color: "#F3F1EA",
              letterSpacing: 28,
              lineHeight: 1,
            }}
          >
            NOVUM
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginTop: 14, paddingLeft: 6 }}>
            <div style={{ width: 56, height: 2, background: "rgba(243,241,234,0.4)", display: "flex" }} />
            <div
              style={{
                display: "flex",
                fontFamily: "Jost",
                fontSize: 28,
                color: "rgba(243,241,234,0.7)",
                letterSpacing: 16,
                textTransform: "uppercase",
              }}
            >
              holding
            </div>
            <div style={{ width: 56, height: 2, background: "rgba(243,241,234,0.4)", display: "flex" }} />
          </div>
        </div>

        {/* bottom: tagline + products */}
        <div style={{ display: "flex", flexDirection: "column", gap: 26 }}>
          <div
            style={{
              display: "flex",
              fontFamily: "InterSemi",
              fontSize: 40,
              color: "#EFEFE7",
              maxWidth: 940,
            }}
          >
            Sistemas que piensan, venden y operan por ti.
          </div>
          <div style={{ display: "flex", gap: 14 }}>
            {SITE.products.map((p) => (
              <div
                key={p.slug}
                style={{
                  display: "flex",
                  padding: "10px 22px",
                  borderRadius: 999,
                  border: "1px solid rgba(255,255,255,0.12)",
                  background: "rgba(255,255,255,0.05)",
                  color: "#D3DFFF",
                  fontSize: 26,
                  letterSpacing: 1,
                }}
              >
                {p.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Jost", data: jost, weight: 300, style: "normal" },
        { name: "Inter", data: inter, weight: 400, style: "normal" },
        { name: "InterSemi", data: interSemi, weight: 600, style: "normal" },
      ],
    }
  );
}
