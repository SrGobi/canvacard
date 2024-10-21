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
 * Generar el canvas de insignias
 * @param {Object} user Objeto de usuario
 * @param {string} user.bot Si el usuario es un bot
 * @param {string} user.id ID del usuario
 * @param {Object} user.flags Insignias del usuario
 * @param {string} user.discriminator Discriminador del usuario
 * @param {Object} options Objeto de opciones
 * @param {string[]} options.customBadges Insignias personalizadas
 * @param {boolean} options.overwriteBadges Sobreescribir las insignias
 * @returns {Promise<Buffer>} Canvas
 */
async function generateBadgesCanvas(user, options) {
  const { bot, id, flags, discriminator } = user;

  // Cargar las flags desde una URL raw de GitHub (JSON) con fetch
  const userFlags = await fetch(ImageFactory.FLAGS.USER).then((res) => res.json());
  const applicationFlags = await fetch(ImageFactory.FLAGS.APPLICATION).then((res) => res.json());

  try {
    // Obtener las insignias según los flags
    const userFlagBadges = checkFlags(userFlags, flags).map((flag) => userFlags[flag]?.icon).filter(Boolean);
    const applicationFlagBadges = checkFlags(applicationFlags, flags).map((flag) => applicationFlags[flag]?.icon).filter(Boolean);

    // Combinar todas las insignias
    const allBadgeIcons = [
      ...userFlagBadges,
      ...applicationFlagBadges,
    ].map(getIconPath);

    // Insignias de nombre de usuario heredado
    if (discriminator === "0") {
      allBadgeIcons.push(getIconPath(ImageFactory.FLAGS.ICONS.USERNAME));
    }

    // Lógica adicional para bots
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

    // Crear el canvas para dibujar las insignias
    const canvas = createCanvas(885, 303);
    const ctx = canvas.getContext('2d');

    let x = 808; // Posición inicial para las insignias
    for (const iconPath of allBadgeIcons) {
      try {
        const badgeImage = await loadImage(iconPath);
        ctx.drawImage(badgeImage, x, 22, 48, 48); // Tamaño y posición del badge
        x -= 60; // Ajuste de espacio entre insignias
      } catch (error) {
        throw new APIError(`Could not load badge image from path: ${iconPath}, ${error.message}`);
      }
    }

    console.log(options.customBadges);
    // Manejo de badges personalizados
    if (options?.customBadges?.length) {
      if (options?.overwriteBadges) {
        x = 808; // Resetear posición si se sobreescriben las insignias
      }

      for (const customBadge of options.customBadges) {
        let badgeImage;
        try {
          const extension = customBadge.split('.').pop().toLowerCase(); // Obtener la extensión del archivo

          // Verificar la extensión y usar el parser adecuado
          if (extension === 'png') {
            badgeImage = await loadImage(parsePng(customBadge));
          } else if (extension === 'svg') {
            badgeImage = await loadImage(parseSvg(customBadge));
          } else {
            throw new APIError(`Formato de imagen no válido: ${extension}. Solo se permiten archivos PNG o SVG.`);
          }

          // Si la imagen se cargó correctamente, dibujarla en el canvas
          if (badgeImage) {
            ctx.drawImage(badgeImage, x, 22, 48, 48); // Tamaño y posición del custom badge
            x -= 60; // Ajuste de espacio entre insignias
          }
        } catch (error) {
          const truncatedBadge = truncateText(customBadge, 30);
          throw new APIError(
            `No se pudo cargar la insignia personalizada: (${truncatedBadge}), asegúrate de que la imagen exista y sea válida.`
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
 * Genera el fondo de la tarjeta
 * @param {Object} options Objeto de opciones
 * @param {string} avatarData URL del avatar
 * @param {string} bannerData URL del banner
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
 * Genera el marco de la tarjeta
 * @param {Object} badgesData
 * @param {CanvasElemet} badgesData.canvas
 * @param {string} badgesData.badgesLength
 * @param {Object} options 
 * @param {string} options.badgesFrame
 * @returns Canvas
 */
async function genFrame(badgesData, options) {

  // Crear un canvas para el marco
  const canvas = createCanvas(885, 303);
  const ctx = canvas.getContext('2d');

  // Cargar e insertar el marco base
  const cardFrame = await loadImage(Buffer.from(otherImgs.frame, 'base64'));
  ctx.globalAlpha = 0.5;
  ctx.drawImage(cardFrame, 0, 0, 885, 303);

  // Dibujar un fondo negro con transparencia si se requiere
  ctx.globalAlpha = alphaValue;
  ctx.fillStyle = '#000';
  ctx.beginPath();
  ctx.roundRect(696, 248, 165, 33, [12]);
  ctx.fill();
  ctx.globalAlpha = 1;

  // Ajustar el marco para las insignias
  if (options?.badgesFrame && badgesData.canvas) {
    const { canvas: badgesCanvas, badgesLength } = badgesData;

    // Ajustar el rectángulo de fondo para badges según la longitud
    ctx.fillStyle = '#000';
    ctx.globalAlpha = alphaValue;
    ctx.beginPath();
    ctx.roundRect(857 - badgesLength * 59, 15, 59 * badgesLength + 8, 61, [17]);
    ctx.fill();

    ctx.globalAlpha = 1;
    // Dibujar el canvas de badges en la posición correcta
    ctx.drawImage(badgesCanvas, 0, 0);
  }

  return canvas;
}

/**
 * Genera los bordes de la tarjeta con un gradiente de varios colores
 * @param {Object} options 
 * @param {string|string[]} options.borderColor - Puede ser un color o un array de colores
 * @param {string} options.borderAllign - Dirección del borde ('vertical' o 'horizontal')
 * @returns Canvas
 */
async function genBorder(options) {
  const canvas = createCanvas(885, 303);
  const ctx = canvas.getContext('2d');

  // Manejar la opción de color como string o array de strings
  let borderColors = [];
  if (typeof options.borderColor === 'string') {
    borderColors.push(formatAndValidateHex(options.borderColor)); // Validar si es un solo color
  } else if (Array.isArray(options.borderColor)) {
    borderColors = options.borderColor.map(color => formatAndValidateHex(color)); // Validar si es array
  } else {
    throw new APIError('El color del borde debe ser un string o un array de strings');
  }

  // Verificar que no exceda el límite de colores
  if (borderColors.length > 20) {
    throw new APIError(
      `La cantidad de colores del borde no es válida (${borderColors.length}), máximo permitido es 20`
    );
  }

  // Establecer la dirección del gradiente en base a la alineación del borde
  const gradX = options.borderAllign === 'vertical' ? 0 : 885;
  const gradY = options.borderAllign === 'vertical' ? 303 : 0;

  // Crear el gradiente
  const grd = ctx.createLinearGradient(0, 0, gradX, gradY);

  // Añadir cada color al gradiente con su correspondiente parada (stop)
  for (let i = 0; i < borderColors.length; i++) {
    const stop = i / (borderColors.length - 1); // Calcular la posición del color en el gradiente
    grd.addColorStop(stop, borderColors[i]);
  }

  // Aplicar el gradiente como estilo de relleno
  ctx.fillStyle = grd;
  ctx.beginPath();
  ctx.fillRect(0, 0, 885, 303); // Dibujar el rectángulo con el gradiente

  // Definir la operación de mezcla para recortar el borde interior
  ctx.globalCompositeOperation = 'destination-out';

  // Dibujar un rectángulo redondeado en el centro para recortar el borde
  ctx.beginPath();
  ctx.roundRect(9, 9, 867, 285, [25]); // Rectángulo interior con bordes redondeados
  ctx.fill();

  return canvas; // Devolver el canvas con el borde generado
}

/**
 * Genera el texto y el avatar de la tarjeta
 * @param {Object} user Datos del usuario
 * @param {string} user.username Nombre de usuario
 * @param {string} user.discriminator Discriminador
 * @param {boolean} user.bot Es un bot
 * @param {number} user.createdTimestamp Marca de tiempo de creación
 * @param {string} user.id ID del usuario
 * @param {Object} options Opciones de la tarjeta
 * @param {string} options.customUsername Nombre de usuario personalizado
 * @param {string} options.usernameColor Color del nombre de usuario
 * @param {string} options.customSubtitle Subtítulo personalizado
 * @param {string} options.subtitleColor Color del subtítulo
 * @param {string | Date} options.customDate Fecha personalizada
 * @param {string} options.localDateType Formato local para la fecha, por ejemplo, 'en' | 'es', etc.
 * @param {string} options.customTag Tag personalizado
 * @param {string} options.tagColor Color HEX de la etiqueta 
 * @param {boolean} options.squareAvatar Cambiar la forma del avatar a un cuadrado
 * @param {boolean} options.presenceStatus Mostrar el estado de presencia
 * @param {Object} rankData Datos de rango
 * @param {string} avatarData URL del avatar
 * @param {string} [font="Arial"] Familia tipográfica
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
 * Esta función genera el marco del avatar
 * @param {Object} user Objeto del usuario
 * @param {Object} user.avatar_decoration_data Datos de decoración del avatar
 * @param {string} user.avatar_decoration_data.asset Asset de decoración del avatar
 * @param {Object} options Objeto de opciones
 * @param {string} options.presenceStatus Presencia del usuario
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
 * Esta función corta el estado de presencia en la tarjeta
 * @param {Image | Canvas} canvasToEdit Imagen o canvas a editar
 * @param {Object} options Objeto de opciones
 * @param {string} options.presenceStatus Presencia del usuario
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
 * Establece el estado de presencia en la tarjeta
 * @param {Image | Canvas} canvasToEdit Imagen o canvas a editar
 * @param {Object} options Objeto de opciones
 * @param {string} options.presenceStatus Presencia del usuario
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
 * Generar la insignia de verificación de bot
 * @param {Object} user Objeto de usuario
 * @param {string} user.username Nombre de usuario
 * @param {number} user.flags Valor numérico de las flags del usuario
 * @param {string} [font="Arial"] Familia tipográfica
 * @returns {Promise<Buffer>} Canvas
 */
async function genBotVerifBadge(user, font) {
  const { username, flags } = user;

  const canvas = createCanvas(885, 303);
  const ctx = canvas.getContext('2d');

  // Parsear el nombre para calcular la longitud del texto
  const { textLength } = parseUsername(
    username,
    ctx,
    font,
    '80',
    470
  );

  // Verificar si el usuario es un bot verificado usando el valor de flags
  const isVerifiedBot = (flags & (1 << 16)) !== 0;

  // Determinar el badge a usar según las flags
  const badgeName = isVerifiedBot ? 'botVerif' : 'botNoVerif';

  // Cargar la imagen del badge
  const botBadgeBase64 = otherImgs[badgeName];
  const botBadge = await loadImage(Buffer.from(botBadgeBase64, 'base64'));

  // Dibujar la imagen en la posición correcta
  ctx.drawImage(botBadge, textLength + 310, 110);

  return canvas;
}

/**
 * Generar la barra de experiencia
 * @param {Object} options 
 * @param {Object} options.rankData
 * @param {number} options.rankData.currentXp
 * @param {number} options.rankData.requiredXp
 * @param {number} options.rankData.level
 * @param {number} options.rankData.rank
 * @param {string | string[]} options.rankData.barColor
 * @param {string} options.rankData.levelColor
 * @param {boolean} options.rankData.autoColorRank
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

  // Fondo de la barra de XP
  ctx.fillStyle = '#000';
  ctx.globalAlpha = 0.5; // ajusta el alpha según sea necesario
  ctx.beginPath();
  ctx.roundRect(304, 248, 380, 33, [12]);
  ctx.fill();
  ctx.globalAlpha = 1;

  // Texto de XP
  ctx.font = `21px ${font}`;
  ctx.textAlign = 'left';
  ctx.fillStyle = '#dadada';
  ctx.fillText(
    `${abbreviateNumber(currentXp)} / ${abbreviateNumber(requiredXp)} XP`,
    314,
    273
  );

  // Texto del Rango y Nivel
  const rankString = !isNaN(rank)
    ? `RANK #${abbreviateNumber(isNumber(rank, 'rankData:rank'))}`
    : '';
  const lvlString = !isNaN(level)
    ? `Lvl ${abbreviateNumber(isNumber(level, 'rankData:level'))}`
    : '';

  // Definir colores del rango
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

  // Fondo de la barra de progreso
  ctx.globalAlpha = 0.5;
  ctx.fillStyle = '#000';
  ctx.beginPath();
  ctx.roundRect(304, 187 - mY, 557, 36, [14]);
  ctx.fill();
  ctx.globalAlpha = 1;

  // Manejar la opción de color como string o array de strings
  let barColors = [];
  if (typeof options.rankData.barColor === 'string') {
    barColors.push(formatAndValidateHex(options.rankData.barColor)); // Validar si es un solo color
  } else if (Array.isArray(options.rankData.barColor)) {
    barColors = options.rankData.barColor.map(color => formatAndValidateHex(color)); // Validar si es array
  } else {
    throw new APIError('El color de la barra debe ser un string o un array de strings');
  }

  if (barColors.length > 20) {
    throw new APIError(
      `La longitud de barra de color no válida (${barColors.length}) debe tener un máximo de 20 colores`
    );
  }

  // Calcular el ancho de la barra de progreso según el XP
  const barWidth = Math.round((currentXp * 556) / requiredXp);

  // Crear el degradado para la barra
  const grd = ctx.createLinearGradient(304, 197, 860, 197);
  for (let i = 0; i < barColors.length; i++) {
    const stop = i / (barColors.length - 1); // Distribuir los colores equitativamente
    grd.addColorStop(stop, barColors[i]);
  }

  // Dibujar la barra de progreso
  ctx.fillStyle = grd;
  ctx.beginPath();
  ctx.roundRect(304, 187 - mY, barWidth, 36, [14]);
  ctx.fill();

  return canvas;
}

/**
 * Sombras para el canvas
 * @param {Image | Canvas} canvasToEdit Imagen o canvas a editar
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
