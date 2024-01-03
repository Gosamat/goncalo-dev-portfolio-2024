/** @type {import('tailwindcss').Config} */

const {nextui} = require("@nextui-org/react");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'noisy-blue': '#3138fb',
      },
    },
  },
  darkMode: "class",

  plugins: [nextui()],
}