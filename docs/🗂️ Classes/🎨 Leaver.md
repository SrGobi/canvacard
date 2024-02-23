# 🎨 Leaver

### Leaver

Creador de tarjetas de despedida

**Kind**: global class

* [Leaver](<🎨 Leaver.md#Leaver>)
  * [new Leaver()](<🎨 Leaver.md#new\_Leaver\_new>)
  * [.data](<🎨 Leaver.md#Leaver+data>)
  * [.avatar](<🎨 Leaver.md#Leaver+avatar>) : `string`
  * [.titulo](<🎨 Leaver.md#Leaver+titulo>) : `string`
  * [.subtitulo](<🎨 Leaver.md#Leaver+subtitulo>) : `string`
  * [.colorTitulo](<🎨 Leaver.md#Leaver+colorTitulo>) : `string`
  * [.colorSubtitulo](<🎨 Leaver.md#Leaver+colorSubtitulo>) : `string`
  * [.colorCircle](<🎨 Leaver.md#Leaver+colorCircle>) : `string`
  * [.colorOverlay](<🎨 Leaver.md#Leaver+colorOverlay>) : `number` | `string`
  * [.opacityOverlay](<🎨 Leaver.md#Leaver+opacityOverlay>) : `string`
  * [.typeOverlay](<🎨 Leaver.md#Leaver+typeOverlay>) : `string`
  * [.colorBackground](<🎨 Leaver.md#Leaver+colorBackground>) : `string`
  * [.setColor(id, color)](<🎨 Leaver.md#Leaver+setColor>) ⇒ [`Leaver`](<🎨 Leaver.md#Leaver>)
  * [.setAvatar(value)](<🎨 Leaver.md#Leaver+setAvatar>) ⇒ [`Leaver`](<🎨 Leaver.md#Leaver>)
  * [.setTitulo(value)](<🎨 Leaver.md#Leaver+setTitulo>) ⇒ [`Leaver`](<🎨 Leaver.md#Leaver>)
  * [.setSubtitulo(value)](<🎨 Leaver.md#Leaver+setSubtitulo>) ⇒ [`Leaver`](<🎨 Leaver.md#Leaver>)
  * [.setColorTitulo(value)](<🎨 Leaver.md#Leaver+setColorTitulo>) ⇒ [`Leaver`](<🎨 Leaver.md#Leaver>)
  * [.setColorSubtitulo(value)](<🎨 Leaver.md#Leaver+setColorSubtitulo>) ⇒ [`Leaver`](<🎨 Leaver.md#Leaver>)
  * [.setColorCircle(value)](<🎨 Leaver.md#Leaver+setColorCircle>) ⇒ [`Leaver`](<🎨 Leaver.md#Leaver>)
  * [.setColorOverlay(value)](<🎨 Leaver.md#Leaver+setColorOverlay>) ⇒ [`Leaver`](<🎨 Leaver.md#Leaver>)
  * [.setOpacityOverlay(value)](<🎨 Leaver.md#Leaver+setOpacityOverlay>) ⇒ [`Leaver`](<🎨 Leaver.md#Leaver>)
  * [.setBackground(type, \[data\])](<🎨 Leaver.md#Leaver+setBackground>)
  * [.setTypeOverlay(type)](<🎨 Leaver.md#Leaver+setTypeOverlay>)
  * [.build(ops)](<🎨 Leaver.md#Leaver+build>) ⇒ `Promise.<Buffer>`

#### new Leaver()

Leave image builder

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
      leaverCardURL.build()
        .then(data => {
            canvacard.write(data, "LeaverCard.png");
        })
```

#### leaver.data

Fondo de la tarjeta

**Kind**: instance property of [`Leaver`](<🎨 Leaver.md#Leaver>)\
**Properties**

| Name                     | Type                   | Default   | Description         |
| ------------------------ | ---------------------- | --------- | ------------------- |
| backgroundGlobal         | `object`               |           | Fondo de la tarjeta |
| \[backgroundGlobal.type] | `"IMAGE"` \| `"COLOR"` | `"color"` | Tipo de fondo       |

#### leaver.avatar : `string`

Avatar de la tarjeta

**Kind**: instance property of [`Leaver`](<🎨 Leaver.md#Leaver>)\


#### leaver.titulo : `string`

Título creado con Canvacard

**Kind**: instance property of [`Leaver`](<🎨 Leaver.md#Leaver>)\


#### leaver.subtitulo : `string`

Subtítulo creado con Canvacard

**Kind**: instance property of [`Leaver`](<🎨 Leaver.md#Leaver>)\


#### leaver.colorTitulo : `string`

Color del título creado con Canvacard

**Kind**: instance property of [`Leaver`](<🎨 Leaver.md#Leaver>)\


#### leaver.colorSubtitulo : `string`

Color del Subtítulo creado con Canvacard

**Kind**: instance property of [`Leaver`](<🎨 Leaver.md#Leaver>)\


#### leaver.colorCircle : `string`

Color del circulo

**Kind**: instance property of [`Leaver`](<🎨 Leaver.md#Leaver>)\


#### leaver.colorOverlay : `number` | `string`

Color del overlay

**Kind**: instance property of [`Leaver`](<🎨 Leaver.md#Leaver>)\


#### leaver.opacityOverlay : `string`

Opacidad del overlay

**Kind**: instance property of [`Leaver`](<🎨 Leaver.md#Leaver>)\


#### leaver.typeOverlay : `string`

Tipo de overlay

**Kind**: instance property of [`Leaver`](<🎨 Leaver.md#Leaver>)\


#### leaver.colorBackground : `string`

Color del fondo

**Kind**: instance property of [`Leaver`](<🎨 Leaver.md#Leaver>)\


#### leaver.setColor(id, color) ⇒ [`Leaver`](<🎨 Leaver.md#Leaver>)

Establecer color

**Kind**: instance method of [`Leaver`](<🎨 Leaver.md#Leaver>)

| Param | Type                                                                                                                                                          | Description           |
| ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- |
| id    | `"titulo"` \| `"titulo-border"` \| `"titulo-box"` \| `"subtitulo"` \| `"subtitulo-border"` \| `"subtitulo-box"` \| `"avatar"` \| `"background"` \| `"border"` |                       |
| color | `string`                                                                                                                                                      | Código de color HTML5 |

#### leaver.setAvatar(value) ⇒ [`Leaver`](<🎨 Leaver.md#Leaver>)

Valor del avatar

**Kind**: instance method of [`Leaver`](<🎨 Leaver.md#Leaver>)

| Param | Type                 |
| ----- | -------------------- |
| value | `string` \| `Buffer` |

#### leaver.setTitulo(value) ⇒ [`Leaver`](<🎨 Leaver.md#Leaver>)

Valor del título

**Kind**: instance method of [`Leaver`](<🎨 Leaver.md#Leaver>)

| Param | Type     |
| ----- | -------- |
| value | `string` |

#### leaver.setSubtitulo(value) ⇒ [`Leaver`](<🎨 Leaver.md#Leaver>)

Valor del subtítulo

**Kind**: instance method of [`Leaver`](<🎨 Leaver.md#Leaver>)

| Param | Type     |
| ----- | -------- |
| value | `string` |

#### leaver.setColorTitulo(value) ⇒ [`Leaver`](<🎨 Leaver.md#Leaver>)

Valor del color del título

**Kind**: instance method of [`Leaver`](<🎨 Leaver.md#Leaver>)

| Param | Type     |
| ----- | -------- |
| value | `string` |

#### leaver.setColorSubtitulo(value) ⇒ [`Leaver`](<🎨 Leaver.md#Leaver>)

Valor del color del subtítulo

**Kind**: instance method of [`Leaver`](<🎨 Leaver.md#Leaver>)

| Param | Type     |
| ----- | -------- |
| value | `string` |

#### leaver.setColorCircle(value) ⇒ [`Leaver`](<🎨 Leaver.md#Leaver>)

Valor del color del círculo

**Kind**: instance method of [`Leaver`](<🎨 Leaver.md#Leaver>)

| Param | Type     |
| ----- | -------- |
| value | `string` |

#### leaver.setColorOverlay(value) ⇒ [`Leaver`](<🎨 Leaver.md#Leaver>)

Valor del color del overlay

**Kind**: instance method of [`Leaver`](<🎨 Leaver.md#Leaver>)

| Param | Type     |
| ----- | -------- |
| value | `string` |

#### leaver.setOpacityOverlay(value) ⇒ [`Leaver`](<🎨 Leaver.md#Leaver>)

Valor del color del overlay

**Kind**: instance method of [`Leaver`](<🎨 Leaver.md#Leaver>)

| Param | Type                 |
| ----- | -------------------- |
| value | `number` \| `string` |

#### leaver.setBackground(type, \[data])

Establecer imagen / color de fondo

**Kind**: instance method of [`Leaver`](<🎨 Leaver.md#Leaver>)

| Param   | Type                   | Description             |
| ------- | ---------------------- | ----------------------- |
| type    | `"COLOR"` \| `"IMAGE"` | Tipo de fondo           |
| \[data] | `string` \| `Buffer`   | Color o imagen de fondo |

#### leaver.setTypeOverlay(type)

Establecer rectangle / rounded de overlay

**Kind**: instance method of [`Leaver`](<🎨 Leaver.md#Leaver>)

| Param | Type                         | Description   |
| ----- | ---------------------------- | ------------- |
| type  | `"RECTANGLE"` \| `"ROUNDED"` | Tipo de fondo |

#### leaver.build(ops) ⇒ `Promise.<Buffer>`

Construye la tarjeta de despedida

**Kind**: instance method of [`Leaver`](<🎨 Leaver.md#Leaver>)

| Param        | Type     | Default                         | Description                 |
| ------------ | -------- | ------------------------------- | --------------------------- |
| ops          | `object` |                                 | Fuentes                     |
| \[ops.fontX] | `string` | `"&quot;MANROPE_BOLD&quot;"`    | Familia tipográfica Bold    |
| \[ops.fontY] | `string` | `"&quot;MANROPE_REGULAR&quot;"` | Familia tipográfica regular |
