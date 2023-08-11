/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{svelte,html,js,ts}"],
  darkMode: "class", // or 'media' or 'class'
  daisyui: {
    themes: ["corporate", "business"],
  },
  theme: {},
  plugins: [
    require("@savvywombat/tailwindcss-grid-areas"),
    require("daisyui"),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "animation-delay": (value) => ({
            "animation-delay": value,
          }),
        },
        {
          values: theme("animationDelay"),
        }
      );
    }),
  ],
};
