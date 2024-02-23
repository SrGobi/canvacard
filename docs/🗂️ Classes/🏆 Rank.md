# 🏆 Rank

### Classes

[Rank](<🏆 Rank.md#Rank>)

### Typedefs

[CanvacardRankData](<🏆 Rank.md#CanvacardRankData>) : `object`

### Rank

**Kind**: global class

* [Rank](<🏆 Rank.md#Rank>)
  * [new Rank()](<🏆 Rank.md#new\_Rank\_new>)
  * [.data](<🏆 Rank.md#Rank+data>) : [`CanvacardRankData`](<🏆 Rank.md#CanvacardRankData>)
  * [.renderEmojis(\[apply\])](<🏆 Rank.md#Rank+renderEmojis>) ⇒ [`Rank`](<🏆 Rank.md#Rank>)
  * [.setFontSize(size)](<🏆 Rank.md#Rank+setFontSize>) ⇒ [`Rank`](<🏆 Rank.md#Rank>)
  * [.setUsername(name, color)](<🏆 Rank.md#Rank+setUsername>) ⇒ [`Rank`](<🏆 Rank.md#Rank>)
  * [.setProgressBar(color, \[fillType\], \[rounded\])](<🏆 Rank.md#Rank+setProgressBar>) ⇒ [`Rank`](<🏆 Rank.md#Rank>)
  * [.setProgressBarTrack(color)](<🏆 Rank.md#Rank+setProgressBarTrack>) ⇒ [`Rank`](<🏆 Rank.md#Rank>)
  * [.setOverlay(color, \[level\], \[display\])](<🏆 Rank.md#Rank+setOverlay>) ⇒ [`Rank`](<🏆 Rank.md#Rank>)
  * [.setRequiredXP(data, color)](<🏆 Rank.md#Rank+setRequiredXP>) ⇒ [`Rank`](<🏆 Rank.md#Rank>)
  * [.setCurrentXP(data, color)](<🏆 Rank.md#Rank+setCurrentXP>) ⇒ [`Rank`](<🏆 Rank.md#Rank>)
  * [.setRank(data, text, \[display\])](<🏆 Rank.md#Rank+setRank>) ⇒ [`Rank`](<🏆 Rank.md#Rank>)
  * [.setRankColor(text, number)](<🏆 Rank.md#Rank+setRankColor>) ⇒ [`Rank`](<🏆 Rank.md#Rank>)
  * [.setLevelColor(text, number)](<🏆 Rank.md#Rank+setLevelColor>) ⇒ [`Rank`](<🏆 Rank.md#Rank>)
  * [.setLevel(data, text, \[display\])](<🏆 Rank.md#Rank+setLevel>) ⇒ [`Rank`](<🏆 Rank.md#Rank>)
  * [.setCustomStatusColor(color)](<🏆 Rank.md#Rank+setCustomStatusColor>) ⇒ [`Rank`](<🏆 Rank.md#Rank>)
  * [.setStatus(status, circle, width)](<🏆 Rank.md#Rank+setStatus>) ⇒ [`Rank`](<🏆 Rank.md#Rank>)
  * [.setBackground(type, \[data\])](<🏆 Rank.md#Rank+setBackground>) ⇒ [`Rank`](<🏆 Rank.md#Rank>)
  * [.setAvatar(data)](<🏆 Rank.md#Rank+setAvatar>) ⇒ [`Rank`](<🏆 Rank.md#Rank>)
  * [.build(ops)](<🏆 Rank.md#Rank+build>) ⇒ `Promise.<Buffer>`

#### new Rank()

Creates Rank card

**Example**

```js
const rank = new canvacard.Rank()
          .setAvatar(img)
          .setCurrentXP(203)
          .setRequiredXP(500)
          .setStatus("dnd")
          .setProgressBar(["#FF0000", "#0000FF"], "GRADIENT")
          .setUsername("SrGobi")
      
      rank.build()
          .then(data => {
              canvacard.write(data, "RankCard.png");
          })
```

#### rank.data : [`CanvacardRankData`](<🏆 Rank.md#CanvacardRankData>)

Rank card data

**Kind**: instance property of [`Rank`](<🏆 Rank.md#Rank>)\


#### rank.renderEmojis(\[apply]) ⇒ [`Rank`](<🏆 Rank.md#Rank>)

Si debe mostrar el nombre de usuario con emojis (si los hay)

**Kind**: instance method of [`Rank`](<🏆 Rank.md#Rank>)

| Param    | Type      | Default | Description                               |
| -------- | --------- | ------- | ----------------------------------------- |
| \[apply] | `boolean` | `false` | Establécelo a `true` para mostrar emojis. |

#### rank.setFontSize(size) ⇒ [`Rank`](<🏆 Rank.md#Rank>)

Tamaño de letra

**Kind**: instance method of [`Rank`](<🏆 Rank.md#Rank>)

| Param | Type     |
| ----- | -------- |
| size  | `string` |

#### rank.setUsername(name, color) ⇒ [`Rank`](<🏆 Rank.md#Rank>)

Establecer nombre de usuario

**Kind**: instance method of [`Rank`](<🏆 Rank.md#Rank>)

| Param | Type     | Default     | Description    |
| ----- | -------- | ----------- | -------------- |
| name  | `string` |             | Username       |
| color | `string` | `"#FFFFFF"` | Username color |

#### rank.setProgressBar(color, \[fillType], \[rounded]) ⇒ [`Rank`](<🏆 Rank.md#Rank>)

Definir el estilo de la barra de progreso

**Kind**: instance method of [`Rank`](<🏆 Rank.md#Rank>)

| Param       | Type                         | Default | Description                              |
| ----------- | ---------------------------- | ------- | ---------------------------------------- |
| color       | `string` \| `Array.<string>` |         | Progressbar Color                        |
| \[fillType] | `"COLOR"` \| `"GRADIENT"`    | `COLOR` | Progressbar type                         |
| \[rounded]  | `boolean`                    | `true`  | If progressbar should have rounded edges |

#### rank.setProgressBarTrack(color) ⇒ [`Rank`](<🏆 Rank.md#Rank>)

Fijar la pista de la barra de progreso

**Kind**: instance method of [`Rank`](<🏆 Rank.md#Rank>)

| Param | Type     | Description |
| ----- | -------- | ----------- |
| color | `string` | Track color |

#### rank.setOverlay(color, \[level], \[display]) ⇒ [`Rank`](<🏆 Rank.md#Rank>)

Establecer superposición de tarjetas

**Kind**: instance method of [`Rank`](<🏆 Rank.md#Rank>)

| Param      | Type      | Default | Description                  |
| ---------- | --------- | ------- | ---------------------------- |
| color      | `string`  |         | Overlay color                |
| \[level]   | `number`  | `0.5`   | Opacity level                |
| \[display] | `boolean` | `true`  | IF it should display overlay |

#### rank.setRequiredXP(data, color) ⇒ [`Rank`](<🏆 Rank.md#Rank>)

Establecer xp requerido

**Kind**: instance method of [`Rank`](<🏆 Rank.md#Rank>)

| Param | Type     | Default     | Description |
| ----- | -------- | ----------- | ----------- |
| data  | `number` |             | Required xp |
| color | `string` | `"#FFFFFF"` | Color       |

#### rank.setCurrentXP(data, color) ⇒ [`Rank`](<🏆 Rank.md#Rank>)

Fijar xp actual

**Kind**: instance method of [`Rank`](<🏆 Rank.md#Rank>)

| Param | Type     | Default     | Description |
| ----- | -------- | ----------- | ----------- |
| data  | `number` |             | Current xp  |
| color | `string` | `"#FFFFFF"` | Color       |

#### rank.setRank(data, text, \[display]) ⇒ [`Rank`](<🏆 Rank.md#Rank>)

Establecer rango

**Kind**: instance method of [`Rank`](<🏆 Rank.md#Rank>)

| Param      | Type      | Default  | Description               |
| ---------- | --------- | -------- | ------------------------- |
| data       | `number`  |          | Current Rank              |
| text       | `string`  | `"RANK"` | Display text              |
| \[display] | `boolean` | `true`   | If it should display rank |

#### rank.setRankColor(text, number) ⇒ [`Rank`](<🏆 Rank.md#Rank>)

Establecer el color de visualización del rango

**Kind**: instance method of [`Rank`](<🏆 Rank.md#Rank>)

| Param  | Type     | Default     | Description  |
| ------ | -------- | ----------- | ------------ |
| text   | `string` | `"#FFFFFF"` | text color   |
| number | `string` | `"#FFFFFF"` | Number color |

#### rank.setLevelColor(text, number) ⇒ [`Rank`](<🏆 Rank.md#Rank>)

Fijar color de nivel

**Kind**: instance method of [`Rank`](<🏆 Rank.md#Rank>)

| Param  | Type     | Default     | Description  |
| ------ | -------- | ----------- | ------------ |
| text   | `string` | `"#FFFFFF"` | text color   |
| number | `string` | `"#FFFFFF"` | number color |

#### rank.setLevel(data, text, \[display]) ⇒ [`Rank`](<🏆 Rank.md#Rank>)

Establecer nivel

**Kind**: instance method of [`Rank`](<🏆 Rank.md#Rank>)

| Param      | Type      | Default   | Description                |
| ---------- | --------- | --------- | -------------------------- |
| data       | `number`  |           | Current Level              |
| text       | `string`  | `"LEVEL"` | Display text               |
| \[display] | `boolean` | `true`    | If it should display level |

#### rank.setCustomStatusColor(color) ⇒ [`Rank`](<🏆 Rank.md#Rank>)

Establecer color de estado personalizado

**Kind**: instance method of [`Rank`](<🏆 Rank.md#Rank>)

| Param | Type     | Description  |
| ----- | -------- | ------------ |
| color | `string` | Color to set |

#### rank.setStatus(status, circle, width) ⇒ [`Rank`](<🏆 Rank.md#Rank>)

Establecer estado

**Kind**: instance method of [`Rank`](<🏆 Rank.md#Rank>)

| Param  | Type                                                              | Default | Description                              |
| ------ | ----------------------------------------------------------------- | ------- | ---------------------------------------- |
| status | `"online"` \| `"idle"` \| `"dnd"` \| `"offline"` \| `"streaming"` |         | User status                              |
| circle | `boolean`                                                         | `false` | Si el icono de estado debe ser circular. |
| width  | `number` \| `boolean`                                             | `5`     | Anchura de estado                        |

#### rank.setBackground(type, \[data]) ⇒ [`Rank`](<🏆 Rank.md#Rank>)

Establecer imagen/color de fondo

**Kind**: instance method of [`Rank`](<🏆 Rank.md#Rank>)

| Param   | Type                   | Description               |
| ------- | ---------------------- | ------------------------- |
| type    | `"COLOR"` \| `"IMAGE"` | Background type           |
| \[data] | `string` \| `Buffer`   | Background color or image |

#### rank.setAvatar(data) ⇒ [`Rank`](<🏆 Rank.md#Rank>)

Avatar de usuario

**Kind**: instance method of [`Rank`](<🏆 Rank.md#Rank>)

| Param | Type                 | Description |
| ----- | -------------------- | ----------- |
| data  | `string` \| `Buffer` | Avatar data |

#### rank.build(ops) ⇒ `Promise.<Buffer>`

Construye la tarjeta de rango

**Kind**: instance method of [`Rank`](<🏆 Rank.md#Rank>)

| Param        | Type     | Default                         | Description         |
| ------------ | -------- | ------------------------------- | ------------------- |
| ops          | `object` |                                 | Fonts               |
| \[ops.fontX] | `string` | `"&quot;MANROPE_BOLD&quot;"`    | Bold font family    |
| \[ops.fontY] | `string` | `"&quot;MANROPE_REGULAR&quot;"` | Regular font family |

### CanvacardRankData : `object`

**Kind**: global typedef\
**Properties**

| Name                       | Type                                                              | Default                 | Description                                           |
| -------------------------- | ----------------------------------------------------------------- | ----------------------- | ----------------------------------------------------- |
| width                      | `number`                                                          |                         | Ancho de la tarjeta de rango                          |
| height                     | `number`                                                          |                         | Altura de la tarjeta de rango                         |
| background                 | `object`                                                          |                         | Datos de antecedentes de la tarjeta de rango          |
| \[background.type]         | `"image"` \| `"color"`                                            | `"color"`               | Tipo de fondo                                         |
| \[background.image]        | `string` \| `Buffer`                                              | `"&quot;#23272A&quot;"` | Imagen de fondo (o color)                             |
| progressBar                | `object`                                                          |                         | Datos de la barra de progreso                         |
| \[progressBar.rounded]     | `boolean`                                                         | `true`                  | Si la barra de progreso debe redondearse              |
| \[progressBar.x]           | `number`                                                          | `275.5`                 | Barra de progreso X                                   |
| \[progressBar.y]           | `number`                                                          | `183.75`                | Barra de progreso Y                                   |
| \[progressBar.height]      | `number`                                                          | `37.5`                  | Altura de la barra de progreso                        |
| \[progressBar.width]       | `number`                                                          | `596.5`                 | Ancho de la barra de progreso                         |
| \[progressBar.track]       | `object`                                                          |                         | Pista de la barra de progreso                         |
| \[progressBar.track.color] | `string`                                                          | `"&quot;#484b4E&quot;"` | Color de la pista de la barra de progreso             |
| \[progressBar.bar]         | `object`                                                          |                         | Datos de la barra de progreso                         |
| \[progressBar.bar.type]    | `"color"` \| `"gradient"`                                         | `"color"`               | Tipo de barra de progreso                             |
| \[progressBar.bar.color]   | `string` \| `Array.<string>`                                      | `"&quot;#FFFFFF&quot;"` | Color de la barra de la barra de progreso             |
| overlay                    | `object`                                                          |                         | Superposición de la barra de progreso                 |
| \[overlay.display]         | `boolean`                                                         | `true`                  | Si debería mostrar superposición                      |
| \[overlay.level]           | `number`                                                          | `0.5`                   | Nivel de opacidad de superposición                    |
| \[overlay.color]           | `string`                                                          | `"&quot;#333640&quot;"` | Superposición de color de fondo                       |
| avatar                     | `object`                                                          |                         | Datos de avatar de la tarjeta de rango                |
| \[avatar.source]           | `string` \| `Buffer`                                              | `null`                  | Fuente de avatar                                      |
| \[avatar.x]                | `number`                                                          | `70`                    | X                                                     |
| \[avatar.y]                | `number`                                                          | `50`                    | Y                                                     |
| \[avatar.height]           | `number`                                                          | `180`                   | altura                                                |
| \[avatar.width]            | `number`                                                          | `180`                   | ancho                                                 |
| status                     | `object`                                                          |                         | Estado de la tarjeta de rango                         |
| \[status.width]            | `number`                                                          | `5`                     | Ancho de estado                                       |
| \[status.type]             | `"online"` \| `"dnd"` \| `"idle"` \| `"offline"` \| `"streaming"` |                         | Tipo de estado                                        |
| \[status.color]            | `string`                                                          | `"&quot;#43B581&quot;"` | Color de estado                                       |
| \[status.circle]           | `boolean`                                                         | `false`                 | ¿Estado circular?                                     |
| rank                       | `object`                                                          |                         | Datos de rango de la tarjeta de clasificación         |
| \[rank.display]            | `boolean`                                                         | `true`                  | Si debe mostrar rango                                 |
| \[rank.data]               | `number`                                                          | `1`                     | El rango                                              |
| \[rank.textColor]          | `string`                                                          | `"&quot;#FFFFFF&quot;"` | Rango de color del texto                              |
| \[rank.color]              | `string`                                                          | `"&quot;#F3F3F3&quot;"` | Color de rango                                        |
| \[rank.displayText]        | `string`                                                          | `"&quot;RANK&quot;"`    | Texto de visualización de rango                       |
| level                      | `object`                                                          |                         | Datos de nivel de tarjeta de rango                    |
| \[level.display]           | `boolean`                                                         | `true`                  | Si debería mostrar el nivel                           |
| \[level.data]              | `number`                                                          | `1`                     | El nivel                                              |
| \[level.textColor]         | `string`                                                          | `"&quot;#FFFFFF&quot;"` | color de texto de nivel                               |
| \[level.color]             | `string`                                                          | `"&quot;#F3F3F3&quot;"` | color de nivel                                        |
| \[level.displayText]       | `string`                                                          | `"&quot;LEVEL&quot;"`   | texto de visualización de nivel                       |
| previousRankXP             | `object`                                                          |                         | tarjeta xp de rango anterior opcional                 |
| \[previousRankXP.data]     | `number`                                                          |                         | xp de rango anterior opcional                         |
| \[previousRankXP.color]    | `string`                                                          | `null`                  | Tabla de rango de color de rango xp anterior opcional |
| currentXP                  | `object`                                                          |                         | Tarjeta de rango xp actual                            |
| \[currentXP.data]          | `number`                                                          | `0`                     | XP actual                                             |
| \[currentXP.color]         | `string`                                                          | `"&quot;#FFFFFF&quot;"` | Carta de rango color xp actual                        |
| requiredXP                 | `object`                                                          |                         | Tarjeta de rango requerida xp                         |
| \[requiredXP.data]         | `number`                                                          | `0`                     | requerido xp                                          |
| \[requiredXP.color]        | `string`                                                          | `"&quot;#FFFFFF&quot;"` | Se requiere tarjeta de rango xp color                 |
| username                   | `object`                                                          |                         | Datos de nombre de usuario                            |
| \[username.name]           | `string`                                                          | `null`                  | Nombre de usuario de la tarjeta de clasificación      |
| \[username.color]          | `string`                                                          | `"&quot;#FFFFFF&quot;"` | Color de nombre de usuario de la tarjeta de rango     |
| \[renderEmojis]            | `boolean`                                                         | `true`                  | Si debería renderizar emojis                          |
