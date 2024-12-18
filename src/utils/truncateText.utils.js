/**
 * @name truncateText
 * @description Truncates text to a specified length and adds an ellipsis if necessary.
 * @param {string} text The text to be truncated.
 * @param {number} [limit=25] The maximum length of text before truncation (default is 25).
 * @param {boolean} [fromEnd=false] If true, truncation will be performed from the end of the text (default is false).
 * @returns {string} The original or truncated text.
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