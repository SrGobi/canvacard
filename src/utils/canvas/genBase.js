const { createCanvas, loadImage } = require('@napi-rs/canvas');
const parseImg = require('../parseImg.utils');

/**
 * @name genBase
 * @description Generate the card background
 * @param {Object} options Object of options
 * @param {string} avatarData Avatar URL
 * @param {string} bannerData Banner URL
 * @returns {Promise<Buffer>} Canvas
 */
async function genBase(options, avatarData, bannerData) {
	const canvas = createCanvas(885, 303);
	const ctx = canvas.getContext('2d');

	let isBannerLoaded = true;
	let cardBackground = await loadImage(options?.customBackground ? parseImg(options.customBackground) : bannerData ?? avatarData).catch(() => {});

	if (!cardBackground) {
		cardBackground = await loadImage(avatarData).catch(() => {});
		isBannerLoaded = false;
	}

	const condAvatar = options?.customBackground ? true : !isBannerLoaded ? false : bannerData !== null;
	const wX = condAvatar ? 885 : 900;
	const wY = condAvatar ? 303 : wX;
	const cY = condAvatar ? 0 : -345;

	ctx.fillStyle = '#18191c';
	ctx.beginPath();
	ctx.fillRect(0, 0, 885, 303);
	ctx.fill();

	ctx.filter = (options?.moreBackgroundBlur ? 'blur(9px)' : options?.disableBackgroundBlur ? 'blur(0px)' : 'blur(3px)') + (options?.backgroundBrightness ? ` brightness(${options.backgroundBrightness + 100}%)` : '');
	ctx.drawImage(cardBackground, 0, cY, wX, wY);

	ctx.globalAlpha = 0.2;
	ctx.fillStyle = '#2a2d33';
	ctx.beginPath();
	ctx.fillRect(0, 0, 885, 303);
	ctx.fill();

	return canvas;
}

module.exports = genBase;