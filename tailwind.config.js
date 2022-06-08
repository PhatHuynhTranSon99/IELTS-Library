module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        // Simple 8 row grid
        '12': 'repeat(12, minmax(0, 1fr))'
      },
      gridRow: {
        'span-10': 'span 10 / span 10',
        'span-9': 'span 9 / span 9',
        'span-11': 'span 11 / span 11'
      }
    },
  },
  plugins: [],
};