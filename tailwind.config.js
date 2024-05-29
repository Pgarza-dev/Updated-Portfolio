/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./*.html",
    "./src/**/*.{html,js,mjs}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      dropShadow: {
        "2xl": "0 0px 35px rgba(255, 255, 255, 0.35)",
      },
      colors: {
        primary: "",
        secondary: "#3f1eb4",
        tertiary: "#ff00ff",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
