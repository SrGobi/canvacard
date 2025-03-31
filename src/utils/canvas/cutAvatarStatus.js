const { createCanvas } = require('@napi-rs/canvas');

/**
 * @name cutAvatarStatus
 * @description This function cuts the presence status on the card
 * @param {Image | Canvas} canvasToEdit Image or canvas to edit
 * @param {Object} options Object of options
 * @param {string} options.presenceStatus User presence
 * @returns {Promise<Buffer>} Canvas
 */
async function cutAvatarStatus(canvasToEdit, options) {
	const canvas = createCanvas(885, 303);
	const ctx = canvas.getContext('2d');

	const cX = options.presenceStatus == 'phone' ? 224.5 : 212;
	const cY = options.presenceStatus == 'phone' ? 202 : 204;

	ctx.drawImage(canvasToEdit, 0, 0);

	ctx.globalCompositeOperation = 'destination-out';

	if (options.presenceStatus == 'phone') ctx.roundRect(cX - 8, cY - 8, 57, 78, [10]);
	else ctx.roundRect(212, 204, 62, 62, [62]);
	ctx.fill();

	ctx.globalCompositeOperation = 'source-over';

	return canvas;
}

module.exports = cutAvatarStatus;