/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-cyan': '#2D9CDB',
      },
      fontFamily: {
        burtons: "burtons",
        poppins: ["Poppins", "sans-serif"],
      },
      // Add custom utilities for the flip effect
      perspective: {
        '1000': '1000px',
      },
      transform: {
        'style-preserve-3d': 'preserve-3d',
      },
      backfaceVisibility: {
        'hidden': 'hidden',
      },
    },
  },
  plugins: [
    // Custom plugin to add the required utilities
    function ({ addUtilities }) {
      const newUtilities = {
        '.perspective': {
          perspective: '1000px',
        },
        '.transform-style-preserve-3d': {
          'transform-style': 'preserve-3d',
        },
        '.backface-hidden': {
          'backface-visibility': 'hidden',
        },
      }
      addUtilities(newUtilities)
    },
  ],
};
