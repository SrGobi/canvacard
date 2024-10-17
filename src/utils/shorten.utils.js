/**
 * Acorta el texto a una longitud específica y agrega puntos suspensivos si es necesario.
 * @param {string} text Texto a acortar
 * @param {number} len Longitud máxima del texto antes de acortarlo
 * @returns {string} Texto original o acortado
 */
function shorten(text, len) {
  if (typeof text !== "string") return "";
  if (text.length <= len) return text;
  return text.substring(0, len).trim() + "...";
}

module.exports = shorten;
