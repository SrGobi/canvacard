# 🎨 Welcomer

### Welcomer

Creador de tarjetas de bienvenida

**Kind**: global class

* [Welcomer](<🎨 Welcomer.md#Welcomer>)
  * [new Welcomer()](<🎨 Welcomer.md#new\_Welcomer\_new>)
  * [.data](<🎨 Welcomer.md#Welcomer+data>)
  * [.avatar](<🎨 Welcomer.md#Welcomer+avatar>) : `string`
  * [.titulo](<🎨 Welcomer.md#Welcomer+titulo>) : `string`
  * [.subtitulo](<🎨 Welcomer.md#Welcomer+subtitulo>) : `string`
  * [.colorTitulo](<🎨 Welcomer.md#Welcomer+colorTitulo>) : `string`
  * [.colorSubtitulo](<🎨 Welcomer.md#Welcomer+colorSubtitulo>) : `string`
  * [.colorCircle](<🎨 Welcomer.md#Welcomer+colorCircle>) : `string`
  * [.colorOverlay](<🎨 Welcomer.md#Welcomer+colorOverlay>) : `number` | `string`
  * [.opacityOverlay](<🎨 Welcomer.md#Welcomer+opacityOverlay>) : `string`
  * [.typeOverlay](<🎨 Welcomer.md#Welcomer+typeOverlay>) : `string`
  * [.colorBackground](<🎨 Welcomer.md#Welcomer+colorBackground>) : `string`
  * [.setColor(id, color)](<🎨 Welcomer.md#Welcomer+setColor>) ⇒ [`Welcomer`](<🎨 Welcomer.md#Welcomer>)
  * [.setAvatar(value)](<🎨 Welcomer.md#Welcomer+setAvatar>) ⇒ [`Welcomer`](<🎨 Welcomer.md#Welcomer>)
  * [.setTitulo(value)](<🎨 Welcomer.md#Welcomer+setTitulo>) ⇒ [`Welcomer`](<🎨 Welcomer.md#Welcomer>)
  * [.setSubtitulo(value)](<🎨 Welcomer.md#Welcomer+setSubtitulo>) ⇒ [`Welcomer`](<🎨 Welcomer.md#Welcomer>)
  * [.setColorTitulo(value)](<🎨 Welcomer.md#Welcomer+setColorTitulo>) ⇒ [`Welcomer`](<🎨 Welcomer.md#Welcomer>)
  * [.setColorSubtitulo(value)](<🎨 Welcomer.md#Welcomer+setColorSubtitulo>) ⇒ [`Welcomer`](<🎨 Welcomer.md#Welcomer>)
  * [.setColorCircle(value)](<🎨 Welcomer.md#Welcomer+setColorCircle>) ⇒ [`Welcomer`](<🎨 Welcomer.md#Welcomer>)
  * [.setColorOverlay(value)](<🎨 Welcomer.md#Welcomer+setColorOverlay>) ⇒ [`Welcomer`](<🎨 Welcomer.md#Welcomer>)
  * [.setOpacityOverlay(value)](<🎨 Welcomer.md#Welcomer+setOpacityOverlay>) ⇒ [`Welcomer`](<🎨 Welcomer.md#Welcomer>)
  * [.setBackground(type, \[data\])](<🎨 Welcomer.md#Welcomer+setBackground>)
  * [.setTypeOverlay(type)](<🎨 Welcomer.md#Welcomer+setTypeOverlay>)
  * [.build(ops)](<🎨 Welcomer.md#Welcomer+build>) ⇒ `Promise.<Buffer>`

#### new Welcomer()

Welcome image builder

**Example**

```js
const welcomeCardURL = await new Welcomer()
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
      welcomeCardURL.build()
        .then(data => {
            canvacard.write(data, "WelcomeCard.png");
        })
```

#### welcomer.data

Fondo de la tarjeta

**Kind**: instance property of [`Welcomer`](<🎨 Welcomer.md#Welcomer>)\
**Properties**

| Name                     | Type                   | Default   | Description         |
| ------------------------ | ---------------------- | --------- | ------------------- |
| backgroundGlobal         | `object`               |           | Fondo de la tarjeta |
| \[backgroundGlobal.type] | `"IMAGE"` \| `"COLOR"` | `"color"` | Tipo de fondo       |

#### welcomer.avatar : `string`

Avatar de la tarjeta

**Kind**: instance property of [`Welcomer`](<🎨 Welcomer.md#Welcomer>)\


#### welcomer.titulo : `string`

Título creado con Canvacard

**Kind**: instance property of [`Welcomer`](<🎨 Welcomer.md#Welcomer>)\


#### welcomer.subtitulo : `string`

Subtítulo creado con Canvacard

**Kind**: instance property of [`Welcomer`](<🎨 Welcomer.md#Welcomer>)\


#### welcomer.colorTitulo : `string`

Color del título creado con Canvacard

**Kind**: instance property of [`Welcomer`](<🎨 Welcomer.md#Welcomer>)\


#### welcomer.colorSubtitulo : `string`

Color del Subtítulo creado con Canvacard

**Kind**: instance property of [`Welcomer`](<🎨 Welcomer.md#Welcomer>)\


#### welcomer.colorCircle : `string`

Color del circulo

**Kind**: instance property of [`Welcomer`](<🎨 Welcomer.md#Welcomer>)\


#### welcomer.colorOverlay : `number` | `string`

Color del overlay

**Kind**: instance property of [`Welcomer`](<🎨 Welcomer.md#Welcomer>)\


#### welcomer.opacityOverlay : `string`

Opacidad del overlay

**Kind**: instance property of [`Welcomer`](<🎨 Welcomer.md#Welcomer>)\


#### welcomer.typeOverlay : `string`

Tipo de overlay

**Kind**: instance property of [`Welcomer`](<🎨 Welcomer.md#Welcomer>)\


#### welcomer.colorBackground : `string`

Color del fondo

**Kind**: instance property of [`Welcomer`](<🎨 Welcomer.md#Welcomer>)\


#### welcomer.setColor(id, color) ⇒ [`Welcomer`](<🎨 Welcomer.md#Welcomer>)

Establecer color

**Kind**: instance method of [`Welcomer`](<🎨 Welcomer.md#Welcomer>)

| Param | Type                                                                                                                                                          | Description           |
| ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- |
| id    | `"titulo"` \| `"titulo-border"` \| `"titulo-box"` \| `"subtitulo"` \| `"subtitulo-border"` \| `"subtitulo-box"` \| `"avatar"` \| `"background"` \| `"border"` |                       |
| color | `string`                                                                                                                                                      | Código de color HTML5 |

#### welcomer.setAvatar(value) ⇒ [`Welcomer`](<🎨 Welcomer.md#Welcomer>)

Valor del avatar

**Kind**: instance method of [`Welcomer`](<🎨 Welcomer.md#Welcomer>)

| Param | Type                 |
| ----- | -------------------- |
| value | `string` \| `Buffer` |

#### welcomer.setTitulo(value) ⇒ [`Welcomer`](<🎨 Welcomer.md#Welcomer>)

Valor del título

**Kind**: instance method of [`Welcomer`](<🎨 Welcomer.md#Welcomer>)

| Param | Type     |
| ----- | -------- |
| value | `string` |

#### welcomer.setSubtitulo(value) ⇒ [`Welcomer`](<🎨 Welcomer.md#Welcomer>)

Valor del subtítulo

**Kind**: instance method of [`Welcomer`](<🎨 Welcomer.md#Welcomer>)

| Param | Type     |
| ----- | -------- |
| value | `string` |

#### welcomer.setColorTitulo(value) ⇒ [`Welcomer`](<🎨 Welcomer.md#Welcomer>)

Valor del color del título

**Kind**: instance method of [`Welcomer`](<🎨 Welcomer.md#Welcomer>)

| Param | Type     |
| ----- | -------- |
| value | `string` |

#### welcomer.setColorSubtitulo(value) ⇒ [`Welcomer`](<🎨 Welcomer.md#Welcomer>)

Valor del color del subtítulo

**Kind**: instance method of [`Welcomer`](<🎨 Welcomer.md#Welcomer>)

| Param | Type     |
| ----- | -------- |
| value | `string` |

#### welcomer.setColorCircle(value) ⇒ [`Welcomer`](<🎨 Welcomer.md#Welcomer>)

Valor del color del círculo

**Kind**: instance method of [`Welcomer`](<🎨 Welcomer.md#Welcomer>)

| Param | Type     |
| ----- | -------- |
| value | `string` |

#### welcomer.setColorOverlay(value) ⇒ [`Welcomer`](<🎨 Welcomer.md#Welcomer>)

Valor del color del overlay

**Kind**: instance method of [`Welcomer`](<🎨 Welcomer.md#Welcomer>)

| Param | Type     |
| ----- | -------- |
| value | `string` |

#### welcomer.setOpacityOverlay(value) ⇒ [`Welcomer`](<🎨 Welcomer.md#Welcomer>)

Valor del color del overlay

**Kind**: instance method of [`Welcomer`](<🎨 Welcomer.md#Welcomer>)

| Param | Type                 |
| ----- | -------------------- |
| value | `number` \| `string` |

#### welcomer.setBackground(type, \[data])

Establecer imagen / color de fondo

**Kind**: instance method of [`Welcomer`](<🎨 Welcomer.md#Welcomer>)

| Param   | Type                   | Description             |
| ------- | ---------------------- | ----------------------- |
| type    | `"COLOR"` \| `"IMAGE"` | Tipo de fondo           |
| \[data] | `string` \| `Buffer`   | Color o imagen de fondo |

#### welcomer.setTypeOverlay(type)

Establecer rectangle / rounded de overlay

**Kind**: instance method of [`Welcomer`](<🎨 Welcomer.md#Welcomer>)

| Param | Type                         | Description   |
| ----- | ---------------------------- | ------------- |
| type  | `"RECTANGLE"` \| `"ROUNDED"` | Tipo de fondo |

#### welcomer.build(ops) ⇒ `Promise.<Buffer>`

Construye la tarjeta de bienvenida

**Kind**: instance method of [`Welcomer`](<🎨 Welcomer.md#Welcomer>)

| Param        | Type     | Default                         | Description                 |
| ------------ | -------- | ------------------------------- | --------------------------- |
| ops          | `object` |                                 | Fuentes                     |
| \[ops.fontX] | `string` | `"&quot;MANROPE_BOLD&quot;"`    | Familia tipográfica Bold    |
| \[ops.fontY] | `string` | `"&quot;MANROPE_REGULAR&quot;"` | Familia tipográfica regular |
