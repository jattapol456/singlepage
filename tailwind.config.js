const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html,}",
  ],
  theme: {
    extend: {
      colors: {
        "BG-main": "#0A0E16",
        "Text-main": "#707070",
        "Button-main": "#202531",
        "TextS3": "#43E5FF",
      },

      borderRadius: {
        ...defaultTheme.borderRadius,
        '100%': '100%'
      }
    },
  },
  plugins: [],
}