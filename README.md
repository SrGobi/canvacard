# Canvacard
Potente herramienta de manipulación de imágenes para manipular imágenes fácilmente.

# Installation

```sh
$ npm i canvacard
```

[![NPM](https://nodei.co/npm/canvacard.png)](https://nodei.co/npm/canvacard/)

# Examples

```js
const Discord = require("discord.js");
const client = new Discord.Client();
const canvacard = require("canvacard");

client.on("ready", () => {
    console.log("¡Estoy en línea!");
});

client.on("message", async (message) => {
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

# Note
> ⚠ | Para usar `Canvacard#Welcomer`/`Canvacard#Leaver`/`Canvacard#CaptchaGen`, es posible que deba instalar paquetes como **[discord-canvascard](https://npmjs.com/package/discord-canvascard)** & **[captcha-canvas](https://npmjs.com/package/captcha-canvas)**.