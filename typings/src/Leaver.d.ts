export = Leaver;
/**
 * Creador de tarjetas de salida
 */
declare class Leaver extends Base {
    /**
     * Fondo de la tarjeta
     * @type {"COLOR"|"IMAGE"}
     */
    data: "COLOR" | "IMAGE";
    /**
     * Opacidad del borde
     * @type {number|string}
     */
    opacityBorder: number | string;
    /**
     * Cargar fuentes
     * @param {any[]} fontArray Matriz de fuentes
     * @returns {Leaver}
     */
    registerFonts(fontArray?: any[]): Leaver;
    /**
     * Si debe representar el nombre de usuario con emojis (si corresponde)
     * @param {boolean} [apply=true] Configúrelo en "verdadero" para renderizar emojis.
     * @returns {Leaver}
     */
    renderEmojis(apply?: boolean): Leaver;
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
    colorOverlay: string;
    /**
     * Valor del color del overlay
     * @param {number|string} value
     * @returns {Leaver}
     */
    setOpacityOverlay(value: number | string): Leaver;
    opacityOverlay: string | number;
    /**
     * Establecer imagen / color de fondo
     * @param {"COLOR"|"IMAGE"} type Tipo de fondo
     * @param {string|Buffer} [data] Color o imagen de fondo
     */
    setBackground(type: "COLOR" | "IMAGE", data?: string | Buffer): Leaver;
    /**
     * Construye la tarjeta de abandono
     * @param {object} ops Fuentes
     * @param {string} [ops.fontX="MANROPE_BOLD"] Familia tipográfica Bold
     * @param {string} [ops.fontY="MANROPE_REGULAR"] Familia tipográfica regular
     * @returns {Promise<Buffer>}
     */
    build(ops?: {
        fontX?: string;
        fontY?: string;
    }): Promise<Buffer>;
}
import Base = require("./Base/GreetingCard");
//# sourceMappingURL=Leaver.d.ts.map