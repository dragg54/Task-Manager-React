/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'marhey': 'Marhey',
        'comfortaa': 'Comfortaa',
        'monts': 'Montserrat'
      },
      backgroundImage:{
        'bgImg': "url('./assets/signin.png')"
      }
    },
  },
  plugins: [],
}