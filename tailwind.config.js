/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Yekan", "Arial", "Helvetica Neue", "Helvetica"]
      },
      boxShadow:{
        'menu': '0 -8px 0 0 #f8e88b,0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)'
      }
    },
  },
  plugins: [],
}

