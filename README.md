# [![Typing SVG](https://readme-typing-svg.herokuapp.com?font=Fira+Code&weight=500&size=40&pause=1000&color=5865F2&multiline=true&random=false&width=435&lines=Canvacard)](#)

<p align="center"><a href="https://github.com/SrGobi/canvacard"><img src="https://raw.githubusercontent.com/SrGobi/canvacard/refs/heads/test/banner_Canvacard.png"></a></p>
<p align="center"><a href="https://nodei.co/npm/canvacard/"><img src="https://nodei.co/npm/canvacard.png"></a></p>
<p align="center"><img src="https://img.shields.io/npm/v/canvacard?style=for-the-badge"> <img src="https://img.shields.io/npm/dm/canvacard?style=for-the-badge"> <img src='https://img.shields.io/bundlephobia/minzip/canvacard?label=size&style=for-the-badge' alt='size' /> <img src="https://img.shields.io/npm/l/hercai?style=for-the-badge"> <img src="https://img.shields.io/npm/dt/canvacard?style=for-the-badge"> <a href="https://discord.gg/cqrN3Eg" target="_blank"> <img alt="Discord" src="https://img.shields.io/badge/Support-Click%20here-7289d9?style=for-the-badge&logo=discord"> </a> </p>


## [![Typing SVG](https://readme-typing-svg.herokuapp.com?font=Fira+Code&weight=500&pause=1000&color=F20000&random=false&width=435&lines=%E2%9D%94How+To+Install%3F)](#)

```console
npm i canvacard
```

# [![Typing SVG](https://readme-typing-svg.herokuapp.com?font=Fira+Code&weight=500&pause=1000&&color=00EDFF&random=false&width=435&lines=%F0%9F%8E%AF+Describing)](#)

For **CommonJS**
```javascript
const canvacard = require("canvacard");
```

For **EsModule** And **TypeScript**
```typescript
import canvacard from "canvacard";
```

# ✨Features

- 🪟 **Open source and no privacy concerns, fully transparent** - Canvacard is open source and free. You can contribute and you don't have to worry about privacy.

- 💪 **Easy to use** - Canvacard offers an intuitive and easy API to efficiently generate images, perfect for developers of all levels.

- 🚀 **Speed ​​and optimization** - The libraries it uses are highly optimized, offering exceptional performance when creating images.

- 🔒 **Typescript support** - Canvacard is built in Typescript, which allows for the use of type definitions and improves the developer experience.

- 🎨 **More than 50 customization options** - You have access to many tools to completely adjust and modify your images or cards.

- 🖼️ **Creating interactive and personalized cards** - Canvacard is perfect for creating custom cards for Discord, adding graphics, banners, badges, and more.

- 🛠️ **Object Oriented Design** - Canvacard is built with an object-oriented programming approach, making it easy to reuse and create complex cards.

- 🤓 **Ideal for beginners** - The API and documentation are simple, making it accessible even to those with little experience handling images.

- 🔡 **Register fonts** - Not only can you use the fonts from your machine, if you also use it for a server you can register the fonts you want!

For **CommonJS**
```javascript
const { registerFont } = require("canvacard");

// Path to source file and alias
const fontPath = "./path/to/font.ttf";
const fontName = "CustomFont";

registerFont(fontPath, fontName);

console.log(`Fuente ${fontName} registrada exitosamente.`);
```

For **EsModule** And **TypeScript**
```typescript
import { registerFont } from "canvacard";

// Define types for clarity
const fontPath: string = "./path/to/font.ttf";
const fontName: string = "CustomFont";

registerFont(fontPath, fontName);

console.log(`Fuente ${fontName} registrada exitosamente.`);
```

# 📦Examples

## [Rank Card](https://canvacard.srgobi.com/classes/rank)

```js
const { AttachmentBuilder } = require("discord.js");
const canvacard = require("canvacard");
const userData = getDataSomehow(); // Simulates obtaining user data

const rank = new canvacard.Rank()
  .setAvatar(userData.avatarURL, userData.avatar_decoration_data.asset, false)
  .setBanner(userData.bannerURL, true)
  .setBadges(userData.flags, userData.bot, true)
  .setBorder(["#22274a", "#001eff"], "vertical")
  .setCurrentXP(userData.xp)
  .setRequiredXP(userData.requiredXP)
  .setRank(1, "RANK", true)
  .setLevel(20, "LEVEL")
  .setStatus("online")
  .setProgressBar(["#14C49E", "#FF0000"], "GRADIENT", true)
  .setUsername(userData.username, userData.discriminator, "#FFFFFF")
  .setCreatedTimestamp(userData.createdTimestamp);

rank.build("Cascadia Code PL")
  .then(data => {
    // Use AttachmentBuilder to upload the file
    const attachment = new AttachmentBuilder(data, { name: "RankCard.png" });
    message.channel.send({ content: "Here is your rank card:", files: [attachment] });
  })
  .catch(err => console.error("Error creating rank card:", err));
```

<details open>
<summary>PREVIEW</summary>
<br>
  <a>
    <img src="https://raw.githubusercontent.com/SrGobi/canvacard/refs/heads/test/rank_1.png" alt="Rank Card Preview 1">
  </a>
  <a>
    <img src="https://raw.githubusercontent.com/SrGobi/canvacard/refs/heads/test/rank_2.png" alt="Rank Card Preview 2">
  </a>
  <a>
    <img src="https://raw.githubusercontent.com/SrGobi/canvacard/refs/heads/test/rank_3.png" alt="Rank Card Preview 3">
  </a>
  <a>
    <img src="https://raw.githubusercontent.com/SrGobi/canvacard/refs/heads/test/rank_4.png" alt="Rank Card Preview 4">
  </a>
  <a>
    <img src="https://raw.githubusercontent.com/SrGobi/canvacard/refs/heads/test/rank_5.png" alt="Rank Card Preview 5">
  </a>
</details>

## [Welcome / Leave Card](https://canvacard.srgobi.com/classes/welcomeleave)

```js
const canvacard = require("canvacard");
const img = "https://cdn.discordapp.com/embed/avatars/0.png";
const background = "https://i.imgur.com/5O7xmVe.png";

const welcomer = new canvacard.WelcomeLeave()
  .setAvatar(img)
  .setBackground('COLOR', '#000000')
  .setTitulo("Card Title 👋", '#FFFFFF')
  .setSubtitulo("Card Caption 👋", '#FFFFFF')
  .setOpacityOverlay(1)
  .setColorCircle('#FFFFFF')
  .setColorOverlay('#5865F2')
  .setTypeOverlay('ROUNDED');

welcomer.build("Cascadia Code PL, Noto Color Emoji")
  .then(data => {
    // Use AttachmentBuilder to upload the file
    const attachment = new AttachmentBuilder(data, { name: "WelcomeCard.png" });
    message.channel.send({ content: "Here is your welcome card:", files: [attachment] });
  })
  .catch(err => console.error("Error creating welcome card:", err));
```

<details open>
<summary>PREVIEW</summary>
<br>
  <a>
    <img src="https://raw.githubusercontent.com/SrGobi/canvacard/refs/heads/test/welcome_1.png" alt="Welcome Card Preview 1">
  </a>
  <a>
    <img src="https://raw.githubusercontent.com/SrGobi/canvacard/refs/heads/test/welcome_2.png" alt="Welcome Card Preview 2">
  </a>
  <a>
    <img src="https://raw.githubusercontent.com/SrGobi/canvacard/refs/heads/test/welcome_3.png" alt="Welcome Card Preview 3">
  </a>
  <a>
    <img src="https://raw.githubusercontent.com/SrGobi/canvacard/refs/heads/test/welcome_4.png" alt="Welcome Card Preview 4">
  </a>
</details>

## [Spotify Card](https://canvacard.srgobi.com/classes/spotify)

```js
const canvacard = require("canvacard");

const spotify = new canvacard.Spotify()
  .setAuthor("SAIKO")
  .setAlbum("SAKURA 👋")
  .setStartTimestamp(Date.now() - 10000)
  .setEndTimestamp(Date.now() + 50000)
  .setImage("https://i.scdn.co/image/ab67616d00001e02e346fc6f767ca2ac8365fe60")
  .setTitle("YO LO SOÑÉ");

spotify.build("Cascadia Code PL, Noto Color Emoji")
  .then(data => {
    // Use AttachmentBuilder to upload the file
    const attachment = new AttachmentBuilder(data, { name: "SpotifyCard.png" });
    message.channel.send({ content: "Here is your spotify card:", files: [attachment] });
  })
  .catch(err => console.error("Error creating spotify card:", err));
```

<img src="https://raw.githubusercontent.com/SrGobi/canvacard/refs/heads/test/spotify.png" alt="Spotify Card Preview">

## [Canvacard Circle](https://canvacard.srgobi.com/classes/canvacard)

```js
const canvacard = require("canvacard");

canvacard.Canvas.circle(data.avatarURL)
.then(data => {
  canvacard.write(data, "circle.png");
})
.catch(console.error);
```

<img src="https://raw.githubusercontent.com/SrGobi/canvacard/refs/heads/test/images/circle.png" alt="Circle Preview">

## [Otros ejemplos](https://canvacard.srgobi.com)

```js
const { Client, GatewayIntentBits, AttachmentBuilder } = require("discord.js");
const canvacard = require("canvacard");

const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]
});

client.on('ready', () => {
  console.log('¡I am online!');
});

client.on('messageCreate', async (message) => {
  if (message.author.bot) return;

  if (message.content === '!triggered') {
    try {
      let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
      let image = await canvacard.Canvas.trigger(avatar);
      // Enviar el archivo generado usando AttachmentBuilder
      let attachment = new AttachmentBuilder(image, { name: 'triggered.gif' });
      await message.channel.send({ content: 'Here is your "triggered" image!', files: [attachment] });
    } catch (err) {
      console.error('Error generating image triggered:', err);
    }
  }
});

client.login('Your_Bot_Token_Here');
```

<details open>
<summary>PREVIEW</summary>
<br>
  <a>
    <img src="https://raw.githubusercontent.com/SrGobi/canvacard/refs/heads/test/fortnite_shop.png" alt="Fortnite Shop">
  </a>
</details>