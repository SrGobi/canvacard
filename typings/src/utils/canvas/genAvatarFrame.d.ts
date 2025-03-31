export = genAvatarFrame;
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
declare function genAvatarFrame(user: {
    avatar_decoration_data: {
        asset: string;
    };
}, options: {
    presenceStatus: string;
}): Promise<Buffer>;
//# sourceMappingURL=genAvatarFrame.d.ts.map