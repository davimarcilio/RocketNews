/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        'Spartan': "'League Spartan', 'sans-serif'",
        'WorkSans': "'Work Sans', 'sans-serif'",
      },
      dropShadow: {
        '3xl': '4px 10px 15px rgba(0, 0, 0, 0.5)'
      },
      colors: {
        'black': '#121214',
        'text-color': '#E1E1E6',
        'title-color': '#04D361',
        'form-color': '#A8A8A8',
        'button-color': '#8257e5',
        'button-color-hover': '#6e3be3'
      }
    },

  },
  plugins: [],
}
