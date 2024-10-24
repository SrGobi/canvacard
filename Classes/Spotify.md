## Classes

<dl>
<dt><a href="#Spotify">Spotify</a></dt>
<dd></dd>
</dl>

## Functions

<dl>
<dt><a href="#setProgressBar">setProgressBar(type, color)</a> ⇒ <code><a href="#Spotify">Spotify</a></code></dt>
<dd><p>Set progress bar details</p>
</dd>
<dt><a href="#setTitle">setTitle(title)</a> ⇒ <code><a href="#Spotify">Spotify</a></code></dt>
<dd><p>Set title</p>
</dd>
<dt><a href="#setImage">setImage(source)</a> ⇒ <code><a href="#Spotify">Spotify</a></code></dt>
<dd><p>Establecer imagen</p>
</dd>
<dt><a href="#setAuthor">setAuthor(name)</a> ⇒ <code><a href="#Spotify">Spotify</a></code></dt>
<dd><p>Set the name of the artist</p>
</dd>
<dt><a href="#setAlbum">setAlbum(name)</a> ⇒ <code><a href="#Spotify">Spotify</a></code></dt>
<dd><p>Set the name of the album</p>
</dd>
<dt><a href="#setStartTimestamp">setStartTimestamp(time)</a> ⇒ <code><a href="#Spotify">Spotify</a></code></dt>
<dd><p>Set start timestamp</p>
</dd>
<dt><a href="#setEndTimestamp">setEndTimestamp(time)</a> ⇒ <code><a href="#Spotify">Spotify</a></code></dt>
<dd><p>Set end timestamp</p>
</dd>
<dt><a href="#setBackground">setBackground(type, data)</a> ⇒ <code><a href="#Spotify">Spotify</a></code></dt>
<dd><p>Set background image/color of the card</p>
</dd>
<dt><a href="#build">build([font])</a> ⇒ <code>Promise.&lt;Buffer&gt;</code></dt>
<dd><p>Build the Spotify presence card</p>
</dd>
</dl>

<a name="Spotify"></a>

## Spotify
**Kind**: global class  
<a name="new_Spotify_new"></a>

### new Spotify()
Spotify card creator<details open> <summary>PREVIEW</summary><br>  <a>    <img src="https://raw.githubusercontent.com/SrGobi/canvacard/refs/heads/test/spotify.png" alt="Spotify Card Preview">  </a></details>

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
Set progress bar details

**Kind**: global function  
**Returns**: [<code>Spotify</code>](#Spotify) - The current instance of Spotify  
**Throws**:

- <code>APIError</code> Invalid progress bar type


| Param | Type | Description |
| --- | --- | --- |
| type | <code>&quot;TRACK&quot;</code> \| <code>&quot;BAR&quot;</code> | Type of progress bar |
| color | <code>string</code> | Color of the progress bar |

<a name="setTitle"></a>

## setTitle(title) ⇒ [<code>Spotify</code>](#Spotify)
Set title

**Kind**: global function  
**Returns**: [<code>Spotify</code>](#Spotify) - The current instance of Spotify  
**Throws**:

- <code>APIError</code> Title expected but not received


| Param | Type | Description |
| --- | --- | --- |
| title | <code>string</code> | Title of the song |

<a name="setImage"></a>

## setImage(source) ⇒ [<code>Spotify</code>](#Spotify)
Establecer imagen

**Kind**: global function  
**Returns**: [<code>Spotify</code>](#Spotify) - The current instance of Spotify  
**Throws**:

- <code>APIError</code> Image source expected but not received


| Param | Type | Description |
| --- | --- | --- |
| source | <code>string</code> \| <code>Buffer</code> \| <code>Canvas.Image</code> | Fuente de imagen |

<a name="setAuthor"></a>

## setAuthor(name) ⇒ [<code>Spotify</code>](#Spotify)
Set the name of the artist

**Kind**: global function  
**Returns**: [<code>Spotify</code>](#Spotify) - The current instance of Spotify  
**Throws**:

- <code>APIError</code> Artist name expected but not received


| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | Name of the artist |

<a name="setAlbum"></a>

## setAlbum(name) ⇒ [<code>Spotify</code>](#Spotify)
Set the name of the album

**Kind**: global function  
**Returns**: [<code>Spotify</code>](#Spotify) - The current instance of Spotify  
**Throws**:

- <code>APIError</code> Album name expected but not received


| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | Name of the album |

<a name="setStartTimestamp"></a>

## setStartTimestamp(time) ⇒ [<code>Spotify</code>](#Spotify)
Set start timestamp

**Kind**: global function  
**Returns**: [<code>Spotify</code>](#Spotify) - The current instance of Spotify  
**Throws**:

- <code>APIError</code> Timestamp expected but not received


| Param | Type | Description |
| --- | --- | --- |
| time | <code>Date</code> \| <code>number</code> | Timestamp |

<a name="setEndTimestamp"></a>

## setEndTimestamp(time) ⇒ [<code>Spotify</code>](#Spotify)
Set end timestamp

**Kind**: global function  
**Returns**: [<code>Spotify</code>](#Spotify) - The current instance of Spotify  
**Throws**:

- <code>APIError</code> Timestamp expected but not received


| Param | Type | Description |
| --- | --- | --- |
| time | <code>Date</code> \| <code>number</code> | Timestamp |

<a name="setBackground"></a>

## setBackground(type, data) ⇒ [<code>Spotify</code>](#Spotify)
Set background image/color of the card

**Kind**: global function  
**Returns**: [<code>Spotify</code>](#Spotify) - The current instance of Spotify  
**Throws**:

- <code>APIError</code> Missing background data


| Param | Type | Description |
| --- | --- | --- |
| type | <code>&quot;COLOR&quot;</code> \| <code>&quot;IMAGE&quot;</code> | Type of background |
| data | <code>string</code> \| <code>Buffer</code> \| <code>Canvas.Image</code> | Image URL or HTML color code |

<a name="build"></a>

## build([font]) ⇒ <code>Promise.&lt;Buffer&gt;</code>
Build the Spotify presence card

**Kind**: global function  
**Returns**: <code>Promise.&lt;Buffer&gt;</code> - Card image in buffer format  
**Throws**:

- <code>APIError</code> Missing of options


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [font] | <code>string</code> | <code>&quot;\&quot;Arial\&quot;&quot;</code> | Font to use in the card |

