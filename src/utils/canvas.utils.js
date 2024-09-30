const { createCanvas, loadImage } = require('@napi-rs/canvas');
const APIError = require('./error');

/**
 * Crea un canvas.
 * @param {number} width
 * @param {number} height
 * @returns {Canvas}
 */
function createCanvasInstance(width, height) {
  return createCanvas(width, height);
}

/**
 * Carga una imagen y maneja errores.
 * @param {string} imagePath
 * @returns {Promise<Image>}
 */
async function loadImageSafely(imagePath) {
  try {
    return await loadImage(imagePath);
  } catch (error) {
    throw new APIError(`Could not load image from path: ${imagePath}, ${error.message}`);
  }
}

module.exports = {
  createCanvasInstance,
  loadImageSafely,
};