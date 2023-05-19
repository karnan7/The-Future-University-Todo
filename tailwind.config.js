/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'button-green':'#4EB570',
        'gray': '#F0F1F1',       
      }
    },
  },
  plugins: [],
}

