module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        burtons: "burtons",
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        // Nature Tech Color Scheme (used sparingly in minimal design)
        'mocha': '#A47864',
        'forest': '#2F855A',
        'burnt-orange': '#ED8936',
      },
      animation: {
        'bounce': 'bounce 2s infinite',
      },
      letterSpacing: {
        tightest: '-.075em',
      }
    },
  },
  plugins: [],
}