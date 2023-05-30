/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        bgImage: "url('./assets/icon-bg.png')",
      },
    },
  },
  plugins: [],
};
