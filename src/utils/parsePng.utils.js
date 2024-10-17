const APIError = require("./error.utils");

/**
 * Verificar si la insignia personalizada es válida
 * @param {string} imgString URL de la imagen
 * @returns {string} URL de la imagen
 */
function parsePng(imgString) {
  if (!imgString || typeof imgString !== 'string') {
    throw new APIError(`La insignia personalizada no válida ('${imgString || undefined}') debe ser un archivo png`);
  }
  const URL = imgString.split('.');
  const imgType = URL[URL.length - 1];
  const imgCheck = /(png)/gi.test(imgType);

  if (!imgCheck)
    throw new APIError(`La insignia personalizada no válida ('${imgString || undefined}') debe ser un archivo png`);

  return imgString;
}

module.exports = parsePng;
