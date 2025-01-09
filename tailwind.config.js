/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#123524', // Hijau tua
        secondary: '#3E7B27', // Hijau medium
        third: '#E9EFEC', // Hijau pucat
      },
    },
  },
  plugins: [],
}
