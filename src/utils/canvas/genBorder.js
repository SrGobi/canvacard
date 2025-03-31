const { createCanvas } = require('@napi-rs/canvas');
const APIError = require('../error.utils');
const formatAndValidateHex = require('../formatAndValidateHex.utils');

/**
 * @name genBorder
 * @description Generate the edges of the card with a multi-color gradient
 * @param {Object} options Options object
 * @param {string|string[]} options.borderColor It can be a color or an array of colors
 * @param {string} options.borderAllign Edge direction ('vertical' or 'horizontal')
 * @returns {Promise<Buffer>} Canvas
 */
async function genBorder(options) {
	const canvas = createCanvas(885, 303);
	const ctx = canvas.getContext('2d');

	// Handling color option as string or array of strings
	let borderColors = [];
	if (typeof options.borderColor === 'string') {
		borderColors.push(formatAndValidateHex(options.borderColor)); // Validate if it is a single color
	} else if (Array.isArray(options.borderColor)) {
		borderColors = options.borderColor.map((color) => formatAndValidateHex(color)); // Validate if it is array
	} else {
		throw new APIError('The border color must be a string or an array of strings');
	}

	// Check that it does not exceed the color limit
	if (borderColors.length > 20) {
		throw new APIError(`The number of border colors is invalid (${borderColors.length}), maximum allowed is 20`);
	}

	// Set gradient direction based on edge alignment
	const gradX = options.borderAllign === 'vertical' ? 0 : 885;
	const gradY = options.borderAllign === 'vertical' ? 303 : 0;

	// Create the gradient
	const grd = ctx.createLinearGradient(0, 0, gradX, gradY);

	// Add each color to the gradient with its corresponding stop.
	for (let i = 0; i < borderColors.length; i++) {
		const stop = i / (borderColors.length - 1); // Calculate the position of the color in the gradient
		grd.addColorStop(stop, borderColors[i]);
	}

	// Apply gradient as fill style
	ctx.fillStyle = grd;
	ctx.beginPath();
	ctx.fillRect(0, 0, 885, 303); // Draw the rectangle with the gradient

	// Define blend operation to trim inner edge
	ctx.globalCompositeOperation = 'destination-out';

	// Draw a rounded rectangle in the center to trim the edge
	ctx.beginPath();
	ctx.roundRect(9, 9, 867, 285, [25]); // Inner rectangle with rounded edges
	ctx.fill();

	return canvas; // Return the canvas with the generated border
}

module.exports = genBorder;