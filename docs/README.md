# [![Typing SVG](https://readme-typing-svg.herokuapp.com?font=Fira+Code&weight=500&size=40&pause=1000&color=5865F2&multiline=true&random=false&width=435&lines=Canvacard)](#)

Potente herramienta de manipulación de imágenes para manipular imágenes fácilmente.

<p align="center"><a href="https://nodei.co/npm/canvacard/"><img src="https://nodei.co/npm/canvacard.png"></a></p>
<p align="center"><img src="https://img.shields.io/npm/v/canvacard?style=for-the-badge"> <img src="https://img.shields.io/npm/l/hercai?style=for-the-badge"> <img src="https://img.shields.io/npm/dt/canvacard?style=for-the-badge"> <a href="https://discord.gg/cqrN3Eg" target="_blank"> <img alt="Discord" src="https://img.shields.io/badge/Support-Click%20here-7289d9?style=for-the-badge&logo=discord"> </a> </p>


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
```javascript
import canvacard from "canvacard";
```

# Features

- Súper simple y fácil de usar 😎
- Más rápido que canvacard v4 🚀
- Todas las fuentes de Google Fonts 📚
- ¿Más de **50 métodos** ...? ¡Hurra! 🎉
- Construido sobre un lienzo de nodos y sin tonterías involucradas 🔥
- Orientado a objetos 💻
- Apto para principiantes 🤓
- Soporta emojis 😀

# Ejemplos

## Rank Card

```js
const canvacard = require("canvacard");
const img = "https://cdn.discordapp.com/embed/avatars/0.png";
const background = "https://i.imgur.com/5O7xmVe.png";

const userData = getDataSomehow();

const rank = new canvacard.Rank()
  .setAvatar(img)
  .setBackground('IMAGE', background)
  .setCurrentXP(userData.xp)
  .setRequiredXP(userData.requiredXP)
  .setRank(userData.rank)
  .setRankColor("#FFFFFF")
  .setLevel(userData.level)
  .setLevelColor("#FFFFFF")
  .setStatus("online", true)
  .setCustomStatusColor("#23272A")
  .setOverlay("#23272A", 1 || 0, true)
  .setProgressBar(["#FF0000", "#0000FF"], "GRADIENT")
  .setProgressBarTrack("#000000")
  .setUsername("SrGobi")
  .renderEmojis(true)

rank.build()
  .then(data => {
    const attachment = new Discord.MessageAttachment(data, "RankCard.png");
    message.channel.send(attachment);
  });
```

<details open>
<summary>PREVIEW</summary>
<br>
  <a>
    <img src="https://i.imgur.com/fgqOnhH.png">
  </a>
  <a>
    <img src="https://i.imgur.com/QBP7kO6.png">
  </a>
  <a>
    <img src="https://i.imgur.com/V8vpyKL.png">
  </a>
</details>

## Welcomer Card

```js
const canvacard = require("canvacard");
const img = "https://cdn.discordapp.com/embed/avatars/0.png";
const background = "https://i.imgur.com/5O7xmVe.png";

const welcomer = new canvacard.Welcomer()
  .setAvatar(img)
  .setBackground('IMAGE', background)
  .setTitulo("WELCOME")
  .setSubtitulo("Subtitulo personalizable!")
  .setTitulo("Titulo personalizable!")
  .setSubtitulo("Subtitulo personalizable!")
  .setColorTitulo("#FFFFFF");
  .setColorSubtitulo("#5865f2");
  .setColorCircle("#FFFFFF");
  .setColorOverlay("#000000");
  .setOpacityOverlay("0.4");

welcomer.build()
  .then(data => {
    const attachment = new Discord.MessageAttachment(data, "WelcomerCard.png");
    message.channel.send(attachment);
  });
```

<details open>
<summary>PREVIEW</summary>
<br>
  <a>
    <img src="https://i.imgur.com/EWGFp1C.png">
  </a>
  <a>
    <img src="https://i.imgur.com/5O7xmVe.png">
  </a>
  <a>
    <img src="https://i.imgur.com/S9AkanK.png">
  </a>
  <a>
    <img src="https://i.imgur.com/AqJcx6K.png">
  </a>
</details>

## Otros ejemplos

```js
const Discord = require('discord.js');
const client = new Discord.Client();
const canvacard = require('canvacard');

client.on('ready', () => {
	console.log('¡Estoy en línea!');
});

client.on('messageCreate', async (message) => {
	if (message.author.bot) return;
	if (message.content === '!triggered') {
		let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
		let image = await canvacard.Canvas.trigger(avatar);
		let attachment = new Discord.MessageAttachment(image, 'triggered.gif');
		return message.channel.send(attachment);
	}
});

client.login('Tu_Bot_Token_aqui');
```

<details open>
<summary>PREVIEW</summary>
<br>
  <a>
    <img src="https://i.imgur.com/tOGNj5d.png">
  </a>
  <a>
    <img src="https://i.imgur.com/tNbpx68.jpg">
  </a>
</details>

# Nota

> ⚠ | Para usar `Canvacard#CaptchaGen`, es posible que deba instalar paquetes como **[captcha-canvas](https://npmjs.com/package/captcha-canvas)**.