/**
 * Devuelve una matriz de líneas
 * @param {object} params Parametros
 * @param {string} text Texto
 * @param {CanvasRenderingContext2D} ctx CanvasRenderingContext2D
 * @param {number} maxWidth Ancho máximo de la linea
 * @returns {string[]} Array de lineas
 */
function getLines({ text, ctx, maxWidth }) {
  if (!text) return [];
  if (!ctx) throw new Error("Canvas context was not provided!");
  if (!maxWidth) throw new Error("No max-width provided!");

  const lines = [];
  while (text.length) {
    let i;
    for (i = text.length; ctx.measureText(text.substring(0, i)).width > maxWidth; i -= 1);
    const result = text.substr(0, i);
    let j;
    if (i !== text.length) for (j = 0; result.indexOf(" ", j) !== -1; j = result.indexOf(" ", j) + 1);
    lines.push(result.substring(0, j || result.length));
    text = text.substring(lines[lines.length - 1].length, text.length);
  }
  return lines;
}

module.exports = getLines;
