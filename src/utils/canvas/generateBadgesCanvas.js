const { createCanvas, loadImage } = require('@napi-rs/canvas');
const { ImageFactory } = require('../../AssetsFactory');
const APIError = require('../error.utils');
const checkFlags = require('../flags.utils');
const getIconPath = require('../icon.utils');
const parsePng = require('../parsePng.utils');
const parseSvg = require('../parseSvg.utils');
const truncateText = require('../truncateText.utils');

/**
 * @name generateBadgesCanvas
 * @description Generate the badge canvas
 * @param {Object} user User object
 * @param {string} user.bot If the user is a bot
 * @param {string} user.id User ID
 * @param {Object} user.flags User Badges
 * @param {string} user.discriminator User Discriminator
 * @param {Object} options Object of options
 * @param {string[]} options.customBadges Custom Badges
 * @param {boolean} options.overwriteBadges Overwrite the badges
 * @returns {Promise<Buffer>} Canvas
 */
async function generateBadgesCanvas(user, options) {
	const { bot, id, flags, discriminator } = user;

	// Loading flags from a GitHub raw URL (JSON) with fetch
	const userFlags = await fetch(ImageFactory.FLAGS.USER).then((res) => res.json());
	const applicationFlags = await fetch(ImageFactory.FLAGS.APPLICATION).then((res) => res.json());

	try {
		// Get the badges according to the flags
		const userFlagBadges = checkFlags(userFlags, flags)
			.map((flag) => userFlags[flag]?.icon)
			.filter(Boolean);
		const applicationFlagBadges = checkFlags(applicationFlags, flags)
			.map((flag) => applicationFlags[flag]?.icon)
			.filter(Boolean);

		// Combine all the badges
		const allBadgeIcons = [...userFlagBadges, ...applicationFlagBadges].map(getIconPath);

		// Legacy Username Badges
		if (discriminator === '0') {
			allBadgeIcons.push(getIconPath(ImageFactory.FLAGS.ICONS.USERNAME));
		}

		// Additional logic for apps
		if (bot) {
			const appFetch = await fetch(`https://discord.com/api/v10/applications/${id}/rpc`);
			if (!appFetch.ok) {
				throw new APIError(`Failed to fetch app data: ${appFetch.statusText}`);
			}

			const json = await appFetch.json();
			let flagsApp = json.flags;

			const arrayFlags = checkFlags(applicationFlags, flagsApp);
			console.log(arrayFlags);
			if (arrayFlags.includes('APPLICATION_AUTO_MODERATION_RULE_CREATE_BADGE')) {
				const automodBadge = applicationFlags['APPLICATION_AUTO_MODERATION_RULE_CREATE_BADGE']?.icon;
				if (automodBadge) allBadgeIcons.push(getIconPath(automodBadge));
			}
			if (arrayFlags.includes('APPLICATION_COMMAND_BADGE')) {
				const slashBadge = applicationFlags['APPLICATION_COMMAND_BADGE']?.icon;
				if (slashBadge) allBadgeIcons.push(getIconPath(slashBadge));
			}
		}

		// Create the canvas to draw the badges
		const canvas = createCanvas(885, 303);
		const ctx = canvas.getContext('2d');

		let x = 808; // Starting position for badges
		for (const iconPath of allBadgeIcons) {
			try {
				const badgeImage = await loadImage(iconPath);
				ctx.drawImage(badgeImage, x, 22, 48, 48); // Badge size and position
				x -= 60; // Adjusting the gap between badges
			} catch (error) {
				throw new APIError(`Could not load badge image from path: ${iconPath}, ${error.message}`);
			}
		}

		console.log(options.customBadges);
		// Handling custom badges
		if (options?.customBadges?.length) {
			if (options?.overwriteBadges) {
				x = 808; // Reset position if badges are overwritten
			}

			for (const customBadge of options.customBadges) {
				let badgeImage;
				try {
					const extension = customBadge.split('.').pop().toLowerCase(); // Get the file extension

					// Check the extension and use the appropriate parser
					if (extension === 'png') {
						badgeImage = await loadImage(parsePng(customBadge));
					} else if (extension === 'svg') {
						badgeImage = await loadImage(parseSvg(customBadge));
					} else {
						throw new APIError(`Invalid image format: ${extension}. Only PNG or SVG files are allowed.`);
					}

					// If the image was uploaded correctly, draw it on the canvas
					if (badgeImage) {
						ctx.drawImage(badgeImage, x, 22, 48, 48); // Size and position of the custom badge
						x -= 60; // Adjusting the gap between badges
					}
				} catch (error) {
					const truncatedBadge = truncateText(customBadge, 30);
					throw new APIError(`Could not load custom badge: (${truncatedBadge}), please make sure the image exists and is valid.`);
				}
			}
		}

		return { canvas, badgesLength: allBadgeIcons.length + (options?.customBadges?.length || 0) };
	} catch (error) {
		throw new APIError(`Error generating badges canvas: ${error.message}`);
	}
}

module.exports = generateBadgesCanvas;