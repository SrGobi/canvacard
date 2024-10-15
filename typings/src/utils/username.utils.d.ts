export = parseUsername;
/**
 * Funcion que se encarga de parsear el nombre de usuario para que se ajuste al tamaño del canvas
 * @param {string} username
 * @param {Object} ctx
 * @param {string} ctx.font
 * @param {string} ctx.fillStyle
 * @param {string} ctx.textAlign
 * @param {TextMetrics} ctx.measureText
 * @param {string} font
 * @param {string} size
 * @param {number} maxLength
 * @returns {Object} { username: string, newSize: number, textLength: number }
 */
declare function parseUsername(username: string, ctx: {
    font: string;
    fillStyle: string;
    textAlign: string;
    measureText: TextMetrics;
}, font: string, size: string, maxLength: number): any;
//# sourceMappingURL=username.utils.d.ts.map