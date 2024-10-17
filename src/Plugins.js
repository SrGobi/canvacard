/**
 * @typedef {object} Plugins
 * @property {Function} circle Complemento de círculo
 * @property {Function} convolute Complemento convolute
 * @property {Function} rectangle Complemento de rectángulo
 * @property {Function} round Complemento redondo
 * @property {Function} abbrev Complemento de abreviaturas
 */
const data = {
  circle: require("../plugins/circle"),
  convolute: require("../plugins/convolute"),
  rectangle: require("../plugins/rect"),
  round: require("../plugins/round"),
  abbrev: require("../plugins/abbrev")
};

module.exports = data;