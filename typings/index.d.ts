// generated by JSDOC

declare module 'canvacard' {
	import { Greeting } from 'discord-canvascard';
	/**
    * <p><strong>⚠ ¡No puede crear una instancia de la clase Canvacard! ⚠</strong></p>
    * @example
    * const Canvacard = require("canvacard");
  
    Canvacard.Canvas.trigger("./image.png")
    .then(triggered => {
        Canvacard.write(triggered, "triggered.gif");
    })
    */
	export class Canvacard {
		/**
		 * <p>Este método se puede utilizar para aplicar el efecto Disparado en la imagen.</p>
		 * @param image - <p>Imagen para activar</p>
		 */
		static trigger(image: string | Buffer): Promise<Buffer>;
		/**
		 * <p>Invierte el color de la imagen</p>
		 * @param image - <p>Imagen para invertir</p>
		 */
		static invert(image: string | Buffer): Promise<Buffer>;
		/**
		 * <p>Aplicar lavado sepia en imagen</p>
		 * @param image - <p>Imagen</p>
		 */
		static sepia(image: string | Buffer): Promise<Buffer>;
		/**
		 * <p>Efecto de escala de grises sobre la imagen</p>
		 * @param image - <p>Imagen</p>
		 */
		static greyscale(image: string | Buffer): Promise<Buffer>;
		/**
		 * <p>Editar el brillo de la imagen</p>
		 * @param image - <p>Imagen</p>
		 * @param amount - <p>Cantidad de brillo</p>
		 */
		static brightness(image: string | Buffer, amount: number): Promise<Buffer>;
		/**
		 * <p>Editar la oscuridad de la imagen</p>
		 * @param image - <p>Imagen</p>
		 * @param amount - <p>Cantidad de oscuridad</p>
		 */
		static darkness(image: string | Buffer, amount: number): Promise<Buffer>;
		/**
		 * <p>Umbral de imagen</p>
		 * @param img - <p>Image</p>
		 * @param amount - <p>Cantidad límite</p>
		 */
		static threshold(img: string | Buffer, amount: number): Promise<Buffer>;
		/**
		 * <p>Convolución de la imagen</p>
		 * @param img - <p>Imagen</p>
		 * @param matrix - <p>Matriz de convolución</p>
		 * @param opaque - <p>Si la convolución debe ser opaca</p>
		 */
		static convolute(img: string | Buffer, matrix: number[], opaque: boolean): Promise<Buffer>;
		/**
		 * <p>Crea barra de progreso</p>
		 * @param track - <p>Opciones de pista de la barra de progreso</p>
		 * @param [track.x] - <p>El eje x</p>
		 * @param [track.y] - <p>El eje y</p>
		 * @param [track.width] - <p>Ancho de pista de la barra de progreso</p>
		 * @param [track.height] - <p>Altura de la pista de la barra de progreso</p>
		 * @param [track.color] - <p>Color de la pista de la barra de progreso</p>
		 * @param [track.stroke] - <p>Usar trazo para pista</p>
		 * @param [track.lineWidth] - <p>Este parámetro se utilizará si <code>track.stroke</code> se establece en <code>true</code></p>
		 * @param bar - <p>Opciones de la barra de progreso</p>
		 * @param [bar.width] - <p>Ancho de la barra de progreso</p>
		 * @param [bar.color] - <p>Color de la barra de progreso</p>
		 */
		static createProgressBar(
			track: {
				x?: number;
				y?: number;
				width?: number;
				height?: number;
				color?: string;
				stroke?: boolean;
				lineWidth?: number;
			},
			bar: {
				width?: number;
				color?: string;
			}
		): Buffer;
		/**
		 * <p>Desenfocar una imagen</p>
		 * @param image - <p>Imagen para difuminar</p>
		 */
		static blur(image: string | Buffer): Promise<Buffer>;
		/**
		 * <p>Pixelar</p>
		 * @param image - <p>Imagen para pixelar</p>
		 * @param pixels - <p>Pixeles</p>
		 */
		static pixelate(image: string | Buffer, pixels?: number): Promise<Buffer>;
		/**
		 * <p>Agudizar una imagen</p>
		 * @param image - <p>Imagen para enfocar</p>
		 * @param lvl - <p>intensidad de la nitidez</p>
		 */
		static sharpen(image: string | Buffer, lvl?: number): Promise<Buffer>;
		/**
		 * <p>Aplica efecto de quemado en una imagen.</p>
		 * @param image - <p>Fuente de imagen</p>
		 * @param lvl - <p>intensidad</p>
		 */
		static burn(image: string | Buffer, lvl?: number): Promise<Buffer>;
		/**
		 * <p>HTML5 color a imagen</p>
		 * @param color - <p>Color HTML5</p>
		 * @param displayHex - <p>Si debe mostrar hexadecimal</p>
		 * @param height - <p>Altura de imagen</p>
		 * @param width - <p>Ancho de la imagen</p>
		 */
		static color(color?: string, displayHex?: boolean, height?: number, width?: number): Buffer;
		/**
		 * <p>Crea una imagen circular</p>
		 * @param image - <p>Fuente de imagen</p>
		 */
		static circle(image: string | Buffer): Promise<Buffer>;
		/**
		 * <p>Crea un rectángulo</p>
		 * @param x - <p>eje x</p>
		 * @param y - <p>eje y</p>
		 * @param width - <p>ancho</p>
		 * @param height - <p>altura</p>
		 * @param color - <p>color</p>
		 * @param stroke - <p>Si debe acariciar</p>
		 * @param lineWidth - <p>ancho de línea</p>
		 */
		static rectangle(x: number, y: number, width: number, height: number, color: string, stroke: boolean, lineWidth: number): Buffer;
		/**
		 * <p>Imágenes de fusion two</p>
		 * @param image1 - <p>Primera imagen</p>
		 * @param image2 - <p>Segunda imagen</p>
		 */
		static fuse(image1: string | Buffer, image2: string | Buffer): Promise<Buffer>;
		/**
		 * <p>Cambiar el tamaño de una imagen</p>
		 * @param image - <p>Fuente de imagen</p>
		 * @param width - <p>ancho</p>
		 * @param height - <p>altura</p>
		 */
		static resize(image: string | Buffer, width: number, height: number): Promise<Buffer>;
		/**
		 * <p>Besarse ( ͡° ͜ʖ ͡°)</p>
		 * @param image1 - <p>Primera imagen</p>
		 * @param image2 - <p>Segunda imagen</p>
		 */
		static kiss(image1: string | Buffer, image2: string | Buffer): Promise<Buffer>;
		/**
		 * <p>Azotar a alguien ( ͡° ͜ʖ ͡°)</p>
		 * @param image1 - <p>Primera imagen</p>
		 * @param image2 - <p>Segunda imagen</p>
		 */
		static spank(image1: string | Buffer, image2: string | Buffer): Promise<Buffer>;
		/**
		 * <p>Cargar fuentes</p>
		 * @param fontArray - <p>Matriz de fuentes</p>
		 */
		static registerFonts(fontArray: any[]): Promise<void>;
		/**
		 * <p>Abofetear a alguien ( ͡° ͜ʖ ͡°)</p>
		 * @param image1 - <p>Primera imagen</p>
		 * @param image2 - <p>Segunda imagen</p>
		 */
		static slap(image1: string | Buffer, image2: string | Buffer): Promise<Buffer>;
		/**
		 * <p>¿Oh esto? ¡Esto es hermoso!</p>
		 * @param image - <p>Fuente de imagen</p>
		 */
		static beautiful(image: string | Buffer): Promise<Buffer>;
		/**
		 * <p>facepalm</p>
		 * @param image - <p>imagen</p>
		 */
		static facepalm(image: string | Buffer): Promise<Buffer>;
		/**
		 * <p>Rainbow ( ͡° ͜ʖ ͡°)</p>
		 * @param image - <p>Fuente de imagen</p>
		 */
		static rainbow(image: string | Buffer): Promise<Buffer>;
		/**
		 * <p>&quot;F&quot; en el chat</p>
		 * @param image - <p>Fuente de imagen</p>
		 */
		static rip(image: string | Buffer): Promise<Buffer>;
		/**
		 * <p>¿Basura?</p>
		 * @param image - <p>Fuente de imagen</p>
		 */
		static trash(image: string | Buffer): Promise<Buffer>;
		/**
		 * <p>Peor que hitler</p>
		 * @param image - <p>Fuente de imagen</p>
		 */
		static hitler(image: string | Buffer): Promise<Buffer>;
		/**
		 * <p>Actualiza el color de la imagen</p>
		 * @param image - <p>Fuente de imagen</p>
		 * @param color - <p>Color HTML5</p>
		 */
		static colorfy(image: string | Buffer, color: string): Promise<Buffer>;
		/**
		 * <p>whoosh</p>
		 * @param image - <p>Fuente de imagen</p>
		 */
		static jokeOverHead(image: string | Buffer): Promise<Buffer>;
		/**
		 * <p>Novio distraído</p>
		 * @param image1 - <p>Rostro para la niña en color rojo.</p>
		 * @param image2 - <p>Cara para el chico</p>
		 * @param image3 - <p>Cara para la otra chica [opcional]</p>
		 */
		static distracted(image1: string | Buffer, image2: string | Buffer, image3: string | Buffer): Promise<Buffer>;
		/**
		 * <p>No, no afecta a mi bebé.</p>
		 * @param image - <p>Fuente de imagen</p>
		 */
		static affect(image: string | Buffer): Promise<Buffer>;
		/**
		 * <p>Celda</p>
		 * @param image - <p>Fuente de imagen</p>
		 * @param greyscale - <p>Si debe ser una imagen en escala de grises</p>
		 */
		static jail(image: string | Buffer, greyscale: boolean): Promise<Buffer>;
		/**
		 * <p>cama</p>
		 * @param image1 - <p>Primera imagen</p>
		 * @param image2 - <p>Segunda imagen</p>
		 */
		static bed(image1: string | Buffer, image2: string | Buffer): Promise<Buffer>;
		/**
		 * <p>Borrar</p>
		 * @param image - <p>Fuente de imagen</p>
		 * @param dark - <p>Si la imagen debe estar en modo oscuro</p>
		 */
		static delete(image: string | Buffer, dark: boolean): Promise<Buffer>;
		/**
		 * <p>TicTacToe</p>
		 * @param fill - <p>TicTacToe params</p>
		 * @param [fill.a1] - <p>valor a1</p>
		 * @param [fill.b1] - <p>valor b1</p>
		 * @param [fill.c1] - <p>valor c1</p>
		 * @param [fill.a2] - <p>valor a2</p>
		 * @param [fill.b2] - <p>valor b2</p>
		 * @param [fill.c2] - <p>valor c2</p>
		 * @param [fill.a3] - <p>valor a3</p>
		 * @param [fill.b3] - <p>valor b3</p>
		 * @param [fill.c3] - <p>valor c3</p>
		 * @param color - <p>Parámetros de color</p>
		 * @param [color.bg] - <p>Color de fondo</p>
		 * @param [color.bar] - <p>Color de la barra TicTacToe</p>
		 * @param [color.x] - <p>Color de <strong>X</strong></p>
		 * @param [color.o] - <p>Color de <strong>O</strong></p>
		 */
		static tictactoe(
			fill: {
				a1?: 'X' | 'O';
				b1?: 'X' | 'O';
				c1?: 'X' | 'O';
				a2?: 'X' | 'O';
				b2?: 'X' | 'O';
				c2?: 'X' | 'O';
				a3?: 'X' | 'O';
				b3?: 'X' | 'O';
				c3?: 'X' | 'O';
			},
			color: {
				bg?: string;
				bar?: string;
				x?: string;
				o?: string;
			}
		): Buffer;
		/**
		 * <p>Opinión</p>
		 * @param avatar - <p>Imagen</p>
		 * @param msg - <p>Mensaje</p>
		 */
		static opinion(avatar: string | Buffer, msg: string): Promise<Buffer>;
		/**
		 * <p>Crea degradado</p>
		 * @param colorFrom - <p>Color inicial</p>
		 * @param colorTo - <p>Color final</p>
		 * @param width - <p>Ancho de la imagen</p>
		 * @param height - <p>Altura de imagen</p>
		 */
		static gradient(colorFrom: string, colorTo: string, width: number, height: number): Buffer;
		/**
		 * <p>¡Oh, no! Es estúpido.</p>
		 * @param message - <p>Mensaje</p>
		 */
		static ohno(message: string): Promise<Buffer>;
		/**
		 * <p>Cambiar de opinión (tomado de jgoralcz / image-microservice)</p>
		 * @param text - <p>Texto</p>
		 */
		static changemymind(text: string): Promise<Buffer>;
		/**
		 * <p>Clyde</p>
		 * @param message - <p>Mensaje</p>
		 */
		static clyde(message: string): Promise<Buffer>;
		/**
		 * <p>Cita falsa</p>
		 * @param options - <p>Options</p>
		 * @param [options.image] - <p>Imagen</p>
		 * @param [options.message] - <p>Mensaje</p>
		 * @param [options.username] - <p>Nombre de usuario</p>
		 * @param [options.color] - <p>Color</p>
		 */
		static quote(options: { image?: Buffer | string; message?: string; username?: string; color?: string }): Promise<Buffer>;
		/**
		 * <p>Comentario de PornHub</p>
		 * @param options - <p>Opciones</p>
		 * @param [options.username] - <p>Nombre de usuario</p>
		 * @param [options.message] - <p>Comentario</p>
		 * @param [options.image] - <p>Imagen</p>
		 */
		static phub(options: { username?: string; message?: string; image?: string | Buffer }): Promise<Buffer>;
		/**
		 * <p>Wanted</p>
		 * @param image - <p>Fuente de imagen</p>
		 */
		static wanted(image: string | Buffer): Promise<Buffer>;
		/**
		 * <p>Wasted</p>
		 * @param image - <p>Fuente de imagen</p>
		 */
		static wasted(image: string | Buffer): Promise<Buffer>;
		/**
		 * <p>Comentario de YouTube</p>
		 * @param ops - <p>Opciones de comentarios de YouTube</p>
		 * @param [ops.username] - <p>Nombre de usuario del autor del comentario</p>
		 * @param [ops.content] - <p>El comentario</p>
		 * @param [ops.avatar] - <p>Fuente de avatar</p>
		 * @param [ops.dark = false] - <p>¿Modo oscuro?</p>
		 */
		static youtube(ops: { username?: string; content?: string; avatar?: string | Buffer; dark?: boolean }): Promise<Buffer>;
		/**
		 * <p>¡Oh, mierda!</p>
		 * @param image - <p>Fuente de imagen</p>
		 */
		static shit(image: string | Buffer): Promise<Buffer>;
		/**
		 * <p>Escribe los datos como archivo</p>
		 * @param data - <p>datos para escribir</p>
		 * @param name - <p>nombre del archivo</p>
		 */
		static write(data: Buffer, name: string): void;
		/**
		 * <p>Devuelve el icono predeterminado de un servidor de discord</p>
		 * @param name - <p>Nombre del servidor</p>
		 * @param size - <p>Tamaño de ícono. Válido: <code>16</code>, <code>32</code>, <code>64</code>, <code>128</code>, <code>256</code>, <code>512</code>, <code>1024</code>, <code>2048</code> &amp; <code>4096</code></p>
		 */
		static guildIcon(name: string, size?: number): Promise<Buffer>;
		/**
         * <p>Clon de respuesta de discord</p>
         * @example
         * const img = "https://cdn.discordapp.com/embed/avatars/0.png";
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
        * @param options - <p>Opciones</p>
        * @param [options.avatar1] - <p>Avatar de la persona que respondió</p>
        * @param [options.avatar2] - <p>Avatar de la otra persona</p>
        * @param [options.user1] - <p>Nombre de usuario de la persona que respondió</p>
        * @param [options.user2] - <p>Nombre de usuario de la otra persona</p>
        * @param [options.hex1] - <p>Color hexadecimal de la persona que respondió</p>
        * @param [options.hex2] - <p>Color hexadecimal de la otra persona</p>
        * @param [options.mainText] - <p>El mensaje</p>
        * @param [options.replyText] - <p>El mensaje de respuesta</p>
        */
		static reply(options: { avatar1?: string | Buffer; avatar2?: string | Buffer; user1?: string; user2?: string; hex1?: string; hex2?: string; mainText?: string; replyText?: string }): Promise<Buffer>;
		/**
		 * <p>Método Canvacard utilizado para <code>wait</code>.</p>
		 * @param dur - <p>Número de milisegundos a esperar</p>
		 */
		static __wait(dur: number): Promise<void>;
		/**
		 * <p>Datos de matriz para <strong>Canvacard.convolute()</strong></p>
		 */
		static CONVOLUTION_MATRIX: ConvolutionMatrix;
		/**
		 * <p>Utilidades de Canvacard</p>
		 */
		static Util: Util;
	}

	/**
	 * <p>Matriz de convolución Canvacard</p>
	 * @property EDGES - <p>Matriz de bordes</p>
	 * @property BLUR - <p>Matriz de desenfoque</p>
	 * @property SHARPEN - <p>Matriz de afilado</p>
	 * @property BURN - <p>Quemar matriz</p>
	 */
	export type ConvolutionMatrix = {
		EDGES: number[];
		BLUR: number[];
		SHARPEN: number[];
		BURN: number[];
	};

	/**
	 * <p>Creador de imágenes de bienvenida</p>
	 * @example
	 * const card = new canvacard.Welcomer()
	 *             .setAvatar(`https://cdn.discordapp.com/embed/avatars/0.png`);
	 *             .setBackground("COLOR", "#2c2f33" ||"IMAGE", `https://i.imgur.com/aClDVjh.jpg`);
	 *             .setTitulo("Titulo personalizable!");
	 *             .setSubtitulo("Subtitulo personalizable!");
	 *             .setColorTitulo("#FFFFFF");
	 *             .setColorSubtitulo("#5865f2");
	 *             .setColorCircle("#FFFFFF");
	 *             .setColorBorder("#000000");
	 *             .setOpacityBorder("0.4");
	 *             .setColor("border", "#4D5E94");
	 *             .setColor("titulo", "#4D5E94");
	 *             .setColor("subtitulo", "#4D5E94");
	 *             .setColor("avatar", "#4D5E94");
	 *         card.build()
	 *             .then(data => {
	 *                 canvacard.write(data, "welcomer.png");
	 *             })
	 */
	export class Welcomer {
		constructor();
		/**
		 * <p>Título creado con Canvacard</p>
		 */
		textTitle: string;
		/**
		 * <p>Subtítulo creado con Canvacard</p>
		 */
		textSubtitle: string;
		/**
		 * <p>Mensaje de texto creado con Canvacard</p>
		 */
		textMessage: string;
		/**
		 * <p>Borde de opacidad creado con canvacard</p>
		 */
		opacityBorder: string;
		/**
		 * <p>Color de borde creado con canvacard</p>
		 */
		colorBorder: string;
		/**
		 * <p>Color de círculo creado con canvacard</p>
		 */
		colorCircle: string;
		/**
		 * <p>Color de subtítulo creado con canvacard</p>
		 */
		colorSubtitle: string;
		/**
		 * <p>Color de título creado con canvacard</p>
		 */
		colorTitle: string;
		/**
		 * <p>Establecer color</p>
		 * @param color - <p>Código de color HTML5</p>
		 */
		setColor(id: 'title' | 'title-border' | 'avatar' | 'username' | 'username-box' | 'hashtag' | 'discriminator' | 'discriminator-box' | 'message' | 'message-box' | 'member-count' | 'background' | 'border', color: string): Welcomer;
		/**
		 * <p>Establecer opacidad</p>
		 * @param opacityBorder - <p>Código de opacidad HTML5</p>
		 */
		setOpacityBorder(opacityBorder: string): Greeting;
		/**
		 * <p>Establecer color</p>
		 * @param colorBorder - <p>Código de color HTML5</p>
		 */
		setColorBorder(colorBorder: string): Greeting;
		/**
		 * <p>Establecer color</p>
		 * @param colorCircle - <p>Código de color HTML5</p>
		 */
		setColorCircle(colorCircle: string): Greeting;
		/**
		 * <p>Establecer color</p>
		 * @param colorSubtitle - <p>Código de color HTML5</p>
		 */
		setColorSubtitulo(colorSubtitle: string): Greeting;
		/**
		 * <p>Establecer color</p>
		 * @param colorTitle - <p>Código de color HTML5</p>
		 */
		setColorTitulo(colorTitle: string): Greeting;
		/**
		 * <p>Recuento de miembros de ser</p>
		 * @param memberCount - <p>Recuento de miembros del gremio</p>
		 */
		setMemberCount(memberCount?: number | string): Welcomer;
		/**
		 * <p>Establecer subtítulo</p>
		 * @param textSubtitle - <p>Subtítulo para configurar</p>
		 */
		setSubtitulo(textSubtitle: string): Greeting;
		/**
		 * <p>Establecer título</p>
		 * @param textTitle - <p>Título para establecer</p>
		 */
		setTitulo(textTitle: string): Greeting;
		/**
		 * <p>Establecer imagen / color de fondo</p>
		 * @param type - <p>Tipo de fondo</p>
		 * @param [data] - <p>Color o imagen de fondo</p>
		 */
		setBackground(type: 'COLOR' | 'IMAGE', data?: string | Buffer): Greeting;
		/**
		 * <p>Avatar de usuario</p>
		 * @param data - <p>Datos de avatar</p>
		 */
		setAvatar(data: string | Buffer): Greeting;
		/**
		 * <p>Crea una imagen de bienvenida</p>
		 */
		build(ops: { fontX?: string; fontY?: string }): Promise<Buffer>;
	}
	/**
	 * <p>Generador de imágenes de abandono</p>
	 * @example
	 * const card = new canvacard.Leaver()
	 *             .setAvatar(`https://cdn.discordapp.com/embed/avatars/0.png`);
	 *             .setBackground("COLOR", "#2c2f33" ||"IMAGE", `https://i.imgur.com/aClDVjh.jpg`);
	 *             .setTitulo("Titulo personalizable!");
	 *             .setSubtitulo("Subtitulo personalizable!");
	 *             .setColorTitulo("#FFFFFF");
	 *             .setColorSubtitulo("#5865f2");
	 *             .setColorCircle("#FFFFFF");
	 *             .setColorBorder("#000000");
	 *             .setOpacityBorder("0.4");
	 *             .setColor("border", "#4D5E94");
	 *             .setColor("titulo", "#4D5E94");
	 *             .setColor("subtitulo", "#4D5E94");
	 *             .setColor("avatar", "#4D5E94");
	 *         card.build()
	 *             .then(data => {
	 *                 canvacard.write(data, "leaver.png");
	 *             })
	 */
	export class Leaver {
		constructor();
		/**
		 * <p>Título creado con Canvacard</p>
		 */
		textTitle: string;
		/**
		 * <p>Subtítulo creado con Canvacard</p>
		 */
		textSubtitle: string;
		/**
		 * <p>Mensaje de texto creado con Canvacard</p>
		 */
		textMessage: string;
		/**
		 * <p>Borde de opacidad creado con canvacard</p>
		 */
		opacityBorder: string;
		/**
		 * <p>Color de borde creado con canvacard</p>
		 */
		colorBorder: string;
		/**
		 * <p>Color de círculo creado con canvacard</p>
		 */
		colorCircle: string;
		/**
		 * <p>Color de subtítulo creado con canvacard</p>
		 */
		colorSubtitle: string;
		/**
		 * <p>Color de título creado con canvacard</p>
		 */
		colorTitle: string;
		/**
		 * <p>Establecer color</p>
		 * @param color - <p>Código de color HTML5</p>
		 */
		setColor(id: 'title' | 'title-border' | 'avatar' | 'username' | 'username-box' | 'hashtag' | 'discriminator' | 'discriminator-box' | 'message' | 'message-box' | 'member-count' | 'background' | 'border', color: string): Welcomer;
		/**
		 * <p>Establecer opacidad</p>
		 * @param opacityBorder - <p>Código de opacidad HTML5</p>
		 */
		setOpacityBorder(opacityBorder: string): Greeting;
		/**
		 * <p>Establecer color</p>
		 * @param colorBorder - <p>Código de color HTML5</p>
		 */
		setColorBorder(colorBorder: string): Greeting;
		/**
		 * <p>Establecer color</p>
		 * @param colorCircle - <p>Código de color HTML5</p>
		 */
		setColorCircle(colorCircle: string): Greeting;
		/**
		 * <p>Establecer color</p>
		 * @param colorSubtitle - <p>Código de color HTML5</p>
		 */
		setColorSubtitulo(colorSubtitle: string): Greeting;
		/**
		 * <p>Establecer color</p>
		 * @param colorTitle - <p>Código de color HTML5</p>
		 */
		setColorTitulo(colorTitle: string): Greeting;
		/**
		 * <p>Recuento de miembros de ser</p>
		 * @param memberCount - <p>Recuento de miembros del gremio</p>
		 */
		setMemberCount(memberCount?: number | string): Welcomer;
		/**
		 * <p>Establecer subtítulo</p>
		 * @param textSubtitle - <p>Subtítulo para configurar</p>
		 */
		setSubtitulo(textSubtitle: string): Greeting;
		/**
		 * <p>Establecer título</p>
		 * @param textTitle - <p>Título para establecer</p>
		 */
		setTitulo(textTitle: string): Greeting;
		/**
		 * <p>Establecer imagen / color de fondo</p>
		 * @param type - <p>Tipo de fondo</p>
		 * @param [data] - <p>Color o imagen de fondo</p>
		 */
		setBackground(type: 'COLOR' | 'IMAGE', data?: string | Buffer): Greeting;
		/**
		 * <p>Avatar de usuario</p>
		 * @param data - <p>Datos de avatar</p>
		 */
		setAvatar(data: string | Buffer): Greeting;
		/**
		 * <p>Crea una imagen de abandono</p>
		 */
		build(ops: { fontX?: string; fontY?: string }): Promise<Buffer>;
	}

	/**
	 * @property circle - <p>Complemento de círculo</p>
	 * @property convolute - <p>Complemento convolute</p>
	 * @property rectangle - <p>Complemento de rectángulo</p>
	 * @property round - <p>Complemento redondo</p>
	 * @property abbrev - <p>Complemento de abreviaturas</p>
	 * @property renderEmoji - <p>Complemento de renderizado de emoji</p>
	 */
	export type Plugins = {
		circle: (...params: any[]) => any;
		convolute: (...params: any[]) => any;
		rectangle: (...params: any[]) => any;
		round: (...params: any[]) => any;
		abbrev: (...params: any[]) => any;
		renderEmoji: (...params: any[]) => any;
	};

	/**
	 * <p>Canvacard Util</p>
	 */
	export class Util {
		constructor();
		/**
		 * <p>Valida hexadecimal</p>
		 * @param hex - <p>Código hexadecimal para validar</p>
		 */
		static validateHex(hex: string): boolean;
		/**
		 * <p>Convierte la marca de tiempo regular en discordia como el tiempo</p>
		 * @param time - <p>Marca de tiempo para convertir</p>
		 */
		static discordTime(time: Date | number): string;
		/**
		 * <p>Formatea la hora</p>
		 * @param time - <p>Hora de formatear</p>
		 */
		static formatTime(time: number): string;
		/**
		 * <p>Acortar el texto.</p>
		 * @param text - <p>Texto para acortar</p>
		 * @param len - <p>Longitud máxima</p>
		 */
		static shorten(text: string, len: number): string;
		/**
		 * <p>Convierte números en unidades como <code>1K</code>, <code>1M</code>, <code>1B</code> etc.</p>
		 */
		static toAbbrev(num: number | string): void;
		/**
		 * <p>Renderiza texto con emoji</p>
		 * @param ctx - <p>CanvasRenderingContext2D</p>
		 * @param msg - <p>Mensaje</p>
		 * @param x - <p>X</p>
		 * @param y - <p>Y</p>
		 */
		static renderEmoji(ctx: CanvasRenderingContext2D, msg: string, x: number, y: number): Promise<void>;
		/**
		 * <p>Devuelve código hexadecimal con formato</p>
		 * @param hex - <p>Código hexadecimal para formatear</p>
		 * @param alt - <p>Color alternativo</p>
		 */
		static formatHex(hex: string, alt?: string): string;
		/**
		 * <p>Invierte el color hexadecimal</p>
		 * @param hex - <p>Código de color hexadecimal para invertir</p>
		 */
		static invertColor(hex: string): string;
		/**
		 * <p>Devuelve el acrónimo</p>
		 * @param name - <p>Nombre para analizar el acrónimo</p>
		 */
		static getAcronym(name: string): string;
		/**
		 * <p>Devuelve una matriz de líneas</p>
		 * @param params - <p>Parámetros</p>
		 * @param text - <p>Texto</p>
		 * @param ctx - <p>CanvasRenderingContext2D</p>
		 * @param maxWidth - <p>Anchura máxima</p>
		 */
		static getLines(params: any, text: string, ctx: CanvasRenderingContext2D, maxWidth: number): string[];
	}
}
