import type { Config } from "tailwindcss"

import typography from "@tailwindcss/typography"
import daisyui from "daisyui"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        "hand-wave": "hand-wave 2.5s ease-in-out infinite",
      },
      keyframes: {
        "hand-wave": {
          "0%": {
            transform: "rotate(0)",
            "transform-origin": "70% 70%",
          },
          "10%": { transform: "rotate(14.0deg)" },
          "20%": { transform: "rotate(-8.0deg)" },
          "30%": { transform: "rotate(14.0deg)" },
          "40%": { transform: "rotate(-4.0deg)" },
          "50%": { transform: "rotate(10.0deg)" },
          "60%": { transform: "rotate( 0.0deg)" },
          "100%": { transform: "rotate( 0.0deg)" },
        },
      },
    },
  },
  daisyui: {
    themes: ["light", "dark", "corporate", "business", "synthwave"],
  },
  plugins: [typography, daisyui],
}
export default config
