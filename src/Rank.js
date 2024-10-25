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
const APIError = require("./utils/error.utils");
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
class Rank {
  /**
   * @param {string} userId User ID
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
   * @method setAvatar
   * @name setAvatar
   * @description Set the user avatar
   * @param {string} avatarUrl Avatar URL
   * @param {string} AvatarDecorationData Avatar decoration asset
   * @param {boolean} squareAvatar Square avatar
   * @returns {Rank} The current instance of Rank
   * @throws {APIError} If the URL or asset is invalid
   */
  setAvatar(avatarUrl, AvatarDecorationData, squareAvatar = false) {
    if (!avatarUrl) throw new APIError(`Invalid avatar type "${typeof avatarUrl}"!`);
    this.data.user.avatarURL = avatarUrl;
    this.data.user.avatar_decoration_data.asset = AvatarDecorationData;
    this.data.options.squareAvatar = !!squareAvatar;
    return this;
  }

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
  setBanner(bannerUrl, moreBackgroundBlur = false, disableBackgroundBlur = false, backgroundBrightness = 0) {
    if (!bannerUrl) throw new Error(`Invalid banner type "${typeof bannerUrl}"!`);
    if (typeof moreBackgroundBlur !== "boolean") throw new Error(`The background blur type must be a boolean, received ${typeof moreBackgroundBlur}!`);
    if (typeof disableBackgroundBlur !== "boolean") throw new Error(`The background blur type must be a boolean, received ${typeof disableBackgroundBlur}!`);
    if (backgroundBrightness && typeof backgroundBrightness !== "number") throw new Error(`The background brightness type must be a number, received ${typeof backgroundBrightness}!`);
    this.data.user.bannerURL = bannerUrl;
    this.data.bannerData.moreBackgroundBlur = moreBackgroundBlur;
    this.data.bannerData.disableBackgroundBlur = disableBackgroundBlur;
    if (backgroundBrightness && typeof backgroundBrightness === "number") {
      this.data.bannerData.backgroundBrightness = backgroundBrightness;
    }
    return this;
  }

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
  setBadges(flags, bot = false, frame = false, customBadges = []) {
    if (typeof flags !== "number") throw new APIError(`The type of badges must be a number, received ${typeof flags}!`);
    this.data.user.flags = flags;
    this.data.user.bot = bot && typeof bot === "boolean" ? bot : false;
    this.data.options.badgesFrame = !!frame;
    this.data.options.customBadges = customBadges && Array.isArray(customBadges) ? customBadges : [];
    return this;
  }

  /**
   * @method setBorder
   * @name setBorder
   * @description Set the border of the card
   * @param {string | string[]} color HEX color of the border, can be gradient if 2 colors are used
   * @param {string} allign Gradient alignment if 2 colors are used 
   * @returns {Rank} The current instance of Rank
   * @throws {APIError} If the URL or asset is invalid
   */
  setBorder(color, allign = "") {
    if (typeof color !== "string" && !Array.isArray(color)) throw new APIError(`The color type must be a string or array, received ${typeof color}!`);
    if (typeof allign !== "string") throw new Error(`The gradient alignment type must be a string, received ${typeof allign}!`);
    this.data.options.borderColor = color.slice(0, 20);
    this.data.options.borderAllign = allign;
    return this;
  }

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
  setUsername(name, discriminator, color = "#FFFFFF", customUsername, customTag) {
    if (typeof name !== "string") throw new APIError(`The username is expected to be a string, it is received ${typeof name}!`);
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

  /**
   * @method setCurrentXP
   * @name setCurrentXP
   * @description Set the current experience
   * @param {number} data Current experience data
   * @param {string} [color="#FFFFFF"] Text color
   * @returns {Rank} The current instance of Rank
   * @throws {APIError} If the URL or asset is invalid
   */
  setCurrentXP(data, color = "#FFFFFF") {
    if (typeof data !== "number") throw new APIError(`The current xp data type must be a number, received ${typeof data}!`);
    this.data.rankData.currentXP.data = data;
    this.data.rankData.currentXP.color = color && typeof color === "string" ? color : "#FFFFFF";
    return this;
  }

  /**
   * @method setRequiredXP
   * @name setRequiredXP
   * @description Set the required experience
   * @param {number} data Required experience data
   * @param {string} [color="#FFFFFF"] Text color
   * @returns {Rank} The current instance of Rank
   * @throws {APIError} If the URL or asset is invalid
   */
  setRequiredXP(data, color = "#FFFFFF") {
    if (typeof data !== "number") throw new APIError(`The required data type xp must be a number, received ${typeof data}!`);
    this.data.rankData.requiredXP.data = data;
    this.data.rankData.requiredXP.color = color && typeof color === "string" ? color : "#FFFFFF";
    return this;
  }

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
  setRank(data, text = "RANK", display = false) {
    if (typeof data !== "number") throw new APIError(`Los datos de nivel deben ser un número, recibido ${typeof data}!`);
    this.data.rankData.rank.data = data;
    this.data.rankData.rank.display = !!display;
    this.data.rankData.rank.displayText = text;
    return this;
  }

  /**
   * @method setLevel
   * @name setLevel
   * @description Establece el nivel del usuario
   * @param {number} data Level data
   * @param {string} [text="LEVEL"] Display text
   * @returns {Rank} The current instance of Rank
   * @throws {APIError} If the URL or asset is invalid
   */
  setLevel(data, text = "LEVEL") {
    if (typeof data !== "number") throw new APIError(`Level data must be a number, received ${typeof data}!`);
    this.data.rankData.level.data = data;
    this.data.rankData.level.displayText = text;
    return this;
  }

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
  setProgressBar(color, fillType = "COLOR", rounded = true) {
    if (fillType === "COLOR") {
      if (typeof color !== "string") throw new APIError(`The color type must be a string, received ${typeof color}!`);
      this.data.rankData.progressBar.bar.color = color;
      this.data.rankData.progressBar.bar.type = "color";
    } else if (fillType === "GRADIENT") {
      if (!Array.isArray(color)) throw new APIError(`Color type must be Array, received ${typeof color}!`);
      this.data.rankData.progressBar.bar.color = color.slice(0, 20);
      this.data.rankData.progressBar.bar.type = "gradient";
    } else {
      throw new APIError(`Unsupported progress bar type "${fillType}"!`);
    }
    this.data.rankData.progressBar.rounded = !!rounded;
    return this;
  }

  /**
   * @method setStatus
   * @name setStatus
   * @description Set the user presence status
   * @param {string} presenceStatus Presence status
   * @returns {Rank} The current instance of Rank
   * @throws {APIError} If the URL or asset is invalid
   */
  setStatus(presenceStatus) {
    if (typeof presenceStatus !== "string") throw new APIError(`The presence state type must be a string, received ${typeof presenceStatus}!`);
    this.data.options.presenceStatus = presenceStatus;
    return this;
  }

  /**
   * @method setCreatedTimestamp
   * @name setCreatedTimestamp
   * @description Set the user created timestamp
   * @param {number} timestamp Timestamp of when the user joined Discord
   * @param {string | Date} customDate Custom date format for the timestamp
   * @returns {Rank} The current instance of Rank
   * @throws {APIError} If the URL or asset is invalid
   */
  setCreatedTimestamp(timestamp, customDate) {
    if (typeof timestamp !== "number") throw new APIError(`The timestamp type must be a number, received ${typeof timestamp}!`);
    this.data.user.createdTimestamp = timestamp;
    if (customDate) {
      this.data.options.customDate = customDate;
    }
    return this;
  }

  /**
   * @method build
   * @name build
   * @description Build the rank card
   * @param {string} [font="Arial"] Font to use in the card
   * @returns {Promise<Buffer>} Card image in buffer format
   * @throws {APIError} Missing field: data
   */
  async build(font = "Arial") {
    if (!this.data.user.avatarURL) throw new APIError("Avatar not available.");
    if (!this.data.user.username) throw new APIError("Username not available.");

    const canvas = createCanvas(this.data.width, this.data.height);
    const ctx = canvas.getContext("2d");

    const userAvatar = (this.data.user.avatarURL ?? this.data.user.defaultAvatarURL) + '?size=512';
    const userBanner = this.data.user.bannerURL ? this.data.user.bannerURL + '?size=512' : null;

    // Get badges and generate canvas along with its length
    const badgesData = await generateBadgesCanvas(this.data.user, this.data.options);

    // Set background and initial crop
    ctx.roundRect(0, 0, this.data.width, this.data.height, [34]);
    ctx.clip();

    // Draw base (background)
    const cardBase = await genBase(this.data.bannerData, userAvatar, userBanner);
    ctx.drawImage(cardBase, 0, 0);

    // Draw the decorative frame
    const cardFrame = await genFrame(badgesData, this.data.options);
    ctx.drawImage(cardFrame, 0, 0);

    // Draw the avatar and the texts
    const cardTextAndAvatar = await genTextAndAvatar(this.data.user, this.data.rankData, this.data.options, userAvatar, font);
    const textAvatarShadow = addShadow(cardTextAndAvatar);
    ctx.drawImage(textAvatarShadow, 0, 0);
    ctx.drawImage(cardTextAndAvatar, 0, 0);

    // Draw experience bar if enabled
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

    // Draw custom borders
    if (this.data.options.borderColor) {
      const border = await genBorder(this.data.options);
      ctx.drawImage(border, 0, 0);
    }

    // Draw Badges and Bot Verification
    if (this.data.user?.bot) {
      const botVerifBadge = await genBotVerifBadge(this.data.user, font);
      const shadowVerifBadge = addShadow(botVerifBadge);
      ctx.drawImage(shadowVerifBadge, 0, 0);
      ctx.drawImage(botVerifBadge, 0, 0);
    }

    // Draw avatar frame if exists
    if (this.data.user?.avatar_decoration_data?.asset) {
      const avatarFrame = await genAvatarFrame(this.data.user, this.data.options);
      ctx.drawImage(avatarFrame, 0, 0);
    }

    return canvas.toBuffer("image/png");
  }
}

module.exports = Rank;