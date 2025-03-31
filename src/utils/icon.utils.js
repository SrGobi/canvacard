const APIError = require('./error.utils');
const { getFromCache, setInCache } = require('./cache.utils');

/**
 * @name getIconPath
 * @description Function to get the URL of a badge icon. If the icon is a relative path, it is transformed into an absolute URL pointing to the GitHub repository.
 * @param {string} iconUrl Icon name or icon URL.
 * @returns {string} Absolute URL of the icon.
 * @throws {APIError} If there is a problem building the icon URL.
 */
function getIconPath(iconUrl) {
  const cacheKey = `iconPath:${iconUrl}`;
  const cachedUrl = getFromCache(cacheKey);
  
  if (cachedUrl) {
		return cachedUrl; // Returns the cached URL if it exists and is not expired
  }
  
  try {
    let fullUrl;
    // Checks if the URL is absolute, if not, converts the path to a valid remote URL.
    if (!iconUrl.startsWith('http')) {
			// Returns the full URL setting the base path to the GitHub repository.
			fullUrl = `https://raw.githubusercontent.com/SrGobi/canvacard/assets/images/flags/icons/${iconUrl}`;
		} else {
			fullUrl = iconUrl;
		}
    setInCache(cacheKey, fullUrl); // Caches the URL for future use
		return fullUrl; // Returns the full URL of the icon
  } catch (error) {
    throw new APIError(`Error constructing icon URL: ${error.message}`);
  }
}

module.exports = getIconPath;