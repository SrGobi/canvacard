# 🪄 Util

### Util

**Kind**: global class

* [Util](<🪄 Util.md#Util>)
  * [new Util()](<🪄 Util.md#new\_Util\_new>)
  * [.validateHex(hex)](<🪄 Util.md#Util.validateHex>) ⇒ `boolean`
  * [.discordTime(time)](<🪄 Util.md#Util.discordTime>) ⇒ `string`
  * [.formatTime(time)](<🪄 Util.md#Util.formatTime>) ⇒ `string`
  * [.shorten(text, len)](<🪄 Util.md#Util.shorten>) ⇒ `string`
  * [.toAbbrev(num)](<🪄 Util.md#Util.toAbbrev>) ⇒ `string` | `string`
  * [.renderEmoji(ctx, msg, x, y)](<🪄 Util.md#Util.renderEmoji>) ⇒ `Promise.<void>`
  * [.formatHex(hex, alt)](<🪄 Util.md#Util.formatHex>) ⇒ `string`
  * [.invertColor(hex)](<🪄 Util.md#Util.invertColor>) ⇒ `string`
  * [.getAcronym(name)](<🪄 Util.md#Util.getAcronym>) ⇒ `string`
  * [.getLines(params, text, ctx, maxWidth)](<🪄 Util.md#Util.getLines>) ⇒ `Array.<string>`

#### new Util()

Canvacard Util

#### Util.validateHex(hex) ⇒ `boolean`

Validates hex

**Kind**: static method of [`Util`](<🪄 Util.md#Util>)

| Param | Type     | Description          |
| ----- | -------- | -------------------- |
| hex   | `string` | Hex code to validate |

#### Util.discordTime(time) ⇒ `string`

Converts regular timestamp to discord like time

**Kind**: static method of [`Util`](<🪄 Util.md#Util>)

| Param | Type               | Description          |
| ----- | ------------------ | -------------------- |
| time  | `Date` \| `number` | Timestamp to convert |

#### Util.formatTime(time) ⇒ `string`

Formats time

**Kind**: static method of [`Util`](<🪄 Util.md#Util>)

| Param | Type     | Description    |
| ----- | -------- | -------------- |
| time  | `number` | Time to format |

#### Util.shorten(text, len) ⇒ `string`

Shorten text.

**Kind**: static method of [`Util`](<🪄 Util.md#Util>)

| Param | Type     | Description     |
| ----- | -------- | --------------- |
| text  | `string` | Text to shorten |
| len   | `number` | Max Length      |

#### Util.toAbbrev(num) ⇒ `string` | `string`

Converts numbers into units like `1K`, `1M`, `1B` etc.

**Kind**: static method of [`Util`](<🪄 Util.md#Util>)

| Param | Type                 |
| ----- | -------------------- |
| num   | `number` \| `string` |

#### Util.renderEmoji(ctx, msg, x, y) ⇒ `Promise.<void>`

Renders text with emoji

**Kind**: static method of [`Util`](<🪄 Util.md#Util>)

| Param | Type                       | Description              |
| ----- | -------------------------- | ------------------------ |
| ctx   | `CanvasRenderingContext2D` | CanvasRenderingContext2D |
| msg   | `string`                   | Message                  |
| x     | `number`                   | X                        |
| y     | `number`                   | Y                        |

#### Util.formatHex(hex, alt) ⇒ `string`

Returns formatted hex code

**Kind**: static method of [`Util`](<🪄 Util.md#Util>)

| Param | Type     | Default     | Description        |
| ----- | -------- | ----------- | ------------------ |
| hex   | `string` |             | Hex code to format |
| alt   | `string` | `"#000000"` | Alt color          |

#### Util.invertColor(hex) ⇒ `string`

Inverts hex color

**Kind**: static method of [`Util`](<🪄 Util.md#Util>)

| Param | Type     | Description              |
| ----- | -------- | ------------------------ |
| hex   | `string` | Hex color code to invert |

#### Util.getAcronym(name) ⇒ `string`

Returns acronym

**Kind**: static method of [`Util`](<🪄 Util.md#Util>)

| Param | Type     | Description           |
| ----- | -------- | --------------------- |
| name  | `string` | Name to parse acronym |

#### Util.getLines(params, text, ctx, maxWidth) ⇒ `Array.<string>`

Returns array of lines

**Kind**: static method of [`Util`](<🪄 Util.md#Util>)

| Param    | Type                       | Description              |
| -------- | -------------------------- | ------------------------ |
| params   | `object`                   | Params                   |
| text     | `string`                   | Text                     |
| ctx      | `CanvasRenderingContext2D` | CanvasRenderingContext2D |
| maxWidth | `number`                   | Max width                |
