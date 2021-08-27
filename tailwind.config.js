module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: 'Red Hat Display, sans-serif;'
      },
      colors: {
        primary: {
          600: '#382AE1',
          500: '#1A1178',
          400: '#1F2F56',
          300: '#7280A7',
          200: '#E0E8FF',
          100: '#F5F7FF',
        },
      },
      container: {
        center: true,
      },
      backgroundImage: () => ({
        'body': "url('/images/pattern-background-mobile.svg')",
        'body-desktop': "url('/images/pattern-background-desktop.svg')",
       })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
