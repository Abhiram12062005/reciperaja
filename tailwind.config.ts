import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          charcoal:      "#4e5650",
          deep:          "#273635",
          sage:          "#5d814c",
          forest:        "#577047",
          charcoalLight: "#6b7570",
          charcoalDark:  "#363d38",
          deepLight:     "#344948",
          deepDark:      "#1a2524",
          sageLight:     "#7da060",
          sageDark:      "#4a6739",
          forestLight:   "#6d8e5a",
          forestDark:    "#3f5233",
          cream:         "#f5f2ec",
          parchment:     "#ede8df",
          sand:          "#d8d0c0",
          stone:         "#9a9590",
          fog:           "#c8c4bc",
        },
        chilli: {
          400: "#d97070",
          500: "#c45050",
          600: "#a83535",
          700: "#8c2020",
        },
      },
      fontFamily: {
        display: ["Playfair Display", "Georgia", "serif"],
        body:    ["DM Sans", "system-ui", "sans-serif"],
        accent:  ["Baloo 2", "cursive"],
      },
    },
  },
  plugins: [],
};
export default config;
