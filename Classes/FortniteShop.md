## Classes

<dl>
<dt><a href="#FortniteShop">FortniteShop</a></dt>
<dd><p>Creador de imagen de la tienda de fortnite</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#applyText">applyText(canvas, text, defaultFontSize, width, font)</a> ⇒</dt>
<dd><p>Obtiene variables y tipos.</p>
</dd>
</dl>

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
    * [.build([font])](#FortniteShop+build) ⇒ <code>Promise.&lt;string&gt;</code>

<a name="new_FortniteShop_new"></a>

### new FortniteShop()
![FortniteStats Card](https://raw.githubusercontent.com/SrGobi/canvacard/refs/heads/test/fortnite_shop.png)

**Example**  
```js
    const FortniteShopCardURL = await new FortniteShop()
      .setToken("3533192f-66bc-48b2-8df9-c03bfeb75957")
      .setText("footer", "ESP CUSTOMS X FORTNITE")
      .toAttachment();
    await channel.send({ files: [{ attachment: FortniteShopCardURL, name: 'FortniteShop.png' }] })```
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

<a name="FortniteShop+build"></a>

### fortniteShop.build([font]) ⇒ <code>Promise.&lt;string&gt;</code>
Construye la imagen de la tienda de fortnite

**Kind**: instance method of [<code>FortniteShop</code>](#FortniteShop)  
**Returns**: <code>Promise.&lt;string&gt;</code> - La imagen de la tienda de fortnite  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [font] | <code>string</code> | <code>&quot;\&quot;Arial\&quot;&quot;</code> | Familia tipográfica |

<a name="applyText"></a>

## applyText(canvas, text, defaultFontSize, width, font) ⇒
Obtiene variables y tipos.

**Kind**: global function  
**Returns**: La variable formateada  

| Param | Type | Description |
| --- | --- | --- |
| canvas | <code>object</code> | El lienzo |
| text | <code>object</code> | El texto |
| defaultFontSize | <code>object</code> | El tamaño de píxel de fuente predeterminado |
| width | <code>object</code> | El ancho máximo del texto |
| font | <code>object</code> | La fuente del texto |

