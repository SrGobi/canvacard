const { createCanvas, loadImage } = require('@napi-rs/canvas');
const cutAvatarStatus = require('./cutAvatarStatus');

/**
 * @name genAvatarFrame
 * @description This function generates the avatar frame
 * @param {Object} user User data
 * @param {Object} user.avatar_decoration_data Avatar decoration data
 * @param {string} user.avatar_decoration_data.asset Avatar decoration asset
 * @param {Object} options Object of options
 * @param {string} options.presenceStatus User presence
 * @returns {Promise<Buffer>} Canvas
 */
async function genAvatarFrame(user, options) {
	let canvas = createCanvas(885, 303);
	const ctx = canvas.getContext('2d');

	const frameUrl = `https://cdn.discordapp.com/avatar-decoration-presets/${user?.avatar_decoration_data.asset}.png`;

	const avatarFrame = await loadImage(frameUrl);
	ctx.drawImage(avatarFrame, 25, 18, 269, 269);

	if (options?.presenceStatus) {
		canvas = await cutAvatarStatus(canvas, options);
	}

	return canvas;
}

module.exports = genAvatarFrame;