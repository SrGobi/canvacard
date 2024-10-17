/**
 * Parsea el acrónimo
 * @param {string} name Nombre para analizar el acrónimo
 * @returns {string} Acrónimo
 */
function getAcronym(name) {
  if (!name || typeof name !== "string") return "";
  return name
    .replace(/'s /g, " ")
    .replace(/\w+/g, e => e[0])
    .replace(/\s/g, "");
}

module.exports = getAcronym;
