export = parseUsername;
/**
 * @name parseUsername
 * @description Function that parses the username to fit the canvas size.
 * @param {string} username User name
 * @param {Object} ctx Canvas context
 * @param {string} ctx.fillStyle Text color
 * @param {string} ctx.textAlign Text alignment
 * @param {TextMetrics} ctx.measureText - Text size
 * @param {string} [font='Arial'] Text source
 * @param {string} size Text size
 * @param {number} maxLength Maximum text length
 * @returns {Object} { username: string, newSize: number, textLength: number }
 */
declare function parseUsername(username: string, ctx: {
    fillStyle: string;
    textAlign: string;
    measureText: TextMetrics;
}, font?: string, size: string, maxLength: number): any;
//# sourceMappingURL=username.utils.d.ts.map