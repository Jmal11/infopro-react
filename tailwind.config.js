/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#7232E8',
        'primary-dark': '#5f28c4',
      },
      container: {
        center: true,
        padding: '1rem',
      },
    },
  },
  plugins: [],
};