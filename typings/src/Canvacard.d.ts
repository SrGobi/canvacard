export = Canvacard;
/**
 * @kind class
 * Canvacard Generador De Memes
 */
declare class Canvacard {
    /**
     * @method trigger
     * @name trigger
     * @description Este método se puede utilizar para aplicar el efecto Disparado en la imagen.
     * @example
     * ```js
      const canvacard = require("canvacard");
      canvacard.Canvas.trigger("./image.png")
      .then(triggered => {
        canvacard.write(triggered, "triggered.gif");
      })
      .catch(console.error);
     * ```
     * @param {string|Buffer} image Imagen para activar
     * @returns {Promise<Buffer>} Imagen "triggered"
     * @throws {APIError} Si no se proporciona la imagen
     */
    static trigger(image: string | Buffer): Promise<Buffer>;
    /**
     * @method invert
     * @name invert
     * @description Invierte el color de la imagen
     * @example
     * ```js
      const canvacard = require("canvacard");
      canvacard.Canvas.invert("./image.png")
      .then(inverted => {
        canvacard.write(inverted, "inverted.png");
      })
      .catch(console.error);
     * ```
     * @param {string|Buffer} image Imagen para invertir
     * @returns {Promise<Buffer>} Imagen invertida
     * @throws {APIError} Si no se proporciona la imagen
     */
    static invert(image: string | Buffer): Promise<Buffer>;
    /**
     * @method sepia
     * @name sepia
     * @description Aplicar lavado sepia en img
     * @example
     * ```js
      const canvacard = require("canvacard");
      canvacard.Canvas.sepia("./image.png")
      .then(sepia => {
        canvacard.write(sepia, "sepia.png");
      })
      .catch(console.error);
     * ```
     * @param {string|Buffer} image Imagen
     * @returns {Promise<Buffer>} Imagen sep
     * @throws {APIError} Si no se proporciona la imagen
     */
    static sepia(image: string | Buffer): Promise<Buffer>;
    /**
     * @method greyscale
     * @name greyscale
     * @description Efecto de escala de grises sobre la imagen
     * @example
     * ```js
      const canvacard = require("canvacard");
      canvacard.Canvas.greyscale("./image.png")
      .then(greyscale => {
        canvacard.write(greyscale, "greyscale.png");
      })
      .catch(console.error);
     * ```
     * @param {string|Buffer} image Imagen
     * @returns {Promise<Buffer>} Imagen en escala de grises
     * @throws {APIError} Si no se proporciona la imagen
     */
    static greyscale(image: string | Buffer): Promise<Buffer>;
    /**
     * @method brightness
     * @name brightness
     * @description Editar el brillo de la imagen
     * @example
     * ```js
      const canvacard = require("canvacard");
      canvacard.Canvas.brightness("./image.png", 50)
      .then(brightened => {
        canvacard.write(brightened, "brightened.png");
      })
      .catch(console.error);
     * ```
     * @param {string|Buffer} image Imagen
     * @param {number} amount Cantidad de brillo
     * @returns {Promise<Buffer>} Imagen con brillo
     * @throws {APIError} Si no se proporciona la imagen o la cantidad no es un número
     */
    static brightness(image: string | Buffer, amount: number): Promise<Buffer>;
    /**
     * @method darkness
     * @name darkness
     * @description Editar la oscuridad de la imagen
     * @example
     * ```js
      const canvacard = require("canvacard");
      canvacard.Canvas.darkness("./image.png", 50)
      .then(darkened => {
        canvacard.write(darkened, "darkened.png");
      })
      .catch(console.error);
     * ```
     * @param {string|Buffer} image Imagen
     * @param {number} amount Cantidad de oscuridad
     * @returns {Promise<Buffer>} Imagen oscura
     * @throws {APIError} Si no se proporciona la imagen o la cantidad no es un número
     */
    static darkness(image: string | Buffer, amount: number): Promise<Buffer>;
    /**
     * @method threshold
     * @name threshold
     * @descrioption Umbral de imagen
     * @example
     * ```js
      const canvacard = require("canvacard");
      canvacard.Canvas.threshold("./image.png", 128)
      .then(thresholded => {
        canvacard.write(thresholded, "thresholded.png");
      })
      .catch(console.error);
     * ```
     * @param {string|Buffer} img Imagen
     * @param {number} amount Cantidad límite
     * @returns {Promise<Buffer>} Imagen umbralizada
     * @throws {APIError} Si no se proporciona la imagen o la cantidad no es un número
     */
    static threshold(img: string | Buffer, amount: number): Promise<Buffer>;
    /**
     * @method convolute
     * @name convolute
     * @description Convolución de la imagen
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
     * @param {string|Buffer} img Imagen
     * @param {number[]} matrix Matriz de convolución
     * @param {boolean} opaque Si la convolución debe ser opaca
     * @returns {Promise<Buffer>} Imagen convolucionada
     * @throws {APIError} Si no se proporciona la imagen o la matriz no es un Array
     */
    static convolute(img: string | Buffer, matrix: number[], opaque: boolean): Promise<Buffer>;
    /**
     * @method pixelate
     * @name pixelate
     * @description Pixelar
     * @example
     * ```js
      const canvacard = require("canvacard");
      canvacard.Canvas.pixelate("./image.png", 5)
      .then(pixelated => {
        canvacard.write(pixelated, "pixelated.png");
      })
      .catch(console.error);
     * @param {string|Buffer} image Imagen para pixelar
     * @param {number} pixels Pixeles
     * @returns {Promise<Buffer>} Imagen pixelada
     * @throws {APIError} Si no se proporciona la imagen o los píxeles no son un número
     */
    static pixelate(image: string | Buffer, pixels?: number): Promise<Buffer>;
    /**
     * @method sharpen
     * @name sharpen
     * @description Agudizar una imagen
     * @example
     * ```js
      const canvacard = require("canvacard");
      canvacard.Canvas.sharpen("./image.png", 1)
      .then(sharpened => {
        canvacard.write(sharpened, "sharpened.png");
      })
      .catch(console.error);
     * ```
     * @param {string|Buffer} image Imagen para enfocar
     * @param {number} lvl intensidad de la nitidez
     * @returns {Promise<Buffer>} Imagen enfocada
     * @throws {APIError} Si no se proporciona la imagen o el nivel no es un número
     */
    static sharpen(image: string | Buffer, lvl?: number): Promise<Buffer>;
    /**
     * @method burn
     * @name burn
     * @description Aplica efecto de quemado en una imagen.
     * @example
     * ```js
      const canvacard = require("canvacard");
      canvacard.Canvas.burn("./image.png", 1)
      .then(burned => {
        canvacard.write(burned, "burned.png");
      })
      .catch(console.error);
     * ```
     * @param {string|Buffer} image Fuente de imagen
     * @param {number} lvl intensidad
     * @returns {Promise<Buffer>} Imagen quemada
     * @throws {APIError} Si no se proporciona la imagen o el nivel no es un número
     */
    static burn(image: string | Buffer, lvl?: number): Promise<Buffer>;
    /**
     * @method circle
     * @name circle
     * @description Crea una imagen circular
     * @example
     * ```js
      const canvacard = require("canvacard");
      canvacard.Canvas.circle("./image.png")
      .then(circled => {
        canvacard.write(circled, "circled.png");
      })
      .catch(console.error);
     * ```
     * @param {string|Buffer} image Fuente de imagen
     * @returns {Promise<Buffer>} Imagen circular
     * @throws {APIError} Si no se proporciona la imagen
     */
    static circle(image: string | Buffer): Promise<Buffer>;
    /**
     * @method fuse
     * @name fuse
     * @description Fusiona dos imágenes
     * @example
     * ```js
      const canvacard = require("canvacard");
      canvacard.Canvas.fuse("./image1.png", "./image2.png")
        .then(fused => {
        canvacard.write(fused, "fused.png");
      })
      .catch(console.error);
     * ```
     * @param {string|Buffer} image1 Primera imagen
     * @param {string|Buffer} image2 Segunda imagen
     * @returns {Promise<Buffer>} Imagen fusionada
     * @throws {APIError} Si no se proporciona la imagen
     */
    static fuse(image1: string | Buffer, image2: string | Buffer): Promise<Buffer>;
    /**
     * @method resize
     * @name resize
     * @description Cambiar el tamaño de una imagen
     * @example
     * ```js
      const canvacard = require("canvacard");
      canvacard.Canvas.resize("./image.png", 500, 500)
      .then(resized => {
        canvacard.write(resized, "resized.png");
      })
      .catch(console.error);
     * ```
     * @param {string|Buffer} image Fuente de imagen
     * @param {number} width ancho
     * @param {number} height altura
     * @returns {Promise<Buffer>} Imagen redimensionada
     * @throws {APIError} Si no se proporciona la imagen
     */
    static resize(image: string | Buffer, width: number, height: number): Promise<Buffer>;
    /**
     * @method kiss
     * @name kiss
     * @description Besarse ( ͡° ͜ʖ ͡°)
     * @example
     * ```js
      const canvacard = require("canvacard");
      canvacard.Canvas.kiss("./image1.png", "./image2.png")
      .then(kissed => {
        canvacard.write(kissed, "kissed.png");
      })
      .catch(console.error);
     * ```
     * @param {string|Buffer} image1 Primera imagen
     * @param {string|Buffer} image2 Segunda imagen
     * @returns {Promise<Buffer>} Imagen de beso
     * @throws {APIError} Si no se proporciona la imagen
     */
    static kiss(image1: string | Buffer, image2: string | Buffer): Promise<Buffer>;
    /**
     * @method spank
     * @name spank
     * @description Azotar a alguien ( ͡° ͜ʖ ͡°)
     * @example
     * ```js
      const canvacard = require("canvacard");
      canvacard.Canvas.spank("./image1.png", "./image2.png")
      .then(spanked => {
        canvacard.write(spanked, "spanked.png");
      })
      .catch(console.error);
     * ```
     * @param {string|Buffer} image1 Primera imagen
     * @param {string|Buffer} image2 Segunda imagen
     * @returns {Promise<Buffer>} Imagen de "spank"
     * @throws {APIError} Si no se proporciona la imagen
     */
    static spank(image1: string | Buffer, image2: string | Buffer): Promise<Buffer>;
    /**
     * @method slap
     * @name slap
     * @description Abofetear a alguien ( ͡° ͜ʖ ͡°)
     * @example
     * ```js
      const canvacard = require("canvacard");
      canvacard.Canvas.slap("./image1.png", "./image2.png")
      .then(slap => {
        canvacard.write(slap, "slap.png");
      })
      .catch(console.error);
     * ```
     * @param {string|Buffer} image1 Primera imagen
     * @param {string|Buffer} image2 Segunda imagen
     * @returns {Promise<Buffer>} Imagen de "slap"
     * @throws {APIError} Si no se proporciona la imagen
     */
    static slap(image1: string | Buffer, image2: string | Buffer): Promise<Buffer>;
    /**
     * @method facepalm
     * @name facepalm
     * @description Hacer una imagen de palma en la cara
     * @example
     * ```js
      const canvacard = require("canvacard");
      canvacard.Canvas.facepalm("./image.png")
      .then(facepalm => {
        canvacard.write(facepalm, "facepalm.png");
      })
      .catch(console.error);
     * ```
     * @param {string|Buffer} image Fuente de imagen
     * @returns {Promise<Buffer>} Imagen de facepalm
     * @throws {APIError} Si no se proporciona la imagen
     */
    static facepalm(image: string | Buffer): Promise<Buffer>;
    /**
     * @method colorfy
     * @name colorfy
     * @description Actualiza el color de la imagen
     * @example
     * ```js
      const canvacard = require("canvacard");
      canvacard.Canvas.colorfy("./image.png", "#FF0000")
      .then(colorfy => {
        canvacard.write(colorfy, "colorfy.png");
      })
      .catch(console.error);
     * ```
     * @param {string|Buffer} image Fuente de imagen
     * @param {string} color Color HTML5
     * @returns {Promise<Buffer>} Imagen coloreada
     * @throws {APIError} Si no se proporciona la imagen
     */
    static colorfy(image: string | Buffer, color: string): Promise<Buffer>;
    /**
     * @method distracted
     * @name distracted
     * @description Crear una imagen de meme de distracción
     * @example
     * ```js
      const canvacard = require("canvacard");
      canvacard.Canvas.distracted("./image1.png", "./image2.png", "./image3.png")
      .then(distracted => {
        canvacard.write(distracted, "distracted.png");
      })
      .catch(console.error);
     * ```
     * @param {string|Buffer} image1 Rostro para la niña en color rojo.
     * @param {string|Buffer} image2 Cara para el chico
     * @param {string|Buffer} image3 Cara para la otra chica [opcional]
     * @returns {Promise<Buffer>} Imagen de distracción
     * @throws {APIError} Si no se proporciona la primera imagen
     */
    static distracted(image1: string | Buffer, image2: string | Buffer, image3?: string | Buffer): Promise<Buffer>;
    /**
     * @method jail
     * @name jail
     * @description Crear una imagen de celda
     * @example
     * ```js
      const canvacard = require("canvacard");
      canvacard.Canvas.jail("./image.png")
      .then(jail => {
        canvacard.write(jail, "jail.png");
      })
      .catch(console.error);
     * ```
     * @param {string|Buffer} image Fuente de imagen
     * @param {boolean} greyscale Si debe ser una imagen en escala de grises
     * @returns {Promise<Buffer>} Imagen de la celda
     * @throws {APIError} Si no se proporciona la imagen
     */
    static jail(image: string | Buffer, greyscale?: boolean): Promise<Buffer>;
    /**
     * @method bed
     * @name bed
     * @description Crear una imagen de cama
     * @example
     * ```js
      const canvacard = require("canvacard");
      canvacard.Canvas.bed("./image1.png", "./image2.png")
      .then(bed => {
        canvacard.write(bed, "bed.png");
      })
      .catch(console.error);
     * ```
     * @param {string|Buffer} image1 Primera imagen
     * @param {string|Buffer} image2 Segunda imagen
     * @returns {Promise<Buffer>} Imagen de cama
     * @throws {APIError} Si no se proporciona la imagen
     */
    static bed(image1: string | Buffer, image2: string | Buffer): Promise<Buffer>;
    /**
     * @method delete
     * @name delete
     * @description Crear una imagen eliminada
     * @example
     * ```js
      const canvacard = require("canvacard");
      canvacard.Canvas.delete("./image.png")
      .then(deleted => {
        canvacard.write(deleted, "deleted.png");
      })
      .catch(console.error);
     * ```
     * @param {string|Buffer} image Fuente de imagen
     * @param {boolean} dark Si la imagen debe estar en modo oscuro
     * @returns {Promise<Buffer>} Imagen eliminada
     * @throws {APIError} Si no se proporciona la imagen
     */
    static delete(image: string | Buffer, dark?: boolean): Promise<Buffer>;
    /**
     * @method gradient
     * @name gradient
     * @description Crear una imagen degradada
     * @example
     * ```js
      const canvacard = require("canvacard");
      canvacard.Canvas.gradient("#FF0000", "#0000FF", 500, 500)
      .then(gradient => {
        canvacard.write(gradient, "gradient.png");
      })
      .catch(console.error);
     * ```
     * @param {string} colorFrom Color inicial
     * @param {string} colorTo Color final
     * @param {number} width Ancho de la imagen
     * @param {number} height Altura de imagen
     * @returns {Promise<Buffer>} Imagen degradada
     * @throws {APIError} Si no se proporciona el color inicial o final
     */
    static gradient(colorFrom: string, colorTo: string, width: number, height: number): Promise<Buffer>;
    /**
     * @method quote
     * @name quote
     * @description Crear una imagen de cita falsa
     * @example
     * ```js
      const canvacard = require("canvacard");
      canvacard.Canvas.quote({ image: "./image.png", message: "¡Esto es increíble!", username: "Clyde", color: "#FFFFFF" })
      .then(quote => {
        canvacard.write(quote, "quote.png");
      })
      .catch(console.error);
     * ```
     * @param {object} options Opciones
     * @param {Buffer|string} [options.image] Imagen
     * @param {string} [options.message] Mensaje
     * @param {string} [options.username] Nombre de usuario
     * @param {string} [options.color] Color
     * @param {string} [font="Arial"] Fuente de texto para la tarjeta
     * @returns {Promise<Buffer>} Imagen de cita falsa
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
     * @description Comentario de PornHub
     * @example
     * ```js
      const canvacard = require("canvacard");
      canvacard.Canvas.phub({ username: "Clyde", message: "¡Esto es increíble!", image: "./image.png" })
      .then(phub => {
        canvacard.write(phub, "phub.png");
      })
      .catch(console.error);
     * ```
     * @param {Object} options Opciones
     * @param {String} [options.username] Nombre de usuario
     * @param {String} [options.message] Comentario
     * @param {String|Buffer} [options.image] Imagen
     * @param {string} [font="Arial"] Fuente de texto para la tarjeta
     * @returns {Promise<Buffer>} Imagen de comentario de PornHub
     * @throws {APIError} Si no se proporciona el nombre de usuario, el mensaje o la imagen
     */
    static phub(options?: {
        username?: string;
        message?: string;
        image?: string | Buffer;
    }, font?: string): Promise<Buffer>;
    /**
     * @method wanted
     * @name wanted
     * @description Crear una imagen de se busca
     * @example
     * ```js
      const canvacard = require("canvacard");
      canvacard.Canvas.wanted("./image.png")
      .then(wanted => {
        canvacard.write(wanted, "wanted.png");
      })
      .catch(console.error);
     * ```
     * @param {string|Buffer} image Fuente de imagen
     * @returns {Promise<Buffer>} Imagen de "wanted"
     * @throws {APIError} Si no se proporciona la imagen
     */
    static wanted(image: string | Buffer): Promise<Buffer>;
    /**
     * @method wasted
     * @name wasted
     * @description Crear una imagen de "wasted"
     * @example
     * ```js
      const canvacard = require("canvacard");
      canvacard.Canvas.wasted("./image.png")
      .then(wasted => {
        canvacard.write(wasted, "wasted.png");
      })
      .catch(console.error);
     * ```
     * @param {string|Buffer} image Fuente de imagen
     * @returns {Promise<Buffer>} Imagen de "wasted"
     * @throws {APIError} Si no se proporciona la imagen
     */
    static wasted(image: string | Buffer): Promise<Buffer>;
    /**
     * @method youtube
     * @name youtube
     * @description Comentario de YouTube
     * @example
     * ```js
      const canvacard = require("canvacard");
      canvacard.Canvas.youtube({ username: "Clyde", content: "¡Esto es increíble!", avatar: "./image.png" })
      .then(youtube => {
        canvacard.write(youtube, "youtube.png");
      })
      .catch(console.error);
     * ```
     * @param {object} ops Opciones de comentarios de YouTube
     * @param {string} [ops.username] Nombre de usuario del autor del comentario
     * @param {string} [ops.content] El comentario
     * @param {string|Buffer} [ops.avatar] Fuente de avatar
     * @param {boolean} [ops.dark=false] ¿Modo oscuro?
     * @returns {Promise<Buffer>} Imagen de comentario de YouTube
     * @throws {APIError} Si no se proporciona el nombre de usuario, el contenido o el avatar
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
     * @description Escribe los datos como archivo
     * @param {Buffer} data datos para escribir
     * @param {string} name nombre del archivo
     * @returns {void}
     */
    static write(data: Buffer, name: string): void;
    /**
     * @method reply
     * @name reply
     * @description Clon de respuesta de discord
     * @param {object} options Opciones
     * @param {string|Buffer} [options.avatar1] Avatar de la persona que respondió
     * @param {string|Buffer} [options.avatar2] Avatar de la otra persona
     * @param {string} [options.user1] Nombre de usuario de la persona que respondió
     * @param {string} [options.user2] Nombre de usuario de la otra persona
     * @param {string} [options.hex1] Color hexadecimal de la persona que respondió
     * @param {string} [options.hex2] Color hexadecimal de la otra persona
     * @param {string} [options.mainText] El mensaje
     * @param {string} [options.replyText] El mensaje de respuesta
     * @returns {Promise<Buffer>} Imagen de respuesta de discord
     * @throws {APIError} Si no se proporciona el avatar, el nombre de usuario o el mensaje
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
     * Método de Canvacard utilizado para `wait`.
     * @param {number} dur Número de milisegundos a esperar
     * @returns {Promise<void>} Promesa resuelta después de la espera
     * @private
     */
    private static __wait;
    /**
     * Matriz de convolución Canvacard
     * @typedef {object} ConvolutionMatrix
     * @property {number[]} EDGES Edges Matrix
     * @property {number[]} BLUR Blur Matrix
     * @property {number[]} SHARPEN Sharpen Matrix
     * @property {number[]} BURN Burn Matrix
     * @private
     */
    /**
     * Datos de matriz para **Canvacard.convolute()**
     * @type {ConvolutionMatrix}
     * @private
     */
    private static get CONVOLUTION_MATRIX();
}
//# sourceMappingURL=Canvacard.d.ts.map