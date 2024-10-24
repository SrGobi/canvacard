/**
 * APIError class
 * @class APIError
 * @extends {Error}
 * @classdesc Error class for API errors
 * @param {string} message Error message
 * @returns {APIError} APIError object
 */
class APIError extends Error {
  constructor(message) {
    super(message);
  }
}

module.exports = APIError;