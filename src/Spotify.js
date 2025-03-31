const { createCanvas, loadImage } = require("@napi-rs/canvas");
const formatTime = require("./utils/formatTime.utils");
const shorten = require("./utils/shorten.utils");
const APIError = require("./utils/error.utils");

/**
 * @kind class
 * @description Spotify card creator
 * <details open>
 *  <summary>PREVIEW</summary>
 * <br>
 *   <a>
 *     <img src="https://raw.githubusercontent.com/SrGobi/canvacard/refs/heads/test/spotify.png" alt="Spotify Card Preview">
 *   </a>
 * </details>
 * 
 * @example
 * ```js
const spotify = new canvacard.Spotify()
  .setAuthor("SAIKO")
  .setAlbum("SAKURA 👋")
  .setStartTimestamp(Date.now() - 10000)
  .setEndTimestamp(Date.now() + 50000)
  .setImage("https://i.scdn.co/image/ab67616d00001e02e346fc6f767ca2ac8365fe60")
  .setTitle("YO LO SOÑÉ");
const spotifyImage = await spotify.build("Cascadia Code PL");
canvacard.write(spotifyImage, "./spotify.png");
 * ```
 */
class Spotify {
  constructor() {

    /**
     * Title of the song
     * @property {string}
     * @private
     */
    this.title = "Title of the song";

    /**
     * Image of the song
     * @property {string|Buffer|Canvas.Image}
     * @private
     */
    this.image = null;

    /**
     * Name of the artist
     * @property {string}
     * @private
     */
    this.artist = "Artist Name";

    /**
     * Name of the album
     * @property {string}
     * @private
     */
    this.album = "Album Name";

    /**
     * Start timestamp
     * @property {number}
     * @private
     */
    this.start = null;

    /**
     * End timestamp
     * @property {number}
     * @private
     */
    this.end = null;

    /**
     * Background of the card
     * @property {object} background Background
     * @property {number} background.type Type of background
     * @property {string|Buffer} background.data Background data
     * @private
     */
    this.background = {
      type: 0,
      data: "#2F3136"
    };

    /**
     * Progress bar details
     * @property {object} progressBar Progress bar details
     * @property {string} progressBar.bgColor Progress bar bg color
     * @property {string} progressBar.color Progress bar color
     * @private
     */
    this.progressBar = {
      bgColor: "#E8E8E8",
      color: "#1DB954"
    };

    /**
     * Width of the card
     * @property {number}
     * @default 775
     * @private
     */
    this.width = 775;

    /**
     * Height of the card
     * @property {number}
     * @default 300
     * @private
     */
    this.height = 300;
  }

  /**
   * @method setProgressBar
   * @name setProgressBar
   * @description Set progress bar details
   * @param {"TRACK"|"BAR"} type Type of progress bar
   * @param {string} color Color of the progress bar
   * @returns {Spotify} The current instance of Spotify
   * @throws {APIError} Invalid progress bar type
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
        throw new APIError(`Invalid progress bar type "${type}"!`);
    }

    return this;
  }

  /**
   * @method setTitle
   * @name setTitle
   * @description Set title
   * @param {string} title Title of the song
   * @returns {Spotify} The current instance of Spotify
   * @throws {APIError} Title expected but not received
   */
  setTitle(title) {
    if (!title || typeof title !== "string") throw new APIError(`Expected title, received ${typeof title}!`);
    this.title = title;
    return this;
  }

  /**
   * @method setImage
   * @name setImage
   * @description Establecer imagen
   * @param {string|Buffer|Canvas.Image} source Fuente de imagen
   * @returns {Spotify} The current instance of Spotify
   * @throws {APIError} Image source expected but not received
   */
  setImage(source) {
    if (!source) throw new APIError(`Image source expected, received ${typeof title}!`);
    this.image = source;
    return this;
  }

  /**
   * @method setAuthor
   * @name setAuthor
   * @description Set the name of the artist
   * @param {string} name Name of the artist
   * @returns {Spotify} The current instance of Spotify
   * @throws {APIError} Artist name expected but not received
   */
  setAuthor(name) {
    if (!name || typeof name !== "string") throw new APIError(`Expected artist name, received ${typeof name}!`);
    this.artist = name;
    return this;
  }

  /**
   * @method setAlbum
   * @name setAlbum
   * @description Set the name of the album
   * @param {string} name Name of the album
   * @returns {Spotify} The current instance of Spotify
   * @throws {APIError} Album name expected but not received
   */
  setAlbum(name) {
    if (!name || typeof name !== "string") throw new Error(`Expected album name, received ${typeof name}!`);
    this.album = name;
    return this;
  }

  /**
   * @method setStartTimestamp
   * @name setStartTimestamp
   * @description Set start timestamp
   * @param {Date|number} time Timestamp
   * @returns {Spotify} The current instance of Spotify
   * @throws {APIError} Timestamp expected but not received
   */
  setStartTimestamp(time) {
    if (!time) throw new APIError(`Expected timestamp, received ${typeof time}!`);
    if (time instanceof Date) time = time.getTime();
    this.start = time;
    return this;
  }

  /**
   * @method setEndTimestamp
   * @name setEndTimestamp
   * @description Set end timestamp
   * @param {Date|number} time Timestamp
   * @returns {Spotify} The current instance of Spotify
   * @throws {APIError} Timestamp expected but not received
   */
  setEndTimestamp(time) {
    if (!time) throw new APIError(`Expected timestamp, received ${typeof time}!`);
    if (time instanceof Date) time = time.getTime();
    this.end = time;
    return this;
  }

  /**
   * @method setBackground
   * @name setBackground
   * @description Set background image/color of the card
   * @param {"COLOR"|"IMAGE"} type Type of background
   * @param {string|Buffer|Canvas.Image} data Image URL or HTML color code
   * @returns {Spotify} The current instance of Spotify
   * @throws {APIError} Missing background data
   */
  setBackground(type = "COLOR", data = "#2F3136") {
    switch (type) {
      case "COLOR":
        this.background.type = 0;
        this.background.data = data && typeof data === "string" ? data : "#2F3136";
        break;
      case "IMAGE":
        if (!data) throw new APIError("Background data is missing!");
        this.background.type = 1;
        this.background.data = data;
        break;
      default:
        throw new APIError(`Invalid fund type "${type}"!`);
    }
    return this;
  }

  /**
   * @method build
   * @name build
   * @description Build the Spotify presence card
   * @param {string} [font="Arial"] Font to use in the card
   * @returns {Promise<Buffer>} Card image in buffer format
   * @throws {APIError} Missing of options
   */
  async build(font = "Arial") {
    if (!this.title) throw new APIError('"Title" is missing from the options.');
    if (!this.artist) throw new APIError('"Artist" is missing from the options.');
    if (!this.start) throw new APIError('"Start" is missing from the options.');
    if (!this.end) throw new APIError('"Final" is missing from the options.');

    const total = this.end - this.start;
    const progress = Date.now() - this.start;
    const progressF = formatTime(progress > total ? total : progress);
    const ending = formatTime(total);

    const canvas = createCanvas(this.width, this.height);
    const ctx = canvas.getContext("2d");

    // Crop the image with rounded edges
    ctx.roundRect(0, 0, this.width, this.height, [34]);
    ctx.clip();

    // Draw the background
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

    // Save the context to clip the image
    ctx.save();

    // Crop the image with rounded edges
    const size = 240;
    const x = 30;
    const y = 30;
    ctx.beginPath();
    ctx.roundRect(x, y, size, size, [34]);
    ctx.clip();
    const img = await loadImage(this.image);
    ctx.drawImage(img, x, y, size, size);
    ctx.closePath();

    // Restore the context to draw the text
    ctx.restore();

    const sizeX = x + 280;
    const sizeY = y + 80;

    // Draw the title of the song
    ctx.fillStyle = "#FFFFFF";
    ctx.font = `bold 50px ${font}`;
    ctx.fillText(shorten(this.title, 30), sizeX, sizeY);

    // Draw the name of the album
    if (this.album && typeof this.album === "string") {
      ctx.fillStyle = "#F1F1F1";
      ctx.font = `32px ${font}`;
      ctx.fillText(shorten(this.album, 40), sizeX, sizeY + 40);
    }


    // Draw the name of the artist
    ctx.fillStyle = "#F1F1F1";
    ctx.font = `24px ${font}`;
    ctx.fillText(shorten(this.artist, 40), sizeX, sizeY + 70);

    // Draw the progress bar and the progress text
    const progressBarWidth = 400;
    const progressBarHeight = 8;
    const radius = 4; // The radius of the rounded edges (half the height to make it completely round)

    // Draw time ending
    ctx.fillStyle = "#B3B3B3";
    ctx.font = `14px ${font}`;
    ctx.fillText(ending, sizeX + 360, sizeY + 120 + progressBarHeight);

    // Draw time progress
    ctx.fillStyle = "#B3B3B3";
    ctx.font = `14px ${font}`;
    ctx.fillText(progressF, sizeX, sizeY + 120 + progressBarHeight);

    // Progress bar track (background)
    ctx.beginPath();
    ctx.roundRect(sizeX, sizeY + 100, progressBarWidth, progressBarHeight, [radius]);
    ctx.fillStyle = "#E8E8E8";
    ctx.fill();
    ctx.closePath();

    // Progress bar (the green part)
    const progressWidth = this.__calculateProgress(progress, total);

    ctx.beginPath();
    ctx.roundRect(sizeX, sizeY + 100, progressWidth, progressBarHeight, [radius]);
    ctx.fillStyle = "#1DB954";
    ctx.fill();
    ctx.closePath();


    return canvas.toBuffer("image/png");
  }

  /**
   * Returns progress
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