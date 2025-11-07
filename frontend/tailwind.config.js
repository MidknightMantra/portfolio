/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        cinematic: {
          900: "#0b0b12",
          800: "#11131b",
          700: "#181b25"
        }
      }
    }
  },
  plugins: []
}
