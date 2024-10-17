/**
 * Formatea la marca de tiempo en una cadena de fecha.
 * @param {number} time Marca de tiempo para convertir
 * @returns {string} Cadena de fecha formateada
 */
function formatTime(time) {
  if (!time) return "00:00";
  const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((time % (1000 * 60)) / 1000);
  return [minutes, seconds].map(unit => String(unit).padStart(2, '0')).join(':');
}

module.exports = formatTime;
