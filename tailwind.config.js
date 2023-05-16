/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#A61616'
      }
    },
    fontFamily: {
      shippori: ['Shippori Antique B1', 'sans-serif'],
      ubuntu: ['Ubuntu', 'sans-serif'],
      // work sans
      wsans: ['Work Sans', 'sans-serif'],
      montserrat: ['Montserrat', 'sans-serif']
    },
    variants: {}
  }
};
