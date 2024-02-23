# 📊 FortniteStats

### Classes

[FortniteStats](<📊 FortniteStats.md#FortniteStats>)

Creador de imagen de estadisticas de fortnite

### Functions

[formatVariable(prefix, variable)](<📊 FortniteStats.md#formatVariable>) ⇒

Obtiene variables y tipos

### FortniteStats

Creador de imagen de estadisticas de fortnite

**Kind**: global class

* [FortniteStats](<📊 FortniteStats.md#FortniteStats>)
  * [new FortniteStats()](<📊 FortniteStats.md#new\_FortniteStats\_new>)
  * [.token](<📊 FortniteStats.md#FortniteStats+token>) : `string`
  * [.platform](<📊 FortniteStats.md#FortniteStats+platform>) : `string`
  * [.user](<📊 FortniteStats.md#FortniteStats+user>) : `string`
  * [.textFooter](<📊 FortniteStats.md#FortniteStats+textFooter>) : `string`
  * [.textAverageKills](<📊 FortniteStats.md#FortniteStats+textAverageKills>) : `string`
  * [.textAverageKill](<📊 FortniteStats.md#FortniteStats+textAverageKill>) : `string`
  * [.textWPercent](<📊 FortniteStats.md#FortniteStats+textWPercent>) : `string`
  * [.textWinPercent](<📊 FortniteStats.md#FortniteStats+textWinPercent>) : `string`
  * [.textKD](<📊 FortniteStats.md#FortniteStats+textKD>) : `string`
  * [.textWins](<📊 FortniteStats.md#FortniteStats+textWins>) : `string`
  * [.textWin](<📊 FortniteStats.md#FortniteStats+textWin>) : `string`
  * [.textKills](<📊 FortniteStats.md#FortniteStats+textKills>) : `string`
  * [.textKill](<📊 FortniteStats.md#FortniteStats+textKill>) : `string`
  * [.textMatches](<📊 FortniteStats.md#FortniteStats+textMatches>) : `string`
  * [.textMatch](<📊 FortniteStats.md#FortniteStats+textMatch>) : `string`
  * [.setToken(value)](<📊 FortniteStats.md#FortniteStats+setToken>) ⇒ [`FortniteStats`](<📊 FortniteStats.md#FortniteStats>)
  * [.setPlatform(value)](<📊 FortniteStats.md#FortniteStats+setPlatform>) ⇒ [`FortniteStats`](<📊 FortniteStats.md#FortniteStats>)
  * [.setUser(value)](<📊 FortniteStats.md#FortniteStats+setUser>) ⇒ [`FortniteStats`](<📊 FortniteStats.md#FortniteStats>)
  * [.setText(value)](<📊 FortniteStats.md#FortniteStats+setText>) ⇒ [`FortniteStats`](<📊 FortniteStats.md#FortniteStats>)

#### new FortniteStats()

FortniteStats image builder

**Example**

```js
const FortniteStatsCardURL = await new FortniteStats()
      .setToken("3533192f-66bc-48b2-8df9-c03bfeb75957")
      .setUser("BLD SRGOBI")
      .setPlatform("pc")
      .setText("footer", "ESP CUSTOMS X FORTNITE")
      .toAttachment();
  await channel.send({ files: [{ attachment: FortniteStatsCardURL, name: 'FortniteStats.png' }] })
```

#### fortniteStats.token : `string`

Token

**Kind**: instance property of [`FortniteStats`](<📊 FortniteStats.md#FortniteStats>)\


#### fortniteStats.platform : `string`

Plaraforma

**Kind**: instance property of [`FortniteStats`](<📊 FortniteStats.md#FortniteStats>)\


#### fortniteStats.user : `string`

Nombre de usuario

**Kind**: instance property of [`FortniteStats`](<📊 FortniteStats.md#FortniteStats>)\


#### fortniteStats.textFooter : `string`

Texto del footer

**Kind**: instance property of [`FortniteStats`](<📊 FortniteStats.md#FortniteStats>)\


#### fortniteStats.textAverageKills : `string`

Texto AvengersKills

**Kind**: instance property of [`FortniteStats`](<📊 FortniteStats.md#FortniteStats>)\


#### fortniteStats.textAverageKill : `string`

Texto AverageKill

**Kind**: instance property of [`FortniteStats`](<📊 FortniteStats.md#FortniteStats>)\


#### fortniteStats.textWPercent : `string`

Texto Porcejtage victoria

**Kind**: instance property of [`FortniteStats`](<📊 FortniteStats.md#FortniteStats>)\


#### fortniteStats.textWinPercent : `string`

Texto Porcejtage victorias

**Kind**: instance property of [`FortniteStats`](<📊 FortniteStats.md#FortniteStats>)\


#### fortniteStats.textKD : `string`

Texto KD

**Kind**: instance property of [`FortniteStats`](<📊 FortniteStats.md#FortniteStats>)\


#### fortniteStats.textWins : `string`

Texto Victorias

**Kind**: instance property of [`FortniteStats`](<📊 FortniteStats.md#FortniteStats>)\


#### fortniteStats.textWin : `string`

Texto Victoria

**Kind**: instance property of [`FortniteStats`](<📊 FortniteStats.md#FortniteStats>)\


#### fortniteStats.textKills : `string`

Texto Kills

**Kind**: instance property of [`FortniteStats`](<📊 FortniteStats.md#FortniteStats>)\


#### fortniteStats.textKill : `string`

Texto Kill

**Kind**: instance property of [`FortniteStats`](<📊 FortniteStats.md#FortniteStats>)\


#### fortniteStats.textMatches : `string`

Texto Partidas jugadas

**Kind**: instance property of [`FortniteStats`](<📊 FortniteStats.md#FortniteStats>)\


#### fortniteStats.textMatch : `string`

Texto Partida jugada

**Kind**: instance property of [`FortniteStats`](<📊 FortniteStats.md#FortniteStats>)\


#### fortniteStats.setToken(value) ⇒ [`FortniteStats`](<📊 FortniteStats.md#FortniteStats>)

Valor del Token

**Kind**: instance method of [`FortniteStats`](<📊 FortniteStats.md#FortniteStats>)

| Param | Type     |
| ----- | -------- |
| value | `string` |

#### fortniteStats.setPlatform(value) ⇒ [`FortniteStats`](<📊 FortniteStats.md#FortniteStats>)

Valor de la plataforma

**Kind**: instance method of [`FortniteStats`](<📊 FortniteStats.md#FortniteStats>)

| Param | Type     |
| ----- | -------- |
| value | `string` |

#### fortniteStats.setUser(value) ⇒ [`FortniteStats`](<📊 FortniteStats.md#FortniteStats>)

Valor del usuario

**Kind**: instance method of [`FortniteStats`](<📊 FortniteStats.md#FortniteStats>)

| Param | Type     |
| ----- | -------- |
| value | `string` |

#### fortniteStats.setText(value) ⇒ [`FortniteStats`](<📊 FortniteStats.md#FortniteStats>)

Valor del texto

**Kind**: instance method of [`FortniteStats`](<📊 FortniteStats.md#FortniteStats>)

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
