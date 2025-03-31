const { createCanvas, loadImage } = require('@napi-rs/canvas');
const genStatus = require('./genStatus');
const formatAndValidateHex = require('../formatAndValidateHex.utils');
const getDateOrString = require('../getDateOrString.utils');
const parseUsername = require('../username.utils');

/**
 * @name genTextAndAvatar
 * @description Generate the card text and avatar
 * @param {Object} user User data
 * @param {string} user.username User name
 * @param {string} user.discriminator User discriminator
 * @param {boolean} user.bot If the user is a bot
 * @param {number} user.createdTimestamp User creation timestamp
 * @param {string} user.id User ID
 * @param {Object} options Options object
 * @param {string} options.customUsername Custom username
 * @param {string} options.usernameColor Username color
 * @param {string} options.customSubtitle Custom subtitle
 * @param {string} options.subtitleColor Subtitle color
 * @param {string | Date} options.customDate Custom date
 * @param {string} options.localDateType Local format for the date, for example, 'en' | 'es', etc.
 * @param {string} options.customTag Custom tag
 * @param {string} options.tagColor HEX Color of the label
 * @param {boolean} options.squareAvatar Change the shape of the avatar to a square
 * @param {boolean} options.presenceStatus Show presence status
 * @param {Object} rankData Range data
 * @param {string} avatarData Avatar URL
 * @param {string} [font="Arial"] Typeface family
 * @returns {Promise<Buffer>}
 */
async function genTextAndAvatar(user, rankData, options, avatarData, font) {
	const { username: rawUsername, discriminator, bot, createdTimestamp, id } = user;
	const alphaValue = 0.4;
	const clydeID = '1081004946872352958';

	const isClyde = id === clydeID;
	const pixelLength = bot ? 470 : 555;

	let canvas = createCanvas(885, 303);
	const ctx = canvas.getContext('2d');

	const fixedUsername = options?.customUsername || rawUsername;

	const { username, newSize } = parseUsername(fixedUsername, ctx, font, '80', pixelLength);

	if (options?.customSubtitle && rankData.rank.display === false) {
		ctx.globalAlpha = alphaValue;
		ctx.fillStyle = '#2a2d33';
		ctx.beginPath();
		ctx.roundRect(304, 248, 380, 33, [12]);
		ctx.fill();
		ctx.globalAlpha = 1;

		ctx.font = `23px ${font}`;
		ctx.textAlign = 'left';
		ctx.fillStyle = options?.subtitleColor ? options.subtitleColor : '#dadada';
		ctx.fillText(`${options?.customSubtitle}`, 314, 273);
	}

	const createdDateString = getDateOrString(options?.customDate, createdTimestamp, options?.localDateType);

	if (isClyde && !options?.customTag) {
		data.options.customTag = '@clyde';
	}

	const tag = options?.customTag ? isString(options.customTag, 'customTag') : !discriminator ? `@${rawUsername}` : `#${discriminator}`;

	ctx.font = `${newSize}px ${font}`;
	ctx.textAlign = 'left';
	ctx.fillStyle = options?.usernameColor ? formatAndValidateHex(options.usernameColor) : '#FFFFFF';
	ctx.fillText(username, 300, 155);

	if (rankData.rank.display === false) {
		ctx.font = `60px ${font}`;
		ctx.fillStyle = options?.tagColor ? formatAndValidateHex(options.tagColor) : '#dadada';
		ctx.fillText(tag, 300, 215);
	}

	ctx.font = `23px ${font}`;
	ctx.textAlign = 'center';
	ctx.fillStyle = '#dadada';
	ctx.fillText(createdDateString, 775, 273);

	const cardAvatar = await loadImage(avatarData);

	const roundValue = options?.squareAvatar ? 30 : 225;

	ctx.beginPath();
	ctx.roundRect(47, 39, 225, 225, [roundValue]);
	ctx.clip();

	ctx.fillStyle = '#292b2f';
	ctx.beginPath();
	ctx.roundRect(47, 39, 225, 225, [roundValue]);
	ctx.fill();

	ctx.drawImage(cardAvatar, 47, 39, 225, 225);

	ctx.closePath();

	if (options?.presenceStatus) {
		canvas = await genStatus(canvas, options);
	}

	return canvas;
}

module.exports = genTextAndAvatar;