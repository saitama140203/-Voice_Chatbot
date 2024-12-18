/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#4f46e5', // Màu tím dịu
        secondary: '#22c55e', // Màu xanh lá
        accent: '#f97316', // Màu cam
      },
      borderRadius: {
        xl: '1rem',
      },
      boxShadow: {
        glow: '0 0 15px rgba(79, 70, 229, 0.5)',
      },
    },
  },
  plugins: [],
};
