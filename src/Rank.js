const { createCanvas } = require("@napi-rs/canvas");
const {
  generateBadgesCanvas,
  genBase,
  genFrame,
  genTextAndAvatar,
  genAvatarFrame,
  genBorder,
  genBotVerifBadge,
  genXpBar,
  addShadow,
} = require('./utils/canvas.utils');


/**
 * Creador tarjetas de rango
 */
class Rank {
  /**
   * <details open>
   *  <summary>PREVIEW</summary>
   * <br>
   *   <a>
   *     <img src="https://raw.githubusercontent.com/SrGobi/canvacard/refs/heads/test/rank_1.png" alt="Rank Card Preview 1">
   *   </a>
   *   <a>
   *     <img src="https://raw.githubusercontent.com/SrGobi/canvacard/refs/heads/test/rank_2.png" alt="Rank Card Preview 2">
   *   </a>
   *   <a>
   *     <img src="https://raw.githubusercontent.com/SrGobi/canvacard/refs/heads/test/rank_3.png" alt="Rank Card Preview 3">
   *   </a>
   * </details>
   * 
   * @example
   * ```js
    const rank = new canvacard.Rank(data.id)
      .setAvatar(data.avatarURL, data.avatar_decoration_data.asset)
      .setBanner(data.bannerURL, true)
      .setBadges(data.flags, data.bot, true)
      .setCurrentXP(userData.xp)
      .setRequiredXP(userData.requiredXP)
      .setRank(1, "RANK", true)
      .setLevel(20, "LEVEL", true)
      .setStatus("online")
      .setProgressBar(["#14C49E", "#FF0000"], "GRADIENT", true)
      .setProgressBarTrack("#FFFFFF")
      .setOverlay("#000000", 1, true)
      .setUsername(data.global_name, data.discriminator)
      .setCreatedTimestamp(data.createdTimestamp);

    const rankImage = await rank.build("Cascadia Code PL");
    canvacard.write(rankImage, "./rank.png");
   * ```
   *
   * @param {string} userId ID del usuario
   */
  constructor(userId) {
    this.data = {
      width: 885,
      height: 303,
      background: {
        type: "color",
        image: "#23272A"
      },
      user: {
        id: userId,
        username: null,
        bot: false,
        avatar: {
          source: null,
          x: 70,
          y: 50,
          height: 180,
          width: 180
        },
        discriminator: '0',
        public_flags: 0,
        flags: 0,
        banner: null,
        accent_color: 0,
        avatar_decoration_data: {
          asset: null,
          sku_id: null,
          expires_at: null
        },
        clan: null,
        tag: null,
        createdAt: null,
        createdTimestamp: 0,
        defaultAvatarURL: null,
        avatarURL: null,
        bannerURL: null
      },
      rankData: {
        rank: {
          display: false,
          data: 1,
          textColor: "#FFFFFF",
          color: "#F3F3F3",
          displayText: "RANK"
        },
        level: {
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
        progressBar: {
          rounded: true,
          x: 275.5,
          y: 183.75,
          height: 37.5,
          width: 596.5,
          bar: {
            type: "color",
            color: "#FFFFFF"
          }
        },
      },
      bannerData: {
        moreBackgroundBlur: false,
        disableBackgroundBlur: false,
        backgroundBrightness: 0
      },
      options: {
        badgesFrame: false,
        customBadges: [],
        borderColor: null,
        borderAllign: null,
        presenceStatus: null,
        customUsername: null,
        usernameColor: null,
        customSubtitle: null,
        subtitleColor: null,
        customDate: null,
        customTag: null,
        tagColor: null,
        localDateType: "en",
        squareAvatar: null,
      }
    };
  }

  /**
   * Establece el avatar del usuario
   * @param {string} avatarUrl URL del avatar
   * @param {string} AvatarDecorationData Asset de decoración del avatar
   * @param {boolean} squareAvatar Cambiar la forma del avatar a un cuadrado
   * @returns {Rank} La instancia de la clase Rank
   * @throws {Error} Si el URL o el asset no son válidos
   */
  setAvatar(avatarUrl, AvatarDecorationData, squareAvatar = false) {
    if (!avatarUrl) throw new Error(`Invalid avatar type "${typeof avatarUrl}"!`);
    this.data.user.avatarURL = avatarUrl;
    this.data.user.avatar_decoration_data.asset = AvatarDecorationData;
    this.data.options.squareAvatar = !!squareAvatar;
    return this;
  }

  /**
   * Establece el banner del usuario
   * @param {string} bannerUrl URL del banner
   * @param {boolean} moreBackgroundBlur Más desenfoque de fondo
   * @param {boolean} disableBackgroundBlur Desactivar desenfoque de fondo
   * @param {number} backgroundBrightness Brillo de fondo
   * @returns {Rank} La instancia de la clase Rank
   * @throws {Error} Si el URL o el asset no son válidos
   */
  setBanner(bannerUrl, moreBackgroundBlur = false, disableBackgroundBlur = false, backgroundBrightness = 0) {
    if (!bannerUrl) throw new Error(`Invalid banner type "${typeof bannerUrl}"!`);
    if (typeof moreBackgroundBlur !== "boolean") throw new Error(`El tipo de desenfoque de fondo debe ser un booleano, recibido ${typeof moreBackgroundBlur}!`);
    if (typeof disableBackgroundBlur !== "boolean") throw new Error(`El tipo de desenfoque de fondo debe ser un booleano, recibido ${typeof disableBackgroundBlur}!`);
    if (backgroundBrightness && typeof backgroundBrightness !== "number") throw new Error(`El tipo de brillo de fondo debe ser un número, recibido ${typeof backgroundBrightness}!`);
    this.data.user.bannerURL = bannerUrl;
    this.data.bannerData.moreBackgroundBlur = moreBackgroundBlur;
    this.data.bannerData.disableBackgroundBlur = disableBackgroundBlur;
    if (backgroundBrightness && typeof backgroundBrightness === "number") {
      this.data.bannerData.backgroundBrightness = backgroundBrightness;
    }
    return this;
  }

  /**
   * Establece las insignias del usuario
   * @param {number} flags Insignias del usuario
   * @param {boolean} bot Si el usuario es un bot o no
   * @param {boolean} frame Marco de insignias
   * @param {string[]} customBadges Insignias personalizadas
   * @returns {Rank} La instancia de la clase Rank
   * @throws {Error} Si el URL o el asset no son válidos
   */
  setBadges(flags, bot = false, frame = false, customBadges = []) {
    if (typeof flags !== "number") throw new Error(`El tipo de insignias debe ser un número, recibido ${typeof flags}!`);
    this.data.user.flags = flags;
    this.data.user.bot = bot && typeof bot === "boolean" ? bot : false;
    this.data.options.badgesFrame = !!frame;
    this.data.options.customBadges = customBadges && Array.isArray(customBadges) ? customBadges : [];
    return this;
  }

  /**
   * Establece el borde de la tarjeta
   * @param {string | string[]} color Color HEX del borde, puede ser degradado si se usan 2 colores 
   * @param {string} allign Alineación de degradado si se usan 2 colores 
   * @returns {Rank} La instancia de la clase Rank
   * @throws {Error} Si el URL o el asset no son válidos
   */
  setBorder(color, allign = "") {
    if (typeof color !== "string" && !Array.isArray(color)) throw new Error(`El tipo de color debe ser una cadena o un array, recibido ${typeof color}!`);
    if (typeof allign !== "string") throw new Error(`El tipo de alineación de degradado debe ser una cadena, recibido ${typeof allign}!`);
    this.data.options.borderColor = color.slice(0, 20);
    this.data.options.borderAllign = allign;
    return this;
  }

  /**
   * Establece el nombre de usuario
   * @param {string} name Nombre de usuario
   * @param {string} [discriminator="0"] Discriminador del usuario
   * @param {string} [color="#FFFFFF"] Color del texto
   * @param {string} customUsername Nombre de usuario personalizado
   * @param {string} customTag Tag personalizado
   * @returns {Rank} La instancia de la clase Rank
   * @throws {Error} Si el URL o el asset no son válidos
   */
  setUsername(name, discriminator, color = "#FFFFFF", customUsername, customTag) {
    if (typeof name !== "string") throw new Error(`Se espera que el nombre de usuario sea una cadena, se recibe ${typeof name}!`);
    this.data.user.username = name;
    this.data.user.discriminator = discriminator && typeof discriminator === "string" ? discriminator : "0";
    color === "string" ? color : "#FFFFFF";
    this.data.options.usernameColor = color;
    if (customUsername) {
      this.data.options.customUsername = customUsername;
    }
    if (customTag) {
      this.data.options.customTag = customTag;
    }
    return this;
  }

  setBorderColor(color) {
    if (typeof color !== "string") throw new Error(`El tipo de color debe ser una cadena, recibido ${typeof color}!`);
    this.data.borderColor = color;
    return this;
  }

  /**
   * Establece el nivel de experiencia actual
   * @param {number} data Datos de experiencia actual
   * @param {string} [color="#FFFFFF"] Color del texto
   * @returns {Rank} La instancia de la clase Rank
   * @throws {Error} Si el URL o el asset no son válidos
   */
  setCurrentXP(data, color = "#FFFFFF") {
    if (typeof data !== "number") throw new Error(`El tipo de dato xp actual debe ser un número, recibido ${typeof data}!`);
    this.data.rankData.currentXP.data = data;
    this.data.rankData.currentXP.color = color && typeof color === "string" ? color : "#FFFFFF";
    return this;
  }

  /**
   * Establece la experiencia requerida
   * @param {number} data Datos de experiencia requerida
   * @param {string} [color="#FFFFFF"] Color del texto
   * @returns {Rank} La instancia de la clase Rank
   * @throws {Error} Si el URL o el asset no son válidos
   */
  setRequiredXP(data, color = "#FFFFFF") {
    if (typeof data !== "number") throw new Error(`El tipo de dato requerido xp debe ser un número, recibido ${typeof data}!`);
    this.data.rankData.requiredXP.data = data;
    this.data.rankData.requiredXP.color = color && typeof color === "string" ? color : "#FFFFFF";
    return this;
  }

  /**
   * Establece el ranking del usuario
   * @param {number} data Datos de ranking
   * @param {string} [text="RANK"] Texto de visualización
   * @param {boolean} [display=false] Mostrar o no el sistema de rango
   * @returns {Rank} La instancia de la clase Rank
   * @throws {Error} Si el URL o el asset no son válidos
   */
  setRank(data, text = "RANK", display = false) {
    if (typeof data !== "number") throw new Error(`Los datos de nivel deben ser un número, recibido ${typeof data}!`);
    this.data.rankData.rank.data = data;
    this.data.rankData.rank.display = !!display;
    this.data.rankData.rank.displayText = text;
    return this;
  }

  /**
   * Establece el nivel del usuario
   * @param {number} data Datos de nivel
   * @param {string} [text="LEVEL"] Texto de visualización
   * @returns {Rank} La instancia de la clase Rank
   * @throws {Error} Si el URL o el asset no son válidos
   */
  setLevel(data, text = "LEVEL") {
    if (typeof data !== "number") throw new Error(`Los datos de nivel deben ser un número, recibido ${typeof data}!`);
    this.data.rankData.level.data = data;
    this.data.rankData.level.displayText = text;
    return this;
  }

  /**
   * Establece la barra de progreso
   * @param {string | string[]} color Color de la barra de progreso
   * @param {string} [fillType="COLOR"] Tipo de relleno
   * @param {boolean} [rounded=true] Redondear o no
   * @returns {Rank} La instancia de la clase Rank
   * @throws {Error} Si el URL o el asset no son válidos
   */
  setProgressBar(color, fillType = "COLOR", rounded = true) {
    if (fillType === "COLOR") {
      if (typeof color !== "string") throw new Error(`El tipo de color debe ser una cadena, recibida ${typeof color}!`);
      this.data.rankData.progressBar.bar.color = color;
      this.data.rankData.progressBar.bar.type = "color";
    } else if (fillType === "GRADIENT") {
      if (!Array.isArray(color)) throw new Error(`El tipo de color debe ser Array, recibido ${typeof color}!`);
      this.data.rankData.progressBar.bar.color = color.slice(0, 20);
      this.data.rankData.progressBar.bar.type = "gradient";
    } else {
      throw new Error(`Tipo de barra de progreso no compatible "${fillType}"!`);
    }
    this.data.rankData.progressBar.rounded = !!rounded;
    return this;
  }

  /**
   * Establece el estado del usuario
   * @param {string} presenceStatus Estado del usuario
   * @returns {Rank} La instancia de la clase Rank
   * @throws {Error} Si el URL o el asset no son válidos
   */
  setStatus(presenceStatus) {
    this.data.options.presenceStatus = presenceStatus;
    return this;
  }

  /**
   * Establece la marca de tiempo de creación
   * @param {number} timestamp Marca de tiempo de creación
   * @param {string | Date} customDate Fecha o texto personalizado para usar en lugar de cuando el usuario se unió a Discord
   * @returns {Rank} La instancia de la clase Rank
   * @throws {Error} Si el URL o el asset no son válidos
   */
  setCreatedTimestamp(timestamp, customDate) {
    if (typeof timestamp !== "number") throw new Error(`El tipo de marca de tiempo debe ser un número, recibido ${typeof timestamp}!`);
    this.data.user.createdTimestamp = timestamp;
    if (customDate) {
      this.data.options.customDate = customDate;
    }
    return this;
  }

  /**
   * Construye la tarjeta de rango
   * @param {string} [font="Arial"] Fuente de texto para la tarjeta
   * @returns {Promise<Buffer>} Imagen de la tarjeta de rango en formato de buffer
   */
  async build(font = "Arial") {
    if (!this.data.user.avatarURL) throw new Error("Avatar no disponible.");
    if (!this.data.user.username) throw new Error("Nombre de usuario no disponible.");

    const canvas = createCanvas(this.data.width, this.data.height);
    const ctx = canvas.getContext("2d");

    const userAvatar = (this.data.user.avatarURL ?? this.data.user.defaultAvatarURL) + '?size=512';
    const userBanner = this.data.user.bannerURL ? this.data.user.bannerURL + '?size=512' : null;

    // Obtener badges y generar canvas junto con su longitud
    const badgesData = await generateBadgesCanvas(this.data.user, this.data.options);

    // Establecer fondo y recorte inicial
    ctx.roundRect(0, 0, this.data.width, this.data.height, [34]);
    ctx.clip();

    // Dibujar base (fondo)
    const cardBase = await genBase(this.data.bannerData, userAvatar, userBanner);
    ctx.drawImage(cardBase, 0, 0);

    // Dibujar el marco decorativo
    const cardFrame = await genFrame(badgesData, this.data.options);
    ctx.drawImage(cardFrame, 0, 0);

    // Dibujar el avatar y los textos
    const cardTextAndAvatar = await genTextAndAvatar(this.data.user, this.data.rankData, this.data.options, userAvatar, font);
    const textAvatarShadow = addShadow(cardTextAndAvatar);
    ctx.drawImage(textAvatarShadow, 0, 0);
    ctx.drawImage(cardTextAndAvatar, 0, 0);

    // Dibujar barra de experiencia si está activada
    if (this.data.rankData.rank.display) {
      const xpBar = genXpBar({
        rankData: {
          currentXp: this.data.rankData.currentXP.data,
          requiredXp: this.data.rankData.requiredXP.data,
          rank: this.data.rankData.rank.data,
          level: this.data.rankData.level.data,
          barColor: this.data.rankData.progressBar.bar.color,
          levelColor: this.data.rankData.level.color,
          autoColorRank: true,
        },
      }, font);
      ctx.drawImage(xpBar, 0, 0);
    }

    // Dibujar bordes personalizados
    if (this.data.options.borderColor) {
      const border = await genBorder(this.data.options);
      ctx.drawImage(border, 0, 0);
    }

    // Dibujar insignias y verificación de bot
    if (this.data.user?.bot) {
      const botVerifBadge = await genBotVerifBadge(this.data.user, font);
      const shadowVerifBadge = addShadow(botVerifBadge);
      ctx.drawImage(shadowVerifBadge, 0, 0);
      ctx.drawImage(botVerifBadge, 0, 0);
    }

    // Dibujar marco del avatar si existe
    if (this.data.user?.avatar_decoration_data?.asset) {
      const avatarFrame = await genAvatarFrame(this.data.user, this.data.options);
      ctx.drawImage(avatarFrame, 0, 0);
    }

    return canvas.toBuffer("image/png");
  }
}

module.exports = Rank;