/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        first: "#A05AFF", //purple
        second: "#1BCFB4", //green
        third: "#524e83", //dark purple
        "supporting-first": "#4BCBEB", // blue
        "supporting-second": "#FE9496", //pink
        "supporting-third": "#9E58FF", //light purple
        "t-extra-light": "#fff",
        "t-light": "#47454c8f",
        "t-mid-light": "#33303cad",
        "t-middle": "#33303cde",
        "t-dark": "#000",
      },
      boxShadow: {
        custom: "0px 0px 15px -5px rgba(0,0,0,0.19)",
        colored: "0px 0px 14px -5px rgba(59,130,246,0.2)",
      },
      darkMode: "class",
    },
  },
  plugins: [],
};
