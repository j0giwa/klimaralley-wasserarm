/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'map-background':"url(./public/images/mapNone.jpg)",
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["emerald", "forest"],
  },
}

