module.exports = {
  content: ['./*.html'],
  theme: {
    screens:{
      sm: "480px",
      md:"768px",
      lg:"976px",
      xlg:"1440px",
    },
    extend: {
      fontFamily:{
        sans:['Josefin Sans','sans-serif'],
        alata:['alata']
      },
      letterSpacing:{
        widest:'0.3em'
      }
    },
  },
  plugins: [],
}
