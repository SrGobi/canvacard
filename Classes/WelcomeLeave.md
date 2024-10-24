## Classes

<dl>
<dt><a href="#WelcomeLeave">WelcomeLeave</a></dt>
<dd></dd>
</dl>

## Functions

<dl>
<dt><a href="#setAvatar">setAvatar(value)</a> ⇒ <code><a href="#WelcomeLeave">WelcomeLeave</a></code></dt>
<dd><p>Set the avatar of the card</p>
</dd>
<dt><a href="#setTitulo">setTitulo(value, color)</a> ⇒ <code><a href="#WelcomeLeave">WelcomeLeave</a></code></dt>
<dd><p>Set the title of the card</p>
</dd>
<dt><a href="#setSubtitulo">setSubtitulo(value, color)</a> ⇒ <code><a href="#WelcomeLeave">WelcomeLeave</a></code></dt>
<dd><p>Set the subtitle of the card</p>
</dd>
<dt><a href="#setColorCircle">setColorCircle(value)</a> ⇒ <code><a href="#WelcomeLeave">WelcomeLeave</a></code></dt>
<dd><p>Set the color of the circle</p>
</dd>
<dt><a href="#setColorOverlay">setColorOverlay(value)</a> ⇒ <code><a href="#WelcomeLeave">WelcomeLeave</a></code></dt>
<dd><p>Set the color of the overlay</p>
</dd>
<dt><a href="#setOpacityOverlay">setOpacityOverlay(value)</a> ⇒ <code><a href="#WelcomeLeave">WelcomeLeave</a></code></dt>
<dd><p>Set the opacity of the overlay</p>
</dd>
<dt><a href="#setBackground">setBackground(type, data)</a> ⇒ <code><a href="#WelcomeLeave">WelcomeLeave</a></code></dt>
<dd><p>Set background image/color of the card</p>
</dd>
<dt><a href="#setTypeOverlay">setTypeOverlay(type)</a> ⇒ <code><a href="#WelcomeLeave">WelcomeLeave</a></code></dt>
<dd><p>Set the type of overlay</p>
</dd>
<dt><a href="#build">build([font])</a> ⇒ <code>Promise.&lt;Buffer&gt;</code></dt>
<dd><p>Build the card</p>
</dd>
</dl>

<a name="WelcomeLeave"></a>

## WelcomeLeave
**Kind**: global class  
<a name="new_WelcomeLeave_new"></a>

### new WelcomeLeave()
Welcome or Leave card creator<details open> <summary>PREVIEW</summary><br>  <a>    <img src="https://raw.githubusercontent.com/SrGobi/canvacard/refs/heads/test/welcome_1.png" alt="Welcome Card Preview 1">  </a>  <a>    <img src="https://raw.githubusercontent.com/SrGobi/canvacard/refs/heads/test/welcome_2.png" alt="Welcome Card Preview 2">  </a>  <a>    <img src="https://raw.githubusercontent.com/SrGobi/canvacard/refs/heads/test/welcome_3.png" alt="Welcome Card Preview 3">  </a></details>

**Example**  
```js
const welcome = new canvacard.WelcomeLeave()
  .setAvatar(data.avatarURL)
  .setBackground('COLOR', '#000000')
  .setTitulo("Titulo de la Tarjeta👋", '#FFFFFF')
  .setSubtitulo("Subtitulo de la Tarjeta 👋", '#FFFFFF')
  .setOpacityOverlay(1)
  .setColorCircle('#FFFFFF')
  .setColorOverlay('#5865F2')
  .setTypeOverlay('ROUNDED');
const welcomeImage = await welcome.build("Suravaram");
canvacard.write(welcomeImage, "./welcomer.png");```
<a name="setAvatar"></a>

## setAvatar(value) ⇒ [<code>WelcomeLeave</code>](#WelcomeLeave)
Set the avatar of the card

**Kind**: global function  
**Returns**: [<code>WelcomeLeave</code>](#WelcomeLeave) - The current instance of WelcomeLeave  
**Throws**:

- <code>APIError</code> Missing field: avatar


| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> \| <code>Buffer</code> | Avatar URL or Buffer |

<a name="setTitulo"></a>

## setTitulo(value, color) ⇒ [<code>WelcomeLeave</code>](#WelcomeLeave)
Set the title of the card

**Kind**: global function  
**Returns**: [<code>WelcomeLeave</code>](#WelcomeLeave) - The current instance of WelcomeLeave  
**Throws**:

- <code>APIError</code> The title must be a string


| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | Title value |
| color | <code>string</code> | HTML5 color code "#000000" |

<a name="setSubtitulo"></a>

## setSubtitulo(value, color) ⇒ [<code>WelcomeLeave</code>](#WelcomeLeave)
Set the subtitle of the card

**Kind**: global function  
**Returns**: [<code>WelcomeLeave</code>](#WelcomeLeave) - The current instance of WelcomeLeave  
**Throws**:

- <code>APIError</code> The subtitle must be a string


| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | Subtitle value |
| color | <code>string</code> | HTML5 color code "#000000" |

<a name="setColorCircle"></a>

## setColorCircle(value) ⇒ [<code>WelcomeLeave</code>](#WelcomeLeave)
Set the color of the circle

**Kind**: global function  
**Returns**: [<code>WelcomeLeave</code>](#WelcomeLeave) - The current instance of WelcomeLeave  
**Throws**:

- <code>APIError</code> The color must be a string


| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | HTML5 color code "#000000" |

<a name="setColorOverlay"></a>

## setColorOverlay(value) ⇒ [<code>WelcomeLeave</code>](#WelcomeLeave)
Set the color of the overlay

**Kind**: global function  
**Returns**: [<code>WelcomeLeave</code>](#WelcomeLeave) - The current instance of WelcomeLeave  
**Throws**:

- <code>APIError</code> The color must be a string


| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | HTML5 color code "#000000" |

<a name="setOpacityOverlay"></a>

## setOpacityOverlay(value) ⇒ [<code>WelcomeLeave</code>](#WelcomeLeave)
Set the opacity of the overlay

**Kind**: global function  
**Returns**: [<code>WelcomeLeave</code>](#WelcomeLeave) - The current instance of WelcomeLeave  
**Throws**:

- <code>APIError</code> The opacity must be a number


| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Opacity value (0 to 1) |

<a name="setBackground"></a>

## setBackground(type, data) ⇒ [<code>WelcomeLeave</code>](#WelcomeLeave)
Set background image/color of the card

**Kind**: global function  
**Returns**: [<code>WelcomeLeave</code>](#WelcomeLeave) - The current instance of WelcomeLeave  
**Throws**:

- <code>APIError</code> Missing field: data


| Param | Type | Description |
| --- | --- | --- |
| type | <code>&quot;COLOR&quot;</code> \| <code>&quot;IMAGE&quot;</code> | Type of background |
| data | <code>string</code> | Image URL or HTML color code |

<a name="setTypeOverlay"></a>

## setTypeOverlay(type) ⇒ [<code>WelcomeLeave</code>](#WelcomeLeave)
Set the type of overlay

**Kind**: global function  
**Returns**: [<code>WelcomeLeave</code>](#WelcomeLeave) - The current instance of WelcomeLeave  
**Throws**:

- <code>APIError</code> Missing field: type


| Param | Type | Description |
| --- | --- | --- |
| type | <code>&quot;RECTANGLE&quot;</code> \| <code>&quot;ROUNDED&quot;</code> | Type of overlay |

<a name="build"></a>

## build([font]) ⇒ <code>Promise.&lt;Buffer&gt;</code>
Build the card

**Kind**: global function  
**Returns**: <code>Promise.&lt;Buffer&gt;</code> - Card image in buffer format  
**Throws**:

- <code>APIError</code> Error loading background image


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [font] | <code>string</code> | <code>&quot;Arial&quot;</code> | Font to use in the card |

