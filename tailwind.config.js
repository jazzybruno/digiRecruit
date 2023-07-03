/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customTeal : '#38b2d3',
        customPink : '#f17ab2',
        brand : "#0B85E2"
      }
    },
    fontFamily: {
      custom: ['CustomFont', 'sans-serif'],
    },
  },
  plugins: [],
}