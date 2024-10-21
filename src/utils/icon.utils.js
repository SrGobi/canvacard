const APIError = require('./error.utils');

/**
 * Función para obtener la URL del ícono de una insignia.
 * Si el ícono es una ruta relativa, se transforma en una URL absoluta apuntando al repositorio de GitHub.
 * 
 * @param {string} iconUrl - Nombre del ícono o URL del ícono.
 * @returns {string} URL absoluta del ícono.
 * @throws {APIError} Si hay un problema al construir la URL del ícono.
 */
function getIconPath(iconUrl) {
  try {
    // Verifica si la URL es absoluta, si no lo es, convierte la ruta en una URL remota válida.
    if (!iconUrl.startsWith('http')) {
      // Devuelve la URL completa ajustando la ruta base al repositorio de GitHub.
      return `https://raw.githubusercontent.com/SrGobi/canvacard/assets/images/flags/icons/${iconUrl}`;
    }
    return iconUrl;
  } catch (error) {
    throw new APIError(`Error constructing icon URL: ${error.message}`);
  }
}

module.exports = getIconPath;