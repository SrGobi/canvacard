export = genStatus;
/**
 * @name genStatus
 * @description Sets the presence status on the card
 * @param {Image | Canvas} canvasToEdit Image or canvas to edit
 * @param {Object} options Object of options
 * @param {string} options.presenceStatus User presence
 * @returns {Promise<Buffer>} Canvas
 */
declare function genStatus(canvasToEdit: (new (width?: number, height?: number) => HTMLImageElement) | Canvas, options: {
    presenceStatus: string;
}): Promise<Buffer>;
//# sourceMappingURL=genStatus.d.ts.map