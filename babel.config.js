module.exports = {
  plugins: [
    [
      "module-resolver",
      {
        root: ["./src/"],
      },
    ],
  ],
  env: {
    production: {
      plugins: ["transform-react-remove-prop-types"],
    },
  },
};
