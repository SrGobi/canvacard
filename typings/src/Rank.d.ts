export = Rank;
declare class Rank {
    /**
     * Rank image builder
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
      canvacard.write(rankImage, "./card.png");
     * ```
     *
     * @param {string} userId ID del usuario
     */
    constructor(userId: string);
    data: {
        width: number;
        height: number;
        background: {
            type: string;
            image: string;
        };
        user: {
            id: string;
            username: any;
            bot: boolean;
            avatar: {
                source: any;
                x: number;
                y: number;
                height: number;
                width: number;
            };
            discriminator: string;
            public_flags: number;
            flags: number;
            banner: any;
            accent_color: number;
            avatar_decoration_data: {
                asset: any;
                sku_id: any;
                expires_at: any;
            };
            clan: any;
            tag: any;
            createdAt: any;
            createdTimestamp: number;
            defaultAvatarURL: any;
            avatarURL: any;
            bannerURL: any;
        };
        rankData: {
            rank: {
                display: boolean;
                data: number;
                textColor: string;
                color: string;
                displayText: string;
            };
            level: {
                data: number;
                textColor: string;
                color: string;
                displayText: string;
            };
            currentXP: {
                data: number;
                color: string;
            };
            requiredXP: {
                data: number;
                color: string;
            };
            progressBar: {
                rounded: boolean;
                x: number;
                y: number;
                height: number;
                width: number;
                bar: {
                    type: string;
                    color: string;
                };
            };
        };
        bannerData: {
            moreBackgroundBlur: boolean;
            disableBackgroundBlur: boolean;
            backgroundBrightness: number;
        };
        options: {
            badgesFrame: boolean;
            customBadges: boolean;
            borderColor: any;
            borderAllign: any;
            presenceStatus: any;
            customUsername: any;
            usernameColor: any;
            customSubtitle: any;
            subtitleColor: any;
            customDate: any;
            customTag: any;
            tagColor: any;
            localDateType: string;
            squareAvatar: any;
        };
    };
    /**
     * Establece el avatar del usuario
     * @param {string} avatarUrl URL del avatar
     * @param {string} AvatarDecorationData Asset de decoración del avatar
     * @param {boolean} squareAvatar Cambiar la forma del avatar a un cuadrado
     * @param {string} presenceStatus Estado de presencia
     * @returns {Rank} La instancia de la clase Rank
     * @throws {Error} Si el URL o el asset no son válidos
     */
    setAvatar(avatarUrl: string, AvatarDecorationData: string, squareAvatar?: boolean): Rank;
    /**
     * Establece el banner del usuario
     * @param {string} bannerUrl URL del banner
     * @param {boolean} moreBackgroundBlur Más desenfoque de fondo
     * @param {boolean} disableBackgroundBlur Desactivar desenfoque de fondo
     * @param {number} backgroundBrightness Brillo de fondo
     * @returns {Rank} La instancia de la clase Rank
     * @throws {Error} Si el URL o el asset no son válidos
     */
    setBanner(bannerUrl: string, moreBackgroundBlur?: boolean, disableBackgroundBlur?: boolean, backgroundBrightness?: number): Rank;
    /**
     * Establece las insignias del usuario
     * @param {number} flags Insignias del usuario
     * @param {boolean} bot Si el usuario es un bot o no
     * @param {boolean} frame Marco de insignias
     * @returns {Rank} La instancia de la clase Rank
     * @throws {Error} Si el URL o el asset no son válidos
     */
    setBadges(flags: number, bot?: boolean, frame?: boolean): Rank;
    /**
     * Establece el borde de la tarjeta
     * @param {string | string[]} color Color HEX del borde, puede ser degradado si se usan 2 colores
     * @param {string} allign Alineación de degradado si se usan 2 colores
     * @returns {Rank} La instancia de la clase Rank
     * @throws {Error} Si el URL o el asset no son válidos
     */
    setBorder(color: string | string[], allign?: string): Rank;
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
    setUsername(name: string, discriminator?: string, color?: string, customUsername: string, customTag: string): Rank;
    setBorderColor(color: any): this;
    /**
     * Establece el nivel de experiencia actual
     * @param {number} data Datos de experiencia actual
     * @param {string} [color="#FFFFFF"] Color del texto
     * @returns {Rank} La instancia de la clase Rank
     * @throws {Error} Si el URL o el asset no son válidos
     */
    setCurrentXP(data: number, color?: string): Rank;
    /**
     * Establece la experiencia requerida
     * @param {number} data Datos de experiencia requerida
     * @param {string} [color="#FFFFFF"] Color del texto
     * @returns {Rank} La instancia de la clase Rank
     * @throws {Error} Si el URL o el asset no son válidos
     */
    setRequiredXP(data: number, color?: string): Rank;
    /**
     * Establece el ranking del usuario
     * @param {number} data Datos de ranking
     * @param {string} [text="RANK"] Texto de visualización
     * @param {boolean} [display=false] Mostrar o no el sistema de rango
     * @returns {Rank} La instancia de la clase Rank
     * @throws {Error} Si el URL o el asset no son válidos
     */
    setRank(data: number, text?: string, display?: boolean): Rank;
    /**
     * Establece el nivel del usuario
     * @param {number} data Datos de nivel
     * @param {string} [text="LEVEL"] Texto de visualización
     * @returns {Rank} La instancia de la clase Rank
     * @throws {Error} Si el URL o el asset no son válidos
     */
    setLevel(data: number, text?: string): Rank;
    /**
     * Establece la barra de progreso
     * @param {string | string[]} color Color de la barra de progreso
     * @param {string} [fillType="COLOR"] Tipo de relleno
     * @param {boolean} [rounded=true] Redondear o no
     * @returns {Rank} La instancia de la clase Rank
     * @throws {Error} Si el URL o el asset no son válidos
     */
    setProgressBar(color: string | string[], fillType?: string, rounded?: boolean): Rank;
    /**
     * Establece el estado del usuario
     * @param {string} presenceStatus Estado del usuario
     * @returns {Rank} La instancia de la clase Rank
     * @throws {Error} Si el URL o el asset no son válidos
     */
    setStatus(presenceStatus: string): Rank;
    /**
     * Establece la marca de tiempo de creación
     * @param {number} timestamp Marca de tiempo de creación
     * @param {string | Date} customDate Fecha o texto personalizado para usar en lugar de cuando el usuario se unió a Discord
     * @returns {Rank} La instancia de la clase Rank
     * @throws {Error} Si el URL o el asset no son válidos
     */
    setCreatedTimestamp(timestamp: number, customDate: string | Date): Rank;
    /**
     * Construye la tarjeta de rango
     * @param {string} [font="Helvetica"] Familia tipográfica
     * @returns {Promise<Buffer>} La tarjeta de rango en formato de buffer
     */
    build(font?: string): Promise<Buffer>;
}
//# sourceMappingURL=Rank.d.ts.map