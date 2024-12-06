export = FortniteShop;
/**
 * @kind class
 * @description Fortnite Shop card creator
 * <details open>
 *  <summary>PREVIEW</summary>
 * <br>
 *   <a>
 *     <img src="https://raw.githubusercontent.com/SrGobi/canvacard/refs/heads/test/fortnite_shop.png" alt="Fortnite Shop Card Preview">
 *   </a>
 * </details>
 *
 * To obtain a Fortnite API token, visit [fortnite-api.com](https://fortnite-api.com/)
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
    rows: number;
    /**
     * @method setToken
     * @name setToken
     * @description Set the Fortnite API token
     * @param {string} value Fortnite API token
     * @returns {FortniteShop} The current instance of FortniteShop
     * @throws {APIError} If the value is not a string
     */
    setToken(value: string): FortniteShop;
    /**
     * @method setRows
     * @name setRows
     * @description Set the number of rows for the Fortnite Shop card
     * @param {number} value Number of rows to set for the card
     * @returns {FortniteShop} The current instance of FortniteShop
     * @throws {APIError} If the value is not a number
     */
    setRows(value: number): FortniteShop;
    /**
     * @method setText
     * @name setText
     * @description Set the text for the Fortnite Shop card
     * @param {string} value Text to set for the card
     * @returns {FortniteShop} The current instance of FortniteShop
     * @throws {APIError} If the value is not a string
     */
    setText(variable: any, value: string): FortniteShop;
    /**
     * @method build
     * @name build
     * @description Build the Fortnite Shop card
     * @param {string} [font="Arial"] Font to use for the card
     * @returns {Promise<Buffer>} Card image in buffer format
     * @throws {APIError} If the token is not provided
     */
    build(font?: string): Promise<Buffer>;
    getItemColors(item: any): any;
    drawItemCard(ctx: any, item: any, x: any, y: any, width: any, height: any, font: any): Promise<void>;
    getRarityColors(rarity: any): any;
}
//# sourceMappingURL=FortniteShop.d.ts.map