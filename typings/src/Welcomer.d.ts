export = Welcomer;
/**
 * Creador de tarjetas de bienvenida
 */
declare class Welcomer extends Base {
    /**
     * Fondo de la tarjeta
     * @property {object} backgroundGlobal Fondo de la tarjeta
     * @property {"IMAGE"|"COLOR"} [backgroundGlobal.type="color"] Tipo de fondo
     */
    data: {
        backgroundGlobal: {
            type: string;
            image: string;
        };
    };
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
     * Actualiza el estado predeterminado de los valores
     * @private
     */
    private __updateData;
    /**
     * Establecer color
     * @param {"titulo"|"titulo-border"|"titulo-box"|"subtitulo"|"subtitulo-border"|"subtitulo-box"|"avatar"|"background"|"border"} id
     * @param {string} color Código de color HTML5
     * @returns {Welcomer}
     */
    setColor(id: "titulo" | "titulo-border" | "titulo-box" | "subtitulo" | "subtitulo-border" | "subtitulo-box" | "avatar" | "background" | "border", color: string): Welcomer;
    /**
     * Valor del avatar
     * @param {string|Buffer} value
     * @returns {Welcomer}
     */
    setAvatar(value: string | Buffer): Welcomer;
    /**
     * Valor del título
     * @param {string} value
     * @returns {Welcomer}
     */
    setTitulo(value: string): Welcomer;
    /**
     * Valor del subtítulo
     * @param {string} value
     * @returns {Welcomer}
     */
    setSubtitulo(value: string): Welcomer;
    /**
     * Valor del color del título
     * @param {string} value
     * @returns {Welcomer}
     */
    setColorTitulo(value: string): Welcomer;
    /**
     * Valor del color del subtítulo
     * @param {string} value
     * @returns {Welcomer}
     */
    setColorSubtitulo(value: string): Welcomer;
    /**
     * Valor del color del círculo
     * @param {string} value
     * @returns {Welcomer}
     */
    setColorCircle(value: string): Welcomer;
    /**
     * Valor del color del overlay
     * @param {string} value
     * @returns {Welcomer}
     */
    setColorOverlay(value: string): Welcomer;
    /**
     * Valor del color del overlay
     * @param {number|string} value
     * @returns {Welcomer}
     */
    setOpacityOverlay(value: number | string): Welcomer;
    /**
     * Establecer imagen / color de fondo
     * @param {"COLOR"|"IMAGE"} type Tipo de fondo
     * @param {string|Buffer} [data] Color o imagen de fondo
     */
    setBackground(type: "COLOR" | "IMAGE", data?: string | Buffer): this;
    /**
     * Establecer rectangle / rounded de overlay
     * @param {"RECTANGLE"|"ROUNDED"} type Tipo de fondo
     */
    setTypeOverlay(type: "RECTANGLE" | "ROUNDED"): this;
    /**
     * Construye la tarjeta de bienvenida
     * @param {string} [font="Arial"] Familia tipográfica
     * @returns {Promise<Buffer>} La tarjeta de bienvenida en formato de buffer
     */
    build(font?: string): Promise<Buffer>;
}
import Base = require("./Base/GreetingCard");
//# sourceMappingURL=Welcomer.d.ts.map