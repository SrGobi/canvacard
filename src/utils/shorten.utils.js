/**
 * @name shorten
 * @description Shorten text to a specific length and add ellipses if necessary.
 * @param {string} text Text to be shortened
 * @param {number} len Maximum length of text before shortening
 * @returns {string} Original or shortened text
 */
function shorten(text, len) {
  if (typeof text !== "string") return "";
  if (text.length <= len) return text;
  return text.substring(0, len).trim() + "...";
}

module.exports = shorten;
