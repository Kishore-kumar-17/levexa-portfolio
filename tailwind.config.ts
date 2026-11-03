import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#04162A", // brand navy, matched to Levexa's slides
          950: "#020D19",
          900: "#04162A",
          850: "#0A223E",
          800: "#0E2C50",
          700: "#143B68",
          600: "#1D4E85",
          border: "#E2E8F0",
          borderDark: "#163354",
        },
        gold: {
          DEFAULT: "#F5A900",
          50: "#FFF8EB",
          100: "#FEF0CE",
          200: "#FDE09C",
          300: "#FCCF6A",
          400: "#FBBF38",
          500: "#F5A900",
          600: "#D99300",
          700: "#B37600",
          800: "#8D5A00",
          hover: "#E59B00",
          bright: "#FEB005", // brand amber from the slides: buttons, and text on navy only (9.8:1)
          // Gold for TEXT. These follow the section: darker on cream/white (WCAG AA there),
          // brand amber inside an .on-dark section. Values live in globals.css.
          ink: "var(--gold-ink)", // normal-size text: 5.3:1 on cream
          deep: "var(--gold-deep)", // big headline words (24px+): 3.8:1 on cream
        },
        coolgray: {
          50: "#F8FAFC",
          100: "#F4F6F9",
          200: "#E5E9F0",
          300: "#CBD5E1",
        },
        mutedgray: {
          DEFAULT: "#64748B",
          light: "#94A3B8",
          dark: "#475569",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "-apple-system", "sans-serif"],
        display: ["var(--font-display)", "var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      boxShadow: {
        "gold-glow": "0 10px 30px -5px rgba(245, 169, 0, 0.35)",
        "gold-sm": "0 4px 15px -3px rgba(245, 169, 0, 0.25)",
        "card-subtle": "0 1px 3px rgba(0, 0, 0, 0.05), 0 10px 30px -5px rgba(0, 0, 0, 0.03)",
        "card-elevated": "0 20px 40px -15px rgba(4, 22, 42, 0.08)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

export default config;
