/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "revire-primary": "#126656",
        "revire-orange": "#D89D55",
        "revire-light-blue": "#CDDEE3",
        "revire-light-orange": "#FAF5E9",
      },
    },
  },
  plugins: [],
};
