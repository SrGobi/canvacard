// Creado y mantenido por SrGobi

const Canvacard = require("./src/Canvacard");

// Cargar fuentes predeterminadas
try {
  setTimeout(() => {
    Canvacard.registerFonts();
  });
} catch (e) { }

/**
 * @param {stirng} moduleName Nombre del módulo
 */
function load(moduleName) {
  try {
    return require(moduleName);
  } catch (e) {
    return null;
  }
}

module.exports = {
  Canvas: Canvacard,
  Canvacard,
  ConvolutionMatrix: Canvacard.CONVOLUTION_MATRIX,
  Rank: require("./src/Rank"),
  Spotify: require("./src/Spotify"),
  Welcomer: require("./src/Welcomer"),
  Leaver: require("./src/Leaver"),
  CaptchaGen: load("captcha-canvas") ? load("captcha-canvas").CaptchaGenerator : null,
  FortniteShop: require("./src/FortniteShop"),
  FortniteStats: require("./src/FortniteStats"),
  Plugins: require("./src/Plugins"),
  Util: require("./src/Util"),
  Assets: require("@canvacard/assets"),
  MSX: {
    Brightness: require("./libs/Brightness"),
    Convolute: require("./libs/Convolute"),
    Darkness: require("./libs/Darkness"),
    Greyscale: require("./libs/Greyscale"),
    Invert: require("./libs/Invert"),
    Sepia: require("./libs/Sepia"),
    Threshold: require("./libs/Threshold"),
    Trigger: require("./libs/Trigger")
  },
  write: Canvacard.write,
  author: "SrGobi",
  version: require("./package.json").version
};