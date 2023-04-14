/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          600: "#575361",
          500: "#746E82",
          300: "#857E95",
          200: "#9892A6",
          100: "#E3E3ED",
        },
        purple: {
          900: "#7C3AED",
          800: "#794FED",
          500: "#7A5FEC",
          400: "#AC96E4",
          200: "#C1B2FA",
          100: "#E9E3F8",
          50: "#F3F0FF",
        },
      },
      dropShadow: "0px 4px 16px #EAE2FD",
    },
  },
  plugins: [],
};
