/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'map-background':"url(./public/images/mapback.png)",
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        emerald: {
          ...require("daisyui/src/theming/themes")["emerald"],
          "base-100": "#FFFFFF",
          "base-200": "#F1F5F9",
          "base-300": "#E2E8F0",
          "base-cont": "#1F2937",
        },
      },
      "forest"
    ],
    darkMode: ['class', '[data-theme="forest"]']
  },
  darkMode: ['class', '[data-theme="forest"]']
}
