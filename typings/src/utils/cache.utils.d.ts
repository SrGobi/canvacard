/**
 * @name getFromCache
 * @description Retrieves a value from the cache if it exists and is not expired.
 * @param {string} key - The cache key.
 * @returns {any|null} - The cached value or null if not found/expired.
 */
export function getFromCache(key: string): any | null;
/**
 * @name setInCache
 * @description Stores a value in the cache with an optional expiration time.
 * @param {string} key - The cache key.
 * @param {any} value - The value to cache.
 * @param {number} ttl - Time to live in milliseconds (default: 5 minutes).
 */
export function setInCache(key: string, value: any, ttl?: number): void;
//# sourceMappingURL=cache.utils.d.ts.map