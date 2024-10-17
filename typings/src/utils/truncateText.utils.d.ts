export = truncateText;
/**
 * Trunca el texto a una longitud especificada y agrega puntos suspensivos si es necesario.
 * @param {string} text - El texto a truncar.
 * @param {number} [limit=25] - La longitud máxima del texto antes del truncamiento (el valor predeterminado es 25).
 * @param {boolean} [fromEnd=false] - Si es verdadero, el truncamiento se realizará desde el final del texto (el valor predeterminado es falso).
 * @returns {string} - El texto original o truncado.
 */
declare function truncateText(text: string, limit?: number, fromEnd?: boolean): string;
//# sourceMappingURL=truncateText.utils.d.ts.map