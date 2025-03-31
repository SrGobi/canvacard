const { createCanvas } = require('@napi-rs/canvas');

/**
 * @name addShadow
 * @description Shadows for the canvas
 * @param {Image | Canvas} canvasToEdit Image or canvas to edit
 * @returns {Promise<Buffer>} Canvas
 */
function addShadow(canvasToEdit) {
	const alphaValue = 0.4;
	const canvas = createCanvas(885, 303);
	const ctx = canvas.getContext('2d');
	ctx.filter = 'drop-shadow(0px 4px 4px #000)';
	ctx.globalAlpha = alphaValue;
	ctx.drawImage(canvasToEdit, 0, 0);

	return canvas;
}

module.exports = addShadow;
