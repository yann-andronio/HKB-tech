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
        'fond-degradedark': 'linear-gradient(to bottom, #000C18 0%, #1F3C61 50%, #EEF6FA 100%)',
        'fond-degradelight': 'linear-gradient(to bottom, #DDEDF4 0%, #B8D6E7 50%, #7EBBD5 100%)',

      },
    },
  },
  plugins: [],
}
