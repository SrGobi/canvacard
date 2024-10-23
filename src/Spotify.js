const { createCanvas, loadImage } = require("@napi-rs/canvas");
const formatTime = require("./utils/formatTime.utils");
const shorten = require("./utils/shorten.utils");
const APIError = require("./utils/error.utils");

/**
 * @kind class
 * Creador de tarjetas de presencia de Spotify
 */
class Spotify {

  /**
   * ![Spotify Card](https://raw.githubusercontent.com/SrGobi/canvacard/refs/heads/test/spotify.png)
   * 
   * @example
   * ```js
    const card = new canvacard.Spotify()
      .setAuthor("SAIKO")
      .setAlbum("SAKURA")
      .setStartTimestamp(Date.now() - 10000)
      .setEndTimestamp(Date.now() + 50000)
      .setImage("https://i.scdn.co/image/ab67616d00001e02e346fc6f767ca2ac8365fe60")
      .setTitle("YO LO SOÑÉ");
    const Image = await card.build("Cascadia Code PL");
    canvacard.write(Image, "./spotify.png");
   * ```
   *
   */
  constructor() {

    /**
     * Título de la canción
     * @property {string}
     * @private
     */
    this.title = "Titulo de la Canción";

    /**
     * Thumbnail
     * @property {string|Buffer|Canvas.Image}
     * @private
     */
    this.image = null;

    /**
     * Artista de la canción
     * @property {string}
     * @private
     */
    this.artist = "Artista de la Canción";

    /**
     * Nombre del álbum de Spotify
     * @property {string}
     * @private
     */
    this.album = "Nombre del Álbum";

    /**
     * Marca de tiempo de inicio de presencia de discord
     * @property {number}
     * @private
     */
    this.start = null;

    /**
     * Marca de tiempo de finalización de presencia de discord
     * @property {number}
     * @private
     */
    this.end = null;

    /**
     * Fondo de la tarjeta
     * @property {object} background Fondo
     * @property {number} background.type Tipo de fondo
     * @property {string|Buffer} background.data Datos de fondo
     * @private
     */
    this.background = {
      type: 0,
      data: "#2F3136"
    };

    /**
     * Detalles de la barra de progreso
     * @property {object} progressBar Detalles de la barra de progreso
     * @property {string} progressBar.bgColor Barra de progreso bg color
     * @property {string} progressBar.color Barra de progreso bg color
     * @private
     */
    this.progressBar = {
      bgColor: "#E8E8E8",
      color: "#1DB954"
    };

    /**
     * Ancho de la tarjeta
     * @property {number}
     * @default 775
     * @private
     */
    this.width = 775;

    /**
     * Altura de la tarjeta
     * @property {number}
     * @default 300
     * @private
     */
    this.height = 300;
  }

  /**
   * @method setProgressBar
   * @name setProgressBar
   * @description Establecer detalles de la barra de progreso
   * @param {"TRACK"|"BAR"} type Tipo de barra de progreso
   * @param {string} color Color para establecer
   * @returns {Spotify} La instancia actual de Spotify
   * @throws {APIError} Tipo de barra de progreso no válido
   */
  setProgressBar(type, color) {
    switch (type) {

      case "BAR":
        this.progressBar.color = color && typeof color === "string" ? color : "#1DB954";
        break;
      case "TRACK":
        this.progressBar.bgColor = color && typeof color === "string" ? color : "#E8E8E8";
        break;
      default:
        throw new APIError(`Tipo de barra de progreso no válido "${type}"!`);
    }

    return this;
  }

  /**
   * @method setTitle
   * @name setTitle
   * @description Establecer título
   * @param {string} title Título para establecer
   * @returns {Spotify} La instancia actual de Spotify
   * @throws {APIError} Título esperado pero no recibido
   */
  setTitle(title) {
    if (!title || typeof title !== "string") throw new APIError(`Título esperado, recibido ${typeof title}!`);
    this.title = title;
    return this;
  }

  /**
   * @method setImage
   * @name setImage
   * @description Establecer imagen
   * @param {string|Buffer|Canvas.Image} source Fuente de imagen
   * @returns {Spotify} La instancia actual de Spotify
   * @throws {APIError} Fuente de imagen esperada pero no recibida
   */
  setImage(source) {
    if (!source) throw new APIError(`Fuente de imagen esperada, recibida ${typeof title}!`);
    this.image = source;
    return this;
  }

  /**
   * @method setAuthor
   * @name setAuthor
   * @description Establecer nombre de artista
   * @param {string} name Nombre del artista
   * @returns {Spotify} La instancia actual de Spotify
   * @throws {APIError} Nombre esperado del artista pero no recibido
   */
  setAuthor(name) {
    if (!name || typeof name !== "string") throw new APIError(`Nombre esperado del artista, recibido ${typeof name}!`);
    this.artist = name;
    return this;
  }

  /**
   * @method setAlbum
   * @name setAlbum
   * @description Establecer el nombre del álbum
   * @param {string} name Nombre del álbum
   * @returns {Spotify} La instancia actual de Spotify
   * @throws {APIError} Nombre del álbum esperado pero no recibido
   */
  setAlbum(name) {
    if (!name || typeof name !== "string") throw new Error(`Nombre del álbum esperado, recibido ${typeof name}!`);
    this.album = name;
    return this;
  }

  /**
   * @method setStartTimestamp
   * @name setStartTimestamp
   * @description Establecer marca de tiempo de inicio
   * @param {Date|number} time Marca de tiempo
   * @returns {Spotify} La instancia actual de Spotify
   * @throws {APIError} Marca de tiempo esperada pero no recibida
   */
  setStartTimestamp(time) {
    if (!time) throw new APIError(`Marca de tiempo esperada, recibida ${typeof time}!`);
    if (time instanceof Date) time = time.getTime();
    this.start = time;
    return this;
  }

  /**
   * @method setEndTimestamp
   * @name setEndTimestamp
   * @description Establecer marca de tiempo de finalización
   * @param {Date|number} time Marca de tiempo
   * @returns {Spotify} La instancia actual de Spotify
   * @throws {APIError} Marca de tiempo esperada pero no recibida
   */
  setEndTimestamp(time) {
    if (!time) throw new APIError(`Marca de tiempo esperada, recibida ${typeof time}!`);
    if (time instanceof Date) time = time.getTime();
    this.end = time;
    return this;
  }

  /**
   * @method setBackground
   * @name setBackground
   * @description Establecer fondo de la tarjeta
   * @param {"COLOR"|"IMAGE"} type Tipo de fondo
   * @param {string|Buffer|Canvas.Image} data Datos de fondo
   * @returns {Spotify} La instancia actual de Spotify
   * @throws {APIError} Tipo de fondo no válido
   */
  setBackground(type = "COLOR", data = "#2F3136") {
    switch (type) {
      case "COLOR":
        this.background.type = 0;
        this.background.data = data && typeof data === "string" ? data : "#2F3136";
        break;
      case "IMAGE":
        if (!data) throw new APIError("¡Faltan datos de fondo!");
        this.background.type = 1;
        this.background.data = data;
        break;
      default:
        throw new APIError(`Tipo de fondo no válido "${type}"!`);
    }
    return this;
  }

  /**
   * @method build
   * @name build
   * @description Construye la tarjeta de presencia de Spotify.
   * @param {string} [font="Arial"] Fuente de texto para la tarjeta
   * @returns {Promise<Buffer>} Imagen de la tarjeta de presencia de Spotify en formato de buffer
   * @throws {APIError} Faltan opciones
   */
  async build(font = "Arial") {
    if (!this.title) throw new APIError('Falta el "título" en las opciones.');
    if (!this.artist) throw new APIError('Falta "artista" en las opciones.');
    if (!this.start) throw new APIError('Falta "inicio" en las opciones.');
    if (!this.end) throw new APIError('Falta "final" en las opciones.');

    const total = this.end - this.start;
    const progress = Date.now() - this.start;
    const progressF = formatTime(progress > total ? total : progress);
    const ending = formatTime(total);

    const canvas = createCanvas(this.width, this.height);
    const ctx = canvas.getContext("2d");

    // Establecer fondo y recorte inicial
    ctx.roundRect(0, 0, this.width, this.height, [34]);
    ctx.clip();

    // Dibujar base (fondo)
    ctx.beginPath();
    if (this.background.type === 0) {
      ctx.rect(0, 0, this.width, this.height);
      ctx.fillStyle = this.background.data || "#2F3136";
      ctx.fillRect(0, 0, this.width, this.height);
    } else {
      const background = await loadImage(this.background.data);
      ctx.drawImage(background, 0, 0, this.width, this.height);
    }
    ctx.closePath();

    // Guardar el estado del contexto antes de hacer el recorte de la imagen
    ctx.save();

    // Dibujar imagen con borde redondeado
    const size = 240;
    const x = 30;
    const y = 30;
    ctx.beginPath();
    ctx.roundRect(x, y, size, size, [34]);
    ctx.clip();
    const img = await loadImage(this.image);
    ctx.drawImage(img, x, y, size, size);
    ctx.closePath();

    // Restaurar el contexto para que el clip solo afecte a la imagen
    ctx.restore();

    const sizeX = x + 280;
    const sizeY = y + 80;

    // Dibujar el título de la canción
    ctx.fillStyle = "#FFFFFF";
    ctx.font = `bold 50px ${font}`;
    ctx.fillText(shorten(this.title, 30), sizeX, sizeY);

    // Dibujar el nombre del álbum
    if (this.album && typeof this.album === "string") {
      ctx.fillStyle = "#F1F1F1";
      ctx.font = `32px ${font}`;
      ctx.fillText(shorten(this.album, 40), sizeX, sizeY + 40);
    }


    // Dibujar el nombre del artista
    ctx.fillStyle = "#F1F1F1";
    ctx.font = `24px ${font}`;
    ctx.fillText(shorten(this.artist, 40), sizeX, sizeY + 70);

    // Dibujar la pista de la barra de progreso con bordes redondeados
    const progressBarWidth = 400;
    const progressBarHeight = 8;
    const radius = 4; // El radio de los bordes redondeados (la mitad de la altura para que sea completamente redonda)

    // Texto de finalización
    ctx.fillStyle = "#B3B3B3";
    ctx.font = `14px ${font}`;
    ctx.fillText(ending, sizeX + 360, sizeY + 120 + progressBarHeight);

    // Texto de progreso
    ctx.fillStyle = "#B3B3B3";
    ctx.font = `14px ${font}`;
    ctx.fillText(progressF, sizeX, sizeY + 120 + progressBarHeight);

    // Pista de la barra de progreso (fondo)
    ctx.beginPath();
    ctx.roundRect(sizeX, sizeY + 100, progressBarWidth, progressBarHeight, [radius]);
    ctx.fillStyle = "#E8E8E8";
    ctx.fill();
    ctx.closePath();

    // Barra de progreso (la parte verde)
    const progressWidth = this.__calculateProgress(progress, total);

    ctx.beginPath();
    ctx.roundRect(sizeX, sizeY + 100, progressWidth, progressBarHeight, [radius]);
    ctx.fillStyle = "#1DB954";
    ctx.fill();
    ctx.closePath();


    return canvas.toBuffer("image/png");
  }

  /**
   * Progreso de devoluciones
   * @type {number}
   * @private
   * @ignore
   */
  __calculateProgress(progress, total) {
    let prg = (progress / total) * 300;
    if (isNaN(prg) || prg < 0) return 0;
    if (prg > 300) return 300;
    return prg;
  }

}

module.exports = Spotify;