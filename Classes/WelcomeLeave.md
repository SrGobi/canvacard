## Classes

<dl>
<dt><a href="#WelcomeLeave">WelcomeLeave</a></dt>
<dd><p>Creador de tarjetas de bienvenida o despedida</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#setAvatarEstablecer el avatar de la tarjeta">setAvatarEstablecer el avatar de la tarjeta(value)</a> ⇒ <code><a href="#WelcomeLeave">WelcomeLeave</a></code></dt>
<dd></dd>
<dt><a href="#setTituloEstablecer el título de la tarjeta">setTituloEstablecer el título de la tarjeta(value, color)</a> ⇒ <code><a href="#WelcomeLeave">WelcomeLeave</a></code></dt>
<dd></dd>
<dt><a href="#setSubtituloEstablecer el subtítulo de la tarjeta">setSubtituloEstablecer el subtítulo de la tarjeta(value, color)</a> ⇒ <code><a href="#WelcomeLeave">WelcomeLeave</a></code></dt>
<dd></dd>
<dt><a href="#setColorCircleEstablecer el color del circulo">setColorCircleEstablecer el color del circulo(value)</a> ⇒ <code><a href="#WelcomeLeave">WelcomeLeave</a></code></dt>
<dd></dd>
<dt><a href="#setColorOverlayEstablecer el color del overlay">setColorOverlayEstablecer el color del overlay(value)</a> ⇒ <code><a href="#WelcomeLeave">WelcomeLeave</a></code></dt>
<dd></dd>
<dt><a href="#setOpacityOverlayEstablecer la opacidad del overlay">setOpacityOverlayEstablecer la opacidad del overlay(value)</a> ⇒ <code><a href="#WelcomeLeave">WelcomeLeave</a></code></dt>
<dd></dd>
<dt><a href="#setBackgroundEstablecer imagen / color de fondo">setBackgroundEstablecer imagen / color de fondo(type, data)</a> ⇒ <code><a href="#WelcomeLeave">WelcomeLeave</a></code></dt>
<dd></dd>
<dt><a href="#setTypeOverlayEstablecer rectangle / rounded de overlay">setTypeOverlayEstablecer rectangle / rounded de overlay(type)</a> ⇒ <code><a href="#WelcomeLeave">WelcomeLeave</a></code></dt>
<dd></dd>
<dt><a href="#buildConstruye la tarjeta de bienvenida">buildConstruye la tarjeta de bienvenida([font])</a> ⇒ <code>Promise.&lt;Buffer&gt;</code></dt>
<dd></dd>
</dl>

<a name="WelcomeLeave"></a>

## WelcomeLeave
Creador de tarjetas de bienvenida o despedida

**Kind**: global class  

* [WelcomeLeave](#WelcomeLeave)
    * [new WelcomeLeave()](#new_WelcomeLeave_new)
    * [.backgroundGlobal](#WelcomeLeave+backgroundGlobal)
    * [.avatar](#WelcomeLeave+avatar) : <code>string</code>
    * [.titulo](#WelcomeLeave+titulo) : <code>string</code>
    * [.subtitulo](#WelcomeLeave+subtitulo) : <code>string</code>
    * [.colorTitulo](#WelcomeLeave+colorTitulo) : <code>string</code>
    * [.colorSubtitulo](#WelcomeLeave+colorSubtitulo) : <code>string</code>
    * [.colorCircle](#WelcomeLeave+colorCircle) : <code>string</code>
    * [.colorOverlay](#WelcomeLeave+colorOverlay) : <code>number</code> \| <code>string</code>
    * [.opacityOverlay](#WelcomeLeave+opacityOverlay) : <code>string</code>
    * [.typeOverlay](#WelcomeLeave+typeOverlay) : <code>string</code>

<a name="new_WelcomeLeave_new"></a>

### new WelcomeLeave()
<details open> <summary>PREVIEW</summary><br>  <a>    <img src="https://raw.githubusercontent.com/SrGobi/canvacard/refs/heads/test/welcome_1.png" alt="Welcome Card Preview 1">  </a>  <a>    <img src="https://raw.githubusercontent.com/SrGobi/canvacard/refs/heads/test/welcome_2.png" alt="Welcome Card Preview 2">  </a>  <a>    <img src="https://raw.githubusercontent.com/SrGobi/canvacard/refs/heads/test/welcome_3.png" alt="Welcome Card Preview 3">  </a>  <a>    <img src="https://raw.githubusercontent.com/SrGobi/canvacard/refs/heads/test/welcome_4.png" alt="Welcome Card Preview 4">  </a></details>

**Example**  
```js
    const welcome = new canvacard.Welcomer()
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
<a name="WelcomeLeave+backgroundGlobal"></a>

### welcomeLeave.backgroundGlobal
Fondo de la tarjeta

**Kind**: instance property of [<code>WelcomeLeave</code>](#WelcomeLeave)  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| backgroundGlobal | <code>object</code> |  | Fondo de la tarjeta |
| [backgroundGlobal.type] | <code>&quot;IMAGE&quot;</code> \| <code>&quot;COLOR&quot;</code> | <code>&quot;color&quot;</code> | Tipo de fondo |

<a name="WelcomeLeave+avatar"></a>

### welcomeLeave.avatar : <code>string</code>
Avatar de la tarjeta

**Kind**: instance property of [<code>WelcomeLeave</code>](#WelcomeLeave)  
<a name="WelcomeLeave+titulo"></a>

### welcomeLeave.titulo : <code>string</code>
Título creado con Canvacard

**Kind**: instance property of [<code>WelcomeLeave</code>](#WelcomeLeave)  
<a name="WelcomeLeave+subtitulo"></a>

### welcomeLeave.subtitulo : <code>string</code>
Subtítulo creado con Canvacard

**Kind**: instance property of [<code>WelcomeLeave</code>](#WelcomeLeave)  
<a name="WelcomeLeave+colorTitulo"></a>

### welcomeLeave.colorTitulo : <code>string</code>
Color del título creado con Canvacard

**Kind**: instance property of [<code>WelcomeLeave</code>](#WelcomeLeave)  
<a name="WelcomeLeave+colorSubtitulo"></a>

### welcomeLeave.colorSubtitulo : <code>string</code>
Color del Subtítulo creado con Canvacard

**Kind**: instance property of [<code>WelcomeLeave</code>](#WelcomeLeave)  
<a name="WelcomeLeave+colorCircle"></a>

### welcomeLeave.colorCircle : <code>string</code>
Color del circulo

**Kind**: instance property of [<code>WelcomeLeave</code>](#WelcomeLeave)  
<a name="WelcomeLeave+colorOverlay"></a>

### welcomeLeave.colorOverlay : <code>number</code> \| <code>string</code>
Color del overlay

**Kind**: instance property of [<code>WelcomeLeave</code>](#WelcomeLeave)  
<a name="WelcomeLeave+opacityOverlay"></a>

### welcomeLeave.opacityOverlay : <code>string</code>
Opacidad del overlay

**Kind**: instance property of [<code>WelcomeLeave</code>](#WelcomeLeave)  
<a name="WelcomeLeave+typeOverlay"></a>

### welcomeLeave.typeOverlay : <code>string</code>
Tipo de overlay

**Kind**: instance property of [<code>WelcomeLeave</code>](#WelcomeLeave)  
<a name="setAvatarEstablecer el avatar de la tarjeta"></a>

## setAvatarEstablecer el avatar de la tarjeta(value) ⇒ [<code>WelcomeLeave</code>](#WelcomeLeave)
**Kind**: global function  
**Returns**: [<code>WelcomeLeave</code>](#WelcomeLeave) - La instancia actual de WelcomeLeave  
**Throws**:

- <code>APIError</code> El avatar debe ser un string o un Buffer


| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> \| <code>Buffer</code> | URL de la imagen o Buffer de la imagen |

<a name="setTituloEstablecer el título de la tarjeta"></a>

## setTituloEstablecer el título de la tarjeta(value, color) ⇒ [<code>WelcomeLeave</code>](#WelcomeLeave)
**Kind**: global function  
**Returns**: [<code>WelcomeLeave</code>](#WelcomeLeave) - La instancia actual de WelcomeLeave  
**Throws**:

- <code>APIError</code> El título debe ser un string


| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | Valor del título |
| color | <code>string</code> | Código de color HTML5 "#000000" |

<a name="setSubtituloEstablecer el subtítulo de la tarjeta"></a>

## setSubtituloEstablecer el subtítulo de la tarjeta(value, color) ⇒ [<code>WelcomeLeave</code>](#WelcomeLeave)
**Kind**: global function  
**Returns**: [<code>WelcomeLeave</code>](#WelcomeLeave) - La instancia actual de WelcomeLeave  
**Throws**:

- <code>APIError</code> El subtítulo debe ser un string


| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | Valor del subtítulo |
| color | <code>string</code> | Código de color HTML5 "#000000" |

<a name="setColorCircleEstablecer el color del circulo"></a>

## setColorCircleEstablecer el color del circulo(value) ⇒ [<code>WelcomeLeave</code>](#WelcomeLeave)
**Kind**: global function  
**Returns**: [<code>WelcomeLeave</code>](#WelcomeLeave) - La instancia actual de WelcomeLeave  
**Throws**:

- <code>APIError</code> La opacidad debe ser un string


| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | Código de color HTML5 "#000000" |

<a name="setColorOverlayEstablecer el color del overlay"></a>

## setColorOverlayEstablecer el color del overlay(value) ⇒ [<code>WelcomeLeave</code>](#WelcomeLeave)
**Kind**: global function  
**Returns**: [<code>WelcomeLeave</code>](#WelcomeLeave) - La instancia actual de WelcomeLeave  
**Throws**:

- <code>APIError</code> La opacidad debe ser un string


| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | Código de color HTML5 "#000000" |

<a name="setOpacityOverlayEstablecer la opacidad del overlay"></a>

## setOpacityOverlayEstablecer la opacidad del overlay(value) ⇒ [<code>WelcomeLeave</code>](#WelcomeLeave)
**Kind**: global function  
**Returns**: [<code>WelcomeLeave</code>](#WelcomeLeave) - La instancia actual de WelcomeLeave  
**Throws**:

- <code>APIError</code> La opacidad debe ser un número


| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Valor de 0 a 1 para la opacidad |

<a name="setBackgroundEstablecer imagen / color de fondo"></a>

## setBackgroundEstablecer imagen / color de fondo(type, data) ⇒ [<code>WelcomeLeave</code>](#WelcomeLeave)
**Kind**: global function  
**Returns**: [<code>WelcomeLeave</code>](#WelcomeLeave) - La instancia actual de WelcomeLeave  
**Throws**:

- <code>APIError</code> Tipo de fondo no admitido


| Param | Type | Description |
| --- | --- | --- |
| type | <code>&quot;COLOR&quot;</code> \| <code>&quot;IMAGE&quot;</code> | Tipo de fondo |
| data | <code>string</code> | URL de la imagen o código de color HTML |

<a name="setTypeOverlayEstablecer rectangle / rounded de overlay"></a>

## setTypeOverlayEstablecer rectangle / rounded de overlay(type) ⇒ [<code>WelcomeLeave</code>](#WelcomeLeave)
**Kind**: global function  
**Returns**: [<code>WelcomeLeave</code>](#WelcomeLeave) - La instancia actual de WelcomeLeave  
**Throws**:

- <code>APIError</code> Tipo de overlay no admitido


| Param | Type | Description |
| --- | --- | --- |
| type | <code>&quot;RECTANGLE&quot;</code> \| <code>&quot;ROUNDED&quot;</code> | Tipo de fondo |

<a name="buildConstruye la tarjeta de bienvenida"></a>

## buildConstruye la tarjeta de bienvenida([font]) ⇒ <code>Promise.&lt;Buffer&gt;</code>
**Kind**: global function  
**Returns**: <code>Promise.&lt;Buffer&gt;</code> - Imagen de la tarjeta de bienvenida en formato de buffer  
**Throws**:

- <code>APIError</code> Si no se puede cargar la imagen de fondo


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [font] | <code>string</code> | <code>&quot;\&quot;Arial\&quot;&quot;</code> | Fuente de texto para la tarjeta |

