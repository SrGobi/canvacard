/**
 * @typedef {object} Plugins
 * @property {Function} circle Complement of circle
 * @property {Function} convolute Convolute complement
 * @property {Function} abbrev Complement of abbreviations
 */
const data = {
  circle: require("../plugins/circle"),
  convolute: require("../plugins/convolute"),
  abbrev: require("../plugins/abbrev")
};

module.exports = data;