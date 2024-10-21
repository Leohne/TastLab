/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Louis':['"Louis cafe"'],
        'Sugar':['"Sugar"'],
        'Itim':['"Itim"'],
        'sans':['"Louis cafe"']
      }
    },
  },
  plugins: [],
}
