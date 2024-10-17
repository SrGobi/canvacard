const path = require('path');
const { execSync } = require('child_process');

const baseDir = path.resolve(__dirname, '../main');
const docsDir = path.resolve(__dirname, '../docs');

// Define the list of JSDoc commands
const commands = [
  `jsdoc2md ${baseDir}/plugins/* > ${docsDir}/Plugins.md`,
  `jsdoc2md ${baseDir}/src/Welcomer.js > ${docsDir}/Classes/Welcomer.md`,
  `jsdoc2md ${baseDir}/src/Leaver.js > ${docsDir}/Classes/Leaver.md`,
  `jsdoc2md ${baseDir}/src/Rank.js > ${docsDir}/Classes/Rank.md`,
  `jsdoc2md ${baseDir}/src/Spotify.js > ${docsDir}/Classes/Spotify.md`,
  `jsdoc2md ${baseDir}/src/FortniteShop.js > ${docsDir}/Classes/FortniteShop.md`,
  `jsdoc2md ${baseDir}/src/FortniteStats.js > ${docsDir}/Classes/FortniteStats.md`,
  `jsdoc2md ${baseDir}/src/Canvacard.js > ${docsDir}/Classes/Canvacard.md`,
  `jsdoc2md ${baseDir}/src/Plugins.js > ${docsDir}/Classes/Plugins.md`,
];

// Add commands for each utility file
const utils = [
  'abbreviate.utils.js',
  'canvas.utils.js',
  'discordTime.utils.js',
  'error.utils.js',
  'flags.utils.js',
  'formatAndValidateHex.utils.js',
  'formatTime.utils.js',
  'formatVariable.utils.js',
  'getAcronym.utils.js',
  'getDateOrString.utils.js',
  'getLines.utils.js',
  'icon.utils.js',
  'invertColor.utils.js',
  'isNumber.utils.js',
  'isString.utils.js',
  'parseImg.utils.js',
  'parsePng.utils.js',
  'parseSvg.utils.js',
  'shorten.utils.js',
  'truncateText.utils.js',
  'username.utils.js'
];

// Generate documentation for each utility file
utils.forEach(util => {
  commands.push(`jsdoc2md ${baseDir}/src/utils/${util} > ${docsDir}/Utils/${util.replace('.js', '.md')}`);
});

const singleCommand = process.argv.includes('--single');

// Run the commands
if (singleCommand) {
  console.log('Generating documentation for a single file...');
  execSync(commands[0], { stdio: 'inherit' });
} else {
  console.log('Generating full documentation...');
  commands.forEach(cmd => execSync(cmd, { stdio: 'inherit' }));
}