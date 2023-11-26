/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite/**/*.js",
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lavender: "#e3e6f0",
        black: "#000",
        white: "#fff",
        "neutral-colors-color-500": "#e7e6f2",
        "gray-4": "#e3e3e3",
        gray: {
          "100": "#8b8b8b",
          "200": "#24272c",
          "300": "#050608",
        },
        lightblue: "#91d2df",
        steelblue: "#009ccb",
        deepskyblue: "#46baec",
        "grey-07": "#d4d4d4",
        "primary-600": "#0b8ba6",
      },
      spacing: {},
      fontFamily: {
        "heading-1-roboto-36pt": "Roboto",
        questrial: "Questrial",
        "body-default": "'DM Sans'",
        oxygen: "Oxygen",
      },
      borderRadius: {
        "10xl-8": "29.8px",
        "11xl-4": "30.4px",
      },
    },
    fontSize: {
      xl: "20px",
      "29xl": "48px",
      lg: "18px",
      "13xl": "32px",
      sm: "14px",
      "37xl": "56px",
      "17xl": "36px",
      "21xl": "40px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [
    require('flowbite/plugin')
  ],
};

