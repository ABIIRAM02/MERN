/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow:
      {
        1 : "0 0 10px 0px gray"
      },
      colors:
      {
        purple : "#8052f9",
        dimwhite: "#e6eae9",
        mygray:"#494b4d"
      }
    },
  },
  plugins: [],
}
