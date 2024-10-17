/**
 * Funcion que se encarga de parsear el nombre de usuario para que se ajuste al tamaño del canvas.
 * @param {string} username Nombre de usuario
 * @param {Object} ctx Contexto del canvas
 * @param {string} ctx.fillStyle Color del texto
 * @param {string} ctx.textAlign Alineacion del texto
 * @param {TextMetrics} ctx.measureText Medida del texto
 * @param {string} [font='Arial'] Fuente del texto
 * @param {string} size Tamaño del texto
 * @param {number} maxLength  Longitud maxima del texto
 * @returns {Object} { username: string, newSize: number, textLength: number }
 */
function parseUsername(username, ctx, font, size, maxLength) {
  username = username && username.replace(/\s/g, '') ? username : '?????'
  let usernameChars = username.split('');
  let editableUsername = '';
  let finalUsername = '';

  let newSize = +size;
  let textLength;

  let finalized = false;

  while (!finalized) {
    editableUsername = usernameChars.join('');

    ctx.font = `${newSize}px ${font}`;
    ctx.textAlign = 'left';
    ctx.fillStyle = '#FFFFFF';

    const actualLength = ctx.measureText(editableUsername).width;

    if (actualLength >= maxLength) {
      if (newSize > 60) newSize -= 1;
      else usernameChars.pop();
    }

    if (actualLength <= maxLength) {
      finalUsername = usernameChars.join('');
      textLength = actualLength;
      finalized = true;
    }
  }

  return {
    username: finalUsername,
    newSize,
    textLength,
  };
}

module.exports = parseUsername;