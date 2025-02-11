# Canvacard
Potente herramienta de manipulación de imágenes para manipular imágenes fácilmente.

# Installation

```sh
$ npm i canvacard
```

[![NPM](https://nodei.co/npm/canvacard.png)](https://nodei.co/npm/canvacard/)

# Ejemplos

## Welcomer Card

```js
const canvacard = require("canvacard");
const img = "https://cdn.discordapp.com/embed/avatars/0.png";
const background = "https://i.imgur.com/ulr1KDT.png";

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
    .setColorBorder("#000000");
    .setOpacityBorder("0.4");

welcomer.build()
    .then(data => {
        const attachment = new Discord.MessageAttachment(data, "WelcomerCard.png");
        message.channel.send(attachment);
    });
```

### Preview
![WelcomerCard](https://i.imgur.com/FrVcMdr.png)
![WelcomerCard](https://i.imgur.com/ulr1KDT.png)

## Otros ejemplos

```js
const Discord = require("discord.js");
const client = new Discord.Client();
const canvacard = require("canvacard");

client.on("ready", () => {
    console.log("¡Estoy en línea!");
});

client.on("messageCreate", async (message) => {
    if (message.author.bot) return;
    if (message.content === "!triggered") {
        let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
        let image = await canvacard.Canvas.trigger(avatar);
        let attachment = new Discord.MessageAttachment(image, "triggered.gif");
        return message.channel.send(attachment);
    }
});

client.login("Tu_Bot_Token_aqui");
```

# Nota
> ⚠ | Para usar `Canvacard#Welcomer`/`Canvacard#Leaver`/`Canvacard#CaptchaGen`, es posible que deba instalar paquetes como **[discord-canvascardcard](https://www.npmjs.com/package/discord-canvascard)** & **[captcha-canvas](https://npmjs.com/package/captcha-canvas)**.