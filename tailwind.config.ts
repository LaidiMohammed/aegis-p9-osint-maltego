import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#07090e",
        panel: "#0d111a",
        signal: "#ff4d3d",
        cyan: "#22d3ee",
        amber: "#f5b544",
        mist: "#94a3b8",
      },
      fontFamily: {
        display: ["var(--font-display)", "Arial", "sans-serif"],
        mono: ["var(--font-mono)", "Consolas", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
