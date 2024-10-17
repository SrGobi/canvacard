export = Canvacard;
/**
 * Canvacard Generador De Memes
 */
declare class Canvacard {
    /**
     * Este método se puede utilizar para aplicar el efecto Disparado en la imagen.
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
     * @returns {Promise<Buffer>}
     */
    static trigger(image: string | Buffer): Promise<Buffer>;
    /**
     * Invierte el color de la imagen
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
     * @returns {Promise<Buffer>}
     */
    static invert(image: string | Buffer): Promise<Buffer>;
    /**
     * Aplicar lavado sepia en img
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
     * @returns {Promise<Buffer>}
     */
    static sepia(image: string | Buffer): Promise<Buffer>;
    /**
     * Efecto de escala de grises sobre la imagen
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
     * @returns {Promise<Buffer>}
     */
    static greyscale(image: string | Buffer): Promise<Buffer>;
    /**
     * Editar el brillo de la imagen
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
     * @returns {Promise<Buffer>}
     */
    static brightness(image: string | Buffer, amount: number): Promise<Buffer>;
    /**
     * Editar la oscuridad de la imagen
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
     * @returns {Promise<Buffer>}
     */
    static darkness(image: string | Buffer, amount: number): Promise<Buffer>;
    /**
     * Umbral de imagen
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
     * @returns {Promise<Buffer>}
     */
    static threshold(img: string | Buffer, amount: number): Promise<Buffer>;
    /**
     * Convolución de la imagen
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
     * @returns {Promise<Buffer>}
     */
    static convolute(img: string | Buffer, matrix: number[], opaque: boolean): Promise<Buffer>;
    /**
     * Crea barra de progreso
     * @example
     * ```js
      const canvacard = require("canvacard");
      const fill = {
        a1: "X", b1: "O", c1: "X",
        a2: "O", b2: "X", c2: "O",
        a3: "X", b3: "O", c3: "X"
      };
      const color = { bg: "#fff", bar: "#000", x: "#ff0000", o: "#0000ff" };
      const tictactoeImage = canvacard.Canvas.tictactoe(fill, color);
      canvacard.write(tictactoeImage, "tictactoe.png");
     * ```
     * @param {object} track Opciones de pista de la barra de progreso
     * @param {number} [track.x] El eje x
     * @param {number} [track.y] El eje y
     * @param {number} [track.width] Ancho de pista de la barra de progreso
     * @param {number} [track.height] Altura de la pista de la barra de progreso
     * @param {string} [track.color] Color de la pista de la barra de progreso
     * @param {boolean} [track.stroke] Usar trazo para pista
     * @param {number} [track.lineWidth] Este parámetro se utilizará si `track.stroke` se establece en` true`
     * @param {object} bar Opciones de la barra de progreso
     * @param {number} [bar.width] Ancho de la barra de progreso
     * @param {string} [bar.color] Color de la barra de progreso
     * @returns {Buffer}
     */
    static createProgressBar(track?: {
        x?: number;
        y?: number;
        width?: number;
        height?: number;
        color?: string;
        stroke?: boolean;
        lineWidth?: number;
    }, bar?: {
        width?: number;
        color?: string;
    }): Buffer;
    /**
     * Desenfocar una imagen
     * @example
     * ```js
      const canvacard = require("canvacard");
      canvacard.Canvas.blur("./image.png")
      .then(blurred => {
        canvacard.write(blurred, "blurred.png");
      })
      .catch(console.error);
     * ```
     * @param {string|Buffer} image Imagen para difuminar
     * @returns {Promise<Buffer>}
     */
    static blur(image: string | Buffer): Promise<Buffer>;
    /**
     * Pixelar
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
     * @returns {Promise<Buffer>}
     */
    static pixelate(image: string | Buffer, pixels?: number): Promise<Buffer>;
    /**
     * Agudizar una imagen
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
     * @returns {Promise<Buffer>}
     */
    static sharpen(image: string | Buffer, lvl?: number): Promise<Buffer>;
    /**
     * Aplica efecto de quemado en una imagen.
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
     * @returns {Promise<Buffer>}
     */
    static burn(image: string | Buffer, lvl?: number): Promise<Buffer>;
    /**
     * HTML5 color a imagen
     * @example
     * ```js
      const canvacard = require("canvacard");
      canvacard.Canvas.color("#FF0000", true, 1024, 1024, "Arial")
      .then(colored => {
        canvacard.write(colored, "colored.png");
      })
      .catch(console.error);
     * ```
     * @param {string} color Color HTML5
     * @param {boolean} displayHex Si debe mostrar hexadecimal
     * @param {number} height Altura de imagen
     * @param {number} width Ancho de la imagen
     * @param {string} [font="Arial"] Familia tipográfica
     * @returns {Promise<Buffer>}
     */
    static color(color?: string, displayHex?: boolean, height?: number, width?: number, font?: string): Promise<Buffer>;
    /**
     * Crea una imagen circular
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
     * @returns {Promise<Buffer>}
     */
    static circle(image: string | Buffer): Promise<Buffer>;
    /**
     * Crea un rectángulo
     * @example
     * ```js
      const canvacard = require("canvacard");
      canvacard.Canvas.rectangle(0, 0, 1024, 1024, "#FF0000", true, 5)
      .then(rectangled => {
        canvacard.write(rectangled, "rectangled.png");
      })
      .catch(console.error);
     * ```
     * @param {number} x eje x
     * @param {number} y eje y
     * @param {number} width ancho
     * @param {number} height altura
     * @param {string} color color
     * @param {boolean} stroke Si debe acariciar
     * @param {number} lineWidth ancho de línea
     * @returns {Buffer}
     */
    static rectangle(x: number, y: number, width: number, height: number, color: string, stroke: boolean, lineWidth: number): Buffer;
    /**
     * Fusiona dos imágenes
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
     * @returns {Promise<Buffer>}
     */
    static fuse(image1: string | Buffer, image2: string | Buffer): Promise<Buffer>;
    /**
     * Cambiar el tamaño de una imagen
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
     * @returns {Promise<Buffer>}
     */
    static resize(image: string | Buffer, width: number, height: number): Promise<Buffer>;
    /**
     * Besarse ( ͡° ͜ʖ ͡°)
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
     * @returns {Promise<Buffer>}
     */
    static kiss(image1: string | Buffer, image2: string | Buffer): Promise<Buffer>;
    /**
     * Azotar a alguien ( ͡° ͜ʖ ͡°)
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
     * @returns {Promise<Buffer>}
     */
    static spank(image1: string | Buffer, image2: string | Buffer): Promise<Buffer>;
    /**
     * Abofetear a alguien ( ͡° ͜ʖ ͡°)
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
     * @returns {Promise<Buffer>}
     */
    static slap(image1: string | Buffer, image2: string | Buffer): Promise<Buffer>;
    /**
     * ¿Oh esto? ¡Esto es hermoso!
     * @example
     * ```js
      const canvacard = require("canvacard");
      canvacard.Canvas.beautiful("./image.png")
      .then(beautiful => {
        canvacard.write(beautiful, "beautiful.png");
      })
      .catch(console.error);
     * ```
     * @param {string|Buffer} image Fuente de imagen
     * @returns {Promise<Buffer>}
     */
    static beautiful(image: string | Buffer): Promise<Buffer>;
    /**
     * facepalm
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
     * @returns {Promise<Buffer>}
     */
    static facepalm(image: string | Buffer): Promise<Buffer>;
    /**
     * Rainbow ( ͡° ͜ʖ ͡°)
     * @example
     * ```js
      const canvacard = require("canvacard");
      canvacard.Canvas.rainbow("./image.png")
      .then(rainbow => {
        canvacard.write(rainbow, "rainbow.png");
      })
      .catch(console.error);
     * ```
     * @param {string|Buffer} image Fuente de imagen
     * @returns {Promise<Buffer>}
     */
    static rainbow(image: string | Buffer): Promise<Buffer>;
    /**
     * "F" en el chat
     * @example
     * ```js
      const canvacard = require("canvacard");
      canvacard.Canvas.f(image)
      .then(f => {
        canvacard.write(f, "f.png");
      })
      .catch(console.error);
     * ```
     * @param {string|Buffer} image Fuente de imagen
     * @returns {Promise<Buffer>}
     */
    static rip(image: string | Buffer): Promise<Buffer>;
    /**
     * ¿Basura?
     * @example
     * ```js
      const canvacard = require("canvacard");
      canvacard.Canvas.trash("./image.png")
      .then(trash => {
        canvacard.write(trash, "trash.png");
      })
      .catch(console.error);
     * ```
     * @param {string|Buffer} image Fuente de imagen
     * @returns {Promise<Buffer>}
     */
    static trash(image: string | Buffer): Promise<Buffer>;
    /**
     * Peor que hitler
     * @example
     * ```js
      const canvacard = require("canvacard");
      canvacard.Canvas.hitler("./image.png")
      .then(hitler => {
        canvacard.write(hitler, "hitler.png");
      })
      .catch(console.error);
     *```
     * @param {string|Buffer} image Fuente de imagen
     * @returns {Promise<Buffer>}
     */
    static hitler(image: string | Buffer): Promise<Buffer>;
    /**
     * Actualiza el color de la imagen
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
     * @returns {Promise<Buffer>}
     */
    static colorfy(image: string | Buffer, color: string): Promise<Buffer>;
    /**
     * whoosh
     * @example
     * ```js
      const canvacard = require("canvacard");
      canvacard.Canvas.whoosh("./image.png")
      .then(whoosh => {
        canvacard.write(whoosh, "whoosh.png");
      })
      .catch(console.error);
     * ```
     * @param {string|Buffer} image Fuente de imagen
     * @returns {Promise<Buffer>}
     */
    static jokeOverHead(image: string | Buffer): Promise<Buffer>;
    /**
     * Novio distraído
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
     * @returns {Promise<Buffer>}
     */
    static distracted(image1: string | Buffer, image2: string | Buffer, image3?: string | Buffer): Promise<Buffer>;
    /**
     * No, no afecta a mi bebé.
     * @example
     * ```js
      const canvacard = require("canvacard");
      canvacard.Canvas.affect("./image.png")
      .then(affect => {
        canvacard.write(affect, "affect.png");
      })
      .catch(console.error);
     * ```
     * @param {string|Buffer} image Fuente de imagen
     * @returns {Promise<Buffer>}
     */
    static affect(image: string | Buffer): Promise<Buffer>;
    /**
     * Celda
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
     * @returns {Promise<Buffer>}
     */
    static jail(image: string | Buffer, greyscale?: boolean): Promise<Buffer>;
    /**
     * Cama
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
     * @returns {Promise<Buffer>}
     */
    static bed(image1: string | Buffer, image2: string | Buffer): Promise<Buffer>;
    /**
     * Borrar
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
     * @returns {Promise<Buffer>}
     */
    static delete(image: string | Buffer, dark?: boolean): Promise<Buffer>;
    /**
     * TicTacToe
     * @example
     * ```js
      const canvacard = require("canvacard");
      canvacard.Canvas.tictactoe({ a1: "X", b1: "O", c1: "X", a2: "O", b2: "X", c2: "O", a3: "X", b3: "O", c3: "X" }, { bg: "white", bar: "black", x: "red", o: "blue" })
      .then(tictactoe => {
        canvacard.write(tictactoe, "tictactoe.png");
      })
      .catch(console.error);
     * ```
     * @param {object} fill Parámetros de TicTacToe
     * @param {"X"|"O"} [fill.a1] valor a1
     * @param {"X"|"O"} [fill.b1] valor b1
     * @param {"X"|"O"} [fill.c1] valor c1
     * @param {"X"|"O"} [fill.a2] valor a2
     * @param {"X"|"O"} [fill.b2] valor b2
     * @param {"X"|"O"} [fill.c2] valor c2
     * @param {"X"|"O"} [fill.a3] valor a3
     * @param {"X"|"O"} [fill.b3] valor b3
     * @param {"X"|"O"} [fill.c3] valor c3
     * @param {object} color Parámetros de color
     * @param {string} [color.bg] Color de fondo
     * @param {string} [color.bar] Color de la barra TicTacToe
     * @param {string} [color.x] Color de **X**
     * @param {string} [color.o] Color de **O**
     * @returns {Buffer}
     */
    static tictactoe(fill?: {
        a1?: "X" | "O";
        b1?: "X" | "O";
        c1?: "X" | "O";
        a2?: "X" | "O";
        b2?: "X" | "O";
        c2?: "X" | "O";
        a3?: "X" | "O";
        b3?: "X" | "O";
        c3?: "X" | "O";
    }, color?: {
        bg?: string;
        bar?: string;
        x?: string;
        o?: string;
    }): Buffer;
    /**
     * Opinión
     * @example
     * ```js
      const canvacard = require("canvacard");
      canvacard.Canvas.opinion("./image.png", "¡Esto es increíble!")
      .then(opinion => {
        canvacard.write(opinion, "opinion.png");
      })
      .catch(console.error);
     * ```
     * @param {string|Buffer} avatar Imagen
     * @param {string} msg Mensaje de opinión
     * @param {string} [font="Arial"] Familia tipográfica
     * @returns {Promise<Buffer>}
     */
    static opinion(avatar: string | Buffer, msg: string, font?: string): Promise<Buffer>;
    /**
     * Crea degradado
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
     * @returns {Buffer}
     */
    static gradient(colorFrom: string, colorTo: string, width: number, height: number): Buffer;
    /**
     * ¡Oh, no! Es estúpido.
     * @example
     * ```js
      const canvacard = require("canvacard");
      canvacard.Canvas.ohno("¡Esto es increíble!")
      .then(ohno => {
        canvacard.write(ohno, "ohno.png");
      })
      .catch(console.error);
     * ```
     * @param {string} msg Mensaje
     * @param {string} [font="Arial"] Familia tipográfica
     * @returns {Promise<Buffer>}
     */
    static ohno(msg: string, font?: string): Promise<Buffer>;
    /**
     * Cambiar de opinión (tomado de jgoralcz/image-microservice)
     * @example
     * ```js
      const canvacard = require("canvacard");
      canvacard.Canvas.changemymind("¡Esto es increíble!")
      .then(changemymind => {
        canvacard.write(changemymind, "changemymind.png");
      })
      .catch(console.error);
     * ```
     * @param {String} msg Mensaje
     * @param {String} [font="Arial"] Familia tipográfica
     * @see https://github.com/jgoralcz/image-microservice/blob/master/src/workers/canvas/ChangeMyMind.js
     * @returns {Promise<Buffer>}
     */
    static changemymind(msg: string, font?: string): Promise<Buffer>;
    /**
     * Clyde
     * @example
     * ```js
      const canvacard = require("canvacard");
      canvacard.Canvas.clyde("¡Esto es increíble!")
      .then(clyde => {
        canvacard.write(clyde, "clyde.png");
      })
      .catch(console.error);
     * ```
     * @param {string} msg Mensaje
     * @param {string} [font="Arial"] Familia tipográfica
     * @returns {Promise<Buffer>}
     */
    static clyde(msg: string, font?: string): Promise<Buffer>;
    /**
     * Cita falsa
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
     * @param {string} [font="Arial"] Familia tipográfica
     * @returns {Promise<Buffer>}
     */
    static quote(options?: {
        image?: Buffer | string;
        message?: string;
        username?: string;
        color?: string;
    }, font?: string): Promise<Buffer>;
    /**
     * Comentario de PornHub
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
     * @param {String} [font="Arial"] Familia tipográfica
     * @returns {Promise<Buffer>}
     */
    static phub(options?: {
        username?: string;
        message?: string;
        image?: string | Buffer;
    }, font?: string): Promise<Buffer>;
    /**
     * Wanted
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
     * @returns {Promise<Buffer>}
     */
    static wanted(image: string | Buffer): Promise<Buffer>;
    /**
     * Wasted
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
     * @returns {Promise<Buffer>}
     */
    static wasted(image: string | Buffer): Promise<Buffer>;
    /**
     * Comentario de YouTube
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
     * @returns {Promise<Buffer>}
     */
    static youtube(ops?: {
        username?: string;
        content?: string;
        avatar?: string | Buffer;
        dark?: boolean;
    }): Promise<Buffer>;
    /**
     * ¡Oh, mierda!
     * @example
     * ```js
      const canvacard = require("canvacard");
      canvacard.Canvas.shit("./shit.png")
      .then(shit => {
        canvacard.write(shit, "shit.png");
      })
      .catch(console.error);
     * ```
     * @param {string|Buffer} image Fuente de imagen
     * @returns {Promise<Buffer>}
     */
    static shit(image: string | Buffer): Promise<Buffer>;
    /**
     * Escribe los datos como archivo
     * @param {Buffer} data datos para escribir
     * @param {string} name nombre del archivo
     * @returns {void}
     */
    static write(data: Buffer, name: string): void;
    /**
     * Devuelve el icono predeterminado de un servidor de discord
     * @param {string} name Nombre del servidor
     * @param {number} size Icon size. Valid: `16`, `32`, `64`, `128`, `256`, `512`, `1024`, `2048` & `4096`
     * @returns {Promise<Buffer>}
     */
    static guildIcon(name: string, size?: number): Promise<Buffer>;
    /**
     * Clon de respuesta de discord
     * @param {object} options Opciones
     * @param {string|Buffer} [options.avatar1] Avatar de la persona que respondió
     * @param {string|Buffer} [options.avatar2] Avatar de la otra persona
     * @param {string} [options.user1] Nombre de usuario de la persona que respondió
     * @param {string} [options.user2] Nombre de usuario de la otra persona
     * @param {string} [options.hex1] Color hexadecimal de la persona que respondió
     * @param {string} [options.hex2] Color hexadecimal de la otra persona
     * @param {string} [options.mainText] El mensaje
     * @param {string} [options.replyText] El mensaje de respuesta
     * @returns {Promise<Buffer>}
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
     * Canvacard assets
     * @type {CanvacardAssets}
     * @private
     */
    private static get assets();
    /**
     * Método de Canvacard utilizado para `wait`.
     * @param {number} dur Número de milisegundos a esperar
     * @returns {Promise<void>}
     */
    static __wait(dur: number): Promise<void>;
    /**
     * Matriz de convolución Canvacard
     * @typedef {object} ConvolutionMatrix
     * @property {number[]} EDGES Edges Matrix
     * @property {number[]} BLUR Blur Matrix
     * @property {number[]} SHARPEN Sharpen Matrix
     * @property {number[]} BURN Burn Matrix
     */
    /**
     * Datos de matriz para **Canvacard.convolute()**
     * @type {ConvolutionMatrix}
     */
    static get CONVOLUTION_MATRIX(): {
        /**
         * Edges Matrix
         */
        EDGES: number[];
        /**
         * Blur Matrix
         */
        BLUR: number[];
        /**
         * Sharpen Matrix
         */
        SHARPEN: number[];
        /**
         * Burn Matrix
         */
        BURN: number[];
    };
}
//# sourceMappingURL=Canvacard.d.ts.map