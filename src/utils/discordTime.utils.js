/**
 * Convierte la marca de tiempo regular en una hora similar a la de Discord.
 * @param {Date|number} time Marca de tiempo para convertir
 * @returns {string} Cadena de tiempo similar a Discord
 */
function discordTime(time = new Date()) {
  const date = time instanceof Date ? time : new Date();
  const hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
  const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
  return `Today at ${hours}:${minutes}`;
}

module.exports = discordTime;
