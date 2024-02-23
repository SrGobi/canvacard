# 🎶 Spotify

### Classes

[Spotify](<🎶 Spotify.md#Spotify>)

Creador de tarjetas de presencia de Spotify

### Typedefs

[SpotifyDataBG](<🎶 Spotify.md#SpotifyDataBG>) : `object`[SpotifyProgressBarData](<🎶 Spotify.md#SpotifyProgressBarData>) : `object`

### Spotify

Creador de tarjetas de presencia de Spotify

**Kind**: global class

* [Spotify](<🎶 Spotify.md#Spotify>)
  * [new Spotify()](<🎶 Spotify.md#new\_Spotify\_new>)
  * [.title](<🎶 Spotify.md#Spotify+title>) : `string`
  * [.image](<🎶 Spotify.md#Spotify+image>) : `string` | `Buffer` | `Canvas.Image`
  * [.artist](<🎶 Spotify.md#Spotify+artist>) : `string`
  * [.album](<🎶 Spotify.md#Spotify+album>) : `string`
  * [.start](<🎶 Spotify.md#Spotify+start>) : `number`
  * [.end](<🎶 Spotify.md#Spotify+end>) : `number`
  * [.background](<🎶 Spotify.md#Spotify+background>) : [`SpotifyDataBG`](<🎶 Spotify.md#SpotifyDataBG>)
  * [.progressBar](<🎶 Spotify.md#Spotify+progressBar>) : [`SpotifyProgressBarData`](<🎶 Spotify.md#SpotifyProgressBarData>)
  * [.setProgressBar(type, color)](<🎶 Spotify.md#Spotify+setProgressBar>) ⇒ [`Spotify`](<🎶 Spotify.md#Spotify>)
  * [.setTitle(title)](<🎶 Spotify.md#Spotify+setTitle>) ⇒ [`Spotify`](<🎶 Spotify.md#Spotify>)
  * [.setImage(source)](<🎶 Spotify.md#Spotify+setImage>) ⇒ [`Spotify`](<🎶 Spotify.md#Spotify>)
  * [.setAuthor(name)](<🎶 Spotify.md#Spotify+setAuthor>) ⇒ [`Spotify`](<🎶 Spotify.md#Spotify>)
  * [.setAlbum(name)](<🎶 Spotify.md#Spotify+setAlbum>) ⇒ [`Spotify`](<🎶 Spotify.md#Spotify>)
  * [.setStartTimestamp(time)](<🎶 Spotify.md#Spotify+setStartTimestamp>) ⇒ [`Spotify`](<🎶 Spotify.md#Spotify>)
  * [.setEndTimestamp(time)](<🎶 Spotify.md#Spotify+setEndTimestamp>) ⇒ [`Spotify`](<🎶 Spotify.md#Spotify>)
  * [.setBackground(type, data)](<🎶 Spotify.md#Spotify+setBackground>) ⇒ [`Spotify`](<🎶 Spotify.md#Spotify>)
  * [.build(ops)](<🎶 Spotify.md#Spotify+build>) ⇒ `Promise.<Buffer>`

#### new Spotify()

Crea una tarjeta de presencia de Spotify

**Example**

```js
const card = new canvacard.Spotify()
      .setAuthor("Indila")
      .setAlbum("Mini World")
      .setStartTimestamp(Date.now() - 10000)
      .setEndTimestamp(Date.now() + 50000)
      .setImage("https://is5-ssl.mzstatic.com/image/thumb/Features111/v4/a4/89/a1/a489a1cb-4543-6861-a276-4470d41d6a90/mzl.zcdmhnlk.jpg/800x800bb.jpeg")
      .setTitle("S.O.S");

  card.build()
      .then(data => {
          canvacard.write(data, "./images/spotify.png");
      });
```

#### spotify.title : `string`

Título de la canción

**Kind**: instance property of [`Spotify`](<🎶 Spotify.md#Spotify>)\


#### spotify.image : `string` | `Buffer` | `Canvas.Image`

Thumbnail

**Kind**: instance property of [`Spotify`](<🎶 Spotify.md#Spotify>)\


#### spotify.artist : `string`

Artista de la canción

**Kind**: instance property of [`Spotify`](<🎶 Spotify.md#Spotify>)\


#### spotify.album : `string`

Nombre del álbum de Spotify

**Kind**: instance property of [`Spotify`](<🎶 Spotify.md#Spotify>)\


#### spotify.start : `number`

Marca de tiempo de inicio de presencia de discord

**Kind**: instance property of [`Spotify`](<🎶 Spotify.md#Spotify>)\


#### spotify.end : `number`

Marca de tiempo de finalización de presencia de discord

**Kind**: instance property of [`Spotify`](<🎶 Spotify.md#Spotify>)\


#### spotify.background : [`SpotifyDataBG`](<🎶 Spotify.md#SpotifyDataBG>)

Fondo

**Kind**: instance property of [`Spotify`](<🎶 Spotify.md#Spotify>)\


#### spotify.progressBar : [`SpotifyProgressBarData`](<🎶 Spotify.md#SpotifyProgressBarData>)

Detalles de la barra de progreso

**Kind**: instance property of [`Spotify`](<🎶 Spotify.md#Spotify>)\


#### spotify.setProgressBar(type, color) ⇒ [`Spotify`](<🎶 Spotify.md#Spotify>)

Establecer detalles de la barra de progreso

**Kind**: instance method of [`Spotify`](<🎶 Spotify.md#Spotify>)

| Param | Type                 | Description               |
| ----- | -------------------- | ------------------------- |
| type  | `"TRACK"` \| `"BAR"` | Tipo de barra de progreso |
| color | `string`             | Color para establecer     |

#### spotify.setTitle(title) ⇒ [`Spotify`](<🎶 Spotify.md#Spotify>)

Establecer título

**Kind**: instance method of [`Spotify`](<🎶 Spotify.md#Spotify>)

| Param | Type     | Description            |
| ----- | -------- | ---------------------- |
| title | `string` | Título para establecer |

#### spotify.setImage(source) ⇒ [`Spotify`](<🎶 Spotify.md#Spotify>)

Establecer imagen

**Kind**: instance method of [`Spotify`](<🎶 Spotify.md#Spotify>)

| Param  | Type                                   | Description      |
| ------ | -------------------------------------- | ---------------- |
| source | `string` \| `Buffer` \| `Canvas.Image` | Fuente de imagen |

#### spotify.setAuthor(name) ⇒ [`Spotify`](<🎶 Spotify.md#Spotify>)

Establecer nombre de artista

**Kind**: instance method of [`Spotify`](<🎶 Spotify.md#Spotify>)

| Param | Type     | Description        |
| ----- | -------- | ------------------ |
| name  | `string` | Nombre del artista |

#### spotify.setAlbum(name) ⇒ [`Spotify`](<🎶 Spotify.md#Spotify>)

Establecer el nombre del álbum

**Kind**: instance method of [`Spotify`](<🎶 Spotify.md#Spotify>)

| Param | Type     | Description      |
| ----- | -------- | ---------------- |
| name  | `string` | Nombre del álbum |

#### spotify.setStartTimestamp(time) ⇒ [`Spotify`](<🎶 Spotify.md#Spotify>)

Establecer marca de tiempo de inicio

**Kind**: instance method of [`Spotify`](<🎶 Spotify.md#Spotify>)

| Param | Type               | Description     |
| ----- | ------------------ | --------------- |
| time  | `Date` \| `number` | Marca de tiempo |

#### spotify.setEndTimestamp(time) ⇒ [`Spotify`](<🎶 Spotify.md#Spotify>)

Establecer marca de tiempo de finalización

**Kind**: instance method of [`Spotify`](<🎶 Spotify.md#Spotify>)

| Param | Type               | Description     |
| ----- | ------------------ | --------------- |
| time  | `Date` \| `number` | Marca de tiempo |

#### spotify.setBackground(type, data) ⇒ [`Spotify`](<🎶 Spotify.md#Spotify>)

Definir fondo

**Kind**: instance method of [`Spotify`](<🎶 Spotify.md#Spotify>)

| Param | Type                                   | Default     | Description    |
| ----- | -------------------------------------- | ----------- | -------------- |
| type  | `"COLOR"` \| `"IMAGE"`                 | `COLOR`     | Tipo de fondo  |
| data  | `string` \| `Buffer` \| `Canvas.Image` | `"#2F3136"` | Datos de fondo |

#### spotify.build(ops) ⇒ `Promise.<Buffer>`

Esta función convierte los datos sin procesar en una tarjeta de presencia de Spotify.

**Kind**: instance method of [`Spotify`](<🎶 Spotify.md#Spotify>)

| Param        | Type     | Default                 | Description                 |
| ------------ | -------- | ----------------------- | --------------------------- |
| ops          | `object` |                         | Fuentes                     |
| \[ops.fontX] | `string` | `"&quot;Manrope&quot;"` | Familia tipográfica Bold    |
| \[ops.fontY] | `string` | `"&quot;Manrope&quot;"` | Familia tipográfica regular |

### SpotifyDataBG : `object`

**Kind**: global typedef\
**Properties**

| Name | Type                 | Description    |
| ---- | -------------------- | -------------- |
| type | `number`             | Tipo de fondo  |
| data | `string` \| `Buffer` | Datos de fondo |

### SpotifyProgressBarData : `object`

**Kind**: global typedef\
**Properties**

| Name    | Type     | Description                |
| ------- | -------- | -------------------------- |
| bgColor | `string` | Barra de progreso bg color |
| color   | `string` | Barra de progreso bg color |
