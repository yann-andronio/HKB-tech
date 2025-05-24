/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {

        'fond-degradedark': 'linear-gradient(to bottom, #000C18 0%, #1F3C61 50%, #2A3A59 100%)',
        'fond-degradelight': 'linear-gradient(to bottom, #DDEDF4 0%, #B8D6E7 50%, #7EBBD5 100%)',
        'fondprincipal-degradedark': 'linear-gradient(to bottom, #2A3A59 0%, #1F3C61 50%, #000C18 100%)',
        'fondprincipal-degradelight': 'linear-gradient(to bottom, #7EBBD5 100% ,#DDEDF4 0%, #B8D6E7 50%)',



      },
    },
  },
  plugins: [],
}
