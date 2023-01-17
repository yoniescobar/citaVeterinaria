/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: '400px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px'
    },
    extend: {},
  },
  plugins: [],
}
