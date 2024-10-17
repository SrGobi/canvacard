/**
 * Este método toma un número grande como "9360" y lo convierte en un decimal pequeño como "9.3".
 * Utilizado por `abbreviateNumber()` para formar abreviaturas como "9.3K".
 *
 * Por el momento, este método evita intencionalmente el redondeo de números para simplificar.
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
 * La abreviatura sigue el formato que se ve en muchos juegos:
 * K - miles
 * M - millones
 * B - billones
 * T - trillones
 *
 * Todos los números mayores que billones siguen el siguiente formato, utilizando cada letra del alfabeto emparejada consigo misma:
 * AA
 * BB
 * ...
 * ZZ
 *
 * Admite todos los números hasta casi un googol (100 ceros) y admite hasta 92 ceros o 93 dígitos.
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