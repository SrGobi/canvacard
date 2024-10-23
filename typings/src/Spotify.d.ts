export = Spotify;
/**
 * @kind class
 * Creador de tarjetas de presencia de Spotify
 */
declare class Spotify {
    /**
     * Título de la canción
     * @property {string}
     * @private
     */
    private title;
    /**
     * Thumbnail
     * @property {string|Buffer|Canvas.Image}
     * @private
     */
    private image;
    /**
     * Artista de la canción
     * @property {string}
     * @private
     */
    private artist;
    /**
     * Nombre del álbum de Spotify
     * @property {string}
     * @private
     */
    private album;
    /**
     * Marca de tiempo de inicio de presencia de discord
     * @property {number}
     * @private
     */
    private start;
    /**
     * Marca de tiempo de finalización de presencia de discord
     * @property {number}
     * @private
     */
    private end;
    /**
     * Fondo de la tarjeta
     * @property {object} background Fondo
     * @property {number} background.type Tipo de fondo
     * @property {string|Buffer} background.data Datos de fondo
     * @private
     */
    private background;
    /**
     * Detalles de la barra de progreso
     * @property {object} progressBar Detalles de la barra de progreso
     * @property {string} progressBar.bgColor Barra de progreso bg color
     * @property {string} progressBar.color Barra de progreso bg color
     * @private
     */
    private progressBar;
    /**
     * Ancho de la tarjeta
     * @property {number}
     * @default 775
     * @private
     */
    private width;
    /**
     * Altura de la tarjeta
     * @property {number}
     * @default 300
     * @private
     */
    private height;
    /**
     * @method setProgressBar
     * @name setProgressBar
     * @description Establecer detalles de la barra de progreso
     * @param {"TRACK"|"BAR"} type Tipo de barra de progreso
     * @param {string} color Color para establecer
     * @returns {Spotify} La instancia actual de Spotify
     * @throws {APIError} Tipo de barra de progreso no válido
     */
    setProgressBar(type: "TRACK" | "BAR", color: string): Spotify;
    /**
     * @method setTitle
     * @name setTitle
     * @description Establecer título
     * @param {string} title Título para establecer
     * @returns {Spotify} La instancia actual de Spotify
     * @throws {APIError} Título esperado pero no recibido
     */
    setTitle(title: string): Spotify;
    /**
     * @method setImage
     * @name setImage
     * @description Establecer imagen
     * @param {string|Buffer|Canvas.Image} source Fuente de imagen
     * @returns {Spotify} La instancia actual de Spotify
     * @throws {APIError} Fuente de imagen esperada pero no recibida
     */
    setImage(source: string | Buffer | Canvas.Image): Spotify;
    /**
     * @method setAuthor
     * @name setAuthor
     * @description Establecer nombre de artista
     * @param {string} name Nombre del artista
     * @returns {Spotify} La instancia actual de Spotify
     * @throws {APIError} Nombre esperado del artista pero no recibido
     */
    setAuthor(name: string): Spotify;
    /**
     * @method setAlbum
     * @name setAlbum
     * @description Establecer el nombre del álbum
     * @param {string} name Nombre del álbum
     * @returns {Spotify} La instancia actual de Spotify
     * @throws {APIError} Nombre del álbum esperado pero no recibido
     */
    setAlbum(name: string): Spotify;
    /**
     * @method setStartTimestamp
     * @name setStartTimestamp
     * @description Establecer marca de tiempo de inicio
     * @param {Date|number} time Marca de tiempo
     * @returns {Spotify} La instancia actual de Spotify
     * @throws {APIError} Marca de tiempo esperada pero no recibida
     */
    setStartTimestamp(time: Date | number): Spotify;
    /**
     * @method setEndTimestamp
     * @name setEndTimestamp
     * @description Establecer marca de tiempo de finalización
     * @param {Date|number} time Marca de tiempo
     * @returns {Spotify} La instancia actual de Spotify
     * @throws {APIError} Marca de tiempo esperada pero no recibida
     */
    setEndTimestamp(time: Date | number): Spotify;
    /**
     * @method setBackground
     * @name setBackground
     * @description Establecer fondo de la tarjeta
     * @param {"COLOR"|"IMAGE"} type Tipo de fondo
     * @param {string|Buffer|Canvas.Image} data Datos de fondo
     * @returns {Spotify} La instancia actual de Spotify
     * @throws {APIError} Tipo de fondo no válido
     */
    setBackground(type?: "COLOR" | "IMAGE", data?: string | Buffer | Canvas.Image): Spotify;
    /**
     * @method build
     * @name build
     * @description Construye la tarjeta de presencia de Spotify.
     * @param {string} [font="Arial"] Fuente de texto para la tarjeta
     * @returns {Promise<Buffer>} Imagen de la tarjeta de presencia de Spotify en formato de buffer
     * @throws {APIError} Faltan opciones
     */
    build(font?: string): Promise<Buffer>;
    /**
     * Progreso de devoluciones
     * @type {number}
     * @private
     * @ignore
     */
    private __calculateProgress;
}
//# sourceMappingURL=Spotify.d.ts.map