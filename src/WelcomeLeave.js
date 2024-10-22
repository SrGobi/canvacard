// canvacard/src/WelcomeLeave.js
const BaseCard = require("./Base/BaseCard");
const { createCanvas, loadImage } = require("@napi-rs/canvas");
const APIError = require("./utils/error.utils");
const shorten = require("./utils/shorten.utils");
/**
 * Creador de tarjetas de bienvenida
 */
class WelcomeLeave {

  /**
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
   *   <a>
   *     <img src="https://raw.githubusercontent.com/SrGobi/canvacard/refs/heads/test/welcome_4.png" alt="Welcome Card Preview 4">
   *   </a>
   * </details>
   * 
   * @example
   * ```js
    const welcome = new canvacard.Welcomer()
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
   * 
   * Constructor de la tarjeta de bienvenida
   */
  constructor() {
    /**
     * Fondo de la tarjeta
     * @property {object} backgroundGlobal Fondo de la tarjeta
     * @property {"IMAGE"|"COLOR"} [backgroundGlobal.type="color"] Tipo de fondo
     */
    this.backgroundGlobal = { type: "COLOR", image: "#23272A" };
    /**
     * Avatar de la tarjeta
     * @type {string}
     */
    this.avatar = `${__dirname}/../assets/img/default-avatar.png`;
    /**
     * Título creado con Canvacard
     * @type {string}
     */
    this.titulo = "Titulo personalizable!";
    /**
     * Subtítulo creado con Canvacard
     * @type {string}
     */
    this.subtitulo = "Descripcion personalizable!";
    /**
     * Color del título creado con Canvacard
     * @type {string}
     */
    this.colorTitulo = "#FFFFFF";
    /**
     * Color del Subtítulo creado con Canvacard
     * @type {string}
     */
    this.colorSubtitulo = "#5865f2";
    /**
     * Color del circulo
     * @type {string}
     */
    this.colorCircle = "#FFFFFF";
    /**
     * Color del overlay
     * @type {number|string}
     */
    this.colorOverlay = "#000000";
    /**
     * Opacidad del overlay
     * @type {string}
     */
    this.opacityOverlay = "0.4";
    /**
     * Tipo de overlay
     * @type {string}
     */
    this.typeOverlay = { type: "ROUNDED" };
  }
  /**
   * Valor del avatar
   * @param {string|Buffer} value URL de la imagen o Buffer de la imagen
   * @returns {WelcomeLeave} La instancia actual de WelcomeLeave
   * @throws {APIError} El avatar debe ser un string o un Buffer
   */
  setAvatar(value) {
    if (!value) throw new APIError("Falta campo: avatar");
    this.avatar = value;
    return this;
  }

  /**
   * Valor del título
   * @param {string} value Valor del título
   * @param {string} color Código de color HTML5 "#000000"
   * @returns {WelcomeLeave} La instancia actual de WelcomeLeave
   * @throws {APIError} El título debe ser un string
   */
  setTitulo(value, color) {
    if (typeof value !== 'string') throw new APIError("El título debe ser un string");
    this.titulo = value;
    if (typeof color !== 'string') throw new APIError("La opacidad debe ser un string");
    this.colorTitulo = color;
    return this;
  }

  /**
   * Valor del subtítulo
   * @param {string} value Valor del subtítulo
   * @param {string} color Código de color HTML5 "#000000"
   * @returns {WelcomeLeave} La instancia actual de WelcomeLeave
   * @throws {APIError} El subtítulo debe ser un string
   */
  setSubtitulo(value, color) {
    if (typeof value !== 'string') throw new APIError("El subtítulo debe ser un string");
    this.subtitulo = value;
    if (typeof color !== 'string') throw new APIError("La opacidad debe ser un string");
    this.colorSubtitulo = color;
    return this;
  }
  /**
   * Valor del color del círculo
   * @param {string} value Código de color HTML5 "#000000"
   * @returns {WelcomeLeave} La instancia actual de WelcomeLeave
   * @throws {APIError} La opacidad debe ser un string
   */
  setColorCircle(value) {
    if (typeof value !== 'string') throw new APIError("La opacidad debe ser un string");
    this.colorCircle = value;
    return this;
  }

  /**
   * Valor del color del overlay
   * @param {string} value Código de color HTML5 "#000000"
   * @returns {WelcomeLeave} La instancia actual de WelcomeLeave
   * @throws {APIError} La opacidad debe ser un string
   */
  setColorOverlay(value) {
    if (typeof value !== 'string') throw new APIError("La opacidad debe ser un string");
    this.colorOverlay = value;
    return this;
  }

  /**
   * Valor del color del overlay
   * @param {number} value Valor de 0 a 1 para la opacidad
   * @returns {WelcomeLeave} La instancia actual de WelcomeLeave
   * @throws {APIError} La opacidad debe ser un número
   */
  setOpacityOverlay(value) {
    if (isNaN(value)) throw new APIError("La opacidad debe ser un número");
    this.opacityOverlay = value;
    return this;
  }

  /**
   * Establecer imagen / color de fondo
   * @param {"COLOR"|"IMAGE"} type Tipo de fondo
   * @param {string} data URL de la imagen o código de color HTML
   * @returns {WelcomeLeave} La instancia actual de WelcomeLeave
   * @throws {APIError} Tipo de fondo no admitido
   */
  setBackground(type, data) {
    if (!data) throw new APIError("Falta campo: datos");
    if (type === "COLOR") {
      this.backgroundGlobal.type = "color";
      this.backgroundGlobal.image = typeof data === "string" ? data : "#23272A";
    } else if (type === "IMAGE") {
      this.backgroundGlobal.type = "image";
      this.backgroundGlobal.image = data;
    } else {
      throw new APIError(`Tipo de fondo no admitido "${type}"`);
    }
    return this;
  }

  /**
   * Establecer rectangle / rounded de overlay
   * @param {"RECTANGLE"|"ROUNDED"} type Tipo de fondo
   * @returns {WelcomeLeave} La instancia actual de WelcomeLeave
   * @throws {APIError} Tipo de overlay no admitido
   */
  setTypeOverlay(type) {
    if (!type) throw new APIError("Falta campo: tipo");
    switch (type) {
      case "RECTANGLE":
        this.typeOverlay.type = "RECTANGLE";
        break;
      case "ROUNDED":
        this.typeOverlay.type = "ROUNDED";
        break;
      default:
        throw new APIError(`Tipo de overlay no admitido "${type}"`);
    }
    return this;
  }

  /**
   * Construye la tarjeta de bienvenida
   * @param {string} [font="Arial"] Fuente de texto para la tarjeta
   * @returns {Promise<Buffer>} Imagen de la tarjeta de bienvenida en formato de buffer
   * @throws {APIError} Si no se puede cargar la imagen de fondo
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
      throw new APIError("Error al cargar la imagen de fondo:", error);
      // Podrías establecer un fondo predeterminado aquí si lo deseas
    }

    // Dibujar overlay
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

    // Dibujar Titulo
    ctx.shadowBlur = 10;
    ctx.shadowColor = "black";
    ctx.fillStyle = this.colorTitulo;
    ctx.textAlign = "center";
    ctx.font = `60px ${font}`;
    ctx.fillText(shorten(this.titulo, 30), canvas.width - 550, canvas.height - 120);

    // Dibujar Subtitulo
    ctx.fillStyle = this.colorSubtitulo;
    ctx.font = `30px ${font}`;
    ctx.fillText(shorten(this.subtitulo, 50), canvas.width - 550, canvas.height - 70);

    // Dibujar Avatar
    ctx.shadowBlur = 0;
    ctx.beginPath();
    ctx.lineWidth = 10;
    ctx.strokeStyle = this.colorCircle;
    ctx.arc(canvas.width - 550, 190, 125, 0, Math.PI * 2, true);
    ctx.stroke();
    ctx.closePath();
    ctx.clip();

    const avatar = await loadImage(this.avatar);
    ctx.drawImage(avatar, canvas.width - 675, 65, 250, 250);

    return canvas.toBuffer("image/png");
  }
}

module.exports = WelcomeLeave;