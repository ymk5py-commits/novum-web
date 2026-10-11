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
          50:  "#EEF2F8",
          100: "#D5DDE9",
          200: "#AAB8CC",
          300: "#7F90A8",
          400: "#5A6B83",
          500: "#3F5068",
          600: "#2E3E54",
          700: "#223040",
          800: "#182432",
          900: "#111B27",
          950: "#0B121A",
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
          50:  "#EAF7F5",
          100: "#C7E8E2",
          200: "#8FCFC5",
          300: "#58B4A8",
          400: "#2F978B",
          500: "#177F74",
          600: "#0F6D64",
          700: "#0B5A53",
        },
        /* Superficie CLARA — la mitad que le faltaba al sitio.
         * La referencia alterna: portadas oscuras y páginas de contenido sobre
         * un gris cálido con tarjetas blancas encima. Sin estos tokens el sitio
         * era oscuro de punta a punta y el contenido no respiraba. */
        paper: {
          DEFAULT: "#F4F1EA",
          soft: "#FAF7F1",
          card: "#FFFFFF",
          line: "#D8D2C6",
          ink: "#111B27",
          muted: "#5C665F",
        },
        // Ivory cálido (no blanco puro)
        ivory: {
          50:  "#FAF7F1",
          100: "#F2EEE6",
          200: "#DDD6CA",
          300: "#A8A092",
        },
        // Signals discretos
        signal: {
          mint:  "#2F978B",
          amber: "#B7862D",
          coral: "#B85C4B",
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
        glass: "0 1px 0 0 rgba(255,255,255,0.05) inset, 0 0 0 1px rgba(255,255,255,0.04), 0 20px 50px -24px rgba(0,0,0,0.45)",
        "glass-lg": "0 1px 0 0 rgba(255,255,255,0.06) inset, 0 0 0 1px rgba(255,255,255,0.05), 0 30px 80px -36px rgba(11,18,26,0.55)",
        glow: "0 0 0 1px rgba(47,151,139,0.28), 0 10px 28px -14px rgba(47,151,139,0.35)",
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
          "0%": { boxShadow: "0 0 0 0 rgba(47,151,139,0.35)" },
          "100%": { boxShadow: "0 0 0 18px rgba(47,151,139,0)" },
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
