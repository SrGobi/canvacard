## Classes

<dl>
<dt><a href="#Spotify">Spotify</a></dt>
<dd></dd>
</dl>

## Functions

<dl>
<dt><a href="#setProgressBar">setProgressBar(type, color)</a> ⇒ <code><a href="#Spotify">Spotify</a></code></dt>
<dd><p>Establecer detalles de la barra de progreso</p>
</dd>
<dt><a href="#setTitle">setTitle(title)</a> ⇒ <code><a href="#Spotify">Spotify</a></code></dt>
<dd><p>Establecer título</p>
</dd>
<dt><a href="#setImage">setImage(source)</a> ⇒ <code><a href="#Spotify">Spotify</a></code></dt>
<dd><p>Establecer imagen</p>
</dd>
<dt><a href="#setAuthor">setAuthor(name)</a> ⇒ <code><a href="#Spotify">Spotify</a></code></dt>
<dd><p>Establecer nombre de artista</p>
</dd>
<dt><a href="#setAlbum">setAlbum(name)</a> ⇒ <code><a href="#Spotify">Spotify</a></code></dt>
<dd><p>Establecer el nombre del álbum</p>
</dd>
<dt><a href="#setStartTimestamp">setStartTimestamp(time)</a> ⇒ <code><a href="#Spotify">Spotify</a></code></dt>
<dd><p>Establecer marca de tiempo de inicio</p>
</dd>
<dt><a href="#setEndTimestamp">setEndTimestamp(time)</a> ⇒ <code><a href="#Spotify">Spotify</a></code></dt>
<dd><p>Establecer marca de tiempo de finalización</p>
</dd>
<dt><a href="#setBackground">setBackground(type, data)</a> ⇒ <code><a href="#Spotify">Spotify</a></code></dt>
<dd><p>Establecer fondo de la tarjeta</p>
</dd>
<dt><a href="#build">build([font])</a> ⇒ <code>Promise.&lt;Buffer&gt;</code></dt>
<dd><p>Construye la tarjeta de presencia de Spotify.</p>
</dd>
</dl>

<a name="Spotify"></a>

## Spotify
**Kind**: global class  
<a name="new_Spotify_new"></a>

### new Spotify()
Creador de tarjetas de presencia de Spotify![Spotify Card](https://raw.githubusercontent.com/SrGobi/canvacard/refs/heads/test/spotify.png)

**Example**  
```js
const spotify = new canvacard.Spotify()
  .setAuthor("SAIKO")
  .setAlbum("SAKURA 👋")
  .setStartTimestamp(Date.now() - 10000)
  .setEndTimestamp(Date.now() + 50000)
  .setImage("https://i.scdn.co/image/ab67616d00001e02e346fc6f767ca2ac8365fe60")
  .setTitle("YO LO SOÑÉ");
const spotifyImage = await spotify.build("Cascadia Code PL");
canvacard.write(spotifyImage, "./spotify.png");```
<a name="setProgressBar"></a>

## setProgressBar(type, color) ⇒ [<code>Spotify</code>](#Spotify)
Establecer detalles de la barra de progreso

**Kind**: global function  
**Returns**: [<code>Spotify</code>](#Spotify) - La instancia actual de Spotify  
**Throws**:

- <code>APIError</code> Tipo de barra de progreso no válido


| Param | Type | Description |
| --- | --- | --- |
| type | <code>&quot;TRACK&quot;</code> \| <code>&quot;BAR&quot;</code> | Tipo de barra de progreso |
| color | <code>string</code> | Color para establecer |

<a name="setTitle"></a>

## setTitle(title) ⇒ [<code>Spotify</code>](#Spotify)
Establecer título

**Kind**: global function  
**Returns**: [<code>Spotify</code>](#Spotify) - La instancia actual de Spotify  
**Throws**:

- <code>APIError</code> Título esperado pero no recibido


| Param | Type | Description |
| --- | --- | --- |
| title | <code>string</code> | Título para establecer |

<a name="setImage"></a>

## setImage(source) ⇒ [<code>Spotify</code>](#Spotify)
Establecer imagen

**Kind**: global function  
**Returns**: [<code>Spotify</code>](#Spotify) - La instancia actual de Spotify  
**Throws**:

- <code>APIError</code> Fuente de imagen esperada pero no recibida


| Param | Type | Description |
| --- | --- | --- |
| source | <code>string</code> \| <code>Buffer</code> \| <code>Canvas.Image</code> | Fuente de imagen |

<a name="setAuthor"></a>

## setAuthor(name) ⇒ [<code>Spotify</code>](#Spotify)
Establecer nombre de artista

**Kind**: global function  
**Returns**: [<code>Spotify</code>](#Spotify) - La instancia actual de Spotify  
**Throws**:

- <code>APIError</code> Nombre esperado del artista pero no recibido


| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | Nombre del artista |

<a name="setAlbum"></a>

## setAlbum(name) ⇒ [<code>Spotify</code>](#Spotify)
Establecer el nombre del álbum

**Kind**: global function  
**Returns**: [<code>Spotify</code>](#Spotify) - La instancia actual de Spotify  
**Throws**:

- <code>APIError</code> Nombre del álbum esperado pero no recibido


| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | Nombre del álbum |

<a name="setStartTimestamp"></a>

## setStartTimestamp(time) ⇒ [<code>Spotify</code>](#Spotify)
Establecer marca de tiempo de inicio

**Kind**: global function  
**Returns**: [<code>Spotify</code>](#Spotify) - La instancia actual de Spotify  
**Throws**:

- <code>APIError</code> Marca de tiempo esperada pero no recibida


| Param | Type | Description |
| --- | --- | --- |
| time | <code>Date</code> \| <code>number</code> | Marca de tiempo |

<a name="setEndTimestamp"></a>

## setEndTimestamp(time) ⇒ [<code>Spotify</code>](#Spotify)
Establecer marca de tiempo de finalización

**Kind**: global function  
**Returns**: [<code>Spotify</code>](#Spotify) - La instancia actual de Spotify  
**Throws**:

- <code>APIError</code> Marca de tiempo esperada pero no recibida


| Param | Type | Description |
| --- | --- | --- |
| time | <code>Date</code> \| <code>number</code> | Marca de tiempo |

<a name="setBackground"></a>

## setBackground(type, data) ⇒ [<code>Spotify</code>](#Spotify)
Establecer fondo de la tarjeta

**Kind**: global function  
**Returns**: [<code>Spotify</code>](#Spotify) - La instancia actual de Spotify  
**Throws**:

- <code>APIError</code> Tipo de fondo no válido


| Param | Type | Description |
| --- | --- | --- |
| type | <code>&quot;COLOR&quot;</code> \| <code>&quot;IMAGE&quot;</code> | Tipo de fondo |
| data | <code>string</code> \| <code>Buffer</code> \| <code>Canvas.Image</code> | Datos de fondo |

<a name="build"></a>

## build([font]) ⇒ <code>Promise.&lt;Buffer&gt;</code>
Construye la tarjeta de presencia de Spotify.

**Kind**: global function  
**Returns**: <code>Promise.&lt;Buffer&gt;</code> - Imagen de la tarjeta de presencia de Spotify en formato de buffer  
**Throws**:

- <code>APIError</code> Faltan opciones


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [font] | <code>string</code> | <code>&quot;\&quot;Arial\&quot;&quot;</code> | Fuente de texto para la tarjeta |

