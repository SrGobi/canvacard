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
export function generateBadgesCanvas(user: {
    bot: string;
    id: string;
    flags: any;
    discriminator: string;
}, options: {
    customBadges: string[];
    overwriteBadges: boolean;
}): Promise<Buffer>;
/**
 * @name genBase
 * @description Generate the card background
 * @param {Object} options Object of options
 * @param {string} avatarData Avatar URL
 * @param {string} bannerData Banner URL
 * @returns {Promise<Buffer>} Canvas
 */
export function genBase(options: any, avatarData: string, bannerData: string): Promise<Buffer>;
/**
 * @name genFrame
 * @description Generate the card frame
 * @param {Object} badgesData
 * @param {CanvasElemet} badgesData.canvas
 * @param {string} badgesData.badgesLength
 * @param {Object} options
 * @param {string} options.badgesFrame
 * @returns {Promise<Buffer>} Canvas
 */
export function genFrame(badgesData: {
    canvas: CanvasElemet;
    badgesLength: string;
}, options: {
    badgesFrame: string;
}): Promise<Buffer>;
/**
 * @name genBorder
 * @description Generate the edges of the card with a multi-color gradient
 * @param {Object} options Options object
 * @param {string|string[]} options.borderColor It can be a color or an array of colors
 * @param {string} options.borderAllign Edge direction ('vertical' or 'horizontal')
 * @returns {Promise<Buffer>} Canvas
 */
export function genBorder(options: {
    borderColor: string | string[];
    borderAllign: string;
}): Promise<Buffer>;
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
export function genTextAndAvatar(user: {
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
export function genAvatarFrame(user: {
    avatar_decoration_data: {
        asset: string;
    };
}, options: {
    presenceStatus: string;
}): Promise<Buffer>;
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
export function genXpBar(options: {
    rankData: {
        currentXp: number;
        requiredXp: number;
        level: number;
        rank: number;
        barColor: string | string[];
        levelColor: string;
        autoColorRank: boolean;
    };
}, font: any): Promise<Buffer>;
/**
 * @name genBotVerifBadge
 * @description Generate the bot verification badge
 * @param {Object} user User object
 * @param {string} user.username User name
 * @param {number} user.flags Numeric value of the user flags
 * @param {string} [font="Arial"] Typeface family
 * @returns {Promise<Buffer>} Canvas
 */
export function genBotVerifBadge(user: {
    username: string;
    flags: number;
}, font?: string): Promise<Buffer>;
/**
 * @name addShadow
 * @description Shadows for the canvas
 * @param {Image | Canvas} canvasToEdit Image or canvas to edit
 * @returns {Promise<Buffer>} Canvas
 */
export function addShadow(canvasToEdit: (new (width?: number, height?: number) => HTMLImageElement) | Canvas): Promise<Buffer>;
//# sourceMappingURL=canvas.utils.d.ts.map