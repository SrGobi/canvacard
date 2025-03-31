const { createCanvas } = require('@napi-rs/canvas');
const APIError = require('../error.utils');
const formatAndValidateHex = require('../formatAndValidateHex.utils');
const abbreviateNumber = require('../abbreviate.utils');
const isNumber = require('../isNumber.utils');

/**
 * Generate the experience bar
 * @param {Object} options Options object
 * @param {Object} options.rankData Rank data
 * @param {number} options.rankData.currentXp User current XP
 * @param {number} options.rankData.requiredXp XP required to level up
 * @param {number} options.rankData.level User level
 * @param {number} options.rankData.rank User rank
 * @param {string | string[]} options.rankData.barColor Color of the XP bar
 * @param {string} options.rankData.levelColor Color of the level text
 * @param {boolean} options.rankData.autoColorRank Automatically color the rank
 * @returns {Promise<Buffer>} Canvas
 */
function genXpBar(options, font) {
	const { currentXp, requiredXp, level, rank, levelColor, autoColorRank } = options.rankData;

	if (isNaN(currentXp) || isNaN(requiredXp) || isNaN(level)) {
		throw new APIError('rankData options requires: currentXp, requiredXp and level properties');
	}

	const canvas = createCanvas(885, 303);
	const ctx = canvas.getContext('2d');
	const mY = 8;

	// XP bar background
	ctx.fillStyle = '#000';
	ctx.globalAlpha = 0.5; // adjust alpha as needed
	ctx.beginPath();
	ctx.roundRect(304, 248, 380, 33, [12]);
	ctx.fill();
	ctx.globalAlpha = 1;

	// XP Text
	ctx.font = `21px ${font}`;
	ctx.textAlign = 'left';
	ctx.fillStyle = '#dadada';
	ctx.fillText(`${abbreviateNumber(currentXp)} / ${abbreviateNumber(requiredXp)} XP`, 314, 273);

	// Rank and Level Text
	const rankString = !isNaN(rank) ? `RANK #${abbreviateNumber(isNumber(rank, 'rankData:rank'))}` : '';
	const lvlString = !isNaN(level) ? `Lvl ${abbreviateNumber(isNumber(level, 'rankData:level'))}` : '';

	// Define range colors
	const rankColors = {
		gold: '#F1C40F',
		silver: '#a1a4c9',
		bronze: '#AD8A56',
		current: '#dadada'
	};

	const rankMapping = {
		'RANK #1': rankColors.gold,
		'RANK #2': rankColors.silver,
		'RANK #3': rankColors.bronze
	};

	if (autoColorRank && rankMapping.hasOwnProperty(rankString)) {
		rankColors.current = rankMapping[rankString];
	}

	ctx.font = `bold 21px ${font}`;
	ctx.textAlign = 'right';
	ctx.fillStyle = rankColors.current;
	ctx.fillText(`${rankString}`, 674 - ctx.measureText(lvlString).width - 10, 273);

	ctx.font = `bold 21px ${font}`;
	ctx.fillStyle = levelColor ? formatAndValidateHex(levelColor) : '#dadada';
	ctx.fillText(`${lvlString}`, 674, 273);

	// Progress bar background
	ctx.globalAlpha = 0.5;
	ctx.fillStyle = '#000';
	ctx.beginPath();
	ctx.roundRect(304, 187 - mY, 557, 36, [14]);
	ctx.fill();
	ctx.globalAlpha = 1;

	// Handling color option as string or array of strings
	let barColors = [];
	if (typeof options.rankData.barColor === 'string') {
		barColors.push(formatAndValidateHex(options.rankData.barColor)); // Validate if it is a single color
	} else if (Array.isArray(options.rankData.barColor)) {
		barColors = options.rankData.barColor.map((color) => formatAndValidateHex(color)); // Validate if it is array
	} else {
		throw new APIError('The color of the bar must be a string or an array of strings');
	}

	if (barColors.length > 20) {
		throw new APIError(`Invalid color bar length (${barColors.length}) must have a maximum of 20 colors`);
	}

	// Calculate progress bar width based on XP
	const barWidth = Math.round((currentXp * 556) / requiredXp);

	// Create the gradient for the bar
	const grd = ctx.createLinearGradient(304, 197, 860, 197);
	for (let i = 0; i < barColors.length; i++) {
		const stop = i / (barColors.length - 1); // Distribute the colors evenly
		grd.addColorStop(stop, barColors[i]);
	}

	// Draw the progress bar
	ctx.fillStyle = grd;
	ctx.beginPath();
	ctx.roundRect(304, 187 - mY, barWidth, 36, [14]);
	ctx.fill();

	return canvas;
}

module.exports = genXpBar;