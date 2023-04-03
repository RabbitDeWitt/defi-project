/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#00d8ff',
        'primary-purple': '#6a00ff'
      },
      fontFamily: {
        'kanit': ['Kanit', 'sans-serif']
      }
    },
  },
  plugins: [],
}