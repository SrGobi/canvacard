/**
 * Truncates text to a specified length and adds ellipsis if needed.
 * 
 * @param {string} text - The text to truncate.
 * @param {number} [limit=25] - The maximum length of the text before truncation (default is 25).
 * @param {boolean} [fromEnd=false] - If true, truncation will be from the end of the text (default is false).
 * @returns {string} - The original or truncated text.
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