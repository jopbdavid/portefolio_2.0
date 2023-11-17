/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        headingNow: ["headingNow"],
        aperture2: ["aperture2"],
      },
    },
  },
  plugins: [require("daisyui")],
};
