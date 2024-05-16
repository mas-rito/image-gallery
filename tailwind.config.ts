import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "0.6rem",
      },
      colors: {
        primary: "#2563EB",
      },
      animation: {
        "spin-slow": "spin 2.3s linear infinite",
      },
    },
  },
  plugins: [],
}
export default config
