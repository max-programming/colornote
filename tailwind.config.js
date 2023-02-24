// @ts-check
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        dracula: {
          yellow: '#f1fa8c',
          red: '#ff5555',
          green: '#50fa7b',
          blue: '#8be9fd',
        },
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['dracula'],
  },
};
