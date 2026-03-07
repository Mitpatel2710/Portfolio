/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          500: '#3B4B6C',
          600: '#2C3B5A',
          700: '#1D2B48',
          800: '#0E1A36',
          900: '#000924',
        },
      },
    },
  },
  plugins: [],
};