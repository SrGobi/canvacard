/**
 * Generar el canvas de insignias
 * @param {Object} user Objeto de usuario
 * @param {string} user.bot Si el usuario es un bot
 * @param {string} user.id ID del usuario
 * @param {Object} user.flags Insignias del usuario
 * @param {string} user.discriminator Discriminador del usuario
 * @param {Object} options Objeto de opciones
 * @param {Array} options.customBadges Insignias personalizadas
 * @param {boolean} options.overwriteBadges Sobreescribir las insignias
 * @returns {Promise<Buffer>} Canvas
 */
export function generateBadgesCanvas(user: {
    bot: string;
    id: string;
    flags: any;
    discriminator: string;
}, options: {
    customBadges: any[];
    overwriteBadges: boolean;
}): Promise<Buffer>;
/**
 * Genera el fondo de la tarjeta
 * @param {Object} options Objeto de opciones
 * @param {string} avatarData URL del avatar
 * @param {string} bannerData URL del banner
 * @returns {Promise<Buffer>} Canvas
 */
export function genBase(options: any, avatarData: string, bannerData: string): Promise<Buffer>;
/**
 * Genera el marco de la tarjeta
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
 * Genera el texto y el avatar de la tarjeta
 * @param {Object} user Datos del usuario
 * @param {string} user.username Nombre de usuario
 * @param {string} user.discriminator Discriminador
 * @param {boolean} user.bot Es un bot
 * @param {number} user.createdTimestamp Marca de tiempo de creación
 * @param {string} user.id ID del usuario
 * @param {Object} options Opciones de la tarjeta
 * @param {string} options.customUsername Nombre de usuario personalizado
 * @param {string} options.usernameColor Color del nombre de usuario
 * @param {string} options.customSubtitle Subtítulo personalizado
 * @param {string} options.subtitleColor Color del subtítulo
 * @param {string | Date} options.customDate Fecha personalizada
 * @param {string} options.localDateType Formato local para la fecha, por ejemplo, 'en' | 'es', etc.
 * @param {string} options.customTag Tag personalizado
 * @param {string} options.tagColor Color HEX de la etiqueta
 * @param {boolean} options.squareAvatar Cambiar la forma del avatar a un cuadrado
 * @param {boolean} options.presenceStatus Mostrar el estado de presencia
 * @param {Object} rankData Datos de rango
 * @param {string} avatarData URL del avatar
 * @param {string} [font="Arial"] Familia tipográfica
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
 * Esta función genera el marco del avatar
 * @param {Object} user Objeto del usuario
 * @param {Object} user.avatar_decoration_data Datos de decoración del avatar
 * @param {string} user.avatar_decoration_data.asset Asset de decoración del avatar
 * @param {Object} options Objeto de opciones
 * @param {string} options.presenceStatus Presencia del usuario
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
 * Generar la barra de experiencia
 * @param {Object} options
 * @param {Object} options.rankData
 * @param {number} options.rankData.currentXp
 * @param {number} options.rankData.requiredXp
 * @param {number} options.rankData.level
 * @param {number} options.rankData.rank
 * @param {string | Array} options.rankData.barColor
 * @param {string} options.rankData.levelColor
 * @param {boolean} options.rankData.autoColorRank
 * @returns {Promise<Buffer>} Canvas
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
}, font: any): Promise<Buffer>;
/**
 * Generar la insignia de verificación de bot
 * @param {Object} user Objeto de usuario
 * @param {string} user.username Nombre de usuario
 * @param {number} user.flags Valor numérico de las flags del usuario
 * @param {string} [font="Arial"] Familia tipográfica
 * @returns {Promise<Buffer>} Canvas
 */
export function genBotVerifBadge(user: {
    username: string;
    flags: number;
}, font?: string): Promise<Buffer>;
/**
 * Sombras para el canvas
 * @param {Image | Canvas} canvasToEdit Imagen o canvas a editar
 * @returns {Promise<Buffer>} Canvas
 */
export function addShadow(canvasToEdit: (new (width?: number, height?: number) => HTMLImageElement) | Canvas): Promise<Buffer>;
//# sourceMappingURL=profile-image.utils.d.ts.map