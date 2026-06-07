import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Navy extraído del logo NOVUM — #0F1F3D base
        navy: {
          50:  "#EAEEF6",
          100: "#C9D2E6",
          200: "#92A3C5",
          300: "#5B73A2",
          400: "#34507F",
          500: "#1E3A66",
          600: "#15294A",
          700: "#0F1F3D",   // brand exacto del logo
          800: "#0A1530",
          900: "#070F22",
          950: "#040814",
        },
        // Azul cobalto premium para CTAs y acentos
        cobalt: {
          50:  "#EDF2FF",
          100: "#D3DFFF",
          200: "#A8C0FF",
          300: "#7A9CFF",
          400: "#4D7CFF",
          500: "#2F62F5",
          600: "#1F4BD6",
          700: "#1838A0",
        },
        // Ivory cálido (no blanco puro)
        ivory: {
          50:  "#FBFAF7",
          100: "#F3F1EA",
          200: "#E3DFD3",
          300: "#A8A89A",
        },
        // Signals discretos
        signal: {
          mint:  "#7BE3B3",
          amber: "#F4C46A",
          coral: "#FF8A7A",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "ui-sans-serif", "system-ui"],
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
        serif: ["var(--font-serif)", "ui-serif", "Georgia"],
      },
      letterSpacing: {
        tightest: "-0.045em",
        snug: "-0.02em",
        wide2: "0.04em",
        ultrawide: "0.32em",
      },
      backdropBlur: {
        xs: "2px",
        "3xl": "40px",
      },
      boxShadow: {
        glass: "0 1px 0 0 rgba(255,255,255,0.08) inset, 0 0 0 1px rgba(255,255,255,0.06), 0 24px 60px -20px rgba(0,0,0,0.55)",
        "glass-lg": "0 1px 0 0 rgba(255,255,255,0.10) inset, 0 0 0 1px rgba(255,255,255,0.07), 0 40px 100px -30px rgba(15,31,61,0.7)",
        glow: "0 0 0 1px rgba(122,156,255,0.35), 0 8px 32px -8px rgba(77,124,255,0.55)",
      },
      keyframes: {
        marquee: { from: { transform: "translateX(0)" }, to: { transform: "translateX(-50%)" } },
        aurora: {
          "0%,100%": { transform: "translate3d(-10%, -10%, 0) rotate(0deg)", opacity: "0.55" },
          "50%": { transform: "translate3d(10%, 5%, 0) rotate(180deg)", opacity: "0.75" },
        },
        floaty: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseRing: {
          "0%": { boxShadow: "0 0 0 0 rgba(77,124,255,0.6)" },
          "100%": { boxShadow: "0 0 0 22px rgba(77,124,255,0)" },
        },
        shine: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(200%)" },
        },
        ticker: {
          "0%,100%": { opacity: "0.3" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        marquee: "marquee 42s linear infinite",
        aurora: "aurora 22s ease-in-out infinite",
        floaty: "floaty 7s ease-in-out infinite",
        pulseRing: "pulseRing 2.4s ease-out infinite",
        shine: "shine 2.6s ease-in-out infinite",
        ticker: "ticker 1.8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
