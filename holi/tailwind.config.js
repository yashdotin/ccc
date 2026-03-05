/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        romantic: ['"Dancing Script"', 'cursive'],
      },
      colors: {
        pink: '#ffb6d5',
        purple: '#b39ddb',
        pastel: '#ffe4fa',
      },
      backgroundImage: {
        'gradient-soft': 'linear-gradient(135deg, #ffb6d5 0%, #b39ddb 100%)',
      },
      boxShadow: {
        glass: '0 8px 32px 0 rgba(31, 38, 135, 0.18)',
        glow: '0 0 8px 2px #ffb6d5',
      },
    },
  },
  plugins: [],
};
