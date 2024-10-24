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

  // Validar longitud y expandir si es necesario
  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }

  // Validar que el código tenga 6 caracteres
  if (hex.length !== 6) return alt;

  // Regex para validar caracteres válidos
  const hexRegex = /^[A-Fa-f0-9]{6}$/;
  if (!hexRegex.test(hex)) {
    throw new APIError(`Código hexadecimal no válido ('${hex}')`);
  }

  // Devolver el código hexadecimal formateado con '#'
  return `#${hex}`;
}

module.exports = formatAndValidateHex;