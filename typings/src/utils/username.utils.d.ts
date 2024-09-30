export = parseUsername;
/**
 *
 * @param {string} username
 * @param {Object} ctx
 * @param {string} ctx.font
 * @param {string} ctx.fillStyle
 * @param {string} ctx.textAlign
 * @param {TextMetrics} ctx.measureText
 * @param {string} font
 * @param {string} size
 * @param {number} maxLength
 * @returns
 */
declare function parseUsername(username: string, ctx: {
    font: string;
    fillStyle: string;
    textAlign: string;
    measureText: TextMetrics;
}, font: string, size: string, maxLength: number): {
    username: string;
    newSize: number;
    textLength: any;
};
//# sourceMappingURL=username.utils.d.ts.map