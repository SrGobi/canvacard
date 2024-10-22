<a name="WelcomeLeave"></a>

## WelcomeLeave
Creador de tarjetas de bienvenida

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
    * [.setAvatar(value)](#WelcomeLeave+setAvatar) ⇒ [<code>WelcomeLeave</code>](#WelcomeLeave)
    * [.setTitulo(value, color)](#WelcomeLeave+setTitulo) ⇒ [<code>WelcomeLeave</code>](#WelcomeLeave)
    * [.setSubtitulo(value, color)](#WelcomeLeave+setSubtitulo) ⇒ [<code>WelcomeLeave</code>](#WelcomeLeave)
    * [.setColorCircle(value)](#WelcomeLeave+setColorCircle) ⇒ [<code>WelcomeLeave</code>](#WelcomeLeave)
    * [.setColorOverlay(value)](#WelcomeLeave+setColorOverlay) ⇒ [<code>WelcomeLeave</code>](#WelcomeLeave)
    * [.setOpacityOverlay(value)](#WelcomeLeave+setOpacityOverlay) ⇒ [<code>WelcomeLeave</code>](#WelcomeLeave)
    * [.setBackground(type, data)](#WelcomeLeave+setBackground) ⇒ [<code>WelcomeLeave</code>](#WelcomeLeave)
    * [.setTypeOverlay(type)](#WelcomeLeave+setTypeOverlay) ⇒ [<code>WelcomeLeave</code>](#WelcomeLeave)
    * [.build([font])](#WelcomeLeave+build) ⇒ <code>Promise.&lt;Buffer&gt;</code>

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
    canvacard.write(welcomeImage, "./welcomer.png");```Constructor de la tarjeta de bienvenida
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
<a name="WelcomeLeave+setAvatar"></a>

### welcomeLeave.setAvatar(value) ⇒ [<code>WelcomeLeave</code>](#WelcomeLeave)
Valor del avatar

**Kind**: instance method of [<code>WelcomeLeave</code>](#WelcomeLeave)  
**Returns**: [<code>WelcomeLeave</code>](#WelcomeLeave) - La instancia actual de WelcomeLeave  
**Throws**:

- <code>APIError</code> El avatar debe ser un string o un Buffer


| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> \| <code>Buffer</code> | URL de la imagen o Buffer de la imagen |

<a name="WelcomeLeave+setTitulo"></a>

### welcomeLeave.setTitulo(value, color) ⇒ [<code>WelcomeLeave</code>](#WelcomeLeave)
Valor del título

**Kind**: instance method of [<code>WelcomeLeave</code>](#WelcomeLeave)  
**Returns**: [<code>WelcomeLeave</code>](#WelcomeLeave) - La instancia actual de WelcomeLeave  
**Throws**:

- <code>APIError</code> El título debe ser un string


| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | Valor del título |
| color | <code>string</code> | Código de color HTML5 "#000000" |

<a name="WelcomeLeave+setSubtitulo"></a>

### welcomeLeave.setSubtitulo(value, color) ⇒ [<code>WelcomeLeave</code>](#WelcomeLeave)
Valor del subtítulo

**Kind**: instance method of [<code>WelcomeLeave</code>](#WelcomeLeave)  
**Returns**: [<code>WelcomeLeave</code>](#WelcomeLeave) - La instancia actual de WelcomeLeave  
**Throws**:

- <code>APIError</code> El subtítulo debe ser un string


| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | Valor del subtítulo |
| color | <code>string</code> | Código de color HTML5 "#000000" |

<a name="WelcomeLeave+setColorCircle"></a>

### welcomeLeave.setColorCircle(value) ⇒ [<code>WelcomeLeave</code>](#WelcomeLeave)
Valor del color del círculo

**Kind**: instance method of [<code>WelcomeLeave</code>](#WelcomeLeave)  
**Returns**: [<code>WelcomeLeave</code>](#WelcomeLeave) - La instancia actual de WelcomeLeave  
**Throws**:

- <code>APIError</code> La opacidad debe ser un string


| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | Código de color HTML5 "#000000" |

<a name="WelcomeLeave+setColorOverlay"></a>

### welcomeLeave.setColorOverlay(value) ⇒ [<code>WelcomeLeave</code>](#WelcomeLeave)
Valor del color del overlay

**Kind**: instance method of [<code>WelcomeLeave</code>](#WelcomeLeave)  
**Returns**: [<code>WelcomeLeave</code>](#WelcomeLeave) - La instancia actual de WelcomeLeave  
**Throws**:

- <code>APIError</code> La opacidad debe ser un string


| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | Código de color HTML5 "#000000" |

<a name="WelcomeLeave+setOpacityOverlay"></a>

### welcomeLeave.setOpacityOverlay(value) ⇒ [<code>WelcomeLeave</code>](#WelcomeLeave)
Valor del color del overlay

**Kind**: instance method of [<code>WelcomeLeave</code>](#WelcomeLeave)  
**Returns**: [<code>WelcomeLeave</code>](#WelcomeLeave) - La instancia actual de WelcomeLeave  
**Throws**:

- <code>APIError</code> La opacidad debe ser un número


| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Valor de 0 a 1 para la opacidad |

<a name="WelcomeLeave+setBackground"></a>

### welcomeLeave.setBackground(type, data) ⇒ [<code>WelcomeLeave</code>](#WelcomeLeave)
Establecer imagen / color de fondo

**Kind**: instance method of [<code>WelcomeLeave</code>](#WelcomeLeave)  
**Returns**: [<code>WelcomeLeave</code>](#WelcomeLeave) - La instancia actual de WelcomeLeave  
**Throws**:

- <code>APIError</code> Tipo de fondo no admitido


| Param | Type | Description |
| --- | --- | --- |
| type | <code>&quot;COLOR&quot;</code> \| <code>&quot;IMAGE&quot;</code> | Tipo de fondo |
| data | <code>string</code> | URL de la imagen o código de color HTML |

<a name="WelcomeLeave+setTypeOverlay"></a>

### welcomeLeave.setTypeOverlay(type) ⇒ [<code>WelcomeLeave</code>](#WelcomeLeave)
Establecer rectangle / rounded de overlay

**Kind**: instance method of [<code>WelcomeLeave</code>](#WelcomeLeave)  
**Returns**: [<code>WelcomeLeave</code>](#WelcomeLeave) - La instancia actual de WelcomeLeave  
**Throws**:

- <code>APIError</code> Tipo de overlay no admitido


| Param | Type | Description |
| --- | --- | --- |
| type | <code>&quot;RECTANGLE&quot;</code> \| <code>&quot;ROUNDED&quot;</code> | Tipo de fondo |

<a name="WelcomeLeave+build"></a>

### welcomeLeave.build([font]) ⇒ <code>Promise.&lt;Buffer&gt;</code>
Construye la tarjeta de bienvenida

**Kind**: instance method of [<code>WelcomeLeave</code>](#WelcomeLeave)  
**Returns**: <code>Promise.&lt;Buffer&gt;</code> - Imagen de la tarjeta de bienvenida en formato de buffer  
**Throws**:

- <code>APIError</code> Si no se puede cargar la imagen de fondo


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [font] | <code>string</code> | <code>&quot;\&quot;Arial\&quot;&quot;</code> | Fuente de texto para la tarjeta |

