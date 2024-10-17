const APIError = require("./error.utils");

/**
 * Verificar si la insignia personalizada es válida
 * @param {string} imgString URL de la imagen
 * @returns {string} URL de la imagen
 */
function parseImg(imgString) {
  if (!imgString || typeof imgString !== 'string') {
    throw new APIError(`La insignia personalizada no válida ('${imgString || undefined}') debe ser un archivo de imagen 'png | jpg | jpeg | gif'`);
  }
  const URL = imgString.split('.');
  const imgType = URL[URL.length - 1];
  const imgCheck = /(jpg|jpeg|png|gif)/gi.test(imgType);

  if (!imgCheck)
    throw new APIError(`Fondo personalizado no válido ('${imgString || undefined}') debe ser un archivo de imagen 'png | jpg | jpeg | gif'`);

  return imgString;
}

module.exports = parseImg;
