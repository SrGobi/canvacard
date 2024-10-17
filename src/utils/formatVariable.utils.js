/**
 * Obtiene variables y tipos.
 * @param {object} prefix El tipo de variable
 * @param {object} variable La variable a cambiar
 * @returns La variable formateada
 */
function formatVariable(prefix, variable) {
  return prefix + variable.toLowerCase()
    .split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join("");
}

module.exports = formatVariable;