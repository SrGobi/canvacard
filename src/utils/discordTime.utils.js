/**
 * @name discordTime
 * @description Convert regular timestamp to Discord-like time.
 * @param {Date|number} time Timestamp to convert
 * @returns {string} Discord-like time chain
 */
function discordTime(time = new Date()) {
  const date = time instanceof Date ? time : new Date();
  const hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
  const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
  return `Today at ${hours}:${minutes}`;
}

module.exports = discordTime;
