export function parseUsername(username: any, ctx: any, font: any, size: any, maxLength: any): {
    username: string;
    newSize: number;
    textLength: any;
};
/**
 * Abbreviation follows format seen in many games:
 * K - thousands
 * M - millions
 * B - billions
 * T - trillions
 *
 * All larger numbers beyond trillions follow the following format, using every letter of the alphabet paired with itself:
 * AA
 * BB
 * ...
 * ZZ
 *
 * This supports all numbers nearly up to a googol (100 zeroes), supporting up to 92 zeroes or 93 digits.
 */
export function abbreviateNumber(number: any): string;
export function getDateOrString(dateInput: any, createdTimestamp: any, localDateType?: string): string;
export function truncateText(text: any, limit?: number, fromEnd?: boolean): any;
//# sourceMappingURL=strings.utils.d.ts.map