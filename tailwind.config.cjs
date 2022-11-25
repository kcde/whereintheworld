/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,vue}'],
  darkMode: ['class', '[data-mode="dark"]'],

  theme: {
    colors: {
      dark: {
        100: 'hsl(209, 23%, 22%)',
        200: 'hsl(207, 26%, 17%)',
        300: 'hsl(200, 15%, 8%)',
      },

      light: {
        100: 'hsl(0, 0%, 100%)',
        200: 'hsl(0, 0%, 98%)',
        300: ' hsl(0, 0%, 52%)',
      },
    },
    extend: {
      fontFamily: {
        'nunito-sans': ['Nunito Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
