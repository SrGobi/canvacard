export = FortniteShop;
/**
 * @kind class
 * @description Creador de tarjetas de la tienda de Fortnite
 * <img src="https://raw.githubusercontent.com/SrGobi/canvacard/refs/heads/test/fortnite_shop.png" alt="Fortnite Shop Card Preview">
 *
 * Para obtener un token de la API de Fortnite, visite [fortnite-api.com](https://fortnite-api.com/)
 *
 * @example
 * ```js
const shop = new canvacard.FortniteShop()
  .setToken("f4a26b940ef54a9a4238cef040bd08fa9001cd6c")
  .setText("footer", "ESP CUSTOMS X FORTNITE")

const FortniteShopImage = await shop.build("Luckiest Guy");
canvacard.write(FortniteShopImage, "./fortnite_shop.png");
 * ```
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