export = generateBadgesCanvas;
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
declare function generateBadgesCanvas(user: {
    bot: string;
    id: string;
    flags: any;
    discriminator: string;
}, options: {
    customBadges: string[];
    overwriteBadges: boolean;
}): Promise<Buffer>;
//# sourceMappingURL=generateBadgesCanvas.d.ts.map