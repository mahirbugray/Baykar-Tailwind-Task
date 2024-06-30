/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "yellowSquare": "url('./src/assets/images/yellow-square.png')",
        "bigYellow":"url('./src/assets/images/big-yellow.png')",

        "worldMap": "url('./src/assets/images/web-chart.png')",
        "mobileWorldMap": "url('./src/assets/images/mobile-web-chart.png')",

        "worldPoints": "url('./src/assets/images/ellipses.png')",
        "mobileWorldPoints": "url('./src/assets/images/mobile-ellipses.png')"
      },
      fontFamily: {
        'sans': ['Roboto', 'sans-serif'],
      },
      
    },
    plugins: [],

  }
}