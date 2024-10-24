export = abbreviateNumber;
/**
 * The abbreviation follows the format seen in many games:
 * K - thousands
 * M - millions
 * B - billons
 * T - trillons
 *
 * All numbers greater than billions follow the following format, using each letter of the alphabet paired with itself:
 * AA
 * BB
 * ...
 * ZZ
 *
 * It supports all numbers up to almost a googol (100 zeros) and supports up to 92 zeros or 93 digits.
 */
declare function abbreviateNumber(number: any): string;
//# sourceMappingURL=abbreviate.utils.d.ts.map