const APIError = require('./error');
const path = require('path');
/**
 * Función para construir la ruta del archivo SVG
 * @param {string} icon 
 * @returns 
 */
function getIconPath(icon) {
  try {
    return path.join(__dirname, '../../assets/flags', icon);
  } catch (error) {
    throw new APIError(`Error constructing icon path: ${error.message}`);
  }
}

module.exports = getIconPath;