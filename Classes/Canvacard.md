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
    * [new Canvacard()](#new_Canvacard_new)
    * [.CONVOLUTION_MATRIX](#Canvacard.CONVOLUTION_MATRIX) : [<code>ConvolutionMatrix</code>](#ConvolutionMatrix)
    * [.trigger(image)](#Canvacard.trigger) ⇒ <code>Promise.&lt;Buffer&gt;</code>
    * [.invert(image)](#Canvacard.invert) ⇒ <code>Promise.&lt;Buffer&gt;</code>
    * [.sepia(image)](#Canvacard.sepia) ⇒ <code>Promise.&lt;Buffer&gt;</code>
    * [.greyscale(image)](#Canvacard.greyscale) ⇒ <code>Promise.&lt;Buffer&gt;</code>
    * [.brightness(image, amount)](#Canvacard.brightness) ⇒ <code>Promise.&lt;Buffer&gt;</code>
    * [.darkness(image, amount)](#Canvacard.darkness) ⇒ <code>Promise.&lt;Buffer&gt;</code>
    * [.threshold(img, amount)](#Canvacard.threshold) ⇒ <code>Promise.&lt;Buffer&gt;</code>
    * [.convolute(img, matrix, opaque)](#Canvacard.convolute) ⇒ <code>Promise.&lt;Buffer&gt;</code>
    * [.pixelate(image, pixels)](#Canvacard.pixelate) ⇒ <code>Promise.&lt;Buffer&gt;</code>
    * [.sharpen(image, lvl)](#Canvacard.sharpen) ⇒ <code>Promise.&lt;Buffer&gt;</code>
    * [.burn(image, lvl)](#Canvacard.burn) ⇒ <code>Promise.&lt;Buffer&gt;</code>
    * [.circle(image)](#Canvacard.circle) ⇒ <code>Promise.&lt;Buffer&gt;</code>
    * [.fuse(image1, image2)](#Canvacard.fuse) ⇒ <code>Promise.&lt;Buffer&gt;</code>
    * [.resize(image, width, height)](#Canvacard.resize) ⇒ <code>Promise.&lt;Buffer&gt;</code>
    * [.kiss(image1, image2)](#Canvacard.kiss) ⇒ <code>Promise.&lt;Buffer&gt;</code>
    * [.spank(image1, image2)](#Canvacard.spank) ⇒ <code>Promise.&lt;Buffer&gt;</code>
    * [.slap(image1, image2)](#Canvacard.slap) ⇒ <code>Promise.&lt;Buffer&gt;</code>
    * [.facepalm(image)](#Canvacard.facepalm) ⇒ <code>Promise.&lt;Buffer&gt;</code>
    * [.colorfy(image, color)](#Canvacard.colorfy) ⇒ <code>Promise.&lt;Buffer&gt;</code>
    * [.distracted(image1, image2, image3)](#Canvacard.distracted) ⇒ <code>Promise.&lt;Buffer&gt;</code>
    * [.jail(image, greyscale)](#Canvacard.jail) ⇒ <code>Promise.&lt;Buffer&gt;</code>
    * [.bed(image1, image2)](#Canvacard.bed) ⇒ <code>Promise.&lt;Buffer&gt;</code>
    * [.delete(image, dark)](#Canvacard.delete) ⇒ <code>Promise.&lt;Buffer&gt;</code>
    * [.gradient(colorFrom, colorTo, width, height)](#Canvacard.gradient) ⇒ <code>Promise.&lt;Buffer&gt;</code>
    * [.quote(options, [font])](#Canvacard.quote) ⇒ <code>Promise.&lt;Buffer&gt;</code>
    * [.phub(options, [font])](#Canvacard.phub) ⇒ <code>Promise.&lt;Buffer&gt;</code>
    * [.wanted(image)](#Canvacard.wanted) ⇒ <code>Promise.&lt;Buffer&gt;</code>
    * [.wasted(image)](#Canvacard.wasted) ⇒ <code>Promise.&lt;Buffer&gt;</code>
    * [.youtube(ops)](#Canvacard.youtube) ⇒ <code>Promise.&lt;Buffer&gt;</code>
    * [.write(data, name)](#Canvacard.write) ⇒ <code>void</code>
    * [.reply(options)](#Canvacard.reply) ⇒ <code>Promise.&lt;Buffer&gt;</code>
    * [.__wait(dur)](#Canvacard.__wait) ⇒ <code>Promise.&lt;void&gt;</code>

<a name="new_Canvacard_new"></a>

### new Canvacard()
**Example**  
```js
    const canvacard = require("canvacard");
    canvacard.Canvas.trigger("./image.png")
    .then(triggered => {
      canvacard.write(triggered, "triggered.gif");
    })
    .catch(console.error);```
<a name="Canvacard.CONVOLUTION_MATRIX"></a>

### Canvacard.CONVOLUTION\_MATRIX : [<code>ConvolutionMatrix</code>](#ConvolutionMatrix)
Datos de matriz para **Canvacard.convolute()**

**Kind**: static property of [<code>Canvacard</code>](#Canvacard)  
<a name="Canvacard.trigger"></a>

### Canvacard.trigger(image) ⇒ <code>Promise.&lt;Buffer&gt;</code>
Este método se puede utilizar para aplicar el efecto Disparado en la imagen.

**Kind**: static method of [<code>Canvacard</code>](#Canvacard)  
**Returns**: <code>Promise.&lt;Buffer&gt;</code> - Imagen "triggered"  
**Throws**:

- <code>APIError</code> Si no se proporciona la imagen


| Param | Type | Description |
| --- | --- | --- |
| image | <code>string</code> \| <code>Buffer</code> | Imagen para activar |

**Example**  
```js
    const canvacard = require("canvacard");
    canvacard.Canvas.trigger("./image.png")
    .then(triggered => {
      canvacard.write(triggered, "triggered.gif");
    })
    .catch(console.error);```
<a name="Canvacard.invert"></a>

### Canvacard.invert(image) ⇒ <code>Promise.&lt;Buffer&gt;</code>
Invierte el color de la imagen

**Kind**: static method of [<code>Canvacard</code>](#Canvacard)  
**Returns**: <code>Promise.&lt;Buffer&gt;</code> - Imagen invertida  
**Throws**:

- <code>APIError</code> Si no se proporciona la imagen


| Param | Type | Description |
| --- | --- | --- |
| image | <code>string</code> \| <code>Buffer</code> | Imagen para invertir |

**Example**  
```js
    const canvacard = require("canvacard");
    canvacard.Canvas.invert("./image.png")
    .then(inverted => {
      canvacard.write(inverted, "inverted.png");
    })
    .catch(console.error);```
<a name="Canvacard.sepia"></a>

### Canvacard.sepia(image) ⇒ <code>Promise.&lt;Buffer&gt;</code>
Aplicar lavado sepia en img

**Kind**: static method of [<code>Canvacard</code>](#Canvacard)  
**Returns**: <code>Promise.&lt;Buffer&gt;</code> - Imagen sep  
**Throws**:

- <code>APIError</code> Si no se proporciona la imagen


| Param | Type | Description |
| --- | --- | --- |
| image | <code>string</code> \| <code>Buffer</code> | Imagen |

**Example**  
```js
    const canvacard = require("canvacard");
    canvacard.Canvas.sepia("./image.png")
    .then(sepia => {
      canvacard.write(sepia, "sepia.png");
    })
    .catch(console.error);```
<a name="Canvacard.greyscale"></a>

### Canvacard.greyscale(image) ⇒ <code>Promise.&lt;Buffer&gt;</code>
Efecto de escala de grises sobre la imagen

**Kind**: static method of [<code>Canvacard</code>](#Canvacard)  
**Returns**: <code>Promise.&lt;Buffer&gt;</code> - Imagen en escala de grises  
**Throws**:

- <code>APIError</code> Si no se proporciona la imagen


| Param | Type | Description |
| --- | --- | --- |
| image | <code>string</code> \| <code>Buffer</code> | Imagen |

**Example**  
```js
    const canvacard = require("canvacard");
    canvacard.Canvas.greyscale("./image.png")
    .then(greyscale => {
      canvacard.write(greyscale, "greyscale.png");
    })
    .catch(console.error);```
<a name="Canvacard.brightness"></a>

### Canvacard.brightness(image, amount) ⇒ <code>Promise.&lt;Buffer&gt;</code>
Editar el brillo de la imagen

**Kind**: static method of [<code>Canvacard</code>](#Canvacard)  
**Returns**: <code>Promise.&lt;Buffer&gt;</code> - Imagen con brillo  
**Throws**:

- <code>APIError</code> Si no se proporciona la imagen o la cantidad no es un número


| Param | Type | Description |
| --- | --- | --- |
| image | <code>string</code> \| <code>Buffer</code> | Imagen |
| amount | <code>number</code> | Cantidad de brillo |

**Example**  
```js
    const canvacard = require("canvacard");
    canvacard.Canvas.brightness("./image.png", 50)
    .then(brightened => {
      canvacard.write(brightened, "brightened.png");
    })
    .catch(console.error);```
<a name="Canvacard.darkness"></a>

### Canvacard.darkness(image, amount) ⇒ <code>Promise.&lt;Buffer&gt;</code>
Editar la oscuridad de la imagen

**Kind**: static method of [<code>Canvacard</code>](#Canvacard)  
**Returns**: <code>Promise.&lt;Buffer&gt;</code> - Imagen oscura  
**Throws**:

- <code>APIError</code> Si no se proporciona la imagen o la cantidad no es un número


| Param | Type | Description |
| --- | --- | --- |
| image | <code>string</code> \| <code>Buffer</code> | Imagen |
| amount | <code>number</code> | Cantidad de oscuridad |

**Example**  
```js
    const canvacard = require("canvacard");
    canvacard.Canvas.darkness("./image.png", 50)
    .then(darkened => {
      canvacard.write(darkened, "darkened.png");
    })
    .catch(console.error);```
<a name="Canvacard.threshold"></a>

### Canvacard.threshold(img, amount) ⇒ <code>Promise.&lt;Buffer&gt;</code>
Umbral de imagen

**Kind**: static method of [<code>Canvacard</code>](#Canvacard)  
**Returns**: <code>Promise.&lt;Buffer&gt;</code> - Imagen umbralizada  
**Throws**:

- <code>APIError</code> Si no se proporciona la imagen o la cantidad no es un número


| Param | Type | Description |
| --- | --- | --- |
| img | <code>string</code> \| <code>Buffer</code> | Imagen |
| amount | <code>number</code> | Cantidad límite |

**Example**  
```js
    const canvacard = require("canvacard");
    canvacard.Canvas.threshold("./image.png", 128)
    .then(thresholded => {
      canvacard.write(thresholded, "thresholded.png");
    })
    .catch(console.error);```
<a name="Canvacard.convolute"></a>

### Canvacard.convolute(img, matrix, opaque) ⇒ <code>Promise.&lt;Buffer&gt;</code>
Convolución de la imagen

**Kind**: static method of [<code>Canvacard</code>](#Canvacard)  
**Returns**: <code>Promise.&lt;Buffer&gt;</code> - Imagen convolucionada  
**Throws**:

- <code>APIError</code> Si no se proporciona la imagen o la matriz no es un Array


| Param | Type | Description |
| --- | --- | --- |
| img | <code>string</code> \| <code>Buffer</code> | Imagen |
| matrix | <code>Array.&lt;number&gt;</code> | Matriz de convolución |
| opaque | <code>boolean</code> | Si la convolución debe ser opaca |

**Example**  
```js
    const canvacard = require("canvacard");
    const matrix = [0, -1, 0, -1, 5, -1, 0, -1, 0];  // Ejemplo de matriz de convolución
    canvacard.Canvas.convolute("./image.png", matrix, true)
    .then(convoluted => {
      canvacard.write(convoluted, "convoluted.png");
    })
    .catch(console.error);```
<a name="Canvacard.pixelate"></a>

### Canvacard.pixelate(image, pixels) ⇒ <code>Promise.&lt;Buffer&gt;</code>
Pixelar

**Kind**: static method of [<code>Canvacard</code>](#Canvacard)  
**Returns**: <code>Promise.&lt;Buffer&gt;</code> - Imagen pixelada  
**Throws**:

- <code>APIError</code> Si no se proporciona la imagen o los píxeles no son un número


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| image | <code>string</code> \| <code>Buffer</code> |  | Imagen para pixelar |
| pixels | <code>number</code> | <code>5</code> | Pixeles |

**Example**  
```js
    const canvacard = require("canvacard");
    canvacard.Canvas.pixelate("./image.png", 5)
    .then(pixelated => {
      canvacard.write(pixelated, "pixelated.png");
    })
    .catch(console.error);
<a name="Canvacard.sharpen"></a>

### Canvacard.sharpen(image, lvl) ⇒ <code>Promise.&lt;Buffer&gt;</code>
Agudizar una imagen

**Kind**: static method of [<code>Canvacard</code>](#Canvacard)  
**Returns**: <code>Promise.&lt;Buffer&gt;</code> - Imagen enfocada  
**Throws**:

- <code>APIError</code> Si no se proporciona la imagen o el nivel no es un número


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| image | <code>string</code> \| <code>Buffer</code> |  | Imagen para enfocar |
| lvl | <code>number</code> | <code>1</code> | intensidad de la nitidez |

**Example**  
```js
    const canvacard = require("canvacard");
    canvacard.Canvas.sharpen("./image.png", 1)
    .then(sharpened => {
      canvacard.write(sharpened, "sharpened.png");
    })
    .catch(console.error);```
<a name="Canvacard.burn"></a>

### Canvacard.burn(image, lvl) ⇒ <code>Promise.&lt;Buffer&gt;</code>
Aplica efecto de quemado en una imagen.

**Kind**: static method of [<code>Canvacard</code>](#Canvacard)  
**Returns**: <code>Promise.&lt;Buffer&gt;</code> - Imagen quemada  
**Throws**:

- <code>APIError</code> Si no se proporciona la imagen o el nivel no es un número


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| image | <code>string</code> \| <code>Buffer</code> |  | Fuente de imagen |
| lvl | <code>number</code> | <code>1</code> | intensidad |

**Example**  
```js
    const canvacard = require("canvacard");
    canvacard.Canvas.burn("./image.png", 1)
    .then(burned => {
      canvacard.write(burned, "burned.png");
    })
    .catch(console.error);```
<a name="Canvacard.circle"></a>

### Canvacard.circle(image) ⇒ <code>Promise.&lt;Buffer&gt;</code>
Crea una imagen circular

**Kind**: static method of [<code>Canvacard</code>](#Canvacard)  
**Returns**: <code>Promise.&lt;Buffer&gt;</code> - Imagen circular  
**Throws**:

- <code>APIError</code> Si no se proporciona la imagen


| Param | Type | Description |
| --- | --- | --- |
| image | <code>string</code> \| <code>Buffer</code> | Fuente de imagen |

**Example**  
```js
    const canvacard = require("canvacard");
    canvacard.Canvas.circle("./image.png")
    .then(circled => {
      canvacard.write(circled, "circled.png");
    })
    .catch(console.error);```
<a name="Canvacard.fuse"></a>

### Canvacard.fuse(image1, image2) ⇒ <code>Promise.&lt;Buffer&gt;</code>
Fusiona dos imágenes

**Kind**: static method of [<code>Canvacard</code>](#Canvacard)  
**Returns**: <code>Promise.&lt;Buffer&gt;</code> - Imagen fusionada  
**Throws**:

- <code>APIError</code> Si no se proporciona la imagen


| Param | Type | Description |
| --- | --- | --- |
| image1 | <code>string</code> \| <code>Buffer</code> | Primera imagen |
| image2 | <code>string</code> \| <code>Buffer</code> | Segunda imagen |

**Example**  
```js
    const canvacard = require("canvacard");
    canvacard.Canvas.fuse("./image1.png", "./image2.png")
      .then(fused => {
      canvacard.write(fused, "fused.png");
    })
    .catch(console.error);```
<a name="Canvacard.resize"></a>

### Canvacard.resize(image, width, height) ⇒ <code>Promise.&lt;Buffer&gt;</code>
Cambiar el tamaño de una imagen

**Kind**: static method of [<code>Canvacard</code>](#Canvacard)  
**Returns**: <code>Promise.&lt;Buffer&gt;</code> - Imagen redimensionada  
**Throws**:

- <code>APIError</code> Si no se proporciona la imagen


| Param | Type | Description |
| --- | --- | --- |
| image | <code>string</code> \| <code>Buffer</code> | Fuente de imagen |
| width | <code>number</code> | ancho |
| height | <code>number</code> | altura |

**Example**  
```js
    const canvacard = require("canvacard");
    canvacard.Canvas.resize("./image.png", 500, 500)
    .then(resized => {
      canvacard.write(resized, "resized.png");
    })
    .catch(console.error);```
<a name="Canvacard.kiss"></a>

### Canvacard.kiss(image1, image2) ⇒ <code>Promise.&lt;Buffer&gt;</code>
Besarse ( ͡° ͜ʖ ͡°)

**Kind**: static method of [<code>Canvacard</code>](#Canvacard)  
**Returns**: <code>Promise.&lt;Buffer&gt;</code> - Imagen de beso  
**Throws**:

- <code>APIError</code> Si no se proporciona la imagen


| Param | Type | Description |
| --- | --- | --- |
| image1 | <code>string</code> \| <code>Buffer</code> | Primera imagen |
| image2 | <code>string</code> \| <code>Buffer</code> | Segunda imagen |

**Example**  
```js
    const canvacard = require("canvacard");
    canvacard.Canvas.kiss("./image1.png", "./image2.png")
    .then(kissed => {
      canvacard.write(kissed, "kissed.png");
    })
    .catch(console.error);```
<a name="Canvacard.spank"></a>

### Canvacard.spank(image1, image2) ⇒ <code>Promise.&lt;Buffer&gt;</code>
Azotar a alguien ( ͡° ͜ʖ ͡°)

**Kind**: static method of [<code>Canvacard</code>](#Canvacard)  
**Returns**: <code>Promise.&lt;Buffer&gt;</code> - Imagen de "spank"  
**Throws**:

- <code>APIError</code> Si no se proporciona la imagen


| Param | Type | Description |
| --- | --- | --- |
| image1 | <code>string</code> \| <code>Buffer</code> | Primera imagen |
| image2 | <code>string</code> \| <code>Buffer</code> | Segunda imagen |

**Example**  
```js
    const canvacard = require("canvacard");
    canvacard.Canvas.spank("./image1.png", "./image2.png")
    .then(spanked => {
      canvacard.write(spanked, "spanked.png");
    })
    .catch(console.error);```
<a name="Canvacard.slap"></a>

### Canvacard.slap(image1, image2) ⇒ <code>Promise.&lt;Buffer&gt;</code>
Abofetear a alguien ( ͡° ͜ʖ ͡°)

**Kind**: static method of [<code>Canvacard</code>](#Canvacard)  
**Returns**: <code>Promise.&lt;Buffer&gt;</code> - Imagen de "slap"  
**Throws**:

- <code>APIError</code> Si no se proporciona la imagen


| Param | Type | Description |
| --- | --- | --- |
| image1 | <code>string</code> \| <code>Buffer</code> | Primera imagen |
| image2 | <code>string</code> \| <code>Buffer</code> | Segunda imagen |

**Example**  
```js
    const canvacard = require("canvacard");
    canvacard.Canvas.slap("./image1.png", "./image2.png")
    .then(slap => {
      canvacard.write(slap, "slap.png");
    })
    .catch(console.error);```
<a name="Canvacard.facepalm"></a>

### Canvacard.facepalm(image) ⇒ <code>Promise.&lt;Buffer&gt;</code>
facepalm

**Kind**: static method of [<code>Canvacard</code>](#Canvacard)  
**Returns**: <code>Promise.&lt;Buffer&gt;</code> - Imagen de facepalm  
**Throws**:

- <code>APIError</code> Si no se proporciona la imagen


| Param | Type | Description |
| --- | --- | --- |
| image | <code>string</code> \| <code>Buffer</code> | Fuente de imagen |

**Example**  
```js
    const canvacard = require("canvacard");
    canvacard.Canvas.facepalm("./image.png")
    .then(facepalm => {
      canvacard.write(facepalm, "facepalm.png");
    })
    .catch(console.error);```
<a name="Canvacard.colorfy"></a>

### Canvacard.colorfy(image, color) ⇒ <code>Promise.&lt;Buffer&gt;</code>
Actualiza el color de la imagen

**Kind**: static method of [<code>Canvacard</code>](#Canvacard)  
**Returns**: <code>Promise.&lt;Buffer&gt;</code> - Imagen coloreada  
**Throws**:

- <code>APIError</code> Si no se proporciona la imagen


| Param | Type | Description |
| --- | --- | --- |
| image | <code>string</code> \| <code>Buffer</code> | Fuente de imagen |
| color | <code>string</code> | Color HTML5 |

**Example**  
```js
    const canvacard = require("canvacard");
    canvacard.Canvas.colorfy("./image.png", "#FF0000")
    .then(colorfy => {
      canvacard.write(colorfy, "colorfy.png");
    })
    .catch(console.error);```
<a name="Canvacard.distracted"></a>

### Canvacard.distracted(image1, image2, image3) ⇒ <code>Promise.&lt;Buffer&gt;</code>
Novio distraído

**Kind**: static method of [<code>Canvacard</code>](#Canvacard)  
**Returns**: <code>Promise.&lt;Buffer&gt;</code> - Imagen de distracción  
**Throws**:

- <code>APIError</code> Si no se proporciona la primera imagen


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| image1 | <code>string</code> \| <code>Buffer</code> |  | Rostro para la niña en color rojo. |
| image2 | <code>string</code> \| <code>Buffer</code> |  | Cara para el chico |
| image3 | <code>string</code> \| <code>Buffer</code> | <code>null</code> | Cara para la otra chica [opcional] |

**Example**  
```js
    const canvacard = require("canvacard");
    canvacard.Canvas.distracted("./image1.png", "./image2.png", "./image3.png")
    .then(distracted => {
      canvacard.write(distracted, "distracted.png");
    })
    .catch(console.error);```
<a name="Canvacard.jail"></a>

### Canvacard.jail(image, greyscale) ⇒ <code>Promise.&lt;Buffer&gt;</code>
Celda

**Kind**: static method of [<code>Canvacard</code>](#Canvacard)  
**Returns**: <code>Promise.&lt;Buffer&gt;</code> - Imagen de la celda  
**Throws**:

- <code>APIError</code> Si no se proporciona la imagen


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| image | <code>string</code> \| <code>Buffer</code> |  | Fuente de imagen |
| greyscale | <code>boolean</code> | <code>false</code> | Si debe ser una imagen en escala de grises |

**Example**  
```js
    const canvacard = require("canvacard");
    canvacard.Canvas.jail("./image.png")
    .then(jail => {
      canvacard.write(jail, "jail.png");
    })
    .catch(console.error);```
<a name="Canvacard.bed"></a>

### Canvacard.bed(image1, image2) ⇒ <code>Promise.&lt;Buffer&gt;</code>
Cama

**Kind**: static method of [<code>Canvacard</code>](#Canvacard)  
**Returns**: <code>Promise.&lt;Buffer&gt;</code> - Imagen de cama  
**Throws**:

- <code>APIError</code> Si no se proporciona la imagen


| Param | Type | Description |
| --- | --- | --- |
| image1 | <code>string</code> \| <code>Buffer</code> | Primera imagen |
| image2 | <code>string</code> \| <code>Buffer</code> | Segunda imagen |

**Example**  
```js
    const canvacard = require("canvacard");
    canvacard.Canvas.bed("./image1.png", "./image2.png")
    .then(bed => {
      canvacard.write(bed, "bed.png");
    })
    .catch(console.error);```
<a name="Canvacard.delete"></a>

### Canvacard.delete(image, dark) ⇒ <code>Promise.&lt;Buffer&gt;</code>
Borrar

**Kind**: static method of [<code>Canvacard</code>](#Canvacard)  
**Returns**: <code>Promise.&lt;Buffer&gt;</code> - Imagen eliminada  
**Throws**:

- <code>APIError</code> Si no se proporciona la imagen


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| image | <code>string</code> \| <code>Buffer</code> |  | Fuente de imagen |
| dark | <code>boolean</code> | <code>false</code> | Si la imagen debe estar en modo oscuro |

**Example**  
```js
    const canvacard = require("canvacard");
    canvacard.Canvas.delete("./image.png")
    .then(deleted => {
      canvacard.write(deleted, "deleted.png");
    })
    .catch(console.error);```
<a name="Canvacard.gradient"></a>

### Canvacard.gradient(colorFrom, colorTo, width, height) ⇒ <code>Promise.&lt;Buffer&gt;</code>
Crea degradado

**Kind**: static method of [<code>Canvacard</code>](#Canvacard)  
**Returns**: <code>Promise.&lt;Buffer&gt;</code> - Imagen degradada  
**Throws**:

- <code>APIError</code> Si no se proporciona el color inicial o final


| Param | Type | Description |
| --- | --- | --- |
| colorFrom | <code>string</code> | Color inicial |
| colorTo | <code>string</code> | Color final |
| width | <code>number</code> | Ancho de la imagen |
| height | <code>number</code> | Altura de imagen |

**Example**  
```js
    const canvacard = require("canvacard");
    canvacard.Canvas.gradient("#FF0000", "#0000FF", 500, 500)
    .then(gradient => {
      canvacard.write(gradient, "gradient.png");
    })
    .catch(console.error);```
<a name="Canvacard.quote"></a>

### Canvacard.quote(options, [font]) ⇒ <code>Promise.&lt;Buffer&gt;</code>
Cita falsa

**Kind**: static method of [<code>Canvacard</code>](#Canvacard)  
**Returns**: <code>Promise.&lt;Buffer&gt;</code> - Imagen de cita falsa  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| options | <code>object</code> |  | Opciones |
| [options.image] | <code>Buffer</code> \| <code>string</code> |  | Imagen |
| [options.message] | <code>string</code> |  | Mensaje |
| [options.username] | <code>string</code> |  | Nombre de usuario |
| [options.color] | <code>string</code> |  | Color |
| [font] | <code>string</code> | <code>&quot;\&quot;Arial\&quot;&quot;</code> | Fuente de texto para la tarjeta |

**Example**  
```js
    const canvacard = require("canvacard");
    canvacard.Canvas.quote({ image: "./image.png", message: "¡Esto es increíble!", username: "Clyde", color: "#FFFFFF" })
    .then(quote => {
      canvacard.write(quote, "quote.png");
    })
    .catch(console.error);```
<a name="Canvacard.phub"></a>

### Canvacard.phub(options, [font]) ⇒ <code>Promise.&lt;Buffer&gt;</code>
Comentario de PornHub

**Kind**: static method of [<code>Canvacard</code>](#Canvacard)  
**Returns**: <code>Promise.&lt;Buffer&gt;</code> - Imagen de comentario de PornHub  
**Throws**:

- <code>APIError</code> Si no se proporciona el nombre de usuario, el mensaje o la imagen


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| options | <code>Object</code> |  | Opciones |
| [options.username] | <code>String</code> |  | Nombre de usuario |
| [options.message] | <code>String</code> |  | Comentario |
| [options.image] | <code>String</code> \| <code>Buffer</code> |  | Imagen |
| [font] | <code>string</code> | <code>&quot;\&quot;Arial\&quot;&quot;</code> | Fuente de texto para la tarjeta |

**Example**  
```js
    const canvacard = require("canvacard");
    canvacard.Canvas.phub({ username: "Clyde", message: "¡Esto es increíble!", image: "./image.png" })
    .then(phub => {
      canvacard.write(phub, "phub.png");
    })
    .catch(console.error);```
<a name="Canvacard.wanted"></a>

### Canvacard.wanted(image) ⇒ <code>Promise.&lt;Buffer&gt;</code>
Wanted

**Kind**: static method of [<code>Canvacard</code>](#Canvacard)  
**Returns**: <code>Promise.&lt;Buffer&gt;</code> - Imagen de "wanted"  
**Throws**:

- <code>APIError</code> Si no se proporciona la imagen


| Param | Type | Description |
| --- | --- | --- |
| image | <code>string</code> \| <code>Buffer</code> | Fuente de imagen |

**Example**  
```js
    const canvacard = require("canvacard");
    canvacard.Canvas.wanted("./image.png")
    .then(wanted => {
      canvacard.write(wanted, "wanted.png");
    })
    .catch(console.error);```
<a name="Canvacard.wasted"></a>

### Canvacard.wasted(image) ⇒ <code>Promise.&lt;Buffer&gt;</code>
Wasted

**Kind**: static method of [<code>Canvacard</code>](#Canvacard)  
**Returns**: <code>Promise.&lt;Buffer&gt;</code> - Imagen de "wasted"  
**Throws**:

- <code>APIError</code> Si no se proporciona la imagen


| Param | Type | Description |
| --- | --- | --- |
| image | <code>string</code> \| <code>Buffer</code> | Fuente de imagen |

**Example**  
```js
    const canvacard = require("canvacard");
    canvacard.Canvas.wasted("./image.png")
    .then(wasted => {
      canvacard.write(wasted, "wasted.png");
    })
    .catch(console.error);```
<a name="Canvacard.youtube"></a>

### Canvacard.youtube(ops) ⇒ <code>Promise.&lt;Buffer&gt;</code>
Comentario de YouTube

**Kind**: static method of [<code>Canvacard</code>](#Canvacard)  
**Returns**: <code>Promise.&lt;Buffer&gt;</code> - Imagen de comentario de YouTube  
**Throws**:

- <code>APIError</code> Si no se proporciona el nombre de usuario, el contenido o el avatar


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| ops | <code>object</code> |  | Opciones de comentarios de YouTube |
| [ops.username] | <code>string</code> |  | Nombre de usuario del autor del comentario |
| [ops.content] | <code>string</code> |  | El comentario |
| [ops.avatar] | <code>string</code> \| <code>Buffer</code> |  | Fuente de avatar |
| [ops.dark] | <code>boolean</code> | <code>false</code> | ¿Modo oscuro? |

**Example**  
```js
    const canvacard = require("canvacard");
    canvacard.Canvas.youtube({ username: "Clyde", content: "¡Esto es increíble!", avatar: "./image.png" })
    .then(youtube => {
      canvacard.write(youtube, "youtube.png");
    })
    .catch(console.error);```
<a name="Canvacard.write"></a>

### Canvacard.write(data, name) ⇒ <code>void</code>
Escribe los datos como archivo

**Kind**: static method of [<code>Canvacard</code>](#Canvacard)  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Buffer</code> | datos para escribir |
| name | <code>string</code> | nombre del archivo |

<a name="Canvacard.reply"></a>

### Canvacard.reply(options) ⇒ <code>Promise.&lt;Buffer&gt;</code>
Clon de respuesta de discord

**Kind**: static method of [<code>Canvacard</code>](#Canvacard)  
**Returns**: <code>Promise.&lt;Buffer&gt;</code> - Imagen de respuesta de discord  
**Throws**:

- <code>APIError</code> Si no se proporciona el avatar, el nombre de usuario o el mensaje


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
const img = "https://cdn.discordapp.com/embed/avatars/0.png";
  const img2 = "https://cdn.discordapp.com/embed/avatars/4.png";
  canvacard.Canvas.reply({
    avatar1: img,
    avatar2: img2,
    user1: "Maximus",
    user2: "SrGobi",
    hex1: "#FF3300",
    hex2: "#7289da",
    mainText: "kok",
    replyText: "Pog"
   })
  .then(img => canvacard.write(img, "reply.png"));
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

