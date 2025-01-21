/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        accent : "#179957",
        accentDark : "#184D47",
        'charcoal-gre': '#2e2e2e' ,
        'golden-brown': '#996515' ,
         'dark-olive-green': '#556B2F'
      },
      container:{
        center:true,
        padding:"15px"
      }
    },
  },
  plugins: [],
}

