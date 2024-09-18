/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        mono: ["Roboto Mono", "monospace"],
      },
      boxShadow: {
        focus: "0 0 0 2px rgba(0, 0, 0, 0.2)",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities(
        {
          ".outline-none": {
            outline: "0",
          },
          ".focus:outline-none": {
            outline: "0",
          },
          ".focus:shadow-focus": {
            boxShadow: "0 0 0 2px rgba(0, 0, 0, 0.2)",
          },
        },
        ["responsive", "focus"]
      );
    },
  ],
};
