export = Canvacard;
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
declare class Canvacard {
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
    static trigger(image: string | Buffer): Promise<Buffer>;
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
    static invert(image: string | Buffer): Promise<Buffer>;
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
    static sepia(image: string | Buffer): Promise<Buffer>;
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
    static greyscale(image: string | Buffer): Promise<Buffer>;
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
    static brightness(image: string | Buffer, amount: number): Promise<Buffer>;
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
    static darkness(image: string | Buffer, amount: number): Promise<Buffer>;
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
    static threshold(image: string | Buffer, amount: number): Promise<Buffer>;
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
    static convolute(image: string | Buffer, matrix: number[], opaque: boolean): Promise<Buffer>;
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
    static pixelate(image: string | Buffer, pixels?: number): Promise<Buffer>;
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
    static sharpen(image: string | Buffer, lvl?: number): Promise<Buffer>;
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
    static burn(image: string | Buffer, lvl?: number): Promise<Buffer>;
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
    static circle(image: string | Buffer): Promise<Buffer>;
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
    static fuse(image1: string | Buffer, image2: string | Buffer): Promise<Buffer>;
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
    static resize(image: string | Buffer, width: number, height: number): Promise<Buffer>;
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
    static kiss(image1: string | Buffer, image2: string | Buffer): Promise<Buffer>;
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
    static spank(image1: string | Buffer, image2: string | Buffer): Promise<Buffer>;
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
    static slap(image1: string | Buffer, image2: string | Buffer): Promise<Buffer>;
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
    static facepalm(image: string | Buffer): Promise<Buffer>;
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
    static colorfy(image: string | Buffer, color: string): Promise<Buffer>;
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
    static distracted(image1: string | Buffer, image2: string | Buffer, image3?: string | Buffer): Promise<Buffer>;
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
    static jail(image: string | Buffer, greyscale?: boolean): Promise<Buffer>;
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
    static bed(image1: string | Buffer, image2: string | Buffer): Promise<Buffer>;
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
    static delete(image: string | Buffer, dark?: boolean): Promise<Buffer>;
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
    static gradient(colorFrom: string, colorTo: string, width: number, height: number): Promise<Buffer>;
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
    static quote(options?: {
        image?: Buffer | string;
        message?: string;
        username?: string;
        color?: string;
    }, font?: string): Promise<Buffer>;
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
    static phub(options?: {
        username?: string;
        message?: string;
        image?: string | Buffer;
    }, font?: string): Promise<Buffer>;
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
    static wanted(image: string | Buffer): Promise<Buffer>;
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
    static wasted(image: string | Buffer): Promise<Buffer>;
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
    static youtube(ops?: {
        username?: string;
        content?: string;
        avatar?: string | Buffer;
        dark?: boolean;
    }): Promise<Buffer>;
    /**
     * @method write
     * @name write
     * @description Writes data as a file
     * @param {Buffer} data data to write
     * @param {string} name file name
     * @returns {void}
     */
    static write(data: Buffer, name: string): void;
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
    static reply(options?: {
        avatar1?: string | Buffer;
        avatar2?: string | Buffer;
        user1?: string;
        user2?: string;
        hex1?: string;
        hex2?: string;
        mainText?: string;
        replyText?: string;
    }): Promise<Buffer>;
    /**
     * Canvacard method used for `wait`.
     * @param {number} dur Number of milliseconds to wait
     * @returns {Promise<void>} Promise fulfilled after the wait
     * @private
     */
    private static __wait;
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
    private static get CONVOLUTION_MATRIX();
}
//# sourceMappingURL=Canvacard.d.ts.map