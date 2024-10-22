## Classes

<dl>
<dt><a href="#Spotify">Spotify</a></dt>
<dd><p>Creador de tarjetas de presencia de Spotify</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#SpotifyDataBG">SpotifyDataBG</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#SpotifyProgressBarData">SpotifyProgressBarData</a> : <code>object</code></dt>
<dd></dd>
</dl>

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
    * [.width](#Spotify+width) : <code>number</code>
    * [.height](#Spotify+height) : <code>number</code>
    * [.setProgressBar(type, color)](#Spotify+setProgressBar) ⇒ [<code>Spotify</code>](#Spotify)
    * [.setTitle(title)](#Spotify+setTitle) ⇒ [<code>Spotify</code>](#Spotify)
    * [.setImage(source)](#Spotify+setImage) ⇒ [<code>Spotify</code>](#Spotify)
    * [.setAuthor(name)](#Spotify+setAuthor) ⇒ [<code>Spotify</code>](#Spotify)
    * [.setAlbum(name)](#Spotify+setAlbum) ⇒ [<code>Spotify</code>](#Spotify)
    * [.setStartTimestamp(time)](#Spotify+setStartTimestamp) ⇒ [<code>Spotify</code>](#Spotify)
    * [.setEndTimestamp(time)](#Spotify+setEndTimestamp) ⇒ [<code>Spotify</code>](#Spotify)
    * [.setBackground(type, data)](#Spotify+setBackground) ⇒ [<code>Spotify</code>](#Spotify)
    * [.build([font])](#Spotify+build) ⇒ <code>Promise.&lt;Buffer&gt;</code>

<a name="new_Spotify_new"></a>

### new Spotify()
![Spotify Card](https://raw.githubusercontent.com/SrGobi/canvacard/refs/heads/test/spotify.png)

**Example**  
```js
    const card = new canvacard.Spotify()
      .setAuthor("SAIKO")
      .setAlbum("SAKURA")
      .setStartTimestamp(Date.now() - 10000)
      .setEndTimestamp(Date.now() + 50000)
      .setImage("https://i.scdn.co/image/ab67616d00001e02e346fc6f767ca2ac8365fe60")
      .setTitle("YO LO SOÑÉ");
    const Image = await card.build("Cascadia Code PL");
    canvacard.write(Image, "./spotify.png");```
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
<a name="Spotify+width"></a>

### spotify.width : <code>number</code>
Ancho de la tarjeta

**Kind**: instance property of [<code>Spotify</code>](#Spotify)  
**Default**: <code>775</code>  
<a name="Spotify+height"></a>

### spotify.height : <code>number</code>
Altura de la tarjeta

**Kind**: instance property of [<code>Spotify</code>](#Spotify)  
**Default**: <code>300</code>  
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

### spotify.build([font]) ⇒ <code>Promise.&lt;Buffer&gt;</code>
Construye la tarjeta de presencia de Spotify.

**Kind**: instance method of [<code>Spotify</code>](#Spotify)  
**Returns**: <code>Promise.&lt;Buffer&gt;</code> - Imagen de la tarjeta de presencia de Spotify en formato de buffer  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [font] | <code>string</code> | <code>&quot;\&quot;Arial\&quot;&quot;</code> | Fuente de texto para la tarjeta |

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

