/**
 * Gets a formatted date string or returns the input as is.
 * 
 * @param {string | Date} dateInput - The date to format. Can be a date string (ISO 8601) or a Date object.
 * @param {number} createdTimestamp - A fallback timestamp to use if dateInput is undefined or null.
 * @param {string} [localDateType='en'] - The locale for the date formatting (default is English).
 * @returns {string} - The formatted date string or the original input.
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