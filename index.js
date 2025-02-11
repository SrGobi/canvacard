// Created and maintained by SrGobi

const Canvacard = require("./src/Canvacard");

// load default fonts
try {
    setTimeout(() => {
        Canvacard.registerFonts();
    });
} catch(e) {}

/**
 * @param {stirng} moduleName module name
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
    ConvolutionMatrix: Canvacard.CONVOLUTION_MATRIX,
    CaptchaGen: load("captcha-canvas") ? load("captcha-canvas").CaptchaGenerator : null,
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