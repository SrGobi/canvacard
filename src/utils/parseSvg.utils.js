const APIError = require("./error.utils");

/**
 * @name parseSvg
 * @description Check if the custom badge is valid (SVG)
 * @param {string} imgString Image URL
 * @returns {string} Image URL
 */
function parseSvg(imgString) {
  return validateImage(imgString, 'svg');
}

/**
 * @name validateImage
 * @description Helper function to validate images
 * @param {string} imgString Image URL
 * @param {string} format Image format ('png', 'svg', etc.)
 * @returns {string} Image URL
 */
function validateImage(imgString, format) {
  if (!imgString || typeof imgString !== 'string') {
    throw new APIError(`Custom badge is not valid ('${imgString || undefined}') must be a file ${format}`);
  }
  const URL = imgString.split('.');
  const imgType = URL[URL.length - 1];
  const imgCheck = new RegExp(`(${format})`, 'gi').test(imgType);

  if (!imgCheck) {
    throw new APIError(`Custom badge is invalid ('${imgString || undefined}') must be a ${format} file`);
  }

  return imgString;
}

module.exports = parseSvg;
