export = FortniteShop;
/**
 * @kind class
 * Creador de tiene de artículos de Fortnite
 */
declare class FortniteShop {
    token: string;
    textHeader: string;
    textFooter: string;
    options: {
        lang: string;
        dateFormat: string;
    };
    /**
     * @method setToken
     * @name setToken
     * @description Establecer el token de la API de Fortnite
     * @param {string} value Token de la API de Fortnite
     * @returns {FortniteShop} La instancia actual de FortniteShop
     * @throws {APIError} Si no se proporciona un token válido
     */
    setToken(value: string): FortniteShop;
    /**
     * @method setText
     * @name setText
     * @description Establecer el texto del encabezado
     * @param {string} value Texto del encabezado
     * @returns {FortniteShop} La instancia actual de FortniteShop
     * @throws {APIError} Si el valor no es una cadena
     */
    setText(variable: any, value: string): FortniteShop;
    /**
     * @method build
     * @name build
     * @description Construir la tarjeta de la tienda de Fortnite
     * @param {string} [font="Arial"] Fuente de texto para la tarjeta
     * @returns {Promise<Buffer>} Imagen de la tarjeta de la tienda de Fortnite
     * @throws {APIError} Si no se puede obtener la información de la tienda
     */
    build(font?: string): Promise<Buffer>;
    getRarityValue(rarity: any): any;
    getRarityColors(rarity: any): any;
    drawItemName(ctx: any, text: any, x: any, y: any, maxWidth: any, font: any): void;
    drawItemPrice(ctx: any, price: any, x: any, y: any, maxWidth: any, font: any): Promise<void>;
}
//# sourceMappingURL=FortniteShop.d.ts.map