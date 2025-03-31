const { createCanvas, loadImage } = require('@napi-rs/canvas');
const { ImageFactory } = require('../../AssetsFactory');
const parseUsername = require('../username.utils');

/**
 * @name genAppVerifBadge
 * @description Generate the app verification badge
 * @param {Object} user User object
 * @param {string} user.username User name
 * @param {number} user.flags Numeric value of the user flags
 * @param {string} [font="Arial"] Typeface family
 * @returns {Promise<Buffer>} Canvas
 */
async function genAppVerifBadge(user, font) {
	const { username, flags } = user;

	const canvas = createCanvas(885, 303);
	const ctx = canvas.getContext('2d');

	// Parse name to calculate text length
	const { textLength } = parseUsername(username, ctx, font, '80', 470);

	// Check if the user is a verified app using the flags value
	const isVerifiedApp = (flags & (1 << 16)) !== 0;

	// Determine the badge to use according to the flags
	const badgeName = isVerifiedApp ? 'VERIFIED_APP' : 'APP';

	// Upload badge image
	const appBadge = await loadImage(ImageFactory.OTHER[badgeName]);

	// Draw the image in the correct position
	ctx.drawImage(appBadge, textLength + 310, 110);

	return canvas;
}

module.exports = genAppVerifBadge;
