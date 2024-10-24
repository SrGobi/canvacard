const APIError = require("./error.utils");

/**
 * @name isString
 * @description Checks if the parameter is a string
 * @param {string} param Parameter to check
 * @param {string} type Parameter type
 * @returns {string} Parameter
 */
function isString(param, type) {
  if (typeof param !== 'string')
    throw new APIError(`${type} is invalid (${param || undefined}), must be a string`);

  return param;
}

module.exports = isString;