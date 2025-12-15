/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#6B19FF',
        'color-ipl': '#6B19FF',
        'primary-dark': '#5a0fd9',
        purple: {
          50: '#f3f0ff',
          100: '#e9e5ff',
          200: '#d6ccff',
          300: '#b8a3ff',
          400: '#9570ff',
          500: '#6B19FF',
          600: '#5a0fd9',
          700: '#4c0bb8',
          800: '#3e0a96',
          900: '#330874',
        },
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          DEFAULT: '100%',
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
        },
      },
    },
  },
  plugins: [],
};