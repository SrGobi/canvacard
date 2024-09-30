export = getDateOrString;
/**
 * Gets a formatted date string or returns the input as is.
 *
 * @param {string | Date} dateInput - The date to format. Can be a date string (ISO 8601) or a Date object.
 * @param {number} createdTimestamp - A fallback timestamp to use if dateInput is undefined or null.
 * @param {string} [localDateType='en'] - The locale for the date formatting (default is English).
 * @returns {string} - The formatted date string or the original input.
 */
declare function getDateOrString(dateInput: string | Date, createdTimestamp: number, localDateType?: string): string;
//# sourceMappingURL=getDateOrString.utils.d.ts.map