/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        "primary-color": "#041a30",
        "secondary-color": "#021d3b",
        "ternary-color":"#161b40",

        richblack: {
          5: "#F1F2FF",
          25: "#DBDDEA",
          100: "#AFB2BF",
          200: "#999DAA",
          700: "#2C333F",
          800: "#161D29",
          900: "#000814",
        },

        richwhite:{
          1:"#fdfefe",
          2:"#ecf0f1",
          3:"#f4f6f6",
          4:"#eaecee",
          5:"#eaecee",
        }
      }
    },
  },
  plugins: [],
};
