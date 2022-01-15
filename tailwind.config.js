const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primary: "#F18E20",
      borderColor: "#B9A789",
    },
    extend: {
      colors: {
        "light-blue": colors.lightBlue,
        cyan: colors.cyan,
      },
    },
  },
  plugins: [],
};
