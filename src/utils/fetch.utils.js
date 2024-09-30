const APIError = require("./error");
const BASE_URL = "https://japi.rest/discord/v1/user";
const fetch = require("node-fetch").default;
const { FetchError } = require("node-fetch");

/**
 * Utilidad para obtener datos de usuario de la API
 * @param {string} userId 
 * @returns Devuelve los datos del usuario
 */
async function fetchUserData(userId) {
  try {
    const response = await fetch(`${BASE_URL}/${userId}`);

    const contentType = response.headers.get("content-type");
    if (!contentType?.includes("application/json")) {
      if (contentType?.includes("text/html")) {
        throw new APIError(
          "API is currently down, try again later"
        );
      } else {
        throw new APIError(
          "Invalid response format. Expected JSON, but received: " +
          contentType,
        );
      }
    }

    const json = await response.json();
    if (json.error || !response.ok) {
      throw new APIError(json?.message);
    }
    return json.data;
  } catch (error) {
    if (error instanceof FetchError) {
      throw new APIError(
        "API is currently down, try again later"
      );
    } else {
      throw new APIError(
        error?.message || "API is currently down, try again later"
      );
    }
  }
}

module.exports = fetchUserData;
