export = Spotify;
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
declare class Spotify {
    /**
     * Title of the song
     * @property {string}
     * @private
     */
    private title;
    /**
     * Image of the song
     * @property {string|Buffer|Canvas.Image}
     * @private
     */
    private image;
    /**
     * Name of the artist
     * @property {string}
     * @private
     */
    private artist;
    /**
     * Name of the album
     * @property {string}
     * @private
     */
    private album;
    /**
     * Start timestamp
     * @property {number}
     * @private
     */
    private start;
    /**
     * End timestamp
     * @property {number}
     * @private
     */
    private end;
    /**
     * Background of the card
     * @property {object} background Background
     * @property {number} background.type Type of background
     * @property {string|Buffer} background.data Background data
     * @private
     */
    private background;
    /**
     * Progress bar details
     * @property {object} progressBar Progress bar details
     * @property {string} progressBar.bgColor Progress bar bg color
     * @property {string} progressBar.color Progress bar color
     * @private
     */
    private progressBar;
    /**
     * Width of the card
     * @property {number}
     * @default 775
     * @private
     */
    private width;
    /**
     * Height of the card
     * @property {number}
     * @default 300
     * @private
     */
    private height;
    /**
     * @method setProgressBar
     * @name setProgressBar
     * @description Set progress bar details
     * @param {"TRACK"|"BAR"} type Type of progress bar
     * @param {string} color Color of the progress bar
     * @returns {Spotify} The current instance of Spotify
     * @throws {APIError} Invalid progress bar type
     */
    setProgressBar(type: "TRACK" | "BAR", color: string): Spotify;
    /**
     * @method setTitle
     * @name setTitle
     * @description Set title
     * @param {string} title Title of the song
     * @returns {Spotify} The current instance of Spotify
     * @throws {APIError} Title expected but not received
     */
    setTitle(title: string): Spotify;
    /**
     * @method setImage
     * @name setImage
     * @description Establecer imagen
     * @param {string|Buffer|Canvas.Image} source Fuente de imagen
     * @returns {Spotify} The current instance of Spotify
     * @throws {APIError} Image source expected but not received
     */
    setImage(source: string | Buffer | Canvas.Image): Spotify;
    /**
     * @method setAuthor
     * @name setAuthor
     * @description Set the name of the artist
     * @param {string} name Name of the artist
     * @returns {Spotify} The current instance of Spotify
     * @throws {APIError} Artist name expected but not received
     */
    setAuthor(name: string): Spotify;
    /**
     * @method setAlbum
     * @name setAlbum
     * @description Set the name of the album
     * @param {string} name Name of the album
     * @returns {Spotify} The current instance of Spotify
     * @throws {APIError} Album name expected but not received
     */
    setAlbum(name: string): Spotify;
    /**
     * @method setStartTimestamp
     * @name setStartTimestamp
     * @description Set start timestamp
     * @param {Date|number} time Timestamp
     * @returns {Spotify} The current instance of Spotify
     * @throws {APIError} Timestamp expected but not received
     */
    setStartTimestamp(time: Date | number): Spotify;
    /**
     * @method setEndTimestamp
     * @name setEndTimestamp
     * @description Set end timestamp
     * @param {Date|number} time Timestamp
     * @returns {Spotify} The current instance of Spotify
     * @throws {APIError} Timestamp expected but not received
     */
    setEndTimestamp(time: Date | number): Spotify;
    /**
     * @method setBackground
     * @name setBackground
     * @description Set background image/color of the card
     * @param {"COLOR"|"IMAGE"} type Type of background
     * @param {string|Buffer|Canvas.Image} data Image URL or HTML color code
     * @returns {Spotify} The current instance of Spotify
     * @throws {APIError} Missing background data
     */
    setBackground(type?: "COLOR" | "IMAGE", data?: string | Buffer | Canvas.Image): Spotify;
    /**
     * @method build
     * @name build
     * @description Build the Spotify presence card
     * @param {string} [font="Arial"] Font to use in the card
     * @returns {Promise<Buffer>} Card image in buffer format
     * @throws {APIError} Missing of options
     */
    build(font?: string): Promise<Buffer>;
    /**
     * Returns progress
     * @type {number}
     * @private
     * @ignore
     */
    private __calculateProgress;
}
//# sourceMappingURL=Spotify.d.ts.map