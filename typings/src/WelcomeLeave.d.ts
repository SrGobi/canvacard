export = WelcomeLeave;
/**
 * @kind class
 * @description Welcome or Leave card creator
 * <details open>
 *  <summary>PREVIEW</summary>
 * <br>
 *   <a>
 *     <img src="https://raw.githubusercontent.com/SrGobi/canvacard/refs/heads/test/welcome_1.png" alt="Welcome Card Preview 1">
 *   </a>
 *   <a>
 *     <img src="https://raw.githubusercontent.com/SrGobi/canvacard/refs/heads/test/welcome_2.png" alt="Welcome Card Preview 2">
 *   </a>
 *   <a>
 *     <img src="https://raw.githubusercontent.com/SrGobi/canvacard/refs/heads/test/welcome_3.png" alt="Welcome Card Preview 3">
 *   </a>
 * </details>
 *
 * @example
 * ```js
const welcome = new canvacard.WelcomeLeave()
  .setAvatar(data.avatarURL)
  .setBackground('COLOR', '#000000')
  .setTitulo("Titulo de la Tarjeta👋", '#FFFFFF')
  .setSubtitulo("Subtitulo de la Tarjeta 👋", '#FFFFFF')
  .setOpacityOverlay(1)
  .setColorCircle('#FFFFFF')
  .setColorOverlay('#5865F2')
  .setTypeOverlay('ROUNDED');
const welcomeImage = await welcome.build("Suravaram");
canvacard.write(welcomeImage, "./welcomer.png");
 * ```
 */
declare class WelcomeLeave {
    /**
     * Card background
     * @property {object} backgroundGlobal Card background
     * @property {"IMAGE"|"COLOR"} [backgroundGlobal.type="color"] Type of fund
     * @private
     */
    private backgroundGlobal;
    /**
     * Avatar of card
     * @property {string}
     * @private
     */
    private avatar;
    /**
     * Title
     * @property {string}
     * @private
     */
    private titulo;
    /**
     * Subtitle
     * @property {string}
     * @private
     */
    private subtitulo;
    /**
     * Color of the Title
     * @property {string}
     * @private
     */
    private colorTitulo;
    /**
     * Color of the Subtitle
     * @property {string}
     * @private
     */
    private colorSubtitulo;
    /**
     * Color of the circle
     * @property {string}
     * @private
     */
    private colorCircle;
    /**
     * Color of the overlay
     * @property {string}
     * @private
     */
    private colorOverlay;
    /**
     * Opacity of the overlay
     * @property {number}
     * @private
     */
    private opacityOverlay;
    /**
     * Type of overlay
     * @property {object} typeOverlay Type of overlay
     * @property {"RECTANGLE"|"ROUNDED"} [typeOverlay.type="ROUNDED"] Type of overlay
     * @private
     */
    private typeOverlay;
    /**
     * @method setAvatar
     * @name setAvatar
     * @description Set the avatar of the card
     * @param {string|Buffer} value Avatar URL or Buffer
     * @returns {WelcomeLeave} The current instance of WelcomeLeave
     * @throws {APIError} Missing field: avatar
     */
    setAvatar(value: string | Buffer): WelcomeLeave;
    /**
     * @method setTitulo
     * @name setTitulo
     * @description Set the title of the card
     * @param {string} value Title value
     * @param {string} color HTML5 color code "#000000"
     * @returns {WelcomeLeave} The current instance of WelcomeLeave
     * @throws {APIError} The title must be a string
     */
    setTitulo(value: string, color: string): WelcomeLeave;
    /**
     * @method setSubtitulo
     * @name setSubtitulo
     * @description Set the subtitle of the card
     * @param {string} value Subtitle value
     * @param {string} color HTML5 color code "#000000"
     * @returns {WelcomeLeave} The current instance of WelcomeLeave
     * @throws {APIError} The subtitle must be a string
     */
    setSubtitulo(value: string, color: string): WelcomeLeave;
    /**
     * @method setColorCircle
     * @name setColorCircle
     * @description Set the color of the circle
     * @param {string} value HTML5 color code "#000000"
     * @returns {WelcomeLeave} The current instance of WelcomeLeave
     * @throws {APIError} The color must be a string
     */
    setColorCircle(value: string): WelcomeLeave;
    /**
     * @method setColorOverlay
     * @name setColorOverlay
     * @description Set the color of the overlay
     * @param {string} value HTML5 color code "#000000"
     * @returns {WelcomeLeave} The current instance of WelcomeLeave
     * @throws {APIError} The color must be a string
     */
    setColorOverlay(value: string): WelcomeLeave;
    /**
     * @method setOpacityOverlay
     * @name setOpacityOverlay
     * @description Set the opacity of the overlay
     * @param {number} value Opacity value (0 to 1)
     * @returns {WelcomeLeave} The current instance of WelcomeLeave
     * @throws {APIError} The opacity must be a number
     */
    setOpacityOverlay(value: number): WelcomeLeave;
    /**
     * @method setBackground
     * @name setBackground
     * @description Set background image/color of the card
     * @param {"COLOR"|"IMAGE"} type Type of background
     * @param {string} data Image URL or HTML color code
     * @returns {WelcomeLeave} The current instance of WelcomeLeave
     * @throws {APIError} Missing field: data
     */
    setBackground(type: "COLOR" | "IMAGE", data: string): WelcomeLeave;
    /**
     * @method setTypeOverlay
     * @name setTypeOverlay
     * @description Set the type of overlay
     * @param {"RECTANGLE"|"ROUNDED"} type Type of overlay
     * @returns {WelcomeLeave} The current instance of WelcomeLeave
     * @throws {APIError} Missing field: type
     */
    setTypeOverlay(type: "RECTANGLE" | "ROUNDED"): WelcomeLeave;
    /**
     * @method build
     * @name build
     * @description Build the card
     * @param {string} [font=Arial] Font to use in the card
     * @returns {Promise<Buffer>} Card image in buffer format
     * @throws {APIError} Error loading background image
     */
    build(font?: string): Promise<Buffer>;
}
//# sourceMappingURL=WelcomeLeave.d.ts.map