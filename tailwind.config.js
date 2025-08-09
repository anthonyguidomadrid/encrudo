/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      screens: {
        sm: '500px'
      },
      colors: {
        primary: '#605f5f',
        grey: {
          light: '#828990',
          medium: '#717171',
          dark: '#5f5f5f'
        },
        beige: {
          light: '#dfdedc'
        }
      },
      fontFamily: {
        sans: ['Montserrat'],
        header: ['Italiana']
      }
    }
  },
  plugins: []
}
