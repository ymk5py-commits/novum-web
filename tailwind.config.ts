import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /* Navy NOVUM, corrido al de la identidad de several.: un punto más
           profundo y más azul. Se mantienen los nombres 50–950 para no tocar
           los ~14 componentes que ya los usan. */
        navy: {
          50:  "#EAEEF6",
          100: "#C9D2E6",
          200: "#92A3C5",
          300: "#5B73A2",
          400: "#34507F",
          500: "#2A4C8A",
          600: "#1F3A66",
          700: "#182155",
          800: "#131C55",
          900: "#0E1548",
          950: "#0A1240",   // base — el navy de la referencia
        },
        /* EL ACENTO PASA DE COBALTO A MENTA.
         *
         * La escala conserva el nombre `cobalt` a propósito: está usada en ~105
         * lugares y renombrarla obligaba a tocar los 14 componentes de la home
         * para un cambio puramente cromático. Redefinir los valores mueve el
         * sitio entero a la identidad nueva en un solo archivo.
         *
         * Reparto pensado por USO real, no por prolijidad de escala:
         *  · 100–300 son texto sobre el navy → menta brillante (≈9:1, sobra AA).
         *  · 400–500 son glows y rellenos tintados con opacidad → el menta firma.
         *  · 700 es el menta oscuro, el único que sirve para texto sobre claro
         *    (el menta puro sobre blanco no llega a 4.5:1). */
        cobalt: {
          50:  "#E8FCF4",
          100: "#BCF5E0",
          200: "#86ECC8",
          300: "#55E3B4",
          400: "#2FE3AE",   // la menta de la marca
          500: "#21C994",
          600: "#12A97A",
          700: "#0B7A5B",   // menta legible sobre fondos claros
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
        logo: ["var(--font-logo)", "var(--font-display)", "ui-sans-serif", "system-ui"],
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
        "glass-lg": "0 1px 0 0 rgba(255,255,255,0.10) inset, 0 0 0 1px rgba(255,255,255,0.07), 0 40px 100px -30px rgba(10,18,64,0.7)",
        glow: "0 0 0 1px rgba(85,227,180,0.35), 0 8px 32px -8px rgba(47,227,174,0.55)",
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
          "0%": { boxShadow: "0 0 0 0 rgba(47,227,174,0.6)" },
          "100%": { boxShadow: "0 0 0 22px rgba(47,227,174,0)" },
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
