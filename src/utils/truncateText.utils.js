/**
 * Trunca el texto a una longitud especificada y agrega puntos suspensivos si es necesario.
 * @param {string} text - El texto a truncar.
 * @param {number} [limit=25] - La longitud máxima del texto antes del truncamiento (el valor predeterminado es 25).
 * @param {boolean} [fromEnd=false] - Si es verdadero, el truncamiento se realizará desde el final del texto (el valor predeterminado es falso).
 * @returns {string} - El texto original o truncado.
 */
function truncateText(text, limit = 25, fromEnd = false) {
  if (text.length > limit) {
    if (fromEnd) {
      return "..." + text.slice(-limit);
    } else {
      return text.slice(0, limit) + "...";
    }
  } else {
    return text;
  }
}

module.exports = truncateText;