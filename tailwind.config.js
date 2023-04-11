/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        primary: '#0047AB',
        hoverPrimary: '#00BFFF',
        secondary: '#475569',
      },
      boxShadow: {
        focus: '0px 0px 20px 1px #00BFFF',
      },
      fontFamily: {
        primary: ['"Roboto Slab"', 'sans-serif'],
        secondary: ['"Alkatra"', 'cursive'],
      },
    },
  },
  plugins: [],
};
