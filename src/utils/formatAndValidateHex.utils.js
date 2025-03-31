const APIError = require("./error.utils");

/**
 * @name formatAndValidateHex
 * @description Formats and validates the hexadecimal code.
 * @param {string} hex Hexadecimal code for formatting and validation
 * @param {string} alt Alternative color if code is invalid
 * @returns {string} Formatted and validated hexadecimal code
 */
function formatAndValidateHex(hex, alt = "#000000") {
  if (!hex || typeof hex !== "string") return alt;

  // Quitar el '#' si existe
  hex = hex.replace("#", "");

  // Si el código hexadecimal es menor a 6 caracteres, duplicar los caracteres
  if (hex.length < 6) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }

  // Si el código hexadecimal es mayor a 6 caracteres, cortar a 6 caracteres
  if (hex.length > 6) {
    hex = hex.slice(0, 6);
  }

  // Regex para validar caracteres válidos
  const hexRegex = /^[A-Fa-f0-9]{6}$/;
  if (!hexRegex.test(hex)) {
    throw new APIError(`Código hexadecimal no válido ('${hex}')`);
  }

  // Devolver el código hexadecimal formateado con '#'
  return `#${hex}`;
}

module.exports = formatAndValidateHex;