/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
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
