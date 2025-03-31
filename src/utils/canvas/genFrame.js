const { createCanvas, loadImage } = require('@napi-rs/canvas');
const { ImageFactory } = require('../../AssetsFactory');

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
async function genFrame(badgesData, options) {
	// Create a canvas for the frame
	const alphaValue = 0.4;
	const canvas = createCanvas(885, 303);
	const ctx = canvas.getContext('2d');

	// Load and insert the base frame
	const cardFrame = await loadImage(ImageFactory.OTHER.FRAME);
	ctx.globalAlpha = 0.5;
	ctx.drawImage(cardFrame, 0, 0, 885, 303);

	// Draw a black background with transparency if required
	ctx.globalAlpha = alphaValue;
	ctx.fillStyle = '#000';
	ctx.beginPath();
	ctx.roundRect(696, 248, 165, 33, [12]);
	ctx.fill();
	ctx.globalAlpha = 1;

	// Adjust the frame for the badges
	if (options?.badgesFrame && badgesData.canvas) {
		const { canvas: badgesCanvas, badgesLength } = badgesData;

		// Adjust background rectangle for badges based on length
		ctx.fillStyle = '#000';
		ctx.globalAlpha = alphaValue;
		ctx.beginPath();
		ctx.roundRect(857 - badgesLength * 59, 15, 59 * badgesLength + 8, 61, [17]);
		ctx.fill();

		ctx.globalAlpha = 1;
		// Draw the badge canvas in the correct position
		ctx.drawImage(badgesCanvas, 0, 0);
	}

	return canvas;
}

module.exports = genFrame;
