export = abbreviateNumber;
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
declare function abbreviateNumber(number: any): string;
//# sourceMappingURL=abbreviate.utils.d.ts.map