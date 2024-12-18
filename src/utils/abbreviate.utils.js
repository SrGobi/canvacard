/**
 * @name getFirstDigitsAsDecimal
 * @description This method takes a large number like "9360" and converts it to a small decimal like "9.3". Used by `abbreviateNumber()` to form abbreviations such as "9.3K". For the moment, this method intentionally avoids rounding numbers for simplicity.
 */
function getFirstDigitsAsDecimal(numString) {
  const digits = ((numString.length - 1) % 3) + 1;
  if (numString.length < 4) {
    return numString;
  }

  const decimal = numString.slice(digits, digits + 1);
  return `${numString.slice(0, digits)}${decimal == '0' || decimal == '00' || digits == 3
      ? ''
      : `.${decimal.replace(/0$/g, '')}`
    }`;
}

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
function abbreviateNumber(number) {
  const numString = `${number}`;
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const abbreviations = ['', 'K', 'M', 'B', 'T'].concat(
    new Array(letters.length).fill('AA').map((_, i) => letters[i].repeat(2))
  );

  const selectedAbbr =
    abbreviations[Math.floor((numString.length - 1) / 3)] ?? '??';
  return `${getFirstDigitsAsDecimal(numString)}${selectedAbbr}`;
}

module.exports = abbreviateNumber;