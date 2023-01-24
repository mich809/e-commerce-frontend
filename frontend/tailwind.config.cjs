/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      letterSpacing:{
        letterSpace : '30px'
      } ,
      keyframes:{
        'open-menu':{
          '0%': {transform: 'scaleX(0)'},
          '80%': {transform: 'scaleX(1.2)'},
          '100%':{transform : 'scale(1)'},
        },
        
      },
      animation:{
        'open-menu': 'open-menu 0.3s ease-in-out forwards',
        
      }
    },
  },
  plugins: [],
}