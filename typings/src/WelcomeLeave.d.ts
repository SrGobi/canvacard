export = WelcomeLeave;
/**
 * @kind class
 * @description Creador de tarjetas de bienvenida o despedida
 */
declare class WelcomeLeave {
    /**
     * Fondo de la tarjeta
     * @property {object} backgroundGlobal Fondo de la tarjeta
     * @property {"IMAGE"|"COLOR"} [backgroundGlobal.type="color"] Tipo de fondo
     * @private
     */
    private backgroundGlobal;
    /**
     * Avatar de la tarjeta
     * @property {string}
     * @private
     */
    private avatar;
    /**
     * Título creado con Canvacard
     * @property {string}
     * @private
     */
    private titulo;
    /**
     * Subtítulo creado con Canvacard
     * @property {string}
     * @private
     */
    private subtitulo;
    /**
     * Color del título creado con Canvacard
     * @property {string}
     * @private
     */
    private colorTitulo;
    /**
     * Color del Subtítulo creado con Canvacard
     * @property {string}
     * @private
     */
    private colorSubtitulo;
    /**
     * Color del circulo
     * @property {string}
     * @private
     */
    private colorCircle;
    /**
     * Color del overlay
     * @property {string}
     * @private
     */
    private colorOverlay;
    /**
     * Opacidad del overlay
     * @property {number}
     * @private
     */
    private opacityOverlay;
    /**
     * Tipo de overlay
     * @property {object} typeOverlay Tipo de overlay
     * @property {"RECTANGLE"|"ROUNDED"} [typeOverlay.type="ROUNDED"] Tipo de overlay
     * @private
     */
    private typeOverlay;
    /**
     * @method setAvatar
     * @name setAvatar
     * @description Establecer el avatar de la tarjeta
     * @param {string|Buffer} value URL de la imagen o Buffer de la imagen
     * @returns {WelcomeLeave} La instancia actual de WelcomeLeave
     * @throws {APIError} El avatar debe ser un string o un Buffer
     */
    setAvatar(value: string | Buffer): WelcomeLeave;
    /**
     * @method setTitulo
     * @name setTitulo
     * @description Establecer el título de la tarjeta
     * @param {string} value Valor del título
     * @param {string} color Código de color HTML5 "#000000"
     * @returns {WelcomeLeave} La instancia actual de WelcomeLeave
     * @throws {APIError} El título debe ser un string
     */
    setTitulo(value: string, color: string): WelcomeLeave;
    /**
     * @method setSubtitulo
     * @name setSubtitulo
     * @description Establecer el subtítulo de la tarjeta
     * @param {string} value Valor del subtítulo
     * @param {string} color Código de color HTML5 "#000000"
     * @returns {WelcomeLeave} La instancia actual de WelcomeLeave
     * @throws {APIError} El subtítulo debe ser un string
     */
    setSubtitulo(value: string, color: string): WelcomeLeave;
    /**
     * @method setColorCircle
     * @name setColorCircle
     * @description Establecer el color del circulo
     * @param {string} value Código de color HTML5 "#000000"
     * @returns {WelcomeLeave} La instancia actual de WelcomeLeave
     * @throws {APIError} La opacidad debe ser un string
     */
    setColorCircle(value: string): WelcomeLeave;
    /**
     * @method setColorOverlay
     * @name setColorOverlay
     * @description Establecer el color del overlay
     * @param {string} value Código de color HTML5 "#000000"
     * @returns {WelcomeLeave} La instancia actual de WelcomeLeave
     * @throws {APIError} La opacidad debe ser un string
     */
    setColorOverlay(value: string): WelcomeLeave;
    /**
     * @method setOpacityOverlay
     * @name setOpacityOverlay
     * @description Establecer la opacidad del overlay
     * @param {number} value Valor de 0 a 1 para la opacidad
     * @returns {WelcomeLeave} La instancia actual de WelcomeLeave
     * @throws {APIError} La opacidad debe ser un número
     */
    setOpacityOverlay(value: number): WelcomeLeave;
    /**
     * @method setBackground
     * @name setBackground
     * @description Establecer imagen / color de fondo
     * @param {"COLOR"|"IMAGE"} type Tipo de fondo
     * @param {string} data URL de la imagen o código de color HTML
     * @returns {WelcomeLeave} La instancia actual de WelcomeLeave
     * @throws {APIError} Tipo de fondo no admitido
     */
    setBackground(type: "COLOR" | "IMAGE", data: string): WelcomeLeave;
    /**
     * @method setTypeOverlay
     * @name setTypeOverlay
     * @description Establecer rectangle / rounded de overlay
     * @param {"RECTANGLE"|"ROUNDED"} type Tipo de fondo
     * @returns {WelcomeLeave} La instancia actual de WelcomeLeave
     * @throws {APIError} Tipo de overlay no admitido
     */
    setTypeOverlay(type: "RECTANGLE" | "ROUNDED"): WelcomeLeave;
    /**
     * @method build
     * @name build
     * @description Construye la tarjeta de bienvenida
     * @param {string} [font=Arial] Fuente de texto para la tarjeta
     * @returns {Promise<Buffer>} Imagen de la tarjeta de bienvenida en formato de buffer
     * @throws {APIError} Si no se puede cargar la imagen de fondo
     */
    build(font?: string): Promise<Buffer>;
}
//# sourceMappingURL=WelcomeLeave.d.ts.map