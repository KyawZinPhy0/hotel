/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0px 0px 40px rgba(29, 58, 83, 0.1)',
        'sm':'0 1rem 3rem rgba(29, 58, 83, 0.15)'
      }
    },
  },
  plugins: [],
}

