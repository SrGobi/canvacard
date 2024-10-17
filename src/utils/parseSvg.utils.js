const APIError = require("./error.utils");

/**
 * Verificar si la insignia personalizada es válida (SVG)
 * @param {string} imgString URL de la imagen
 * @returns {string} URL de la imagen
 */
function parseSvg(imgString) {
  return validateImage(imgString, 'svg');
}

/**
 * Función auxiliar para validar imágenes
 * @param {string} imgString URL de la imagen
 * @param {string} format Formato de la imagen ('png', 'svg', etc.)
 * @returns {string} URL de la imagen
 */
function validateImage(imgString, format) {
  if (!imgString || typeof imgString !== 'string') {
    throw new APIError(`La insignia personalizada no es válida ('${imgString || undefined}') debe ser un archivo ${format}`);
  }
  const URL = imgString.split('.');
  const imgType = URL[URL.length - 1];
  const imgCheck = new RegExp(`(${format})`, 'gi').test(imgType);

  if (!imgCheck) {
    throw new APIError(`La insignia personalizada no es válida ('${imgString || undefined}') debe ser un archivo ${format}`);
  }

  return imgString;
}

module.exports = parseSvg;
