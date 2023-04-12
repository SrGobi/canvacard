const Canvas = require("@napi-rs/canvas");
/**
 * Obtiene variables y tipos
 * @param {object} prefix El tipo de variable
 * @param {object} variable La variable a cambiar
 * @returns La variable formateada
 */
const formatVariable = (prefix, variable) => {
  const formattedVariable = variable.toLowerCase()
    .split("-").map((word) => word.charAt(0).toUpperCase() + word.substr(1, word.length).toLowerCase()).join("");
  return prefix + formattedVariable;
}

class Greeting {

  constructor() {
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
     * Color del borde
     * @type {string}
     */
    this.colorBorder = "#000000";
    /**
     * Color del fondo
     * @type {string}
     */
    this.colorBackground = "000000";
  }
  /**
   * Sets color
   * @param {string} variable variable La variable para establecer el color en
   * @param {string} value value El color
   * @returns {Greeting}
   */
  setColor(variable, value) {
    const formattedVariable = formatVariable("color", variable);
    if (this[formattedVariable]) this[formattedVariable] = value;
    return this;
  }

  /**
   * Sets text
   * @param {string} variable variable La variable para establecer el texto en
   * @param {string} value value El texto
   * @returns {Greeting}
   */
  setText(variable, value) {
    const formattedVariable = formatVariable("text", variable);
    if (this[formattedVariable]) this[formattedVariable] = value;
    return this;
  }

  /**
   * Sets Opacity
   * @param {string} variable varible La variable para establecer la opacidad en
   * @param {number} value value La opacidad
   * @returns {Greeting}
   */
  setOpacity(variable, value) {
    const formattedVariable = formatVariable("opacity", variable);
    if (this[formattedVariable]) this[formattedVariable] = value;
    return this;
  }

  async toAttachment() {
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

    // Dibujar Titulo
    ctx.globalAlpha = "1";
    ctx.shadowBlur = 10;
    ctx.shadowColor = "black";
    ctx.fillStyle = this.colorTitulo;
    ctx.textAlign = "center";
    ctx.font = `60px The Bold Font`;
    ctx.fillText(this.titulo, canvas.width - 512, canvas.height - 90);

    // Dibujar Subtitulo
    ctx.shadowBlur = 10;
    ctx.shadowColor = "black";
    ctx.fillStyle = this.colorSubtitulo;
    ctx.textAlign = "center";
    ctx.font = `30px The Bold Font`;
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

    return canvas;
  }
};

module.exports = Greeting;