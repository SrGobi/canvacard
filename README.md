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

- 🪟 **Código abierto, sin problemas de privacidad, 100 % transparente** - Canvacard es completamente de código abierto y de uso gratuito. Puedes contribuir al proyecto y no tienes que preocuparte por la privacidad.
- 💪 **Fácil de usar** - Canvacard proporciona una API intuitiva y simple para generar imágenes de manera eficiente, perfecta para desarrolladores de todos los niveles.
- 🚀 **Rápido y optimizado** - Las bibliotecas subyacentes están altamente optimizadas, proporcionando un rendimiento sobresaliente en la generación de imágenes.
- 🔒 **Compatibilidad con Typescript** - Canvacard está escrito en Typescript, lo que proporciona definiciones de tipo listas para usar y una mejor experiencia de desarrollo.
- 🎨 **Más de 50 métodos de personalización** - Puedes usar una amplia gama de métodos para personalizar completamente tus imágenes o tarjetas.
- 🖼️ **Generación de tarjetas interactivas y personalizadas** - Canvacard es ideal para crear tarjetas personalizadas para plataformas como Discord, añadiendo imágenes, banners, insignias y más.
- 🛠️ **Orientado a objetos** - Canvacard está diseñado con un enfoque orientado a objetos, lo que facilita la reutilización de código y la creación de tarjetas complejas con poco esfuerzo.
- 🤓 **Apto para principiantes** - La documentación y la API son sencillas, por lo que es fácil de usar incluso si no tienes experiencia previa en manipulación de imágenes.

# Ejemplos

## [Rank Card](https://canvacard.srgobi.com/classes/rank)

```js
const { AttachmentBuilder } = require("discord.js");
const canvacard = require("canvacard");
const userData = getDataSomehow(); // Simula obtener los datos del usuario

const rank = new canvacard.Rank()
  .setAvatar(userData.avatarURL, userData.avatar_decoration_data.asset, false)
  .setBanner(userData.bannerURL, true)
  .setBadges(userData.flags, userData.bot, true)
  .setCurrentXP(userData.xp)
  .setRequiredXP(userData.requiredXP)
  .setRank(1, "RANK", true)
  .setLevel(20, "LEVEL")
  .setStatus("online")
  .setProgressBar(["#14C49E", "#FF0000"], "GRADIENT", true)
  .setUsername(userData.username, userData.discriminator, "#FFFFFF")
  .setCreatedTimestamp(userData.createdTimestamp)
  .setBorder(["#14C49E", "#FF0000"], "vertical");

rank.build()
  .then(data => {
    // Usar AttachmentBuilder para enviar el archivo
    const attachment = new AttachmentBuilder(data, { name: "RankCard.png" });
    message.channel.send({ content: "Aquí está tu tarjeta de rango:", files: [attachment] });
  })
  .catch(err => console.error("Error al crear la tarjeta de rango:", err));
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

## [Welcomer Card](https://canvacard.srgobi.com/classes/welcomer)

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
    // Usar AttachmentBuilder para enviar el archivo
    const attachment = new AttachmentBuilder(data, { name: "WelcomeCard.png" });
    message.channel.send({ content: "Aquí está tu tarjeta de bienvenida:", files: [attachment] });
  })
  .catch(err => console.error("Error al crear la tarjeta de bienvenida:", err));
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

## [Otros ejemplos](https://canvacard.srgobi.com)

```js
const { Client, GatewayIntentBits, AttachmentBuilder } = require("discord.js");
const canvacard = require("canvacard");

const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]
});

client.on('ready', () => {
  console.log('¡Estoy en línea!');
});

client.on('messageCreate', async (message) => {
  if (message.author.bot) return;

  if (message.content === '!triggered') {
    try {
      let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
      let image = await canvacard.Canvas.trigger(avatar);
      // Enviar el archivo generado usando AttachmentBuilder
      let attachment = new AttachmentBuilder(image, { name: 'triggered.gif' });
      await message.channel.send({ content: '¡Aquí tienes tu imagen "triggered"!', files: [attachment] });
    } catch (err) {
      console.error('Error al generar la imagen triggered:', err);
    }
  }
});

client.login('Tu_Bot_Token_aqui');
```

<details open>
<summary>PREVIEW</summary>
<br>
  <a>
    <img src="https://raw.githubusercontent.com/SrGobi/canvacard/refs/heads/test/fortnite_stats.png" alt="Fortnite Stats">
  </a>
  <a>
    <img src="https://raw.githubusercontent.com/SrGobi/canvacard/refs/heads/test/fortnite_shop.png" alt="Fortnite Shop">
  </a>
</details>

# Nota

> ⚠ | Para usar `Canvacard#CaptchaGen`, es posible que deba instalar paquetes como **[captcha-canvas](https://npmjs.com/package/captcha-canvas)**.