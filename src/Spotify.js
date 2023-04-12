const Canvas = require("@napi-rs/canvas");
const Util = require("./Util");
const assets = require("./Assets");

/**
 * Creador de tarjetas de presencia de Spotify
 */
class Spotify {

  /**
   * Crea una tarjeta de presencia de Spotify
   * @example
   * const card = new canvacard.Spotify()
      .setAuthor("Indila")
      .setAlbum("Mini World")
      .setStartTimestamp(Date.now() - 10000)
      .setEndTimestamp(Date.now() + 50000)
      .setImage("https://is5-ssl.mzstatic.com/image/thumb/Features111/v4/a4/89/a1/a489a1cb-4543-6861-a276-4470d41d6a90/mzl.zcdmhnlk.jpg/800x800bb.jpeg")
      .setTitle("S.O.S");

  card.build()
      .then(data => {
          canvacard.write(data, "./images/spotify.png");
      });
   */
  constructor() {

    /**
     * Título de la canción
     * @type {string}
     */
    this.title = null;

    /**
     * Thumbnail
     * @type {string|Buffer|Canvas.Image}
     */
    this.image = null;

    /**
     * Artista de la canción
     * @type {string}
     */
    this.artist = null;

    /**
     * Nombre del álbum de Spotify
     * @type {string}
     */
    this.album = null;

    /**
     * Marca de tiempo de inicio de presencia de discord
     * @type {number}
     */
    this.start = null;

    /**
     * Marca de tiempo de finalización de presencia de discord
     * @type {number}
     */
    this.end = null;

    /**
     * @typedef {object} SpotifyDataBG
     * @property {number} type Tipo de fondo
     * @property {string|Buffer} data Datos de fondo
     */

    /**
     * Fondo
     * @type {SpotifyDataBG}
     */
    this.background = {
      type: 0,
      data: "#2F3136"
    };

    /**
     * @typedef {object} SpotifyProgressBarData
     * @property {string} bgColor Barra de progreso bg color
     * @property {string} color Barra de progreso bg color
     */

    /**
     * Detalles de la barra de progreso
     * @type {SpotifyProgressBarData}
     */
    this.progressBar = {
      bgColor: "#E8E8E8",
      color: "#1DB954"
    };

    this.registerFonts();
  }

  /**
   * Cargar fuentes
   * @param {any[]} fontArray Matriz de fuentes
   * @returns {Spotify}
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
   * Establecer detalles de la barra de progreso
   * @param {"TRACK"|"BAR"} type Tipo de barra de progreso
   * @param {string} color Color para establecer
   * @returns {Spotify}
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
        throw new Error(`Tipo de barra de progreso no válido "${type}"!`);
    }

    return this;
  }

  /**
   * Establecer título
   * @param {string} title Título para establecer
   * @returns {Spotify}
   */
  setTitle(title) {
    if (!title || typeof title !== "string") throw new Error(`Título esperado, recibido ${typeof title}!`);
    this.title = title;
    return this;
  }

  /**
   * Establecer imagen
   * @param {string|Buffer|Canvas.Image} source Fuente de imagen
   * @returns {Spotify}
   */
  setImage(source) {
    if (!source) throw new Error(`Fuente de imagen esperada, recibida ${typeof title}!`);
    this.image = source;
    return this;
  }

  /**
   * Establecer nombre de artista
   * @param {string} name Nombre del artista
   * @returns {Spotify}
   */
  setAuthor(name) {
    if (!name || typeof name !== "string") throw new Error(`Nombre esperado del artista, recibido ${typeof name}!`);
    this.artist = name;
    return this;
  }

  /**
   * Establecer el nombre del álbum
   * @param {string} name Nombre del álbum
   * @returns {Spotify}
   */
  setAlbum(name) {
    if (!name || typeof name !== "string") throw new Error(`Nombre del álbum esperado, recibido ${typeof name}!`);
    this.album = name;
    return this;
  }

  /**
   * Establecer marca de tiempo de inicio
   * @param {Date|number} time Marca de tiempo
   * @returns {Spotify}
   */
  setStartTimestamp(time) {
    if (!time) throw new Error(`Marca de tiempo esperada, recibida ${typeof time}!`);
    if (time instanceof Date) time = time.getTime();
    this.start = time;
    return this;
  }

  /**
   * Establecer marca de tiempo de finalización
   * @param {Date|number} time Marca de tiempo
   * @returns {Spotify}
   */
  setEndTimestamp(time) {
    if (!time) throw new Error(`Marca de tiempo esperada, recibida ${typeof time}!`);
    if (time instanceof Date) time = time.getTime();
    this.end = time;
    return this;
  }

  /**
   * Definir fondo
   * @param {"COLOR"|"IMAGE"} type Tipo de fondo
   * @param {string|Buffer|Canvas.Image} data Datos de fondo
   * @returns {Spotify}
   */
  setBackground(type = "COLOR", data = "#2F3136") {
    switch (type) {
      case "COLOR":
        this.background.type = 0;
        this.background.data = data && typeof data === "string" ? data : "#2F3136";
        break;
      case "IMAGE":
        if (!data) throw new Error("¡Faltan datos de fondo!");
        this.background.type = 1;
        this.background.data = data;
        break;
      default:
        throw new Error(`Tipo de fondo no válido "${type}"!`);
    }

    return this;
  }

  /**
   * Esta función convierte los datos sin procesar en una tarjeta de presencia de Spotify.
   * @param {object} ops Fuentes
   * @param {string} [ops.fontX="Manrope"] Familia tipográfica Bold
   * @param {string} [ops.fontY="Manrope"] Familia tipográfica regular
   * @returns {Promise<Buffer>}
   */
  async build(ops = { fontX: "Manrope", fontY: "Manrope" }) {
    if (!this.title) throw new Error('Falta el "título" en las opciones.');
    if (!this.artist) throw new Error('Falta "artista" en las opciones.');
    if (!this.start) throw new Error('Falta "inicio" en las opciones.');
    if (!this.end) throw new Error('Falta "final" en las opciones.');

    const total = this.end - this.start;
    const progress = Date.now() - this.start;
    const progressF = Util.formatTime(progress > total ? total : progress);
    const ending = Util.formatTime(total);

    const canvas = Canvas.createCanvas(600, 150);
    const ctx = canvas.getContext("2d");

    // fondo
    ctx.beginPath();
    if (this.background.type === 0) {
      ctx.rect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = this.background.data || "#2F3136";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    } else {
      let img = await Canvas.loadImage(this.background.data);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    }

    // dibujar imagen
    const img = await Canvas.loadImage(this.image);
    ctx.drawImage(img, 30, 15, 120, 120);

    // dibujar el nombre de la canción
    ctx.fillStyle = "#FFFFFF";
    ctx.font = `bold 20px ${ops.fontX}`;
    await Util.renderEmoji(ctx, Util.shorten(this.title, 30), 170, 40);

    // dibujar el nombre del artista
    ctx.fillStyle = "#F1F1F1";
    ctx.font = `14px ${ops.fontY}`;
    await Util.renderEmoji(ctx, `por ${Util.shorten(this.artist, 40)}`, 170, 70);

    // agregar álbum
    if (this.album && typeof this.album === "string") {
      ctx.fillStyle = "#F1F1F1";
      ctx.font = `14px ${ops.fontY}`;
      await Util.renderEmoji(ctx, `en ${Util.shorten(this.album, 40)}`, 170, 90);
    }

    // punto final
    ctx.fillStyle = "#B3B3B3";
    ctx.font = `14px ${ops.fontY}`;
    await Util.renderEmoji(ctx, ending, 430, 130);

    // Progreso
    ctx.fillStyle = "#B3B3B3";
    ctx.font = `14px ${ops.fontY}`;
    await Util.renderEmoji(ctx, progressF, 170, 130);

    // pista de la barra de progreso
    ctx.rect(170, 170, 300, 4);
    ctx.fillStyle = "#E8E8E8";
    ctx.fillRect(170, 110, 300, 4);

    // barra de progreso
    ctx.fillStyle = "#1DB954";
    ctx.fillRect(170, 110, this.__calculateProgress(progress, total), 4);

    // regreso
    return canvas.toBuffer();
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