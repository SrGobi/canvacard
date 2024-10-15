export = FortniteShop;
/**
 * Creador de imagen de la tienda de fortnite
 */
declare class FortniteShop {
    /**
     * Token
     * @type {string}
     */
    token: string;
    /**
     * Texto del encabezado
     * @type {string}
     */
    textHeader: string;
    /**
     * Texto del dia
     * @type {string}
     */
    textDaily: string;
    /**
     * Texto de destacados
     * @type {string}
     */
    textFeatured: string;
    /**
     * Textos de datos
     * @type {string}
     */
    textDate: string;
    /**
     * Texto del footer
     * @type {string}
     */
    textFooter: string;
    options: {
        lang: string;
        dateFormat: string;
    };
    /**
     * imagen de fondo
     * @type {string}
     */
    background: string;
    /**
     * Valor del Token
     * @param {string} value
     * @returns {FortniteShop}
     */
    setToken(value: string): FortniteShop;
    /**
     * Valor del background
     * @param {string} value
     * @returns {FortniteShop}
     */
    setBackground(value: string): FortniteShop;
    /**
     * Valor del texto
     * @param {string} value
     * @returns {FortniteShop}
     */
    setText(variable: any, value: string): FortniteShop;
    /**
     * Valor del idioma
     * @param {string} value
     * @returns {FortniteShop}
     */
    lang(value: string): FortniteShop;
    /**
     * Valor del formato de fecha
     * @param {string} value
     * @returns {FortniteShop}
     */
    dateFormat(value: string): FortniteShop;
    /**
     * Construye la imagen de la tienda de fortnite
     * @param {string} [font="Arial"] Familia tipográfica
     * @returns {Promise<string>} La imagen de la tienda de fortnite
     */
    build(font?: string): Promise<string>;
}
//# sourceMappingURL=FortniteShop.d.ts.map