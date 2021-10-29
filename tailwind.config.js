module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        upBlue: "#036eb0",
        upGold: "#fbd14b",
        upGray: "#fafafa",
        primary: "#facb30",
        secondary: {
          light: "#1e2b38",
          dark: "#17232e",
        },
        light: "#ffffff",
      },
      fontFamily: {
        sans: ["Roboto Condensed", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      transitionProperty: {
        spacing: "margin, padding",
      },
    },
    zIndex: {
      100: 100,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
