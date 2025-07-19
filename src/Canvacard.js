const Trigger = require("../libs/Trigger");
const Greyscale = require("../libs/Greyscale");
const Invert = require("../libs/Invert");
const Sepia = require("../libs/Sepia");
const fs = require("fs");
const Brightness = require("../libs/Brightness");
const Threshold = require("../libs/Threshold");
const Convolute = require("../libs/Convolute");
const { createCanvas, loadImage } = require("@napi-rs/canvas");
const Darkness = require("../libs/Darkness");
const circle = require("../plugins/circle");
const formatAndValidateHex = require("./utils/formatAndValidateHex.utils");
const shorten = require("./utils/shorten.utils");
const discordTime = require("./utils/discordTime.utils");
const { ImageFactory } = require("./AssetsFactory");
const APIError = require("./utils/error.utils");

/**
 * @kind class
 * @description Image generator
 * @example
 * ```js
const canvacard = require("canvacard");
canvacard.Canvas.trigger("./image.png")
  .then(triggered => {
    canvacard.write(triggered, "triggered.gif");
  })
  .catch(console.error);
 * ```
 */
class Canvacard {
  constructor() {
    throw new APIError(`The ${this.constructor.name} class may not be instantiated!`);
  }

  /**
   * @method trigger
   * @name trigger
   * @description Trigger an image
   * @example
   * ```js
    const canvacard = require("canvacard");
    canvacard.Canvas.trigger("./image.png")
    .then(triggered => {
      canvacard.write(triggered, "triggered.gif");
    })
    .catch(console.error);
   * ```
   * @param {string|Buffer} image Image to trigger
   * @returns {Promise<Buffer>} Triggered image
   * @throws {APIError} If image is not provided
   */
  static async trigger(image) {
    if (!image) throw new APIError("Expected image, received nothing!");
    await Canvacard.__wait();
    return await Trigger(image, ImageFactory.TRIGGERED);  // The image is used from ImageFactory
  }

  /**
   * @method invert
   * @name invert
   * @description Invert an image
   * @example
   * ```js
    const canvacard = require("canvacard");
    canvacard.Canvas.invert("./image.png")
    .then(inverted => {
      canvacard.write(inverted, "inverted.png");
    })
    .catch(console.error);
   * ```
   * @param {string|Buffer} image Image to invert
   * @returns {Promise<Buffer>} Inverted image
   * @throws {APIError} If image is not provided
   */
  static async invert(image) {
    if (!image) throw new APIError("Expected image, received nothing!");
    return await Invert(image);
  }

  /**
   * @method sepia
   * @name sepia
   * @description Sepia an image
   * @example
   * ```js
    const canvacard = require("canvacard");
    canvacard.Canvas.sepia("./image.png")
    .then(sepia => {
      canvacard.write(sepia, "sepia.png");
    })
    .catch(console.error);
   * ```
   * @param {string|Buffer} image Image to sepia
   * @returns {Promise<Buffer>} Sepia image
   * @throws {APIError} If image is not provided
   */
  static async sepia(image) {
    if (!image) throw new APIError("Expected image, received nothing!");
    return await Sepia(image);
  }

  /**
   * @method greyscale
   * @name greyscale
   * @description Greyscale an image
   * @example
   * ```js
    const canvacard = require("canvacard");
    canvacard.Canvas.greyscale("./image.png")
    .then(greyscale => {
      canvacard.write(greyscale, "greyscale.png");
    })
    .catch(console.error);
   * ```
   * @param {string|Buffer} image Image to greyscale
   * @returns {Promise<Buffer>} Greyscale image
   * @throws {APIError} If image is not provided
   */
  static async greyscale(image) {
    if (!image) throw new APIError("Expected image, received nothing!");
    return await Greyscale(image);
  }

  /**
   * @method brightness
   * @name brightness
   * @description Edit the brightness of the image
   * @example
   * ```js
    const canvacard = require("canvacard");
    canvacard.Canvas.brightness("./image.png", 50)
    .then(brightened => {
      canvacard.write(brightened, "brightened.png");
    })
    .catch(console.error);
   * ```
   * @param {string|Buffer} image Image to brighten
   * @param {number} amount Amount of brightness
   * @returns {Promise<Buffer>} Brightened image
   * @throws {APIError} If image is not provided o la cantidad no es un número
   */
  static async brightness(image, amount) {
    if (!image) throw new APIError("Expected image, received nothing!");
    if (isNaN(amount)) throw new APIError("The quantity must be a number!");
    return await Brightness(image, amount);
  }

  /**
   * @method darkness
   * @name darkness
   * @description Darken an image
   * @example
   * ```js
    const canvacard = require("canvacard");
    canvacard.Canvas.darkness("./image.png", 50)
    .then(darkened => {
      canvacard.write(darkened, "darkened.png");
    })
    .catch(console.error);
   * ```
   * @param {string|Buffer} image Image to darken
   * @param {number} amount Amount of darkness
   * @returns {Promise<Buffer>} Darkened image
   * @throws {APIError} If image is not provided o la cantidad no es un número
   */
  static async darkness(image, amount) {
    if (!image) throw new APIError("Expected image, received nothing!");
    if (isNaN(amount)) throw new APIError("The quantity must be a number!");
    return await Darkness(image, amount);
  }

  /**
   * @method threshold
   * @name threshold
   * @descrioption Threshold an image
   * @example
   * ```js
    const canvacard = require("canvacard");
    canvacard.Canvas.threshold("./image.png", 128)
    .then(thresholded => {
      canvacard.write(thresholded, "thresholded.png");
    })
    .catch(console.error);
   * ```
   * @param {string|Buffer} image Image to threshold
   * @param {number} amount Amount of threshold
   * @returns {Promise<Buffer>} Thresholded image
   * @throws {APIError} If image is not provided o la cantidad no es un número
   */
  static async threshold(image, amount) {
    if (!image) throw new APIError("Expected image, received nothing!");
    if (isNaN(amount)) throw new APIError("The quantity must be a number!");
    return await Threshold(image, amount);
  }

  /**
   * @method convolute
   * @name convolute
   * @description Convolute an image
   * @example
   * ```js
    const canvacard = require("canvacard");
    const matrix = [0, -1, 0, -1, 5, -1, 0, -1, 0];  // Ejemplo de matriz de convolución
    canvacard.Canvas.convolute("./image.png", matrix, true)
    .then(convoluted => {
      canvacard.write(convoluted, "convoluted.png");
    })
    .catch(console.error);
   * ```
   * @param {string|Buffer} image Image to convolute
   * @param {number[]} matrix Convolution matrix
   * @param {boolean} opaque If the image should be opaque
   * @returns {Promise<Buffer>} Convoluted image
   * @throws {APIError} If image is not provided o la matriz no es un Array
   */
  static async convolute(image, matrix, opaque) {
    if (!image) throw new APIError("Expected image, received nothing!");
    if (!Array.isArray(matrix)) throw new APIError("The convolution matrix must be Array.");
    return await Convolute(image, matrix, opaque);
  }

  /**
   * @method pixelate
   * @name pixelate
   * @description Pixelate an image
   * @example
   * ```js
    const canvacard = require("canvacard");
    canvacard.Canvas.pixelate("./image.png", 5)
    .then(pixelated => {
      canvacard.write(pixelated, "pixelated.png");
    })
    .catch(console.error);
   * @param {string|Buffer} image Image to pixelate
   * @param {number} pixels Amount of pixels
   * @returns {Promise<Buffer>} Pixelated image
   * @throws {APIError} If image is not provided o los píxeles no son un número
   */
  static async pixelate(image, pixels = 5) {
    if (!image) throw new APIError("Image was not provided!");
    if (!pixels || typeof pixels !== "number") pixels = 100;
    if (pixels < 1) pixels = 100;
    if (pixels > 100) pixels = 100;

    const img = await loadImage(image);
    const canvas = createCanvas(img.width, img.height);
    const ctx = canvas.getContext("2d");
    const pixel = pixels / 100;

    ctx.drawImage(img, 0, 0, canvas.width * pixel, canvas.height * pixel);
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(canvas, 0, 0, canvas.width * pixel, canvas.height * pixel, 0, 0, canvas.width + 5, canvas.height + 5);

    return canvas.toBuffer("image/png");
  }

  /**
   * @method sharpen
   * @name sharpen
   * @description Sharpen an image
   * @example
   * ```js
    const canvacard = require("canvacard");
    canvacard.Canvas.sharpen("./image.png", 1)
    .then(sharpened => {
      canvacard.write(sharpened, "sharpened.png");
    })
    .catch(console.error);
   * ```
   * @param {string|Buffer} image Image to sharpen
   * @param {number} lvl Level of sharpening
   * @returns {Promise<Buffer>} Sharpened image
   * @throws {APIError} If image is not provided o el nivel no es un número
   */
  static async sharpen(image, lvl = 1) {
    if (!image) throw new APIError("Image was not provided!");
    if (isNaN(lvl)) throw new APIError("Level must be a number!");
    return await Convolute(image, Canvacard.CONVOLUTION_MATRIX.SHARPEN, true, lvl);
  }

  /**
   * @method burn
   * @name burn
   * @description Burn an image
   * @example
   * ```js
    const canvacard = require("canvacard");
    canvacard.Canvas.burn("./image.png", 1)
    .then(burned => {
      canvacard.write(burned, "burned.png");
    })
    .catch(console.error);
   * ```
   * @param {string|Buffer} image Image to burn
   * @param {number} lvl Level of burning
   * @returns {Promise<Buffer>} Burned image
   * @throws {APIError} If image is not provided o el nivel no es un número
   */
  static async burn(image, lvl = 1) {
    if (!image) throw new APIError("Image was not provided!");
    if (isNaN(lvl)) throw new APIError("Level must be a number!");
    return await Convolute(image, Canvacard.CONVOLUTION_MATRIX.BURN, true, lvl);
  }

  /**
   * @method circle
   * @name circle
   * @description Circle an image
   * @example
   * ```js
    const canvacard = require("canvacard");
    canvacard.Canvas.circle("./image.png")
    .then(circled => {
      canvacard.write(circled, "circled.png");
    })
    .catch(console.error);
   * ```
   * @param {string|Buffer} image Image to circle
   * @returns {Promise<Buffer>} Circled image
   * @throws {APIError} If image is not provided
   */
  static async circle(image) {
    if (!image) throw new APIError("Image was not provided!");
    const img = await loadImage(image);
    const canvas = createCanvas(img.width, img.height);
    const ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);
    circle(ctx, canvas.width, canvas.height);
    return canvas.toBuffer("image/png");
  }

  /**
   * @method fuse
   * @name fuse
   * @description Fuse two images
   * @example
   * ```js
    const canvacard = require("canvacard");
    canvacard.Canvas.fuse("./image1.png", "./image2.png")
      .then(fused => {
      canvacard.write(fused, "fused.png");
    })
    .catch(console.error);
   * ```
   * @param {string|Buffer} image1 First image
   * @param {string|Buffer} image2 Second image
   * @returns {Promise<Buffer>} Fused image
   * @throws {APIError} If image is not provided
   */
  static async fuse(image1, image2) {
    if (!image1) throw new APIError("The parameter 'image1' is missing.");
    if (!image2) throw new APIError("The parameter 'image2' is missing.");

    const img1 = await loadImage(image1);
    const img2 = await loadImage(image2);

    const canvas = createCanvas(img1.width, img1.height);
    const ctx = canvas.getContext("2d");
    ctx.globalAlpha = 0.5;
    ctx.drawImage(img1, 0, 0);
    ctx.drawImage(img2, 0, 0, canvas.width, canvas.height);

    return canvas.toBuffer("image/png");
  }

  /**
   * @method resize
   * @name resize
   * @description Resize an image
   * @example
   * ```js
    const canvacard = require("canvacard");
    canvacard.Canvas.resize("./image.png", 500, 500)
    .then(resized => {
      canvacard.write(resized, "resized.png");
    })
    .catch(console.error);
   * ```
   * @param {string|Buffer} image Image to resize
   * @param {number} width Width
   * @param {number} height Height
   * @returns {Promise<Buffer>} Resized image
   * @throws {APIError} If image is not provided
   */
  static async resize(image, width, height) {
    if (!image) throw new APIError("Image was not provided!");
    const img = await loadImage(image);
    const w = width && !isNaN(width) ? width : img.width;
    const h = height && !isNaN(height) ? width : img.height;
    const canvas = await createCanvas(w, h);
    const ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    return canvas.toBuffer("image/png");
  }

  /**
   * @method kiss
   * @name kiss
   * @description Kiss someone ( ͡° ͜ʖ ͡°)
   * @example
   * ```js
    const canvacard = require("canvacard");
    canvacard.Canvas.kiss("./image1.png", "./image2.png")
    .then(kissed => {
      canvacard.write(kissed, "kissed.png");
    })
    .catch(console.error);
   * ```
   * @param {string|Buffer} image1 First image
   * @param {string|Buffer} image2 Second image
   * @returns {Promise<Buffer>} Imagen de beso
   * @throws {APIError} If image is not provided
   */
  static async kiss(image1, image2) {
    if (!image1) throw new APIError("The parameter 'image1' is missing.");
    if (!image2) throw new APIError("The parameter 'image2' is missing.");
    await this.__wait();
    const canvas = createCanvas(768, 574);
    const ctx = canvas.getContext("2d");
    const background = await loadImage(ImageFactory.KISS);
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    const avatar = await loadImage(image1);
    const avatar1 = await loadImage(image2);
    ctx.drawImage(avatar1, 370, 25, 200, 200);
    ctx.drawImage(avatar, 150, 25, 200, 200);
    return canvas.toBuffer("image/png");
  }

  /**
   * @method spank
   * @name spank
   * @description To spank someone ( ͡° ͜ʖ ͡°)
   * @example
   * ```js
    const canvacard = require("canvacard");
    canvacard.Canvas.spank("./image1.png", "./image2.png")
    .then(spanked => {
      canvacard.write(spanked, "spanked.png");
    })
    .catch(console.error);
   * ```
   * @param {string|Buffer} image1 First image
   * @param {string|Buffer} image2 Second image
   * @returns {Promise<Buffer>} Image of spank
   * @throws {APIError} If image is not provided
   */
  static async spank(image1, image2) {
    if (!image1) throw new APIError("The parameter 'image1' is missing.");
    if (!image2) throw new APIError("The parameter 'image2' is missing.");
    await this.__wait();
    const canvas = createCanvas(500, 500);
    const ctx = canvas.getContext("2d");
    const background = await loadImage(ImageFactory.SPANK);
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    const avatar = await loadImage(image1);
    const avatar1 = await loadImage(image2);
    ctx.drawImage(avatar1, 350, 220, 120, 120);
    ctx.drawImage(avatar, 225, 5, 140, 140);
    return canvas.toBuffer("image/png");
  }

  /**
   * @method slap
   * @name slap
   * @description Slap someone ( ͡° ͜ʖ ͡°)
   * @example
   * ```js
    const canvacard = require("canvacard");
    canvacard.Canvas.slap("./image1.png", "./image2.png")
    .then(slap => {
      canvacard.write(slap, "slap.png");
    })
    .catch(console.error);
   * ```
   * @param {string|Buffer} image1 First image
   * @param {string|Buffer} image2 Second image
   * @returns {Promise<Buffer>} Image of slap
   * @throws {APIError} If image is not provided
   */
  static async slap(image1, image2) {
    if (!image1) throw new APIError("The parameter 'image1' is missing.");
    if (!image2) throw new APIError("The parameter 'image2' is missing.");
    await this.__wait();
    const canvas = createCanvas(1000, 500);
    const ctx = canvas.getContext("2d");
    const background = await loadImage(ImageFactory.BATSLAP);
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    const avatar = await loadImage(image1);
    const avatar1 = await loadImage(image2);
    ctx.drawImage(avatar1, 580, 260, 200, 200);
    ctx.drawImage(avatar, 350, 70, 220, 220);
    return canvas.toBuffer("image/png");
  }

  /**
   * @method facepalm
   * @name facepalm
   * @description Facepalm someone
   * @example
   * ```js
    const canvacard = require("canvacard");
    canvacard.Canvas.facepalm("./image.png")
    .then(facepalm => {
      canvacard.write(facepalm, "facepalm.png");
    })
    .catch(console.error);
   * ```
   * @param {string|Buffer} image Image to facepalm
   * @returns {Promise<Buffer>} Image of facepalm
   * @throws {APIError} If image is not provided
   */
  static async facepalm(image) {
    if (!image) throw new APIError("Image was not provided!");
    await this.__wait();
    let layer = await loadImage(ImageFactory.FACEPALM);
    let canvas = createCanvas(632, 357);
    let ctx = canvas.getContext("2d");
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, 632, 357);
    let avatar = await loadImage(image);
    ctx.drawImage(avatar, 199, 112, 235, 235);
    ctx.drawImage(layer, 0, 0, 632, 357);
    return canvas.toBuffer("image/png");
  }

  /**
   * @method colorfy
   * @name colorfy
   * @description Colorfy an image
   * @example
   * ```js
    const canvacard = require("canvacard");
    canvacard.Canvas.colorfy("./image.png", "#FF0000")
    .then(colorfy => {
      canvacard.write(colorfy, "colorfy.png");
    })
    .catch(console.error);
   * ```
   * @param {string|Buffer} image Image to colorfy
   * @param {string} color Color to apply to the image (hex)
   * @returns {Promise<Buffer>} Colorfied image
   * @throws {APIError} If image is not provided
   */
  static async colorfy(image, color) {
    if (!image) throw new APIError("Image was not provided!");
    const img = await loadImage(image);
    const canvas = createCanvas(img.width, img.height);
    const ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    if (color) {
      ctx.globalCompositeOperation = "color";
      ctx.fillStyle = color;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
    return canvas.toBuffer("image/png");
  }

  /**
   * @method distracted
   * @name distracted
   * @description Distract someone
   * @example
   * ```js
    const canvacard = require("canvacard");
    canvacard.Canvas.distracted("./image1.png", "./image2.png", "./image3.png")
    .then(distracted => {
      canvacard.write(distracted, "distracted.png");
    })
    .catch(console.error);
   * ```
   * @param {string|Buffer} image1 Face for the girl in red.
   * @param {string|Buffer} image2 Face for the boy.
   * @param {string|Buffer} image3 Face for the other girl [optional]
   * @returns {Promise<Buffer>} Distracted image
   * @throws {APIError} If image is not provided
   */
  static async distracted(image1, image2, image3 = null) {
    if (!image1) throw new APIError("The parameter 'image1' is missing.");
    if (!image2) throw new APIError("The parameter 'image2' is missing.");
    await this.__wait();
    const background = await loadImage(ImageFactory.DISTRACTED);
    const avatar1 = await loadImage(await Canvacard.circle(image1));
    const avatar2 = await loadImage(await Canvacard.circle(image2));
    const avatar3 = image3 ? await loadImage(await Canvacard.circle(image3)) : null;

    const canvas = createCanvas(background.width, background.height);
    const ctx = canvas.getContext("2d");

    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(avatar1, 180, 90, 150, 150);
    ctx.drawImage(avatar2, 480, 35, 130, 130);
    if (avatar3) ctx.drawImage(avatar3, 730, 110, 130, 130);

    return canvas.toBuffer("image/png");
  }

  /**
   * @method jail
   * @name jail
   * @description Create a jail image
   * @example
   * ```js
    const canvacard = require("canvacard");
    canvacard.Canvas.jail("./image.png")
    .then(jail => {
      canvacard.write(jail, "jail.png");
    })
    .catch(console.error);
   * ```
   * @param {string|Buffer} image Image to jail
   * @param {boolean} greyscale If the image should be greyscale
   * @returns {Promise<Buffer>} Jailed image
   * @throws {APIError} If image is not provided
   */
  static async jail(image, greyscale = false) {
    if (!image) throw new APIError("Image was not provided!");
    await this.__wait();
    const img = await loadImage(greyscale ? await Canvacard.greyscale(image) : image);
    const bg = await loadImage(ImageFactory.JAIL);

    const canvas = createCanvas(350, 350);
    const ctx = canvas.getContext("2d");

    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);

    return canvas.toBuffer("image/png");
  }

  /**
   * @method bed
   * @name bed
   * @description Create a bed image
   * @example
   * ```js
    const canvacard = require("canvacard");
    canvacard.Canvas.bed("./image1.png", "./image2.png")
    .then(bed => {
      canvacard.write(bed, "bed.png");
    })
    .catch(console.error);
   * ```
   * @param {string|Buffer} image1 First image
   * @param {string|Buffer} image2 Second image
   * @returns {Promise<Buffer>} Imagen de cama
   * @throws {APIError} If image is not provided
   */
  static async bed(image1, image2) {
    if (!image1) throw new APIError("The parameter 'image1' is missing.");
    if (!image2) throw new APIError("The parameter 'image2' is missing.");
    await this.__wait();
    const avatar = await loadImage(image1);
    const avatar1 = await loadImage(image2);
    const background = await loadImage(ImageFactory.BED);

    const canvas = createCanvas(background.width, background.height);
    const ctx = canvas.getContext("2d");
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

    ctx.drawImage(avatar, 25, 100, 100, 100);
    ctx.drawImage(avatar, 25, 300, 100, 100);
    ctx.drawImage(avatar, 53, 450, 70, 70);
    ctx.drawImage(avatar1, 53, 575, 100, 100);

    return canvas.toBuffer("image/png");
  }

  /**
   * @method delete
   * @name delete
   * @description Create a deleted image
   * @example
   * ```js
    const canvacard = require("canvacard");
    canvacard.Canvas.delete("./image.png")
    .then(deleted => {
      canvacard.write(deleted, "deleted.png");
    })
    .catch(console.error);
   * ```
   * @param {string|Buffer} image Image to delete
   * @param {boolean} dark If the image should be dark
   * @returns {Promise<Buffer>} Deleted image
   * @throws {APIError} If image is not provided
   */
  static async delete(image, dark = false) {
    if (!image) throw new APIError("Image was not provided!");
    await this.__wait();
    const img = await loadImage(image);
    const bg = await loadImage(dark ? await Canvacard.invert(ImageFactory.DELETE) : ImageFactory.DELETE);

    const canvas = createCanvas(bg.width, bg.height);
    const ctx = canvas.getContext("2d");

    ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 120, 135, 195, 195);

    return canvas.toBuffer("image/png");
  }

  /**
   * @method gradient
   * @name gradient
   * @description Create a gradient image
   * @example
   * ```js
    const canvacard = require("canvacard");
    canvacard.Canvas.gradient("#FF0000", "#0000FF", 500, 500)
    .then(gradient => {
      canvacard.write(gradient, "gradient.png");
    })
    .catch(console.error);
   * ```
   * @param {string} colorFrom First color
   * @param {string} colorTo Second color
   * @param {number} width Width of image
   * @param {number} height Height of image
   * @returns {Promise<Buffer>} Gradient image
   * @throws {APIError} If colorFrom or colorTo is not provided
   */
  static gradient(colorFrom, colorTo, width, height) {
    if (!colorFrom) throw new APIError("ColorFrom was not provided!");
    if (!colorTo) throw new APIError("ColorTo was not provided!");

    const canvas = createCanvas(width || 400, height || 200);
    const ctx = canvas.getContext("2d");
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);

    gradient.addColorStop(0, colorFrom);
    gradient.addColorStop(1, colorTo);
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    return canvas.toBuffer("image/png");
  }

  /**
   * @method quote
   * @name quote
   * @description Create a fake quote image
   * @example
   * ```js
    const canvacard = require("canvacard");
    canvacard.Canvas.quote({ image: "./image.png", message: "This is amazing!", username: "Clyde", color: "#FFFFFF" })
    .then(quote => {
      canvacard.write(quote, "quote.png");
    })
    .catch(console.error);
   * ```
   * @param {object} options Options
   * @param {Buffer|string} [options.image] Image
   * @param {string} [options.message] Message
   * @param {string} [options.username] Username
   * @param {string} [options.color] Color
   * @param {string} [font="Arial"] Text font for the card
   * @returns {Promise<Buffer>} Quote image
   */
  static async quote(options = { image, message, username, color }, font = "Arial") {
    await this.__wait();
    if (!options.image) options.image = ImageFactory.CLYDE;
    if (!options.message) options.message = "Please provide a text message.";
    if (!options.username) options.username = "Clyde";
    if (!options.color) options.color = "#FFFFFF";

    let image = await loadImage(await Canvacard.circle(options.image));

    const canvas = createCanvas(1500, 300);

    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "#36393E";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.drawImage(image, 75, 30, 130, 130);

    ctx.font = `40px ${font}`;
    ctx.fillStyle = "#FFFFFF";
    ctx.textAlign = "start";
    ctx.fillText(shorten(options.message, 66), 230, 150);

    ctx.font = `50px ${font}`;
    ctx.fillStyle = typeof options.color == "string" ? options.color : "#FFFFFF";
    ctx.textAlign = "start";
    ctx.fillText(typeof options.username === "string" ? shorten(options.username, 17) : "Clyde", 230, 80);

    ctx.font = `50px ${font}`;
    ctx.fillStyle = "#7D7D7D";
    ctx.textAlign = "start";
    ctx.fillText(discordTime(), 240 + ctx.measureText(shorten(options.username, 17)).width + 110, 80);

    return canvas.toBuffer("image/png");
  }

  /**
   * @method phub
   * @name phub
   * @description PornHub Comment
   * @example
   * ```js
    const canvacard = require("canvacard");
    canvacard.Canvas.phub({ username: "Clyde", message: "This is amazing!", image: "./image.png" })
    .then(phub => {
      canvacard.write(phub, "phub.png");
    })
    .catch(console.error);
   * ```
   * @param {Object} options Options
   * @param {String} [options.username] Username
   * @param {String} [options.message] Message
   * @param {String|Buffer} [options.image] Image
   * @param {string} [font="Arial"] Text font for card
   * @returns {Promise<Buffer>} PornHub Comment image
   * @throws {APIError} If username, message or image is not provided
   */
  static async phub(options = { username: null, message: null, image: null }, font = "Arial") {
    if (!options.username) throw new APIError("Username cannot be empty!");
    if (!options.message) throw new APIError("Message cannot be empty!");
    if (!options.image) throw new APIError("The image cannot be empty!");

    await this.__wait();
    let image = await loadImage(options.image);
    let baseImage = await loadImage(ImageFactory.PHUB);

    let canvas = createCanvas(baseImage.width, baseImage.height);
    let ctx = canvas.getContext("2d");

    ctx.drawImage(baseImage, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(image, 30, 310, 70, 70);

    ctx.font = `32px ${font}`;
    ctx.fillStyle = "#F99600";
    ctx.textAlign = "start";
    ctx.fillText(shorten(options.username, 20), 115, 350);

    ctx.font = `32px ${font}`;
    ctx.fillStyle = "#CCCCCC";
    ctx.textAlign = "start";
    ctx.fillText(shorten(options.message, 50), 30, 430);

    return canvas.toBuffer("image/png");
  }

  /**
   * @method wanted
   * @name wanted
   * @description Create a "wanted" image
   * @example
   * ```js
    const canvacard = require("canvacard");
    canvacard.Canvas.wanted("./image.png")
    .then(wanted => {
      canvacard.write(wanted, "wanted.png");
    })
    .catch(console.error);
   * ```
   * @param {string|Buffer} image Image to wanted
   * @returns {Promise<Buffer>} Wanted image
   * @throws {APIError} If image is not provided
   */
  static async wanted(image) {
    if (!image) throw new APIError("Image was not provided!");
    await this.__wait();
    const img = await loadImage(image);
    const bg = await loadImage(ImageFactory.WANTED);

    const canvas = createCanvas(bg.width, bg.height);
    const ctx = canvas.getContext("2d");

    ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 145, 282, 447, 447);

    return canvas.toBuffer("image/png");
  }

  /**
   * @method wasted
   * @name wasted
   * @description Create a "wasted" image
   * @example
   * ```js
    const canvacard = require("canvacard");
    canvacard.Canvas.wasted("./image.png")
    .then(wasted => {
      canvacard.write(wasted, "wasted.png");
    })
    .catch(console.error);
   * ```
   * @param {string|Buffer} image Image to wasted
   * @returns {Promise<Buffer>} Wasted image
   * @throws {APIError} If image is not provided
   */
  static async wasted(image) {
    if (!image) throw new APIError("Image was not provided!");
    await this.__wait();
    const img = await loadImage(await Canvacard.greyscale(image));
    const bg = await loadImage(ImageFactory.WASTED);

    const canvas = createCanvas(512, 512);
    const ctx = canvas.getContext("2d");

    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);

    return canvas.toBuffer("image/png");
  }

  /**
   * @method youtube
   * @name youtube
   * @description Create a YouTube comment image
   * @example
   * ```js
    const canvacard = require("canvacard");
    canvacard.Canvas.youtube({ username: "Clyde", content: "This is amazing!", avatar: "./image.png" })
    .then(youtube => {
      canvacard.write(youtube, "youtube.png");
    })
    .catch(console.error);
   * ```
   * @param {object} ops Options
   * @param {string} [ops.username] Username
   * @param {string} [ops.content] Content
   * @param {string|Buffer} [ops.avatar] Avatar
   * @param {boolean} [ops.dark=false] Dark mode
   * @returns {Promise<Buffer>} YouTube comment image
   * @throws {APIError} If username, content or avatar is not provided
   */
  static async youtube(ops = { username: null, content: null, avatar: null, dark: false }) {
    if (!ops.username || typeof ops.username !== "string") throw new APIError("Username cannot be empty!");
    if (!ops.content || typeof ops.content !== "string") throw new APIError("Content cannot be empty!");
    if (!ops.avatar) throw new APIError("The avatar font may not be empty!");
    ops.dark = !!ops.dark;

    await this.__wait();
    const bg = await loadImage(!ops.dark ? ImageFactory.YOUTUBE : await Canvacard.invert(ImageFactory.YOUTUBE));
    const avatar = await loadImage(await Canvacard.circle(ops.avatar));

    const canvas = createCanvas(bg.width, bg.height);
    const ctx = canvas.getContext("2d");

    ctx.drawImage(bg, -3, -3, canvas.width + 6, canvas.height + 6);
    ctx.drawImage(avatar, 17, 33, 52, 52);

    let time = Math.floor(Math.random() * (59 - 1)) + 1;
    time = `${time + (time == 1 ? " minute" : " minutes")} ago`;

    const username = shorten(ops.username, 21);
    const comment = shorten(ops.content, 60);

    ctx.font = "20px Roboto";
    ctx.fillStyle = ops.dark ? "#FFFFFF" : "#000000";
    ctx.fillText(username, 92, 50);

    ctx.font = "16px Roboto";
    ctx.fillStyle = "#909090";
    ctx.fillText(time, ctx.measureText(username).width + 140, 50);

    ctx.font = "18px Roboto";
    ctx.fillStyle = ops.dark ? "#FFFFFF" : "#000000";
    ctx.fillText(comment, 92, 80);

    return canvas.toBuffer("image/png");
  }

  /**
   * @method write
   * @name write
   * @description Writes data as a file
   * @param {Buffer} data data to write
   * @param {string} name file name
   * @returns {void}
   */
  static write(data, name) {
    return fs.writeFileSync(name, data);
  }

  /**
   * @method reply
   * @name reply
   * @description Discord Reply Clone
   * @param {object} options Options
   * @param {string|Buffer} [options.avatar1] Avatar of the person who responded
   * @param {string|Buffer} [options.avatar2] Avatar of the other person
   * @param {string} [options.user1] Username of the person who responded
   * @param {string} [options.user2] Username of the other person
   * @param {string} [options.hex1] Hexadecimal color of the person who responded
   * @param {string} [options.hex2] Hexadecimal color of the other person
   * @param {string} [options.mainText] Message of the person who responded
   * @param {string} [options.replyText] Message of the other person
   * @returns {Promise<Buffer>} Reply image
   * @throws {APIError} If the avatar, username or message is not provided
   * @example
  const img = "https://cdn.discordapp.com/embed/avatars/0.png";
  const img2 = "https://cdn.discordapp.com/embed/avatars/4.png";
  canvacard.Canvas.reply({
    avatar1: img,
    avatar2: img2,
    user1: "Maximus",
    user2: "SrGobi",
    hex1: "#FF3300",
    hex2: "#7289da",
    mainText: "kok",
    replyText: "Pog"
   })
  .then(img => canvacard.write(img, "reply.png"));
   */
  static async reply(options = { avatar1: null, avatar2: null, user1: null, user2: null, hex1: null, hex2: null, mainText: null, replyText: null }) {
    let { avatar1, avatar2, user1, user2, hex1, hex2, mainText, replyText } = options;

    if (!avatar1) throw new APIError("The first avatar was not provided!");
    if (!avatar2) throw new APIError("The second avatar was not provided!");
    if (!user1) throw new APIError("First username not provided!");
    if (!user2) throw new APIError("Second username not provided!");
    if (!mainText || typeof mainText !== "string") throw new APIError("The main text was not provided!");
    if (!replyText || typeof replyText !== "string") throw new APIError("Response text not provided!");
    if (!hex1 || typeof hex1 !== "string") hex1 = "#FFFFFF";
    if (!hex2 || typeof hex2 !== "string") hex2 = "#FFFFFF";

    const img1 = await loadImage(avatar1);
    const img2 = await loadImage(avatar2);

    const canvas = createCanvas(1300, 250);
    const ctx = canvas.getContext("2d");

    ctx.fillStyle = "#36393E";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#ffffff";
    ctx.textAlign = "left";

    ctx.font = "38px Manrope";

    ctx.fillText(shorten(replyText, 32), 186, 200);

    ctx.font = "38px Whitney";
    ctx.fillStyle = formatAndValidateHex(hex1, "#FFFFFF");
    ctx.fillText(user1, 185, 147);

    const usernameWidth = ctx.measureText(user1).width;
    ctx.fillStyle = "#d1d1d1";
    ctx.font = "38px Manrope";

    ctx.fillText(" answer ", 165 + usernameWidth + 20, 147);

    const repliedWidth = ctx.measureText(" answer ").width;

    ctx.fillStyle = formatAndValidateHex(hex2, "#FFFFFF");
    ctx.font = "38px Whitney";
    ctx.fillText(user2, 165 + usernameWidth + repliedWidth + 20, 167 - 20);

    const secondMemberUserWidth = ctx.measureText(user2).width;

    ctx.font = "26px Whitney";
    ctx.fillStyle = "#7a7c80";
    const time = discordTime();

    ctx.fillText(` ${time}`, 165 + usernameWidth + repliedWidth + secondMemberUserWidth + 3 + 20, 167 - 20)

    ctx.font = "29px Whitney";
    ctx.globalAlpha = 0.7;
    ctx.fillStyle = "#d1d1d1";
    ctx.fillText(shorten(mainText, 64), 195 + 20 + 20, 100 + 5 - 20);

    ctx.strokeStyle = "#a3a2a2";
    ctx.lineWidth = 4;
    ctx.globalAlpha = 0.4;
    ctx.moveTo(34 + (105 / 2) + 70 + 20, 92 + 5 - 20);
    ctx.lineTo(34 + (105 / 2) + 20, 92 + 5 - 20);

    ctx.moveTo(34 + (105 / 2) + 20, 92 + 5 - 20);
    ctx.quadraticCurveTo(34 + (105 / 2) + 4, 92 + 5 - 20, 34 + (105 / 2), 103 + 5 - 20);

    ctx.moveTo(34 + (105 / 2), 125 - 20);
    ctx.lineTo(34 + (105 / 2), 103 + 5 - 20);
    ctx.stroke();


    ctx.globalAlpha = 1;
    ctx.save();
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.arc(90, 182 - 20, 50, 0, Math.PI * 2, true);
    ctx.strokeStyle = "#36393E";
    ctx.stroke();
    ctx.closePath();

    ctx.clip();
    ctx.drawImage(img1, 38, 130 - 20, 105, 105);
    ctx.restore();

    ctx.save();
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.arc(165 + 20 + 20, 90 + 5 - 20, 20, 0, Math.PI * 2);
    ctx.strokeStyle = "#36393E";
    ctx.stroke();
    ctx.closePath();

    ctx.clip();

    ctx.drawImage(img2, 165 + 20, 70 + 5 - 20, 40, 40);
    ctx.restore();

    return canvas.toBuffer("image/png");
  }

  /**
   * Canvacard method used for `wait`.
   * @param {number} dur Number of milliseconds to wait
   * @returns {Promise<void>} Promise fulfilled after the wait
   * @private
   */
  static __wait(dur) {
    return new Promise((res) => {
      setTimeout(() => res(), dur || 250);
    });
  }

  /**
   * Canvacard convolution matrix
   * @typedef {object} ConvolutionMatrix
   * @property {number[]} EDGES Edges Matrix
   * @property {number[]} BLUR Blur Matrix
   * @property {number[]} SHARPEN Sharpen Matrix
   * @property {number[]} BURN Burn Matrix
   * @private
   */

  /**
   * Array data for **Canvacard.convolute()**
   * @type {ConvolutionMatrix}
   * @private
   */
  static get CONVOLUTION_MATRIX() {
    return {
      EDGES: [0, -1, 0, -1, 4, -1, 0, -1, 0],
      BLUR: [1 / 9, 1 / 9, 1 / 9, 1 / 9, 1 / 9, 1 / 9, 1 / 9, 1 / 9, 1 / 9],
      SHARPEN: [0, -1, 0, -1, 5, -1, 0, -1, 0],
      BURN: [1 / 11, 1 / 11, 1 / 11, 1 / 11, 1 / 11, 1 / 11, 1 / 11, 1 / 11, 1 / 11]
    };
  }

}

module.exports = Canvacard;
