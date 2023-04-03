/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#605f5f',
        grey: {
          medium: '#717171',
          light: '#828990'
        },
        beige: {
          light: '#dfdedc'
        }
      },
      fontFamily: {
        sans: ['Bangla', 'cursive'],
      },
    },
  },
  plugins: [],
}
