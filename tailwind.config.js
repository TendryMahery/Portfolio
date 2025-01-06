/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    container:{
      padding: {
        DEFAULT: '15px'
      }
    },
    screens:{
      xs: '230px',
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px'
    },
    fontFamily:{
      primary: 'DM serif Display',
      secondary: 'Jost'
    },
    backgroundImage:{
      back1: 'url(/public/image/back1.jpg)',
      grid: 'url(/public/image/back2.jpg)'
    },
    extend: {},
  },
  plugins: [require('daisyui')],
}

