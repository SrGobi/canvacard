export = genTextAndAvatar;
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
declare function genTextAndAvatar(user: {
    username: string;
    discriminator: string;
    bot: boolean;
    createdTimestamp: number;
    id: string;
}, rankData: any, options: {
    customUsername: string;
    usernameColor: string;
    customSubtitle: string;
    subtitleColor: string;
    customDate: string | Date;
    localDateType: string;
    customTag: string;
    tagColor: string;
    squareAvatar: boolean;
    presenceStatus: boolean;
}, avatarData: string, font?: string): Promise<Buffer>;
//# sourceMappingURL=genTextAndAvatar.d.ts.map