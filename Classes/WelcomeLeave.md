## Classes

<dl>
<dt><a href="#WelcomeLeave">WelcomeLeave</a></dt>
<dd></dd>
</dl>

## Functions

<dl>
<dt><a href="#setAvatar">setAvatar(value)</a> ⇒ <code><a href="#WelcomeLeave">WelcomeLeave</a></code></dt>
<dd><p>Establecer el avatar de la tarjeta</p>
</dd>
<dt><a href="#setTitulo">setTitulo(value, color)</a> ⇒ <code><a href="#WelcomeLeave">WelcomeLeave</a></code></dt>
<dd><p>Establecer el título de la tarjeta</p>
</dd>
<dt><a href="#setSubtitulo">setSubtitulo(value, color)</a> ⇒ <code><a href="#WelcomeLeave">WelcomeLeave</a></code></dt>
<dd><p>Establecer el subtítulo de la tarjeta</p>
</dd>
<dt><a href="#setColorCircle">setColorCircle(value)</a> ⇒ <code><a href="#WelcomeLeave">WelcomeLeave</a></code></dt>
<dd><p>Establecer el color del circulo</p>
</dd>
<dt><a href="#setColorOverlay">setColorOverlay(value)</a> ⇒ <code><a href="#WelcomeLeave">WelcomeLeave</a></code></dt>
<dd><p>Establecer el color del overlay</p>
</dd>
<dt><a href="#setOpacityOverlay">setOpacityOverlay(value)</a> ⇒ <code><a href="#WelcomeLeave">WelcomeLeave</a></code></dt>
<dd><p>Establecer la opacidad del overlay</p>
</dd>
<dt><a href="#setBackground">setBackground(type, data)</a> ⇒ <code><a href="#WelcomeLeave">WelcomeLeave</a></code></dt>
<dd><p>Establecer imagen / color de fondo</p>
</dd>
<dt><a href="#setTypeOverlay">setTypeOverlay(type)</a> ⇒ <code><a href="#WelcomeLeave">WelcomeLeave</a></code></dt>
<dd><p>Establecer rectangle / rounded de overlay</p>
</dd>
<dt><a href="#build">build([font])</a> ⇒ <code>Promise.&lt;Buffer&gt;</code></dt>
<dd><p>Construye la tarjeta de bienvenida</p>
</dd>
</dl>

<a name="WelcomeLeave"></a>

## WelcomeLeave
**Kind**: global class  
<a name="new_WelcomeLeave_new"></a>

### new WelcomeLeave()
Creador de tarjetas de bienvenida o despedida<details open> <summary>PREVIEW</summary><br>  <a>    <img src="https://raw.githubusercontent.com/SrGobi/canvacard/refs/heads/test/welcome_1.png" alt="Welcome Card Preview 1">  </a>  <a>    <img src="https://raw.githubusercontent.com/SrGobi/canvacard/refs/heads/test/welcome_2.png" alt="Welcome Card Preview 2">  </a>  <a>    <img src="https://raw.githubusercontent.com/SrGobi/canvacard/refs/heads/test/welcome_3.png" alt="Welcome Card Preview 3">  </a></details>

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
Establecer el avatar de la tarjeta

**Kind**: global function  
**Returns**: [<code>WelcomeLeave</code>](#WelcomeLeave) - La instancia actual de WelcomeLeave  
**Throws**:

- <code>APIError</code> El avatar debe ser un string o un Buffer


| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> \| <code>Buffer</code> | URL de la imagen o Buffer de la imagen |

<a name="setTitulo"></a>

## setTitulo(value, color) ⇒ [<code>WelcomeLeave</code>](#WelcomeLeave)
Establecer el título de la tarjeta

**Kind**: global function  
**Returns**: [<code>WelcomeLeave</code>](#WelcomeLeave) - La instancia actual de WelcomeLeave  
**Throws**:

- <code>APIError</code> El título debe ser un string


| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | Valor del título |
| color | <code>string</code> | Código de color HTML5 "#000000" |

<a name="setSubtitulo"></a>

## setSubtitulo(value, color) ⇒ [<code>WelcomeLeave</code>](#WelcomeLeave)
Establecer el subtítulo de la tarjeta

**Kind**: global function  
**Returns**: [<code>WelcomeLeave</code>](#WelcomeLeave) - La instancia actual de WelcomeLeave  
**Throws**:

- <code>APIError</code> El subtítulo debe ser un string


| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | Valor del subtítulo |
| color | <code>string</code> | Código de color HTML5 "#000000" |

<a name="setColorCircle"></a>

## setColorCircle(value) ⇒ [<code>WelcomeLeave</code>](#WelcomeLeave)
Establecer el color del circulo

**Kind**: global function  
**Returns**: [<code>WelcomeLeave</code>](#WelcomeLeave) - La instancia actual de WelcomeLeave  
**Throws**:

- <code>APIError</code> La opacidad debe ser un string


| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | Código de color HTML5 "#000000" |

<a name="setColorOverlay"></a>

## setColorOverlay(value) ⇒ [<code>WelcomeLeave</code>](#WelcomeLeave)
Establecer el color del overlay

**Kind**: global function  
**Returns**: [<code>WelcomeLeave</code>](#WelcomeLeave) - La instancia actual de WelcomeLeave  
**Throws**:

- <code>APIError</code> La opacidad debe ser un string


| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | Código de color HTML5 "#000000" |

<a name="setOpacityOverlay"></a>

## setOpacityOverlay(value) ⇒ [<code>WelcomeLeave</code>](#WelcomeLeave)
Establecer la opacidad del overlay

**Kind**: global function  
**Returns**: [<code>WelcomeLeave</code>](#WelcomeLeave) - La instancia actual de WelcomeLeave  
**Throws**:

- <code>APIError</code> La opacidad debe ser un número


| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Valor de 0 a 1 para la opacidad |

<a name="setBackground"></a>

## setBackground(type, data) ⇒ [<code>WelcomeLeave</code>](#WelcomeLeave)
Establecer imagen / color de fondo

**Kind**: global function  
**Returns**: [<code>WelcomeLeave</code>](#WelcomeLeave) - La instancia actual de WelcomeLeave  
**Throws**:

- <code>APIError</code> Tipo de fondo no admitido


| Param | Type | Description |
| --- | --- | --- |
| type | <code>&quot;COLOR&quot;</code> \| <code>&quot;IMAGE&quot;</code> | Tipo de fondo |
| data | <code>string</code> | URL de la imagen o código de color HTML |

<a name="setTypeOverlay"></a>

## setTypeOverlay(type) ⇒ [<code>WelcomeLeave</code>](#WelcomeLeave)
Establecer rectangle / rounded de overlay

**Kind**: global function  
**Returns**: [<code>WelcomeLeave</code>](#WelcomeLeave) - La instancia actual de WelcomeLeave  
**Throws**:

- <code>APIError</code> Tipo de overlay no admitido


| Param | Type | Description |
| --- | --- | --- |
| type | <code>&quot;RECTANGLE&quot;</code> \| <code>&quot;ROUNDED&quot;</code> | Tipo de fondo |

<a name="build"></a>

## build([font]) ⇒ <code>Promise.&lt;Buffer&gt;</code>
Construye la tarjeta de bienvenida

**Kind**: global function  
**Returns**: <code>Promise.&lt;Buffer&gt;</code> - Imagen de la tarjeta de bienvenida en formato de buffer  
**Throws**:

- <code>APIError</code> Si no se puede cargar la imagen de fondo


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [font] | <code>string</code> | <code>&quot;Arial&quot;</code> | Fuente de texto para la tarjeta |

