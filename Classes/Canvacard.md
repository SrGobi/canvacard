## Classes

<dl>
<dt><a href="#Canvacard">Canvacard</a></dt>
<dd></dd>
</dl>

## Functions

<dl>
<dt><a href="#trigger">trigger(image)</a> ⇒ <code>Promise.&lt;Buffer&gt;</code></dt>
<dd><p>Trigger an image</p>
</dd>
<dt><a href="#invert">invert(image)</a> ⇒ <code>Promise.&lt;Buffer&gt;</code></dt>
<dd><p>Invert an image</p>
</dd>
<dt><a href="#sepia">sepia(image)</a> ⇒ <code>Promise.&lt;Buffer&gt;</code></dt>
<dd><p>Sepia an image</p>
</dd>
<dt><a href="#greyscale">greyscale(image)</a> ⇒ <code>Promise.&lt;Buffer&gt;</code></dt>
<dd><p>Greyscale an image</p>
</dd>
<dt><a href="#brightness">brightness(image, amount)</a> ⇒ <code>Promise.&lt;Buffer&gt;</code></dt>
<dd><p>Edit the brightness of the image</p>
</dd>
<dt><a href="#darkness">darkness(image, amount)</a> ⇒ <code>Promise.&lt;Buffer&gt;</code></dt>
<dd><p>Darken an image</p>
</dd>
<dt><a href="#threshold">threshold(image, amount)</a> ⇒ <code>Promise.&lt;Buffer&gt;</code></dt>
<dd></dd>
<dt><a href="#convolute">convolute(image, matrix, opaque)</a> ⇒ <code>Promise.&lt;Buffer&gt;</code></dt>
<dd><p>Convolute an image</p>
</dd>
<dt><a href="#pixelate">pixelate(image, pixels)</a> ⇒ <code>Promise.&lt;Buffer&gt;</code></dt>
<dd><p>Pixelate an image</p>
</dd>
<dt><a href="#sharpen">sharpen(image, lvl)</a> ⇒ <code>Promise.&lt;Buffer&gt;</code></dt>
<dd><p>Sharpen an image</p>
</dd>
<dt><a href="#burn">burn(image, lvl)</a> ⇒ <code>Promise.&lt;Buffer&gt;</code></dt>
<dd><p>Burn an image</p>
</dd>
<dt><a href="#circle">circle(image)</a> ⇒ <code>Promise.&lt;Buffer&gt;</code></dt>
<dd><p>Circle an image</p>
</dd>
<dt><a href="#fuse">fuse(image1, image2)</a> ⇒ <code>Promise.&lt;Buffer&gt;</code></dt>
<dd><p>Fuse two images</p>
</dd>
<dt><a href="#resize">resize(image, width, height)</a> ⇒ <code>Promise.&lt;Buffer&gt;</code></dt>
<dd><p>Resize an image</p>
</dd>
<dt><a href="#kiss">kiss(image1, image2)</a> ⇒ <code>Promise.&lt;Buffer&gt;</code></dt>
<dd><p>Kiss someone ( ͡° ͜ʖ ͡°)</p>
</dd>
<dt><a href="#spank">spank(image1, image2)</a> ⇒ <code>Promise.&lt;Buffer&gt;</code></dt>
<dd><p>To spank someone ( ͡° ͜ʖ ͡°)</p>
</dd>
<dt><a href="#slap">slap(image1, image2)</a> ⇒ <code>Promise.&lt;Buffer&gt;</code></dt>
<dd><p>Slap someone ( ͡° ͜ʖ ͡°)</p>
</dd>
<dt><a href="#facepalm">facepalm(image)</a> ⇒ <code>Promise.&lt;Buffer&gt;</code></dt>
<dd><p>Facepalm someone</p>
</dd>
<dt><a href="#colorfy">colorfy(image, color)</a> ⇒ <code>Promise.&lt;Buffer&gt;</code></dt>
<dd><p>Colorfy an image</p>
</dd>
<dt><a href="#distracted">distracted(image1, image2, image3)</a> ⇒ <code>Promise.&lt;Buffer&gt;</code></dt>
<dd><p>Distract someone</p>
</dd>
<dt><a href="#jail">jail(image, greyscale)</a> ⇒ <code>Promise.&lt;Buffer&gt;</code></dt>
<dd><p>Create a jail image</p>
</dd>
<dt><a href="#bed">bed(image1, image2)</a> ⇒ <code>Promise.&lt;Buffer&gt;</code></dt>
<dd><p>Create a bed image</p>
</dd>
<dt><a href="#delete">delete(image, dark)</a> ⇒ <code>Promise.&lt;Buffer&gt;</code></dt>
<dd><p>Create a deleted image</p>
</dd>
<dt><a href="#gradient">gradient(colorFrom, colorTo, width, height)</a> ⇒ <code>Promise.&lt;Buffer&gt;</code></dt>
<dd><p>Create a gradient image</p>
</dd>
<dt><a href="#quote">quote(options, [font])</a> ⇒ <code>Promise.&lt;Buffer&gt;</code></dt>
<dd><p>Create a fake quote image</p>
</dd>
<dt><a href="#phub">phub(options, [font])</a> ⇒ <code>Promise.&lt;Buffer&gt;</code></dt>
<dd><p>PornHub Comment</p>
</dd>
<dt><a href="#wanted">wanted(image)</a> ⇒ <code>Promise.&lt;Buffer&gt;</code></dt>
<dd><p>Create a &quot;wanted&quot; image</p>
</dd>
<dt><a href="#wasted">wasted(image)</a> ⇒ <code>Promise.&lt;Buffer&gt;</code></dt>
<dd><p>Create a &quot;wasted&quot; image</p>
</dd>
<dt><a href="#youtube">youtube(ops)</a> ⇒ <code>Promise.&lt;Buffer&gt;</code></dt>
<dd><p>Create a YouTube comment image</p>
</dd>
<dt><a href="#write">write(data, name)</a> ⇒ <code>void</code></dt>
<dd><p>Writes data as a file</p>
</dd>
<dt><a href="#reply">reply(options)</a> ⇒ <code>Promise.&lt;Buffer&gt;</code></dt>
<dd><p>Discord Reply Clone</p>
</dd>
</dl>

<a name="Canvacard"></a>

## Canvacard
**Kind**: global class  
<a name="new_Canvacard_new"></a>

### new Canvacard()
Image generator

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
Trigger an image

**Kind**: global function  
**Returns**: <code>Promise.&lt;Buffer&gt;</code> - Triggered image  
**Throws**:

- <code>APIError</code> If image is not provided


| Param | Type | Description |
| --- | --- | --- |
| image | <code>string</code> \| <code>Buffer</code> | Image to trigger |

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
Invert an image

**Kind**: global function  
**Returns**: <code>Promise.&lt;Buffer&gt;</code> - Inverted image  
**Throws**:

- <code>APIError</code> If image is not provided


| Param | Type | Description |
| --- | --- | --- |
| image | <code>string</code> \| <code>Buffer</code> | Image to invert |

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
Sepia an image

**Kind**: global function  
**Returns**: <code>Promise.&lt;Buffer&gt;</code> - Sepia image  
**Throws**:

- <code>APIError</code> If image is not provided


| Param | Type | Description |
| --- | --- | --- |
| image | <code>string</code> \| <code>Buffer</code> | Image to sepia |

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
Greyscale an image

**Kind**: global function  
**Returns**: <code>Promise.&lt;Buffer&gt;</code> - Greyscale image  
**Throws**:

- <code>APIError</code> If image is not provided


| Param | Type | Description |
| --- | --- | --- |
| image | <code>string</code> \| <code>Buffer</code> | Image to greyscale |

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
Edit the brightness of the image

**Kind**: global function  
**Returns**: <code>Promise.&lt;Buffer&gt;</code> - Brightened image  
**Throws**:

- <code>APIError</code> If image is not provided o la cantidad no es un número


| Param | Type | Description |
| --- | --- | --- |
| image | <code>string</code> \| <code>Buffer</code> | Image to brighten |
| amount | <code>number</code> | Amount of brightness |

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
Darken an image

**Kind**: global function  
**Returns**: <code>Promise.&lt;Buffer&gt;</code> - Darkened image  
**Throws**:

- <code>APIError</code> If image is not provided o la cantidad no es un número


| Param | Type | Description |
| --- | --- | --- |
| image | <code>string</code> \| <code>Buffer</code> | Image to darken |
| amount | <code>number</code> | Amount of darkness |

**Example**  
```js
    const canvacard = require("canvacard");
    canvacard.Canvas.darkness("./image.png", 50)
    .then(darkened => {
      canvacard.write(darkened, "darkened.png");
    })
    .catch(console.error);```
<a name="threshold"></a>

## threshold(image, amount) ⇒ <code>Promise.&lt;Buffer&gt;</code>
**Kind**: global function  
**Returns**: <code>Promise.&lt;Buffer&gt;</code> - Thresholded image  
**Throws**:

- <code>APIError</code> If image is not provided o la cantidad no es un número

**Descrioption**: Threshold an image  

| Param | Type | Description |
| --- | --- | --- |
| image | <code>string</code> \| <code>Buffer</code> | Image to threshold |
| amount | <code>number</code> | Amount of threshold |

**Example**  
```js
    const canvacard = require("canvacard");
    canvacard.Canvas.threshold("./image.png", 128)
    .then(thresholded => {
      canvacard.write(thresholded, "thresholded.png");
    })
    .catch(console.error);```
<a name="convolute"></a>

## convolute(image, matrix, opaque) ⇒ <code>Promise.&lt;Buffer&gt;</code>
Convolute an image

**Kind**: global function  
**Returns**: <code>Promise.&lt;Buffer&gt;</code> - Convoluted image  
**Throws**:

- <code>APIError</code> If image is not provided o la matriz no es un Array


| Param | Type | Description |
| --- | --- | --- |
| image | <code>string</code> \| <code>Buffer</code> | Image to convolute |
| matrix | <code>Array.&lt;number&gt;</code> | Convolution matrix |
| opaque | <code>boolean</code> | If the image should be opaque |

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
Pixelate an image

**Kind**: global function  
**Returns**: <code>Promise.&lt;Buffer&gt;</code> - Pixelated image  
**Throws**:

- <code>APIError</code> If image is not provided o los píxeles no son un número


| Param | Type | Description |
| --- | --- | --- |
| image | <code>string</code> \| <code>Buffer</code> | Image to pixelate |
| pixels | <code>number</code> | Amount of pixels |

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
Sharpen an image

**Kind**: global function  
**Returns**: <code>Promise.&lt;Buffer&gt;</code> - Sharpened image  
**Throws**:

- <code>APIError</code> If image is not provided o el nivel no es un número


| Param | Type | Description |
| --- | --- | --- |
| image | <code>string</code> \| <code>Buffer</code> | Image to sharpen |
| lvl | <code>number</code> | Level of sharpening |

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
Burn an image

**Kind**: global function  
**Returns**: <code>Promise.&lt;Buffer&gt;</code> - Burned image  
**Throws**:

- <code>APIError</code> If image is not provided o el nivel no es un número


| Param | Type | Description |
| --- | --- | --- |
| image | <code>string</code> \| <code>Buffer</code> | Image to burn |
| lvl | <code>number</code> | Level of burning |

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
Circle an image

**Kind**: global function  
**Returns**: <code>Promise.&lt;Buffer&gt;</code> - Circled image  
**Throws**:

- <code>APIError</code> If image is not provided


| Param | Type | Description |
| --- | --- | --- |
| image | <code>string</code> \| <code>Buffer</code> | Image to circle |

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
Fuse two images

**Kind**: global function  
**Returns**: <code>Promise.&lt;Buffer&gt;</code> - Fused image  
**Throws**:

- <code>APIError</code> If image is not provided


| Param | Type | Description |
| --- | --- | --- |
| image1 | <code>string</code> \| <code>Buffer</code> | First image |
| image2 | <code>string</code> \| <code>Buffer</code> | Second image |

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
Resize an image

**Kind**: global function  
**Returns**: <code>Promise.&lt;Buffer&gt;</code> - Resized image  
**Throws**:

- <code>APIError</code> If image is not provided


| Param | Type | Description |
| --- | --- | --- |
| image | <code>string</code> \| <code>Buffer</code> | Image to resize |
| width | <code>number</code> | Width |
| height | <code>number</code> | Height |

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
Kiss someone ( ͡° ͜ʖ ͡°)

**Kind**: global function  
**Returns**: <code>Promise.&lt;Buffer&gt;</code> - Imagen de beso  
**Throws**:

- <code>APIError</code> If image is not provided


| Param | Type | Description |
| --- | --- | --- |
| image1 | <code>string</code> \| <code>Buffer</code> | First image |
| image2 | <code>string</code> \| <code>Buffer</code> | Second image |

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
To spank someone ( ͡° ͜ʖ ͡°)

**Kind**: global function  
**Returns**: <code>Promise.&lt;Buffer&gt;</code> - Image of spank  
**Throws**:

- <code>APIError</code> If image is not provided


| Param | Type | Description |
| --- | --- | --- |
| image1 | <code>string</code> \| <code>Buffer</code> | First image |
| image2 | <code>string</code> \| <code>Buffer</code> | Second image |

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
Slap someone ( ͡° ͜ʖ ͡°)

**Kind**: global function  
**Returns**: <code>Promise.&lt;Buffer&gt;</code> - Image of slap  
**Throws**:

- <code>APIError</code> If image is not provided


| Param | Type | Description |
| --- | --- | --- |
| image1 | <code>string</code> \| <code>Buffer</code> | First image |
| image2 | <code>string</code> \| <code>Buffer</code> | Second image |

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
Facepalm someone

**Kind**: global function  
**Returns**: <code>Promise.&lt;Buffer&gt;</code> - Image of facepalm  
**Throws**:

- <code>APIError</code> If image is not provided


| Param | Type | Description |
| --- | --- | --- |
| image | <code>string</code> \| <code>Buffer</code> | Image to facepalm |

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
Colorfy an image

**Kind**: global function  
**Returns**: <code>Promise.&lt;Buffer&gt;</code> - Colorfied image  
**Throws**:

- <code>APIError</code> If image is not provided


| Param | Type | Description |
| --- | --- | --- |
| image | <code>string</code> \| <code>Buffer</code> | Image to colorfy |
| color | <code>string</code> | Color to apply to the image (hex) |

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
Distract someone

**Kind**: global function  
**Returns**: <code>Promise.&lt;Buffer&gt;</code> - Distracted image  
**Throws**:

- <code>APIError</code> If image is not provided


| Param | Type | Description |
| --- | --- | --- |
| image1 | <code>string</code> \| <code>Buffer</code> | Face for the girl in red. |
| image2 | <code>string</code> \| <code>Buffer</code> | Face for the boy. |
| image3 | <code>string</code> \| <code>Buffer</code> | Face for the other girl [optional] |

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
Create a jail image

**Kind**: global function  
**Returns**: <code>Promise.&lt;Buffer&gt;</code> - Jailed image  
**Throws**:

- <code>APIError</code> If image is not provided


| Param | Type | Description |
| --- | --- | --- |
| image | <code>string</code> \| <code>Buffer</code> | Image to jail |
| greyscale | <code>boolean</code> | If the image should be greyscale |

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
Create a bed image

**Kind**: global function  
**Returns**: <code>Promise.&lt;Buffer&gt;</code> - Imagen de cama  
**Throws**:

- <code>APIError</code> If image is not provided


| Param | Type | Description |
| --- | --- | --- |
| image1 | <code>string</code> \| <code>Buffer</code> | First image |
| image2 | <code>string</code> \| <code>Buffer</code> | Second image |

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
Create a deleted image

**Kind**: global function  
**Returns**: <code>Promise.&lt;Buffer&gt;</code> - Deleted image  
**Throws**:

- <code>APIError</code> If image is not provided


| Param | Type | Description |
| --- | --- | --- |
| image | <code>string</code> \| <code>Buffer</code> | Image to delete |
| dark | <code>boolean</code> | If the image should be dark |

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
Create a gradient image

**Kind**: global function  
**Returns**: <code>Promise.&lt;Buffer&gt;</code> - Gradient image  
**Throws**:

- <code>APIError</code> If colorFrom or colorTo is not provided


| Param | Type | Description |
| --- | --- | --- |
| colorFrom | <code>string</code> | First color |
| colorTo | <code>string</code> | Second color |
| width | <code>number</code> | Width of image |
| height | <code>number</code> | Height of image |

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
Create a fake quote image

**Kind**: global function  
**Returns**: <code>Promise.&lt;Buffer&gt;</code> - Quote image  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| options | <code>object</code> |  | Options |
| [options.image] | <code>Buffer</code> \| <code>string</code> |  | Image |
| [options.message] | <code>string</code> |  | Message |
| [options.username] | <code>string</code> |  | Username |
| [options.color] | <code>string</code> |  | Color |
| [font] | <code>string</code> | <code>&quot;\&quot;Arial\&quot;&quot;</code> | Text font for the card |

**Example**  
```js
    const canvacard = require("canvacard");
    canvacard.Canvas.quote({ image: "./image.png", message: "This is amazing!", username: "Clyde", color: "#FFFFFF" })
    .then(quote => {
      canvacard.write(quote, "quote.png");
    })
    .catch(console.error);```
<a name="phub"></a>

## phub(options, [font]) ⇒ <code>Promise.&lt;Buffer&gt;</code>
PornHub Comment

**Kind**: global function  
**Returns**: <code>Promise.&lt;Buffer&gt;</code> - PornHub Comment image  
**Throws**:

- <code>APIError</code> If username, message or image is not provided


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| options | <code>Object</code> |  | Options |
| [options.username] | <code>String</code> |  | Username |
| [options.message] | <code>String</code> |  | Message |
| [options.image] | <code>String</code> \| <code>Buffer</code> |  | Image |
| [font] | <code>string</code> | <code>&quot;\&quot;Arial\&quot;&quot;</code> | Text font for card |

**Example**  
```js
    const canvacard = require("canvacard");
    canvacard.Canvas.phub({ username: "Clyde", message: "This is amazing!", image: "./image.png" })
    .then(phub => {
      canvacard.write(phub, "phub.png");
    })
    .catch(console.error);```
<a name="wanted"></a>

## wanted(image) ⇒ <code>Promise.&lt;Buffer&gt;</code>
Create a "wanted" image

**Kind**: global function  
**Returns**: <code>Promise.&lt;Buffer&gt;</code> - Wanted image  
**Throws**:

- <code>APIError</code> If image is not provided


| Param | Type | Description |
| --- | --- | --- |
| image | <code>string</code> \| <code>Buffer</code> | Image to wanted |

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
Create a "wasted" image

**Kind**: global function  
**Returns**: <code>Promise.&lt;Buffer&gt;</code> - Wasted image  
**Throws**:

- <code>APIError</code> If image is not provided


| Param | Type | Description |
| --- | --- | --- |
| image | <code>string</code> \| <code>Buffer</code> | Image to wasted |

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
Create a YouTube comment image

**Kind**: global function  
**Returns**: <code>Promise.&lt;Buffer&gt;</code> - YouTube comment image  
**Throws**:

- <code>APIError</code> If username, content or avatar is not provided


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| ops | <code>object</code> |  | Options |
| [ops.username] | <code>string</code> |  | Username |
| [ops.content] | <code>string</code> |  | Content |
| [ops.avatar] | <code>string</code> \| <code>Buffer</code> |  | Avatar |
| [ops.dark] | <code>boolean</code> | <code>false</code> | Dark mode |

**Example**  
```js
    const canvacard = require("canvacard");
    canvacard.Canvas.youtube({ username: "Clyde", content: "This is amazing!", avatar: "./image.png" })
    .then(youtube => {
      canvacard.write(youtube, "youtube.png");
    })
    .catch(console.error);```
<a name="write"></a>

## write(data, name) ⇒ <code>void</code>
Writes data as a file

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Buffer</code> | data to write |
| name | <code>string</code> | file name |

<a name="reply"></a>

## reply(options) ⇒ <code>Promise.&lt;Buffer&gt;</code>
Discord Reply Clone

**Kind**: global function  
**Returns**: <code>Promise.&lt;Buffer&gt;</code> - Reply image  
**Throws**:

- <code>APIError</code> If the avatar, username or message is not provided


| Param | Type | Description |
| --- | --- | --- |
| options | <code>object</code> | Options |
| [options.avatar1] | <code>string</code> \| <code>Buffer</code> | Avatar of the person who responded |
| [options.avatar2] | <code>string</code> \| <code>Buffer</code> | Avatar of the other person |
| [options.user1] | <code>string</code> | Username of the person who responded |
| [options.user2] | <code>string</code> | Username of the other person |
| [options.hex1] | <code>string</code> | Hexadecimal color of the person who responded |
| [options.hex2] | <code>string</code> | Hexadecimal color of the other person |
| [options.mainText] | <code>string</code> | Message of the person who responded |
| [options.replyText] | <code>string</code> | Message of the other person |

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
