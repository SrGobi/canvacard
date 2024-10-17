/**
 * Obtiene una cadena de fecha formateada o devuelve la entrada tal como está.
 * @param {string | Date} dateInput - La fecha que se va a formatear. Puede ser una cadena de fecha (ISO 8601) or a Date object.
 * @param {number} createdTimestamp - Una marca de tiempo de respaldo para usar si dateInput no está definido o es nulo.
 * @param {string} [localDateType='en'] - La configuración regional para el formato de fecha (el valor predeterminado es inglés).
 * @returns {string} - La cadena de fecha formateada o la entrada original.
 */
const getDateOrString = (dateInput, createdTimestamp, localDateType = 'en') => {
  const dateOptions = {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  };

  const iso8601Regex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3})?Z$/;

  if (typeof dateInput === 'string') {
    if (iso8601Regex.test(dateInput)) {
      const dateInstance = new Date(dateInput);
      return dateInstance.toLocaleDateString(localDateType, dateOptions);
    } else {
      return dateInput;
    }
  } else if (dateInput instanceof Date) {
    return dateInput.toLocaleDateString(localDateType, dateOptions);
  } else if (dateInput === undefined || dateInput === null) {
    return new Date(+createdTimestamp).toLocaleDateString(localDateType, dateOptions);
  }
};

module.exports = getDateOrString;