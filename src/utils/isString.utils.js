const APIError = require("./error.utils");

/**
 * Verificar si el parámetro es una cadena
 * @param {string} param Parámetro
 * @param {string} type Tipo de parámetro
 * @returns Parámetro
 */
function isString(param, type) {
  if (typeof param !== 'string')
    throw new APIError(`${type} no válido (${param || undefined}), debe ser una cadena`);

  return param;
}

module.exports = isString;
