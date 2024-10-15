export = parseUsername;
/**
 * Funcion que se encarga de parsear el nombre de usuario para que se ajuste al tamaño del canvas
 * @param {string} username Nombre de usuario
 * @param {Object} ctx Contexto del canvas
 * @param {string} ctx.fillStyle Color del texto
 * @param {string} ctx.textAlign Alineacion del texto
 * @param {TextMetrics} ctx.measureText Medida del texto
 * @param {string} [font='Arial'] Fuente del texto
 * @param {string} size Tamaño del texto
 * @param {number} maxLength  Longitud maxima del texto
 * @returns {Object} { username: string, newSize: number, textLength: number }
 */
declare function parseUsername(username: string, ctx: {
    fillStyle: string;
    textAlign: string;
    measureText: TextMetrics;
}, font?: string, size: string, maxLength: number): any;
//# sourceMappingURL=username.utils.d.ts.map