/**
 * Función para generar el canvas de insignias
 * @param {Object} data
 * @param {string} data.bot
 * @param {string} data.id
 * @param {Object} data.flags
 * @param {Object} options
 * @param {Array} options.customBadges
 * @param {boolean} options.overwriteBadges
 * @returns Canvas
 */
export function generateBadgesCanvas(data: {
    bot: string;
    id: string;
    flags: any;
}, options: {
    customBadges: any[];
    overwriteBadges: boolean;
}): Promise<{
    canvas: import("@napi-rs/canvas").Canvas;
    badgesLength: number;
}>;
export function genBase(options: any, avatarData: any, bannerData: any): Promise<import("@napi-rs/canvas").Canvas>;
/**
 *
 * @param {Object} badgesData
 * @param {CanvasElemet} badgesData.canvas
 * @param {string} badgesData.badgesLength
 * @param {Object} options
 * @param {string} options.badgesFrame
 * @returns Canvas
 */
export function genFrame(badgesData: {
    canvas: CanvasElemet;
    badgesLength: string;
}, options: {
    badgesFrame: string;
}): Promise<import("@napi-rs/canvas").Canvas>;
/**
 * Genera los bordes de la tarjeta
 * @param {Object} options
 * @param {string} options.borderColor
 * @param {string} options.borderAllign
 * @returns Canvas
 */
export function genBorder(options: {
    borderColor: string;
    borderAllign: string;
}): Promise<import("@napi-rs/canvas").Canvas>;
/**
 *
 * @param {*} data
 * @param {*} options
 * @param {*} avatarData
 * @param {string} [font="MANROPE_BOLD"] Familia tipográfica
 * @returns {Promise<Buffer>}
 */
export function genTextAndAvatar(data: any, options: any, avatarData: any, font?: string): Promise<Buffer>;
export function genAvatarFrame(data: any, options: any): Promise<import("@napi-rs/canvas").Canvas>;
/**
 *
 * @param {Object} options
 * @param {Object} options.rankData
 * @param {number} options.rankData.currentXp
 * @param {number} options.rankData.requiredXp
 * @param {number} options.rankData.level
 * @param {number} options.rankData.rank
 * @param {string | Array} options.rankData.barColor
 * @param {string} options.rankData.levelColor
 * @param {boolean} options.rankData.autoColorRank
 * @returns Canvas
 */
export function genXpBar(options: {
    rankData: {
        currentXp: number;
        requiredXp: number;
        level: number;
        rank: number;
        barColor: string | any[];
        levelColor: string;
        autoColorRank: boolean;
    };
}): import("@napi-rs/canvas").Canvas;
export function genBotVerifBadge(data: any): Promise<import("@napi-rs/canvas").Canvas>;
/**
 *
 * @param {*} canvasToEdit
 * @returns Canvas
 */
export function addShadow(canvasToEdit: any): import("@napi-rs/canvas").Canvas;
//# sourceMappingURL=profile-image.utils.d.ts.map