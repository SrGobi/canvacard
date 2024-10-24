const { createCanvas, loadImage } = require('@napi-rs/canvas');
const {
  otherImgs,
  statusImgs,
} = require('../../assets/base64.files.json');
const { ImageFactory } = require("../AssetsFactory");

const APIError = require('./error.utils');
const abbreviateNumber = require('./abbreviate.utils');
const checkFlags = require('./flags.utils');
const formatAndValidateHex = require('./formatAndValidateHex.utils');
const getDateOrString = require('./getDateOrString.utils');
const getIconPath = require('./icon.utils');
const isNumber = require('./isNumber.utils');
const isString = require('./isString.utils');
const parseImg = require('./parseImg.utils');
const parsePng = require('./parsePng.utils');
const parseSvg = require('./parseSvg.utils');
const parseUsername = require('./username.utils');
const truncateText = require('./truncateText.utils');

const alphaValue = 0.4;
const clydeID = '1081004946872352958';

/**
 * @name generateBadgesCanvas
 * @description Generate the badge canvas
 * @param {Object} user User object
 * @param {string} user.bot If the user is a bot
 * @param {string} user.id User ID
 * @param {Object} user.flags User Badges
 * @param {string} user.discriminator User Discriminator
 * @param {Object} options Object of options
 * @param {string[]} options.customBadges Custom Badges
 * @param {boolean} options.overwriteBadges Overwrite the badges
 * @returns {Promise<Buffer>} Canvas
 */
async function generateBadgesCanvas(user, options) {
  const { bot, id, flags, discriminator } = user;

  // Loading flags from a GitHub raw URL (JSON) with fetch
  const userFlags = await fetch(ImageFactory.FLAGS.USER).then((res) => res.json());
  const applicationFlags = await fetch(ImageFactory.FLAGS.APPLICATION).then((res) => res.json());

  try {
    // Get the badges according to the flags
    const userFlagBadges = checkFlags(userFlags, flags).map((flag) => userFlags[flag]?.icon).filter(Boolean);
    const applicationFlagBadges = checkFlags(applicationFlags, flags).map((flag) => applicationFlags[flag]?.icon).filter(Boolean);

    // Combine all the badges
    const allBadgeIcons = [
      ...userFlagBadges,
      ...applicationFlagBadges,
    ].map(getIconPath);

    // Legacy Username Badges
    if (discriminator === "0") {
      allBadgeIcons.push(getIconPath(ImageFactory.FLAGS.ICONS.USERNAME));
    }

    // Additional logic for bots
    if (bot) {
      const botFetch = await fetch(`https://discord.com/api/v10/applications/${id}/rpc`);
      if (!botFetch.ok) {
        throw new APIError(`Failed to fetch bot data: ${botFetch.statusText}`);
      }

      const json = await botFetch.json();
      let flagsBot = json.flags;

      const arrayFlags = checkFlags(applicationFlags, flagsBot);
      console.log(arrayFlags);
      if (arrayFlags.includes('APPLICATION_AUTO_MODERATION_RULE_CREATE_BADGE')) {
        const automodBadge = applicationFlags['APPLICATION_AUTO_MODERATION_RULE_CREATE_BADGE']?.icon;
        if (automodBadge) allBadgeIcons.push(getIconPath(automodBadge));
      }
      if (arrayFlags.includes('APPLICATION_COMMAND_BADGE')) {
        const slashBadge = applicationFlags['APPLICATION_COMMAND_BADGE']?.icon;
        if (slashBadge) allBadgeIcons.push(getIconPath(slashBadge));
      }
    }

    // Create the canvas to draw the badges
    const canvas = createCanvas(885, 303);
    const ctx = canvas.getContext('2d');

    let x = 808; // Starting position for badges
    for (const iconPath of allBadgeIcons) {
      try {
        const badgeImage = await loadImage(iconPath);
        ctx.drawImage(badgeImage, x, 22, 48, 48); // Badge size and position
        x -= 60; // Adjusting the gap between badges
      } catch (error) {
        throw new APIError(`Could not load badge image from path: ${iconPath}, ${error.message}`);
      }
    }

    console.log(options.customBadges);
    // Handling custom badges
    if (options?.customBadges?.length) {
      if (options?.overwriteBadges) {
        x = 808; // Reset position if badges are overwritten
      }

      for (const customBadge of options.customBadges) {
        let badgeImage;
        try {
          const extension = customBadge.split('.').pop().toLowerCase(); // Get the file extension

          // Check the extension and use the appropriate parser
          if (extension === 'png') {
            badgeImage = await loadImage(parsePng(customBadge));
          } else if (extension === 'svg') {
            badgeImage = await loadImage(parseSvg(customBadge));
          } else {
            throw new APIError(`Invalid image format: ${extension}. Only PNG or SVG files are allowed.`);
          }

          // If the image was uploaded correctly, draw it on the canvas
          if (badgeImage) {
            ctx.drawImage(badgeImage, x, 22, 48, 48); // Size and position of the custom badge
            x -= 60; // Adjusting the gap between badges
          }
        } catch (error) {
          const truncatedBadge = truncateText(customBadge, 30);
          throw new APIError(
            `Could not load custom badge: (${truncatedBadge}), please make sure the image exists and is valid.`
          );
        }
      }
    }

    return { canvas, badgesLength: allBadgeIcons.length + (options?.customBadges?.length || 0) };
  } catch (error) {
    throw new APIError(`Error generating badges canvas: ${error.message}`);
  }
}

/**
 * @name genBase
 * @description Generate the card background
 * @param {Object} options Object of options
 * @param {string} avatarData Avatar URL
 * @param {string} bannerData Banner URL
 * @returns {Promise<Buffer>} Canvas
 */
async function genBase(options, avatarData, bannerData) {
  const canvas = createCanvas(885, 303);
  const ctx = canvas.getContext('2d');

  let isBannerLoaded = true;
  let cardBackground = await loadImage(
    options?.customBackground
      ? parseImg(options.customBackground)
      : bannerData ?? avatarData
  ).catch(() => { });

  if (!cardBackground) {
    cardBackground = await loadImage(avatarData).catch(() => { });
    isBannerLoaded = false;
  }

  const condAvatar = options?.customBackground
    ? true
    : !isBannerLoaded
      ? false
      : bannerData !== null;
  const wX = condAvatar ? 885 : 900;
  const wY = condAvatar ? 303 : wX;
  const cY = condAvatar ? 0 : -345;

  ctx.fillStyle = '#18191c';
  ctx.beginPath();
  ctx.fillRect(0, 0, 885, 303);
  ctx.fill();

  ctx.filter =
    (options?.moreBackgroundBlur
      ? 'blur(9px)'
      : options?.disableBackgroundBlur
        ? 'blur(0px)'
        : 'blur(3px)') +
    (options?.backgroundBrightness
      ? ` brightness(${options.backgroundBrightness + 100}%)`
      : '');
  ctx.drawImage(cardBackground, 0, cY, wX, wY);

  ctx.globalAlpha = 0.2;
  ctx.fillStyle = '#2a2d33';
  ctx.beginPath();
  ctx.fillRect(0, 0, 885, 303);
  ctx.fill();

  return canvas;
}

/**
 * @name genFrame
 * @description Generate the card frame
 * @param {Object} badgesData
 * @param {CanvasElemet} badgesData.canvas
 * @param {string} badgesData.badgesLength
 * @param {Object} options 
 * @param {string} options.badgesFrame
 * @returns {Promise<Buffer>} Canvas
 */
async function genFrame(badgesData, options) {

  // Create a canvas for the frame
  const canvas = createCanvas(885, 303);
  const ctx = canvas.getContext('2d');

  // Load and insert the base frame
  const cardFrame = await loadImage(Buffer.from(otherImgs.frame, 'base64'));
  ctx.globalAlpha = 0.5;
  ctx.drawImage(cardFrame, 0, 0, 885, 303);

  // Draw a black background with transparency if required
  ctx.globalAlpha = alphaValue;
  ctx.fillStyle = '#000';
  ctx.beginPath();
  ctx.roundRect(696, 248, 165, 33, [12]);
  ctx.fill();
  ctx.globalAlpha = 1;

  // Adjust the frame for the badges
  if (options?.badgesFrame && badgesData.canvas) {
    const { canvas: badgesCanvas, badgesLength } = badgesData;

    // Adjust background rectangle for badges based on length
    ctx.fillStyle = '#000';
    ctx.globalAlpha = alphaValue;
    ctx.beginPath();
    ctx.roundRect(857 - badgesLength * 59, 15, 59 * badgesLength + 8, 61, [17]);
    ctx.fill();

    ctx.globalAlpha = 1;
    // Draw the badge canvas in the correct position
    ctx.drawImage(badgesCanvas, 0, 0);
  }

  return canvas;
}

/**
 * @name genBorder
 * @description Generate the edges of the card with a multi-color gradient
 * @param {Object} options Options object
 * @param {string|string[]} options.borderColor It can be a color or an array of colors
 * @param {string} options.borderAllign Edge direction ('vertical' or 'horizontal')
 * @returns {Promise<Buffer>} Canvas
 */
async function genBorder(options) {
  const canvas = createCanvas(885, 303);
  const ctx = canvas.getContext('2d');

  // Handling color option as string or array of strings
  let borderColors = [];
  if (typeof options.borderColor === 'string') {
    borderColors.push(formatAndValidateHex(options.borderColor)); // Validate if it is a single color
  } else if (Array.isArray(options.borderColor)) {
    borderColors = options.borderColor.map(color => formatAndValidateHex(color)); // Validate if it is array
  } else {
    throw new APIError('The border color must be a string or an array of strings');
  }

  // Check that it does not exceed the color limit
  if (borderColors.length > 20) {
    throw new APIError(
      `The number of border colors is invalid (${borderColors.length}), maximum allowed is 20`
    );
  }

  // Set gradient direction based on edge alignment
  const gradX = options.borderAllign === 'vertical' ? 0 : 885;
  const gradY = options.borderAllign === 'vertical' ? 303 : 0;

  // Create the gradient
  const grd = ctx.createLinearGradient(0, 0, gradX, gradY);

  // Add each color to the gradient with its corresponding stop.
  for (let i = 0; i < borderColors.length; i++) {
    const stop = i / (borderColors.length - 1); // Calculate the position of the color in the gradient
    grd.addColorStop(stop, borderColors[i]);
  }

  // Apply gradient as fill style
  ctx.fillStyle = grd;
  ctx.beginPath();
  ctx.fillRect(0, 0, 885, 303); // Draw the rectangle with the gradient

  // Define blend operation to trim inner edge
  ctx.globalCompositeOperation = 'destination-out';

  // Draw a rounded rectangle in the center to trim the edge
  ctx.beginPath();
  ctx.roundRect(9, 9, 867, 285, [25]); // Inner rectangle with rounded edges
  ctx.fill();

  return canvas; // Return the canvas with the generated border
}

/**
 * @name genTextAndAvatar
 * @description Generate the card text and avatar
 * @param {Object} user User data
 * @param {string} user.username User name
 * @param {string} user.discriminator User discriminator
 * @param {boolean} user.bot If the user is a bot
 * @param {number} user.createdTimestamp User creation timestamp
 * @param {string} user.id User ID
 * @param {Object} options Options object
 * @param {string} options.customUsername Custom username
 * @param {string} options.usernameColor Username color
 * @param {string} options.customSubtitle Custom subtitle
 * @param {string} options.subtitleColor Subtitle color
 * @param {string | Date} options.customDate Custom date
 * @param {string} options.localDateType Local format for the date, for example, 'en' | 'es', etc.
 * @param {string} options.customTag Custom tag
 * @param {string} options.tagColor HEX Color of the label
 * @param {boolean} options.squareAvatar Change the shape of the avatar to a square
 * @param {boolean} options.presenceStatus Show presence status
 * @param {Object} rankData Range data
 * @param {string} avatarData Avatar URL
 * @param {string} [font="Arial"] Typeface family
 * @returns {Promise<Buffer>}
 */
async function genTextAndAvatar(user, rankData, options, avatarData, font) {
  const {
    username: rawUsername,
    discriminator,
    bot,
    createdTimestamp,
    id,
  } = user;

  const isClyde = id === clydeID;
  const pixelLength = bot ? 470 : 555;

  let canvas = createCanvas(885, 303);
  const ctx = canvas.getContext('2d');

  const fixedUsername = options?.customUsername || rawUsername;

  const { username, newSize } = parseUsername(
    fixedUsername,
    ctx,
    font,
    '80',
    pixelLength
  );

  if (options?.customSubtitle && rankData.rank.display === false) {
    ctx.globalAlpha = alphaValue;
    ctx.fillStyle = '#2a2d33';
    ctx.beginPath();
    ctx.roundRect(304, 248, 380, 33, [12]);
    ctx.fill();
    ctx.globalAlpha = 1;

    ctx.font = `23px ${font}`;
    ctx.textAlign = 'left';
    ctx.fillStyle = options?.subtitleColor ? options.subtitleColor : '#dadada';
    ctx.fillText(`${options?.customSubtitle}`, 314, 273);
  }

  const createdDateString = getDateOrString(
    options?.customDate,
    createdTimestamp,
    options?.localDateType
  );

  if (isClyde && !options?.customTag) {
    data.options.customTag = '@clyde';
  }

  const tag = options?.customTag
    ? isString(options.customTag, 'customTag')
    : !discriminator
      ? `@${rawUsername}`
      : `#${discriminator}`;

  ctx.font = `${newSize}px ${font}`;
  ctx.textAlign = 'left';
  ctx.fillStyle = options?.usernameColor
    ? formatAndValidateHex(options.usernameColor)
    : '#FFFFFF';
  ctx.fillText(username, 300, 155);

  if (rankData.rank.display === false) {
    ctx.font = `60px ${font}`;
    ctx.fillStyle = options?.tagColor ? formatAndValidateHex(options.tagColor) : '#dadada';
    ctx.fillText(tag, 300, 215);
  }

  ctx.font = `23px ${font}`;
  ctx.textAlign = 'center';
  ctx.fillStyle = '#dadada';
  ctx.fillText(createdDateString, 775, 273);

  const cardAvatar = await loadImage(avatarData);

  const roundValue = options?.squareAvatar ? 30 : 225;

  ctx.beginPath();
  ctx.roundRect(47, 39, 225, 225, [roundValue]);
  ctx.clip();

  ctx.fillStyle = '#292b2f';
  ctx.beginPath();
  ctx.roundRect(47, 39, 225, 225, [roundValue]);
  ctx.fill();

  ctx.drawImage(cardAvatar, 47, 39, 225, 225);

  ctx.closePath();

  if (options?.presenceStatus) {
    canvas = await genStatus(canvas, options);
  }

  return canvas;
}

/**
 * @name genAvatarFrame
 * @description This function generates the avatar frame
 * @param {Object} user User data
 * @param {Object} user.avatar_decoration_data Avatar decoration data
 * @param {string} user.avatar_decoration_data.asset Avatar decoration asset
 * @param {Object} options Object of options
 * @param {string} options.presenceStatus User presence
 * @returns {Promise<Buffer>} Canvas
 */
async function genAvatarFrame(user, options) {
  let canvas = createCanvas(885, 303);
  const ctx = canvas.getContext('2d');

  const frameUrl = `https://cdn.discordapp.com/avatar-decoration-presets/${user?.avatar_decoration_data.asset}.png`;

  const avatarFrame = await loadImage(frameUrl);
  ctx.drawImage(avatarFrame, 25, 18, 269, 269);

  if (options?.presenceStatus) {
    canvas = await cutAvatarStatus(canvas, options);
  }

  return canvas;
}

/**
 * @name cutAvatarStatus
 * @description This function cuts the presence status on the card
 * @param {Image | Canvas} canvasToEdit Image or canvas to edit
 * @param {Object} options Object of options
 * @param {string} options.presenceStatus User presence
 * @returns {Promise<Buffer>} Canvas
 */
async function cutAvatarStatus(canvasToEdit, options) {
  const canvas = createCanvas(885, 303);
  const ctx = canvas.getContext('2d');

  const cX = options.presenceStatus == 'phone' ? 224.5 : 212;
  const cY = options.presenceStatus == 'phone' ? 202 : 204;

  ctx.drawImage(canvasToEdit, 0, 0);

  ctx.globalCompositeOperation = 'destination-out';

  if (options.presenceStatus == 'phone')
    ctx.roundRect(cX - 8, cY - 8, 57, 78, [10]);
  else ctx.roundRect(212, 204, 62, 62, [62]);
  ctx.fill();

  ctx.globalCompositeOperation = 'source-over';

  return canvas;
}

/**
 * @name genStatus
 * @description Sets the presence status on the card
 * @param {Image | Canvas} canvasToEdit Image or canvas to edit
 * @param {Object} options Object of options
 * @param {string} options.presenceStatus User presence
 * @returns {Promise<Buffer>} Canvas
 */
async function genStatus(canvasToEdit, options) {
  let canvas = createCanvas(885, 303);
  const ctx = canvas.getContext('2d');

  const validStatus = [
    'idle',
    'dnd',
    'online',
    'invisible',
    'offline',
    'streaming',
    'phone',
  ];

  if (!validStatus.includes(options.presenceStatus))
    throw new APIError(
      `Invalid presenceStatus ('${options.presenceStatus}') must be 'online' | 'idle' | 'offline' | 'dnd' | 'invisible' | 'streaming' | 'phone'`
    );

  const statusString =
    options.presenceStatus == 'offline' ? 'invisible' : options.presenceStatus;

  const status = await loadImage(
    Buffer.from(statusImgs[statusString], 'base64')
  );

  const cX = options.presenceStatus == 'phone' ? 224.5 : 212;
  const cY = options.presenceStatus == 'phone' ? 202 : 204;

  ctx.drawImage(canvasToEdit, 0, 0);

  ctx.globalCompositeOperation = 'destination-out';

  if (options.presenceStatus == 'phone')
    ctx.roundRect(cX - 8, cY - 8, 57, 78, [10]);
  else ctx.roundRect(212, 204, 62, 62, [62]);
  ctx.fill();

  ctx.globalCompositeOperation = 'source-over';

  ctx.drawImage(status, cX, cY);

  return canvas;
}

/**
 * @name genBotVerifBadge
 * @description Generate the bot verification badge
 * @param {Object} user User object
 * @param {string} user.username User name
 * @param {number} user.flags Numeric value of the user flags
 * @param {string} [font="Arial"] Typeface family
 * @returns {Promise<Buffer>} Canvas
 */
async function genBotVerifBadge(user, font) {
  const { username, flags } = user;

  const canvas = createCanvas(885, 303);
  const ctx = canvas.getContext('2d');

  // Parse name to calculate text length
  const { textLength } = parseUsername(
    username,
    ctx,
    font,
    '80',
    470
  );

  // Check if the user is a verified bot using the flags value
  const isVerifiedBot = (flags & (1 << 16)) !== 0;

  // Determine the badge to use according to the flags
  const badgeName = isVerifiedBot ? 'botVerif' : 'botNoVerif';

  // Upload badge image
  const botBadgeBase64 = otherImgs[badgeName];
  const botBadge = await loadImage(Buffer.from(botBadgeBase64, 'base64'));

  // Draw the image in the correct position
  ctx.drawImage(botBadge, textLength + 310, 110);

  return canvas;
}

/**
 * Generate the experience bar
 * @param {Object} options Options object
 * @param {Object} options.rankData Rank data
 * @param {number} options.rankData.currentXp User current XP
 * @param {number} options.rankData.requiredXp XP required to level up
 * @param {number} options.rankData.level User level
 * @param {number} options.rankData.rank User rank
 * @param {string | string[]} options.rankData.barColor Color of the XP bar
 * @param {string} options.rankData.levelColor Color of the level text
 * @param {boolean} options.rankData.autoColorRank Automatically color the rank
 * @returns {Promise<Buffer>} Canvas
 */
function genXpBar(options, font) {
  const {
    currentXp,
    requiredXp,
    level,
    rank,
    levelColor,
    autoColorRank,
  } = options.rankData;

  if (isNaN(currentXp) || isNaN(requiredXp) || isNaN(level)) {
    throw new APIError(
      'rankData options requires: currentXp, requiredXp and level properties'
    );
  }

  const canvas = createCanvas(885, 303);
  const ctx = canvas.getContext('2d');
  const mY = 8;

  // XP bar background
  ctx.fillStyle = '#000';
  ctx.globalAlpha = 0.5; // adjust alpha as needed
  ctx.beginPath();
  ctx.roundRect(304, 248, 380, 33, [12]);
  ctx.fill();
  ctx.globalAlpha = 1;

  // XP Text
  ctx.font = `21px ${font}`;
  ctx.textAlign = 'left';
  ctx.fillStyle = '#dadada';
  ctx.fillText(
    `${abbreviateNumber(currentXp)} / ${abbreviateNumber(requiredXp)} XP`,
    314,
    273
  );

  // Rank and Level Text
  const rankString = !isNaN(rank)
    ? `RANK #${abbreviateNumber(isNumber(rank, 'rankData:rank'))}`
    : '';
  const lvlString = !isNaN(level)
    ? `Lvl ${abbreviateNumber(isNumber(level, 'rankData:level'))}`
    : '';

  // Define range colors
  const rankColors = {
    gold: '#F1C40F',
    silver: '#a1a4c9',
    bronze: '#AD8A56',
    current: '#dadada',
  };

  const rankMapping = {
    'RANK #1': rankColors.gold,
    'RANK #2': rankColors.silver,
    'RANK #3': rankColors.bronze,
  };

  if (autoColorRank && rankMapping.hasOwnProperty(rankString)) {
    rankColors.current = rankMapping[rankString];
  }

  ctx.font = `bold 21px ${font}`;
  ctx.textAlign = 'right';
  ctx.fillStyle = rankColors.current;
  ctx.fillText(`${rankString}`, 674 - ctx.measureText(lvlString).width - 10, 273);

  ctx.font = `bold 21px ${font}`;
  ctx.fillStyle = levelColor ? formatAndValidateHex(levelColor) : '#dadada';
  ctx.fillText(`${lvlString}`, 674, 273);

  // Progress bar background
  ctx.globalAlpha = 0.5;
  ctx.fillStyle = '#000';
  ctx.beginPath();
  ctx.roundRect(304, 187 - mY, 557, 36, [14]);
  ctx.fill();
  ctx.globalAlpha = 1;

  // Handling color option as string or array of strings
  let barColors = [];
  if (typeof options.rankData.barColor === 'string') {
    barColors.push(formatAndValidateHex(options.rankData.barColor)); // Validate if it is a single color
  } else if (Array.isArray(options.rankData.barColor)) {
    barColors = options.rankData.barColor.map(color => formatAndValidateHex(color)); // Validate if it is array
  } else {
    throw new APIError('The color of the bar must be a string or an array of strings');
  }

  if (barColors.length > 20) {
    throw new APIError(
      `Invalid color bar length (${barColors.length}) must have a maximum of 20 colors`
    );
  }

  // Calculate progress bar width based on XP
  const barWidth = Math.round((currentXp * 556) / requiredXp);

  // Create the gradient for the bar
  const grd = ctx.createLinearGradient(304, 197, 860, 197);
  for (let i = 0; i < barColors.length; i++) {
    const stop = i / (barColors.length - 1); // Distribute the colors evenly
    grd.addColorStop(stop, barColors[i]);
  }

  // Draw the progress bar
  ctx.fillStyle = grd;
  ctx.beginPath();
  ctx.roundRect(304, 187 - mY, barWidth, 36, [14]);
  ctx.fill();

  return canvas;
}

/**
 * @name addShadow
 * @description Shadows for the canvas
 * @param {Image | Canvas} canvasToEdit Image or canvas to edit
 * @returns {Promise<Buffer>} Canvas
 */
function addShadow(canvasToEdit) {
  const canvas = createCanvas(885, 303);
  const ctx = canvas.getContext('2d');
  ctx.filter = 'drop-shadow(0px 4px 4px #000)';
  ctx.globalAlpha = alphaValue;
  ctx.drawImage(canvasToEdit, 0, 0);

  return canvas;
}

module.exports = {
  generateBadgesCanvas,
  genBase,
  genFrame,
  genBorder,
  genTextAndAvatar,
  genAvatarFrame,
  genXpBar,
  genBotVerifBadge,
  addShadow,
};
