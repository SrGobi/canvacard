const { Base } = require("./Base/GreetingCard");
const Util = require("./Util");
const Canvas = require("canvas");
const assets = require("./Assets");

/**
 * Creador de tarjetas de salida
 */

class Leaver extends Base {

  /**
   * Leaver image builder
   * @example
   *  const LeaverCardURL = await new Leaver()
        .setAvatar(member.user.displayAvatarURL({ format: 'png', size: 4096 }))
        .setBackground('IMAGE', https://i.imgur.com/aClDVjh.jpg)
        .setTitulo("Titulo de la Tarjeta")
        .setSubtitulo("Subtitulo de la Tarjeta")
        .setOpacityBorder("0.5")
        .setColorTitulo(#FFFFFF)
        .setColorSubtitulo(#FFFFFF)
        .setColorCircle(#FFFFFF)
        .setColorBorder(#FFFFFF)
        .build({
        fontX: "Roboto Black",
        fontY: "Roboto",
        });
      await channel.send({ files: [{ attachment: LeaverCardURL, name: 'leaver-card.png' }] })
   */
  constructor() {
    super();
    /**
     * Fondo de la tarjeta
     * @type {"COLOR"|"IMAGE"}
     */
    this.data = { backgroundGlobal: { type: "color", image: "#23272A" } };
    /**
     * Avatar de la tarjeta
     * @type {string}
     */
    this.avatar = `${__dirname}/../../assets/img/default-avatar.png`;
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
     * Color del borde
     * @type {string}
     */
    this.colorBorder = "#000000";
    /**
     * Opacidad del borde
     * @type {number|string}
     */
    this.opacityBorder = "0.4";
    /**
     * Color del fondo
     * @type {string}
     */
    this.colorBackground = "#000000";
    // Cargar fuentes predeterminadas
    this.registerFonts();
    // Actualizar datos predeterminados
    this.__updateData();
  }

  /**
   * Cargar fuentes
   * @param {any[]} fontArray Matriz de fuentes
   * @returns {Leaver}
   */
  registerFonts(fontArray = []) {
    if (!fontArray.length) {
      setTimeout(() => {
        // Default fonts
        Canvas.registerFont(assets.font.get("UNI_SANS"), {
          family: "Sans Heavy",
          weight: "bold",
          style: "normal"
        });

        Canvas.registerFont(assets.font.get("BURBANK_BIG_CONSDENSED"), {
          family: "Burkank Big Condensed",
        });

        Canvas.registerFont(assets.font.get("KEEP_CALM_MED"), {
          family: "Keep Calm Medium",
        });

        Canvas.registerFont(assets.font.get("LUCKIEST_GUY"), {
          family: "Luckiest Guy",
        });

        Canvas.registerFont(assets.font.get("MANROPE_BOLD"), {
          family: "Manrope Bold",
          weight: "bold",
          style: "normal"
        });

        Canvas.registerFont(assets.font.get("MANROPE_REGULAR"), {
          family: "Manrope",
          weight: "regular",
          style: "normal"
        });

        Canvas.registerFont(assets.font.get("ROBOTO_BLACK"), {
          family: "Roboto Black",
          weight: "black",
          style: "normal"
        });

        Canvas.registerFont(assets.font.get("ROBOTO_LIGHT"), {
          family: "Roboto Light",
          weight: "light",
          style: "normal"
        });

        Canvas.registerFont(assets.font.get("ROBOTO_REGULAR"), {
          family: "Roboto",
          weight: "regular",
          style: "normal"
        });

        Canvas.registerFont(assets.font.get("SKETCH_MATCH"), {
          family: "SketchMatch"
        });

        Canvas.registerFont(assets.font.get("THE_BOLT_FONT"), {
          family: "The Bolt Font",
        });

        Canvas.registerFont(assets.font.get("TWEMOJI"), {
          family: "Twitter Color Emoji"
        });

        Canvas.registerFont(assets.font.get("WHITNEY_BOOK"), {
          family: "Whitney-Book",
          weight: "bold",
          style: "normal"
        });

        Canvas.registerFont(assets.font.get("WHITNEY_MEDIUM"), {
          family: "Whitney",
          weight: "regular",
          style: "normal"
        });
      }, 250);
    } else {
      fontArray.forEach(font => {
        Canvas.registerFont(font.path, font.face);
      });
    }
    return this;
  }

  /**
   * Si debe representar el nombre de usuario con emojis (si corresponde)
   * @param {boolean} [apply=true] Configúrelo en "verdadero" para renderizar emojis.
   * @returns {Leaver}
   */
  renderEmojis(apply = true) {
    this.data.renderEmojis = !!apply;
    return this;
  }

  /**
   * Actualiza el estado predeterminado
   * @private
   * @ignore
   */
  __updateData() {
    this.setAvatar(`https://cdn.discordapp.com/embed/avatars/0.png`);
    this.setBackground("COLOR", "#2c2f33" || "IMAGE", `https://i.imgur.com/aClDVjh.jpg`);
    this.setTitulo("Titulo personalizable!");
    this.setSubtitulo("Subtitulo personalizable!");
    this.setColorTitulo("#FFFFFF");
    this.setColorSubtitulo("#5865f2");
    this.setColorCircle("#FFFFFF");
    this.setColorBorder("#000000");
    this.setOpacityBorder("0.4");
    this.setColor("border", "#4D5E94");
    this.setColor("titulo", "#4D5E94");
    this.setColor("subtitulo", "#4D5E94");
    this.setColor("avatar", "#4D5E94");
  }

  /**
   * Establecer color
   * @param {"titulo"|"titulo-border"|"titulo-box"|"subtitulo"|"subtitulo-border"|"subtitulo-box"|"avatar"|"background"|"border"} id
   * @param {string} color Código de color HTML5
   * @returns {Leaver}
   */
  setColor(id, color) {
    super.setColor(id, color);
    return this;
  }
  /**
   * Valor del avatar
   * @param {string|Buffer} value
   * @returns {Leaver}
   */
  setAvatar(value) {
    this.avatar = value;
    return this;
  }

  /**
   * Valor del título
   * @param {string} value
   * @returns {Leaver}
   */
  setTitulo(value) {
    this.titulo = value;
    return this;
  }

  /**
   * Valor del subtítulo
   * @param {string} value
   * @returns {Leaver}
   */
  setSubtitulo(value) {
    this.subtitulo = value;
    return this;
  }
  /**
   * Valor del color del título
   * @param {string} value
   * @returns {Leaver}
   */
  setColorTitulo(value) {
    this.colorTitulo = value;
    return this;
  }
  /**
   * Valor del color del subtítulo
   * @param {string} value
   * @returns {Leaver}
   */
  setColorSubtitulo(value) {
    this.colorSubtitulo = value;
    return this;
  }
  /**
   * Valor del color del círculo
   * @param {string} value
   * @returns {Leaver}
   */
  setColorCircle(value) {
    this.colorCircle = value;
    return this;
  }

  /**
   * Valor del color del borde
   * @param {string} value
   * @returns {Leaver}
   */
  setColorBorder(value) {
    this.colorBorder = value;
    return this;
  }

  /**
   * Valor del color del borde
   * @param {number|string} value
   * @returns {Leaver}
   */
  setOpacityBorder(value) {
    this.opacityBorder = value;
    return this;
  }

  /**
   * Establecer imagen / color de fondo
   * @param {"COLOR"|"IMAGE"} type Tipo de fondo
   * @param {string|Buffer} [data] Color o imagen de fondo
   */
  setBackground(type, data) {
    if (!data) throw new Error("Falta campo: datos");
    switch (type) {
      case "COLOR":
        this.data.backgroundGlobal.type = "color";
        this.data.backgroundGlobal.image = data && typeof data === "string" ? data : "#23272A";
        break;
      case "IMAGE":
        this.data.backgroundGlobal.type = "image";
        this.data.backgroundGlobal.image = data;
        break;
      default:
        throw new Error(`Tipo de fondo no admitido "${type}"`);
    }
    return this;
  }

  /**
   * Construye la tarjeta de abandono
   * @param {object} ops Fuentes
   * @param {string} [ops.fontX="Manrope"] Familia tipográfica Bold
   * @param {string} [ops.fontY="Manrope"] Familia tipográfica regular
   * @returns {Promise<Buffer>}
   */
  async build(ops = { fontX: "Manrope", fontY: "Manrope" }) {
    // Crear lienzo
    const canvas = Canvas.createCanvas(1024, 450);
    const ctx = canvas.getContext("2d");

    // Dibujar background
    ctx.fillStyle = this.colorBackground;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    let bg = null;
    if (this.data.backgroundGlobal.type === "image") bg = await Canvas.loadImage(this.data.backgroundGlobal.image);
    // crear fondo
    if (!!bg) {
      ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);
    } else {
      ctx.fillStyle = this.data.backgroundGlobal.image;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    // Dibujar capa
    ctx.fillStyle = this.colorBorder;
    ctx.globalAlpha = this.opacityBorder;
    ctx.fillRect(0, 0, 25, canvas.height);
    ctx.fillRect(canvas.width - 25, 0, 25, canvas.height);
    ctx.fillRect(25, 0, canvas.width - 50, 25);
    ctx.fillRect(25, canvas.height - 25, canvas.width - 50, 25);

    // restablecer la transparencia
    ctx.globalAlpha = 1;

    // Dibujar Titulo
    ctx.globalAlpha = 1;
    ctx.shadowBlur = 10;
    ctx.shadowColor = "black";
    ctx.fillStyle = this.colorTitulo;
    ctx.textAlign = "center";
    ctx.font = `60px ${ops.fontY}`;
    ctx.fillText(this.titulo, canvas.width - 512, canvas.height - 90);

    // Dibujar Subtitulo
    ctx.shadowBlur = 10;
    ctx.shadowColor = "black";
    ctx.fillStyle = this.colorSubtitulo;
    ctx.textAlign = "center";
    ctx.font = `30px ${ops.fontY}`;
    ctx.fillText(this.subtitulo, canvas.width - 512, canvas.height - 40);

    // Dibujar un circulo de avatar
    ctx.shadowBlur = 0;
    ctx.beginPath();
    ctx.lineWidth = 10;
    ctx.strokeStyle = this.colorCircle;
    ctx.arc(512, 170, 125, 0, Math.PI * 2, true);
    ctx.stroke();
    ctx.closePath();
    ctx.clip();

    // Dibujar Avatar
    const avatar = await Canvas.loadImage(this.avatar);
    ctx.drawImage(avatar, 387, 45, 250, 250);

    return canvas.toBuffer();
  }

}

module.exports = Leaver;