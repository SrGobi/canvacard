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
```javascript
import canvacard from "canvacard";
```

# Features

- 🪟 **Código abierto y sin preocupaciones de privacidad, totalmente transparente** - Canvacard es de código abierto y gratuito. Puedes colaborar y no tendrás que inquietarte por la privacidad.

- 💪 **Sencillo de utilizar** - Canvacard ofrece una API intuitiva y fácil para generar imágenes eficientemente, perfecta para desarrolladores de todos los niveles.

- 🚀 **Velocidad y optimización** - Las bibliotecas que usa están muy optimizadas, ofreciendo un rendimiento excepcional en la creación de imágenes.

- 🔒 **Soporte para Typescript** - Canvacard está desarrollado en Typescript, lo que permite usar definiciones de tipo y mejora la experiencia del desarrollador.

- 🎨 **Más de 50 opciones de personalización** - Tienes acceso a muchas herramientas para ajustar y modificar completamente tus imágenes o tarjetas.

- 🖼️ **Creación de tarjetas interactivas y personalizadas** - Canvacard es perfecto para crear tarjetas personalizadas para Discord, añadiendo gráficos, banners, insignias y más.

- 🛠️ **Diseño orientado a objetos** - Canvacard está construido con un enfoque en programación orientada a objetos, facilitando la reutilización y creación de tarjetas complejas.

- 🤓 **Ideal para principiantes** - La API y documentación son simples, lo que lo hace accesible incluso para quienes tienen poca experiencia en el manejo de imágenes.

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

rank.build("Cascadia Code PL")
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

## [Welcome / Leave Card](https://canvacard.srgobi.com/classes/welcomeleave)

```js
const canvacard = require("canvacard");
const img = "https://cdn.discordapp.com/embed/avatars/0.png";
const background = "https://i.imgur.com/5O7xmVe.png";

const welcomer = new canvacard.WelcomeLeave()
  .setAvatar(img)
  .setBackground('COLOR', '#000000')
  .setTitulo("Titulo de la Tarjeta👋", '#FFFFFF')
  .setSubtitulo("Subtitulo de la Tarjeta 👋", '#FFFFFF')
  .setOpacityOverlay(1)
  .setColorCircle('#FFFFFF')
  .setColorOverlay('#5865F2')
  .setTypeOverlay('ROUNDED');

welcomer.build("Cascadia Code PL, Noto Color Emoji")
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
    // Usar AttachmentBuilder para enviar el archivo
    const attachment = new AttachmentBuilder(data, { name: "WelcomeCard.png" });
    message.channel.send({ content: "Aquí está tu tarjeta de bienvenida:", files: [attachment] });
  })
  .catch(err => console.error("Error al crear la tarjeta de bienvenida:", err));
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
    <img src="https://raw.githubusercontent.com/SrGobi/canvacard/refs/heads/test/fortnite_shop.png" alt="Fortnite Shop">
  </a>
</details>