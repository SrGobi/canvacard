export = Util;
declare class Util {
    /**
     * Valida el código hexadecimal.
     * @param {string} hex Código hexadecimal para validar
     * @returns {boolean} Retorna verdadero si es válido
     */
    static validateHex(hex: string): boolean;
    /**
     * Convierte la marca de tiempo regular en una hora similar a la de Discord.
     * @param {Date|number} time Marca de tiempo para convertir
     * @returns {string} Cadena de tiempo similar a Discord
     */
    static discordTime(time?: Date | number): string;
    /**
     * Formatea la marca de tiempo en una cadena de fecha.
     * @param {number} time Marca de tiempo para convertir
     * @returns {string} Cadena de fecha formateada
     */
    static formatTime(time: number): string;
    /**
     * Acorta el texto a una longitud específica y agrega puntos suspensivos si es necesario.
     * @param {string} text Texto a acortar
     * @param {number} len Longitud máxima del texto antes de acortarlo
     * @returns {string} Texto original o acortado
     */
    static shorten(text: string, len: number): string;
    /**
     * Convierte números en unidades como `1K`, `1M`, `1B`, etc.
     * @param {number|string} num Número para abreviar
     * @returns {string} Número abreviado
     */
    static toAbbrev(num: number | string): string;
    /**
     * Código hexadecimal formateado
     * @param {string} hex Código hexadecimal para formatear
     * @param {string} alt Color alternativo
     * @returns {string} Código hexadecimal formateado
     */
    static formatHex(hex: string, alt?: string): string;
    /**
     * Invierte el color hexadecimal
     * @param {string} hex Código de color hexadecimal para invertir
     * @returns {string} Código de color hexadecimal invertido
     */
    static invertColor(hex: string): string;
    /**
     * Parsea el acrónimo
     * @param {string} name Nombre para analizar el acrónimo
     * @returns {string} Acrónimo
     */
    static getAcronym(name: string): string;
    /**
     * Devuelve una matriz de líneas
     * @param {object} params Parametros
     * @param {string} text Texto
     * @param {CanvasRenderingContext2D} ctx CanvasRenderingContext2D
     * @param {number} maxWidth Ancho máximo de la linea
     * @returns {string[]} Array de lineas
     */
    static getLines({ text, ctx, maxWidth }: object): string[];
    /**
   * Obtiene variables y tipos.
   * @param {object} prefix El tipo de variable
   * @param {object} variable La variable a cambiar
   * @returns La variable formateada
   */
    static formatVariable(prefix: object, variable: object): any;
}
//# sourceMappingURL=Util.d.ts.map