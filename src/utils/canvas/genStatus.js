const { createCanvas, loadImage } = require('@napi-rs/canvas');
const { ImageFactory } = require('../../AssetsFactory');
const APIError = require('../error.utils');

/**
 * @name genStatus
 * @description Sets the presence status on the card
 * @param {Image | Canvas} canvasToEdit Image or canvas to edit
 * @param {Object} options Object of options
 * @param {string} options.presenceStatus User presence
 * @returns {Promise<Buffer>} Canvas
 */
async function genStatus(canvasToEdit, options) {
	let canvas = createCanvas(885, 303);
	const ctx = canvas.getContext('2d');

	const validStatus = ['idle', 'dnd', 'online', 'invisible', 'offline', 'streaming', 'phone'];

	if (!validStatus.includes(options.presenceStatus)) throw new APIError(`Invalid presenceStatus ('${options.presenceStatus}') must be 'online' | 'idle' | 'offline' | 'dnd' | 'invisible' | 'streaming' | 'phone'`);

	const statusString = options.presenceStatus == 'offline' ? 'invisible' : options.presenceStatus;

	const status = await loadImage(ImageFactory.STATUS[statusString.toUpperCase()]);

	const cX = options.presenceStatus == 'phone' ? 224.5 : 212;
	const cY = options.presenceStatus == 'phone' ? 202 : 204;

	ctx.drawImage(canvasToEdit, 0, 0);

	ctx.globalCompositeOperation = 'destination-out';

	if (options.presenceStatus == 'phone') ctx.roundRect(cX - 8, cY - 8, 57, 78, [10]);
	else ctx.roundRect(212, 204, 62, 62, [62]);
	ctx.fill();

	ctx.globalCompositeOperation = 'source-over';

	ctx.drawImage(status, cX, cY);

	return canvas;
}

module.exports = genStatus;
