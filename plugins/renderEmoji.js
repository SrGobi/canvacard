const emoji = require('@canvacard/emoji-parser');

module.exports = async (ctx, message, x, y) => {
	return await emoji.fillTextWithTwemoji(ctx, message, x, y);
};
