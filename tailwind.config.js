/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container :{
      center : true,
      padding : '16px',
    },
    extend: {
      colors:{
        primary : '#814881',
        dark : '#1F0822', 
        secondary : '#64748b',
        highlight : '#F9CE75',
        blub : '#E77665'
      },
      screens :{
        '2xl' : '1320px'
      }
    }, 
  },
  plugins: [],
}

