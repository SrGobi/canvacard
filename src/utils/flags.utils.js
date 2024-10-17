const APIError = require('./error.utils');

/**
 * Función para verificar flags y obtener las insignias.
 * @param {Object} flags Insignias
 * @param {BigInt | string} flagNumber Número de insignias
 * @returns {Array<string>} Insignias
 */
function checkFlags(flags, flagNumber) {
  let results = [];
  try {
    const flagNumberBigInt = typeof flagNumber === 'bigint' ? flagNumber : BigInt(flagNumber);
    for (let i = 0; i <= 64; i++) {
      const bitwise = 1n << BigInt(i);
      if ((flagNumberBigInt & bitwise) === bitwise) {
        const flag = Object.entries(flags).find((f) => f[1].shift === i)?.[0] || `UNKNOWN_FLAG_${i}`;
        results.push(flag);
      }
    }
  } catch (error) {
    throw new APIError(`Error checking flags: ${error.message}`);
  }

  return results;
}

module.exports = checkFlags;