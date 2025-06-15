/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Tailwind will scan these files
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        // Add custom colors if needed
        brandBlack: "#000000",
        brandWhite: "#ffffff",
      },
      spacing: {
        105: "105px",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"), // for hiding scrollbars
  ],
};
