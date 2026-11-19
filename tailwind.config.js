/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#0A0A0A',
          800: '#171717',
          700: '#262626',
        },
        accent: {
          400: '#FF8F1C',
          500: '#FF6A00',
          600: '#FD4A00',
          700: '#D83D00',
        },
        brand: {
          orange: '#FF6A00',
          darkOrange: '#FD4A00',
          lightOrange: '#FF8F1C',
          charcoal: '#0A0A0A',
        }
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
