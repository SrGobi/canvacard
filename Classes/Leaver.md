<a name="Leaver"></a>

## Leaver
Creador de tarjetas de despedida

**Kind**: global class  

* [Leaver](#Leaver)
    * [new Leaver()](#new_Leaver_new)
    * [.data](#Leaver+data)
    * [.avatar](#Leaver+avatar) : <code>string</code>
    * [.titulo](#Leaver+titulo) : <code>string</code>
    * [.subtitulo](#Leaver+subtitulo) : <code>string</code>
    * [.colorTitulo](#Leaver+colorTitulo) : <code>string</code>
    * [.colorSubtitulo](#Leaver+colorSubtitulo) : <code>string</code>
    * [.colorCircle](#Leaver+colorCircle) : <code>string</code>
    * [.colorOverlay](#Leaver+colorOverlay) : <code>number</code> \| <code>string</code>
    * [.opacityOverlay](#Leaver+opacityOverlay) : <code>string</code>
    * [.typeOverlay](#Leaver+typeOverlay) : <code>string</code>
    * [.colorBackground](#Leaver+colorBackground) : <code>string</code>
    * [.setColor(id, color)](#Leaver+setColor) ⇒ [<code>Leaver</code>](#Leaver)
    * [.setAvatar(value)](#Leaver+setAvatar) ⇒ [<code>Leaver</code>](#Leaver)
    * [.setTitulo(value)](#Leaver+setTitulo) ⇒ [<code>Leaver</code>](#Leaver)
    * [.setSubtitulo(value)](#Leaver+setSubtitulo) ⇒ [<code>Leaver</code>](#Leaver)
    * [.setColorTitulo(value)](#Leaver+setColorTitulo) ⇒ [<code>Leaver</code>](#Leaver)
    * [.setColorSubtitulo(value)](#Leaver+setColorSubtitulo) ⇒ [<code>Leaver</code>](#Leaver)
    * [.setColorCircle(value)](#Leaver+setColorCircle) ⇒ [<code>Leaver</code>](#Leaver)
    * [.setColorOverlay(value)](#Leaver+setColorOverlay) ⇒ [<code>Leaver</code>](#Leaver)
    * [.setOpacityOverlay(value)](#Leaver+setOpacityOverlay) ⇒ [<code>Leaver</code>](#Leaver)
    * [.setBackground(type, [data])](#Leaver+setBackground)
    * [.setTypeOverlay(type)](#Leaver+setTypeOverlay)
    * [.build([font])](#Leaver+build) ⇒ <code>Promise.&lt;Buffer&gt;</code>

<a name="new_Leaver_new"></a>

### new Leaver()
![Leave Card](https://raw.githubusercontent.com/SrGobi/canvacard/refs/heads/test/leave.png)

**Example**  
```js
    const leaveCardURL = await new Leaver()
      .setAvatar(member.user.displayAvatarURL({ format: 'png', size: 4096 }))
      .setBackground('IMAGE', https://i.imgur.com/aClDVjh.jpg)
      .setTitulo("Titulo de la Tarjeta")
      .setSubtitulo("Subtitulo de la Tarjeta")
      .setOpacityOverlay("0.5")
      .setColorTitulo(#FFFFFF)
      .setColorSubtitulo(#FFFFFF)
      .setColorCircle(#FFFFFF)
      .setColorOverlay(#FFFFFF)
      .setTypeOverlay("rounded")
    leaverCardURL.build("Cascadia Code PL")
      .then(data => {
          canvacard.write(data, "LeaverCard.png");
      })
<a name="Leaver+data"></a>

### leaver.data
Fondo de la tarjeta

**Kind**: instance property of [<code>Leaver</code>](#Leaver)  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| backgroundGlobal | <code>object</code> |  | Fondo de la tarjeta |
| [backgroundGlobal.type] | <code>&quot;IMAGE&quot;</code> \| <code>&quot;COLOR&quot;</code> | <code>&quot;color&quot;</code> | Tipo de fondo |

<a name="Leaver+avatar"></a>

### leaver.avatar : <code>string</code>
Avatar de la tarjeta

**Kind**: instance property of [<code>Leaver</code>](#Leaver)  
<a name="Leaver+titulo"></a>

### leaver.titulo : <code>string</code>
Título creado con Canvacard

**Kind**: instance property of [<code>Leaver</code>](#Leaver)  
<a name="Leaver+subtitulo"></a>

### leaver.subtitulo : <code>string</code>
Subtítulo creado con Canvacard

**Kind**: instance property of [<code>Leaver</code>](#Leaver)  
<a name="Leaver+colorTitulo"></a>

### leaver.colorTitulo : <code>string</code>
Color del título creado con Canvacard

**Kind**: instance property of [<code>Leaver</code>](#Leaver)  
<a name="Leaver+colorSubtitulo"></a>

### leaver.colorSubtitulo : <code>string</code>
Color del Subtítulo creado con Canvacard

**Kind**: instance property of [<code>Leaver</code>](#Leaver)  
<a name="Leaver+colorCircle"></a>

### leaver.colorCircle : <code>string</code>
Color del circulo

**Kind**: instance property of [<code>Leaver</code>](#Leaver)  
<a name="Leaver+colorOverlay"></a>

### leaver.colorOverlay : <code>number</code> \| <code>string</code>
Color del overlay

**Kind**: instance property of [<code>Leaver</code>](#Leaver)  
<a name="Leaver+opacityOverlay"></a>

### leaver.opacityOverlay : <code>string</code>
Opacidad del overlay

**Kind**: instance property of [<code>Leaver</code>](#Leaver)  
<a name="Leaver+typeOverlay"></a>

### leaver.typeOverlay : <code>string</code>
Tipo de overlay

**Kind**: instance property of [<code>Leaver</code>](#Leaver)  
<a name="Leaver+colorBackground"></a>

### leaver.colorBackground : <code>string</code>
Color del fondo

**Kind**: instance property of [<code>Leaver</code>](#Leaver)  
<a name="Leaver+setColor"></a>

### leaver.setColor(id, color) ⇒ [<code>Leaver</code>](#Leaver)
Establecer color

**Kind**: instance method of [<code>Leaver</code>](#Leaver)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>&quot;titulo&quot;</code> \| <code>&quot;titulo-border&quot;</code> \| <code>&quot;titulo-box&quot;</code> \| <code>&quot;subtitulo&quot;</code> \| <code>&quot;subtitulo-border&quot;</code> \| <code>&quot;subtitulo-box&quot;</code> \| <code>&quot;avatar&quot;</code> \| <code>&quot;background&quot;</code> \| <code>&quot;border&quot;</code> |  |
| color | <code>string</code> | Código de color HTML5 |

<a name="Leaver+setAvatar"></a>

### leaver.setAvatar(value) ⇒ [<code>Leaver</code>](#Leaver)
Valor del avatar

**Kind**: instance method of [<code>Leaver</code>](#Leaver)  

| Param | Type |
| --- | --- |
| value | <code>string</code> \| <code>Buffer</code> | 

<a name="Leaver+setTitulo"></a>

### leaver.setTitulo(value) ⇒ [<code>Leaver</code>](#Leaver)
Valor del título

**Kind**: instance method of [<code>Leaver</code>](#Leaver)  

| Param | Type |
| --- | --- |
| value | <code>string</code> | 

<a name="Leaver+setSubtitulo"></a>

### leaver.setSubtitulo(value) ⇒ [<code>Leaver</code>](#Leaver)
Valor del subtítulo

**Kind**: instance method of [<code>Leaver</code>](#Leaver)  

| Param | Type |
| --- | --- |
| value | <code>string</code> | 

<a name="Leaver+setColorTitulo"></a>

### leaver.setColorTitulo(value) ⇒ [<code>Leaver</code>](#Leaver)
Valor del color del título

**Kind**: instance method of [<code>Leaver</code>](#Leaver)  

| Param | Type |
| --- | --- |
| value | <code>string</code> | 

<a name="Leaver+setColorSubtitulo"></a>

### leaver.setColorSubtitulo(value) ⇒ [<code>Leaver</code>](#Leaver)
Valor del color del subtítulo

**Kind**: instance method of [<code>Leaver</code>](#Leaver)  

| Param | Type |
| --- | --- |
| value | <code>string</code> | 

<a name="Leaver+setColorCircle"></a>

### leaver.setColorCircle(value) ⇒ [<code>Leaver</code>](#Leaver)
Valor del color del círculo

**Kind**: instance method of [<code>Leaver</code>](#Leaver)  

| Param | Type |
| --- | --- |
| value | <code>string</code> | 

<a name="Leaver+setColorOverlay"></a>

### leaver.setColorOverlay(value) ⇒ [<code>Leaver</code>](#Leaver)
Valor del color del overlay

**Kind**: instance method of [<code>Leaver</code>](#Leaver)  

| Param | Type |
| --- | --- |
| value | <code>string</code> | 

<a name="Leaver+setOpacityOverlay"></a>

### leaver.setOpacityOverlay(value) ⇒ [<code>Leaver</code>](#Leaver)
Valor del color del overlay

**Kind**: instance method of [<code>Leaver</code>](#Leaver)  

| Param | Type |
| --- | --- |
| value | <code>number</code> \| <code>string</code> | 

<a name="Leaver+setBackground"></a>

### leaver.setBackground(type, [data])
Establecer imagen / color de fondo

**Kind**: instance method of [<code>Leaver</code>](#Leaver)  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>&quot;COLOR&quot;</code> \| <code>&quot;IMAGE&quot;</code> | Tipo de fondo |
| [data] | <code>string</code> \| <code>Buffer</code> | Color o imagen de fondo |

<a name="Leaver+setTypeOverlay"></a>

### leaver.setTypeOverlay(type)
Establecer rectangle / rounded de overlay

**Kind**: instance method of [<code>Leaver</code>](#Leaver)  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>&quot;RECTANGLE&quot;</code> \| <code>&quot;ROUNDED&quot;</code> | Tipo de fondo |

<a name="Leaver+build"></a>

### leaver.build([font]) ⇒ <code>Promise.&lt;Buffer&gt;</code>
Construye la tarjeta de despedida

**Kind**: instance method of [<code>Leaver</code>](#Leaver)  
**Returns**: <code>Promise.&lt;Buffer&gt;</code> - La tarjeta de despedida en formato de buffer  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [font] | <code>string</code> | <code>&quot;\&quot;Arial\&quot;&quot;</code> | Familia tipográfica |

