// canvacard/src/Welcomer.js
const BaseCard = require("./Base/BaseCard");
const { createCanvas, loadImage } = require("@napi-rs/canvas");
const APIError = require("./utils/error.utils");
const shorten = require("./utils/shorten.utils");
/**
 * Creador de tarjetas de bienvenida
 */
class Welcomer extends BaseCard {

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
      .setAvatar(data.defaultAvatarURL)
      .setBackground('IMAGE', 'https://i.imgur.com/aClDVjh.jpg')
      .setTitulo("Titulo de la Tarjeta👋")
      .setSubtitulo("Subtitulo de la Tarjeta 👋")
      .setOpacityOverlay("0.5")
      .setColorTitulo('#FFFFFF')
      .setColorSubtitulo('#FFFFFF')
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
    super();
    /**
     * Fondo de la tarjeta
     * @property {object} backgroundGlobal Fondo de la tarjeta
     * @property {"IMAGE"|"COLOR"} [backgroundGlobal.type="color"] Tipo de fondo
     */
    this.data = {
      backgroundGlobal: { type: "COLOR", image: "#23272A" },
    };
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
    /**
     * Color del fondo
     * @type {string}
     */
    this.colorBackground = "#000000";

    // Actualizar datos predeterminados
    this.__updateData();
  }

  /**
   * Actualiza el estado predeterminado de los valores
   * @private
   */
  __updateData() {
    this.setAvatar(`https://cdn.discordapp.com/embed/avatars/0.png`);
    this.setBackground("COLOR", "#2c2f33" || "IMAGE", `https://i.imgur.com/aClDVjh.jpg`);
    this.setTitulo("Titulo personalizable!");
    this.setSubtitulo("Subtitulo personalizable!");
    this.setColorTitulo("#FFFFFF");
    this.setColorSubtitulo("#5865f2");
    this.setColorCircle("#FFFFFF");
    this.setColorOverlay("#000000");
    this.setOpacityOverlay("0.4");
    this.setTypeOverlay("ROUNDED");
    this.setColor("border", "#4D5E94");
    this.setColor("titulo", "#4D5E94");
    this.setColor("subtitulo", "#4D5E94");
    this.setColor("avatar", "#4D5E94");
  }

  /**
   * Establecer color
   * @param {"titulo"|"titulo-border"|"titulo-box"|"subtitulo"|"subtitulo-border"|"subtitulo-box"|"avatar"|"background"|"border"} id
   * @param {string} color Código de color HTML5
   * @returns {Welcomer}
   */
  setColor(id, color) {
    super.setColor(id, color);
    return this;
  }
  /**
   * Valor del avatar
   * @param {string|Buffer} value
   * @returns {Welcomer}
   */
  setAvatar(value) {
    this.avatar = value;
    return this;
  }

  /**
   * Valor del título
   * @param {string} value
   * @returns {Welcomer}
   */
  setTitulo(value) {
    this.titulo = value;
    return this;
  }

  /**
   * Valor del subtítulo
   * @param {string} value
   * @returns {Welcomer}
   */
  setSubtitulo(value) {
    this.subtitulo = value;
    return this;
  }
  /**
   * Valor del color del título
   * @param {string} value
   * @returns {Welcomer}
   */
  setColorTitulo(value) {
    this.colorTitulo = value;
    return this;
  }
  /**
   * Valor del color del subtítulo
   * @param {string} value
   * @returns {Welcomer}
   */
  setColorSubtitulo(value) {
    this.colorSubtitulo = value;
    return this;
  }
  /**
   * Valor del color del círculo
   * @param {string} value
   * @returns {Welcomer}
   */
  setColorCircle(value) {
    this.colorCircle = value;
    return this;
  }

  /**
   * Valor del color del overlay
   * @param {string} value
   * @returns {Welcomer}
   */
  setColorOverlay(value) {
    this.colorOverlay = value;
    return this;
  }

  /**
   * Valor del color del overlay
   * @param {number|string} value
   * @returns {Welcomer}
   */
  setOpacityOverlay(value) {
    this.opacityOverlay = value;
    return this;
  }

  /**
   * Establecer imagen / color de fondo
   * @param {"COLOR"|"IMAGE"} type Tipo de fondo
   * @param {string|Buffer} [data] Color o imagen de fondo
   */
  setBackground(type, data) {
    if (!data) throw new Error("Falta campo: datos");
    if (type === "COLOR") {
      this.data.backgroundGlobal.type = "color";
      this.data.backgroundGlobal.image = typeof data === "string" ? data : "#23272A";
    } else if (type === "IMAGE") {
      this.data.backgroundGlobal.type = "image";
      this.data.backgroundGlobal.image = data;
    } else {
      throw new Error(`Tipo de fondo no admitido "${type}"`);
    }
    return this;
  }

  /**
   * Establecer rectangle / rounded de overlay
   * @param {"RECTANGLE"|"ROUNDED"} type Tipo de fondo
   */
  setTypeOverlay(type) {
    if (!type) throw new Error("Falta campo: tipo");
    switch (type) {
      case "RECTANGLE":
        this.typeOverlay.type = "RECTANGLE";
        break;
      case "ROUNDED":
        this.typeOverlay.type = "ROUNDED";
        break;
      default:
        throw new Error(`Tipo de overlay no admitido "${type}"`);
    }
    return this;
  }

  /**
   * Construye la tarjeta de bienvenida
   * @param {string} [font="Arial"] Familia tipográfica
   * @returns {Promise<Buffer>} La tarjeta de bienvenida en formato de buffer
   */
  async build(font = "Arial") {
    const canvas = createCanvas(1100, 500);
    const ctx = canvas.getContext("2d");

    // Dibujar fondo
    ctx.fillStyle = this.colorBackground;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    let bg = null;
    try {
      if (this.data.backgroundGlobal.type === "image") {
        bg = await loadImage(this.data.backgroundGlobal.image);
        ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);
      } else {
        ctx.fillStyle = this.data.backgroundGlobal.image;
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

module.exports = Welcomer;