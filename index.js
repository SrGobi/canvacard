// Created and maintained by SrGobi
const Canvacard = require("./src/Canvacard");

module.exports = {
  Canvas: Canvacard,
  Canvacard,
  ConvolutionMatrix: Canvacard.CONVOLUTION_MATRIX,
  Rank: require("./src/Rank"),
  Spotify: require("./src/Spotify"),
  WelcomeLeave: require("./src/WelcomeLeave"),
  FortniteShop: require("./src/FortniteShop"),
  Plugins: require("./src/Plugins"),
  Assets: require("./src/AssetsFactory"),
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