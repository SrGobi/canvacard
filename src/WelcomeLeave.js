const { createCanvas, loadImage } = require("@napi-rs/canvas");
const APIError = require("./utils/error.utils");
const shorten = require("./utils/shorten.utils");
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
class WelcomeLeave {
  constructor() {
    /**
     * Card background
     * @property {object} backgroundGlobal Card background
     * @property {"IMAGE"|"COLOR"} [backgroundGlobal.type="color"] Type of fund
     * @private
     */
    this.backgroundGlobal = { type: "COLOR", image: "#23272A" };
    /**
     * Avatar of card
     * @property {string}
     * @private
     */
    this.avatar = `${__dirname}/../assets/images/default-avatar.png`;
    /**
     * Title
     * @property {string}
     * @private
     */
    this.titulo = "Custom Title!";
    /**
     * Subtitle
     * @property {string}
     * @private
     */
    this.subtitulo = "Custom Subtitle!";
    /**
     * Color of the Title
     * @property {string}
     * @private
     */
    this.colorTitulo = "#FFFFFF";
    /**
     * Color of the Subtitle
     * @property {string}
     * @private
     */
    this.colorSubtitulo = "#5865f2";
    /**
     * Color of the circle
     * @property {string}
     * @private
     */
    this.colorCircle = "#FFFFFF";
    /**
     * Color of the overlay
     * @property {string}
     * @private
     */
    this.colorOverlay = "#000000";
    /**
     * Opacity of the overlay
     * @property {number}
     * @private
     */
    this.opacityOverlay = 0.4;
    /**
     * Type of overlay
     * @property {object} typeOverlay Type of overlay
     * @property {"RECTANGLE"|"ROUNDED"} [typeOverlay.type="ROUNDED"] Type of overlay
     * @private
     */
    this.typeOverlay = { type: "ROUNDED" };
  }
  /**
   * @method setAvatar
   * @name setAvatar
   * @description Set the avatar of the card
   * @param {string|Buffer} value Avatar URL or Buffer
   * @returns {WelcomeLeave} The current instance of WelcomeLeave
   * @throws {APIError} Missing field: avatar
   */
  setAvatar(value) {
    if (!value) throw new APIError("Falta campo: avatar");
    this.avatar = value;
    return this;
  }

  /**
   * @method setTitulo
   * @name setTitulo
   * @description Set the title of the card
   * @param {string} value Title value
   * @param {string} color HTML5 color code "#000000"
   * @returns {WelcomeLeave} The current instance of WelcomeLeave
   * @throws {APIError} The title must be a string
   */
  setTitulo(value, color) {
    if (typeof value !== 'string') throw new APIError("The title must be a string");
    this.titulo = value;
    if (typeof color !== 'string') throw new APIError("The color must be a string");
    this.colorTitulo = color;
    return this;
  }

  /**
   * @method setSubtitulo
   * @name setSubtitulo
   * @description Set the subtitle of the card
   * @param {string} value Subtitle value
   * @param {string} color HTML5 color code "#000000"
   * @returns {WelcomeLeave} The current instance of WelcomeLeave
   * @throws {APIError} The subtitle must be a string
   */
  setSubtitulo(value, color) {
    if (typeof value !== 'string') throw new APIError("The subtitle must be a string");
    this.subtitulo = value;
    if (typeof color !== 'string') throw new APIError("The color must be a string");
    this.colorSubtitulo = color;
    return this;
  }

  /**
   * @method setColorCircle
   * @name setColorCircle
   * @description Set the color of the circle
   * @param {string} value HTML5 color code "#000000"
   * @returns {WelcomeLeave} The current instance of WelcomeLeave
   * @throws {APIError} The color must be a string
   */
  setColorCircle(value) {
    if (typeof value !== 'string') throw new APIError("The color must be a string");
    this.colorCircle = value;
    return this;
  }

  /**
   * @method setColorOverlay
   * @name setColorOverlay
   * @description Set the color of the overlay
   * @param {string} value HTML5 color code "#000000"
   * @returns {WelcomeLeave} The current instance of WelcomeLeave
   * @throws {APIError} The color must be a string
   */
  setColorOverlay(value) {
    if (typeof value !== 'string') throw new APIError("The color must be a string");
    this.colorOverlay = value;
    return this;
  }

  /**
   * @method setOpacityOverlay
   * @name setOpacityOverlay
   * @description Set the opacity of the overlay
   * @param {number} value Opacity value (0 to 1)
   * @returns {WelcomeLeave} The current instance of WelcomeLeave
   * @throws {APIError} The opacity must be a number
   */
  setOpacityOverlay(value) {
    if (isNaN(value)) throw new APIError("The opacity must be a number");
    this.opacityOverlay = value;
    return this;
  }

  /**
   * @method setBackground
   * @name setBackground
   * @description Set background image/color of the card
   * @param {"COLOR"|"IMAGE"} type Type of background
   * @param {string} data Image URL or HTML color code
   * @returns {WelcomeLeave} The current instance of WelcomeLeave
   * @throws {APIError} Missing field: data
   */
  setBackground(type, data) {
    if (!data) throw new APIError("Missing field: data");
    if (type === "COLOR") {
      this.backgroundGlobal.type = "color";
      this.backgroundGlobal.image = typeof data === "string" ? data : "#23272A";
    } else if (type === "IMAGE") {
      this.backgroundGlobal.type = "image";
      this.backgroundGlobal.image = data;
    } else {
      throw new APIError(`Background type not supported "${type}"`);
    }
    return this;
  }

  /**
   * @method setTypeOverlay
   * @name setTypeOverlay
   * @description Set the type of overlay
   * @param {"RECTANGLE"|"ROUNDED"} type Type of overlay
   * @returns {WelcomeLeave} The current instance of WelcomeLeave
   * @throws {APIError} Missing field: type
   */
  setTypeOverlay(type) {
    if (!type) throw new APIError("Missing field: type");
    switch (type) {
      case "RECTANGLE":
        this.typeOverlay.type = "RECTANGLE";
        break;
      case "ROUNDED":
        this.typeOverlay.type = "ROUNDED";
        break;
      default:
        throw new APIError(`Overlay type not supported "${type}"`);
    }
    return this;
  }

  /**
   * @method build
   * @name build
   * @description Build the card
   * @param {string} [font=Arial] Font to use in the card
   * @returns {Promise<Buffer>} Card image in buffer format
   * @throws {APIError} Error loading background image
   */
  async build(font = "Arial") {
    const canvas = createCanvas(1100, 500);
    const ctx = canvas.getContext("2d");

    let bg = null;
    try {
      if (this.backgroundGlobal.type === "image") {
        bg = await loadImage(this.backgroundGlobal.image);
        ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);
      } else {
        ctx.fillStyle = this.backgroundGlobal.image;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }
    } catch (error) {
      throw new APIError("Error loading background image:", error);
    }

    // Draw Overlay
    ctx.fillStyle = this.colorOverlay;
    ctx.globalAlpha = this.opacityOverlay;
    if (this.typeOverlay.type === "RECTANGLE") {
      ctx.rect(55, 25, canvas.width - 110, canvas.height - 50);
    } else if (this.typeOverlay.type === "ROUNDED") {
      ctx.roundRect(55, 25, canvas.width - 110, canvas.height - 50, 10);
    }
    ctx.shadowBlur = 10;
    ctx.shadowColor = this.colorOverlay;
    ctx.fill();
    ctx.globalAlpha = 1;

    // Draw Title
    ctx.shadowBlur = 10;
    ctx.shadowColor = "black";
    ctx.fillStyle = this.colorTitulo;
    ctx.textAlign = "center";
    ctx.font = `60px ${font}`;
    ctx.fillText(shorten(this.titulo, 30), canvas.width - 550, canvas.height - 120);

    // Draw Subtitle
    ctx.fillStyle = this.colorSubtitulo;
    ctx.font = `30px ${font}`;
    ctx.fillText(shorten(this.subtitulo, 50), canvas.width - 550, canvas.height - 70);

    // Draw Circle
    ctx.shadowBlur = 0;
    ctx.beginPath();
    ctx.lineWidth = 10;
    ctx.strokeStyle = this.colorCircle;
    ctx.arc(canvas.width - 550, 190, 125, 0, Math.PI * 2, true);
    ctx.stroke();
    ctx.closePath();
    ctx.clip();

    // Draw Avatar
    const avatar = await loadImage(this.avatar);
    ctx.drawImage(avatar, canvas.width - 675, 65, 250, 250);

    return canvas.toBuffer("image/png");
  }
}

module.exports = WelcomeLeave;