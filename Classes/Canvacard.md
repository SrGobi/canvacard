## Functions

<dl>
<dt><a href="#trigger">trigger(image)</a> ⇒ <code>Promise.&lt;Buffer&gt;</code></dt>
<dd><p>Este método se puede utilizar para aplicar el efecto Disparado en la imagen.</p>
</dd>
<dt><a href="#invert">invert(image)</a> ⇒ <code>Promise.&lt;Buffer&gt;</code></dt>
<dd><p>Invierte el color de la imagen</p>
</dd>
<dt><a href="#sepia">sepia(image)</a> ⇒ <code>Promise.&lt;Buffer&gt;</code></dt>
<dd><p>Aplicar lavado sepia en img</p>
</dd>
<dt><a href="#greyscale">greyscale(image)</a> ⇒ <code>Promise.&lt;Buffer&gt;</code></dt>
<dd><p>Efecto de escala de grises sobre la imagen</p>
</dd>
<dt><a href="#brightness">brightness(image, amount)</a> ⇒ <code>Promise.&lt;Buffer&gt;</code></dt>
<dd><p>Editar el brillo de la imagen</p>
</dd>
<dt><a href="#darkness">darkness(image, amount)</a> ⇒ <code>Promise.&lt;Buffer&gt;</code></dt>
<dd><p>Editar la oscuridad de la imagen</p>
</dd>
<dt><a href="#threshold">threshold(img, amount)</a> ⇒ <code>Promise.&lt;Buffer&gt;</code></dt>
<dd></dd>
<dt><a href="#convolute">convolute(img, matrix, opaque)</a> ⇒ <code>Promise.&lt;Buffer&gt;</code></dt>
<dd><p>Convolución de la imagen</p>
</dd>
<dt><a href="#pixelate">pixelate(image, pixels)</a> ⇒ <code>Promise.&lt;Buffer&gt;</code></dt>
<dd><p>Pixelar</p>
</dd>
<dt><a href="#sharpen">sharpen(image, lvl)</a> ⇒ <code>Promise.&lt;Buffer&gt;</code></dt>
<dd><p>Agudizar una imagen</p>
</dd>
<dt><a href="#burn">burn(image, lvl)</a> ⇒ <code>Promise.&lt;Buffer&gt;</code></dt>
<dd><p>Aplica efecto de quemado en una imagen.</p>
</dd>
<dt><a href="#circle">circle(image)</a> ⇒ <code>Promise.&lt;Buffer&gt;</code></dt>
<dd><p>Crea una imagen circular</p>
</dd>
<dt><a href="#fuse">fuse(image1, image2)</a> ⇒ <code>Promise.&lt;Buffer&gt;</code></dt>
<dd><p>Fusiona dos imágenes</p>
</dd>
<dt><a href="#resize">resize(image, width, height)</a> ⇒ <code>Promise.&lt;Buffer&gt;</code></dt>
<dd><p>Cambiar el tamaño de una imagen</p>
</dd>
<dt><a href="#kiss">kiss(image1, image2)</a> ⇒ <code>Promise.&lt;Buffer&gt;</code></dt>
<dd><p>Besarse ( ͡° ͜ʖ ͡°)</p>
</dd>
<dt><a href="#spank">spank(image1, image2)</a> ⇒ <code>Promise.&lt;Buffer&gt;</code></dt>
<dd><p>Azotar a alguien ( ͡° ͜ʖ ͡°)</p>
</dd>
<dt><a href="#slap">slap(image1, image2)</a> ⇒ <code>Promise.&lt;Buffer&gt;</code></dt>
<dd><p>Abofetear a alguien ( ͡° ͜ʖ ͡°)</p>
</dd>
<dt><a href="#facepalm">facepalm(image)</a> ⇒ <code>Promise.&lt;Buffer&gt;</code></dt>
<dd><p>Hacer una imagen de palma en la cara</p>
</dd>
<dt><a href="#colorfy">colorfy(image, color)</a> ⇒ <code>Promise.&lt;Buffer&gt;</code></dt>
<dd><p>Actualiza el color de la imagen</p>
</dd>
<dt><a href="#distracted">distracted(image1, image2, image3)</a> ⇒ <code>Promise.&lt;Buffer&gt;</code></dt>
<dd><p>Crear una imagen de meme de distracción</p>
</dd>
<dt><a href="#jail">jail(image, greyscale)</a> ⇒ <code>Promise.&lt;Buffer&gt;</code></dt>
<dd><p>Crear una imagen de celda</p>
</dd>
<dt><a href="#bed">bed(image1, image2)</a> ⇒ <code>Promise.&lt;Buffer&gt;</code></dt>
<dd><p>Crear una imagen de cama</p>
</dd>
<dt><a href="#delete">delete(image, dark)</a> ⇒ <code>Promise.&lt;Buffer&gt;</code></dt>
<dd><p>Crear una imagen eliminada</p>
</dd>
<dt><a href="#gradient">gradient(colorFrom, colorTo, width, height)</a> ⇒ <code>Promise.&lt;Buffer&gt;</code></dt>
<dd><p>Crear una imagen degradada</p>
</dd>
<dt><a href="#quote">quote(options, [font])</a> ⇒ <code>Promise.&lt;Buffer&gt;</code></dt>
<dd><p>Crear una imagen de cita falsa</p>
</dd>
<dt><a href="#phub">phub(options, [font])</a> ⇒ <code>Promise.&lt;Buffer&gt;</code></dt>
<dd><p>Comentario de PornHub</p>
</dd>
<dt><a href="#wanted">wanted(image)</a> ⇒ <code>Promise.&lt;Buffer&gt;</code></dt>
<dd><p>Crear una imagen de se busca</p>
</dd>
<dt><a href="#wasted">wasted(image)</a> ⇒ <code>Promise.&lt;Buffer&gt;</code></dt>
<dd><p>Crear una imagen de &quot;wasted&quot;</p>
</dd>
<dt><a href="#youtube">youtube(ops)</a> ⇒ <code>Promise.&lt;Buffer&gt;</code></dt>
<dd><p>Comentario de YouTube</p>
</dd>
<dt><a href="#write">write(data, name)</a> ⇒ <code>void</code></dt>
<dd><p>Escribe los datos como archivo</p>
</dd>
<dt><a href="#reply">reply(options)</a> ⇒ <code>Promise.&lt;Buffer&gt;</code></dt>
<dd><p>Clon de respuesta de discord</p>
</dd>
</dl>

<a name="Canvacard"></a>

## Canvacard
**Kind**: global classCanvacard Generador De Memes  
**Example**  
```js
    const canvacard = require("canvacard");
    canvacard.Canvas.trigger("./image.png")
    .then(triggered => {
      canvacard.write(triggered, "triggered.gif");
    })
    .catch(console.error);```
<a name="trigger"></a>

## trigger(image) ⇒ <code>Promise.&lt;Buffer&gt;</code>
Este método se puede utilizar para aplicar el efecto Disparado en la imagen.

**Kind**: global function  
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
<a name="invert"></a>

## invert(image) ⇒ <code>Promise.&lt;Buffer&gt;</code>
Invierte el color de la imagen

**Kind**: global function  
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
<a name="sepia"></a>

## sepia(image) ⇒ <code>Promise.&lt;Buffer&gt;</code>
Aplicar lavado sepia en img

**Kind**: global function  
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
<a name="greyscale"></a>

## greyscale(image) ⇒ <code>Promise.&lt;Buffer&gt;</code>
Efecto de escala de grises sobre la imagen

**Kind**: global function  
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
<a name="brightness"></a>

## brightness(image, amount) ⇒ <code>Promise.&lt;Buffer&gt;</code>
Editar el brillo de la imagen

**Kind**: global function  
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
<a name="darkness"></a>

## darkness(image, amount) ⇒ <code>Promise.&lt;Buffer&gt;</code>
Editar la oscuridad de la imagen

**Kind**: global function  
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
<a name="threshold"></a>

## threshold(img, amount) ⇒ <code>Promise.&lt;Buffer&gt;</code>
**Kind**: global function  
**Returns**: <code>Promise.&lt;Buffer&gt;</code> - Imagen umbralizada  
**Throws**:

- <code>APIError</code> Si no se proporciona la imagen o la cantidad no es un número

**Descrioption**: Umbral de imagen  

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
<a name="convolute"></a>

## convolute(img, matrix, opaque) ⇒ <code>Promise.&lt;Buffer&gt;</code>
Convolución de la imagen

**Kind**: global function  
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
<a name="pixelate"></a>

## pixelate(image, pixels) ⇒ <code>Promise.&lt;Buffer&gt;</code>
Pixelar

**Kind**: global function  
**Returns**: <code>Promise.&lt;Buffer&gt;</code> - Imagen pixelada  
**Throws**:

- <code>APIError</code> Si no se proporciona la imagen o los píxeles no son un número


| Param | Type | Description |
| --- | --- | --- |
| image | <code>string</code> \| <code>Buffer</code> | Imagen para pixelar |
| pixels | <code>number</code> | Pixeles |

**Example**  
```js
    const canvacard = require("canvacard");
    canvacard.Canvas.pixelate("./image.png", 5)
    .then(pixelated => {
      canvacard.write(pixelated, "pixelated.png");
    })
    .catch(console.error);
<a name="sharpen"></a>

## sharpen(image, lvl) ⇒ <code>Promise.&lt;Buffer&gt;</code>
Agudizar una imagen

**Kind**: global function  
**Returns**: <code>Promise.&lt;Buffer&gt;</code> - Imagen enfocada  
**Throws**:

- <code>APIError</code> Si no se proporciona la imagen o el nivel no es un número


| Param | Type | Description |
| --- | --- | --- |
| image | <code>string</code> \| <code>Buffer</code> | Imagen para enfocar |
| lvl | <code>number</code> | intensidad de la nitidez |

**Example**  
```js
    const canvacard = require("canvacard");
    canvacard.Canvas.sharpen("./image.png", 1)
    .then(sharpened => {
      canvacard.write(sharpened, "sharpened.png");
    })
    .catch(console.error);```
<a name="burn"></a>

## burn(image, lvl) ⇒ <code>Promise.&lt;Buffer&gt;</code>
Aplica efecto de quemado en una imagen.

**Kind**: global function  
**Returns**: <code>Promise.&lt;Buffer&gt;</code> - Imagen quemada  
**Throws**:

- <code>APIError</code> Si no se proporciona la imagen o el nivel no es un número


| Param | Type | Description |
| --- | --- | --- |
| image | <code>string</code> \| <code>Buffer</code> | Fuente de imagen |
| lvl | <code>number</code> | intensidad |

**Example**  
```js
    const canvacard = require("canvacard");
    canvacard.Canvas.burn("./image.png", 1)
    .then(burned => {
      canvacard.write(burned, "burned.png");
    })
    .catch(console.error);```
<a name="circle"></a>

## circle(image) ⇒ <code>Promise.&lt;Buffer&gt;</code>
Crea una imagen circular

**Kind**: global function  
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
<a name="fuse"></a>

## fuse(image1, image2) ⇒ <code>Promise.&lt;Buffer&gt;</code>
Fusiona dos imágenes

**Kind**: global function  
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
<a name="resize"></a>

## resize(image, width, height) ⇒ <code>Promise.&lt;Buffer&gt;</code>
Cambiar el tamaño de una imagen

**Kind**: global function  
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
<a name="kiss"></a>

## kiss(image1, image2) ⇒ <code>Promise.&lt;Buffer&gt;</code>
Besarse ( ͡° ͜ʖ ͡°)

**Kind**: global function  
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
<a name="spank"></a>

## spank(image1, image2) ⇒ <code>Promise.&lt;Buffer&gt;</code>
Azotar a alguien ( ͡° ͜ʖ ͡°)

**Kind**: global function  
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
<a name="slap"></a>

## slap(image1, image2) ⇒ <code>Promise.&lt;Buffer&gt;</code>
Abofetear a alguien ( ͡° ͜ʖ ͡°)

**Kind**: global function  
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
<a name="facepalm"></a>

## facepalm(image) ⇒ <code>Promise.&lt;Buffer&gt;</code>
Hacer una imagen de palma en la cara

**Kind**: global function  
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
<a name="colorfy"></a>

## colorfy(image, color) ⇒ <code>Promise.&lt;Buffer&gt;</code>
Actualiza el color de la imagen

**Kind**: global function  
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
<a name="distracted"></a>

## distracted(image1, image2, image3) ⇒ <code>Promise.&lt;Buffer&gt;</code>
Crear una imagen de meme de distracción

**Kind**: global function  
**Returns**: <code>Promise.&lt;Buffer&gt;</code> - Imagen de distracción  
**Throws**:

- <code>APIError</code> Si no se proporciona la primera imagen


| Param | Type | Description |
| --- | --- | --- |
| image1 | <code>string</code> \| <code>Buffer</code> | Rostro para la niña en color rojo. |
| image2 | <code>string</code> \| <code>Buffer</code> | Cara para el chico |
| image3 | <code>string</code> \| <code>Buffer</code> | Cara para la otra chica [opcional] |

**Example**  
```js
    const canvacard = require("canvacard");
    canvacard.Canvas.distracted("./image1.png", "./image2.png", "./image3.png")
    .then(distracted => {
      canvacard.write(distracted, "distracted.png");
    })
    .catch(console.error);```
<a name="jail"></a>

## jail(image, greyscale) ⇒ <code>Promise.&lt;Buffer&gt;</code>
Crear una imagen de celda

**Kind**: global function  
**Returns**: <code>Promise.&lt;Buffer&gt;</code> - Imagen de la celda  
**Throws**:

- <code>APIError</code> Si no se proporciona la imagen


| Param | Type | Description |
| --- | --- | --- |
| image | <code>string</code> \| <code>Buffer</code> | Fuente de imagen |
| greyscale | <code>boolean</code> | Si debe ser una imagen en escala de grises |

**Example**  
```js
    const canvacard = require("canvacard");
    canvacard.Canvas.jail("./image.png")
    .then(jail => {
      canvacard.write(jail, "jail.png");
    })
    .catch(console.error);```
<a name="bed"></a>

## bed(image1, image2) ⇒ <code>Promise.&lt;Buffer&gt;</code>
Crear una imagen de cama

**Kind**: global function  
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
<a name="delete"></a>

## delete(image, dark) ⇒ <code>Promise.&lt;Buffer&gt;</code>
Crear una imagen eliminada

**Kind**: global function  
**Returns**: <code>Promise.&lt;Buffer&gt;</code> - Imagen eliminada  
**Throws**:

- <code>APIError</code> Si no se proporciona la imagen


| Param | Type | Description |
| --- | --- | --- |
| image | <code>string</code> \| <code>Buffer</code> | Fuente de imagen |
| dark | <code>boolean</code> | Si la imagen debe estar en modo oscuro |

**Example**  
```js
    const canvacard = require("canvacard");
    canvacard.Canvas.delete("./image.png")
    .then(deleted => {
      canvacard.write(deleted, "deleted.png");
    })
    .catch(console.error);```
<a name="gradient"></a>

## gradient(colorFrom, colorTo, width, height) ⇒ <code>Promise.&lt;Buffer&gt;</code>
Crear una imagen degradada

**Kind**: global function  
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
<a name="quote"></a>

## quote(options, [font]) ⇒ <code>Promise.&lt;Buffer&gt;</code>
Crear una imagen de cita falsa

**Kind**: global function  
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
<a name="phub"></a>

## phub(options, [font]) ⇒ <code>Promise.&lt;Buffer&gt;</code>
Comentario de PornHub

**Kind**: global function  
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
<a name="wanted"></a>

## wanted(image) ⇒ <code>Promise.&lt;Buffer&gt;</code>
Crear una imagen de se busca

**Kind**: global function  
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
<a name="wasted"></a>

## wasted(image) ⇒ <code>Promise.&lt;Buffer&gt;</code>
Crear una imagen de "wasted"

**Kind**: global function  
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
<a name="youtube"></a>

## youtube(ops) ⇒ <code>Promise.&lt;Buffer&gt;</code>
Comentario de YouTube

**Kind**: global function  
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
<a name="write"></a>

## write(data, name) ⇒ <code>void</code>
Escribe los datos como archivo

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Buffer</code> | datos para escribir |
| name | <code>string</code> | nombre del archivo |

<a name="reply"></a>

## reply(options) ⇒ <code>Promise.&lt;Buffer&gt;</code>
Clon de respuesta de discord

**Kind**: global function  
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
