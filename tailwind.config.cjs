/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    fontSize: {
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      '2xl': 32
    },


    colors: {
      black: '#000',
      white: 'fff',

      gray: {
        900: '#121214',
        800: '#202024',
        400: '#7c7c8a',
        200: '#c4c4cc',
        100: '#E1E1E6',
      },

      cyan: {
        500: '#81D8F7',
        300: '#9BE1FB',
      },

      'red-800': '#C00808',
      'green-500': '#2AF719',
      transparent: 'transparent'

    },
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif'
      },
    },
  },
  plugins: [],
}
