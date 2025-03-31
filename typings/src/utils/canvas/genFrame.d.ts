export = genFrame;
/**
 * @name genFrame
 * @description Generate the card frame
 * @param {Object} badgesData
 * @param {CanvasElemet} badgesData.canvas
 * @param {string} badgesData.badgesLength
 * @param {Object} options
 * @param {string} options.badgesFrame
 * @returns {Promise<Buffer>} Canvas
 */
declare function genFrame(badgesData: {
    canvas: CanvasElemet;
    badgesLength: string;
}, options: {
    badgesFrame: string;
}): Promise<Buffer>;
//# sourceMappingURL=genFrame.d.ts.map