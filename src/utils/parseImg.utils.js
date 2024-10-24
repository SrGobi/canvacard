const APIError = require("./error.utils");

/**
 * @name parseImg
 * @description Check if the custom badge is valid
 * @param {string} imgStringImage image URL
 * @returns {string} Image URL
 */
function parseImg(imgString) {
  if (!imgString || typeof imgString !== 'string') {
    throw new APIError(`Invalid custom badge ('${imgString || undefined}') must be a 'png | jpg | jpeg | gif' image file`);
  }
  const URL = imgString.split('.');
  const imgType = URL[URL.length - 1];
  const imgCheck = /(jpg|jpeg|png|gif)/gi.test(imgType);

  if (!imgCheck)
    throw new APIError(`Invalid custom background ('${imgString || undefined}') must be a 'png | jpg | jpeg | gif' image file`);

  return imgString;
}

module.exports = parseImg;
