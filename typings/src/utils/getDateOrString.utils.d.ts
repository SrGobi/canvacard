export = getDateOrString;
/**
 * Obtiene una cadena de fecha formateada o devuelve la entrada tal como está.
 * @param {string | Date} dateInput - La fecha que se va a formatear. Puede ser una cadena de fecha (ISO 8601) or a Date object.
 * @param {number} createdTimestamp - Una marca de tiempo de respaldo para usar si dateInput no está definido o es nulo.
 * @param {string} [localDateType='en'] - La configuración regional para el formato de fecha (el valor predeterminado es inglés).
 * @returns {string} - La cadena de fecha formateada o la entrada original.
 */
declare function getDateOrString(dateInput: string | Date, createdTimestamp: number, localDateType?: string): string;
//# sourceMappingURL=getDateOrString.utils.d.ts.map