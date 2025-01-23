/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
     colors: {
      mainBlue: "#1C232C",
      mainYellow: "#99743F",
      mainWhite: "#FAFAFA",

    },
       screens: {
      sm: "480px",
      md: "700px",
      lg: "976px",
      xl: "1440px",
    },

    extend: {
      
    },
  },
  plugins: [],
}