// canvacard/src/Profile.js
const { createCanvas } = require('@napi-rs/canvas');
const fetchUserData = require('./utils/fetch.utils');
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
} = require('./utils/profile-image.utils');

class ProfileImage {

  /**
   * Profile image builder
   * @example
   * await interaction.deferReply();
   * const user = interaction.options.getUser('user-option') || "939986359697956874";
   * const profile = new canvacard.ProfileImage(user.id, {
    badgesFrame: true,
    moreBackgroundBlur: true,
    presenceStatus: 'online',
    rankData: {
      currentXp: 2100,
      requiredXp: 3000,
      rank: 1,
      level: 20,
      barColor: '#fcdce1',
      levelColor: '#ada8c6',
      autoColorRank: true
    }
  });
   * await profile.build().then(data => {canvacard.write(data, "profile.png");})
   */

  /**
   * @param {string} userId ID del usuario
   * @param {object} [options={}] Opciones de la tarjeta
   */
  constructor(userId, options = {}) {
    this.userId = userId;
    this.options = options;
    this.canvas = createCanvas(885, 303);
    this.ctx = this.canvas.getContext('2d');
  }

  async fetchData() {
    this.data = await fetchUserData(this.userId);
    return this;
  }

  /**
   * Construye la tarjeta de perfil
   * @param {string} [font="Helvetica"] Familia tipográfica
   * @returns {Promise<Buffer>}
   */
  async build(font = "Helvetica") {
    const userAvatar = (this.data.avatarURL ?? this.data.defaultAvatarURL) + '?size=512';
    const userBanner = this.data.bannerURL ? this.data.bannerURL + '?size=512' : null;

    // Obtener badges y generar canvas junto con su longitud
    const badgesData = await generateBadgesCanvas(this.data, this.options);

    // Establecer fondo y recorte inicial
    this.ctx.roundRect(0, 0, 885, 303, [34]);
    this.ctx.clip();

    // Dibujar base (fondo)
    const cardBase = await genBase(this.options, userAvatar, userBanner);
    this.ctx.drawImage(cardBase, 0, 0);

    // Dibujar el marco decorativo
    const cardFrame = await genFrame(badgesData, this.options);
    this.ctx.drawImage(cardFrame, 0, 0);

    // Dibujar el avatar y los textos
    const cardTextAndAvatar = await genTextAndAvatar(this.data, this.options, userAvatar, font);
    const textAvatarShadow = addShadow(cardTextAndAvatar);
    this.ctx.drawImage(textAvatarShadow, 0, 0);
    this.ctx.drawImage(cardTextAndAvatar, 0, 0);

    // Configurar colores del borde según tema de perfil
    if (
      !this.options?.disableProfileTheme &&
      this.data?.decoration?.profileColors &&
      typeof this.options?.borderColor === 'undefined'
    ) {
      this.options.borderColor = this.data?.decoration?.profileColors;
      if (!this.options?.borderAllign) {
        this.options.borderAllign = 'vertical';
      }
    }

    // Dibujar bordes personalizados
    if (
      (typeof this.options?.borderColor === 'string' && this.options.borderColor) ||
      (Array.isArray(this.options?.borderColor) && this.options.borderColor.length > 0)
    ) {
      const border = await genBorder(this.options);
      this.ctx.drawImage(border, 0, 0);
    }

    // Dibujar insignias y verificación de bot
    if (this.data?.bot) {
      const botVerifBadge = await genBotVerifBadge(this.data);
      const shadowVerifBadge = addShadow(botVerifBadge);
      this.ctx.drawImage(shadowVerifBadge, 0, 0);
      this.ctx.drawImage(botVerifBadge, 0, 0);
    }

    // Dibujar insignias de usuario
    if (!this.options?.removeBadges) {
      const badgesShadow = addShadow(badgesData.canvas);
      this.ctx.drawImage(badgesShadow, 0, 0);
      this.ctx.drawImage(badgesData.canvas, 0, 0); // Usar el canvas de badges generado
    }

    // Dibujar barra de experiencia si está activada
    if (this.options?.rankData) {
      const xpBar = genXpBar(this.options);
      this.ctx.drawImage(xpBar, 0, 0);
    }

    // Dibujar marco del avatar si existe
    if (
      !this.options?.removeAvatarFrame &&
      this.data?.avatar_decoration_data?.asset
    ) {
      const avatarFrame = await genAvatarFrame(this.data, this.options);
      this.ctx.drawImage(avatarFrame, 0, 0);
    }

    return this.canvas.toBuffer('image/png');
  }
}

module.exports = ProfileImage;