const cache = new Map();

/**
 * @name getFromCache
 * @description Retrieves a value from the cache if it exists and is not expired.
 * @param {string} key - The cache key.
 * @returns {any|null} - The cached value or null if not found/expired.
 */
function getFromCache(key) {
	const entry = cache.get(key);
	if (entry && entry.expiration > Date.now()) {
		return entry.value;
	}
	cache.delete(key); // Remove expired entry
	return null;
}

/**
 * @name setInCache
 * @description Stores a value in the cache with an optional expiration time.
 * @param {string} key - The cache key.
 * @param {any} value - The value to cache.
 * @param {number} ttl - Time to live in milliseconds (default: 5 minutes).
 */
function setInCache(key, value, ttl = 300000) {
	cache.set(key, { value, expiration: Date.now() + ttl });
}

module.exports = { getFromCache, setInCache };