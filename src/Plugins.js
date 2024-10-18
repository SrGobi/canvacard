/**
 * @typedef {object} Plugins
 * @property {Function} circle Complemento de círculo
 * @property {Function} convolute Complemento convolute
 * @property {Function} abbrev Complemento de abreviaturas
 */
const data = {
  circle: require("../plugins/circle"),
  convolute: require("../plugins/convolute"),
  abbrev: require("../plugins/abbrev")
};

module.exports = data;