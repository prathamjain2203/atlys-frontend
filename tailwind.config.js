/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        primary: '#27292D',
        app: '#131319',
        secondary: '#4A96FF',
        tertiary: '#191920',
      },
      colors: {
        primary: '#6B6C70',
        secondary: '#C5C7CA',
        tertiary: '#7F8084',
        quaternary: 'rgba(197, 199, 202, 1)',
      },
      borderColor: {
        primary: 'linear-gradient(141.38deg, #969696 0.56%, #343434 99.58%)',
        secondary: '#35373B',
      },
    },
  },
  plugins: [],
};
