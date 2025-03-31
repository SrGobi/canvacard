const APIError = require("./error.utils");

/**
 * @name parsePng
 * @description Check if the custom badge is valid
 * @param {string} imgString Image URL
 * @returns {string} Image URL
 */
function parsePng(imgString) {
  if (!imgString || typeof imgString !== 'string') {
    throw new APIError(`Invalid custom badge ('${imgString || undefined}') must be a png file`);
  }
  const URL = imgString.split('.');
  const imgType = URL[URL.length - 1];
  const imgCheck = /(png)/gi.test(imgType);

  if (!imgCheck)
    throw new APIError(`Invalid custom badge ('${imgString || undefined}') must be a png file`);

  return imgString;
}

module.exports = parsePng;
