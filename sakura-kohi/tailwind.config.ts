import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#F6E3DB",
        surface: "#FBF3EF",
        raised: "#EFD5C9",
        bone: "#2E2321",
        mist: "#5E4941",
        sakura: "#C65C77",
        "sakura-deep": "#9C4260",
        blush: "#EBAEB7",
        gold: "#B8863C",
        "gold-bright": "#93672A",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      letterSpacing: {
        widest2: "0.28em",
      },
      keyframes: {
        drift: {
          "0%": { transform: "translateY(-10%) translateX(0) rotate(0deg)", opacity: "0" },
          "10%": { opacity: "0.55" },
          "90%": { opacity: "0.4" },
          "100%": { transform: "translateY(110vh) translateX(40px) rotate(220deg)", opacity: "0" },
        },
        seam: {
          "0%": { strokeDashoffset: "1000" },
          "100%": { strokeDashoffset: "0" },
        },
        rise: {
          "0%": { transform: "translateY(14px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        drift: "drift linear infinite",
        seam: "seam 1.8s ease-out forwards",
        rise: "rise 0.7s cubic-bezier(0.16,1,0.3,1) forwards",
      },
    },
  },
  plugins: [],
};
export default config;
