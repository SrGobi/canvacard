const fs = require('fs');
const path = require('path');
const APIError = require('./error');

// Cargar las flags desde los archivos JSON
const userFlags = JSON.parse(fs.readFileSync(path.join(__dirname, '../../assets/flags/user.json')));
const applicationFlags = JSON.parse(fs.readFileSync(path.join(__dirname, '../../assets/flags/application.json')));

/**
 * Función para verificar flags y obtener las insignias
 * @param {Object} flags
 * @param {BigInt | string} flagNumber
 * @returns {Array<string>}
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

module.exports = {
  userFlags,
  applicationFlags,
  checkFlags,
};