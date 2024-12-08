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
        section_color: "#F0F2F3",
        button_color:"#029FAE",
        text_color: "#272343",
        nav_color: "#007580",
        background: "#ffffff",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
