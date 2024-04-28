/* eslint-disable no-undef */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [require("daisyui"), require("flowbite/plugin")],
  daisyui: {
    darkTheme: "light",
  },
};
