const { IconBase } = require('react-icons');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontFamily: {
      ibm: ['"IBM Plex Mono"', 'monospace']
    },
  },
  plugins: [],
};
