# Ejemplo de Tarjeta de rango

```js
const canvacard = require("canvacard");
const img = getImageSomehow();
const data = getDataSomehow();

const rank = new canvacard.Rank()
    .setAvatar(img)
    .setCurrentXP(data.currentXP)
    .setRequiredXP(data.requiredXP)
    .setStatus(data.status)
    .setProgressBar("#FFFFFF", "COLOR")
    .setUsername(data.username)
    .setDiscriminator(data.discriminator);

rank.build()
    .then(buffer => {
        canvacard.write(buffer, "RankCard.png");
    });
```

# Ejemplo de Tarjeta de rango
![RankCard](https://raw.githubusercontent.com/SrGobi/canvacard/v5/test/images/RankCard.png)