export = genBorder;
/**
 * @name genBorder
 * @description Generate the edges of the card with a multi-color gradient
 * @param {Object} options Options object
 * @param {string|string[]} options.borderColor It can be a color or an array of colors
 * @param {string} options.borderAllign Edge direction ('vertical' or 'horizontal')
 * @returns {Promise<Buffer>} Canvas
 */
declare function genBorder(options: {
    borderColor: string | string[];
    borderAllign: string;
}): Promise<Buffer>;
//# sourceMappingURL=genBorder.d.ts.map