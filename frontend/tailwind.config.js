module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/**/*.html"],
  darkmode: false,
  theme: {
    extend: {},
  },
  plugins: [],
};
