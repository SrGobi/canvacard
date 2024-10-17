const APIError = require("./error.utils");

/**
 * Verificar si el parámetro es un número
 * @param {number} param Parámetro
 * @param {string} type Tipo de parámetro
 * @returns Parámetro
 */
function isNumber(param, type) {
  if (isNaN(param))
    throw new APIError(`${type} no válido (${param || undefined}), debe ser un número`);

  return param;
}

module.exports = isNumber;