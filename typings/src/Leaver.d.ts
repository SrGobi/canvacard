export = Leaver;
/**
 * Creador de tarjetas de despedida
 */
declare class Leaver extends BaseCard {
    /**
     * Color del overlay
     * @type {number|string}
     */
    colorOverlay: number | string;
    /**
     * Opacidad del overlay
     * @type {string}
     */
    opacityOverlay: string;
    /**
     * Tipo de overlay
     * @type {string}
     */
    typeOverlay: string;
    /**
     * Actualiza el estado predeterminado
     * @private
     * @ignore
     */
    private __updateData;
    /**
     * Establecer color
     * @param {"titulo"|"titulo-border"|"titulo-box"|"subtitulo"|"subtitulo-border"|"subtitulo-box"|"avatar"|"background"|"border"} id
     * @param {string} color Código de color HTML5
     * @returns {Leaver}
     */
    setColor(id: "titulo" | "titulo-border" | "titulo-box" | "subtitulo" | "subtitulo-border" | "subtitulo-box" | "avatar" | "background" | "border", color: string): Leaver;
    /**
     * Valor del avatar
     * @param {string|Buffer} value
     * @returns {Leaver}
     */
    setAvatar(value: string | Buffer): Leaver;
    /**
     * Valor del título
     * @param {string} value
     * @returns {Leaver}
     */
    setTitulo(value: string): Leaver;
    /**
     * Valor del subtítulo
     * @param {string} value
     * @returns {Leaver}
     */
    setSubtitulo(value: string): Leaver;
    /**
     * Valor del color del título
     * @param {string} value
     * @returns {Leaver}
     */
    setColorTitulo(value: string): Leaver;
    /**
     * Valor del color del subtítulo
     * @param {string} value
     * @returns {Leaver}
     */
    setColorSubtitulo(value: string): Leaver;
    /**
     * Valor del color del círculo
     * @param {string} value
     * @returns {Leaver}
     */
    setColorCircle(value: string): Leaver;
    /**
     * Valor del color del overlay
     * @param {string} value
     * @returns {Leaver}
     */
    setColorOverlay(value: string): Leaver;
    /**
     * Valor del color del overlay
     * @param {number|string} value
     * @returns {Leaver} La instancia de la clase Leaver
     */
    setOpacityOverlay(value: number | string): Leaver;
    /**
     * Establecer imagen / color de fondo
     * @param {"COLOR"|"IMAGE"} type Tipo de fondo
     * @param {string|Buffer} [data] Color o imagen de fondo
     * @returns {Leaver} La instancia de la clase Leaver
     * @throws {APIError} Si no se proporciona el tipo o los datos
     */
    setBackground(type: "COLOR" | "IMAGE", data?: string | Buffer): Leaver;
    /**
     * Establecer rectangle / rounded de overlay
     * @param {"RECTANGLE"|"ROUNDED"} type Tipo de fondo
     * @returns {Leaver} La instancia de la clase Leaver
     * @throws {APIError} Si no se proporciona el tipo
     */
    setTypeOverlay(type: "RECTANGLE" | "ROUNDED"): Leaver;
    /**
     * Construye la tarjeta de despedida
     * @param {string} [font="Arial"] Fuente de texto para la tarjeta
     * @returns {Promise<Buffer>} Imagen de la tarjeta de despedida en formato de buffer
     */
    build(font?: string): Promise<Buffer>;
}
import BaseCard = require("./Base/BaseCard");
//# sourceMappingURL=Leaver.d.ts.map