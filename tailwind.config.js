/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/index.html",
    "./src/components/**/*.{html,js}",
    "./src/**/*.{js,ts,jsx,tsx}", // Add this line
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Montserrat', 'sans-serif'],
      },
      colors: {
        'brand-blue': {
          '700': '#004A99',
          '900': '#002E5D',
        },
        'brand-yellow': {
          '400': '#FFC72C',
          '500': '#F7B801',
        },
      }
    },
  },
  plugins: [],
}
