<a name="Welcomer"></a>

## Welcomer
Creador de tarjetas de bienvenida

**Kind**: global class  

* [Welcomer](#Welcomer)
    * [new Welcomer()](#new_Welcomer_new)
    * [.data](#Welcomer+data)
    * [.avatar](#Welcomer+avatar) : <code>string</code>
    * [.titulo](#Welcomer+titulo) : <code>string</code>
    * [.subtitulo](#Welcomer+subtitulo) : <code>string</code>
    * [.colorTitulo](#Welcomer+colorTitulo) : <code>string</code>
    * [.colorSubtitulo](#Welcomer+colorSubtitulo) : <code>string</code>
    * [.colorCircle](#Welcomer+colorCircle) : <code>string</code>
    * [.colorOverlay](#Welcomer+colorOverlay) : <code>number</code> \| <code>string</code>
    * [.opacityOverlay](#Welcomer+opacityOverlay) : <code>string</code>
    * [.typeOverlay](#Welcomer+typeOverlay) : <code>string</code>
    * [.colorBackground](#Welcomer+colorBackground) : <code>string</code>
    * [.setColor(id, color)](#Welcomer+setColor) ⇒ [<code>Welcomer</code>](#Welcomer)
    * [.setAvatar(value)](#Welcomer+setAvatar) ⇒ [<code>Welcomer</code>](#Welcomer)
    * [.setTitulo(value)](#Welcomer+setTitulo) ⇒ [<code>Welcomer</code>](#Welcomer)
    * [.setSubtitulo(value)](#Welcomer+setSubtitulo) ⇒ [<code>Welcomer</code>](#Welcomer)
    * [.setColorTitulo(value)](#Welcomer+setColorTitulo) ⇒ [<code>Welcomer</code>](#Welcomer)
    * [.setColorSubtitulo(value)](#Welcomer+setColorSubtitulo) ⇒ [<code>Welcomer</code>](#Welcomer)
    * [.setColorCircle(value)](#Welcomer+setColorCircle) ⇒ [<code>Welcomer</code>](#Welcomer)
    * [.setColorOverlay(value)](#Welcomer+setColorOverlay) ⇒ [<code>Welcomer</code>](#Welcomer)
    * [.setOpacityOverlay(value)](#Welcomer+setOpacityOverlay) ⇒ [<code>Welcomer</code>](#Welcomer)
    * [.setBackground(type, [data])](#Welcomer+setBackground)
    * [.setTypeOverlay(type)](#Welcomer+setTypeOverlay)
    * [.build([font])](#Welcomer+build) ⇒ <code>Promise.&lt;Buffer&gt;</code>

<a name="new_Welcomer_new"></a>

### new Welcomer()
Welcome image builder

**Example**  
```js
    const welcome = new canvacard.Welcomer()
      .setAvatar(data.defaultAvatarURL)
      .setBackground('IMAGE', 'https://i.imgur.com/aClDVjh.jpg')
      .setTitulo("Titulo de la Tarjeta👋")
      .setSubtitulo("Subtitulo de la Tarjeta 👋")
      .setOpacityOverlay("0.5")
      .setColorTitulo('#FFFFFF')
      .setColorSubtitulo('#FFFFFF')
      .setColorCircle('#FFFFFF')
      .setColorOverlay('#5865F2')
      .setTypeOverlay('ROUNDED');
    const welcomeImage = await welcome.build("Suravaram");
    canvacard.write(welcomeImage, "./welcomer.png");```Constructor de la tarjeta de bienvenida
<a name="Welcomer+data"></a>

### welcomer.data
Fondo de la tarjeta

**Kind**: instance property of [<code>Welcomer</code>](#Welcomer)  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| backgroundGlobal | <code>object</code> |  | Fondo de la tarjeta |
| [backgroundGlobal.type] | <code>&quot;IMAGE&quot;</code> \| <code>&quot;COLOR&quot;</code> | <code>&quot;color&quot;</code> | Tipo de fondo |

<a name="Welcomer+avatar"></a>

### welcomer.avatar : <code>string</code>
Avatar de la tarjeta

**Kind**: instance property of [<code>Welcomer</code>](#Welcomer)  
<a name="Welcomer+titulo"></a>

### welcomer.titulo : <code>string</code>
Título creado con Canvacard

**Kind**: instance property of [<code>Welcomer</code>](#Welcomer)  
<a name="Welcomer+subtitulo"></a>

### welcomer.subtitulo : <code>string</code>
Subtítulo creado con Canvacard

**Kind**: instance property of [<code>Welcomer</code>](#Welcomer)  
<a name="Welcomer+colorTitulo"></a>

### welcomer.colorTitulo : <code>string</code>
Color del título creado con Canvacard

**Kind**: instance property of [<code>Welcomer</code>](#Welcomer)  
<a name="Welcomer+colorSubtitulo"></a>

### welcomer.colorSubtitulo : <code>string</code>
Color del Subtítulo creado con Canvacard

**Kind**: instance property of [<code>Welcomer</code>](#Welcomer)  
<a name="Welcomer+colorCircle"></a>

### welcomer.colorCircle : <code>string</code>
Color del circulo

**Kind**: instance property of [<code>Welcomer</code>](#Welcomer)  
<a name="Welcomer+colorOverlay"></a>

### welcomer.colorOverlay : <code>number</code> \| <code>string</code>
Color del overlay

**Kind**: instance property of [<code>Welcomer</code>](#Welcomer)  
<a name="Welcomer+opacityOverlay"></a>

### welcomer.opacityOverlay : <code>string</code>
Opacidad del overlay

**Kind**: instance property of [<code>Welcomer</code>](#Welcomer)  
<a name="Welcomer+typeOverlay"></a>

### welcomer.typeOverlay : <code>string</code>
Tipo de overlay

**Kind**: instance property of [<code>Welcomer</code>](#Welcomer)  
<a name="Welcomer+colorBackground"></a>

### welcomer.colorBackground : <code>string</code>
Color del fondo

**Kind**: instance property of [<code>Welcomer</code>](#Welcomer)  
<a name="Welcomer+setColor"></a>

### welcomer.setColor(id, color) ⇒ [<code>Welcomer</code>](#Welcomer)
Establecer color

**Kind**: instance method of [<code>Welcomer</code>](#Welcomer)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>&quot;titulo&quot;</code> \| <code>&quot;titulo-border&quot;</code> \| <code>&quot;titulo-box&quot;</code> \| <code>&quot;subtitulo&quot;</code> \| <code>&quot;subtitulo-border&quot;</code> \| <code>&quot;subtitulo-box&quot;</code> \| <code>&quot;avatar&quot;</code> \| <code>&quot;background&quot;</code> \| <code>&quot;border&quot;</code> |  |
| color | <code>string</code> | Código de color HTML5 |

<a name="Welcomer+setAvatar"></a>

### welcomer.setAvatar(value) ⇒ [<code>Welcomer</code>](#Welcomer)
Valor del avatar

**Kind**: instance method of [<code>Welcomer</code>](#Welcomer)  

| Param | Type |
| --- | --- |
| value | <code>string</code> \| <code>Buffer</code> | 

<a name="Welcomer+setTitulo"></a>

### welcomer.setTitulo(value) ⇒ [<code>Welcomer</code>](#Welcomer)
Valor del título

**Kind**: instance method of [<code>Welcomer</code>](#Welcomer)  

| Param | Type |
| --- | --- |
| value | <code>string</code> | 

<a name="Welcomer+setSubtitulo"></a>

### welcomer.setSubtitulo(value) ⇒ [<code>Welcomer</code>](#Welcomer)
Valor del subtítulo

**Kind**: instance method of [<code>Welcomer</code>](#Welcomer)  

| Param | Type |
| --- | --- |
| value | <code>string</code> | 

<a name="Welcomer+setColorTitulo"></a>

### welcomer.setColorTitulo(value) ⇒ [<code>Welcomer</code>](#Welcomer)
Valor del color del título

**Kind**: instance method of [<code>Welcomer</code>](#Welcomer)  

| Param | Type |
| --- | --- |
| value | <code>string</code> | 

<a name="Welcomer+setColorSubtitulo"></a>

### welcomer.setColorSubtitulo(value) ⇒ [<code>Welcomer</code>](#Welcomer)
Valor del color del subtítulo

**Kind**: instance method of [<code>Welcomer</code>](#Welcomer)  

| Param | Type |
| --- | --- |
| value | <code>string</code> | 

<a name="Welcomer+setColorCircle"></a>

### welcomer.setColorCircle(value) ⇒ [<code>Welcomer</code>](#Welcomer)
Valor del color del círculo

**Kind**: instance method of [<code>Welcomer</code>](#Welcomer)  

| Param | Type |
| --- | --- |
| value | <code>string</code> | 

<a name="Welcomer+setColorOverlay"></a>

### welcomer.setColorOverlay(value) ⇒ [<code>Welcomer</code>](#Welcomer)
Valor del color del overlay

**Kind**: instance method of [<code>Welcomer</code>](#Welcomer)  

| Param | Type |
| --- | --- |
| value | <code>string</code> | 

<a name="Welcomer+setOpacityOverlay"></a>

### welcomer.setOpacityOverlay(value) ⇒ [<code>Welcomer</code>](#Welcomer)
Valor del color del overlay

**Kind**: instance method of [<code>Welcomer</code>](#Welcomer)  

| Param | Type |
| --- | --- |
| value | <code>number</code> \| <code>string</code> | 

<a name="Welcomer+setBackground"></a>

### welcomer.setBackground(type, [data])
Establecer imagen / color de fondo

**Kind**: instance method of [<code>Welcomer</code>](#Welcomer)  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>&quot;COLOR&quot;</code> \| <code>&quot;IMAGE&quot;</code> | Tipo de fondo |
| [data] | <code>string</code> \| <code>Buffer</code> | Color o imagen de fondo |

<a name="Welcomer+setTypeOverlay"></a>

### welcomer.setTypeOverlay(type)
Establecer rectangle / rounded de overlay

**Kind**: instance method of [<code>Welcomer</code>](#Welcomer)  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>&quot;RECTANGLE&quot;</code> \| <code>&quot;ROUNDED&quot;</code> | Tipo de fondo |

<a name="Welcomer+build"></a>

### welcomer.build([font]) ⇒ <code>Promise.&lt;Buffer&gt;</code>
Construye la tarjeta de bienvenida

**Kind**: instance method of [<code>Welcomer</code>](#Welcomer)  
**Returns**: <code>Promise.&lt;Buffer&gt;</code> - La tarjeta de bienvenida en formato de buffer  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [font] | <code>string</code> | <code>&quot;\&quot;Helvetica\&quot;&quot;</code> | Familia tipográfica |

