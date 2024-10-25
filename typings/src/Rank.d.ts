export = Rank;
/**
 * @kind class
 * @description Rank card creator
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
  .setBorder(["#22274a", "#001eff"], "vertical")
  .setCurrentXP(userData.xp)
  .setRequiredXP(userData.requiredXP)
  .setRank(1, "RANK", true)
  .setLevel(20, "LEVEL", true)
  .setStatus("online")
  .setProgressBar(["#14C49E", "#FF0000"], "GRADIENT", true)
  .setUsername(data.global_name, data.discriminator)
  .setCreatedTimestamp(data.createdTimestamp);

const rankImage = await rank.build("Cascadia Code PL");
canvacard.write(rankImage, "./rank.png");
 * ```
 */
declare class Rank {
    /**
     * @param {string} userId User ID
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
            customBadges: any[];
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
     * @method setAvatar
     * @name setAvatar
     * @description Set the user avatar
     * @param {string} avatarUrl Avatar URL
     * @param {string} AvatarDecorationData Avatar decoration asset
     * @param {boolean} squareAvatar Square avatar
     * @returns {Rank} The current instance of Rank
     * @throws {APIError} If the URL or asset is invalid
     */
    setAvatar(avatarUrl: string, AvatarDecorationData: string, squareAvatar?: boolean): Rank;
    /**
     * @method setBanner
     * @name setBanner
     * @description Set the user banner
     * @param {string} bannerUrl Banner URL
     * @param {boolean} moreBackgroundBlur More background blur
     * @param {boolean} disableBackgroundBlur Disable background blur
     * @param {number} backgroundBrightness Background brightness
     * @returns {Rank} The current instance of Rank
     * @throws {APIError} If the URL or asset is invalid
     */
    setBanner(bannerUrl: string, moreBackgroundBlur?: boolean, disableBackgroundBlur?: boolean, backgroundBrightness?: number): Rank;
    /**
     * @method setBadges
     * @name setBadges
     * @description Set the user badges and frame
     * @param {number} flags User flags
     * @param {boolean} bot Whether the user is a bot or not
     * @param {boolean} frame Badge frame
     * @param {string[]} customBadges Custom badges
     * @returns {Rank} The current instance of Rank
     * @throws {APIError} If the URL or asset is invalid
     */
    setBadges(flags: number, bot?: boolean, frame?: boolean, customBadges?: string[]): Rank;
    /**
     * @method setBorder
     * @name setBorder
     * @description Set the border of the card
     * @param {string | string[]} color HEX color of the border, can be gradient if 2 colors are used
     * @param {string} allign Gradient alignment if 2 colors are used
     * @returns {Rank} The current instance of Rank
     * @throws {APIError} If the URL or asset is invalid
     */
    setBorder(color: string | string[], allign?: string): Rank;
    /**
     * @method setUsername
     * @name setUsername
     * @description Set the username of the user
     * @param {string} name Username of the user
     * @param {string} [discriminator="0"] Discriminator of the user
     * @param {string} [color="#FFFFFF"] Color of the username
     * @param {string} [customUsername=null] Custom username
     * @param {string} [customTag=null] Custom tag
     * @returns {Rank} The current instance of Rank
     * @throws {APIError} If the URL or asset is invalid
     */
    setUsername(name: string, discriminator?: string, color?: string, customUsername?: string, customTag?: string): Rank;
    /**
     * @method setCurrentXP
     * @name setCurrentXP
     * @description Set the current experience
     * @param {number} data Current experience data
     * @param {string} [color="#FFFFFF"] Text color
     * @returns {Rank} The current instance of Rank
     * @throws {APIError} If the URL or asset is invalid
     */
    setCurrentXP(data: number, color?: string): Rank;
    /**
     * @method setRequiredXP
     * @name setRequiredXP
     * @description Set the required experience
     * @param {number} data Required experience data
     * @param {string} [color="#FFFFFF"] Text color
     * @returns {Rank} The current instance of Rank
     * @throws {APIError} If the URL or asset is invalid
     */
    setRequiredXP(data: number, color?: string): Rank;
    /**
     * @method setRank
     * @name setRank
     * @description Set the user rank
     * @param {number} data Rank data
     * @param {string} [text="RANK"] Display text
     * @param {boolean} [display=false] Display system rank or not
     * @returns {Rank} The current instance of Rank
     * @throws {APIError} If the URL or asset is invalid
     */
    setRank(data: number, text?: string, display?: boolean): Rank;
    /**
     * @method setLevel
     * @name setLevel
     * @description Establece el nivel del usuario
     * @param {number} data Level data
     * @param {string} [text="LEVEL"] Display text
     * @returns {Rank} The current instance of Rank
     * @throws {APIError} If the URL or asset is invalid
     */
    setLevel(data: number, text?: string): Rank;
    /**
     * @method setProgressBar
     * @name setProgressBar
     * @description Set the progress bar
     * @param {string | string[]} color Color of the progress bar, can be gradient if 2 colors are used
     * @param {string} [fillType="COLOR"] Type of progress bar
     * @param {boolean} [rounded=true] Rounded corners of the progress bar
     * @returns {Rank} The current instance of Rank
     * @throws {APIError} If the URL or asset is invalid
     */
    setProgressBar(color: string | string[], fillType?: string, rounded?: boolean): Rank;
    /**
     * @method setStatus
     * @name setStatus
     * @description Set the user presence status
     * @param {string} presenceStatus Presence status
     * @returns {Rank} The current instance of Rank
     * @throws {APIError} If the URL or asset is invalid
     */
    setStatus(presenceStatus: string): Rank;
    /**
     * @method setCreatedTimestamp
     * @name setCreatedTimestamp
     * @description Set the user created timestamp
     * @param {number} timestamp Timestamp of when the user joined Discord
     * @param {string | Date} customDate Custom date format for the timestamp
     * @returns {Rank} The current instance of Rank
     * @throws {APIError} If the URL or asset is invalid
     */
    setCreatedTimestamp(timestamp: number, customDate: string | Date): Rank;
    /**
     * @method build
     * @name build
     * @description Build the rank card
     * @param {string} [font="Arial"] Font to use in the card
     * @returns {Promise<Buffer>} Card image in buffer format
     * @throws {APIError} Missing field: data
     */
    build(font?: string): Promise<Buffer>;
}
//# sourceMappingURL=Rank.d.ts.map