const Trigger = require('../libs/Trigger');
const Greyscale = require('../libs/Greyscale');
const Invert = require('../libs/Invert');
const Sepia = require('../libs/Sepia');
const assets = require('./Assets');
const fs = require('fs');
const Brightness = require('../libs/Brightness');
const Threshold = require('../libs/Threshold');
const Convolute = require('../libs/Convolute');
const rect = require('../plugins/rect');
const Canvas = require('canvas');
const Darkness = require('../libs/Darkness');
const circle = require('../plugins/circle');
const round = require('../plugins/round');
const Util = require('./Util');

/**
 * Canvacard Generador De Memes
 * @example const Canvacard = require("canvacard");
 *
 * Canvacard.Canvas.trigger("./image.png")
 *  .then(triggered => {
 *      Canvacard.write(triggered, "triggered.gif");
 *  })
 */
class Canvacard {
	/**
	 * **⚠ ¡No puede crear una instancia de la clase Canvacard!⚠**
	 * @hideconstructor
	 */
	constructor() {
		throw new Error(`The ${this.constructor.name} class may not be instantiated!`);
	}

	/**
	 * Este método se puede utilizar para aplicar el efecto Disparado en la imagen.
	 * @param {string|Buffer} image Imagen para activar
	 * @returns {Promise<Buffer>}
	 */
	static async trigger(image) {
		if (!image) throw new Error('Imagen esperada, no recibí nada!');
		await Canvacard.__wait();
		return await Trigger(image, Canvacard.assets.image.get('TRIGGERED'));
	}

	/**
	 * Invierte el color de la imagen
	 * @param {string|Buffer} image Imagen para invertir
	 * @returns {Promise<Buffer>}
	 */
	static async invert(image) {
		if (!image) throw new Error('Imagen esperada, no recibí nada!');
		return await Invert(image);
	}

	/**
	 * Aplicar lavado sepia en img
	 * @param {string|Buffer} image Imagen
	 * @returns {Promise<Buffer>}
	 */
	static async sepia(image) {
		if (!image) throw new Error('Imagen esperada, no recibí nada!');
		return await Sepia(image);
	}

	/**
	 * Efecto de escala de grises sobre la imagen
	 * @param {string|Buffer} image Imagen
	 * @returns {Promise<Buffer>}
	 */
	static async greyscale(image) {
		if (!image) throw new Error('Imagen esperada, no recibí nada!');
		return await Greyscale(image);
	}

	/**
	 * Editar el brillo de la imagen
	 * @param {string|Buffer} image Imagen
	 * @param {number} amount Cantidad de brillo
	 * @returns {Promise<Buffer>}
	 */
	static async brightness(image, amount) {
		if (!image) throw new Error('Imagen esperada, no recibí nada!');
		if (isNaN(amount)) throw new Error('¡La cantidad debe ser un número!');
		return await Brightness(image, amount);
	}

	/**
	 * Editar la oscuridad de la imagen
	 * @param {string|Buffer} image Imagen
	 * @param {number} amount Cantidad de oscuridad
	 * @returns {Promise<Buffer>}
	 */
	static async darkness(image, amount) {
		if (!image) throw new Error('Imagen esperada, no recibí nada!');
		if (isNaN(amount)) throw new Error('¡La cantidad debe ser un número!');
		return await Darkness(image, amount);
	}

	/**
	 * Umbral de imagen
	 * @param {string|Buffer} img Imagen
	 * @param {number} amount Cantidad límite
	 * @returns {Promise<Buffer>}
	 */
	static async threshold(img, amount) {
		if (!img) throw new Error('Imagen esperada, no recibí nada!');
		if (isNaN(amount)) throw new Error('¡La cantidad debe ser un número!');
		return await Threshold(img, amount);
	}

	/**
	 * Convolución de la imagen
	 * @param {string|Buffer} img Imagen
	 * @param {number[]} matrix Matriz de convolución
	 * @param {boolean} opaque Si la convolución debe ser opaca
	 * @returns {Promise<Buffer>}
	 */
	static async convolute(img, matrix, opaque) {
		if (!img) throw new Error('Imagen esperada, no recibí nada!');
		if (!Array.isArray(matrix)) throw new Error('La matriz de convolución debe ser Array.');
		return await Convolute(img, matrix, opaque);
	}

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
	static createProgressBar(track = { x: false, y: false, width: false, height: false, color: false, stroke: false, lineWidth: false }, bar = { width: false, color: false }) {
		if (!track) throw new Error('¡Args de pista no válidos!');
		if (!bar) throw new Error('¡Args de la barra de progreso no válidos!');

		const canvas = Canvas.createCanvas(track.width, track.height);
		const ctx = canvas.getContext('2d');

		if (bar.width > track.width) bar.width = track.width;
		if (bar.width < 0) bar.width = 0;

		if (track.stroke) {
			rect(ctx, track.x, track.y, track.height, bar.width, bar.color, false);
			rect(ctx, track.x, track.y, track.height, track.width, track.color, track.stroke, track.lineWidth);
		} else {
			rect(ctx, track.x, track.y, track.height, track.width, track.color, track.stroke, track.lineWidth);
			rect(ctx, track.x, track.y, track.height, bar.width, bar.color, false);
		}

		return canvas.toBuffer();
	}

	/**
	 * Desenfocar una imagen
	 * @param {string|Buffer} image Imagen para difuminar
	 * @returns {Promise<Buffer>}
	 */
	static async blur(image) {
		if (!image) throw new Error('¡La imagen no fue proporcionada!');
		const img = await Canvas.loadImage(image);
		const canvas = Canvas.createCanvas(img.width, img.height);
		const ctx = canvas.getContext('2d');

		ctx.fillStyle = '#ffffff';
		ctx.fillRect(0, 0, canvas.width, canvas.height);
		ctx.drawImage(img, 0, 0, canvas.width / 4, canvas.height / 4);
		ctx.imageSmoothingEnabled = true;
		ctx.drawImage(canvas, 0, 0, canvas.width / 4, canvas.height / 4, 0, 0, canvas.width + 5, canvas.height + 5);

		return canvas.toBuffer();
	}

	/**
	 * Pixelar
	 * @param {string|Buffer} image Imagen para pixelar
	 * @param {number} pixels Pixeles
	 * @returns {Promise<Buffer>}
	 */
	static async pixelate(image, pixels = 5) {
		if (!image) throw new Error('¡La imagen no fue proporcionada!');
		if (!pixels || typeof pixels !== 'number') pixels = 100;
		if (pixels < 1) pixels = 100;
		if (pixels > 100) pixels = 100;

		const img = await Canvas.loadImage(image);
		const canvas = Canvas.createCanvas(img.width, img.height);
		const ctx = canvas.getContext('2d');
		const pixel = pixels / 100;

		ctx.drawImage(img, 0, 0, canvas.width * pixel, canvas.height * pixel);
		ctx.imageSmoothingEnabled = false;
		ctx.drawImage(canvas, 0, 0, canvas.width * pixel, canvas.height * pixel, 0, 0, canvas.width + 5, canvas.height + 5);

		return canvas.toBuffer();
	}

	/**
	 * Agudizar una imagen
	 * @param {string|Buffer} image Imagen para enfocar
	 * @param {number} lvl intensidad de la nitidez
	 * @returns {Promise<Buffer>}
	 */
	static async sharpen(image, lvl = 1) {
		if (!image) throw new Error('¡La imagen no fue proporcionada!');
		return await Convolute(image, Canvacard.CONVOLUTION_MATRIX.SHARPEN, true, lvl);
	}

	/**
	 * Aplica efecto de quemado en una imagen.
	 * @param {string|Buffer} image Fuente de imagen
	 * @param {number} lvl intensidad
	 * @returns {Promise<Buffer>}
	 */
	static async burn(image, lvl = 1) {
		if (!image) throw new Error('¡La imagen no fue proporcionada!');
		return await Convolute(image, Canvacard.CONVOLUTION_MATRIX.BURN, true, lvl);
	}

	/**
	 * HTML5 color a imagen
	 * @param {string} color Color HTML5
	 * @param {boolean} displayHex Si debe mostrar hexadecimal
	 * @param {number} height Altura de imagen
	 * @param {number} width Ancho de la imagen
	 * @returns {Buffer}
	 */
	static color(color = '#FFFFFF', displayHex = false, height = 1024, width = 1024) {
		const canvas = Canvas.createCanvas(width, height);
		const ctx = canvas.getContext('2d');

		rect(ctx, 0, 0, height, width, color);

		if (!!displayHex) {
			const ic = Util.invertColor(color);
			ctx.font = 'bold 72px Manrope';
			ctx.fillStyle = ic;
			ctx.fillText(color.toUpperCase(), canvas.width / 3, canvas.height / 2);
		}

		return canvas.toBuffer();
	}

	/**
	 * Crea una imagen circular
	 * @param {string|Buffer} image Fuente de imagen
	 * @returns {Promise<Buffer>}
	 */
	static async circle(image) {
		if (!image) throw new Error('¡La imagen no fue proporcionada!');
		const img = await Canvas.loadImage(image);
		const canvas = Canvas.createCanvas(img.width, img.height);
		const ctx = canvas.getContext('2d');
		ctx.drawImage(img, 0, 0);
		circle(ctx, canvas.width, canvas.height);
		return canvas.toBuffer();
	}

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
	static rectangle(x, y, width, height, color, stroke, lineWidth) {
		const canvas = Canvas.createCanvas(width, height);
		const ctx = canvas.getContext('2d');
		rect(ctx, x, y, canvas.height, canvas.width, color, !!stroke, lineWidth);
		round(ctx, x, y, canvas.width, canvas.height);
		return canvas.toBuffer();
	}

	/**
	 * Imágenes de fusion two
	 * @param {string|Buffer} image1 Primera imagen
	 * @param {string|Buffer} image2 Segunda imagen
	 * @returns {Promise<Buffer>}
	 */
	static async fuse(image1, image2) {
		if (!image1) throw new Error("Falta el parámetro 'imagen1'.");
		if (!image2) throw new Error("Falta el parámetro 'imagen2'.");

		const img1 = await Canvas.loadImage(image1);
		const img2 = await Canvas.loadImage(image2);

		const canvas = Canvas.createCanvas(img1.width, img1.height);
		const ctx = canvas.getContext('2d');
		ctx.globalAlpha = 0.5;
		ctx.drawImage(img1, 0, 0);
		ctx.drawImage(img2, 0, 0, canvas.width, canvas.height);

		return canvas.toBuffer();
	}

	/**
	 * Cambiar el tamaño de una imagen
	 * @param {string|Buffer} image Fuente de imagen
	 * @param {number} width ancho
	 * @param {number} height altura
	 * @returns {Promise<Buffer>}
	 */
	static async resize(image, width, height) {
		if (!image) throw new Error('¡La imagen no fue proporcionada!');
		const img = await Canvas.loadImage(image);
		const w = width && !isNaN(width) ? width : img.width;
		const h = height && !isNaN(height) ? width : img.height;
		const canvas = await Canvas.createCanvas(w, h);
		const ctx = canvas.getContext('2d');
		ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
		return canvas.toBuffer();
	}

	/**
	 * Besarse ( ͡° ͜ʖ ͡°)
	 * @param {string|Buffer} image1 Primera imagen
	 * @param {string|Buffer} image2 Segunda imagen
	 * @returns {Promise<Buffer>}
	 */
	static async kiss(image1, image2) {
		if (!image1) throw new Error('¡La primera imagen no fue proporcionada!');
		if (!image2) throw new Error('¡La segunda imagen no fue proporcionada!');
		await this.__wait();
		const canvas = Canvas.createCanvas(768, 574);
		const ctx = canvas.getContext('2d');
		const background = await Canvas.loadImage(Canvacard.assets.image.get('KISS'));
		ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
		const avatar = await Canvas.loadImage(image1);
		const avatar1 = await Canvas.loadImage(image2);
		ctx.drawImage(avatar1, 370, 25, 200, 200);
		ctx.drawImage(avatar, 150, 25, 200, 200);
		return canvas.toBuffer();
	}

	/**
	 * Azotar a alguien ( ͡° ͜ʖ ͡°)
	 * @param {string|Buffer} image1 Primera imagen
	 * @param {string|Buffer} image2 Segunda imagen
	 * @returns {Promise<Buffer>}
	 */
	static async spank(image1, image2) {
		if (!image1) throw new Error('¡La primera imagen no fue proporcionada!');
		if (!image2) throw new Error('¡La segunda imagen no fue proporcionada!');
		await this.__wait();
		const canvas = Canvas.createCanvas(500, 500);
		const ctx = canvas.getContext('2d');
		const background = await Canvas.loadImage(Canvacard.assets.image.get('SPANK'));
		ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
		const avatar = await Canvas.loadImage(image1);
		const avatar1 = await Canvas.loadImage(image2);
		ctx.drawImage(avatar1, 350, 220, 120, 120);
		ctx.drawImage(avatar, 225, 5, 140, 140);
		return canvas.toBuffer();
	}

	/**
	 * Cargar fuentes
	 * @param {any[]} fontArray Matriz de fuentes
	 * @returns {Promise<void>}
	 */
	static async registerFonts(fontArray = []) {
		if (!Canvacard.assets.font.loaded) await Canvacard.assets.font.load();
		if (!Canvacard.assets.image.loaded) await Canvacard.assets.image.load();

		if (!fontArray.length) {
			await Canvacard.__wait();
			// Default fonts
			Canvas.registerFont(Canvacard.assets.font.get('UNI_SANS'), {
				family: 'Sans Heavy',
				weight: 'bold',
				style: 'normal'
			});

			Canvas.registerFont(Canvacard.assets.font.get('BURBANK_BIG_CONSDENSED'), {
				family: 'Burkank Big Condensed'
			});

			Canvas.registerFont(Canvacard.assets.font.get('KEEP_CALM_MED'), {
				family: 'Keep Calm Medium'
			});

			Canvas.registerFont(Canvacard.assets.font.get('LUCKIEST_GUY'), {
				family: 'Luckiest Guy'
			});

			Canvas.registerFont(Canvacard.assets.font.get('MANROPE_BOLD'), {
				family: 'Manrope Bold',
				weight: 'bold',
				style: 'normal'
			});

			Canvas.registerFont(Canvacard.assets.font.get('MANROPE_REGULAR'), {
				family: 'Manrope',
				weight: 'regular',
				style: 'normal'
			});

			Canvas.registerFont(Canvacard.assets.font.get('ROBOTO_BLACK'), {
				family: 'Roboto Black',
				weight: 'black',
				style: 'normal'
			});

			Canvas.registerFont(Canvacard.assets.font.get('ROBOTO_LIGHT'), {
				family: 'Roboto Light',
				weight: 'light',
				style: 'normal'
			});

			Canvas.registerFont(Canvacard.assets.font.get('ROBOTO_REGULAR'), {
				family: 'Roboto',
				weight: 'regular',
				style: 'normal'
			});

			Canvas.registerFont(Canvacard.assets.font.get('SKETCH_MATCH'), {
				family: 'SketchMatch'
			});

			Canvas.registerFont(Canvacard.assets.font.get('THE_BOLT_FONT'), {
				family: 'The Bolt Font'
			});

			Canvas.registerFont(Canvacard.assets.font.get('TWEMOJI'), {
				family: 'Twitter Color Emoji'
			});

			Canvas.registerFont(Canvacard.assets.font.get('WHITNEY_BOOK'), {
				family: 'Whitney-Book',
				weight: 'bold',
				style: 'normal'
			});

			Canvas.registerFont(Canvacard.assets.font.get('WHITNEY_MEDIUM'), {
				family: 'Whitney',
				weight: 'regular',
				style: 'normal'
			});
		} else {
			fontArray.forEach((font) => {
				Canvas.registerFont(font.path, font.face);
			});
		}

		return;
	}

	/**
	 * Abofetear a alguien ( ͡° ͜ʖ ͡°)
	 * @param {string|Buffer} image1 Primera imagen
	 * @param {string|Buffer} image2 Segunda imagen
	 * @returns {Promise<Buffer>}
	 */
	static async slap(image1, image2) {
		if (!image1) throw new Error('¡La imagen no fue proporcionada!');
		if (!image2) throw new Error('¡La imagen no fue proporcionada!');
		await this.__wait();
		const canvas = Canvas.createCanvas(1000, 500);
		const ctx = canvas.getContext('2d');
		const background = await Canvas.loadImage(Canvacard.assets.image.get('BATSLAP'));
		ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
		const avatar = await Canvas.loadImage(image1);
		const avatar1 = await Canvas.loadImage(image2);
		ctx.drawImage(avatar1, 580, 260, 200, 200);
		ctx.drawImage(avatar, 350, 70, 220, 220);
		return canvas.toBuffer();
	}

	/**
	 * ¿Oh esto? ¡Esto es hermoso!
	 * @param {string|Buffer} image Fuente de imagen
	 * @returns {Promise<Buffer>}
	 */
	static async beautiful(image) {
		if (!image) throw new Error('¡La imagen no fue proporcionada!');
		await this.__wait();
		const img = await Canvas.loadImage(image);
		const base = await Canvas.loadImage(Canvacard.assets.image.get('BEAUTIFUL'));
		const canvas = Canvas.createCanvas(376, 400);
		const ctx = canvas.getContext('2d');
		ctx.drawImage(base, 0, 0, canvas.width, canvas.height);
		ctx.drawImage(img, 258, 28, 84, 95);
		ctx.drawImage(img, 258, 229, 84, 95);

		return canvas.toBuffer();
	}

	/**
	 * facepalm
	 * @param {string|Buffer} image Fuente de imagen
	 * @returns {Promise<Buffer>}
	 */
	static async facepalm(image) {
		if (!image) throw new Error('¡La imagen no fue proporcionada!');
		await this.__wait();
		let layer = await Canvas.loadImage(Canvacard.assets.image.get('FACEPALM'));
		let canvas = Canvas.createCanvas(632, 357);
		let ctx = canvas.getContext('2d');
		ctx.fillStyle = 'black';
		ctx.fillRect(0, 0, 632, 357);
		let avatar = await Canvas.loadImage(image);
		ctx.drawImage(avatar, 199, 112, 235, 235);
		ctx.drawImage(layer, 0, 0, 632, 357);
		return canvas.toBuffer();
	}

	/**
	 * Rainbow ( ͡° ͜ʖ ͡°)
	 * @param {string|Buffer} image Fuente de imagen
	 * @returns {Promise<Buffer>}
	 */
	static async rainbow(image) {
		if (!image) throw new Error('¡La imagen no fue proporcionada!');
		await this.__wait();
		let bg = await Canvas.loadImage(Canvacard.assets.image.get('GAY'));
		let img = await Canvas.loadImage(image);
		const canvas = Canvas.createCanvas(img.width, img.height);
		const ctx = canvas.getContext('2d');
		ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
		ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);
		return canvas.toBuffer();
	}

	/**
	 * "F" en el chat
	 * @param {string|Buffer} image Fuente de imagen
	 * @returns {Promise<Buffer>}
	 */
	static async rip(image) {
		if (!image) throw new Error('¡La imagen no fue proporcionada!');
		await this.__wait();
		const img = await Canvas.loadImage(image);
		const bg = await Canvas.loadImage(Canvacard.assets.image.get('RIP'));
		const canvas = Canvas.createCanvas(244, 253);
		const ctx = canvas.getContext('2d');
		ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);
		ctx.drawImage(img, 63, 110, 90, 90);
		return canvas.toBuffer();
	}

	/**
	 * ¿Basura?
	 * @param {string|Buffer} image Fuente de imagen
	 * @returns {Promise<Buffer>}
	 */
	static async trash(image) {
		if (!image) throw new Error('¡La imagen no fue proporcionada!');
		await this.__wait();
		const blur = await Canvacard.blur(image);
		const img = await Canvas.loadImage(blur);
		const bg = await Canvas.loadImage(Canvacard.assets.image.get('TRASH'));

		const canvas = Canvas.createCanvas(bg.width, bg.height);
		const ctx = canvas.getContext('2d');
		ctx.drawImage(bg, 0, 0);
		ctx.drawImage(img, 309, 0, 309, 309);
		return canvas.toBuffer();
	}

	/**
	 * Peor que hitler
	 * @param {string|Buffer} image Fuente de imagen
	 * @returns {Promise<Buffer>}
	 */
	static async hitler(image) {
		if (!image) throw new Error('¡La imagen no fue proporcionada!');
		await this.__wait();
		const img = await Canvas.loadImage(image);
		const bg = await Canvas.loadImage(Canvacard.assets.image.get('HITLER'));

		const canvas = Canvas.createCanvas(bg.width, bg.height);
		const ctx = canvas.getContext('2d');

		ctx.drawImage(bg, 0, 0);
		ctx.drawImage(img, 46, 43, 140, 140);

		return canvas.toBuffer();
	}

	/**
	 * Actualiza el color de la imagen
	 * @param {string|Buffer} image Fuente de imagen
	 * @param {string} color Color HTML5
	 * @returns {Promise<Buffer>}
	 */
	static async colorfy(image, color) {
		if (!image) throw new Error('¡La imagen no fue proporcionada!');
		const img = await Canvas.loadImage(image);
		const canvas = Canvas.createCanvas(img.width, img.height);
		const ctx = canvas.getContext('2d');
		ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
		if (color) {
			ctx.globalCompositeOperation = 'color';
			ctx.fillStyle = color;
			ctx.fillRect(0, 0, canvas.width, canvas.height);
		}
		return canvas.toBuffer();
	}

	/**
	 * whoosh
	 * @param {string|Buffer} image Fuente de imagen
	 * @returns {Promise<Buffer>}
	 */
	static async jokeOverHead(image) {
		if (!image) throw new Error('¡La imagen no se proporcionó!');
		await this.__wait();
		const layer = await Canvas.loadImage(Canvacard.assets.image.get('JOKEOVERHEAD'));
		const img = await Canvas.loadImage(image);
		const canvas = Canvas.createCanvas(425, 404);
		const ctx = canvas.getContext('2d');
		ctx.fillStyle = 'black';
		ctx.fillRect(0, 0, 425, 404);
		ctx.drawImage(img, 125, 130, 140, 135);
		ctx.drawImage(layer, 0, 0, 425, 404);
		return canvas.toBuffer();
	}

	/**
	 * Novio distraído
	 * @param {string|Buffer} image1 Rostro para la niña en color rojo.
	 * @param {string|Buffer} image2 Cara para el chico
	 * @param {string|Buffer} image3 Cara para la otra chica [opcional]
	 * @returns {Promise<Buffer>}
	 */
	static async distracted(image1, image2, image3 = null) {
		if (!image1) throw new Error('¡No se proporcionó la primera imagen!');
		if (!image2) throw new Error('¡No se proporcionó la segunda imagen!');
		await this.__wait();
		const background = await Canvas.loadImage(Canvacard.assets.image.get('DISTRACTED'));
		const avatar1 = await Canvas.loadImage(await Canvacard.circle(image1));
		const avatar2 = await Canvas.loadImage(await Canvacard.circle(image2));
		const avatar3 = image3 ? await Canvas.loadImage(await Canvacard.circle(image3)) : null;

		const canvas = Canvas.createCanvas(background.width, background.height);
		const ctx = canvas.getContext('2d');

		ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
		ctx.drawImage(avatar1, 180, 90, 150, 150);
		ctx.drawImage(avatar2, 480, 35, 130, 130);
		if (avatar3) ctx.drawImage(avatar3, 730, 110, 130, 130);

		return canvas.toBuffer();
	}

	/**
	 * No, no afecta a mi bebé.
	 * @param {string|Buffer} image Fuente de imagen
	 * @returns {Promise<Buffer>}
	 */
	static async affect(image) {
		if (!image) throw new Error('¡La imagen no fue proporcionada!');
		await this.__wait();
		const img = await Canvas.loadImage(image);
		const bg = await Canvas.loadImage(Canvacard.assets.image.get('AFFECT'));

		const canvas = Canvas.createCanvas(bg.width, bg.height);
		const ctx = canvas.getContext('2d');

		ctx.drawImage(bg, 0, 0);
		ctx.drawImage(img, 180, 383, 200, 157);

		return canvas.toBuffer();
	}

	/**
	 * Celda
	 * @param {string|Buffer} image Fuente de imagen
	 * @param {boolean} greyscale Si debe ser una imagen en escala de grises
	 * @returns {Promise<Buffer>}
	 */
	static async jail(image, greyscale = false) {
		if (!image) throw new Error('¡La imagen no fue proporcionada!');
		await this.__wait();
		const img = await Canvas.loadImage(greyscale ? await Canvacard.greyscale(image) : image);
		const bg = await Canvas.loadImage(Canvacard.assets.image.get('JAIL'));

		const canvas = Canvas.createCanvas(350, 350);
		const ctx = canvas.getContext('2d');

		ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
		ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);

		return canvas.toBuffer();
	}

	/**
	 * cama
	 * @param {string|Buffer} image1 Primera imagen
	 * @param {string|Buffer} image2 Segunda imagen
	 * @returns {Promise<Buffer>}
	 */
	static async bed(image1, image2) {
		if (!image1) throw new Error('¡No se proporcionó la primera imagen!');
		if (!image2) throw new Error('¡No se proporcionó la segunda imagen!');
		await this.__wait();
		const avatar = await Canvas.loadImage(image1);
		const avatar1 = await Canvas.loadImage(image2);
		const background = await Canvas.loadImage(Canvacard.assets.image.get('BED'));

		const canvas = Canvas.createCanvas(background.width, background.height);
		const ctx = canvas.getContext('2d');
		ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

		ctx.drawImage(avatar, 25, 100, 100, 100);
		ctx.drawImage(avatar, 25, 300, 100, 100);
		ctx.drawImage(avatar, 53, 450, 70, 70);
		ctx.drawImage(avatar1, 53, 575, 100, 100);

		return canvas.toBuffer();
	}

	/**
	 * Borrar
	 * @param {string|Buffer} image Fuente de imagen
	 * @param {boolean} dark Si la imagen debe estar en modo oscuro
	 * @returns {Promise<Buffer>}
	 */
	static async delete(image, dark = false) {
		if (!image) throw new Error('¡La imagen no fue proporcionada!');
		await this.__wait();
		const img = await Canvas.loadImage(image);
		const bg = await Canvas.loadImage(dark ? await Canvacard.invert(Canvacard.assets.image.get('DELETE')) : Canvacard.assets.image.get('DELETE'));

		const canvas = Canvas.createCanvas(bg.width, bg.height);
		const ctx = canvas.getContext('2d');

		ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);
		ctx.drawImage(img, 120, 135, 195, 195);

		return canvas.toBuffer();
	}

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
	static tictactoe(fill = { a1: 0, b1: 0, c1: 0, a2: 0, b2: 0, c2: 0, a3: 0, b3: 0, c3: 0 }, color = { bg: 0, bar: 0, x: 0, o: 0 }) {
		color = {
			bg: color.bg || 'white',
			bar: color.bar || 'black',
			x: color.x || 'red',
			o: color.o || 'blue'
		};

		const canvas = Canvas.createCanvas(2048, 2048);
		const ctx = canvas.getContext('2d');

		const drawO = (x, y) => {
			let halfSectionSize = 0.5 * 682;
			let centerX = x + halfSectionSize;
			let centerY = y + halfSectionSize;
			let radius = (682 - 100) / 2;
			let startAngle = 0 * Math.PI;
			let endAngle = 2 * Math.PI;

			ctx.lineWidth = 40;
			ctx.strokeStyle = color.o;
			ctx.beginPath();
			ctx.arc(centerX, centerY, radius, startAngle, endAngle);
			ctx.stroke();
		};

		const drawX = (x, y) => {
			ctx.strokeStyle = color.x;
			ctx.lineWidth = 40;
			ctx.beginPath();
			let offset = 50;
			ctx.moveTo(x + offset, y + offset);
			ctx.lineTo(x + 682 - offset, y + 682 - offset);
			ctx.moveTo(x + offset, y + 682 - offset);
			ctx.lineTo(x + 682 - offset, y + offset);
			ctx.stroke();
		};

		const params = {
			a1: {
				x: 5,
				y: 5
			},
			b1: {
				x: 682,
				y: 5
			},
			c1: {
				x: 1364,
				y: 5
			},
			a2: {
				x: 5,
				y: 682
			},
			b2: {
				x: 682,
				y: 682
			},
			c2: {
				x: 1364,
				y: 682
			},
			a3: {
				x: 5,
				y: 1364
			},
			b3: {
				x: 682,
				y: 1364
			},
			c3: {
				x: 1364,
				y: 1364
			}
		};

		// Background
		ctx.fillStyle = color.bg;
		ctx.fillRect(0, 0, canvas.width, canvas.height);

		// Lines
		ctx.lineWidth = 30;
		ctx.lineCap = 'round';
		ctx.strokeStyle = color.bar;
		ctx.beginPath();

		//Horizontal lines
		for (var y = 1; y <= 2; y++) {
			ctx.moveTo(4, y * 682);
			ctx.lineTo(2043, y * 682);
		}
		// Vertical lines
		for (var x = 1; x <= 2; x++) {
			ctx.moveTo(x * 682, 4);
			ctx.lineTo(x * 682, 2043);
		}

		ctx.stroke();

		// Apply
		Object.keys(fill).forEach((x) => {
			if (!fill[x] || !['X', 'O'].includes(fill[x])) return;
			const data = params[x];
			fill[x] === 'X' ? drawX(data.x, data.y) : drawO(data.x, data.y);
		});

		return canvas.toBuffer();
	}

	/**
	 * Opinión
	 * @param {string|Buffer} avatar Imagen
	 * @param {string} msg Mensaje
	 * @returns {Promise<Buffer>}
	 */
	static async opinion(avatar, msg) {
		if (!avatar) throw new Error('Avatar no fue proporcionado!');
		if (!msg) throw new Error('¡No se proporcionó el mensaje!');
		await this.__wait();
		const bg = await Canvas.loadImage(Canvacard.assets.image.get('OPINION'));
		const ava = await Canvas.loadImage(avatar);

		const canvas = Canvas.createCanvas(482, 481);
		const ctx = canvas.getContext('2d');

		ctx.drawImage(ava, 62, 340, 85, 85);
		ctx.drawImage(ava, 260, 180, 70, 70);
		ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);

		ctx.font = 'bold 15px arial';
		ctx.fillStyle = '#000000';
		await Util.renderEmoji(ctx, Util.shorten(msg, 24), canvas.width / 10, canvas.height / 1.51);

		return canvas.toBuffer();
	}

	/**
	 * Crea degradado
	 * @param {string} colorFrom Color inicial
	 * @param {string} colorTo Color final
	 * @param {number} width Ancho de la imagen
	 * @param {number} height Altura de imagen
	 * @returns {Buffer}
	 */
	static gradient(colorFrom, colorTo, width, height) {
		if (!colorFrom) throw new Error('¡ColorFrom no fue proporcionado!');
		if (!colorTo) throw new Error('ColorTo no fue proporcionado!');

		const canvas = Canvas.createCanvas(width || 400, height || 200);
		const ctx = canvas.getContext('2d');
		const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);

		gradient.addColorStop(0, colorFrom);
		gradient.addColorStop(1, colorTo);
		ctx.fillStyle = gradient;
		ctx.fillRect(0, 0, canvas.width, canvas.height);

		return canvas.toBuffer();
	}

	/**
	 * ¡Oh, no! Es estúpido.
	 * @param {string} message Mensaje
	 * @returns {Promise<Buffer>}
	 */
	static async ohno(message) {
		if (!message) throw new Error('¡No se proporcionó el mensaje!');
		await Canvacard.__wait();
		const bg = await Canvas.loadImage(Canvacard.assets.image.get('OHNO'));
		const canvas = Canvas.createCanvas(1000, 1000);
		const ctx = canvas.getContext('2d');

		ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);

		ctx.font = 'bold 50px Times New Roman';
		ctx.fillStyle = '#000000';
		await Util.renderEmoji(ctx, Util.shorten(message, 20), 540, 195);

		return canvas.toBuffer();
	}

	/**
	 * Cambiar de opinión (tomado de jgoralcz/image-microservice)
	 * @param {String} text Texto
	 * @see https://github.com/jgoralcz/image-microservice/blob/master/src/workers/canvas/ChangeMyMind.js
	 * @returns {Promise<Buffer>}
	 */
	static async changemymind(text) {
		if (!text) throw new Error('missing text!');
		await this.__wait();
		const base = await Canvas.loadImage(Canvacard.assets.image.get('CHANGEMYMIND'));
		const canvas = Canvas.createCanvas(base.width, base.height);
		const ctx = canvas.getContext('2d');
		ctx.drawImage(base, 0, 0, canvas.width, canvas.height);
		let x = text.length;
		let fontSize = 70;
		if (x <= 15) {
			ctx.translate(310, 365);
		} else if (x <= 30) {
			fontSize = 50;
			ctx.translate(315, 365);
		} else if (x <= 70) {
			fontSize = 40;
			ctx.translate(315, 365);
		} else if (x <= 85) {
			fontSize = 32;
			ctx.translate(315, 365);
		} else if (x < 100) {
			fontSize = 26;
			ctx.translate(315, 365);
		} else if (x < 120) {
			fontSize = 21;
			ctx.translate(315, 365);
		} else if (x < 180) {
			fontSize = 0.0032 * (x * x) - 0.878 * x + 80.545;
			ctx.translate(315, 365);
		} else if (x < 700) {
			fontSize = 0.0000168 * (x * x) - 0.0319 * x + 23.62;
			ctx.translate(310, 338);
		} else {
			fontSize = 7;
			ctx.translate(310, 335);
		}
		ctx.font = `${fontSize}px 'Arial'`;
		ctx.rotate(-0.39575);

		const lines = Util.getLines({ text, ctx, maxWidth: 345 });
		let i = 0;
		while (i < lines.length) {
			ctx.fillText(lines[i], 10, i * fontSize - 5);
			i++;
		}
		return canvas.toBuffer();
	}

	/**
	 * Clyde
	 * @param {string} message Mensaje
	 * @returns {Promise<Buffer>}
	 */
	static async clyde(message) {
		if (!message) messgae = 'Please provide text!';
		await this.__wait();
		let avatar = await Canvas.loadImage(await Canvacard.circle(Canvacard.assets.image.get('CLYDE')));
		let badge = await Canvas.loadImage(Canvacard.assets.image.get('BOTBADGE'));
		Canvas.registerFont(Canvacard.assets.font.get('WHITNEY_MEDIUM'), {
			family: 'Whitney',
			weight: 'regular',
			style: 'normal'
		});

		Canvas.registerFont(Canvacard.assets.font.get('MANROPE_REGULAR'), {
			family: 'Manrope',
			weight: 'regular',
			style: 'normal'
		});

		const canvas = Canvas.createCanvas(1500, 300);

		const ctx = canvas.getContext('2d');
		ctx.fillStyle = '#36393E';
		ctx.fillRect(0, 0, canvas.width, canvas.height);

		ctx.drawImage(avatar, 75, 30, 130, 130);
		ctx.drawImage(badge, 360, 45, 100, 40);

		ctx.font = '40px Manrope';
		ctx.fillStyle = '#FFFFFF';
		ctx.textAlign = 'start';
		await Util.renderEmoji(ctx, Util.shorten(message, 66), 230, 150);

		ctx.font = '50px Whitney';
		ctx.fillStyle = '#FFFFFF';
		ctx.textAlign = 'start';
		ctx.fillText('Clyde', 230, 80);

		ctx.font = '40px Whitney';
		ctx.fillStyle = '#7D7D7D';
		ctx.textAlign = 'start';
		ctx.fillText(Util.discordTime(), 470, 80);

		ctx.font = '20px Manrope';
		ctx.fillStyle = '#7D7D7D';
		ctx.textAlign = 'start';
		ctx.fillText('Solo tú puedes ver esto:', 240, 190);

		ctx.font = '20px Manrope';
		ctx.fillStyle = '#2785C7';
		ctx.textAlign = 'start';
		ctx.fillText('eliminar este mensaje.', 240 + ctx.measureText('Solo tú puedes ver esto:').width + 10, 190);

		return canvas.toBuffer();
	}

	/**
	 * Cita falsa
	 * @param {object} options Opciones
	 * @param {Buffer|string} [options.image] Imagen
	 * @param {string} [options.message] Mensaje
	 * @param {string} [options.username] Nombre de usuario
	 * @param {string} [options.color] Color
	 * @returns {Promise<Buffer>}
	 */
	static async quote(options = { image, message, username, color }) {
		await this.__wait();
		if (!options.image) options.image = Canvacard.assets.image.get('CLYDE');
		if (!options.message) options.message = 'Por favor, proporcione un mensaje de texto.';
		if (!options.username) options.username = 'Clyde';
		if (!options.color) options.color = '#FFFFFF';

		let image = await Canvas.loadImage(await Canvacard.circle(options.image));

		Canvas.registerFont(Canvacard.assets.font.get('WHITNEY_MEDIUM'), {
			family: 'Whitney',
			weight: 'regular',
			style: 'normal'
		});

		Canvas.registerFont(Canvacard.assets.font.get('MANROPE_REGULAR'), {
			family: 'Manrope',
			weight: 'regular',
			style: 'normal'
		});

		const canvas = Canvas.createCanvas(1500, 300);

		const ctx = canvas.getContext('2d');
		ctx.fillStyle = '#36393E';
		ctx.fillRect(0, 0, canvas.width, canvas.height);

		ctx.drawImage(image, 75, 30, 130, 130);

		ctx.font = '40px Manrope';
		ctx.fillStyle = '#FFFFFF';
		ctx.textAlign = 'start';
		await Util.renderEmoji(ctx, Util.shorten(options.message, 66), 230, 150);

		ctx.font = '50px Whitney';
		ctx.fillStyle = typeof options.color == 'string' ? options.color : '#FFFFFF';
		ctx.textAlign = 'start';
		ctx.fillText(typeof options.username === 'string' ? Util.shorten(options.username, 17) : 'Clyde', 230, 80);

		ctx.font = '40px Whitney';
		ctx.fillStyle = '#7D7D7D';
		ctx.textAlign = 'start';
		ctx.fillText(Util.discordTime(), 240 + ctx.measureText(Util.shorten(options.username, 17)).width + 110, 80);

		return canvas.toBuffer();
	}

	/**
	 * Comentario de PornHub
	 * @param {Object} options Opciones
	 * @param {String} [options.username] Nombre de usuario
	 * @param {String} [options.message] Comentario
	 * @param {String|Buffer} [options.image] Imagen
	 * @returns {Promise<Buffer>}
	 */
	static async phub(options = { username: null, message: null, image: null }) {
		if (!options.username) throw new Error('¡El nombre de usuario no puede estar vacío!');
		if (!options.message) throw new Error('¡El mensaje no puede estar vacío!');
		if (!options.image) throw new Error('¡La imagen no puede estar vacía!');

		await this.__wait();
		let image = await Canvas.loadImage(options.image);
		let baseImage = await Canvas.loadImage(Canvacard.assets.image.get('PHUB'));

		let canvas = Canvas.createCanvas(baseImage.width, baseImage.height);
		let ctx = canvas.getContext('2d');

		ctx.drawImage(baseImage, 0, 0, canvas.width, canvas.height);
		ctx.drawImage(image, 30, 310, 70, 70);

		ctx.font = '32px Arial';
		ctx.fillStyle = '#F99600';
		ctx.textAlign = 'start';
		ctx.fillText(Util.shorten(options.username, 20), 115, 350);

		ctx.font = '32px Arial';
		ctx.fillStyle = '#CCCCCC';
		ctx.textAlign = 'start';
		await Util.renderEmoji(ctx, Util.shorten(options.message, 50), 30, 430);

		return canvas.toBuffer();
	}

	/**
	 * Wanted
	 * @param {string|Buffer} image Fuente de imagen
	 * @returns {Promise<Buffer>}
	 */
	static async wanted(image) {
		if (!image) throw new Error('¡La imagen no fue proporcionada!');
		await this.__wait();
		const img = await Canvas.loadImage(image);
		const bg = await Canvas.loadImage(Canvacard.assets.image.get('WANTED'));

		const canvas = Canvas.createCanvas(bg.width, bg.height);
		const ctx = canvas.getContext('2d');

		ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);
		ctx.drawImage(img, 145, 282, 447, 447);

		return canvas.toBuffer();
	}

	/**
	 * Wasted
	 * @param {string|Buffer} image Fuente de imagen
	 * @returns {Promise<Buffer>}
	 */
	static async wasted(image) {
		if (!image) throw new Error('¡La imagen no fue proporcionada!');
		await this.__wait();
		const img = await Canvas.loadImage(await Canvacard.greyscale(image));
		const bg = await Canvas.loadImage(Canvacard.assets.image.get('WASTED'));

		const canvas = Canvas.createCanvas(512, 512);
		const ctx = canvas.getContext('2d');

		ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
		ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);

		return canvas.toBuffer();
	}

	/**
	 * Comentario de YouTube
	 * @param {object} ops Opciones de comentarios de YouTube
	 * @param {string} [ops.username] Nombre de usuario del autor del comentario
	 * @param {string} [ops.content] El comentario
	 * @param {string|Buffer} [ops.avatar] Fuente de avatar
	 * @param {boolean} [ops.dark=false] ¿Modo oscuro?
	 * @returns {Promise<Buffer>}
	 */
	static async youtube(ops = { username: null, content: null, avatar: null, dark: false }) {
		if (!ops.username || typeof ops.username !== 'string') throw new Error('¡El nombre de usuario no puede estar vacío!');
		if (!ops.content || typeof ops.content !== 'string') throw new Error('¡El contenido no puede estar vacío!');
		if (!ops.avatar) throw new Error('¡Es posible que la fuente del avatar no esté vacía!');
		ops.dark = !!ops.dark;

		await this.__wait();
		const bg = await Canvas.loadImage(!ops.dark ? Canvacard.assets.image.get('YOUTUBE') : await Canvacard.invert(Canvacard.assets.image.get('YOUTUBE')));
		const avatar = await Canvas.loadImage(await Canvacard.circle(ops.avatar));

		const canvas = Canvas.createCanvas(bg.width, bg.height);
		const ctx = canvas.getContext('2d');

		ctx.drawImage(bg, -3, -3, canvas.width + 6, canvas.height + 6);
		ctx.drawImage(avatar, 17, 33, 52, 52);

		let time = Math.floor(Math.random() * (59 - 1)) + 1;
		time = `${time + (time == 1 ? ' minute' : ' minutes')} ago`;

		const username = Util.shorten(ops.username, 21);
		const comment = Util.shorten(ops.content, 60);

		ctx.font = '20px Roboto';
		ctx.fillStyle = ops.dark ? '#FFFFFF' : '#000000';
		ctx.fillText(username, 92, 50);

		ctx.font = '16px Roboto';
		ctx.fillStyle = '#909090';
		ctx.fillText(time, ctx.measureText(username).width + 140, 50);

		ctx.font = '18px Roboto';
		ctx.fillStyle = ops.dark ? '#FFFFFF' : '#000000';
		await Util.renderEmoji(ctx, comment, 92, 80);

		return canvas.toBuffer();
	}

	/**
	 * ¡Oh, mierda!
	 * @param {string|Buffer} image Fuente de imagen
	 * @returns {Promise<Buffer>}
	 */
	static async shit(image) {
		if (!image) throw new Error('¡La imagen no fue proporcionada!');
		await this.__wait();
		const img = await Canvas.loadImage(await Canvacard.circle(image));
		const bg = await Canvas.loadImage(Canvacard.assets.image.get('SHIT'));

		const canvas = Canvas.createCanvas(bg.width, bg.height);
		const ctx = canvas.getContext('2d');

		ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);
		ctx.drawImage(img, 210, 700, 170, 170);

		return canvas.toBuffer();
	}

	/**
	 * Escribe los datos como archivo
	 * @param {Buffer} data datos para escribir
	 * @param {string} name nombre del archivo
	 * @returns {void}
	 */
	static write(data, name) {
		return fs.writeFileSync(name, data);
	}

	/**
	 * Devuelve el icono predeterminado de un servidor de discord
	 * @param {string} name Nombre del servidor
	 * @param {number} size Icon size. Valid: `16`, `32`, `64`, `128`, `256`, `512`, `1024`, `2048` & `4096`
	 * @returns {Promise<Buffer>}
	 */
	static async guildIcon(name, size = 1024) {
		const str = Util.getAcronym(name);
		if (!str) throw new Error("Couldn't parse acronym!");
		if (typeof size !== 'number' || size < 0 || size > 4096 || size % 16 !== 0) throw new Error('Invalid icon size!');

		const canvas = Canvas.createCanvas(size, size);
		const ctx = canvas.getContext('2d');

		ctx.fillStyle = '#7289DA';
		ctx.fillRect(0, 0, canvas.width, canvas.height);

		ctx.fillStyle = '#FFFFFF';
		ctx.font = `bold ${size / 4}px Whitney`;
		await Util.renderEmoji(ctx, str, canvas.width / 4, canvas.height / 1.7);

		return canvas.toBuffer();
	}

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
	 * @example const img = "https://cdn.discordapp.com/embed/avatars/0.png";
	 * const img2 = "https://cdn.discordapp.com/embed/avatars/4.png";
	 * canvacard.Canvas.reply({
	 *      avatar1: img,
	 *      avatar2: img2,
	 *      user1: "Maximus",
	 *      user2: "SrGobi",
	 *      hex1: "#FF3300",
	 *      hex2: "#7289da",
	 *      mainText: "kok",
	 *      replyText: "Pog"
	 * })
	 * .then(img => canvacard.write(img, "reply.png"));
	 */
	static async reply(options = { avatar1: null, avatar2: null, user1: null, user2: null, hex1: null, hex2: null, mainText: null, replyText: null }) {
		const { avatar1, avatar2, user1, user2, hex1, hex2, mainText, replyText } = options;

		if (!avatar1) throw new Error('¡No se proporcionó el primer avatar!');
		if (!avatar2) throw new Error('¡No se proporcionó el segundo avatar!');
		if (!user1) throw new Error('¡No se proporcionó el primer nombre de usuario!');
		if (!user2) throw new Error('¡No se proporcionó el segundo nombre de usuario!');
		if (!mainText || typeof mainText !== 'string') throw new Error('¡No se proporcionó el texto principal!');
		if (!replyText || typeof replyText !== 'string') throw new Error('¡No se proporcionó el texto de respuesta!');
		if (!hex1 || typeof hex1 !== 'string') hex1 = '#FFFFFF';
		if (!hex2 || typeof hex2 !== 'string') hex2 = '#FFFFFF';

		const img1 = await Canvas.loadImage(avatar1);
		const img2 = await Canvas.loadImage(avatar2);

		Canvas.registerFont(Canvacard.assets.font.get('WHITNEY_MEDIUM'), {
			family: 'Whitney',
			weight: 'regular',
			style: 'normal'
		});

		Canvas.registerFont(Canvacard.assets.font.get('MANROPE_REGULAR'), {
			family: 'Manrope',
			weight: 'regular',
			style: 'normal'
		});

		const canvas = Canvas.createCanvas(1300, 250);
		const ctx = canvas.getContext('2d');

		ctx.fillStyle = '#36393E';
		ctx.fillRect(0, 0, canvas.width, canvas.height);

		ctx.fillStyle = '#ffffff';
		ctx.textAlign = 'left';

		ctx.font = '38px Manrope';

		await Util.renderEmoji(ctx, Util.shorten(replyText, 32), 186, 200);

		ctx.font = '38px Whitney';
		ctx.fillStyle = Util.formatHex(hex1, '#FFFFFF');
		ctx.fillText(user1, 185, 147);

		const usernameWidth = ctx.measureText(user1).width;
		ctx.fillStyle = '#d1d1d1';
		ctx.font = '38px Manrope';

		ctx.fillText(' responder a ', 165 + usernameWidth + 20, 147);

		const repliedWidth = ctx.measureText(' responder a ').width;

		ctx.fillStyle = Util.formatHex(hex2, '#FFFFFF');
		ctx.font = '38px Whitney';
		ctx.fillText(user2, 165 + usernameWidth + repliedWidth + 20, 167 - 20);

		const secondMemberUserWidth = ctx.measureText(user2).width;

		ctx.font = '26px Whitney';
		ctx.fillStyle = '#7a7c80';
		const time = Util.discordTime();

		ctx.fillText(` ${time}`, 165 + usernameWidth + repliedWidth + secondMemberUserWidth + 3 + 20, 167 - 20);

		ctx.font = '29px Whitney';
		ctx.globalAlpha = 0.7;
		ctx.fillStyle = '#d1d1d1';
		ctx.fillText(Util.shorten(mainText, 64), 195 + 20 + 20, 100 + 5 - 20);

		ctx.strokeStyle = '#a3a2a2';
		ctx.lineWidth = 4;
		ctx.globalAlpha = 0.4;
		ctx.moveTo(34 + 105 / 2 + 70 + 20, 92 + 5 - 20);
		ctx.lineTo(34 + 105 / 2 + 20, 92 + 5 - 20);

		ctx.moveTo(34 + 105 / 2 + 20, 92 + 5 - 20);
		ctx.quadraticCurveTo(34 + 105 / 2 + 4, 92 + 5 - 20, 34 + 105 / 2, 103 + 5 - 20);

		ctx.moveTo(34 + 105 / 2, 125 - 20);
		ctx.lineTo(34 + 105 / 2, 103 + 5 - 20);
		ctx.stroke();

		ctx.globalAlpha = 1;
		ctx.save();
		ctx.beginPath();
		ctx.lineWidth = 1;
		ctx.arc(90, 182 - 20, 50, 0, Math.PI * 2, true);
		ctx.strokeStyle = '#36393E';
		ctx.stroke();
		ctx.closePath();

		ctx.clip();
		ctx.drawImage(img1, 38, 130 - 20, 105, 105);
		ctx.restore();

		ctx.save();
		ctx.beginPath();
		ctx.lineWidth = 1;
		ctx.arc(165 + 20 + 20, 90 + 5 - 20, 20, 0, Math.PI * 2);
		ctx.strokeStyle = '#36393E';
		ctx.stroke();
		ctx.closePath();

		ctx.clip();

		ctx.drawImage(img2, 165 + 20, 70 + 5 - 20, 40, 40);
		ctx.restore();

		return canvas.toBuffer();
	}

	/**
	 * Canvacard assets
	 * @type {CanvacardAssets}
	 * @private
	 */
	static get assets() {
		return assets;
	}

	/**
	 * Método de Canvacard utilizado para `wait`.
	 * @param {number} dur Número de milisegundos a esperar
	 * @returns {Promise<void>}
	 */
	static __wait(dur) {
		return new Promise((res) => {
			setTimeout(() => res(), dur || 250);
		});
	}

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
	static get CONVOLUTION_MATRIX() {
		return {
			EDGES: [0, -1, 0, -1, 4, -1, 0, -1, 0],
			BLUR: [1 / 9, 1 / 9, 1 / 9, 1 / 9, 1 / 9, 1 / 9, 1 / 9, 1 / 9, 1 / 9],
			SHARPEN: [0, -1, 0, -1, 5, -1, 0, -1, 0],
			BURN: [1 / 11, 1 / 11, 1 / 11, 1 / 11, 1 / 11, 1 / 11, 1 / 11, 1 / 11, 1 / 11]
		};
	}

	/**
	 * Canvacard utils
	 * @type {Util}
	 */
	static get Util() {
		return Util;
	}
}

module.exports = Canvacard;
