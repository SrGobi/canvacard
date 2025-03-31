export = genAppVerifBadge;
/**
 * @name genAppVerifBadge
 * @description Generate the app verification badge
 * @param {Object} user User object
 * @param {string} user.username User name
 * @param {number} user.flags Numeric value of the user flags
 * @param {string} [font="Arial"] Typeface family
 * @returns {Promise<Buffer>} Canvas
 */
declare function genAppVerifBadge(user: {
    username: string;
    flags: number;
}, font?: string): Promise<Buffer>;
//# sourceMappingURL=genAppVerifBadge.d.ts.map