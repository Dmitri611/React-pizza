const { ESLINT_MODES } = require("@craco/craco");
// eslint-disable-next-line import/extensions
const babel = require("./babel.config.js");

module.exports = {
  babel,
  eslint: {
    mode: ESLINT_MODES.file,
  },
};
