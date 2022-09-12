/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html"],
  theme: {
    screens: {
      sm: '640px',
      xl: '768px',
      md: '1024px',
      lg: '1280px',
    },
    extend: {
      backgroundImage: {
        'backImage' : "url('/img/Background image.jpg')",
      }
    }
  },
  plugins: [],
}
