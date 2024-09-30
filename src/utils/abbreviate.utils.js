/**
 * This methods takes a large number like "9360" and converts it to a small decimal like "9.3".
 * Used by `abbreviateNumber()` to form abbreviations like "9.3K".
 *
 * At the moment, this method intentionally avoids number rounding, for simplicity.
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