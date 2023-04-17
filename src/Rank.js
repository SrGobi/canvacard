const Canvas = require("@napi-rs/canvas");
const Util = require("./Util");
const assets = require("./Assets");

/**
 * @typedef {object} CanvacardRankData
 * @property {number} width Ancho de la tarjeta de rango
 * @property {number} height Altura de la tarjeta de rango
 * @property {object} background Datos de antecedentes de la tarjeta de rango
 * @property {"image"|"color"} [background.type="color"] Tipo de fondo
 * @property {string|Buffer} [background.image="#23272A"] Imagen de fondo (o color)
 * @property {object} progressBar Datos de la barra de progreso
 * @property {boolean} [progressBar.rounded=true] Si la barra de progreso debe redondearse
 * @property {number} [progressBar.x=275.5] Barra de progreso X
 * @property {number} [progressBar.y=183.75] Barra de progreso Y
 * @property {number} [progressBar.height=37.5] Altura de la barra de progreso
 * @property {number} [progressBar.width=596.5] Ancho de la barra de progreso
 * @property {object} [progressBar.track] Pista de la barra de progreso
 * @property {string} [progressBar.track.color="#484b4E"] Color de la pista de la barra de progreso
 * @property {object} [progressBar.bar] Datos de la barra de progreso
 * @property {"color"|"gradient"} [progressBar.bar.type="color"] Tipo de barra de progreso
 * @property {string|string[]} [progressBar.bar.color="#FFFFFF"] Color de la barra de la barra de progreso
 * @property {object} overlay Superposición de la barra de progreso
 * @property {boolean} [overlay.display=true] Si debería mostrar superposición
 * @property {number} [overlay.level=0.5] Nivel de opacidad de superposición
 * @property {string} [overlay.color="#333640"] Superposición de color de fondo
 * @property {object} avatar Datos de avatar de la tarjeta de rango
 * @property {string|Buffer} [avatar.source=null] Fuente de avatar
 * @property {number} [avatar.x=70] X
 * @property {number} [avatar.y=50] Y
 * @property {number} [avatar.height=180] altura
 * @property {number} [avatar.width=180] ancho
 * @property {object} status Estado de la tarjeta de rango
 * @property {number} [status.width=5] Ancho de estado
 * @property {"online"|"dnd"|"idle"|"offline"|"streaming"} [status.type] Tipo de estado
 * @property {string} [status.color="#43B581"] Color de estado
 * @property {boolean} [status.circle=false] ¿Estado circular?
 * @property {object} rank Datos de rango de la tarjeta de clasificación
 * @property {boolean} [rank.display=true] Si debe mostrar rango
 * @property {number} [rank.data=1] El rango
 * @property {string} [rank.textColor="#FFFFFF"] Rango de color del texto
 * @property {string} [rank.color="#F3F3F3"] Color de rango
 * @property {string} [rank.displayText="RANK"] Texto de visualización de rango
 * @property {object} level Datos de nivel de tarjeta de rango
 * @property {boolean} [level.display=true] Si debería mostrar el nivel
 * @property {number} [level.data=1] El nivel
 * @property {string} [level.textColor="#FFFFFF"] color de texto de nivel
 * @property {string} [level.color="#F3F3F3"] color de nivel
 * @property {string} [level.displayText="LEVEL"] texto de visualización de nivel
 * @property {object} previousRankXP tarjeta xp de rango anterior opcional
 * @property {number} [previousRankXP.data=null] xp de rango anterior opcional
 * @property {string} [previousRankXP.color=null] Tabla de rango de color de rango xp anterior opcional
 * @property {object} currentXP Tarjeta de rango xp actual
 * @property {number} [currentXP.data=0] XP actual
 * @property {string} [currentXP.color="#FFFFFF"] Carta de rango color xp actual
 * @property {object} requiredXP Tarjeta de rango requerida xp
 * @property {number} [requiredXP.data=0] requerido xp
 * @property {string} [requiredXP.color="#FFFFFF"] Se requiere tarjeta de rango xp color
 * @property {object} discriminator Discriminador de cartas de rango
 * @property {number|string} [discriminator.discrim=null] El discriminador
 * @property {string} [discriminator.color="rgba(255, 255, 255, 0.4)"] Color del discriminador de la tarjeta de rango
 * @property {object} username Datos de nombre de usuario
 * @property {string} [username.name=null] Nombre de usuario de la tarjeta de clasificación
 * @property {string} [username.color="#FFFFFF"] Color de nombre de usuario de la tarjeta de rango
 * @property {boolean} [renderEmojis=true] Si debería renderizar emojis
 */

class Rank {

  /**
   * Creates Rank card
   * @example 
   * const rank = new canvacard.Rank()
          .setAvatar(img)
          .setCurrentXP(203)
          .setRequiredXP(500)
          .setStatus("dnd")
          .setProgressBar(["#FF0000", "#0000FF"], "GRADIENT")
          .setUsername("SrGobi")
          .setDiscriminator("6966");
      
      rank.build()
          .then(data => {
              canvacard.write(data, "RankCard.png");
          })
   */
  constructor() {

    /**
     * Rank card data
     * @type {CanvacardRankData}
     */
    this.data = {
      width: 934,
      height: 282,
      background: {
        type: "color",
        image: "#23272A"
      },
      progressBar: {
        rounded: true,
        x: 275.5,
        y: 183.75,
        height: 37.5,
        width: 596.5,
        track: {
          color: "#484b4E"
        },
        bar: {
          type: "color",
          color: "#FFFFFF"
        }
      },
      overlay: {
        display: true,
        level: 0.5,
        color: "#333640"
      },
      avatar: {
        source: null,
        x: 70,
        y: 50,
        height: 180,
        width: 180
      },
      status: {
        width: 5,
        type: "online",
        color: "#43B581",
        circle: false
      },
      rank: {
        display: true,
        data: 1,
        textColor: "#FFFFFF",
        color: "#F3F3F3",
        displayText: "RANK"
      },
      level: {
        display: true,
        data: 1,
        textColor: "#FFFFFF",
        color: "#F3F3F3",
        displayText: "LEVEL"
      },
      currentXP: {
        data: 0,
        color: "#FFFFFF"
      },
      requiredXP: {
        data: 0,
        color: "#FFFFFF"
      },
      discriminator: {
        discrim: null,
        color: "rgba(255, 255, 255, 0.4)"
      },
      username: {
        name: null,
        color: "#FFFFFF"
      },
      renderEmojis: false
    };

    // Cargar fuentes predeterminadas
    this.registerFonts();
  }

  /**
   * Carga la fuente
   * @param {any[]} fontArray Matriz de fuentes
   * @returns {Rank}
   */
  registerFonts(fontArray = []) {
    fontArray.forEach(font => {
      Canvas.GlobalFonts.registerFromPath(font.path, font.name || font.face?.name);
    });

    return this;
  }

  /**
   * Si debe mostrar el nombre de usuario con emojis (si los hay)
   * @param {boolean} [apply=false] Establécelo a `true` para mostrar emojis. 
   * @returns {Rank}
   */
  renderEmojis(apply = false) {
    this.data.renderEmojis = !!apply;
    return this;
  }

  /**
   * Tamaño de letra
   * @param {string} size
   * @returns {Rank}
   */
  setFontSize(size) {
    this.data.fontSize = size;
    return this;
  }

  /**
   * Establecer nombre de usuario
   * @param {string} name Username
   * @param {string} color Username color
   * @returns {Rank}
   */
  setUsername(name, color = "#FFFFFF") {
    if (typeof name !== "string") throw new Error(`Se espera que el nombre de usuario sea una cadena, se recibe ${typeof name}!`);
    this.data.username.name = name;
    this.data.username.color = color && typeof color === "string" ? color : "#FFFFFF";
    return this;
  }

  /**
   * Ajustar discriminador
   * @param {string|number} discriminator User discriminator
   * @param {string} color Discriminator color
   * @returns {Rank}
   */
  setDiscriminator(discriminator, color = "rgba(255, 255, 255, 0.4)") {
    this.data.discriminator.discrim = !isNaN(discriminator) && `${discriminator}`.length === 4 ? discriminator : null;
    this.data.discriminator.color = color && typeof color === "string" ? color : "rgba(255, 255, 255, 0.4)";
    return this;
  }

  /**
   * Definir el estilo de la barra de progreso
   * @param {string|string[]} color Progressbar Color
   * @param {"COLOR"|"GRADIENT"} [fillType] Progressbar type
   * @param {boolean} [rounded=true] If progressbar should have rounded edges
   * @returns {Rank}
   */
  setProgressBar(color, fillType = "COLOR", rounded = true) {

    switch (fillType) {
      case "COLOR":
        if (typeof color !== "string") throw new Error(`El tipo de color debe ser una cadena, recibida ${typeof color}!`);
        this.data.progressBar.bar.color = color;
        this.data.progressBar.bar.type = "color";
        this.data.progressBar.rounded = !!rounded;
        break;
      case "GRADIENT":
        if (!Array.isArray(color)) throw new Error(`El tipo de color debe ser Array, recibido ${typeof color}!`);
        this.data.progressBar.bar.color = color.slice(0, 2);
        this.data.progressBar.bar.type = "gradient";
        this.data.progressBar.rounded = !!rounded;
        break;
      default:
        throw new Error(`Tipo de barra de progreso no compatible "${fillType}"!`);
    }

    return this;

  }

  /**
   * Fijar la pista de la barra de progreso
   * @param {string} color Track color
   * @returns {Rank}
   */
  setProgressBarTrack(color) {
    if (typeof color !== "string") throw new Error(`El tipo de color debe ser una cadena, recibida "${typeof color}"!`);
    this.data.progressBar.track.color = color;

    return this;
  }

  /**
   * Establecer superposición de tarjetas
   * @param {string} color Overlay color
   * @param {number} [level=0.5] Opacity level
   * @param {boolean} [display=true] IF it should display overlay
   * @returns {Rank}
   */
  setOverlay(color, level = 0.5, display = true) {
    if (typeof color !== "string") throw new Error(`El tipo de color debe ser una cadena, recibida "${typeof color}"!`);
    this.data.overlay.color = color;
    this.data.overlay.display = !!display;
    this.data.overlay.level = level && typeof level === "number" ? level : 0.5;
    return this;
  }

  /**
   * Establecer xp requerido
   * @param {number} data Required xp
   * @param {string} color Color
   * @returns {Rank}
   */
  setRequiredXP(data, color = "#FFFFFF") {
    if (typeof data !== "number") throw new Error(`El tipo de dato requerido xp debe ser un número, recibido ${typeof data}!`);
    this.data.requiredXP.data = data;
    this.data.requiredXP.color = color && typeof color === "string" ? color : "#FFFFFF";
    return this;
  }

  /**
   * Fijar xp actual
   * @param {number} data Current xp
   * @param {string} color Color
   * @returns {Rank}
   */
  setCurrentXP(data, color = "#FFFFFF") {
    if (typeof data !== "number") throw new Error(`El tipo de dato xp actual debe ser un número, recibido ${typeof data}!`);
    this.data.currentXP.data = data;
    this.data.currentXP.color = color && typeof color === "string" ? color : "#FFFFFF";
    return this;
  }

  /**
   * Establecer rango
   * @param {number} data Current Rank
   * @param {string} text Display text
   * @param {boolean} [display=true] If it should display rank
   * @returns {Rank}
   */
  setRank(data, text = "RANK", display = true) {
    if (typeof data !== "number") throw new Error(`Los datos de nivel deben ser un número, recibido ${typeof data}!`);
    this.data.rank.data = data;
    this.data.rank.display = !!display;
    if (!text || typeof text !== "string") text = "RANK";
    this.data.rank.displayText = text;

    return this;
  }

  /**
   * Establecer el color de visualización del rango
   * @param {string} text text color
   * @param {string} number Number color
   * @returns {Rank}
   */
  setRankColor(text = "#FFFFFF", number = "#FFFFFF") {
    if (!text || typeof text !== "string") text = "#FFFFFF";
    if (!number || typeof number !== "string") number = "#FFFFFF";
    this.data.rank.textColor = text;
    this.data.rank.color = number;
    return this;
  }

  /**
   * Fijar color de nivel
   * @param {string} text text color
   * @param {string} number number color
   * @returns {Rank}
   */
  setLevelColor(text = "#FFFFFF", number = "#FFFFFF") {
    if (!text || typeof text !== "string") text = "#FFFFFF";
    if (!number || typeof number !== "string") number = "#FFFFFF";
    this.data.level.textColor = text;
    this.data.level.color = number;
    return this;
  }

  /**
   * Establecer nivel
   * @param {number} data Current Level
   * @param {string} text Display text
   * @param {boolean} [display=true] If it should display level
   * @returns {Rank}
   */
  setLevel(data, text = "LEVEL", display = true) {
    if (typeof data !== "number") throw new Error(`Los datos de nivel deben ser un número, recibido ${typeof data}!`);
    this.data.level.data = data;
    this.data.level.display = !!display;
    if (!text || typeof text !== "string") text = "LEVEL";
    this.data.level.displayText = text;

    return this;
  }

  /**
   * Establecer color de estado personalizado
   * @param {string} color Color to set
   * @returns {Rank}
   */
  setCustomStatusColor(color) {
    if (!color || typeof color !== "string") throw new Error("Color no válido.");
    this.data.status.color = color;
    return this;
  }

  /**
   * Establecer estado
   * @param {"online"|"idle"|"dnd"|"offline"|"streaming"} status User status
   * @param {boolean} circle Si el icono de estado debe ser circular.
   * @param {number|boolean} width Anchura de estado
   * @returns {Rank}
   */
  setStatus(status, circle = false, width = 5) {
    switch (status) {
      case "online":
        this.data.status.type = "online";
        this.data.status.color = "#43B581";
        break;
      case "idle":
        this.data.status.type = "idle";
        this.data.status.color = "#FAA61A";
        break;
      case "dnd":
        this.data.status.type = "dnd";
        this.data.status.color = "#F04747";
        break;
      case "offline":
        this.data.status.type = "offline";
        this.data.status.color = "#747F8E";
        break;
      case "streaming":
        this.data.status.type = "streaming";
        this.data.status.color = "#593595";
        break;
      default:
        throw new Error(`Invalid status "${status}"`);
    }

    if (width !== false) this.data.status.width = typeof width === "number" ? width : 5;
    else this.data.status.width = false;
    if ([true, false].includes(circle)) this.data.status.circle = circle;

    return this;
  }

  /**
   * Establecer imagen/color de fondo
   * @param {"COLOR"|"IMAGE"} type Background type
   * @param {string|Buffer} [data] Background color or image
   * @returns {Rank}
   */
  setBackground(type, data) {
    if (!data) throw new Error("Falta campo : data");
    switch (type) {
      case "COLOR":
        this.data.background.type = "color";
        this.data.background.image = data && typeof data === "string" ? data : "#23272A";
        break;
      case "IMAGE":
        this.data.background.type = "image";
        this.data.background.image = data;
        break;
      default:
        throw new Error(`Tipo de fondo no compatible "${type}"`);
    }

    return this;
  }

  /**
   * Avatar de usuario
   * @param {string|Buffer} data Avatar data
   * @returns {Rank}
   */
  setAvatar(data) {
    if (!data) throw new Error(`Invalid avatar type "${typeof data}"!`);
    this.data.avatar.source = data;
    return this;
  }

  /**
   * Construye la tarjeta de rango
   * @param {object} ops Fonts
   * @param {string} [ops.fontX="MANROPE_BOLD"] Bold font family
   * @param {string} [ops.fontY="MANROPE_REGULAR"] Regular font family
   * @returns {Promise<Buffer>}
   */
  async build(ops = { fontX: "MANROPE_BOLD,NOTO_COLOR_EMOJI", fontY: "MANROPE_BOLD,NOTO_COLOR_EMOJI" }) {
    if (typeof this.data.currentXP.data !== "number") throw new Error(`Se espera que currentXP sea un número, se recibe ${typeof this.data.currentXP.data}!`);
    if (typeof this.data.requiredXP.data !== "number") throw new Error(`Se espera queXP sea un número, se recibe ${typeof this.data.requiredXP.data}!`);
    if (!this.data.avatar.source) throw new Error("No se ha encontrado la fuente del avatar.");
    if (!this.data.username.name) throw new Error("Falta el nombre de usuario");

    let bg = null;
    if (this.data.background.type === "image") bg = await Canvas.loadImage(this.data.background.image);
    let avatar = await Canvas.loadImage(this.data.avatar.source);

    // crear instancia de lienzo
    const canvas = Canvas.createCanvas(this.data.width, this.data.height);
    const ctx = canvas.getContext("2d");

    // crear fondo
    if (!!bg) {
      ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);
    } else {
      ctx.fillStyle = this.data.background.image;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    // añadir superposición
    if (!!this.data.overlay.display) {
      ctx.globalAlpha = this.data.overlay.level || 1;
      ctx.fillStyle = this.data.overlay.color;
      ctx.fillRect(20, 20, canvas.width - 40, canvas.height - 40);
    }

    // restablecer transparencia
    ctx.globalAlpha = 1;

    // dibujar nombre de usuario
    ctx.font = `bold 36px ${ops.fontX}`;
    ctx.fillStyle = this.data.username.color;
    ctx.textAlign = "start";
    const name = Util.shorten(this.data.username.name, 10);

    // aplicar nombre de usuario
    !this.data.renderEmojis ? ctx.fillText(`${name}`, 257 + 18.5, 164) : await Util.renderEmoji(ctx, name, 257 + 18.5, 164);

    // discriminador de dibujos
    if (!this.data.discriminator.discrim) throw new Error("Missing discriminator!");
    const discrim = `${this.data.discriminator.discrim}`;
    if (discrim) {
      ctx.font = `36px ${ops.fontY}`;
      ctx.fillStyle = this.data.discriminator.color;
      ctx.textAlign = "center";
      ctx.strokeText(`#${discrim.substr(0, 4)}`, ctx.measureText(name).width + 20 + 335, 164);
      ctx.fillText(`#${discrim.substr(0, 4)}`, ctx.measureText(name).width + 20 + 335, 164);
    }

    // nivel de llenado
    if (this.data.level.display && !isNaN(this.data.level.data)) {
      ctx.font = `bold 18px ${ops.fontX}`;
      ctx.fillStyle = this.data.level.textColor;
      ctx.strokeText(this.data.level.displayText, 790 - ctx.measureText(Util.toAbbrev(parseInt(this.data.level.data))).width, 82);
      ctx.fillText(this.data.level.displayText, 790 - ctx.measureText(Util.toAbbrev(parseInt(this.data.level.data))).width, 82);

      ctx.font = `bold 32px ${ops.fontX}`;
      ctx.fillStyle = this.data.level.color;
      ctx.textAlign = "end";
      ctx.strokeText("#" + Util.toAbbrev(parseInt(this.data.level.data)), 860, 82);
      ctx.fillText("#" + Util.toAbbrev(parseInt(this.data.level.data)), 860, 82);
    }

    // llenar rango
    if (this.data.rank.display && !isNaN(this.data.rank.data)) {
      ctx.font = `bold 18px ${ops.fontX}`;
      ctx.fillStyle = this.data.rank.textColor;
      ctx.strokeText(this.data.rank.displayText, 710 - ctx.measureText(Util.toAbbrev(parseInt(this.data.level.data)) || "-").width - 7 - ctx.measureText(this.data.level.displayText).width - 7 - ctx.measureText(Util.toAbbrev(parseInt(this.data.rank.data)) || "-").width, 82);
      ctx.fillText(this.data.rank.displayText, 710 - ctx.measureText(Util.toAbbrev(parseInt(this.data.level.data)) || "-").width - 7 - ctx.measureText(this.data.level.displayText).width - 7 - ctx.measureText(Util.toAbbrev(parseInt(this.data.rank.data)) || "-").width, 82);

      ctx.font = `bold 32px ${ops.fontX}`;
      ctx.fillStyle = this.data.rank.color;
      ctx.textAlign = "end";
      ctx.strokeText("#" + Util.toAbbrev(parseInt(this.data.rank.data)), 790 - ctx.measureText(Util.toAbbrev(parseInt(this.data.level.data)) || "-").width - 7 - ctx.measureText(this.data.level.displayText).width, 82);
      ctx.fillText("#" + Util.toAbbrev(parseInt(this.data.rank.data)), 790 - ctx.measureText(Util.toAbbrev(parseInt(this.data.level.data)) || "-").width - 7 - ctx.measureText(this.data.level.displayText).width, 82);
    }

    // mostrar progreso
    ctx.font = `bold 30px ${ops.fontX}`;
    ctx.fillStyle = this.data.requiredXP.color;
    ctx.textAlign = "start";
    ctx.lineWidth = 1;
    ctx.strokeText("/ " + Util.toAbbrev(this.data.requiredXP.data), 670 + ctx.measureText(Util.toAbbrev(this.data.currentXP.data)).width + 15, 164);
    ctx.fillText("/ " + Util.toAbbrev(this.data.requiredXP.data), 670 + ctx.measureText(Util.toAbbrev(this.data.currentXP.data)).width + 15, 164);

    ctx.fillStyle = this.data.currentXP.color;
    ctx.lineWidth = 1;
    ctx.strokeText(Util.toAbbrev(this.data.currentXP.data), 670, 164);
    ctx.fillText(Util.toAbbrev(this.data.currentXP.data), 670, 164);

    // dibujar la barra de progreso
    ctx.beginPath();
    if (!!this.data.progressBar.rounded) {
      // bg
      ctx.fillStyle = this.data.progressBar.track.color;
      ctx.arc(257 + 615, 147.5 + 18.5 + 36.25, 18.75, 1.5 * Math.PI, 0.5 * Math.PI, false);
      ctx.lineWidth = 3;
      ctx.stroke();
      ctx.fill();
      ctx.lineWidth = 3;
      ctx.strokeRect(257 + 18.5, 147.5 + 36.25, 615 - 18.5, 37.5);
      ctx.fillRect(257 + 18.5, 147.5 + 36.25, 615 - 18.5, 37.5);
      ctx.arc(257 + 18.5, 147.5 + 18.5 + 36.25, 18.5, 1.5 * Math.PI, 0.5 * Math.PI, true);
      ctx.fill();

      ctx.beginPath();
      // aplicar color
      if (this.data.progressBar.bar.type === "gradient") {
        let gradientContext = ctx.createRadialGradient(this._calculateProgress, 0, 500, 0, 0, 0);
        this.data.progressBar.bar.color.forEach((color, index) => {
          gradientContext.addColorStop(index, color);
        });
        ctx.fillStyle = gradientContext;
      } else {
        ctx.fillStyle = this.data.progressBar.bar.color;
      }

      // barra de progreso
      ctx.arc(257 + 18.5, 147.5 + 18.5 + 36.25, 18.5, 1.5 * Math.PI, 0.5 * Math.PI, true);
      ctx.lineWidth = 3;
      ctx.stroke();
      ctx.fill();
      ctx.fillRect(257 + 18.5, 147.5 + 36.25, this._calculateProgress, 37.5);
      ctx.arc(257 + 18.5 + this._calculateProgress, 147.5 + 18.5 + 36.25, 18.75, 1.5 * Math.PI, 0.5 * Math.PI, false);
      ctx.fill();
    } else {

      // barra de progreso
      ctx.fillStyle = this.data.progressBar.bar.color;
      ctx.lineWidth = 1;
      ctx.strokeRect(this.data.progressBar.x, this.data.progressBar.y, this._calculateProgress, this.data.progressBar.height);
      ctx.fillRect(this.data.progressBar.x, this.data.progressBar.y, this._calculateProgress, this.data.progressBar.height);

      // esquema
      ctx.beginPath();
      ctx.strokeStyle = this.data.progressBar.track.color;
      ctx.lineWidth = 7;
      ctx.strokeRect(this.data.progressBar.x, this.data.progressBar.y, this.data.progressBar.width, this.data.progressBar.height);
    }

    ctx.save();

    // circulo
    ctx.beginPath();
    ctx.arc(125 + 10, 125 + 20, 100, 0, Math.PI * 2, true);
    ctx.lineWidth = this.data.status.width;
    ctx.stroke();
    ctx.closePath();
    ctx.clip();

    // dibujar avatar
    ctx.drawImage(avatar, 35, 45, this.data.avatar.width + 20, this.data.avatar.height + 20);
    ctx.restore();

    // estado usuario
    if (!!this.data.status.circle) {
      ctx.beginPath();
      ctx.fillStyle = this.data.status.color;
      ctx.arc(215, 205, 20, 0, 2 * Math.PI);
      ctx.lineWidth = this.data.status.width;
      ctx.stroke();
      ctx.fill();
      ctx.closePath();
    } else if (!this.data.status.circle && this.data.status.width !== false) {
      ctx.beginPath();
      ctx.arc(135, 145, 100, 0, Math.PI * 2, true);
      ctx.strokeStyle = this.data.status.color;
      ctx.lineWidth = this.data.status.width;
      ctx.stroke();
    }

    return canvas.encode("png");
  }

  /**
   * Calculates progress
   * @type {number}
   * @private
   * @ignore
   */
  get _calculateProgress() {
    const cx = this.data.currentXP.data;
    const rx = this.data.requiredXP.data;

    if (rx <= 0) return 1;
    if (cx > rx) return parseInt(this.data.progressBar.width) || 0;

    let width = (cx * 615) / rx;
    if (width > this.data.progressBar.width) width = this.data.progressBar.width;
    return parseInt(width) || 0;
  }

}

module.exports = Rank;