const APIError = require("./error.utils");

/**
 * @name isNumber
 * @description Checks if the parameter is a number
 * @param {number} param Parameter to check
 * @param {string} type Parameter type
 * @returns {number} Parameter
 */
function isNumber(param, type) {
  if (isNaN(param))
    throw new APIError(`${type} is invalid (${param || undefined}), must be a number`);

  return param;
}

module.exports = isNumber;