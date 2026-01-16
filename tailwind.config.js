/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: "#B89464",
        "wedding-dark": "#2c2c2c",
        cream: "#FAF5F0",
        burgundy: {
          DEFAULT: "#5C3A42",
          dark: "#4A2E35",
        },
        charcoal: "#3D3D3D",
        "muted-foreground": "#6B6B6B",
        "primary-foreground": "#FFFFFF",
      },
      fontFamily: {
        serif: ["Playfair Display", "Georgia", "Garamond", "serif"],
        sans: [
          "Poppins",
          "Montserrat",
          "-apple-system",
          "BlinkMacSystemFont",
          "sans-serif",
        ],
        engagement: ["Parisienne", "cursive"],
      },
      perspective: {
        1000: "1000px",
      },
    },
  },
  plugins: [],
};
