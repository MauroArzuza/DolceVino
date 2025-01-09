import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
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
        customText: {
          yellow1: "#BCBF6B",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
