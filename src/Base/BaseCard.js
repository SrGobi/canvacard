// main/src/Base/BaseCard.js
const { createCanvas, loadImage } = require("@napi-rs/canvas");
const formatVariable = require("../utils/formatVariable.utils");

/**
 * Clase base para generar tarjetas personalizables (usada en tarjetas de bienvenida y despedida).
 */
class BaseCard {
  constructor() {
    // Ruta por defecto del avatar
    this.avatar = `${__dirname}/../assets/img/default-avatar.png`;

    // Texto personalizable
    this.titulo = "Título personalizable!";
    this.subtitulo = "Descripción personalizable!";

    // Colores personalizables
    this.colorTitulo = "#FFFFFF";
    this.colorSubtitulo = "#5865f2";
    this.colorCircle = "#FFFFFF";
    this.colorBorder = "#000000";
    this.colorBackground = "#000000";

    // Opciones adicionales como el fondo de la tarjeta
    this.data = {
      backgroundGlobal: { type: "COLOR", image: "#23272A" },
    };
  }

  /**
   * Establece el color de un componente de la tarjeta.
   * @param {string} variable - El componente al que se aplicará el color (ej. 'titulo', 'subtitulo').
   * @param {string} value - El color en formato hexadecimal.
   * @returns {BaseCard}
   */
  setColor(variable, value) {
    const formattedVariable = formatVariable("color", variable);
    if (this[formattedVariable]) this[formattedVariable] = value;
    return this;
  }

  /**
   * Establece el texto de un componente de la tarjeta.
   * @param {string} variable - El componente al que se aplicará el texto (ej. 'titulo', 'subtitulo').
   * @param {string} value - El texto a mostrar.
   * @returns {BaseCard}
   */
  setText(variable, value) {
    const formattedVariable = formatVariable("text", variable);
    if (this[formattedVariable]) this[formattedVariable] = value;
    return this;
  }

  /**
   * Establece la opacidad de un componente de la tarjeta.
   * @param {string} variable - El componente al que se aplicará la opacidad.
   * @param {number} value - El valor de la opacidad.
   * @returns {BaseCard}
   */
  setOpacity(variable, value) {
    const formattedVariable = formatVariable("opacity", variable);
    if (this[formattedVariable]) this[formattedVariable] = value;
    return this;
  }

  /**
   * Genera la tarjeta como un lienzo de imagen.
   * @returns {Promise<Canvas>}
   */
  async generateCard() {
    // Crear el lienzo
    const canvas = createCanvas(1024, 450);
    const ctx = canvas.getContext("2d");

    // Dibujar el fondo
    ctx.fillStyle = this.colorBackground;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    let bg = null;
    if (this.data.backgroundGlobal.type === "image") {
      bg = await loadImage(this.data.backgroundGlobal.image);
    }

    if (bg) {
      ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);
    }

    // Dibujar el borde
    ctx.fillStyle = this.colorBorder;
    ctx.globalAlpha = this.opacityBorder || 1;
    ctx.fillRect(0, 0, 25, canvas.height);
    ctx.fillRect(canvas.width - 25, 0, 25, canvas.height);
    ctx.fillRect(25, 0, canvas.width - 50, 25);
    ctx.fillRect(25, canvas.height - 25, canvas.width - 50, 25);

    // Dibujar el título
    ctx.globalAlpha = 1;
    ctx.shadowBlur = 10;
    ctx.shadowColor = "black";
    ctx.fillStyle = this.colorTitulo;
    ctx.textAlign = "center";
    ctx.font = `60px Arial`;
    ctx.fillText(this.titulo, canvas.width / 2, canvas.height - 90);

    // Dibujar el subtítulo
    ctx.shadowBlur = 10;
    ctx.shadowColor = "black";
    ctx.fillStyle = this.colorSubtitulo;
    ctx.font = `30px Arial`;
    ctx.fillText(this.subtitulo, canvas.width / 2, canvas.height - 40);

    // Dibujar el círculo del avatar
    ctx.shadowBlur = 0;
    ctx.beginPath();
    ctx.lineWidth = 10;
    ctx.strokeStyle = this.colorCircle;
    ctx.arc(canvas.width / 2, 170, 125, 0, Math.PI * 2, true);
    ctx.stroke();
    ctx.closePath();
    ctx.clip();

    // Cargar y dibujar el avatar
    const avatar = await loadImage(this.avatar);
    ctx.drawImage(avatar, canvas.width / 2 - 125, 45, 250, 250);

    return canvas;
  }
}

module.exports = BaseCard;
