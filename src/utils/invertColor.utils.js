/**
 * Invierte el color hexadecimal
 * @param {string} hex Código de color hexadecimal para invertir
 * @returns {string} Código de color hexadecimal invertido
 */
function invertColor(hex) {
  if (!hex || typeof hex !== "string") return "#FFFFFF";
  hex = hex.replace("#", "");

  if (hex.length === 3) hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  if (hex.length !== 6) return "#FFFFFF";

  const r = (255 - parseInt(hex.slice(0, 2), 16)).toString(16);
  const g = (255 - parseInt(hex.slice(2, 4), 16)).toString(16);
  const b = (255 - parseInt(hex.slice(4, 6), 16)).toString(16);

  return `#${r.padStart(2, '0')}${g.padStart(2, '0')}${b.padStart(2, '0')}`;
}

module.exports = invertColor;
