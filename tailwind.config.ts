import type { Config } from "tailwindcss";
import daisyui from "daisyui";
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {},
      screens: {
        xs: "370px",
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        w3stackTheme: {
          primary: "#EF233C",
          secondary: "#D90429",
          accent: "#8D99AE",
          neutral: "#2B2D42",
          "base-100": "#EDF2F4",
          info: "#8EC0E4",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
        },
      },
    ],
  },
} satisfies Config;
