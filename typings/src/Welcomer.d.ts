export = Welcomer;
/**
 * Creador de tarjetas de bienvenida
 */
declare class Welcomer {
    /**
     * Fondo de la tarjeta
     * @type {"COLOR"|"IMAGE"}
     */
    data: "COLOR" | "IMAGE";
    /**
     * Avatar de la tarjeta
     * @type {string}
     */
    avatar: string;
    /**
     * Título creado con Canvacard
     * @type {string}
     */
    titulo: string;
    /**
     * Subtítulo creado con Canvacard
     * @type {string}
     */
    subtitulo: string;
    /**
     * Color del título creado con Canvacard
     * @type {string}
     */
    colorTitulo: string;
    /**
     * Color del Subtítulo creado con Canvacard
     * @type {string}
     */
    colorSubtitulo: string;
    /**
     * Color del circulo
     * @type {string}
     */
    colorCircle: string;
    /**
     * Color del borde
     * @type {string}
     */
    colorBorder: string;
    /**
     * Opacidad del borde
     * @type {number|string}
     */
    opacityBorder: number | string;
    /**
     * Color del fondo
     * @type {string}
     */
    colorBackground: string;
    /**
     * Cargar fuentes
     * @param {any[]} fontArray Matriz de fuentes
     * @returns {Welcomer}
     */
    registerFonts(fontArray?: any[]): Welcomer;
    /**
     * Si debe representar el nombre de usuario con emojis (si corresponde)
     * @param {boolean} [apply=true] Configúrelo en "verdadero" para renderizar emojis.
     * @returns {Welcomer}
     */
    renderEmojis(apply?: boolean): Welcomer;
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
     * Valor del color del borde
     * @param {string} value
     * @returns {Welcomer}
     */
    setColorBorder(value: string): Welcomer;
    /**
     * Valor del color del borde
     * @param {number|string} value
     * @returns {Welcomer}
     */
    setOpacityBorder(value: number | string): Welcomer;
    /**
     * Establecer imagen / color de fondo
     * @param {"COLOR"|"IMAGE"} type Tipo de fondo
     * @param {string|Buffer} [data] Color o imagen de fondo
     */
    setBackground(type: "COLOR" | "IMAGE", data?: string | Buffer): Welcomer;
    /**
     * Construye la tarjeta de bienvenida
     * @param {object} ops Fuentes
     * @param {string} [ops.fontX="Manrope"] Familia tipográfica Bold
     * @param {string} [ops.fontY="Manrope"] Familia tipográfica regular
     * @returns {Promise<Buffer>}
     */
    build(ops?: {
        fontX?: string;
        fontY?: string;
    }): Promise<Buffer>;
}
//# sourceMappingURL=Welcomer.d.ts.map