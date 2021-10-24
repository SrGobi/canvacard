// Creado y mantenido por SrGobi

const Canvacard = require("./src/Canvacard");

// Cargar fuentes predeterminadas
try {
    setTimeout(() => {
        Canvacard.registerFonts();
    });
} catch(e) {}

/**
 * @param {stirng} moduleName Nombre del módulo
 */
function load(moduleName) {
    try {
        return require(moduleName);
    } catch(e) {
        return null;
    }
}

module.exports = {
    Canvas: Canvacard,
    Canvacard,
    ConvolutionMatrix: Canvacard.CONVOLUTION_MATRIX,
    Rank: require("./src/Rank"),
    Spotify: require("./src/Spotify"),
    Welcomer: load("./src/Welcomer"),
    Leaver: load("./src/Leaver"),
    CaptchaGen: load("captcha-canvas") ? load("captcha-canvas").CaptchaGenerator : null,
    FortniteShop: load("discord-canvascard") ? load("discord-canvascard").FortniteShop : null,
    FortniteStats: load("discord-canvascard") ? load("discord-canvascard").FortniteStats : null,
    Plugins: require("./src/Plugins"),
    Util: require("./src/Util"),
    Assets: require("@canvacord/assets"),
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