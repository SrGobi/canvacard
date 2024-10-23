const path = require('path');
const { execSync } = require('child_process');
const fs = require('fs');

const baseDir = path.resolve(__dirname, '../main');
const docsDir = path.resolve(__dirname, '../docs');

// Verifica que el directorio base y el de documentos existan
if (!fs.existsSync(baseDir)) {
  console.error('Error: No se encontró el directorio base.');
  process.exit(1);
}

if (!fs.existsSync(docsDir)) {
  console.error('Error: No se encontró el directorio de documentos.');
  process.exit(1);
}

// Verifica que los archivos fuente existen
const sourceFiles = [
  'WelcomeLeave.js',
  'Rank.js',
  'Spotify.js',
  'FortniteShop.js',
  'Canvacard.js',
  'Plugins.js',
];

sourceFiles.forEach(file => {
  const filePath = path.join(baseDir, 'src', file);
  if (!fs.existsSync(filePath)) {
    console.error(`Error: No se encontró el archivo fuente ${file}.`);
    process.exit(1);
  }
});

// Verifica que el directorio de utilidades exista
const utilsDir = path.join(baseDir, 'src', 'utils');
if (!fs.existsSync(utilsDir)) {
  console.error('Error: No se encontró el directorio de utilidades.');
  process.exit(1);
}

// Lista de archivos de utilidades
const utils = [
  'abbreviate.utils.js',
  'canvas.utils.js',
  'discordTime.utils.js',
  'error.utils.js',
  'flags.utils.js',
  'formatAndValidateHex.utils.js',
  'formatTime.utils.js',
  'formatVariable.utils.js',
  'getDateOrString.utils.js',
  'icon.utils.js',
  'isNumber.utils.js',
  'isString.utils.js',
  'parseImg.utils.js',
  'parsePng.utils.js',
  'parseSvg.utils.js',
  'shorten.utils.js',
  'truncateText.utils.js',
  'username.utils.js'
];

// Verifica que cada archivo de utilidad exista
utils.forEach(util => {
  const utilPath = path.join(utilsDir, util);
  if (!fs.existsSync(utilPath)) {
    console.error(`Error: No se encontró el archivo de utilidad ${util}.`);
    process.exit(1);
  }
});

// Define la lista de comandos de JSDoc
const commands = [
  `jsdoc2md ${baseDir}/src/WelcomeLeave.js > ${docsDir}/Classes/WelcomeLeave.md`,
  `jsdoc2md ${baseDir}/src/Rank.js > ${docsDir}/Classes/Rank.md`,
  `jsdoc2md ${baseDir}/src/Spotify.js > ${docsDir}/Classes/Spotify.md`,
  `jsdoc2md ${baseDir}/src/FortniteShop.js > ${docsDir}/Classes/FortniteShop.md`,
  `jsdoc2md ${baseDir}/src/Canvacard.js > ${docsDir}/Classes/Canvacard.md`,
  `jsdoc2md ${baseDir}/src/Plugins.js > ${docsDir}/Classes/Plugins.md`,
];

// Genera documentación para cada archivo de utilidad
utils.forEach(util => {
  commands.push(`jsdoc2md ${baseDir}/src/utils/${util} > ${docsDir}/Utils/${util.replace('.js', '.md')}`);
});

const singleCommand = process.argv.includes('--single');

// Ejecuta los comandos
if (singleCommand) {
  console.log('Generando documentación para un solo archivo...');
  execSync(commands[0], { stdio: 'inherit' });
} else {
  console.log('Generando documentación completa...');
  commands.forEach(cmd => {
    try {
      execSync(cmd, { stdio: 'inherit' });
    } catch (error) {
      console.error(`Error al ejecutar el comando: ${cmd}`);
      console.error(error.message);
      process.exit(1);
    }
  });
}