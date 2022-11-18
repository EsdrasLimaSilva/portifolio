/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fdfdfd",
        gray: "#f5f5f5",
        blue: "#1E70EB",
        darkblue: "#1F3258",
        black: "#222",
      },
    },
  },
  plugins: [],
};
