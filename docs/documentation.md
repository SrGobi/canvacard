## Classes

<dl>
<dt><a href="#Canvacard">Canvacard</a></dt>
<dd><p>Canvacard Generador De Memes</p>
</dd>
<dt><a href="#FortniteShop">FortniteShop</a></dt>
<dd><p>Creador de imagen de la tienda de fortnite</p>
</dd>
<dt><a href="#FortniteStats">FortniteStats</a></dt>
<dd><p>Creador de imagen de estadisticas de fortnite</p>
</dd>
<dt><a href="#Leaver">Leaver</a></dt>
<dd><p>Creador de tarjetas de despedida</p>
</dd>
<dt><a href="#Rank">Rank</a></dt>
<dd></dd>
<dt><a href="#Spotify">Spotify</a></dt>
<dd><p>Creador de tarjetas de presencia de Spotify</p>
</dd>
<dt><a href="#Util">Util</a></dt>
<dd></dd>
<dt><a href="#Welcomer">Welcomer</a></dt>
<dd><p>Creador de tarjetas de bienvenida</p>
</dd>
<dt><a href="#Util">Util</a></dt>
<dd></dd>
</dl>

## Functions

<dl>
<dt><a href="#formatVariable">formatVariable(prefix, variable)</a> ⇒</dt>
<dd><p>Obtiene variables y tipos</p>
</dd>
<dt><a href="#formatVariable">formatVariable(prefix, variable)</a> ⇒</dt>
<dd><p>Obtiene variables y tipos</p>
</dd>
<dt><a href="#applyText">applyText(canvas, text, defaultFontSize, width, font)</a> ⇒</dt>
<dd><p>Obtiene variables y tipos</p>
</dd>
<dt><a href="#formatVariable">formatVariable(prefix, variable)</a> ⇒</dt>
<dd><p>Obtiene variables y tipos</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#ConvolutionMatrix">ConvolutionMatrix</a> : <code>object</code></dt>
<dd><p>Matriz de convolución Canvacard</p>
</dd>
<dt><a href="#Plugins">Plugins</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#CanvacardRankData">CanvacardRankData</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#SpotifyDataBG">SpotifyDataBG</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#SpotifyProgressBarData">SpotifyProgressBarData</a> : <code>object</code></dt>
<dd></dd>
</dl>

<a name="Canvacard"></a>

## Canvacard
Canvacard Generador De Memes

**Kind**: global class  

* [Canvacard](#Canvacard)
    * [new Canvacard()](#new_Canvacard_new)
    * [.CONVOLUTION_MATRIX](#Canvacard.CONVOLUTION_MATRIX) : [<code>ConvolutionMatrix</code>](#ConvolutionMatrix)
    * [.Util](#Canvacard.Util) : [<code>Util</code>](#Util)
    * [.trigger(image)](#Canvacard.trigger) ⇒ <code>Promise.&lt;Buffer&gt;</code>
    * [.invert(image)](#Canvacard.invert) ⇒ <code>Promise.&lt;Buffer&gt;</code>
    * [.sepia(image)](#Canvacard.sepia) ⇒ <code>Promise.&lt;Buffer&gt;</code>
    * [.greyscale(image)](#Canvacard.greyscale) ⇒ <code>Promise.&lt;Buffer&gt;</code>
    * [.brightness(image, amount)](#Canvacard.brightness) ⇒ <code>Promise.&lt;Buffer&gt;</code>
    * [.darkness(image, amount)](#Canvacard.darkness) ⇒ <code>Promise.&lt;Buffer&gt;</code>
    * [.threshold(img, amount)](#Canvacard.threshold) ⇒ <code>Promise.&lt;Buffer&gt;</code>
    * [.convolute(img, matrix, opaque)](#Canvacard.convolute) ⇒ <code>Promise.&lt;Buffer&gt;</code>
    * [.createProgressBar(track, bar)](#Canvacard.createProgressBar) ⇒ <code>Buffer</code>
    * [.blur(image)](#Canvacard.blur) ⇒ <code>Promise.&lt;Buffer&gt;</code>
    * [.pixelate(image, pixels)](#Canvacard.pixelate) ⇒ <code>Promise.&lt;Buffer&gt;</code>
    * [.sharpen(image, lvl)](#Canvacard.sharpen) ⇒ <code>Promise.&lt;Buffer&gt;</code>
    * [.burn(image, lvl)](#Canvacard.burn) ⇒ <code>Promise.&lt;Buffer&gt;</code>
    * [.color(color, displayHex, height, width)](#Canvacard.color) ⇒ <code>Buffer</code>
    * [.circle(image)](#Canvacard.circle) ⇒ <code>Promise.&lt;Buffer&gt;</code>
    * [.rectangle(x, y, width, height, color, stroke, lineWidth)](#Canvacard.rectangle) ⇒ <code>Buffer</code>
    * [.fuse(image1, image2)](#Canvacard.fuse) ⇒ <code>Promise.&lt;Buffer&gt;</code>
    * [.resize(image, width, height)](#Canvacard.resize) ⇒ <code>Promise.&lt;Buffer&gt;</code>
    * [.kiss(image1, image2)](#Canvacard.kiss) ⇒ <code>Promise.&lt;Buffer&gt;</code>
    * [.spank(image1, image2)](#Canvacard.spank) ⇒ <code>Promise.&lt;Buffer&gt;</code>
    * [.registerFonts(fontArray)](#Canvacard.registerFonts) ⇒ <code>Promise.&lt;void&gt;</code>
    * [.slap(image1, image2)](#Canvacard.slap) ⇒ <code>Promise.&lt;Buffer&gt;</code>
    * [.beautiful(image)](#Canvacard.beautiful) ⇒ <code>Promise.&lt;Buffer&gt;</code>
    * [.facepalm(image)](#Canvacard.facepalm) ⇒ <code>Promise.&lt;Buffer&gt;</code>
    * [.rainbow(image)](#Canvacard.rainbow) ⇒ <code>Promise.&lt;Buffer&gt;</code>
    * [.rip(image)](#Canvacard.rip) ⇒ <code>Promise.&lt;Buffer&gt;</code>
    * [.trash(image)](#Canvacard.trash) ⇒ <code>Promise.&lt;Buffer&gt;</code>
    * [.hitler(image)](#Canvacard.hitler) ⇒ <code>Promise.&lt;Buffer&gt;</code>
    * [.colorfy(image, color)](#Canvacard.colorfy) ⇒ <code>Promise.&lt;Buffer&gt;</code>
    * [.jokeOverHead(image)](#Canvacard.jokeOverHead) ⇒ <code>Promise.&lt;Buffer&gt;</code>
    * [.distracted(image1, image2, image3)](#Canvacard.distracted) ⇒ <code>Promise.&lt;Buffer&gt;</code>
    * [.affect(image)](#Canvacard.affect) ⇒ <code>Promise.&lt;Buffer&gt;</code>
    * [.jail(image, greyscale)](#Canvacard.jail) ⇒ <code>Promise.&lt;Buffer&gt;</code>
    * [.bed(image1, image2)](#Canvacard.bed) ⇒ <code>Promise.&lt;Buffer&gt;</code>
    * [.delete(image, dark)](#Canvacard.delete) ⇒ <code>Promise.&lt;Buffer&gt;</code>
    * [.tictactoe(fill, color)](#Canvacard.tictactoe) ⇒ <code>Buffer</code>
    * [.opinion(avatar, msg)](#Canvacard.opinion) ⇒ <code>Promise.&lt;Buffer&gt;</code>
    * [.gradient(colorFrom, colorTo, width, height)](#Canvacard.gradient) ⇒ <code>Buffer</code>
    * [.ohno(message)](#Canvacard.ohno) ⇒ <code>Promise.&lt;Buffer&gt;</code>
    * [.changemymind(text)](#Canvacard.changemymind) ⇒ <code>Promise.&lt;Buffer&gt;</code>
    * [.clyde(message)](#Canvacard.clyde) ⇒ <code>Promise.&lt;Buffer&gt;</code>
    * [.quote(options)](#Canvacard.quote) ⇒ <code>Promise.&lt;Buffer&gt;</code>
    * [.phub(options)](#Canvacard.phub) ⇒ <code>Promise.&lt;Buffer&gt;</code>
    * [.wanted(image)](#Canvacard.wanted) ⇒ <code>Promise.&lt;Buffer&gt;</code>
    * [.wasted(image)](#Canvacard.wasted) ⇒ <code>Promise.&lt;Buffer&gt;</code>
    * [.youtube(ops)](#Canvacard.youtube) ⇒ <code>Promise.&lt;Buffer&gt;</code>
    * [.shit(image)](#Canvacard.shit) ⇒ <code>Promise.&lt;Buffer&gt;</code>
    * [.write(data, name)](#Canvacard.write) ⇒ <code>void</code>
    * [.guildIcon(name, size)](#Canvacard.guildIcon) ⇒ <code>Promise.&lt;Buffer&gt;</code>
    * [.reply(options)](#Canvacard.reply) ⇒ <code>Promise.&lt;Buffer&gt;</code>
    * [.__wait(dur)](#Canvacard.__wait) ⇒ <code>Promise.&lt;void&gt;</code>

<a name="new_Canvacard_new"></a>

### new Canvacard()
**⚠ ¡No puede crear una instancia de la clase Canvacard!⚠**

**Example**  
```js
const Canvacard = require("canvacard");Canvacard.Canvas.trigger("./image.png") .then(triggered => {     Canvacard.write(triggered, "triggered.gif"); })
```
<a name="Canvacard.CONVOLUTION_MATRIX"></a>

### Canvacard.CONVOLUTION\_MATRIX : [<code>ConvolutionMatrix</code>](#ConvolutionMatrix)
Datos de matriz para **Canvacard.convolute()**

**Kind**: static property of [<code>Canvacard</code>](#Canvacard)  
<a name="Canvacard.Util"></a>

### Canvacard.Util : [<code>Util</code>](#Util)
Canvacard utils

**Kind**: static property of [<code>Canvacard</code>](#Canvacard)  
<a name="Canvacard.trigger"></a>

### Canvacard.trigger(image) ⇒ <code>Promise.&lt;Buffer&gt;</code>
Este método se puede utilizar para aplicar el efecto Disparado en la imagen.

**Kind**: static method of [<code>Canvacard</code>](#Canvacard)  

| Param | Type | Description |
| --- | --- | --- |
| image | <code>string</code> \| <code>Buffer</code> | Imagen para activar |

<a name="Canvacard.invert"></a>

### Canvacard.invert(image) ⇒ <code>Promise.&lt;Buffer&gt;</code>
Invierte el color de la imagen

**Kind**: static method of [<code>Canvacard</code>](#Canvacard)  

| Param | Type | Description |
| --- | --- | --- |
| image | <code>string</code> \| <code>Buffer</code> | Imagen para invertir |

<a name="Canvacard.sepia"></a>

### Canvacard.sepia(image) ⇒ <code>Promise.&lt;Buffer&gt;</code>
Aplicar lavado sepia en img

**Kind**: static method of [<code>Canvacard</code>](#Canvacard)  

| Param | Type | Description |
| --- | --- | --- |
| image | <code>string</code> \| <code>Buffer</code> | Imagen |

<a name="Canvacard.greyscale"></a>

### Canvacard.greyscale(image) ⇒ <code>Promise.&lt;Buffer&gt;</code>
Efecto de escala de grises sobre la imagen

**Kind**: static method of [<code>Canvacard</code>](#Canvacard)  

| Param | Type | Description |
| --- | --- | --- |
| image | <code>string</code> \| <code>Buffer</code> | Imagen |

<a name="Canvacard.brightness"></a>

### Canvacard.brightness(image, amount) ⇒ <code>Promise.&lt;Buffer&gt;</code>
Editar el brillo de la imagen

**Kind**: static method of [<code>Canvacard</code>](#Canvacard)  

| Param | Type | Description |
| --- | --- | --- |
| image | <code>string</code> \| <code>Buffer</code> | Imagen |
| amount | <code>number</code> | Cantidad de brillo |

<a name="Canvacard.darkness"></a>

### Canvacard.darkness(image, amount) ⇒ <code>Promise.&lt;Buffer&gt;</code>
Editar la oscuridad de la imagen

**Kind**: static method of [<code>Canvacard</code>](#Canvacard)  

| Param | Type | Description |
| --- | --- | --- |
| image | <code>string</code> \| <code>Buffer</code> | Imagen |
| amount | <code>number</code> | Cantidad de oscuridad |

<a name="Canvacard.threshold"></a>

### Canvacard.threshold(img, amount) ⇒ <code>Promise.&lt;Buffer&gt;</code>
Umbral de imagen

**Kind**: static method of [<code>Canvacard</code>](#Canvacard)  

| Param | Type | Description |
| --- | --- | --- |
| img | <code>string</code> \| <code>Buffer</code> | Imagen |
| amount | <code>number</code> | Cantidad límite |

<a name="Canvacard.convolute"></a>

### Canvacard.convolute(img, matrix, opaque) ⇒ <code>Promise.&lt;Buffer&gt;</code>
Convolución de la imagen

**Kind**: static method of [<code>Canvacard</code>](#Canvacard)  

| Param | Type | Description |
| --- | --- | --- |
| img | <code>string</code> \| <code>Buffer</code> | Imagen |
| matrix | <code>Array.&lt;number&gt;</code> | Matriz de convolución |
| opaque | <code>boolean</code> | Si la convolución debe ser opaca |

<a name="Canvacard.createProgressBar"></a>

### Canvacard.createProgressBar(track, bar) ⇒ <code>Buffer</code>
Crea barra de progreso

**Kind**: static method of [<code>Canvacard</code>](#Canvacard)  

| Param | Type | Description |
| --- | --- | --- |
| track | <code>object</code> | Opciones de pista de la barra de progreso |
| [track.x] | <code>number</code> | El eje x |
| [track.y] | <code>number</code> | El eje y |
| [track.width] | <code>number</code> | Ancho de pista de la barra de progreso |
| [track.height] | <code>number</code> | Altura de la pista de la barra de progreso |
| [track.color] | <code>string</code> | Color de la pista de la barra de progreso |
| [track.stroke] | <code>boolean</code> | Usar trazo para pista |
| [track.lineWidth] | <code>number</code> | Este parámetro se utilizará si `track.stroke` se establece en` true` |
| bar | <code>object</code> | Opciones de la barra de progreso |
| [bar.width] | <code>number</code> | Ancho de la barra de progreso |
| [bar.color] | <code>string</code> | Color de la barra de progreso |

<a name="Canvacard.blur"></a>

### Canvacard.blur(image) ⇒ <code>Promise.&lt;Buffer&gt;</code>
Desenfocar una imagen

**Kind**: static method of [<code>Canvacard</code>](#Canvacard)  

| Param | Type | Description |
| --- | --- | --- |
| image | <code>string</code> \| <code>Buffer</code> | Imagen para difuminar |

<a name="Canvacard.pixelate"></a>

### Canvacard.pixelate(image, pixels) ⇒ <code>Promise.&lt;Buffer&gt;</code>
Pixelar

**Kind**: static method of [<code>Canvacard</code>](#Canvacard)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| image | <code>string</code> \| <code>Buffer</code> |  | Imagen para pixelar |
| pixels | <code>number</code> | <code>5</code> | Pixeles |

<a name="Canvacard.sharpen"></a>

### Canvacard.sharpen(image, lvl) ⇒ <code>Promise.&lt;Buffer&gt;</code>
Agudizar una imagen

**Kind**: static method of [<code>Canvacard</code>](#Canvacard)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| image | <code>string</code> \| <code>Buffer</code> |  | Imagen para enfocar |
| lvl | <code>number</code> | <code>1</code> | intensidad de la nitidez |

<a name="Canvacard.burn"></a>

### Canvacard.burn(image, lvl) ⇒ <code>Promise.&lt;Buffer&gt;</code>
Aplica efecto de quemado en una imagen.

**Kind**: static method of [<code>Canvacard</code>](#Canvacard)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| image | <code>string</code> \| <code>Buffer</code> |  | Fuente de imagen |
| lvl | <code>number</code> | <code>1</code> | intensidad |

<a name="Canvacard.color"></a>

### Canvacard.color(color, displayHex, height, width) ⇒ <code>Buffer</code>
HTML5 color a imagen

**Kind**: static method of [<code>Canvacard</code>](#Canvacard)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| color | <code>string</code> | <code>&quot;#FFFFFF&quot;</code> | Color HTML5 |
| displayHex | <code>boolean</code> | <code>false</code> | Si debe mostrar hexadecimal |
| height | <code>number</code> | <code>1024</code> | Altura de imagen |
| width | <code>number</code> | <code>1024</code> | Ancho de la imagen |

<a name="Canvacard.circle"></a>

### Canvacard.circle(image) ⇒ <code>Promise.&lt;Buffer&gt;</code>
Crea una imagen circular

**Kind**: static method of [<code>Canvacard</code>](#Canvacard)  

| Param | Type | Description |
| --- | --- | --- |
| image | <code>string</code> \| <code>Buffer</code> | Fuente de imagen |

<a name="Canvacard.rectangle"></a>

### Canvacard.rectangle(x, y, width, height, color, stroke, lineWidth) ⇒ <code>Buffer</code>
Crea un rectángulo

**Kind**: static method of [<code>Canvacard</code>](#Canvacard)  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>number</code> | eje x |
| y | <code>number</code> | eje y |
| width | <code>number</code> | ancho |
| height | <code>number</code> | altura |
| color | <code>string</code> | color |
| stroke | <code>boolean</code> | Si debe acariciar |
| lineWidth | <code>number</code> | ancho de línea |

<a name="Canvacard.fuse"></a>

### Canvacard.fuse(image1, image2) ⇒ <code>Promise.&lt;Buffer&gt;</code>
Imágenes de fusion two

**Kind**: static method of [<code>Canvacard</code>](#Canvacard)  

| Param | Type | Description |
| --- | --- | --- |
| image1 | <code>string</code> \| <code>Buffer</code> | Primera imagen |
| image2 | <code>string</code> \| <code>Buffer</code> | Segunda imagen |

<a name="Canvacard.resize"></a>

### Canvacard.resize(image, width, height) ⇒ <code>Promise.&lt;Buffer&gt;</code>
Cambiar el tamaño de una imagen

**Kind**: static method of [<code>Canvacard</code>](#Canvacard)  

| Param | Type | Description |
| --- | --- | --- |
| image | <code>string</code> \| <code>Buffer</code> | Fuente de imagen |
| width | <code>number</code> | ancho |
| height | <code>number</code> | altura |

<a name="Canvacard.kiss"></a>

### Canvacard.kiss(image1, image2) ⇒ <code>Promise.&lt;Buffer&gt;</code>
Besarse ( ͡° ͜ʖ ͡°)

**Kind**: static method of [<code>Canvacard</code>](#Canvacard)  

| Param | Type | Description |
| --- | --- | --- |
| image1 | <code>string</code> \| <code>Buffer</code> | Primera imagen |
| image2 | <code>string</code> \| <code>Buffer</code> | Segunda imagen |

<a name="Canvacard.spank"></a>

### Canvacard.spank(image1, image2) ⇒ <code>Promise.&lt;Buffer&gt;</code>
Azotar a alguien ( ͡° ͜ʖ ͡°)

**Kind**: static method of [<code>Canvacard</code>](#Canvacard)  

| Param | Type | Description |
| --- | --- | --- |
| image1 | <code>string</code> \| <code>Buffer</code> | Primera imagen |
| image2 | <code>string</code> \| <code>Buffer</code> | Segunda imagen |

<a name="Canvacard.registerFonts"></a>

### Canvacard.registerFonts(fontArray) ⇒ <code>Promise.&lt;void&gt;</code>
Loads font

**Kind**: static method of [<code>Canvacard</code>](#Canvacard)  

| Param | Type | Description |
| --- | --- | --- |
| fontArray | <code>Array.&lt;any&gt;</code> | Font array |

<a name="Canvacard.slap"></a>

### Canvacard.slap(image1, image2) ⇒ <code>Promise.&lt;Buffer&gt;</code>
Abofetear a alguien ( ͡° ͜ʖ ͡°)

**Kind**: static method of [<code>Canvacard</code>](#Canvacard)  

| Param | Type | Description |
| --- | --- | --- |
| image1 | <code>string</code> \| <code>Buffer</code> | Primera imagen |
| image2 | <code>string</code> \| <code>Buffer</code> | Segunda imagen |

<a name="Canvacard.beautiful"></a>

### Canvacard.beautiful(image) ⇒ <code>Promise.&lt;Buffer&gt;</code>
¿Oh esto? ¡Esto es hermoso!

**Kind**: static method of [<code>Canvacard</code>](#Canvacard)  

| Param | Type | Description |
| --- | --- | --- |
| image | <code>string</code> \| <code>Buffer</code> | Fuente de imagen |

<a name="Canvacard.facepalm"></a>

### Canvacard.facepalm(image) ⇒ <code>Promise.&lt;Buffer&gt;</code>
facepalm

**Kind**: static method of [<code>Canvacard</code>](#Canvacard)  

| Param | Type | Description |
| --- | --- | --- |
| image | <code>string</code> \| <code>Buffer</code> | Fuente de imagen |

<a name="Canvacard.rainbow"></a>

### Canvacard.rainbow(image) ⇒ <code>Promise.&lt;Buffer&gt;</code>
Rainbow ( ͡° ͜ʖ ͡°)

**Kind**: static method of [<code>Canvacard</code>](#Canvacard)  

| Param | Type | Description |
| --- | --- | --- |
| image | <code>string</code> \| <code>Buffer</code> | Fuente de imagen |

<a name="Canvacard.rip"></a>

### Canvacard.rip(image) ⇒ <code>Promise.&lt;Buffer&gt;</code>
"F" en el chat

**Kind**: static method of [<code>Canvacard</code>](#Canvacard)  

| Param | Type | Description |
| --- | --- | --- |
| image | <code>string</code> \| <code>Buffer</code> | Fuente de imagen |

<a name="Canvacard.trash"></a>

### Canvacard.trash(image) ⇒ <code>Promise.&lt;Buffer&gt;</code>
¿Basura?

**Kind**: static method of [<code>Canvacard</code>](#Canvacard)  

| Param | Type | Description |
| --- | --- | --- |
| image | <code>string</code> \| <code>Buffer</code> | Fuente de imagen |

<a name="Canvacard.hitler"></a>

### Canvacard.hitler(image) ⇒ <code>Promise.&lt;Buffer&gt;</code>
Peor que hitler

**Kind**: static method of [<code>Canvacard</code>](#Canvacard)  

| Param | Type | Description |
| --- | --- | --- |
| image | <code>string</code> \| <code>Buffer</code> | Fuente de imagen |

<a name="Canvacard.colorfy"></a>

### Canvacard.colorfy(image, color) ⇒ <code>Promise.&lt;Buffer&gt;</code>
Actualiza el color de la imagen

**Kind**: static method of [<code>Canvacard</code>](#Canvacard)  

| Param | Type | Description |
| --- | --- | --- |
| image | <code>string</code> \| <code>Buffer</code> | Fuente de imagen |
| color | <code>string</code> | Color HTML5 |

<a name="Canvacard.jokeOverHead"></a>

### Canvacard.jokeOverHead(image) ⇒ <code>Promise.&lt;Buffer&gt;</code>
whoosh

**Kind**: static method of [<code>Canvacard</code>](#Canvacard)  

| Param | Type | Description |
| --- | --- | --- |
| image | <code>string</code> \| <code>Buffer</code> | Fuente de imagen |

<a name="Canvacard.distracted"></a>

### Canvacard.distracted(image1, image2, image3) ⇒ <code>Promise.&lt;Buffer&gt;</code>
Novio distraído

**Kind**: static method of [<code>Canvacard</code>](#Canvacard)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| image1 | <code>string</code> \| <code>Buffer</code> |  | Rostro para la niña en color rojo. |
| image2 | <code>string</code> \| <code>Buffer</code> |  | Cara para el chico |
| image3 | <code>string</code> \| <code>Buffer</code> | <code>null</code> | Cara para la otra chica [opcional] |

<a name="Canvacard.affect"></a>

### Canvacard.affect(image) ⇒ <code>Promise.&lt;Buffer&gt;</code>
No, no afecta a mi bebé.

**Kind**: static method of [<code>Canvacard</code>](#Canvacard)  

| Param | Type | Description |
| --- | --- | --- |
| image | <code>string</code> \| <code>Buffer</code> | Fuente de imagen |

<a name="Canvacard.jail"></a>

### Canvacard.jail(image, greyscale) ⇒ <code>Promise.&lt;Buffer&gt;</code>
Celda

**Kind**: static method of [<code>Canvacard</code>](#Canvacard)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| image | <code>string</code> \| <code>Buffer</code> |  | Fuente de imagen |
| greyscale | <code>boolean</code> | <code>false</code> | Si debe ser una imagen en escala de grises |

<a name="Canvacard.bed"></a>

### Canvacard.bed(image1, image2) ⇒ <code>Promise.&lt;Buffer&gt;</code>
cama

**Kind**: static method of [<code>Canvacard</code>](#Canvacard)  

| Param | Type | Description |
| --- | --- | --- |
| image1 | <code>string</code> \| <code>Buffer</code> | Primera imagen |
| image2 | <code>string</code> \| <code>Buffer</code> | Segunda imagen |

<a name="Canvacard.delete"></a>

### Canvacard.delete(image, dark) ⇒ <code>Promise.&lt;Buffer&gt;</code>
Borrar

**Kind**: static method of [<code>Canvacard</code>](#Canvacard)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| image | <code>string</code> \| <code>Buffer</code> |  | Fuente de imagen |
| dark | <code>boolean</code> | <code>false</code> | Si la imagen debe estar en modo oscuro |

<a name="Canvacard.tictactoe"></a>

### Canvacard.tictactoe(fill, color) ⇒ <code>Buffer</code>
TicTacToe

**Kind**: static method of [<code>Canvacard</code>](#Canvacard)  

| Param | Type | Description |
| --- | --- | --- |
| fill | <code>object</code> | Parámetros de TicTacToe |
| [fill.a1] | <code>&quot;X&quot;</code> \| <code>&quot;O&quot;</code> | valor a1 |
| [fill.b1] | <code>&quot;X&quot;</code> \| <code>&quot;O&quot;</code> | valor b1 |
| [fill.c1] | <code>&quot;X&quot;</code> \| <code>&quot;O&quot;</code> | valor c1 |
| [fill.a2] | <code>&quot;X&quot;</code> \| <code>&quot;O&quot;</code> | valor a2 |
| [fill.b2] | <code>&quot;X&quot;</code> \| <code>&quot;O&quot;</code> | valor b2 |
| [fill.c2] | <code>&quot;X&quot;</code> \| <code>&quot;O&quot;</code> | valor c2 |
| [fill.a3] | <code>&quot;X&quot;</code> \| <code>&quot;O&quot;</code> | valor a3 |
| [fill.b3] | <code>&quot;X&quot;</code> \| <code>&quot;O&quot;</code> | valor b3 |
| [fill.c3] | <code>&quot;X&quot;</code> \| <code>&quot;O&quot;</code> | valor c3 |
| color | <code>object</code> | Parámetros de color |
| [color.bg] | <code>string</code> | Color de fondo |
| [color.bar] | <code>string</code> | Color de la barra TicTacToe |
| [color.x] | <code>string</code> | Color de **X** |
| [color.o] | <code>string</code> | Color de **O** |

<a name="Canvacard.opinion"></a>

### Canvacard.opinion(avatar, msg) ⇒ <code>Promise.&lt;Buffer&gt;</code>
Opinión

**Kind**: static method of [<code>Canvacard</code>](#Canvacard)  

| Param | Type | Description |
| --- | --- | --- |
| avatar | <code>string</code> \| <code>Buffer</code> | Imagen |
| msg | <code>string</code> | Mensaje |

<a name="Canvacard.gradient"></a>

### Canvacard.gradient(colorFrom, colorTo, width, height) ⇒ <code>Buffer</code>
Crea degradado

**Kind**: static method of [<code>Canvacard</code>](#Canvacard)  

| Param | Type | Description |
| --- | --- | --- |
| colorFrom | <code>string</code> | Color inicial |
| colorTo | <code>string</code> | Color final |
| width | <code>number</code> | Ancho de la imagen |
| height | <code>number</code> | Altura de imagen |

<a name="Canvacard.ohno"></a>

### Canvacard.ohno(message) ⇒ <code>Promise.&lt;Buffer&gt;</code>
¡Oh, no! Es estúpido.

**Kind**: static method of [<code>Canvacard</code>](#Canvacard)  

| Param | Type | Description |
| --- | --- | --- |
| message | <code>string</code> | Mensaje |

<a name="Canvacard.changemymind"></a>

### Canvacard.changemymind(text) ⇒ <code>Promise.&lt;Buffer&gt;</code>
Cambiar de opinión (tomado de jgoralcz/image-microservice)

**Kind**: static method of [<code>Canvacard</code>](#Canvacard)  
**See**: https://github.com/jgoralcz/image-microservice/blob/master/src/workers/canvas/ChangeMyMind.js  

| Param | Type | Description |
| --- | --- | --- |
| text | <code>String</code> | Texto |

<a name="Canvacard.clyde"></a>

### Canvacard.clyde(message) ⇒ <code>Promise.&lt;Buffer&gt;</code>
Clyde

**Kind**: static method of [<code>Canvacard</code>](#Canvacard)  

| Param | Type | Description |
| --- | --- | --- |
| message | <code>string</code> | Mensaje |

<a name="Canvacard.quote"></a>

### Canvacard.quote(options) ⇒ <code>Promise.&lt;Buffer&gt;</code>
Cita falsa

**Kind**: static method of [<code>Canvacard</code>](#Canvacard)  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>object</code> | Opciones |
| [options.image] | <code>Buffer</code> \| <code>string</code> | Imagen |
| [options.message] | <code>string</code> | Mensaje |
| [options.username] | <code>string</code> | Nombre de usuario |
| [options.color] | <code>string</code> | Color |

<a name="Canvacard.phub"></a>

### Canvacard.phub(options) ⇒ <code>Promise.&lt;Buffer&gt;</code>
Comentario de PornHub

**Kind**: static method of [<code>Canvacard</code>](#Canvacard)  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | Opciones |
| [options.username] | <code>String</code> | Nombre de usuario |
| [options.message] | <code>String</code> | Comentario |
| [options.image] | <code>String</code> \| <code>Buffer</code> | Imagen |

<a name="Canvacard.wanted"></a>

### Canvacard.wanted(image) ⇒ <code>Promise.&lt;Buffer&gt;</code>
Wanted

**Kind**: static method of [<code>Canvacard</code>](#Canvacard)  

| Param | Type | Description |
| --- | --- | --- |
| image | <code>string</code> \| <code>Buffer</code> | Fuente de imagen |

<a name="Canvacard.wasted"></a>

### Canvacard.wasted(image) ⇒ <code>Promise.&lt;Buffer&gt;</code>
Wasted

**Kind**: static method of [<code>Canvacard</code>](#Canvacard)  

| Param | Type | Description |
| --- | --- | --- |
| image | <code>string</code> \| <code>Buffer</code> | Fuente de imagen |

<a name="Canvacard.youtube"></a>

### Canvacard.youtube(ops) ⇒ <code>Promise.&lt;Buffer&gt;</code>
Comentario de YouTube

**Kind**: static method of [<code>Canvacard</code>](#Canvacard)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| ops | <code>object</code> |  | Opciones de comentarios de YouTube |
| [ops.username] | <code>string</code> |  | Nombre de usuario del autor del comentario |
| [ops.content] | <code>string</code> |  | El comentario |
| [ops.avatar] | <code>string</code> \| <code>Buffer</code> |  | Fuente de avatar |
| [ops.dark] | <code>boolean</code> | <code>false</code> | ¿Modo oscuro? |

<a name="Canvacard.shit"></a>

### Canvacard.shit(image) ⇒ <code>Promise.&lt;Buffer&gt;</code>
¡Oh, mierda!

**Kind**: static method of [<code>Canvacard</code>](#Canvacard)  

| Param | Type | Description |
| --- | --- | --- |
| image | <code>string</code> \| <code>Buffer</code> | Fuente de imagen |

<a name="Canvacard.write"></a>

### Canvacard.write(data, name) ⇒ <code>void</code>
Escribe los datos como archivo

**Kind**: static method of [<code>Canvacard</code>](#Canvacard)  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Buffer</code> | datos para escribir |
| name | <code>string</code> | nombre del archivo |

<a name="Canvacard.guildIcon"></a>

### Canvacard.guildIcon(name, size) ⇒ <code>Promise.&lt;Buffer&gt;</code>
Devuelve el icono predeterminado de un servidor de discord

**Kind**: static method of [<code>Canvacard</code>](#Canvacard)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| name | <code>string</code> |  | Nombre del servidor |
| size | <code>number</code> | <code>1024</code> | Icon size. Valid: `16`, `32`, `64`, `128`, `256`, `512`, `1024`, `2048` & `4096` |

<a name="Canvacard.reply"></a>

### Canvacard.reply(options) ⇒ <code>Promise.&lt;Buffer&gt;</code>
Clon de respuesta de discord

**Kind**: static method of [<code>Canvacard</code>](#Canvacard)  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>object</code> | Opciones |
| [options.avatar1] | <code>string</code> \| <code>Buffer</code> | Avatar de la persona que respondió |
| [options.avatar2] | <code>string</code> \| <code>Buffer</code> | Avatar de la otra persona |
| [options.user1] | <code>string</code> | Nombre de usuario de la persona que respondió |
| [options.user2] | <code>string</code> | Nombre de usuario de la otra persona |
| [options.hex1] | <code>string</code> | Color hexadecimal de la persona que respondió |
| [options.hex2] | <code>string</code> | Color hexadecimal de la otra persona |
| [options.mainText] | <code>string</code> | El mensaje |
| [options.replyText] | <code>string</code> | El mensaje de respuesta |

**Example**  
```js
const img = "https://cdn.discordapp.com/embed/avatars/0.png";const img2 = "https://cdn.discordapp.com/embed/avatars/4.png";canvacard.Canvas.reply({     avatar1: img,     avatar2: img2,     user1: "Maximus",     user2: "SrGobi",     hex1: "#FF3300",     hex2: "#7289da",     mainText: "kok",     replyText: "Pog"}).then(img => canvacard.write(img, "reply.png"));
```
<a name="Canvacard.__wait"></a>

### Canvacard.\_\_wait(dur) ⇒ <code>Promise.&lt;void&gt;</code>
Método de Canvacard utilizado para `wait`.

**Kind**: static method of [<code>Canvacard</code>](#Canvacard)  

| Param | Type | Description |
| --- | --- | --- |
| dur | <code>number</code> | Número de milisegundos a esperar |

<a name="FortniteShop"></a>

## FortniteShop
Creador de imagen de la tienda de fortnite

**Kind**: global class  

* [FortniteShop](#FortniteShop)
    * [new FortniteShop()](#new_FortniteShop_new)
    * [.token](#FortniteShop+token) : <code>string</code>
    * [.textHeader](#FortniteShop+textHeader) : <code>string</code>
    * [.textDaily](#FortniteShop+textDaily) : <code>string</code>
    * [.textFeatured](#FortniteShop+textFeatured) : <code>string</code>
    * [.textDate](#FortniteShop+textDate) : <code>string</code>
    * [.textFooter](#FortniteShop+textFooter) : <code>string</code>
    * [.background](#FortniteShop+background) : <code>string</code>
    * [.setToken(value)](#FortniteShop+setToken) ⇒ [<code>FortniteShop</code>](#FortniteShop)
    * [.setBackground(value)](#FortniteShop+setBackground) ⇒ [<code>FortniteShop</code>](#FortniteShop)
    * [.setText(value)](#FortniteShop+setText) ⇒ [<code>FortniteShop</code>](#FortniteShop)
    * [.lang(value)](#FortniteShop+lang) ⇒ [<code>FortniteShop</code>](#FortniteShop)
    * [.dateFormat(value)](#FortniteShop+dateFormat) ⇒ [<code>FortniteShop</code>](#FortniteShop)

<a name="new_FortniteShop_new"></a>

### new FortniteShop()
FortniteShop image builder

**Example**  
```js
const FortniteShopCardURL = await new FortniteShop()
        .setToken("3533192f-66bc-48b2-8df9-c03bfeb75957")
        .setText("footer", "ESP CUSTOMS X FORTNITE")
        .toAttachment();
      await channel.send({ files: [{ attachment: FortniteShopCardURL, name: 'FortniteShop.png' }] })
```
<a name="FortniteShop+token"></a>

### fortniteShop.token : <code>string</code>
Token

**Kind**: instance property of [<code>FortniteShop</code>](#FortniteShop)  
<a name="FortniteShop+textHeader"></a>

### fortniteShop.textHeader : <code>string</code>
Texto del encabezado

**Kind**: instance property of [<code>FortniteShop</code>](#FortniteShop)  
<a name="FortniteShop+textDaily"></a>

### fortniteShop.textDaily : <code>string</code>
Texto del dia

**Kind**: instance property of [<code>FortniteShop</code>](#FortniteShop)  
<a name="FortniteShop+textFeatured"></a>

### fortniteShop.textFeatured : <code>string</code>
Texto de destacados

**Kind**: instance property of [<code>FortniteShop</code>](#FortniteShop)  
<a name="FortniteShop+textDate"></a>

### fortniteShop.textDate : <code>string</code>
Textos de datos

**Kind**: instance property of [<code>FortniteShop</code>](#FortniteShop)  
<a name="FortniteShop+textFooter"></a>

### fortniteShop.textFooter : <code>string</code>
Texto del footer

**Kind**: instance property of [<code>FortniteShop</code>](#FortniteShop)  
<a name="FortniteShop+background"></a>

### fortniteShop.background : <code>string</code>
imagen de fondo

**Kind**: instance property of [<code>FortniteShop</code>](#FortniteShop)  
<a name="FortniteShop+setToken"></a>

### fortniteShop.setToken(value) ⇒ [<code>FortniteShop</code>](#FortniteShop)
Valor del Token

**Kind**: instance method of [<code>FortniteShop</code>](#FortniteShop)  

| Param | Type |
| --- | --- |
| value | <code>string</code> | 

<a name="FortniteShop+setBackground"></a>

### fortniteShop.setBackground(value) ⇒ [<code>FortniteShop</code>](#FortniteShop)
Valor del background

**Kind**: instance method of [<code>FortniteShop</code>](#FortniteShop)  

| Param | Type |
| --- | --- |
| value | <code>string</code> | 

<a name="FortniteShop+setText"></a>

### fortniteShop.setText(value) ⇒ [<code>FortniteShop</code>](#FortniteShop)
Valor del texto

**Kind**: instance method of [<code>FortniteShop</code>](#FortniteShop)  

| Param | Type |
| --- | --- |
| value | <code>string</code> | 

<a name="FortniteShop+lang"></a>

### fortniteShop.lang(value) ⇒ [<code>FortniteShop</code>](#FortniteShop)
Valor del idioma

**Kind**: instance method of [<code>FortniteShop</code>](#FortniteShop)  

| Param | Type |
| --- | --- |
| value | <code>string</code> | 

<a name="FortniteShop+dateFormat"></a>

### fortniteShop.dateFormat(value) ⇒ [<code>FortniteShop</code>](#FortniteShop)
Valor del formato de fecha

**Kind**: instance method of [<code>FortniteShop</code>](#FortniteShop)  

| Param | Type |
| --- | --- |
| value | <code>string</code> | 

<a name="FortniteStats"></a>

## FortniteStats
Creador de imagen de estadisticas de fortnite

**Kind**: global class  

* [FortniteStats](#FortniteStats)
    * [new FortniteStats()](#new_FortniteStats_new)
    * [.token](#FortniteStats+token) : <code>string</code>
    * [.platform](#FortniteStats+platform) : <code>string</code>
    * [.user](#FortniteStats+user) : <code>string</code>
    * [.textFooter](#FortniteStats+textFooter) : <code>string</code>
    * [.textAverageKills](#FortniteStats+textAverageKills) : <code>string</code>
    * [.textAverageKill](#FortniteStats+textAverageKill) : <code>string</code>
    * [.textWPercent](#FortniteStats+textWPercent) : <code>string</code>
    * [.textWinPercent](#FortniteStats+textWinPercent) : <code>string</code>
    * [.textKD](#FortniteStats+textKD) : <code>string</code>
    * [.textWins](#FortniteStats+textWins) : <code>string</code>
    * [.textWin](#FortniteStats+textWin) : <code>string</code>
    * [.textKills](#FortniteStats+textKills) : <code>string</code>
    * [.textKill](#FortniteStats+textKill) : <code>string</code>
    * [.textMatches](#FortniteStats+textMatches) : <code>string</code>
    * [.textMatch](#FortniteStats+textMatch) : <code>string</code>
    * [.setToken(value)](#FortniteStats+setToken) ⇒ [<code>FortniteStats</code>](#FortniteStats)
    * [.setPlatform(value)](#FortniteStats+setPlatform) ⇒ [<code>FortniteStats</code>](#FortniteStats)
    * [.setUser(value)](#FortniteStats+setUser) ⇒ [<code>FortniteStats</code>](#FortniteStats)
    * [.setText(value)](#FortniteStats+setText) ⇒ [<code>FortniteStats</code>](#FortniteStats)

<a name="new_FortniteStats_new"></a>

### new FortniteStats()
FortniteStats image builder

**Example**  
```js
const FortniteStatsCardURL = await new FortniteStats()
      .setToken("3533192f-66bc-48b2-8df9-c03bfeb75957")
      .setUser("BLD SRGOBI")
      .setPlatform("pc")
      .setText("footer", "ESP CUSTOMS X FORTNITE")
      .toAttachment();
  await channel.send({ files: [{ attachment: FortniteStatsCardURL, name: 'FortniteStats.png' }] })
```
<a name="FortniteStats+token"></a>

### fortniteStats.token : <code>string</code>
Token

**Kind**: instance property of [<code>FortniteStats</code>](#FortniteStats)  
<a name="FortniteStats+platform"></a>

### fortniteStats.platform : <code>string</code>
Plaraforma

**Kind**: instance property of [<code>FortniteStats</code>](#FortniteStats)  
<a name="FortniteStats+user"></a>

### fortniteStats.user : <code>string</code>
Nombre de usuario

**Kind**: instance property of [<code>FortniteStats</code>](#FortniteStats)  
<a name="FortniteStats+textFooter"></a>

### fortniteStats.textFooter : <code>string</code>
Texto del footer

**Kind**: instance property of [<code>FortniteStats</code>](#FortniteStats)  
<a name="FortniteStats+textAverageKills"></a>

### fortniteStats.textAverageKills : <code>string</code>
Texto AvengersKills

**Kind**: instance property of [<code>FortniteStats</code>](#FortniteStats)  
<a name="FortniteStats+textAverageKill"></a>

### fortniteStats.textAverageKill : <code>string</code>
Texto AverageKill

**Kind**: instance property of [<code>FortniteStats</code>](#FortniteStats)  
<a name="FortniteStats+textWPercent"></a>

### fortniteStats.textWPercent : <code>string</code>
Texto Porcejtage victoria

**Kind**: instance property of [<code>FortniteStats</code>](#FortniteStats)  
<a name="FortniteStats+textWinPercent"></a>

### fortniteStats.textWinPercent : <code>string</code>
Texto Porcejtage victorias

**Kind**: instance property of [<code>FortniteStats</code>](#FortniteStats)  
<a name="FortniteStats+textKD"></a>

### fortniteStats.textKD : <code>string</code>
Texto KD

**Kind**: instance property of [<code>FortniteStats</code>](#FortniteStats)  
<a name="FortniteStats+textWins"></a>

### fortniteStats.textWins : <code>string</code>
Texto Victorias

**Kind**: instance property of [<code>FortniteStats</code>](#FortniteStats)  
<a name="FortniteStats+textWin"></a>

### fortniteStats.textWin : <code>string</code>
Texto Victoria

**Kind**: instance property of [<code>FortniteStats</code>](#FortniteStats)  
<a name="FortniteStats+textKills"></a>

### fortniteStats.textKills : <code>string</code>
Texto Kills

**Kind**: instance property of [<code>FortniteStats</code>](#FortniteStats)  
<a name="FortniteStats+textKill"></a>

### fortniteStats.textKill : <code>string</code>
Texto Kill

**Kind**: instance property of [<code>FortniteStats</code>](#FortniteStats)  
<a name="FortniteStats+textMatches"></a>

### fortniteStats.textMatches : <code>string</code>
Texto Partidas jugadas

**Kind**: instance property of [<code>FortniteStats</code>](#FortniteStats)  
<a name="FortniteStats+textMatch"></a>

### fortniteStats.textMatch : <code>string</code>
Texto Partida jugada

**Kind**: instance property of [<code>FortniteStats</code>](#FortniteStats)  
<a name="FortniteStats+setToken"></a>

### fortniteStats.setToken(value) ⇒ [<code>FortniteStats</code>](#FortniteStats)
Valor del Token

**Kind**: instance method of [<code>FortniteStats</code>](#FortniteStats)  

| Param | Type |
| --- | --- |
| value | <code>string</code> | 

<a name="FortniteStats+setPlatform"></a>

### fortniteStats.setPlatform(value) ⇒ [<code>FortniteStats</code>](#FortniteStats)
Valor de la plataforma

**Kind**: instance method of [<code>FortniteStats</code>](#FortniteStats)  

| Param | Type |
| --- | --- |
| value | <code>string</code> | 

<a name="FortniteStats+setUser"></a>

### fortniteStats.setUser(value) ⇒ [<code>FortniteStats</code>](#FortniteStats)
Valor del usuario

**Kind**: instance method of [<code>FortniteStats</code>](#FortniteStats)  

| Param | Type |
| --- | --- |
| value | <code>string</code> | 

<a name="FortniteStats+setText"></a>

### fortniteStats.setText(value) ⇒ [<code>FortniteStats</code>](#FortniteStats)
Valor del texto

**Kind**: instance method of [<code>FortniteStats</code>](#FortniteStats)  

| Param | Type |
| --- | --- |
| value | <code>string</code> | 

<a name="Leaver"></a>

## Leaver
Creador de tarjetas de despedida

**Kind**: global class  

* [Leaver](#Leaver)
    * [new Leaver()](#new_Leaver_new)
    * [.data](#Leaver+data)
    * [.avatar](#Leaver+avatar) : <code>string</code>
    * [.titulo](#Leaver+titulo) : <code>string</code>
    * [.subtitulo](#Leaver+subtitulo) : <code>string</code>
    * [.colorTitulo](#Leaver+colorTitulo) : <code>string</code>
    * [.colorSubtitulo](#Leaver+colorSubtitulo) : <code>string</code>
    * [.colorCircle](#Leaver+colorCircle) : <code>string</code>
    * [.colorOverlay](#Leaver+colorOverlay) : <code>number</code> \| <code>string</code>
    * [.opacityOverlay](#Leaver+opacityOverlay) : <code>string</code>
    * [.typeOverlay](#Leaver+typeOverlay) : <code>string</code>
    * [.colorBackground](#Leaver+colorBackground) : <code>string</code>
    * [.setColor(id, color)](#Leaver+setColor) ⇒ [<code>Leaver</code>](#Leaver)
    * [.setAvatar(value)](#Leaver+setAvatar) ⇒ [<code>Leaver</code>](#Leaver)
    * [.setTitulo(value)](#Leaver+setTitulo) ⇒ [<code>Leaver</code>](#Leaver)
    * [.setSubtitulo(value)](#Leaver+setSubtitulo) ⇒ [<code>Leaver</code>](#Leaver)
    * [.setColorTitulo(value)](#Leaver+setColorTitulo) ⇒ [<code>Leaver</code>](#Leaver)
    * [.setColorSubtitulo(value)](#Leaver+setColorSubtitulo) ⇒ [<code>Leaver</code>](#Leaver)
    * [.setColorCircle(value)](#Leaver+setColorCircle) ⇒ [<code>Leaver</code>](#Leaver)
    * [.setColorOverlay(value)](#Leaver+setColorOverlay) ⇒ [<code>Leaver</code>](#Leaver)
    * [.setOpacityOverlay(value)](#Leaver+setOpacityOverlay) ⇒ [<code>Leaver</code>](#Leaver)
    * [.setBackground(type, [data])](#Leaver+setBackground)
    * [.setTypeOverlay(type)](#Leaver+setTypeOverlay)
    * [.build(ops)](#Leaver+build) ⇒ <code>Promise.&lt;Buffer&gt;</code>

<a name="new_Leaver_new"></a>

### new Leaver()
Leave image builder

**Example**  
```js
const leaveCardURL = await new Leaver()
        .setAvatar(member.user.displayAvatarURL({ format: 'png', size: 4096 }))
        .setBackground('IMAGE', https://i.imgur.com/aClDVjh.jpg)
        .setTitulo("Titulo de la Tarjeta")
        .setSubtitulo("Subtitulo de la Tarjeta")
        .setOpacityOverlay("0.5")
        .setColorTitulo(#FFFFFF)
        .setColorSubtitulo(#FFFFFF)
        .setColorCircle(#FFFFFF)
        .setColorOverlay(#FFFFFF)
        .setTypeOverlay("rounded")
      leaverCardURL.build()
        .then(data => {
            canvacard.write(data, "LeaverCard.png");
        })
```
<a name="Leaver+data"></a>

### leaver.data
Fondo de la tarjeta

**Kind**: instance property of [<code>Leaver</code>](#Leaver)  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| backgroundGlobal | <code>object</code> |  | Fondo de la tarjeta |
| [backgroundGlobal.type] | <code>&quot;IMAGE&quot;</code> \| <code>&quot;COLOR&quot;</code> | <code>&quot;color&quot;</code> | Tipo de fondo |

<a name="Leaver+avatar"></a>

### leaver.avatar : <code>string</code>
Avatar de la tarjeta

**Kind**: instance property of [<code>Leaver</code>](#Leaver)  
<a name="Leaver+titulo"></a>

### leaver.titulo : <code>string</code>
Título creado con Canvacard

**Kind**: instance property of [<code>Leaver</code>](#Leaver)  
<a name="Leaver+subtitulo"></a>

### leaver.subtitulo : <code>string</code>
Subtítulo creado con Canvacard

**Kind**: instance property of [<code>Leaver</code>](#Leaver)  
<a name="Leaver+colorTitulo"></a>

### leaver.colorTitulo : <code>string</code>
Color del título creado con Canvacard

**Kind**: instance property of [<code>Leaver</code>](#Leaver)  
<a name="Leaver+colorSubtitulo"></a>

### leaver.colorSubtitulo : <code>string</code>
Color del Subtítulo creado con Canvacard

**Kind**: instance property of [<code>Leaver</code>](#Leaver)  
<a name="Leaver+colorCircle"></a>

### leaver.colorCircle : <code>string</code>
Color del circulo

**Kind**: instance property of [<code>Leaver</code>](#Leaver)  
<a name="Leaver+colorOverlay"></a>

### leaver.colorOverlay : <code>number</code> \| <code>string</code>
Color del overlay

**Kind**: instance property of [<code>Leaver</code>](#Leaver)  
<a name="Leaver+opacityOverlay"></a>

### leaver.opacityOverlay : <code>string</code>
Opacidad del overlay

**Kind**: instance property of [<code>Leaver</code>](#Leaver)  
<a name="Leaver+typeOverlay"></a>

### leaver.typeOverlay : <code>string</code>
Tipo de overlay

**Kind**: instance property of [<code>Leaver</code>](#Leaver)  
<a name="Leaver+colorBackground"></a>

### leaver.colorBackground : <code>string</code>
Color del fondo

**Kind**: instance property of [<code>Leaver</code>](#Leaver)  
<a name="Leaver+setColor"></a>

### leaver.setColor(id, color) ⇒ [<code>Leaver</code>](#Leaver)
Establecer color

**Kind**: instance method of [<code>Leaver</code>](#Leaver)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>&quot;titulo&quot;</code> \| <code>&quot;titulo-border&quot;</code> \| <code>&quot;titulo-box&quot;</code> \| <code>&quot;subtitulo&quot;</code> \| <code>&quot;subtitulo-border&quot;</code> \| <code>&quot;subtitulo-box&quot;</code> \| <code>&quot;avatar&quot;</code> \| <code>&quot;background&quot;</code> \| <code>&quot;border&quot;</code> |  |
| color | <code>string</code> | Código de color HTML5 |

<a name="Leaver+setAvatar"></a>

### leaver.setAvatar(value) ⇒ [<code>Leaver</code>](#Leaver)
Valor del avatar

**Kind**: instance method of [<code>Leaver</code>](#Leaver)  

| Param | Type |
| --- | --- |
| value | <code>string</code> \| <code>Buffer</code> | 

<a name="Leaver+setTitulo"></a>

### leaver.setTitulo(value) ⇒ [<code>Leaver</code>](#Leaver)
Valor del título

**Kind**: instance method of [<code>Leaver</code>](#Leaver)  

| Param | Type |
| --- | --- |
| value | <code>string</code> | 

<a name="Leaver+setSubtitulo"></a>

### leaver.setSubtitulo(value) ⇒ [<code>Leaver</code>](#Leaver)
Valor del subtítulo

**Kind**: instance method of [<code>Leaver</code>](#Leaver)  

| Param | Type |
| --- | --- |
| value | <code>string</code> | 

<a name="Leaver+setColorTitulo"></a>

### leaver.setColorTitulo(value) ⇒ [<code>Leaver</code>](#Leaver)
Valor del color del título

**Kind**: instance method of [<code>Leaver</code>](#Leaver)  

| Param | Type |
| --- | --- |
| value | <code>string</code> | 

<a name="Leaver+setColorSubtitulo"></a>

### leaver.setColorSubtitulo(value) ⇒ [<code>Leaver</code>](#Leaver)
Valor del color del subtítulo

**Kind**: instance method of [<code>Leaver</code>](#Leaver)  

| Param | Type |
| --- | --- |
| value | <code>string</code> | 

<a name="Leaver+setColorCircle"></a>

### leaver.setColorCircle(value) ⇒ [<code>Leaver</code>](#Leaver)
Valor del color del círculo

**Kind**: instance method of [<code>Leaver</code>](#Leaver)  

| Param | Type |
| --- | --- |
| value | <code>string</code> | 

<a name="Leaver+setColorOverlay"></a>

### leaver.setColorOverlay(value) ⇒ [<code>Leaver</code>](#Leaver)
Valor del color del overlay

**Kind**: instance method of [<code>Leaver</code>](#Leaver)  

| Param | Type |
| --- | --- |
| value | <code>string</code> | 

<a name="Leaver+setOpacityOverlay"></a>

### leaver.setOpacityOverlay(value) ⇒ [<code>Leaver</code>](#Leaver)
Valor del color del overlay

**Kind**: instance method of [<code>Leaver</code>](#Leaver)  

| Param | Type |
| --- | --- |
| value | <code>number</code> \| <code>string</code> | 

<a name="Leaver+setBackground"></a>

### leaver.setBackground(type, [data])
Establecer imagen / color de fondo

**Kind**: instance method of [<code>Leaver</code>](#Leaver)  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>&quot;COLOR&quot;</code> \| <code>&quot;IMAGE&quot;</code> | Tipo de fondo |
| [data] | <code>string</code> \| <code>Buffer</code> | Color o imagen de fondo |

<a name="Leaver+setTypeOverlay"></a>

### leaver.setTypeOverlay(type)
Establecer rectangle / rounded de overlay

**Kind**: instance method of [<code>Leaver</code>](#Leaver)  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>&quot;RECTANGLE&quot;</code> \| <code>&quot;ROUNDED&quot;</code> | Tipo de fondo |

<a name="Leaver+build"></a>

### leaver.build(ops) ⇒ <code>Promise.&lt;Buffer&gt;</code>
Construye la tarjeta de despedida

**Kind**: instance method of [<code>Leaver</code>](#Leaver)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| ops | <code>object</code> |  | Fuentes |
| [ops.fontX] | <code>string</code> | <code>&quot;\&quot;MANROPE_BOLD\&quot;&quot;</code> | Familia tipográfica Bold |
| [ops.fontY] | <code>string</code> | <code>&quot;\&quot;MANROPE_REGULAR\&quot;&quot;</code> | Familia tipográfica regular |

<a name="Rank"></a>

## Rank
**Kind**: global class  

* [Rank](#Rank)
    * [new Rank()](#new_Rank_new)
    * [.data](#Rank+data) : [<code>CanvacardRankData</code>](#CanvacardRankData)
    * [.renderEmojis([apply])](#Rank+renderEmojis) ⇒ [<code>Rank</code>](#Rank)
    * [.setFontSize(size)](#Rank+setFontSize) ⇒ [<code>Rank</code>](#Rank)
    * [.setUsername(name, color)](#Rank+setUsername) ⇒ [<code>Rank</code>](#Rank)
    * [.setProgressBar(color, [fillType], [rounded])](#Rank+setProgressBar) ⇒ [<code>Rank</code>](#Rank)
    * [.setProgressBarTrack(color)](#Rank+setProgressBarTrack) ⇒ [<code>Rank</code>](#Rank)
    * [.setOverlay(color, [level], [display])](#Rank+setOverlay) ⇒ [<code>Rank</code>](#Rank)
    * [.setRequiredXP(data, color)](#Rank+setRequiredXP) ⇒ [<code>Rank</code>](#Rank)
    * [.setCurrentXP(data, color)](#Rank+setCurrentXP) ⇒ [<code>Rank</code>](#Rank)
    * [.setRank(data, text, [display])](#Rank+setRank) ⇒ [<code>Rank</code>](#Rank)
    * [.setRankColor(text, number)](#Rank+setRankColor) ⇒ [<code>Rank</code>](#Rank)
    * [.setLevelColor(text, number)](#Rank+setLevelColor) ⇒ [<code>Rank</code>](#Rank)
    * [.setLevel(data, text, [display])](#Rank+setLevel) ⇒ [<code>Rank</code>](#Rank)
    * [.setCustomStatusColor(color)](#Rank+setCustomStatusColor) ⇒ [<code>Rank</code>](#Rank)
    * [.setStatus(status, circle, width)](#Rank+setStatus) ⇒ [<code>Rank</code>](#Rank)
    * [.setBackground(type, [data])](#Rank+setBackground) ⇒ [<code>Rank</code>](#Rank)
    * [.setAvatar(data)](#Rank+setAvatar) ⇒ [<code>Rank</code>](#Rank)
    * [.build(ops)](#Rank+build) ⇒ <code>Promise.&lt;Buffer&gt;</code>

<a name="new_Rank_new"></a>

### new Rank()
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
<a name="Rank+data"></a>

### rank.data : [<code>CanvacardRankData</code>](#CanvacardRankData)
Rank card data

**Kind**: instance property of [<code>Rank</code>](#Rank)  
<a name="Rank+renderEmojis"></a>

### rank.renderEmojis([apply]) ⇒ [<code>Rank</code>](#Rank)
Si debe mostrar el nombre de usuario con emojis (si los hay)

**Kind**: instance method of [<code>Rank</code>](#Rank)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [apply] | <code>boolean</code> | <code>false</code> | Establécelo a `true` para mostrar emojis. |

<a name="Rank+setFontSize"></a>

### rank.setFontSize(size) ⇒ [<code>Rank</code>](#Rank)
Tamaño de letra

**Kind**: instance method of [<code>Rank</code>](#Rank)  

| Param | Type |
| --- | --- |
| size | <code>string</code> | 

<a name="Rank+setUsername"></a>

### rank.setUsername(name, color) ⇒ [<code>Rank</code>](#Rank)
Establecer nombre de usuario

**Kind**: instance method of [<code>Rank</code>](#Rank)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| name | <code>string</code> |  | Username |
| color | <code>string</code> | <code>&quot;#FFFFFF&quot;</code> | Username color |

<a name="Rank+setProgressBar"></a>

### rank.setProgressBar(color, [fillType], [rounded]) ⇒ [<code>Rank</code>](#Rank)
Definir el estilo de la barra de progreso

**Kind**: instance method of [<code>Rank</code>](#Rank)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| color | <code>string</code> \| <code>Array.&lt;string&gt;</code> |  | Progressbar Color |
| [fillType] | <code>&quot;COLOR&quot;</code> \| <code>&quot;GRADIENT&quot;</code> | <code>COLOR</code> | Progressbar type |
| [rounded] | <code>boolean</code> | <code>true</code> | If progressbar should have rounded edges |

<a name="Rank+setProgressBarTrack"></a>

### rank.setProgressBarTrack(color) ⇒ [<code>Rank</code>](#Rank)
Fijar la pista de la barra de progreso

**Kind**: instance method of [<code>Rank</code>](#Rank)  

| Param | Type | Description |
| --- | --- | --- |
| color | <code>string</code> | Track color |

<a name="Rank+setOverlay"></a>

### rank.setOverlay(color, [level], [display]) ⇒ [<code>Rank</code>](#Rank)
Establecer superposición de tarjetas

**Kind**: instance method of [<code>Rank</code>](#Rank)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| color | <code>string</code> |  | Overlay color |
| [level] | <code>number</code> | <code>0.5</code> | Opacity level |
| [display] | <code>boolean</code> | <code>true</code> | IF it should display overlay |

<a name="Rank+setRequiredXP"></a>

### rank.setRequiredXP(data, color) ⇒ [<code>Rank</code>](#Rank)
Establecer xp requerido

**Kind**: instance method of [<code>Rank</code>](#Rank)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| data | <code>number</code> |  | Required xp |
| color | <code>string</code> | <code>&quot;#FFFFFF&quot;</code> | Color |

<a name="Rank+setCurrentXP"></a>

### rank.setCurrentXP(data, color) ⇒ [<code>Rank</code>](#Rank)
Fijar xp actual

**Kind**: instance method of [<code>Rank</code>](#Rank)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| data | <code>number</code> |  | Current xp |
| color | <code>string</code> | <code>&quot;#FFFFFF&quot;</code> | Color |

<a name="Rank+setRank"></a>

### rank.setRank(data, text, [display]) ⇒ [<code>Rank</code>](#Rank)
Establecer rango

**Kind**: instance method of [<code>Rank</code>](#Rank)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| data | <code>number</code> |  | Current Rank |
| text | <code>string</code> | <code>&quot;RANK&quot;</code> | Display text |
| [display] | <code>boolean</code> | <code>true</code> | If it should display rank |

<a name="Rank+setRankColor"></a>

### rank.setRankColor(text, number) ⇒ [<code>Rank</code>](#Rank)
Establecer el color de visualización del rango

**Kind**: instance method of [<code>Rank</code>](#Rank)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| text | <code>string</code> | <code>&quot;#FFFFFF&quot;</code> | text color |
| number | <code>string</code> | <code>&quot;#FFFFFF&quot;</code> | Number color |

<a name="Rank+setLevelColor"></a>

### rank.setLevelColor(text, number) ⇒ [<code>Rank</code>](#Rank)
Fijar color de nivel

**Kind**: instance method of [<code>Rank</code>](#Rank)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| text | <code>string</code> | <code>&quot;#FFFFFF&quot;</code> | text color |
| number | <code>string</code> | <code>&quot;#FFFFFF&quot;</code> | number color |

<a name="Rank+setLevel"></a>

### rank.setLevel(data, text, [display]) ⇒ [<code>Rank</code>](#Rank)
Establecer nivel

**Kind**: instance method of [<code>Rank</code>](#Rank)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| data | <code>number</code> |  | Current Level |
| text | <code>string</code> | <code>&quot;LEVEL&quot;</code> | Display text |
| [display] | <code>boolean</code> | <code>true</code> | If it should display level |

<a name="Rank+setCustomStatusColor"></a>

### rank.setCustomStatusColor(color) ⇒ [<code>Rank</code>](#Rank)
Establecer color de estado personalizado

**Kind**: instance method of [<code>Rank</code>](#Rank)  

| Param | Type | Description |
| --- | --- | --- |
| color | <code>string</code> | Color to set |

<a name="Rank+setStatus"></a>

### rank.setStatus(status, circle, width) ⇒ [<code>Rank</code>](#Rank)
Establecer estado

**Kind**: instance method of [<code>Rank</code>](#Rank)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| status | <code>&quot;online&quot;</code> \| <code>&quot;idle&quot;</code> \| <code>&quot;dnd&quot;</code> \| <code>&quot;offline&quot;</code> \| <code>&quot;streaming&quot;</code> |  | User status |
| circle | <code>boolean</code> | <code>false</code> | Si el icono de estado debe ser circular. |
| width | <code>number</code> \| <code>boolean</code> | <code>5</code> | Anchura de estado |

<a name="Rank+setBackground"></a>

### rank.setBackground(type, [data]) ⇒ [<code>Rank</code>](#Rank)
Establecer imagen/color de fondo

**Kind**: instance method of [<code>Rank</code>](#Rank)  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>&quot;COLOR&quot;</code> \| <code>&quot;IMAGE&quot;</code> | Background type |
| [data] | <code>string</code> \| <code>Buffer</code> | Background color or image |

<a name="Rank+setAvatar"></a>

### rank.setAvatar(data) ⇒ [<code>Rank</code>](#Rank)
Avatar de usuario

**Kind**: instance method of [<code>Rank</code>](#Rank)  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>string</code> \| <code>Buffer</code> | Avatar data |

<a name="Rank+build"></a>

### rank.build(ops) ⇒ <code>Promise.&lt;Buffer&gt;</code>
Construye la tarjeta de rango

**Kind**: instance method of [<code>Rank</code>](#Rank)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| ops | <code>object</code> |  | Fonts |
| [ops.fontX] | <code>string</code> | <code>&quot;\&quot;MANROPE_BOLD\&quot;&quot;</code> | Bold font family |
| [ops.fontY] | <code>string</code> | <code>&quot;\&quot;MANROPE_REGULAR\&quot;&quot;</code> | Regular font family |

<a name="Spotify"></a>

## Spotify
Creador de tarjetas de presencia de Spotify

**Kind**: global class  

* [Spotify](#Spotify)
    * [new Spotify()](#new_Spotify_new)
    * [.title](#Spotify+title) : <code>string</code>
    * [.image](#Spotify+image) : <code>string</code> \| <code>Buffer</code> \| <code>Canvas.Image</code>
    * [.artist](#Spotify+artist) : <code>string</code>
    * [.album](#Spotify+album) : <code>string</code>
    * [.start](#Spotify+start) : <code>number</code>
    * [.end](#Spotify+end) : <code>number</code>
    * [.background](#Spotify+background) : [<code>SpotifyDataBG</code>](#SpotifyDataBG)
    * [.progressBar](#Spotify+progressBar) : [<code>SpotifyProgressBarData</code>](#SpotifyProgressBarData)
    * [.setProgressBar(type, color)](#Spotify+setProgressBar) ⇒ [<code>Spotify</code>](#Spotify)
    * [.setTitle(title)](#Spotify+setTitle) ⇒ [<code>Spotify</code>](#Spotify)
    * [.setImage(source)](#Spotify+setImage) ⇒ [<code>Spotify</code>](#Spotify)
    * [.setAuthor(name)](#Spotify+setAuthor) ⇒ [<code>Spotify</code>](#Spotify)
    * [.setAlbum(name)](#Spotify+setAlbum) ⇒ [<code>Spotify</code>](#Spotify)
    * [.setStartTimestamp(time)](#Spotify+setStartTimestamp) ⇒ [<code>Spotify</code>](#Spotify)
    * [.setEndTimestamp(time)](#Spotify+setEndTimestamp) ⇒ [<code>Spotify</code>](#Spotify)
    * [.setBackground(type, data)](#Spotify+setBackground) ⇒ [<code>Spotify</code>](#Spotify)
    * [.build(ops)](#Spotify+build) ⇒ <code>Promise.&lt;Buffer&gt;</code>

<a name="new_Spotify_new"></a>

### new Spotify()
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
<a name="Spotify+title"></a>

### spotify.title : <code>string</code>
Título de la canción

**Kind**: instance property of [<code>Spotify</code>](#Spotify)  
<a name="Spotify+image"></a>

### spotify.image : <code>string</code> \| <code>Buffer</code> \| <code>Canvas.Image</code>
Thumbnail

**Kind**: instance property of [<code>Spotify</code>](#Spotify)  
<a name="Spotify+artist"></a>

### spotify.artist : <code>string</code>
Artista de la canción

**Kind**: instance property of [<code>Spotify</code>](#Spotify)  
<a name="Spotify+album"></a>

### spotify.album : <code>string</code>
Nombre del álbum de Spotify

**Kind**: instance property of [<code>Spotify</code>](#Spotify)  
<a name="Spotify+start"></a>

### spotify.start : <code>number</code>
Marca de tiempo de inicio de presencia de discord

**Kind**: instance property of [<code>Spotify</code>](#Spotify)  
<a name="Spotify+end"></a>

### spotify.end : <code>number</code>
Marca de tiempo de finalización de presencia de discord

**Kind**: instance property of [<code>Spotify</code>](#Spotify)  
<a name="Spotify+background"></a>

### spotify.background : [<code>SpotifyDataBG</code>](#SpotifyDataBG)
Fondo

**Kind**: instance property of [<code>Spotify</code>](#Spotify)  
<a name="Spotify+progressBar"></a>

### spotify.progressBar : [<code>SpotifyProgressBarData</code>](#SpotifyProgressBarData)
Detalles de la barra de progreso

**Kind**: instance property of [<code>Spotify</code>](#Spotify)  
<a name="Spotify+setProgressBar"></a>

### spotify.setProgressBar(type, color) ⇒ [<code>Spotify</code>](#Spotify)
Establecer detalles de la barra de progreso

**Kind**: instance method of [<code>Spotify</code>](#Spotify)  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>&quot;TRACK&quot;</code> \| <code>&quot;BAR&quot;</code> | Tipo de barra de progreso |
| color | <code>string</code> | Color para establecer |

<a name="Spotify+setTitle"></a>

### spotify.setTitle(title) ⇒ [<code>Spotify</code>](#Spotify)
Establecer título

**Kind**: instance method of [<code>Spotify</code>](#Spotify)  

| Param | Type | Description |
| --- | --- | --- |
| title | <code>string</code> | Título para establecer |

<a name="Spotify+setImage"></a>

### spotify.setImage(source) ⇒ [<code>Spotify</code>](#Spotify)
Establecer imagen

**Kind**: instance method of [<code>Spotify</code>](#Spotify)  

| Param | Type | Description |
| --- | --- | --- |
| source | <code>string</code> \| <code>Buffer</code> \| <code>Canvas.Image</code> | Fuente de imagen |

<a name="Spotify+setAuthor"></a>

### spotify.setAuthor(name) ⇒ [<code>Spotify</code>](#Spotify)
Establecer nombre de artista

**Kind**: instance method of [<code>Spotify</code>](#Spotify)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | Nombre del artista |

<a name="Spotify+setAlbum"></a>

### spotify.setAlbum(name) ⇒ [<code>Spotify</code>](#Spotify)
Establecer el nombre del álbum

**Kind**: instance method of [<code>Spotify</code>](#Spotify)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | Nombre del álbum |

<a name="Spotify+setStartTimestamp"></a>

### spotify.setStartTimestamp(time) ⇒ [<code>Spotify</code>](#Spotify)
Establecer marca de tiempo de inicio

**Kind**: instance method of [<code>Spotify</code>](#Spotify)  

| Param | Type | Description |
| --- | --- | --- |
| time | <code>Date</code> \| <code>number</code> | Marca de tiempo |

<a name="Spotify+setEndTimestamp"></a>

### spotify.setEndTimestamp(time) ⇒ [<code>Spotify</code>](#Spotify)
Establecer marca de tiempo de finalización

**Kind**: instance method of [<code>Spotify</code>](#Spotify)  

| Param | Type | Description |
| --- | --- | --- |
| time | <code>Date</code> \| <code>number</code> | Marca de tiempo |

<a name="Spotify+setBackground"></a>

### spotify.setBackground(type, data) ⇒ [<code>Spotify</code>](#Spotify)
Definir fondo

**Kind**: instance method of [<code>Spotify</code>](#Spotify)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| type | <code>&quot;COLOR&quot;</code> \| <code>&quot;IMAGE&quot;</code> | <code>COLOR</code> | Tipo de fondo |
| data | <code>string</code> \| <code>Buffer</code> \| <code>Canvas.Image</code> | <code>&quot;#2F3136&quot;</code> | Datos de fondo |

<a name="Spotify+build"></a>

### spotify.build(ops) ⇒ <code>Promise.&lt;Buffer&gt;</code>
Esta función convierte los datos sin procesar en una tarjeta de presencia de Spotify.

**Kind**: instance method of [<code>Spotify</code>](#Spotify)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| ops | <code>object</code> |  | Fuentes |
| [ops.fontX] | <code>string</code> | <code>&quot;\&quot;Manrope\&quot;&quot;</code> | Familia tipográfica Bold |
| [ops.fontY] | <code>string</code> | <code>&quot;\&quot;Manrope\&quot;&quot;</code> | Familia tipográfica regular |

<a name="Util"></a>

## Util
**Kind**: global class  

* [Util](#Util)
    * [new Util()](#new_Util_new)
    * [new Util()](#new_Util_new)
    * [.validateHex(hex)](#Util.validateHex) ⇒ <code>boolean</code>
    * [.discordTime(time)](#Util.discordTime) ⇒ <code>string</code>
    * [.formatTime(time)](#Util.formatTime) ⇒ <code>string</code>
    * [.shorten(text, len)](#Util.shorten) ⇒ <code>string</code>
    * [.toAbbrev(num)](#Util.toAbbrev) ⇒ <code>string</code> \| <code>string</code>
    * [.renderEmoji(ctx, msg, x, y)](#Util.renderEmoji) ⇒ <code>Promise.&lt;void&gt;</code>
    * [.formatHex(hex, alt)](#Util.formatHex) ⇒ <code>string</code>
    * [.invertColor(hex)](#Util.invertColor) ⇒ <code>string</code>
    * [.getAcronym(name)](#Util.getAcronym) ⇒ <code>string</code>
    * [.getLines(params, text, ctx, maxWidth)](#Util.getLines) ⇒ <code>Array.&lt;string&gt;</code>
    * [.validateHex(hex)](#Util.validateHex) ⇒ <code>boolean</code>
    * [.discordTime(time)](#Util.discordTime) ⇒ <code>string</code>
    * [.formatTime(time)](#Util.formatTime) ⇒ <code>string</code>
    * [.shorten(text, len)](#Util.shorten) ⇒ <code>string</code>
    * [.toAbbrev(num)](#Util.toAbbrev) ⇒ <code>string</code> \| <code>string</code>
    * [.renderEmoji(ctx, msg, x, y)](#Util.renderEmoji) ⇒ <code>Promise.&lt;void&gt;</code>
    * [.formatHex(hex, alt)](#Util.formatHex) ⇒ <code>string</code>
    * [.invertColor(hex)](#Util.invertColor) ⇒ <code>string</code>
    * [.getAcronym(name)](#Util.getAcronym) ⇒ <code>string</code>
    * [.getLines(params, text, ctx, maxWidth)](#Util.getLines) ⇒ <code>Array.&lt;string&gt;</code>

<a name="new_Util_new"></a>

### new Util()
Canvacard Util

<a name="new_Util_new"></a>

### new Util()
Canvacard Util

<a name="Util.validateHex"></a>

### Util.validateHex(hex) ⇒ <code>boolean</code>
Validates hex

**Kind**: static method of [<code>Util</code>](#Util)  

| Param | Type | Description |
| --- | --- | --- |
| hex | <code>string</code> | Hex code to validate |

<a name="Util.discordTime"></a>

### Util.discordTime(time) ⇒ <code>string</code>
Converts regular timestamp to discord like time

**Kind**: static method of [<code>Util</code>](#Util)  

| Param | Type | Description |
| --- | --- | --- |
| time | <code>Date</code> \| <code>number</code> | Timestamp to convert |

<a name="Util.formatTime"></a>

### Util.formatTime(time) ⇒ <code>string</code>
Formats time

**Kind**: static method of [<code>Util</code>](#Util)  

| Param | Type | Description |
| --- | --- | --- |
| time | <code>number</code> | Time to format |

<a name="Util.shorten"></a>

### Util.shorten(text, len) ⇒ <code>string</code>
Shorten text.

**Kind**: static method of [<code>Util</code>](#Util)  

| Param | Type | Description |
| --- | --- | --- |
| text | <code>string</code> | Text to shorten |
| len | <code>number</code> | Max Length |

<a name="Util.toAbbrev"></a>

### Util.toAbbrev(num) ⇒ <code>string</code> \| <code>string</code>
Converts numbers into units like `1K`, `1M`, `1B` etc.

**Kind**: static method of [<code>Util</code>](#Util)  

| Param | Type |
| --- | --- |
| num | <code>number</code> \| <code>string</code> | 

<a name="Util.renderEmoji"></a>

### Util.renderEmoji(ctx, msg, x, y) ⇒ <code>Promise.&lt;void&gt;</code>
Renders text with emoji

**Kind**: static method of [<code>Util</code>](#Util)  

| Param | Type | Description |
| --- | --- | --- |
| ctx | <code>CanvasRenderingContext2D</code> | CanvasRenderingContext2D |
| msg | <code>string</code> | Message |
| x | <code>number</code> | X |
| y | <code>number</code> | Y |

<a name="Util.formatHex"></a>

### Util.formatHex(hex, alt) ⇒ <code>string</code>
Returns formatted hex code

**Kind**: static method of [<code>Util</code>](#Util)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| hex | <code>string</code> |  | Hex code to format |
| alt | <code>string</code> | <code>&quot;#000000&quot;</code> | Alt color |

<a name="Util.invertColor"></a>

### Util.invertColor(hex) ⇒ <code>string</code>
Inverts hex color

**Kind**: static method of [<code>Util</code>](#Util)  

| Param | Type | Description |
| --- | --- | --- |
| hex | <code>string</code> | Hex color code to invert |

<a name="Util.getAcronym"></a>

### Util.getAcronym(name) ⇒ <code>string</code>
Returns acronym

**Kind**: static method of [<code>Util</code>](#Util)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | Name to parse acronym |

<a name="Util.getLines"></a>

### Util.getLines(params, text, ctx, maxWidth) ⇒ <code>Array.&lt;string&gt;</code>
Returns array of lines

**Kind**: static method of [<code>Util</code>](#Util)  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | Params |
| text | <code>string</code> | Text |
| ctx | <code>CanvasRenderingContext2D</code> | CanvasRenderingContext2D |
| maxWidth | <code>number</code> | Max width |

<a name="Util.validateHex"></a>

### Util.validateHex(hex) ⇒ <code>boolean</code>
Validates hex

**Kind**: static method of [<code>Util</code>](#Util)  

| Param | Type | Description |
| --- | --- | --- |
| hex | <code>string</code> | Hex code to validate |

<a name="Util.discordTime"></a>

### Util.discordTime(time) ⇒ <code>string</code>
Converts regular timestamp to discord like time

**Kind**: static method of [<code>Util</code>](#Util)  

| Param | Type | Description |
| --- | --- | --- |
| time | <code>Date</code> \| <code>number</code> | Timestamp to convert |

<a name="Util.formatTime"></a>

### Util.formatTime(time) ⇒ <code>string</code>
Formats time

**Kind**: static method of [<code>Util</code>](#Util)  

| Param | Type | Description |
| --- | --- | --- |
| time | <code>number</code> | Time to format |

<a name="Util.shorten"></a>

### Util.shorten(text, len) ⇒ <code>string</code>
Shorten text.

**Kind**: static method of [<code>Util</code>](#Util)  

| Param | Type | Description |
| --- | --- | --- |
| text | <code>string</code> | Text to shorten |
| len | <code>number</code> | Max Length |

<a name="Util.toAbbrev"></a>

### Util.toAbbrev(num) ⇒ <code>string</code> \| <code>string</code>
Converts numbers into units like `1K`, `1M`, `1B` etc.

**Kind**: static method of [<code>Util</code>](#Util)  

| Param | Type |
| --- | --- |
| num | <code>number</code> \| <code>string</code> | 

<a name="Util.renderEmoji"></a>

### Util.renderEmoji(ctx, msg, x, y) ⇒ <code>Promise.&lt;void&gt;</code>
Renders text with emoji

**Kind**: static method of [<code>Util</code>](#Util)  

| Param | Type | Description |
| --- | --- | --- |
| ctx | <code>CanvasRenderingContext2D</code> | CanvasRenderingContext2D |
| msg | <code>string</code> | Message |
| x | <code>number</code> | X |
| y | <code>number</code> | Y |

<a name="Util.formatHex"></a>

### Util.formatHex(hex, alt) ⇒ <code>string</code>
Returns formatted hex code

**Kind**: static method of [<code>Util</code>](#Util)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| hex | <code>string</code> |  | Hex code to format |
| alt | <code>string</code> | <code>&quot;#000000&quot;</code> | Alt color |

<a name="Util.invertColor"></a>

### Util.invertColor(hex) ⇒ <code>string</code>
Inverts hex color

**Kind**: static method of [<code>Util</code>](#Util)  

| Param | Type | Description |
| --- | --- | --- |
| hex | <code>string</code> | Hex color code to invert |

<a name="Util.getAcronym"></a>

### Util.getAcronym(name) ⇒ <code>string</code>
Returns acronym

**Kind**: static method of [<code>Util</code>](#Util)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | Name to parse acronym |

<a name="Util.getLines"></a>

### Util.getLines(params, text, ctx, maxWidth) ⇒ <code>Array.&lt;string&gt;</code>
Returns array of lines

**Kind**: static method of [<code>Util</code>](#Util)  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | Params |
| text | <code>string</code> | Text |
| ctx | <code>CanvasRenderingContext2D</code> | CanvasRenderingContext2D |
| maxWidth | <code>number</code> | Max width |

<a name="Welcomer"></a>

## Welcomer
Creador de tarjetas de bienvenida

**Kind**: global class  

* [Welcomer](#Welcomer)
    * [new Welcomer()](#new_Welcomer_new)
    * [.data](#Welcomer+data)
    * [.avatar](#Welcomer+avatar) : <code>string</code>
    * [.titulo](#Welcomer+titulo) : <code>string</code>
    * [.subtitulo](#Welcomer+subtitulo) : <code>string</code>
    * [.colorTitulo](#Welcomer+colorTitulo) : <code>string</code>
    * [.colorSubtitulo](#Welcomer+colorSubtitulo) : <code>string</code>
    * [.colorCircle](#Welcomer+colorCircle) : <code>string</code>
    * [.colorOverlay](#Welcomer+colorOverlay) : <code>number</code> \| <code>string</code>
    * [.opacityOverlay](#Welcomer+opacityOverlay) : <code>string</code>
    * [.typeOverlay](#Welcomer+typeOverlay) : <code>string</code>
    * [.colorBackground](#Welcomer+colorBackground) : <code>string</code>
    * [.setColor(id, color)](#Welcomer+setColor) ⇒ [<code>Welcomer</code>](#Welcomer)
    * [.setAvatar(value)](#Welcomer+setAvatar) ⇒ [<code>Welcomer</code>](#Welcomer)
    * [.setTitulo(value)](#Welcomer+setTitulo) ⇒ [<code>Welcomer</code>](#Welcomer)
    * [.setSubtitulo(value)](#Welcomer+setSubtitulo) ⇒ [<code>Welcomer</code>](#Welcomer)
    * [.setColorTitulo(value)](#Welcomer+setColorTitulo) ⇒ [<code>Welcomer</code>](#Welcomer)
    * [.setColorSubtitulo(value)](#Welcomer+setColorSubtitulo) ⇒ [<code>Welcomer</code>](#Welcomer)
    * [.setColorCircle(value)](#Welcomer+setColorCircle) ⇒ [<code>Welcomer</code>](#Welcomer)
    * [.setColorOverlay(value)](#Welcomer+setColorOverlay) ⇒ [<code>Welcomer</code>](#Welcomer)
    * [.setOpacityOverlay(value)](#Welcomer+setOpacityOverlay) ⇒ [<code>Welcomer</code>](#Welcomer)
    * [.setBackground(type, [data])](#Welcomer+setBackground)
    * [.setTypeOverlay(type)](#Welcomer+setTypeOverlay)
    * [.build(ops)](#Welcomer+build) ⇒ <code>Promise.&lt;Buffer&gt;</code>

<a name="new_Welcomer_new"></a>

### new Welcomer()
Welcome image builder

**Example**  
```js
const welcomeCardURL = await new Welcomer()
        .setAvatar(member.user.displayAvatarURL({ format: 'png', size: 4096 }))
        .setBackground('IMAGE', https://i.imgur.com/aClDVjh.jpg)
        .setTitulo("Titulo de la Tarjeta")
        .setSubtitulo("Subtitulo de la Tarjeta")
        .setOpacityOverlay("0.5")
        .setColorTitulo(#FFFFFF)
        .setColorSubtitulo(#FFFFFF)
        .setColorCircle(#FFFFFF)
        .setColorOverlay(#FFFFFF)
        .setTypeOverlay("rounded")
      welcomeCardURL.build()
        .then(data => {
            canvacard.write(data, "WelcomeCard.png");
        })
```
<a name="Welcomer+data"></a>

### welcomer.data
Fondo de la tarjeta

**Kind**: instance property of [<code>Welcomer</code>](#Welcomer)  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| backgroundGlobal | <code>object</code> |  | Fondo de la tarjeta |
| [backgroundGlobal.type] | <code>&quot;IMAGE&quot;</code> \| <code>&quot;COLOR&quot;</code> | <code>&quot;color&quot;</code> | Tipo de fondo |

<a name="Welcomer+avatar"></a>

### welcomer.avatar : <code>string</code>
Avatar de la tarjeta

**Kind**: instance property of [<code>Welcomer</code>](#Welcomer)  
<a name="Welcomer+titulo"></a>

### welcomer.titulo : <code>string</code>
Título creado con Canvacard

**Kind**: instance property of [<code>Welcomer</code>](#Welcomer)  
<a name="Welcomer+subtitulo"></a>

### welcomer.subtitulo : <code>string</code>
Subtítulo creado con Canvacard

**Kind**: instance property of [<code>Welcomer</code>](#Welcomer)  
<a name="Welcomer+colorTitulo"></a>

### welcomer.colorTitulo : <code>string</code>
Color del título creado con Canvacard

**Kind**: instance property of [<code>Welcomer</code>](#Welcomer)  
<a name="Welcomer+colorSubtitulo"></a>

### welcomer.colorSubtitulo : <code>string</code>
Color del Subtítulo creado con Canvacard

**Kind**: instance property of [<code>Welcomer</code>](#Welcomer)  
<a name="Welcomer+colorCircle"></a>

### welcomer.colorCircle : <code>string</code>
Color del circulo

**Kind**: instance property of [<code>Welcomer</code>](#Welcomer)  
<a name="Welcomer+colorOverlay"></a>

### welcomer.colorOverlay : <code>number</code> \| <code>string</code>
Color del overlay

**Kind**: instance property of [<code>Welcomer</code>](#Welcomer)  
<a name="Welcomer+opacityOverlay"></a>

### welcomer.opacityOverlay : <code>string</code>
Opacidad del overlay

**Kind**: instance property of [<code>Welcomer</code>](#Welcomer)  
<a name="Welcomer+typeOverlay"></a>

### welcomer.typeOverlay : <code>string</code>
Tipo de overlay

**Kind**: instance property of [<code>Welcomer</code>](#Welcomer)  
<a name="Welcomer+colorBackground"></a>

### welcomer.colorBackground : <code>string</code>
Color del fondo

**Kind**: instance property of [<code>Welcomer</code>](#Welcomer)  
<a name="Welcomer+setColor"></a>

### welcomer.setColor(id, color) ⇒ [<code>Welcomer</code>](#Welcomer)
Establecer color

**Kind**: instance method of [<code>Welcomer</code>](#Welcomer)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>&quot;titulo&quot;</code> \| <code>&quot;titulo-border&quot;</code> \| <code>&quot;titulo-box&quot;</code> \| <code>&quot;subtitulo&quot;</code> \| <code>&quot;subtitulo-border&quot;</code> \| <code>&quot;subtitulo-box&quot;</code> \| <code>&quot;avatar&quot;</code> \| <code>&quot;background&quot;</code> \| <code>&quot;border&quot;</code> |  |
| color | <code>string</code> | Código de color HTML5 |

<a name="Welcomer+setAvatar"></a>

### welcomer.setAvatar(value) ⇒ [<code>Welcomer</code>](#Welcomer)
Valor del avatar

**Kind**: instance method of [<code>Welcomer</code>](#Welcomer)  

| Param | Type |
| --- | --- |
| value | <code>string</code> \| <code>Buffer</code> | 

<a name="Welcomer+setTitulo"></a>

### welcomer.setTitulo(value) ⇒ [<code>Welcomer</code>](#Welcomer)
Valor del título

**Kind**: instance method of [<code>Welcomer</code>](#Welcomer)  

| Param | Type |
| --- | --- |
| value | <code>string</code> | 

<a name="Welcomer+setSubtitulo"></a>

### welcomer.setSubtitulo(value) ⇒ [<code>Welcomer</code>](#Welcomer)
Valor del subtítulo

**Kind**: instance method of [<code>Welcomer</code>](#Welcomer)  

| Param | Type |
| --- | --- |
| value | <code>string</code> | 

<a name="Welcomer+setColorTitulo"></a>

### welcomer.setColorTitulo(value) ⇒ [<code>Welcomer</code>](#Welcomer)
Valor del color del título

**Kind**: instance method of [<code>Welcomer</code>](#Welcomer)  

| Param | Type |
| --- | --- |
| value | <code>string</code> | 

<a name="Welcomer+setColorSubtitulo"></a>

### welcomer.setColorSubtitulo(value) ⇒ [<code>Welcomer</code>](#Welcomer)
Valor del color del subtítulo

**Kind**: instance method of [<code>Welcomer</code>](#Welcomer)  

| Param | Type |
| --- | --- |
| value | <code>string</code> | 

<a name="Welcomer+setColorCircle"></a>

### welcomer.setColorCircle(value) ⇒ [<code>Welcomer</code>](#Welcomer)
Valor del color del círculo

**Kind**: instance method of [<code>Welcomer</code>](#Welcomer)  

| Param | Type |
| --- | --- |
| value | <code>string</code> | 

<a name="Welcomer+setColorOverlay"></a>

### welcomer.setColorOverlay(value) ⇒ [<code>Welcomer</code>](#Welcomer)
Valor del color del overlay

**Kind**: instance method of [<code>Welcomer</code>](#Welcomer)  

| Param | Type |
| --- | --- |
| value | <code>string</code> | 

<a name="Welcomer+setOpacityOverlay"></a>

### welcomer.setOpacityOverlay(value) ⇒ [<code>Welcomer</code>](#Welcomer)
Valor del color del overlay

**Kind**: instance method of [<code>Welcomer</code>](#Welcomer)  

| Param | Type |
| --- | --- |
| value | <code>number</code> \| <code>string</code> | 

<a name="Welcomer+setBackground"></a>

### welcomer.setBackground(type, [data])
Establecer imagen / color de fondo

**Kind**: instance method of [<code>Welcomer</code>](#Welcomer)  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>&quot;COLOR&quot;</code> \| <code>&quot;IMAGE&quot;</code> | Tipo de fondo |
| [data] | <code>string</code> \| <code>Buffer</code> | Color o imagen de fondo |

<a name="Welcomer+setTypeOverlay"></a>

### welcomer.setTypeOverlay(type)
Establecer rectangle / rounded de overlay

**Kind**: instance method of [<code>Welcomer</code>](#Welcomer)  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>&quot;RECTANGLE&quot;</code> \| <code>&quot;ROUNDED&quot;</code> | Tipo de fondo |

<a name="Welcomer+build"></a>

### welcomer.build(ops) ⇒ <code>Promise.&lt;Buffer&gt;</code>
Construye la tarjeta de bienvenida

**Kind**: instance method of [<code>Welcomer</code>](#Welcomer)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| ops | <code>object</code> |  | Fuentes |
| [ops.fontX] | <code>string</code> | <code>&quot;\&quot;MANROPE_BOLD\&quot;&quot;</code> | Familia tipográfica Bold |
| [ops.fontY] | <code>string</code> | <code>&quot;\&quot;MANROPE_REGULAR\&quot;&quot;</code> | Familia tipográfica regular |

<a name="Util"></a>

## Util
**Kind**: global class  

* [Util](#Util)
    * [new Util()](#new_Util_new)
    * [new Util()](#new_Util_new)
    * [.validateHex(hex)](#Util.validateHex) ⇒ <code>boolean</code>
    * [.discordTime(time)](#Util.discordTime) ⇒ <code>string</code>
    * [.formatTime(time)](#Util.formatTime) ⇒ <code>string</code>
    * [.shorten(text, len)](#Util.shorten) ⇒ <code>string</code>
    * [.toAbbrev(num)](#Util.toAbbrev) ⇒ <code>string</code> \| <code>string</code>
    * [.renderEmoji(ctx, msg, x, y)](#Util.renderEmoji) ⇒ <code>Promise.&lt;void&gt;</code>
    * [.formatHex(hex, alt)](#Util.formatHex) ⇒ <code>string</code>
    * [.invertColor(hex)](#Util.invertColor) ⇒ <code>string</code>
    * [.getAcronym(name)](#Util.getAcronym) ⇒ <code>string</code>
    * [.getLines(params, text, ctx, maxWidth)](#Util.getLines) ⇒ <code>Array.&lt;string&gt;</code>
    * [.validateHex(hex)](#Util.validateHex) ⇒ <code>boolean</code>
    * [.discordTime(time)](#Util.discordTime) ⇒ <code>string</code>
    * [.formatTime(time)](#Util.formatTime) ⇒ <code>string</code>
    * [.shorten(text, len)](#Util.shorten) ⇒ <code>string</code>
    * [.toAbbrev(num)](#Util.toAbbrev) ⇒ <code>string</code> \| <code>string</code>
    * [.renderEmoji(ctx, msg, x, y)](#Util.renderEmoji) ⇒ <code>Promise.&lt;void&gt;</code>
    * [.formatHex(hex, alt)](#Util.formatHex) ⇒ <code>string</code>
    * [.invertColor(hex)](#Util.invertColor) ⇒ <code>string</code>
    * [.getAcronym(name)](#Util.getAcronym) ⇒ <code>string</code>
    * [.getLines(params, text, ctx, maxWidth)](#Util.getLines) ⇒ <code>Array.&lt;string&gt;</code>

<a name="new_Util_new"></a>

### new Util()
Canvacard Util

<a name="new_Util_new"></a>

### new Util()
Canvacard Util

<a name="Util.validateHex"></a>

### Util.validateHex(hex) ⇒ <code>boolean</code>
Validates hex

**Kind**: static method of [<code>Util</code>](#Util)  

| Param | Type | Description |
| --- | --- | --- |
| hex | <code>string</code> | Hex code to validate |

<a name="Util.discordTime"></a>

### Util.discordTime(time) ⇒ <code>string</code>
Converts regular timestamp to discord like time

**Kind**: static method of [<code>Util</code>](#Util)  

| Param | Type | Description |
| --- | --- | --- |
| time | <code>Date</code> \| <code>number</code> | Timestamp to convert |

<a name="Util.formatTime"></a>

### Util.formatTime(time) ⇒ <code>string</code>
Formats time

**Kind**: static method of [<code>Util</code>](#Util)  

| Param | Type | Description |
| --- | --- | --- |
| time | <code>number</code> | Time to format |

<a name="Util.shorten"></a>

### Util.shorten(text, len) ⇒ <code>string</code>
Shorten text.

**Kind**: static method of [<code>Util</code>](#Util)  

| Param | Type | Description |
| --- | --- | --- |
| text | <code>string</code> | Text to shorten |
| len | <code>number</code> | Max Length |

<a name="Util.toAbbrev"></a>

### Util.toAbbrev(num) ⇒ <code>string</code> \| <code>string</code>
Converts numbers into units like `1K`, `1M`, `1B` etc.

**Kind**: static method of [<code>Util</code>](#Util)  

| Param | Type |
| --- | --- |
| num | <code>number</code> \| <code>string</code> | 

<a name="Util.renderEmoji"></a>

### Util.renderEmoji(ctx, msg, x, y) ⇒ <code>Promise.&lt;void&gt;</code>
Renders text with emoji

**Kind**: static method of [<code>Util</code>](#Util)  

| Param | Type | Description |
| --- | --- | --- |
| ctx | <code>CanvasRenderingContext2D</code> | CanvasRenderingContext2D |
| msg | <code>string</code> | Message |
| x | <code>number</code> | X |
| y | <code>number</code> | Y |

<a name="Util.formatHex"></a>

### Util.formatHex(hex, alt) ⇒ <code>string</code>
Returns formatted hex code

**Kind**: static method of [<code>Util</code>](#Util)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| hex | <code>string</code> |  | Hex code to format |
| alt | <code>string</code> | <code>&quot;#000000&quot;</code> | Alt color |

<a name="Util.invertColor"></a>

### Util.invertColor(hex) ⇒ <code>string</code>
Inverts hex color

**Kind**: static method of [<code>Util</code>](#Util)  

| Param | Type | Description |
| --- | --- | --- |
| hex | <code>string</code> | Hex color code to invert |

<a name="Util.getAcronym"></a>

### Util.getAcronym(name) ⇒ <code>string</code>
Returns acronym

**Kind**: static method of [<code>Util</code>](#Util)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | Name to parse acronym |

<a name="Util.getLines"></a>

### Util.getLines(params, text, ctx, maxWidth) ⇒ <code>Array.&lt;string&gt;</code>
Returns array of lines

**Kind**: static method of [<code>Util</code>](#Util)  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | Params |
| text | <code>string</code> | Text |
| ctx | <code>CanvasRenderingContext2D</code> | CanvasRenderingContext2D |
| maxWidth | <code>number</code> | Max width |

<a name="Util.validateHex"></a>

### Util.validateHex(hex) ⇒ <code>boolean</code>
Validates hex

**Kind**: static method of [<code>Util</code>](#Util)  

| Param | Type | Description |
| --- | --- | --- |
| hex | <code>string</code> | Hex code to validate |

<a name="Util.discordTime"></a>

### Util.discordTime(time) ⇒ <code>string</code>
Converts regular timestamp to discord like time

**Kind**: static method of [<code>Util</code>](#Util)  

| Param | Type | Description |
| --- | --- | --- |
| time | <code>Date</code> \| <code>number</code> | Timestamp to convert |

<a name="Util.formatTime"></a>

### Util.formatTime(time) ⇒ <code>string</code>
Formats time

**Kind**: static method of [<code>Util</code>](#Util)  

| Param | Type | Description |
| --- | --- | --- |
| time | <code>number</code> | Time to format |

<a name="Util.shorten"></a>

### Util.shorten(text, len) ⇒ <code>string</code>
Shorten text.

**Kind**: static method of [<code>Util</code>](#Util)  

| Param | Type | Description |
| --- | --- | --- |
| text | <code>string</code> | Text to shorten |
| len | <code>number</code> | Max Length |

<a name="Util.toAbbrev"></a>

### Util.toAbbrev(num) ⇒ <code>string</code> \| <code>string</code>
Converts numbers into units like `1K`, `1M`, `1B` etc.

**Kind**: static method of [<code>Util</code>](#Util)  

| Param | Type |
| --- | --- |
| num | <code>number</code> \| <code>string</code> | 

<a name="Util.renderEmoji"></a>

### Util.renderEmoji(ctx, msg, x, y) ⇒ <code>Promise.&lt;void&gt;</code>
Renders text with emoji

**Kind**: static method of [<code>Util</code>](#Util)  

| Param | Type | Description |
| --- | --- | --- |
| ctx | <code>CanvasRenderingContext2D</code> | CanvasRenderingContext2D |
| msg | <code>string</code> | Message |
| x | <code>number</code> | X |
| y | <code>number</code> | Y |

<a name="Util.formatHex"></a>

### Util.formatHex(hex, alt) ⇒ <code>string</code>
Returns formatted hex code

**Kind**: static method of [<code>Util</code>](#Util)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| hex | <code>string</code> |  | Hex code to format |
| alt | <code>string</code> | <code>&quot;#000000&quot;</code> | Alt color |

<a name="Util.invertColor"></a>

### Util.invertColor(hex) ⇒ <code>string</code>
Inverts hex color

**Kind**: static method of [<code>Util</code>](#Util)  

| Param | Type | Description |
| --- | --- | --- |
| hex | <code>string</code> | Hex color code to invert |

<a name="Util.getAcronym"></a>

### Util.getAcronym(name) ⇒ <code>string</code>
Returns acronym

**Kind**: static method of [<code>Util</code>](#Util)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | Name to parse acronym |

<a name="Util.getLines"></a>

### Util.getLines(params, text, ctx, maxWidth) ⇒ <code>Array.&lt;string&gt;</code>
Returns array of lines

**Kind**: static method of [<code>Util</code>](#Util)  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | Params |
| text | <code>string</code> | Text |
| ctx | <code>CanvasRenderingContext2D</code> | CanvasRenderingContext2D |
| maxWidth | <code>number</code> | Max width |

<a name="formatVariable"></a>

## formatVariable(prefix, variable) ⇒
Obtiene variables y tipos

**Kind**: global function  
**Returns**: La variable formateada  

| Param | Type | Description |
| --- | --- | --- |
| prefix | <code>object</code> | El tipo de variable |
| variable | <code>object</code> | La variable a cambiar |

<a name="formatVariable"></a>

## formatVariable(prefix, variable) ⇒
Obtiene variables y tipos

**Kind**: global function  
**Returns**: La variable formateada  

| Param | Type | Description |
| --- | --- | --- |
| prefix | <code>object</code> | El tipo de variable |
| variable | <code>object</code> | La variable a cambiar |

<a name="applyText"></a>

## applyText(canvas, text, defaultFontSize, width, font) ⇒
Obtiene variables y tipos

**Kind**: global function  
**Returns**: La variable formateada  

| Param | Type | Description |
| --- | --- | --- |
| canvas | <code>object</code> | El lienzo |
| text | <code>object</code> | El texto |
| defaultFontSize | <code>object</code> | El tamaño de píxel de fuente predeterminado |
| width | <code>object</code> | El ancho máximo del texto |
| font | <code>object</code> | La fuente del texto |

<a name="formatVariable"></a>

## formatVariable(prefix, variable) ⇒
Obtiene variables y tipos

**Kind**: global function  
**Returns**: La variable formateada  

| Param | Type | Description |
| --- | --- | --- |
| prefix | <code>object</code> | El tipo de variable |
| variable | <code>object</code> | La variable a cambiar |

<a name="ConvolutionMatrix"></a>

## ConvolutionMatrix : <code>object</code>
Matriz de convolución Canvacard

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| EDGES | <code>Array.&lt;number&gt;</code> | Edges Matrix |
| BLUR | <code>Array.&lt;number&gt;</code> | Blur Matrix |
| SHARPEN | <code>Array.&lt;number&gt;</code> | Sharpen Matrix |
| BURN | <code>Array.&lt;number&gt;</code> | Burn Matrix |

<a name="Plugins"></a>

## Plugins : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| circle | <code>function</code> | Complemento de círculo |
| convolute | <code>function</code> | Complemento convolute |
| rectangle | <code>function</code> | Complemento de rectángulo |
| round | <code>function</code> | Complemento redondo |
| abbrev | <code>function</code> | Complemento de abreviaturas |
| renderEmoji | <code>function</code> | Complemento de renderizado de emoji |

<a name="CanvacardRankData"></a>

## CanvacardRankData : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| width | <code>number</code> |  | Ancho de la tarjeta de rango |
| height | <code>number</code> |  | Altura de la tarjeta de rango |
| background | <code>object</code> |  | Datos de antecedentes de la tarjeta de rango |
| [background.type] | <code>&quot;image&quot;</code> \| <code>&quot;color&quot;</code> | <code>&quot;color&quot;</code> | Tipo de fondo |
| [background.image] | <code>string</code> \| <code>Buffer</code> | <code>&quot;\&quot;#23272A\&quot;&quot;</code> | Imagen de fondo (o color) |
| progressBar | <code>object</code> |  | Datos de la barra de progreso |
| [progressBar.rounded] | <code>boolean</code> | <code>true</code> | Si la barra de progreso debe redondearse |
| [progressBar.x] | <code>number</code> | <code>275.5</code> | Barra de progreso X |
| [progressBar.y] | <code>number</code> | <code>183.75</code> | Barra de progreso Y |
| [progressBar.height] | <code>number</code> | <code>37.5</code> | Altura de la barra de progreso |
| [progressBar.width] | <code>number</code> | <code>596.5</code> | Ancho de la barra de progreso |
| [progressBar.track] | <code>object</code> |  | Pista de la barra de progreso |
| [progressBar.track.color] | <code>string</code> | <code>&quot;\&quot;#484b4E\&quot;&quot;</code> | Color de la pista de la barra de progreso |
| [progressBar.bar] | <code>object</code> |  | Datos de la barra de progreso |
| [progressBar.bar.type] | <code>&quot;color&quot;</code> \| <code>&quot;gradient&quot;</code> | <code>&quot;color&quot;</code> | Tipo de barra de progreso |
| [progressBar.bar.color] | <code>string</code> \| <code>Array.&lt;string&gt;</code> | <code>&quot;\&quot;#FFFFFF\&quot;&quot;</code> | Color de la barra de la barra de progreso |
| overlay | <code>object</code> |  | Superposición de la barra de progreso |
| [overlay.display] | <code>boolean</code> | <code>true</code> | Si debería mostrar superposición |
| [overlay.level] | <code>number</code> | <code>0.5</code> | Nivel de opacidad de superposición |
| [overlay.color] | <code>string</code> | <code>&quot;\&quot;#333640\&quot;&quot;</code> | Superposición de color de fondo |
| avatar | <code>object</code> |  | Datos de avatar de la tarjeta de rango |
| [avatar.source] | <code>string</code> \| <code>Buffer</code> | <code>null</code> | Fuente de avatar |
| [avatar.x] | <code>number</code> | <code>70</code> | X |
| [avatar.y] | <code>number</code> | <code>50</code> | Y |
| [avatar.height] | <code>number</code> | <code>180</code> | altura |
| [avatar.width] | <code>number</code> | <code>180</code> | ancho |
| status | <code>object</code> |  | Estado de la tarjeta de rango |
| [status.width] | <code>number</code> | <code>5</code> | Ancho de estado |
| [status.type] | <code>&quot;online&quot;</code> \| <code>&quot;dnd&quot;</code> \| <code>&quot;idle&quot;</code> \| <code>&quot;offline&quot;</code> \| <code>&quot;streaming&quot;</code> |  | Tipo de estado |
| [status.color] | <code>string</code> | <code>&quot;\&quot;#43B581\&quot;&quot;</code> | Color de estado |
| [status.circle] | <code>boolean</code> | <code>false</code> | ¿Estado circular? |
| rank | <code>object</code> |  | Datos de rango de la tarjeta de clasificación |
| [rank.display] | <code>boolean</code> | <code>true</code> | Si debe mostrar rango |
| [rank.data] | <code>number</code> | <code>1</code> | El rango |
| [rank.textColor] | <code>string</code> | <code>&quot;\&quot;#FFFFFF\&quot;&quot;</code> | Rango de color del texto |
| [rank.color] | <code>string</code> | <code>&quot;\&quot;#F3F3F3\&quot;&quot;</code> | Color de rango |
| [rank.displayText] | <code>string</code> | <code>&quot;\&quot;RANK\&quot;&quot;</code> | Texto de visualización de rango |
| level | <code>object</code> |  | Datos de nivel de tarjeta de rango |
| [level.display] | <code>boolean</code> | <code>true</code> | Si debería mostrar el nivel |
| [level.data] | <code>number</code> | <code>1</code> | El nivel |
| [level.textColor] | <code>string</code> | <code>&quot;\&quot;#FFFFFF\&quot;&quot;</code> | color de texto de nivel |
| [level.color] | <code>string</code> | <code>&quot;\&quot;#F3F3F3\&quot;&quot;</code> | color de nivel |
| [level.displayText] | <code>string</code> | <code>&quot;\&quot;LEVEL\&quot;&quot;</code> | texto de visualización de nivel |
| previousRankXP | <code>object</code> |  | tarjeta xp de rango anterior opcional |
| [previousRankXP.data] | <code>number</code> | <code></code> | xp de rango anterior opcional |
| [previousRankXP.color] | <code>string</code> | <code>null</code> | Tabla de rango de color de rango xp anterior opcional |
| currentXP | <code>object</code> |  | Tarjeta de rango xp actual |
| [currentXP.data] | <code>number</code> | <code>0</code> | XP actual |
| [currentXP.color] | <code>string</code> | <code>&quot;\&quot;#FFFFFF\&quot;&quot;</code> | Carta de rango color xp actual |
| requiredXP | <code>object</code> |  | Tarjeta de rango requerida xp |
| [requiredXP.data] | <code>number</code> | <code>0</code> | requerido xp |
| [requiredXP.color] | <code>string</code> | <code>&quot;\&quot;#FFFFFF\&quot;&quot;</code> | Se requiere tarjeta de rango xp color |
| username | <code>object</code> |  | Datos de nombre de usuario |
| [username.name] | <code>string</code> | <code>null</code> | Nombre de usuario de la tarjeta de clasificación |
| [username.color] | <code>string</code> | <code>&quot;\&quot;#FFFFFF\&quot;&quot;</code> | Color de nombre de usuario de la tarjeta de rango |
| [renderEmojis] | <code>boolean</code> | <code>true</code> | Si debería renderizar emojis |

<a name="SpotifyDataBG"></a>

## SpotifyDataBG : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| type | <code>number</code> | Tipo de fondo |
| data | <code>string</code> \| <code>Buffer</code> | Datos de fondo |

<a name="SpotifyProgressBarData"></a>

## SpotifyProgressBarData : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| bgColor | <code>string</code> | Barra de progreso bg color |
| color | <code>string</code> | Barra de progreso bg color |

