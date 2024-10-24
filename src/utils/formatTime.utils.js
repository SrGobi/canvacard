/**
 * @module formatTime
 * @description Formats the timestamp into a date string.
 * @param {number} time Timestamp to convert
 * @returns {string} Formatted date string
 */
function formatTime(time) {
  if (!time) return "00:00";
  const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((time % (1000 * 60)) / 1000);
  return [minutes, seconds].map(unit => String(unit).padStart(2, '0')).join(':');
}

module.exports = formatTime;
