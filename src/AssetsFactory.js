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
  AFFECT: prepareURL("AFFECT.png"),
  BATSLAP: prepareURL("BATSLAP.png"),
  BEAUTIFUL: prepareURL("BEAUTIFUL.png"),
  BED: prepareURL("BED.png"),
  BOTBADGE: prepareURL("BOTBADGE.png"),
  CAPTCHA: prepareURL("CAPTCHA.png"),
  CHANGEMYMIND: prepareURL("CHANGEMYMIND.png"),
  CLYDE: prepareURL("CLYDE.png"),
  DELETE: prepareURL("DELETE.png"),
  DISCORD: prepareURL("DISCORD.png"),
  DISTRACTED: prepareURL("DISTRACTED.png"),
  DND: prepareURL("DND.png"),
  FACEPALM: prepareURL("FACEPALM.png"),
  RAINBOW: prepareURL("RAINBOW.png"),
  HITLER: prepareURL("HITLER.png"),
  IDLE: prepareURL("IDLE.png"),
  IMPOSTER: prepareURL("IMPOSTER.png"),
  IMPOSTERWITH: prepareURL("IMPOSTERWITH.png"),
  JAIL: prepareURL("JAIL.png"),
  JOKEOVERHEAD: prepareURL("JOKEOVERHEAD.png"),
  KICK: prepareURL("KICK.png"),
  KISS: prepareURL("KISS.png"),
  KO: prepareURL("KO.png"),
  OFFLINE: prepareURL("OFFLINE.png"),
  OHNO: prepareURL("OHNO.png"),
  ONLINE: prepareURL("ONLINE.png"),
  OPINION: prepareURL("OPINION.png"),
  PHUB: prepareURL("PHUB.png"),
  PUNCH: prepareURL("PUNCH.png"),
  RIP: prepareURL("RIP.png"),
  SHIT: prepareURL("SHIT.png"),
  SNOWFLAKE: prepareURL("SNOWFLAKE.png"),
  SPANK: prepareURL("SPANK.png"),
  TOBECONTINUED: prepareURL("TOBECONTINUED.png"),
  TRASH: prepareURL("TRASH.png"),
  TRIGGERED: prepareURL("TRIGGERED.png"),
  WANTED: prepareURL("WANTED.png"),
  WASTED: prepareURL("WASTED.png"),
  WELCOMEBG: prepareURL("WELCOMEBG.png"),
  YOUTUBE: prepareURL("YOUTUBE.png"),
};
// Exportar con CommonJS
module.exports = { ImageFactory };