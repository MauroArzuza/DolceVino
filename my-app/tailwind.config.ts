import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        customBackground: {
          customGray1: "#26272B",
          customGray2: "#61605B",
          background: "var(--background)",
          foreground: "var(--foreground)",
        },
        footer: "#39342E",
        customText: {
          yellow1: "#BCBF6B",
        },
      },
    },
  },
  scale: {
    "30": "0.4",
    "40": "0.3",
  },
  plugins: [],
} satisfies Config;
