/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      screens: {
          sm:'480px',
          md:'768px',
          lg:'976px',
          blg:'1024',
          xl:'1440px'
      },
    extend: {
      flexGrow:
          {
            1:'1' ,
            2: '2',
            3:'3'
          },
      flex: {
        '2': '2 2 0%'
      }
    },
  },
  plugins: [],
}

