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
        serif: ['Fraunces', 'Georgia', 'serif'],
        body: ['Work Sans', 'Inter', 'sans-serif'],
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
        'navy': {
          DEFAULT: '#142850',
          deep: '#0B1B33',
          light: '#1A3566',
        },
        'gold': {
          DEFAULT: '#D9A441',
          deep: '#B5852A',
          light: '#E8C068',
        },
        'cream': {
          DEFAULT: '#F5EFE4',
          light: '#FAF7F2',
        },
        'ink': '#1F2430',
        'slate': '#5B6472',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-soft': 'pulse-soft 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-soft': {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.05)', opacity: '0.9' },
        },
      },
    },
  },
  plugins: [],
}
