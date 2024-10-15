## Classes

<dl>
<dt><a href="#Canvacard">Canvacard</a></dt>
<dd><p>Canvacard Generador De Memes</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#ConvolutionMatrix">ConvolutionMatrix</a> : <code>object</code></dt>
<dd><p>Matriz de convolución Canvacard</p>
</dd>
</dl>

<a name="Canvacard"></a>

## Canvacard
Canvacard Generador De Memes

**Kind**: global class  

* [Canvacard](#Canvacard)
    * [.CONVOLUTION_MATRIX](#Canvacard.CONVOLUTION_MATRIX) : [<code>ConvolutionMatrix</code>](#ConvolutionMatrix)
    * [.Util](#Canvacard.Util) : <code>Util</code>
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

<a name="Canvacard.CONVOLUTION_MATRIX"></a>

### Canvacard.CONVOLUTION\_MATRIX : [<code>ConvolutionMatrix</code>](#ConvolutionMatrix)
Datos de matriz para **Canvacard.convolute()**

**Kind**: static property of [<code>Canvacard</code>](#Canvacard)  
<a name="Canvacard.Util"></a>

### Canvacard.Util : <code>Util</code>
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

