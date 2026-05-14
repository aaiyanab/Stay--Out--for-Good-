import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0f2042",
          light: "#1a3460",
          dark: "#080f1e",
        },
        gold: {
          DEFAULT: "#c9933a",
          light: "#e8b86d",
        },
        cream: {
          DEFAULT: "#faf7f2",
          warm: "#fff9f3",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "hero-glow": "radial-gradient(circle at 70% 50%, rgba(201,147,58,0.08) 0%, transparent 60%)",
        "section-glow": "radial-gradient(circle at 75% 40%, rgba(201,147,58,0.08) 0%, transparent 55%)",
      },
    },
  },
  plugins: [],
};

export default config;
