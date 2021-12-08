const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './dist/*.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
       'display': ['Road Rage'],
      },
    colors: {
      // Build your palette here
      transparent: 'transparent',
      current: 'currentColor',
      gray: colors.blueGray,
      green: colors.emerald,
      fuchsia: colors.fuchsia,
      blue: colors.cyan,
    },
    extend: {
      backgroundImage: {
         'herobg': "url('../img/bg.jpg?width=1280&height=720')",
        }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
