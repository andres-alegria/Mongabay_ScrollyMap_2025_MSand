const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  fontFamily: {
    display: ['Lora', 'Open Sans', ...defaultTheme.fontFamily.sans],
    body: ['Lora', 'Open Sans', ...defaultTheme.fontFamily.sans],
  },
  theme: {
    extend: {
      colors: {
        primary: '#006a54',
        mongazon: '#e6a444',
      },
      borderWidth: {
        0.75: '0.75px',
      },
      fontSize: {
        '2xl': '2rem',
      },
    },
  },
};
