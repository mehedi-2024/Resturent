/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary : 'var(--primary-color)',
        secondary : 'var(--secondary-color)',
        text : 'var(--text-color)',
        text2 : 'var(--text2-color)',
        bg : 'var(--bg-color)',
      }
    },
  },
  plugins: [
    require('daisyui')
  ],
}