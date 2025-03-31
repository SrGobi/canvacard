/**
 * @name formatVariable
 * @description Gets variables and types.
 * @param {object} prefix The type of variable
 * @param {object} variable The variable to change
 * @returns {string} The formatted variable
 */
function formatVariable(prefix, variable) {
  return prefix + variable.toLowerCase()
    .split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join("");
}

module.exports = formatVariable;