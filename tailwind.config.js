/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      backgroundImage:{
        blurImage:'url(/src/assets/blur-background.png)'
      },
      colors: {
        colorGreenDark: "var(--green-dark)",
        colorGreen: "var(--green)",
        colorGreenLight: "var(--green-light)",
        colorBlue: "var(--blue)",
        colorWarning: "var(--warning)",
        colorRedError: "var(--red-error)",
        colorBg: "var(--background)",
        colorElements: "var(--elements)",
        colorBars: "var(--bars)",
        colorStrokeDivider: "var(--stroke-divider)",
        colorTittle: "var(--tittle)",
        colorText: "var(--text)",
        colorTextApoio: "var(--text-apoio)",
        colorWhite: "var(--white)",
        colorBorder: "var(--border)",
        green: {
          300: "colorGreenLight",
          500: "colorGreen",
          700: "colorGreenDark",
        },
        blue: {
          500: "colorBlue",
        },
        orange: {
          500: "colorWarning",
        },
        red: {
          500: "colorRedError",
        },
        gray: {
          100: "colorTittle",
          200: "colorText",
          300: "colorTextApoio",
          500: "colorStrokeDivider",
          600: "colorBorder",
          700: "colorBars",
          900: "colorBg",
        },
      },

      fontSize: {
        xsrem: ["12rem", "16rem"],
        smrem: ["14rem", "20rem"],
        "16fs": ["16rem", "rem"],
        "18fs": ["18rem", "28rem"],
        "2xlrem": ["24rem", "32rem"],
        "40fs": ["40rem", "rem"],
      },
      fontWeight: {
        regular: "400",
        semiBold: "500",
        bold: "700",
      },
    },
  },
  plugins: [],
};
