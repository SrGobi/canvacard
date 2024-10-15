const path = require('path');
const { execSync } = require('child_process');

const baseDir = path.resolve(__dirname, '..');
const docsDir = path.resolve(__dirname, '../..');

// Define the list of JSDoc commands
const commands = [
  `jsdoc2md ${baseDir}/plugins/* > ${docsDir}/docs/Plugins.md`,
  `jsdoc2md ${baseDir}/src/Welcomer.js > ${docsDir}/docs/Classes/Welcomer.md`,
  `jsdoc2md ${baseDir}/src/Leaver.js > ${docsDir}/docs/Classes/Leaver.md`,
  `jsdoc2md ${baseDir}/src/Rank.js > ${docsDir}/docs/Classes/Rank.md`,
  `jsdoc2md ${baseDir}/src/Spotify.js > ${docsDir}/docs/Classes/Spotify.md`,
  `jsdoc2md ${baseDir}/src/FortniteShop.js > ${docsDir}/docs/Classes/FortniteShop.md`,
  `jsdoc2md ${baseDir}/src/FortniteStats.js > ${docsDir}/docs/Classes/FortniteStats.md`,
  `jsdoc2md ${baseDir}/src/Canvacard.js > ${docsDir}/docs/Classes/Canvacard.md`,
  `jsdoc2md ${baseDir}/src/Plugins.js > ${docsDir}/docs/Classes/Plugins.md`,
  `jsdoc2md ${baseDir}/src/Util.js > ${docsDir}/docs/Classes/Util.md`
];

const singleCommand = process.argv.includes('--single');

// Run the commands
if (singleCommand) {
  console.log('Generating documentation for a single file...');
  execSync(commands[0], { stdio: 'inherit' });
} else {
  console.log('Generating full documentation...');
  commands.forEach(cmd => execSync(cmd, { stdio: 'inherit' }));
}
