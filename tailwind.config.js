/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        first: "#A05AFF", //purple
        second: "#1BCFB4", //green
        third: "#524e83", //dark purple
        success: "#0D9488", //dark purple
        danger: "#B91C1C", //dark purple
        info: "#524e83", //dark purple
        "dark-first": "#25293c", //black
        "dark-second": "#2f3349", //light black
        "supporting-first": "#4BCBEB", // blue
        "supporting-second": "#FE9496", //pink
        "supporting-third": "#9E58FF", //light purple
        "supporting-extra-light": "#fff",
        "supporting-light": "#47454c8f",
        "supporting-mid-light": "#33303cad",
        "supporting-middle": "#33303cde",
        "supporting-dark": "#000",
        "supporting-dark-first": "#E4E6F4DE",
        "supporting-dark-second": "#E4E6F4AD",
      },
      boxShadow: {
        custom: "0px 0px 15px -5px rgba(0,0,0,0.19)",
        spread: "0px 0px 39px 7px rgba(0,0,0,0.10)",
        colored: "0px 0px 14px -5px rgba(59,130,246,0.2)",
      },
    },
  },
  darkMode: ["class", '[data-mode="dark"]'],
  plugins: [],
};
