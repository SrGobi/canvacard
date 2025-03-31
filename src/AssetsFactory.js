const BASE_URL =
  process.env.CANVACORD_ASSETS_BASE_URL ||
  "https://raw.githubusercontent.com/SrGobi/canvacard/assets/images";

/**
 * Prepares the full URL for an image.
 * @param {string} path - The name of the image.
 * @returns {string} - Full image URL.
 * @private
 */
const prepareURL = (path) => `${BASE_URL}/${path}`;

/**
 * ImageFactory: Provides URLs for data (images or json documents) that can be used in Canvacard.
 */
const ImageFactory = {
	BATSLAP: prepareURL('BATSLAP.png'),
	BED: prepareURL('BED.png'),
	CLYDE: prepareURL('CLYDE.png'),
	DELETE: prepareURL('DELETE.png'),
	DISCORD: prepareURL('DISCORD.png'),
	DISTRACTED: prepareURL('DISTRACTED.png'),
	FACEPALM: prepareURL('FACEPALM.png'),
	IMPOSTER: prepareURL('IMPOSTER.png'),
	IMPOSTERWITH: prepareURL('IMPOSTERWITH.png'),
	JAIL: prepareURL('JAIL.png'),
	KISS: prepareURL('KISS.png'),
	KO: prepareURL('KO.png'),
	PHUB: prepareURL('PHUB.png'),
	PUNCH: prepareURL('PUNCH.png'),
	SNOWFLAKE: prepareURL('SNOWFLAKE.png'),
	SPANK: prepareURL('SPANK.png'),
	TOBECONTINUED: prepareURL('TOBECONTINUED.png'),
	TRIGGERED: prepareURL('TRIGGERED.png'),
	WANTED: prepareURL('WANTED.png'),
	WASTED: prepareURL('WASTED.png'),
	YOUTUBE: prepareURL('YOUTUBE.png'),
	FLAGS: {
		ICONS: {
			USERNAME: prepareURL('flags/icons/username.png')
		},
		APPLICATION: prepareURL('flags/application.json'),
		USER: prepareURL('flags/user.json')
	},
	OTHER: {
		FRAME: prepareURL('other/frame.png'),
		VERIFIED_APP: prepareURL('other/verifiedApp.png'),
		APP: prepareURL('other/app.png')
	},
	STATUS: {
		IDLE: prepareURL('status/idle.png'),
		DND: prepareURL('status/dnd.png'),
		ONLINE: prepareURL('status/online.png'),
		INVISIBLE: prepareURL('status/invisible.png'),
		OFFLINE: prepareURL('status/offline.png'),
		STREAMING: prepareURL('status/streaming.png'),
		PHONE: prepareURL('status/phone.png')
	}
};

module.exports = { ImageFactory };