module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens:{
      "sm":'400px',
      "md":'700px',
      "lg":'1100px',
      "xl":'1500px',
      "2xl":'1800px',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
        plugins: [require("@tailwindcss/line-clamp")],
}
