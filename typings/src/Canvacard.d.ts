export = Canvacard;
/**
 * Canvacard Generador De Memes
 */
declare class Canvacard {
    /**
     * Este método se puede utilizar para aplicar el efecto Disparado en la imagen.
     * @param {string|Buffer} image Imagen para activar
     * @returns {Promise<Buffer>}
     */
    static trigger(image: string | Buffer): Promise<Buffer>;
    /**
     * Invierte el color de la imagen
     * @param {string|Buffer} image Imagen para invertir
     * @returns {Promise<Buffer>}
     */
    static invert(image: string | Buffer): Promise<Buffer>;
    /**
     * Aplicar lavado sepia en img
     * @param {string|Buffer} image Imagen
     * @returns {Promise<Buffer>}
     */
    static sepia(image: string | Buffer): Promise<Buffer>;
    /**
     * Efecto de escala de grises sobre la imagen
     * @param {string|Buffer} image Imagen
     * @returns {Promise<Buffer>}
     */
    static greyscale(image: string | Buffer): Promise<Buffer>;
    /**
     * Editar el brillo de la imagen
     * @param {string|Buffer} image Imagen
     * @param {number} amount Cantidad de brillo
     * @returns {Promise<Buffer>}
     */
    static brightness(image: string | Buffer, amount: number): Promise<Buffer>;
    /**
     * Editar la oscuridad de la imagen
     * @param {string|Buffer} image Imagen
     * @param {number} amount Cantidad de oscuridad
     * @returns {Promise<Buffer>}
     */
    static darkness(image: string | Buffer, amount: number): Promise<Buffer>;
    /**
     * Umbral de imagen
     * @param {string|Buffer} img Imagen
     * @param {number} amount Cantidad límite
     * @returns {Promise<Buffer>}
     */
    static threshold(img: string | Buffer, amount: number): Promise<Buffer>;
    /**
     * Convolución de la imagen
     * @param {string|Buffer} img Imagen
     * @param {number[]} matrix Matriz de convolución
     * @param {boolean} opaque Si la convolución debe ser opaca
     * @returns {Promise<Buffer>}
     */
    static convolute(img: string | Buffer, matrix: number[], opaque: boolean): Promise<Buffer>;
    /**
     * Crea barra de progreso
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
     * @param {string|Buffer} image Imagen para difuminar
     * @returns {Promise<Buffer>}
     */
    static blur(image: string | Buffer): Promise<Buffer>;
    /**
     * Pixelar
     * @param {string|Buffer} image Imagen para pixelar
     * @param {number} pixels Pixeles
     * @returns {Promise<Buffer>}
     */
    static pixelate(image: string | Buffer, pixels?: number): Promise<Buffer>;
    /**
     * Agudizar una imagen
     * @param {string|Buffer} image Imagen para enfocar
     * @param {number} lvl intensidad de la nitidez
     * @returns {Promise<Buffer>}
     */
    static sharpen(image: string | Buffer, lvl?: number): Promise<Buffer>;
    /**
     * Aplica efecto de quemado en una imagen.
     * @param {string|Buffer} image Fuente de imagen
     * @param {number} lvl intensidad
     * @returns {Promise<Buffer>}
     */
    static burn(image: string | Buffer, lvl?: number): Promise<Buffer>;
    /**
     * HTML5 color a imagen
     * @param {string} color Color HTML5
     * @param {boolean} displayHex Si debe mostrar hexadecimal
     * @param {number} height Altura de imagen
     * @param {number} width Ancho de la imagen
     * @param {string} [font="Arial"] Familia tipográfica
     * @returns {Buffer}
     */
    static color(color?: string, displayHex?: boolean, height?: number, width?: number, font?: string): Buffer;
    /**
     * Crea una imagen circular
     * @param {string|Buffer} image Fuente de imagen
     * @returns {Promise<Buffer>}
     */
    static circle(image: string | Buffer): Promise<Buffer>;
    /**
     * Crea un rectángulo
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
     * Imágenes de fusion two
     * @param {string|Buffer} image1 Primera imagen
     * @param {string|Buffer} image2 Segunda imagen
     * @returns {Promise<Buffer>}
     */
    static fuse(image1: string | Buffer, image2: string | Buffer): Promise<Buffer>;
    /**
     * Cambiar el tamaño de una imagen
     * @param {string|Buffer} image Fuente de imagen
     * @param {number} width ancho
     * @param {number} height altura
     * @returns {Promise<Buffer>}
     */
    static resize(image: string | Buffer, width: number, height: number): Promise<Buffer>;
    /**
     * Besarse ( ͡° ͜ʖ ͡°)
     * @param {string|Buffer} image1 Primera imagen
     * @param {string|Buffer} image2 Segunda imagen
     * @returns {Promise<Buffer>}
     */
    static kiss(image1: string | Buffer, image2: string | Buffer): Promise<Buffer>;
    /**
     * Azotar a alguien ( ͡° ͜ʖ ͡°)
     * @param {string|Buffer} image1 Primera imagen
     * @param {string|Buffer} image2 Segunda imagen
     * @returns {Promise<Buffer>}
     */
    static spank(image1: string | Buffer, image2: string | Buffer): Promise<Buffer>;
    /**
     * Abofetear a alguien ( ͡° ͜ʖ ͡°)
     * @param {string|Buffer} image1 Primera imagen
     * @param {string|Buffer} image2 Segunda imagen
     * @returns {Promise<Buffer>}
     */
    static slap(image1: string | Buffer, image2: string | Buffer): Promise<Buffer>;
    /**
     * ¿Oh esto? ¡Esto es hermoso!
     * @param {string|Buffer} image Fuente de imagen
     * @returns {Promise<Buffer>}
     */
    static beautiful(image: string | Buffer): Promise<Buffer>;
    /**
     * facepalm
     * @param {string|Buffer} image Fuente de imagen
     * @returns {Promise<Buffer>}
     */
    static facepalm(image: string | Buffer): Promise<Buffer>;
    /**
     * Rainbow ( ͡° ͜ʖ ͡°)
     * @param {string|Buffer} image Fuente de imagen
     * @returns {Promise<Buffer>}
     */
    static rainbow(image: string | Buffer): Promise<Buffer>;
    /**
     * "F" en el chat
     * @param {string|Buffer} image Fuente de imagen
     * @returns {Promise<Buffer>}
     */
    static rip(image: string | Buffer): Promise<Buffer>;
    /**
     * ¿Basura?
     * @param {string|Buffer} image Fuente de imagen
     * @returns {Promise<Buffer>}
     */
    static trash(image: string | Buffer): Promise<Buffer>;
    /**
     * Peor que hitler
     * @param {string|Buffer} image Fuente de imagen
     * @returns {Promise<Buffer>}
     */
    static hitler(image: string | Buffer): Promise<Buffer>;
    /**
     * Actualiza el color de la imagen
     * @param {string|Buffer} image Fuente de imagen
     * @param {string} color Color HTML5
     * @returns {Promise<Buffer>}
     */
    static colorfy(image: string | Buffer, color: string): Promise<Buffer>;
    /**
     * whoosh
     * @param {string|Buffer} image Fuente de imagen
     * @returns {Promise<Buffer>}
     */
    static jokeOverHead(image: string | Buffer): Promise<Buffer>;
    /**
     * Novio distraído
     * @param {string|Buffer} image1 Rostro para la niña en color rojo.
     * @param {string|Buffer} image2 Cara para el chico
     * @param {string|Buffer} image3 Cara para la otra chica [opcional]
     * @returns {Promise<Buffer>}
     */
    static distracted(image1: string | Buffer, image2: string | Buffer, image3?: string | Buffer): Promise<Buffer>;
    /**
     * No, no afecta a mi bebé.
     * @param {string|Buffer} image Fuente de imagen
     * @returns {Promise<Buffer>}
     */
    static affect(image: string | Buffer): Promise<Buffer>;
    /**
     * Celda
     * @param {string|Buffer} image Fuente de imagen
     * @param {boolean} greyscale Si debe ser una imagen en escala de grises
     * @returns {Promise<Buffer>}
     */
    static jail(image: string | Buffer, greyscale?: boolean): Promise<Buffer>;
    /**
     * cama
     * @param {string|Buffer} image1 Primera imagen
     * @param {string|Buffer} image2 Segunda imagen
     * @returns {Promise<Buffer>}
     */
    static bed(image1: string | Buffer, image2: string | Buffer): Promise<Buffer>;
    /**
     * Borrar
     * @param {string|Buffer} image Fuente de imagen
     * @param {boolean} dark Si la imagen debe estar en modo oscuro
     * @returns {Promise<Buffer>}
     */
    static delete(image: string | Buffer, dark?: boolean): Promise<Buffer>;
    /**
     * TicTacToe
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
     * @param {string|Buffer} avatar Imagen
     * @param {string} msg Mensaje de opinión
     * @param {string} [font="Arial"] Familia tipográfica
     * @returns {Promise<Buffer>}
     */
    static opinion(avatar: string | Buffer, msg: string, font?: string): Promise<Buffer>;
    /**
     * Crea degradado
     * @param {string} colorFrom Color inicial
     * @param {string} colorTo Color final
     * @param {number} width Ancho de la imagen
     * @param {number} height Altura de imagen
     * @returns {Buffer}
     */
    static gradient(colorFrom: string, colorTo: string, width: number, height: number): Buffer;
    /**
     * ¡Oh, no! Es estúpido.
     * @param {string} msg Mensaje
     * @param {string} [font="Arial"] Familia tipográfica
     * @returns {Promise<Buffer>}
     */
    static ohno(msg: string, font?: string): Promise<Buffer>;
    /**
     * Cambiar de opinión (tomado de jgoralcz/image-microservice)
     * @param {String} msg Mensaje
     * @param {String} [font="Arial"] Familia tipográfica
     * @see https://github.com/jgoralcz/image-microservice/blob/master/src/workers/canvas/ChangeMyMind.js
     * @returns {Promise<Buffer>}
     */
    static changemymind(msg: string, font?: string): Promise<Buffer>;
    /**
     * Clyde
     * @param {string} msg Mensaje
     * @param {string} [font="Arial"] Familia tipográfica
     * @returns {Promise<Buffer>}
     */
    static clyde(msg: string, font?: string): Promise<Buffer>;
    /**
     * Cita falsa
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
     * @param {string|Buffer} image Fuente de imagen
     * @returns {Promise<Buffer>}
     */
    static wanted(image: string | Buffer): Promise<Buffer>;
    /**
     * Wasted
     * @param {string|Buffer} image Fuente de imagen
     * @returns {Promise<Buffer>}
     */
    static wasted(image: string | Buffer): Promise<Buffer>;
    /**
     * Comentario de YouTube
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