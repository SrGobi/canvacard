export = Util;
declare class Util {
    /**
     * Valida hexadecimal
     * @param {string} hex Código hexadecimal para validar
     * @returns {boolean}
     */
    static validateHex(hex: string): boolean;
    /**
     * Convierte la marca de tiempo regular en discord como el tiempo
     * @param {Date|number} time Marca de tiempo para convertir
     * @returns {string}
     */
    static discordTime(time?: Date | number): string;
    /**
     * Formatea el tiempo
     * @param {number} time Hora de formatear
     * @returns {string}
     */
    static formatTime(time: number): string;
    /**
     * Acortar el texto.
     * @param {string} text Texto para acortar
     * @param {number} len Longitud máxima
     * @returns {string}
     */
    static shorten(text: string, len: number): string;
    /**
     * Convierte números en unidades como `1K`, `1M`, `1B` etc.
     * @param {number|string} num
     * @returns {string}
     * @returns {string}
     */
    static toAbbrev(num: number | string): string;
    /**
     * Renderiza texto con emoji
     * @param {CanvasRenderingContext2D} ctx CanvasRenderingContext2D
     * @param {string} msg Mensaje
     * @param {number} x X
     * @param {number} y Y
     * @returns {Promise<void>}
     */
    static renderEmoji(ctx: CanvasRenderingContext2D, msg: string, x: number, y: number): Promise<void>;
    /**
     * Devuelve código hexadecimal con formato
     * @param {string} hex Código hexadecimal para formatear
     * @param {string} alt Alt color
     * @returns {string}
     */
    static formatHex(hex: string, alt?: string): string;
    /**
     * Invierte el color hexadecimal
     * @param {string} hex Código de color hexadecimal para invertir
     * @returns {string}
     */
    static invertColor(hex: string): string;
    /**
     * Devuelve el acrónimo
     * @param {string} name Nombre para analizar el acrónimo
     * @returns {string}
     */
    static getAcronym(name: string): string;
    /**
     * Devuelve una matriz de líneas
     * @param {object} params Parámetros
     * @param {string} text Texto
     * @param {CanvasRenderingContext2D} ctx CanvasRenderingContext2D
     * @param {number} maxWidth Anchura máxima
     * @returns {string[]}
     */
    static getLines({ text, ctx, maxWidth }: object): string[];
}
//# sourceMappingURL=Util.d.ts.map