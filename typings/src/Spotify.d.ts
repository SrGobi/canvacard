export = Spotify;
/**
 * Creador de tarjetas de presencia de Spotify
 */
declare class Spotify {
    /**
     * Título de la canción
     * @type {string}
     */
    title: string;
    /**
     * Thumbnail
     * @type {string|Buffer|Canvas.Image}
     */
    image: string | Buffer | Canvas.Image;
    /**
     * Artista de la canción
     * @type {string}
     */
    artist: string;
    /**
     * Nombre del álbum de Spotify
     * @type {string}
     */
    album: string;
    /**
     * Marca de tiempo de inicio de presencia de discord
     * @type {number}
     */
    start: number;
    /**
     * Marca de tiempo de finalización de presencia de discord
     * @type {number}
     */
    end: number;
    /**
     * @typedef {object} SpotifyDataBG
     * @property {number} type Tipo de fondo
     * @property {string|Buffer} data Datos de fondo
     */
    /**
     * Fondo
     * @type {SpotifyDataBG}
     */
    background: {
        /**
         * Tipo de fondo
         */
        type: number;
        /**
         * Datos de fondo
         */
        data: string | Buffer;
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
    progressBar: {
        /**
         * Barra de progreso bg color
         */
        bgColor: string;
        /**
         * Barra de progreso bg color
         */
        color: string;
    };
    /**
     * Establecer detalles de la barra de progreso
     * @param {"TRACK"|"BAR"} type Tipo de barra de progreso
     * @param {string} color Color para establecer
     * @returns {Spotify}
     */
    setProgressBar(type: "TRACK" | "BAR", color: string): Spotify;
    /**
     * Establecer título
     * @param {string} title Título para establecer
     * @returns {Spotify}
     */
    setTitle(title: string): Spotify;
    /**
     * Establecer imagen
     * @param {string|Buffer|Canvas.Image} source Fuente de imagen
     * @returns {Spotify}
     */
    setImage(source: string | Buffer | Canvas.Image): Spotify;
    /**
     * Establecer nombre de artista
     * @param {string} name Nombre del artista
     * @returns {Spotify}
     */
    setAuthor(name: string): Spotify;
    /**
     * Establecer el nombre del álbum
     * @param {string} name Nombre del álbum
     * @returns {Spotify}
     */
    setAlbum(name: string): Spotify;
    /**
     * Establecer marca de tiempo de inicio
     * @param {Date|number} time Marca de tiempo
     * @returns {Spotify}
     */
    setStartTimestamp(time: Date | number): Spotify;
    /**
     * Establecer marca de tiempo de finalización
     * @param {Date|number} time Marca de tiempo
     * @returns {Spotify}
     */
    setEndTimestamp(time: Date | number): Spotify;
    /**
     * Definir fondo
     * @param {"COLOR"|"IMAGE"} type Tipo de fondo
     * @param {string|Buffer|Canvas.Image} data Datos de fondo
     * @returns {Spotify}
     */
    setBackground(type?: "COLOR" | "IMAGE", data?: string | Buffer | Canvas.Image): Spotify;
    /**
     * Esta función convierte los datos sin procesar en una tarjeta de presencia de Spotify.
     * @param {object} ops Fuentes
     * @param {string} [ops.fontX="Manrope"] Familia tipográfica Bold
     * @param {string} [ops.fontY="Manrope"] Familia tipográfica regular
     * @returns {Promise<Buffer>}
     */
    build(ops?: {
        fontX?: string;
        fontY?: string;
    }): Promise<Buffer>;
    /**
     * Progreso de devoluciones
     * @type {number}
     * @private
     * @ignore
     */
    private __calculateProgress;
}
//# sourceMappingURL=Spotify.d.ts.map