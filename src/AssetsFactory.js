const BASE_URL =
  process.env.CANVACORD_ASSETS_BASE_URL ||
  "https://raw.githubusercontent.com/SrGobi/canvacard/assets/images";

/**
 * Prepara la URL completa para una imagen.
 * @param {string} path - El nombre de la imagen.
 * @returns {string} - URL completa de la imagen.
 */
const prepareURL = (path) => `${BASE_URL}/${path}`;

/**
 * ImageFactory: Proporciona las URLs de las imágenes que se pueden usar en Canvacard.
 */
const ImageFactory = {
  BATSLAP: prepareURL("BATSLAP.png"),
  BED: prepareURL("BED.png"),
  CAPTCHA: prepareURL("CAPTCHA.png"),
  CLYDE: prepareURL("CLYDE.png"),
  DELETE: prepareURL("DELETE.png"),
  DISCORD: prepareURL("DISCORD.png"),
  DISTRACTED: prepareURL("DISTRACTED.png"),
  FACEPALM: prepareURL("FACEPALM.png"),
  IMPOSTER: prepareURL("IMPOSTER.png"),
  IMPOSTERWITH: prepareURL("IMPOSTERWITH.png"),
  JAIL: prepareURL("JAIL.png"),
  KISS: prepareURL("KISS.png"),
  KO: prepareURL("KO.png"),
  PHUB: prepareURL("PHUB.png"),
  PUNCH: prepareURL("PUNCH.png"),
  SNOWFLAKE: prepareURL("SNOWFLAKE.png"),
  SPANK: prepareURL("SPANK.png"),
  TOBECONTINUED: prepareURL("TOBECONTINUED.png"),
  TRIGGERED: prepareURL("TRIGGERED.png"),
  WANTED: prepareURL("WANTED.png"),
  WASTED: prepareURL("WASTED.png"),
  YOUTUBE: prepareURL("YOUTUBE.png"),
};
// Exportar con CommonJS
module.exports = { ImageFactory };