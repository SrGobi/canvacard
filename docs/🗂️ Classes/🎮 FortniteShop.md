# 🎮 FortniteShop

### Classes

[FortniteShop](<🎮 FortniteShop.md#FortniteShop>)

Creador de imagen de la tienda de fortnite

### Functions

[formatVariable(prefix, variable)](<🎮 FortniteShop.md#formatVariable>) ⇒

Obtiene variables y tipos

[applyText(canvas, text, defaultFontSize, width, font)](<🎮 FortniteShop.md#applyText>) ⇒

Obtiene variables y tipos

### FortniteShop

Creador de imagen de la tienda de fortnite

**Kind**: global class

* [FortniteShop](<🎮 FortniteShop.md#FortniteShop>)
  * [new FortniteShop()](<🎮 FortniteShop.md#new\_FortniteShop\_new>)
  * [.token](<🎮 FortniteShop.md#FortniteShop+token>) : `string`
  * [.textHeader](<🎮 FortniteShop.md#FortniteShop+textHeader>) : `string`
  * [.textDaily](<🎮 FortniteShop.md#FortniteShop+textDaily>) : `string`
  * [.textFeatured](<🎮 FortniteShop.md#FortniteShop+textFeatured>) : `string`
  * [.textDate](<🎮 FortniteShop.md#FortniteShop+textDate>) : `string`
  * [.textFooter](<🎮 FortniteShop.md#FortniteShop+textFooter>) : `string`
  * [.background](<🎮 FortniteShop.md#FortniteShop+background>) : `string`
  * [.setToken(value)](<🎮 FortniteShop.md#FortniteShop+setToken>) ⇒ [`FortniteShop`](<🎮 FortniteShop.md#FortniteShop>)
  * [.setBackground(value)](<🎮 FortniteShop.md#FortniteShop+setBackground>) ⇒ [`FortniteShop`](<🎮 FortniteShop.md#FortniteShop>)
  * [.setText(value)](<🎮 FortniteShop.md#FortniteShop+setText>) ⇒ [`FortniteShop`](<🎮 FortniteShop.md#FortniteShop>)
  * [.lang(value)](<🎮 FortniteShop.md#FortniteShop+lang>) ⇒ [`FortniteShop`](<🎮 FortniteShop.md#FortniteShop>)
  * [.dateFormat(value)](<🎮 FortniteShop.md#FortniteShop+dateFormat>) ⇒ [`FortniteShop`](<🎮 FortniteShop.md#FortniteShop>)

#### new FortniteShop()

FortniteShop image builder

**Example**

```js
const FortniteShopCardURL = await new FortniteShop()
        .setToken("3533192f-66bc-48b2-8df9-c03bfeb75957")
        .setText("footer", "ESP CUSTOMS X FORTNITE")
        .toAttachment();
      await channel.send({ files: [{ attachment: FortniteShopCardURL, name: 'FortniteShop.png' }] })
```

#### fortniteShop.token : `string`

Token

**Kind**: instance property of [`FortniteShop`](<🎮 FortniteShop.md#FortniteShop>)\


#### fortniteShop.textHeader : `string`

Texto del encabezado

**Kind**: instance property of [`FortniteShop`](<🎮 FortniteShop.md#FortniteShop>)\


#### fortniteShop.textDaily : `string`

Texto del dia

**Kind**: instance property of [`FortniteShop`](<🎮 FortniteShop.md#FortniteShop>)\


#### fortniteShop.textFeatured : `string`

Texto de destacados

**Kind**: instance property of [`FortniteShop`](<🎮 FortniteShop.md#FortniteShop>)\


#### fortniteShop.textDate : `string`

Textos de datos

**Kind**: instance property of [`FortniteShop`](<🎮 FortniteShop.md#FortniteShop>)\


#### fortniteShop.textFooter : `string`

Texto del footer

**Kind**: instance property of [`FortniteShop`](<🎮 FortniteShop.md#FortniteShop>)\


#### fortniteShop.background : `string`

imagen de fondo

**Kind**: instance property of [`FortniteShop`](<🎮 FortniteShop.md#FortniteShop>)\


#### fortniteShop.setToken(value) ⇒ [`FortniteShop`](<🎮 FortniteShop.md#FortniteShop>)

Valor del Token

**Kind**: instance method of [`FortniteShop`](<🎮 FortniteShop.md#FortniteShop>)

| Param | Type     |
| ----- | -------- |
| value | `string` |

#### fortniteShop.setBackground(value) ⇒ [`FortniteShop`](<🎮 FortniteShop.md#FortniteShop>)

Valor del background

**Kind**: instance method of [`FortniteShop`](<🎮 FortniteShop.md#FortniteShop>)

| Param | Type     |
| ----- | -------- |
| value | `string` |

#### fortniteShop.setText(value) ⇒ [`FortniteShop`](<🎮 FortniteShop.md#FortniteShop>)

Valor del texto

**Kind**: instance method of [`FortniteShop`](<🎮 FortniteShop.md#FortniteShop>)

| Param | Type     |
| ----- | -------- |
| value | `string` |

#### fortniteShop.lang(value) ⇒ [`FortniteShop`](<🎮 FortniteShop.md#FortniteShop>)

Valor del idioma

**Kind**: instance method of [`FortniteShop`](<🎮 FortniteShop.md#FortniteShop>)

| Param | Type     |
| ----- | -------- |
| value | `string` |

#### fortniteShop.dateFormat(value) ⇒ [`FortniteShop`](<🎮 FortniteShop.md#FortniteShop>)

Valor del formato de fecha

**Kind**: instance method of [`FortniteShop`](<🎮 FortniteShop.md#FortniteShop>)

| Param | Type     |
| ----- | -------- |
| value | `string` |

### formatVariable(prefix, variable) ⇒

Obtiene variables y tipos

**Kind**: global function\
**Returns**: La variable formateada

| Param    | Type     | Description           |
| -------- | -------- | --------------------- |
| prefix   | `object` | El tipo de variable   |
| variable | `object` | La variable a cambiar |

### applyText(canvas, text, defaultFontSize, width, font) ⇒

Obtiene variables y tipos

**Kind**: global function\
**Returns**: La variable formateada

| Param           | Type     | Description                                 |
| --------------- | -------- | ------------------------------------------- |
| canvas          | `object` | El lienzo                                   |
| text            | `object` | El texto                                    |
| defaultFontSize | `object` | El tamaño de píxel de fuente predeterminado |
| width           | `object` | El ancho máximo del texto                   |
| font            | `object` | La fuente del texto                         |
