# 🎯 Canvacard

### Classes

[Canvacard](<🎯 Canvacard.md#Canvacard>)

Canvacard Generador De Memes

### Typedefs

[ConvolutionMatrix](<🎯 Canvacard.md#ConvolutionMatrix>) : `object`

Matriz de convolución Canvacard

### Canvacard

Canvacard Generador De Memes

**Kind**: global class

* [Canvacard](<🎯 Canvacard.md#Canvacard>)
  * [new Canvacard()](<🎯 Canvacard.md#new\_Canvacard\_new>)
  * [.CONVOLUTION\_MATRIX](<🎯 Canvacard.md#Canvacard.CONVOLUTION\_MATRIX>) : [`ConvolutionMatrix`](<🎯 Canvacard.md#ConvolutionMatrix>)
  * [.Util](<🎯 Canvacard.md#Canvacard.Util>) : `Util`
  * [.trigger(image)](<🎯 Canvacard.md#Canvacard.trigger>) ⇒ `Promise.<Buffer>`
  * [.invert(image)](<🎯 Canvacard.md#Canvacard.invert>) ⇒ `Promise.<Buffer>`
  * [.sepia(image)](<🎯 Canvacard.md#Canvacard.sepia>) ⇒ `Promise.<Buffer>`
  * [.greyscale(image)](<🎯 Canvacard.md#Canvacard.greyscale>) ⇒ `Promise.<Buffer>`
  * [.brightness(image, amount)](<🎯 Canvacard.md#Canvacard.brightness>) ⇒ `Promise.<Buffer>`
  * [.darkness(image, amount)](<🎯 Canvacard.md#Canvacard.darkness>) ⇒ `Promise.<Buffer>`
  * [.threshold(img, amount)](<🎯 Canvacard.md#Canvacard.threshold>) ⇒ `Promise.<Buffer>`
  * [.convolute(img, matrix, opaque)](<🎯 Canvacard.md#Canvacard.convolute>) ⇒ `Promise.<Buffer>`
  * [.createProgressBar(track, bar)](<🎯 Canvacard.md#Canvacard.createProgressBar>) ⇒ `Buffer`
  * [.blur(image)](<🎯 Canvacard.md#Canvacard.blur>) ⇒ `Promise.<Buffer>`
  * [.pixelate(image, pixels)](<🎯 Canvacard.md#Canvacard.pixelate>) ⇒ `Promise.<Buffer>`
  * [.sharpen(image, lvl)](<🎯 Canvacard.md#Canvacard.sharpen>) ⇒ `Promise.<Buffer>`
  * [.burn(image, lvl)](<🎯 Canvacard.md#Canvacard.burn>) ⇒ `Promise.<Buffer>`
  * [.color(color, displayHex, height, width)](<🎯 Canvacard.md#Canvacard.color>) ⇒ `Buffer`
  * [.circle(image)](<🎯 Canvacard.md#Canvacard.circle>) ⇒ `Promise.<Buffer>`
  * [.rectangle(x, y, width, height, color, stroke, lineWidth)](<🎯 Canvacard.md#Canvacard.rectangle>) ⇒ `Buffer`
  * [.fuse(image1, image2)](<🎯 Canvacard.md#Canvacard.fuse>) ⇒ `Promise.<Buffer>`
  * [.resize(image, width, height)](<🎯 Canvacard.md#Canvacard.resize>) ⇒ `Promise.<Buffer>`
  * [.kiss(image1, image2)](<🎯 Canvacard.md#Canvacard.kiss>) ⇒ `Promise.<Buffer>`
  * [.spank(image1, image2)](<🎯 Canvacard.md#Canvacard.spank>) ⇒ `Promise.<Buffer>`
  * [.registerFonts(fontArray)](<🎯 Canvacard.md#Canvacard.registerFonts>) ⇒ `Promise.<void>`
  * [.slap(image1, image2)](<🎯 Canvacard.md#Canvacard.slap>) ⇒ `Promise.<Buffer>`
  * [.beautiful(image)](<🎯 Canvacard.md#Canvacard.beautiful>) ⇒ `Promise.<Buffer>`
  * [.facepalm(image)](<🎯 Canvacard.md#Canvacard.facepalm>) ⇒ `Promise.<Buffer>`
  * [.rainbow(image)](<🎯 Canvacard.md#Canvacard.rainbow>) ⇒ `Promise.<Buffer>`
  * [.rip(image)](<🎯 Canvacard.md#Canvacard.rip>) ⇒ `Promise.<Buffer>`
  * [.trash(image)](<🎯 Canvacard.md#Canvacard.trash>) ⇒ `Promise.<Buffer>`
  * [.hitler(image)](<🎯 Canvacard.md#Canvacard.hitler>) ⇒ `Promise.<Buffer>`
  * [.colorfy(image, color)](<🎯 Canvacard.md#Canvacard.colorfy>) ⇒ `Promise.<Buffer>`
  * [.jokeOverHead(image)](<🎯 Canvacard.md#Canvacard.jokeOverHead>) ⇒ `Promise.<Buffer>`
  * [.distracted(image1, image2, image3)](<🎯 Canvacard.md#Canvacard.distracted>) ⇒ `Promise.<Buffer>`
  * [.affect(image)](<🎯 Canvacard.md#Canvacard.affect>) ⇒ `Promise.<Buffer>`
  * [.jail(image, greyscale)](<🎯 Canvacard.md#Canvacard.jail>) ⇒ `Promise.<Buffer>`
  * [.bed(image1, image2)](<🎯 Canvacard.md#Canvacard.bed>) ⇒ `Promise.<Buffer>`
  * [.delete(image, dark)](<🎯 Canvacard.md#Canvacard.delete>) ⇒ `Promise.<Buffer>`
  * [.tictactoe(fill, color)](<🎯 Canvacard.md#Canvacard.tictactoe>) ⇒ `Buffer`
  * [.opinion(avatar, msg)](<🎯 Canvacard.md#Canvacard.opinion>) ⇒ `Promise.<Buffer>`
  * [.gradient(colorFrom, colorTo, width, height)](<🎯 Canvacard.md#Canvacard.gradient>) ⇒ `Buffer`
  * [.ohno(message)](<🎯 Canvacard.md#Canvacard.ohno>) ⇒ `Promise.<Buffer>`
  * [.changemymind(text)](<🎯 Canvacard.md#Canvacard.changemymind>) ⇒ `Promise.<Buffer>`
  * [.clyde(message)](<🎯 Canvacard.md#Canvacard.clyde>) ⇒ `Promise.<Buffer>`
  * [.quote(options)](<🎯 Canvacard.md#Canvacard.quote>) ⇒ `Promise.<Buffer>`
  * [.phub(options)](<🎯 Canvacard.md#Canvacard.phub>) ⇒ `Promise.<Buffer>`
  * [.wanted(image)](<🎯 Canvacard.md#Canvacard.wanted>) ⇒ `Promise.<Buffer>`
  * [.wasted(image)](<🎯 Canvacard.md#Canvacard.wasted>) ⇒ `Promise.<Buffer>`
  * [.youtube(ops)](<🎯 Canvacard.md#Canvacard.youtube>) ⇒ `Promise.<Buffer>`
  * [.shit(image)](<🎯 Canvacard.md#Canvacard.shit>) ⇒ `Promise.<Buffer>`
  * [.write(data, name)](<🎯 Canvacard.md#Canvacard.write>) ⇒ `void`
  * [.guildIcon(name, size)](<🎯 Canvacard.md#Canvacard.guildIcon>) ⇒ `Promise.<Buffer>`
  * [.reply(options)](<🎯 Canvacard.md#Canvacard.reply>) ⇒ `Promise.<Buffer>`
  * [.\_\_wait(dur)](<🎯 Canvacard.md#Canvacard.\_\_wait>) ⇒ `Promise.<void>`

#### new Canvacard()

**⚠ ¡No puede crear una instancia de la clase Canvacard!⚠**

**Example**

```js
const Canvacard = require("canvacard");Canvacard.Canvas.trigger("./image.png") .then(triggered => {     Canvacard.write(triggered, "triggered.gif"); })
```

#### Canvacard.CONVOLUTION\_MATRIX : [`ConvolutionMatrix`](<🎯 Canvacard.md#ConvolutionMatrix>)

Datos de matriz para **Canvacard.convolute()**

**Kind**: static property of [`Canvacard`](<🎯 Canvacard.md#Canvacard>)\


#### Canvacard.Util : `Util`

Canvacard utils

**Kind**: static property of [`Canvacard`](<🎯 Canvacard.md#Canvacard>)\


#### Canvacard.trigger(image) ⇒ `Promise.<Buffer>`

Este método se puede utilizar para aplicar el efecto Disparado en la imagen.

**Kind**: static method of [`Canvacard`](<🎯 Canvacard.md#Canvacard>)

| Param | Type                 | Description         |
| ----- | -------------------- | ------------------- |
| image | `string` \| `Buffer` | Imagen para activar |

#### Canvacard.invert(image) ⇒ `Promise.<Buffer>`

Invierte el color de la imagen

**Kind**: static method of [`Canvacard`](<🎯 Canvacard.md#Canvacard>)

| Param | Type                 | Description          |
| ----- | -------------------- | -------------------- |
| image | `string` \| `Buffer` | Imagen para invertir |

#### Canvacard.sepia(image) ⇒ `Promise.<Buffer>`

Aplicar lavado sepia en img

**Kind**: static method of [`Canvacard`](<🎯 Canvacard.md#Canvacard>)

| Param | Type                 | Description |
| ----- | -------------------- | ----------- |
| image | `string` \| `Buffer` | Imagen      |

#### Canvacard.greyscale(image) ⇒ `Promise.<Buffer>`

Efecto de escala de grises sobre la imagen

**Kind**: static method of [`Canvacard`](<🎯 Canvacard.md#Canvacard>)

| Param | Type                 | Description |
| ----- | -------------------- | ----------- |
| image | `string` \| `Buffer` | Imagen      |

#### Canvacard.brightness(image, amount) ⇒ `Promise.<Buffer>`

Editar el brillo de la imagen

**Kind**: static method of [`Canvacard`](<🎯 Canvacard.md#Canvacard>)

| Param  | Type                 | Description        |
| ------ | -------------------- | ------------------ |
| image  | `string` \| `Buffer` | Imagen             |
| amount | `number`             | Cantidad de brillo |

#### Canvacard.darkness(image, amount) ⇒ `Promise.<Buffer>`

Editar la oscuridad de la imagen

**Kind**: static method of [`Canvacard`](<🎯 Canvacard.md#Canvacard>)

| Param  | Type                 | Description           |
| ------ | -------------------- | --------------------- |
| image  | `string` \| `Buffer` | Imagen                |
| amount | `number`             | Cantidad de oscuridad |

#### Canvacard.threshold(img, amount) ⇒ `Promise.<Buffer>`

Umbral de imagen

**Kind**: static method of [`Canvacard`](<🎯 Canvacard.md#Canvacard>)

| Param  | Type                 | Description     |
| ------ | -------------------- | --------------- |
| img    | `string` \| `Buffer` | Imagen          |
| amount | `number`             | Cantidad límite |

#### Canvacard.convolute(img, matrix, opaque) ⇒ `Promise.<Buffer>`

Convolución de la imagen

**Kind**: static method of [`Canvacard`](<🎯 Canvacard.md#Canvacard>)

| Param  | Type                 | Description                      |
| ------ | -------------------- | -------------------------------- |
| img    | `string` \| `Buffer` | Imagen                           |
| matrix | `Array.<number>`     | Matriz de convolución            |
| opaque | `boolean`            | Si la convolución debe ser opaca |

#### Canvacard.createProgressBar(track, bar) ⇒ `Buffer`

Crea barra de progreso

**Kind**: static method of [`Canvacard`](<🎯 Canvacard.md#Canvacard>)

| Param              | Type      | Description                                                          |
| ------------------ | --------- | -------------------------------------------------------------------- |
| track              | `object`  | Opciones de pista de la barra de progreso                            |
| \[track.x]         | `number`  | El eje x                                                             |
| \[track.y]         | `number`  | El eje y                                                             |
| \[track.width]     | `number`  | Ancho de pista de la barra de progreso                               |
| \[track.height]    | `number`  | Altura de la pista de la barra de progreso                           |
| \[track.color]     | `string`  | Color de la pista de la barra de progreso                            |
| \[track.stroke]    | `boolean` | Usar trazo para pista                                                |
| \[track.lineWidth] | `number`  | Este parámetro se utilizará si `track.stroke` se establece en `true` |
| bar                | `object`  | Opciones de la barra de progreso                                     |
| \[bar.width]       | `number`  | Ancho de la barra de progreso                                        |
| \[bar.color]       | `string`  | Color de la barra de progreso                                        |

#### Canvacard.blur(image) ⇒ `Promise.<Buffer>`

Desenfocar una imagen

**Kind**: static method of [`Canvacard`](<🎯 Canvacard.md#Canvacard>)

| Param | Type                 | Description           |
| ----- | -------------------- | --------------------- |
| image | `string` \| `Buffer` | Imagen para difuminar |

#### Canvacard.pixelate(image, pixels) ⇒ `Promise.<Buffer>`

Pixelar

**Kind**: static method of [`Canvacard`](<🎯 Canvacard.md#Canvacard>)

| Param  | Type                 | Default | Description         |
| ------ | -------------------- | ------- | ------------------- |
| image  | `string` \| `Buffer` |         | Imagen para pixelar |
| pixels | `number`             | `5`     | Pixeles             |

#### Canvacard.sharpen(image, lvl) ⇒ `Promise.<Buffer>`

Agudizar una imagen

**Kind**: static method of [`Canvacard`](<🎯 Canvacard.md#Canvacard>)

| Param | Type                 | Default | Description              |
| ----- | -------------------- | ------- | ------------------------ |
| image | `string` \| `Buffer` |         | Imagen para enfocar      |
| lvl   | `number`             | `1`     | intensidad de la nitidez |

#### Canvacard.burn(image, lvl) ⇒ `Promise.<Buffer>`

Aplica efecto de quemado en una imagen.

**Kind**: static method of [`Canvacard`](<🎯 Canvacard.md#Canvacard>)

| Param | Type                 | Default | Description      |
| ----- | -------------------- | ------- | ---------------- |
| image | `string` \| `Buffer` |         | Fuente de imagen |
| lvl   | `number`             | `1`     | intensidad       |

#### Canvacard.color(color, displayHex, height, width) ⇒ `Buffer`

HTML5 color a imagen

**Kind**: static method of [`Canvacard`](<🎯 Canvacard.md#Canvacard>)

| Param      | Type      | Default     | Description                 |
| ---------- | --------- | ----------- | --------------------------- |
| color      | `string`  | `"#FFFFFF"` | Color HTML5                 |
| displayHex | `boolean` | `false`     | Si debe mostrar hexadecimal |
| height     | `number`  | `1024`      | Altura de imagen            |
| width      | `number`  | `1024`      | Ancho de la imagen          |

#### Canvacard.circle(image) ⇒ `Promise.<Buffer>`

Crea una imagen circular

**Kind**: static method of [`Canvacard`](<🎯 Canvacard.md#Canvacard>)

| Param | Type                 | Description      |
| ----- | -------------------- | ---------------- |
| image | `string` \| `Buffer` | Fuente de imagen |

#### Canvacard.rectangle(x, y, width, height, color, stroke, lineWidth) ⇒ `Buffer`

Crea un rectángulo

**Kind**: static method of [`Canvacard`](<🎯 Canvacard.md#Canvacard>)

| Param     | Type      | Description       |
| --------- | --------- | ----------------- |
| x         | `number`  | eje x             |
| y         | `number`  | eje y             |
| width     | `number`  | ancho             |
| height    | `number`  | altura            |
| color     | `string`  | color             |
| stroke    | `boolean` | Si debe acariciar |
| lineWidth | `number`  | ancho de línea    |

#### Canvacard.fuse(image1, image2) ⇒ `Promise.<Buffer>`

Imágenes de fusion two

**Kind**: static method of [`Canvacard`](<🎯 Canvacard.md#Canvacard>)

| Param  | Type                 | Description    |
| ------ | -------------------- | -------------- |
| image1 | `string` \| `Buffer` | Primera imagen |
| image2 | `string` \| `Buffer` | Segunda imagen |

#### Canvacard.resize(image, width, height) ⇒ `Promise.<Buffer>`

Cambiar el tamaño de una imagen

**Kind**: static method of [`Canvacard`](<🎯 Canvacard.md#Canvacard>)

| Param  | Type                 | Description      |
| ------ | -------------------- | ---------------- |
| image  | `string` \| `Buffer` | Fuente de imagen |
| width  | `number`             | ancho            |
| height | `number`             | altura           |

#### Canvacard.kiss(image1, image2) ⇒ `Promise.<Buffer>`

Besarse ( ͡° ͜ʖ ͡°)

**Kind**: static method of [`Canvacard`](<🎯 Canvacard.md#Canvacard>)

| Param  | Type                 | Description    |
| ------ | -------------------- | -------------- |
| image1 | `string` \| `Buffer` | Primera imagen |
| image2 | `string` \| `Buffer` | Segunda imagen |

#### Canvacard.spank(image1, image2) ⇒ `Promise.<Buffer>`

Azotar a alguien ( ͡° ͜ʖ ͡°)

**Kind**: static method of [`Canvacard`](<🎯 Canvacard.md#Canvacard>)

| Param  | Type                 | Description    |
| ------ | -------------------- | -------------- |
| image1 | `string` \| `Buffer` | Primera imagen |
| image2 | `string` \| `Buffer` | Segunda imagen |

#### Canvacard.registerFonts(fontArray) ⇒ `Promise.<void>`

Loads font

**Kind**: static method of [`Canvacard`](<🎯 Canvacard.md#Canvacard>)

| Param     | Type          | Description |
| --------- | ------------- | ----------- |
| fontArray | `Array.<any>` | Font array  |

#### Canvacard.slap(image1, image2) ⇒ `Promise.<Buffer>`

Abofetear a alguien ( ͡° ͜ʖ ͡°)

**Kind**: static method of [`Canvacard`](<🎯 Canvacard.md#Canvacard>)

| Param  | Type                 | Description    |
| ------ | -------------------- | -------------- |
| image1 | `string` \| `Buffer` | Primera imagen |
| image2 | `string` \| `Buffer` | Segunda imagen |

#### Canvacard.beautiful(image) ⇒ `Promise.<Buffer>`

¿Oh esto? ¡Esto es hermoso!

**Kind**: static method of [`Canvacard`](<🎯 Canvacard.md#Canvacard>)

| Param | Type                 | Description      |
| ----- | -------------------- | ---------------- |
| image | `string` \| `Buffer` | Fuente de imagen |

#### Canvacard.facepalm(image) ⇒ `Promise.<Buffer>`

facepalm

**Kind**: static method of [`Canvacard`](<🎯 Canvacard.md#Canvacard>)

| Param | Type                 | Description      |
| ----- | -------------------- | ---------------- |
| image | `string` \| `Buffer` | Fuente de imagen |

#### Canvacard.rainbow(image) ⇒ `Promise.<Buffer>`

Rainbow ( ͡° ͜ʖ ͡°)

**Kind**: static method of [`Canvacard`](<🎯 Canvacard.md#Canvacard>)

| Param | Type                 | Description      |
| ----- | -------------------- | ---------------- |
| image | `string` \| `Buffer` | Fuente de imagen |

#### Canvacard.rip(image) ⇒ `Promise.<Buffer>`

"F" en el chat

**Kind**: static method of [`Canvacard`](<🎯 Canvacard.md#Canvacard>)

| Param | Type                 | Description      |
| ----- | -------------------- | ---------------- |
| image | `string` \| `Buffer` | Fuente de imagen |

#### Canvacard.trash(image) ⇒ `Promise.<Buffer>`

¿Basura?

**Kind**: static method of [`Canvacard`](<🎯 Canvacard.md#Canvacard>)

| Param | Type                 | Description      |
| ----- | -------------------- | ---------------- |
| image | `string` \| `Buffer` | Fuente de imagen |

#### Canvacard.hitler(image) ⇒ `Promise.<Buffer>`

Peor que hitler

**Kind**: static method of [`Canvacard`](<🎯 Canvacard.md#Canvacard>)

| Param | Type                 | Description      |
| ----- | -------------------- | ---------------- |
| image | `string` \| `Buffer` | Fuente de imagen |

#### Canvacard.colorfy(image, color) ⇒ `Promise.<Buffer>`

Actualiza el color de la imagen

**Kind**: static method of [`Canvacard`](<🎯 Canvacard.md#Canvacard>)

| Param | Type                 | Description      |
| ----- | -------------------- | ---------------- |
| image | `string` \| `Buffer` | Fuente de imagen |
| color | `string`             | Color HTML5      |

#### Canvacard.jokeOverHead(image) ⇒ `Promise.<Buffer>`

whoosh

**Kind**: static method of [`Canvacard`](<🎯 Canvacard.md#Canvacard>)

| Param | Type                 | Description      |
| ----- | -------------------- | ---------------- |
| image | `string` \| `Buffer` | Fuente de imagen |

#### Canvacard.distracted(image1, image2, image3) ⇒ `Promise.<Buffer>`

Novio distraído

**Kind**: static method of [`Canvacard`](<🎯 Canvacard.md#Canvacard>)

| Param  | Type                 | Default | Description                         |
| ------ | -------------------- | ------- | ----------------------------------- |
| image1 | `string` \| `Buffer` |         | Rostro para la niña en color rojo.  |
| image2 | `string` \| `Buffer` |         | Cara para el chico                  |
| image3 | `string` \| `Buffer` | `null`  | Cara para la otra chica \[opcional] |

#### Canvacard.affect(image) ⇒ `Promise.<Buffer>`

No, no afecta a mi bebé.

**Kind**: static method of [`Canvacard`](<🎯 Canvacard.md#Canvacard>)

| Param | Type                 | Description      |
| ----- | -------------------- | ---------------- |
| image | `string` \| `Buffer` | Fuente de imagen |

#### Canvacard.jail(image, greyscale) ⇒ `Promise.<Buffer>`

Celda

**Kind**: static method of [`Canvacard`](<🎯 Canvacard.md#Canvacard>)

| Param     | Type                 | Default | Description                                |
| --------- | -------------------- | ------- | ------------------------------------------ |
| image     | `string` \| `Buffer` |         | Fuente de imagen                           |
| greyscale | `boolean`            | `false` | Si debe ser una imagen en escala de grises |

#### Canvacard.bed(image1, image2) ⇒ `Promise.<Buffer>`

cama

**Kind**: static method of [`Canvacard`](<🎯 Canvacard.md#Canvacard>)

| Param  | Type                 | Description    |
| ------ | -------------------- | -------------- |
| image1 | `string` \| `Buffer` | Primera imagen |
| image2 | `string` \| `Buffer` | Segunda imagen |

#### Canvacard.delete(image, dark) ⇒ `Promise.<Buffer>`

Borrar

**Kind**: static method of [`Canvacard`](<🎯 Canvacard.md#Canvacard>)

| Param | Type                 | Default | Description                            |
| ----- | -------------------- | ------- | -------------------------------------- |
| image | `string` \| `Buffer` |         | Fuente de imagen                       |
| dark  | `boolean`            | `false` | Si la imagen debe estar en modo oscuro |

#### Canvacard.tictactoe(fill, color) ⇒ `Buffer`

TicTacToe

**Kind**: static method of [`Canvacard`](<🎯 Canvacard.md#Canvacard>)

| Param        | Type           | Description                 |
| ------------ | -------------- | --------------------------- |
| fill         | `object`       | Parámetros de TicTacToe     |
| \[fill.a1]   | `"X"` \| `"O"` | valor a1                    |
| \[fill.b1]   | `"X"` \| `"O"` | valor b1                    |
| \[fill.c1]   | `"X"` \| `"O"` | valor c1                    |
| \[fill.a2]   | `"X"` \| `"O"` | valor a2                    |
| \[fill.b2]   | `"X"` \| `"O"` | valor b2                    |
| \[fill.c2]   | `"X"` \| `"O"` | valor c2                    |
| \[fill.a3]   | `"X"` \| `"O"` | valor a3                    |
| \[fill.b3]   | `"X"` \| `"O"` | valor b3                    |
| \[fill.c3]   | `"X"` \| `"O"` | valor c3                    |
| color        | `object`       | Parámetros de color         |
| \[color.bg]  | `string`       | Color de fondo              |
| \[color.bar] | `string`       | Color de la barra TicTacToe |
| \[color.x]   | `string`       | Color de **X**              |
| \[color.o]   | `string`       | Color de **O**              |

#### Canvacard.opinion(avatar, msg) ⇒ `Promise.<Buffer>`

Opinión

**Kind**: static method of [`Canvacard`](<🎯 Canvacard.md#Canvacard>)

| Param  | Type                 | Description |
| ------ | -------------------- | ----------- |
| avatar | `string` \| `Buffer` | Imagen      |
| msg    | `string`             | Mensaje     |

#### Canvacard.gradient(colorFrom, colorTo, width, height) ⇒ `Buffer`

Crea degradado

**Kind**: static method of [`Canvacard`](<🎯 Canvacard.md#Canvacard>)

| Param     | Type     | Description        |
| --------- | -------- | ------------------ |
| colorFrom | `string` | Color inicial      |
| colorTo   | `string` | Color final        |
| width     | `number` | Ancho de la imagen |
| height    | `number` | Altura de imagen   |

#### Canvacard.ohno(message) ⇒ `Promise.<Buffer>`

¡Oh, no! Es estúpido.

**Kind**: static method of [`Canvacard`](<🎯 Canvacard.md#Canvacard>)

| Param   | Type     | Description |
| ------- | -------- | ----------- |
| message | `string` | Mensaje     |

#### Canvacard.changemymind(text) ⇒ `Promise.<Buffer>`

Cambiar de opinión (tomado de jgoralcz/image-microservice)

**Kind**: static method of [`Canvacard`](<🎯 Canvacard.md#Canvacard>)\
**See**: https://github.com/jgoralcz/image-microservice/blob/master/src/workers/canvas/ChangeMyMind.js

| Param | Type     | Description |
| ----- | -------- | ----------- |
| text  | `String` | Texto       |

#### Canvacard.clyde(message) ⇒ `Promise.<Buffer>`

Clyde

**Kind**: static method of [`Canvacard`](<🎯 Canvacard.md#Canvacard>)

| Param   | Type     | Description |
| ------- | -------- | ----------- |
| message | `string` | Mensaje     |

#### Canvacard.quote(options) ⇒ `Promise.<Buffer>`

Cita falsa

**Kind**: static method of [`Canvacard`](<🎯 Canvacard.md#Canvacard>)

| Param               | Type                 | Description       |
| ------------------- | -------------------- | ----------------- |
| options             | `object`             | Opciones          |
| \[options.image]    | `Buffer` \| `string` | Imagen            |
| \[options.message]  | `string`             | Mensaje           |
| \[options.username] | `string`             | Nombre de usuario |
| \[options.color]    | `string`             | Color             |

#### Canvacard.phub(options) ⇒ `Promise.<Buffer>`

Comentario de PornHub

**Kind**: static method of [`Canvacard`](<🎯 Canvacard.md#Canvacard>)

| Param               | Type                 | Description       |
| ------------------- | -------------------- | ----------------- |
| options             | `Object`             | Opciones          |
| \[options.username] | `String`             | Nombre de usuario |
| \[options.message]  | `String`             | Comentario        |
| \[options.image]    | `String` \| `Buffer` | Imagen            |

#### Canvacard.wanted(image) ⇒ `Promise.<Buffer>`

Wanted

**Kind**: static method of [`Canvacard`](<🎯 Canvacard.md#Canvacard>)

| Param | Type                 | Description      |
| ----- | -------------------- | ---------------- |
| image | `string` \| `Buffer` | Fuente de imagen |

#### Canvacard.wasted(image) ⇒ `Promise.<Buffer>`

Wasted

**Kind**: static method of [`Canvacard`](<🎯 Canvacard.md#Canvacard>)

| Param | Type                 | Description      |
| ----- | -------------------- | ---------------- |
| image | `string` \| `Buffer` | Fuente de imagen |

#### Canvacard.youtube(ops) ⇒ `Promise.<Buffer>`

Comentario de YouTube

**Kind**: static method of [`Canvacard`](<🎯 Canvacard.md#Canvacard>)

| Param           | Type                 | Default | Description                                |
| --------------- | -------------------- | ------- | ------------------------------------------ |
| ops             | `object`             |         | Opciones de comentarios de YouTube         |
| \[ops.username] | `string`             |         | Nombre de usuario del autor del comentario |
| \[ops.content]  | `string`             |         | El comentario                              |
| \[ops.avatar]   | `string` \| `Buffer` |         | Fuente de avatar                           |
| \[ops.dark]     | `boolean`            | `false` | ¿Modo oscuro?                              |

#### Canvacard.shit(image) ⇒ `Promise.<Buffer>`

¡Oh, mierda!

**Kind**: static method of [`Canvacard`](<🎯 Canvacard.md#Canvacard>)

| Param | Type                 | Description      |
| ----- | -------------------- | ---------------- |
| image | `string` \| `Buffer` | Fuente de imagen |

#### Canvacard.write(data, name) ⇒ `void`

Escribe los datos como archivo

**Kind**: static method of [`Canvacard`](<🎯 Canvacard.md#Canvacard>)

| Param | Type     | Description         |
| ----- | -------- | ------------------- |
| data  | `Buffer` | datos para escribir |
| name  | `string` | nombre del archivo  |

#### Canvacard.guildIcon(name, size) ⇒ `Promise.<Buffer>`

Devuelve el icono predeterminado de un servidor de discord

**Kind**: static method of [`Canvacard`](<🎯 Canvacard.md#Canvacard>)

| Param | Type     | Default | Description                                                                      |
| ----- | -------- | ------- | -------------------------------------------------------------------------------- |
| name  | `string` |         | Nombre del servidor                                                              |
| size  | `number` | `1024`  | Icon size. Valid: `16`, `32`, `64`, `128`, `256`, `512`, `1024`, `2048` & `4096` |

#### Canvacard.reply(options) ⇒ `Promise.<Buffer>`

Clon de respuesta de discord

**Kind**: static method of [`Canvacard`](<🎯 Canvacard.md#Canvacard>)

| Param                | Type                 | Description                                   |
| -------------------- | -------------------- | --------------------------------------------- |
| options              | `object`             | Opciones                                      |
| \[options.avatar1]   | `string` \| `Buffer` | Avatar de la persona que respondió            |
| \[options.avatar2]   | `string` \| `Buffer` | Avatar de la otra persona                     |
| \[options.user1]     | `string`             | Nombre de usuario de la persona que respondió |
| \[options.user2]     | `string`             | Nombre de usuario de la otra persona          |
| \[options.hex1]      | `string`             | Color hexadecimal de la persona que respondió |
| \[options.hex2]      | `string`             | Color hexadecimal de la otra persona          |
| \[options.mainText]  | `string`             | El mensaje                                    |
| \[options.replyText] | `string`             | El mensaje de respuesta                       |

**Example**

```js
const img = "https://cdn.discordapp.com/embed/avatars/0.png";const img2 = "https://cdn.discordapp.com/embed/avatars/4.png";canvacard.Canvas.reply({     avatar1: img,     avatar2: img2,     user1: "Maximus",     user2: "SrGobi",     hex1: "#FF3300",     hex2: "#7289da",     mainText: "kok",     replyText: "Pog"}).then(img => canvacard.write(img, "reply.png"));
```

#### Canvacard.\_\_wait(dur) ⇒ `Promise.<void>`

Método de Canvacard utilizado para `wait`.

**Kind**: static method of [`Canvacard`](<🎯 Canvacard.md#Canvacard>)

| Param | Type     | Description                      |
| ----- | -------- | -------------------------------- |
| dur   | `number` | Número de milisegundos a esperar |

### ConvolutionMatrix : `object`

Matriz de convolución Canvacard

**Kind**: global typedef\
**Properties**

| Name    | Type             | Description    |
| ------- | ---------------- | -------------- |
| EDGES   | `Array.<number>` | Edges Matrix   |
| BLUR    | `Array.<number>` | Blur Matrix    |
| SHARPEN | `Array.<number>` | Sharpen Matrix |
| BURN    | `Array.<number>` | Burn Matrix    |
