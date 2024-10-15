export = ProfileImage;
declare class ProfileImage {
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
  constructor(userId: string, options?: object);
  userId: string;
  options: any;
  canvas: import("@napi-rs/canvas").Canvas;
  ctx: import("@napi-rs/canvas").SKRSContext2D;
  fetchData(): Promise<this>;
  data: any;
  /**
   * Construye la tarjeta de perfil
   * @param {string} [font="Arial"] Familia tipográfica
   * @returns {Promise<Buffer>}
   */
  build(font?: string): Promise<Buffer>;
}
//# sourceMappingURL=Profile.d.ts.map