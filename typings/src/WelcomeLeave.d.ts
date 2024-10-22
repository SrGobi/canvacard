export = WelcomeLeave;
/**
 * Creador de tarjetas de bienvenida
 */
declare class WelcomeLeave {
    /**
     * Fondo de la tarjeta
     * @property {object} backgroundGlobal Fondo de la tarjeta
     * @property {"IMAGE"|"COLOR"} [backgroundGlobal.type="color"] Tipo de fondo
     */
    backgroundGlobal: {
        type: string;
        image: string;
    };
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
     * Valor del avatar
     * @param {string|Buffer} value URL de la imagen o Buffer de la imagen
     * @returns {WelcomeLeave} La instancia actual de WelcomeLeave
     * @throws {APIError} El avatar debe ser un string o un Buffer
     */
    setAvatar(value: string | Buffer): WelcomeLeave;
    /**
     * Valor del título
     * @param {string} value Valor del título
     * @param {string} color Código de color HTML5 "#000000"
     * @returns {WelcomeLeave} La instancia actual de WelcomeLeave
     * @throws {APIError} El título debe ser un string
     */
    setTitulo(value: string, color: string): WelcomeLeave;
    /**
     * Valor del subtítulo
     * @param {string} value Valor del subtítulo
     * @param {string} color Código de color HTML5 "#000000"
     * @returns {WelcomeLeave} La instancia actual de WelcomeLeave
     * @throws {APIError} El subtítulo debe ser un string
     */
    setSubtitulo(value: string, color: string): WelcomeLeave;
    /**
     * Valor del color del círculo
     * @param {string} value Código de color HTML5 "#000000"
     * @returns {WelcomeLeave} La instancia actual de WelcomeLeave
     * @throws {APIError} La opacidad debe ser un string
     */
    setColorCircle(value: string): WelcomeLeave;
    /**
     * Valor del color del overlay
     * @param {string} value Código de color HTML5 "#000000"
     * @returns {WelcomeLeave} La instancia actual de WelcomeLeave
     * @throws {APIError} La opacidad debe ser un string
     */
    setColorOverlay(value: string): WelcomeLeave;
    /**
     * Valor del color del overlay
     * @param {number} value Valor de 0 a 1 para la opacidad
     * @returns {WelcomeLeave} La instancia actual de WelcomeLeave
     * @throws {APIError} La opacidad debe ser un número
     */
    setOpacityOverlay(value: number): WelcomeLeave;
    /**
     * Establecer imagen / color de fondo
     * @param {"COLOR"|"IMAGE"} type Tipo de fondo
     * @param {string} data URL de la imagen o código de color HTML
     * @returns {WelcomeLeave} La instancia actual de WelcomeLeave
     * @throws {APIError} Tipo de fondo no admitido
     */
    setBackground(type: "COLOR" | "IMAGE", data: string): WelcomeLeave;
    /**
     * Establecer rectangle / rounded de overlay
     * @param {"RECTANGLE"|"ROUNDED"} type Tipo de fondo
     * @returns {WelcomeLeave} La instancia actual de WelcomeLeave
     * @throws {APIError} Tipo de overlay no admitido
     */
    setTypeOverlay(type: "RECTANGLE" | "ROUNDED"): WelcomeLeave;
    /**
     * Construye la tarjeta de bienvenida
     * @param {string} [font="Arial"] Fuente de texto para la tarjeta
     * @returns {Promise<Buffer>} Imagen de la tarjeta de bienvenida en formato de buffer
     * @throws {APIError} Si no se puede cargar la imagen de fondo
     */
    build(font?: string): Promise<Buffer>;
}
//# sourceMappingURL=WelcomeLeave.d.ts.map