<a name="Util"></a>

## Util
**Kind**: global class  

* [Util](#Util)
    * [new Util()](#new_Util_new)
    * [.validateHex(hex)](#Util.validateHex) ⇒ <code>boolean</code>
    * [.discordTime(time)](#Util.discordTime) ⇒ <code>string</code>
    * [.formatTime(time)](#Util.formatTime) ⇒ <code>string</code>
    * [.shorten(text, len)](#Util.shorten) ⇒ <code>string</code>
    * [.toAbbrev(num)](#Util.toAbbrev) ⇒ <code>string</code> \| <code>string</code>
    * [.renderEmoji(ctx, msg, x, y)](#Util.renderEmoji) ⇒ <code>Promise.&lt;void&gt;</code>
    * [.formatHex(hex, alt)](#Util.formatHex) ⇒ <code>string</code>
    * [.invertColor(hex)](#Util.invertColor) ⇒ <code>string</code>
    * [.getAcronym(name)](#Util.getAcronym) ⇒ <code>string</code>
    * [.getLines(params, text, ctx, maxWidth)](#Util.getLines) ⇒ <code>Array.&lt;string&gt;</code>

<a name="new_Util_new"></a>

### new Util()
Canvacard Util

<a name="Util.validateHex"></a>

### Util.validateHex(hex) ⇒ <code>boolean</code>
Validates hex

**Kind**: static method of [<code>Util</code>](#Util)  

| Param | Type | Description |
| --- | --- | --- |
| hex | <code>string</code> | Hex code to validate |

<a name="Util.discordTime"></a>

### Util.discordTime(time) ⇒ <code>string</code>
Converts regular timestamp to discord like time

**Kind**: static method of [<code>Util</code>](#Util)  

| Param | Type | Description |
| --- | --- | --- |
| time | <code>Date</code> \| <code>number</code> | Timestamp to convert |

<a name="Util.formatTime"></a>

### Util.formatTime(time) ⇒ <code>string</code>
Formats time

**Kind**: static method of [<code>Util</code>](#Util)  

| Param | Type | Description |
| --- | --- | --- |
| time | <code>number</code> | Time to format |

<a name="Util.shorten"></a>

### Util.shorten(text, len) ⇒ <code>string</code>
Shorten text.

**Kind**: static method of [<code>Util</code>](#Util)  

| Param | Type | Description |
| --- | --- | --- |
| text | <code>string</code> | Text to shorten |
| len | <code>number</code> | Max Length |

<a name="Util.toAbbrev"></a>

### Util.toAbbrev(num) ⇒ <code>string</code> \| <code>string</code>
Converts numbers into units like `1K`, `1M`, `1B` etc.

**Kind**: static method of [<code>Util</code>](#Util)  

| Param | Type |
| --- | --- |
| num | <code>number</code> \| <code>string</code> | 

<a name="Util.renderEmoji"></a>

### Util.renderEmoji(ctx, msg, x, y) ⇒ <code>Promise.&lt;void&gt;</code>
Renders text with emoji

**Kind**: static method of [<code>Util</code>](#Util)  

| Param | Type | Description |
| --- | --- | --- |
| ctx | <code>CanvasRenderingContext2D</code> | CanvasRenderingContext2D |
| msg | <code>string</code> | Message |
| x | <code>number</code> | X |
| y | <code>number</code> | Y |

<a name="Util.formatHex"></a>

### Util.formatHex(hex, alt) ⇒ <code>string</code>
Returns formatted hex code

**Kind**: static method of [<code>Util</code>](#Util)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| hex | <code>string</code> |  | Hex code to format |
| alt | <code>string</code> | <code>&quot;#000000&quot;</code> | Alt color |

<a name="Util.invertColor"></a>

### Util.invertColor(hex) ⇒ <code>string</code>
Inverts hex color

**Kind**: static method of [<code>Util</code>](#Util)  

| Param | Type | Description |
| --- | --- | --- |
| hex | <code>string</code> | Hex color code to invert |

<a name="Util.getAcronym"></a>

### Util.getAcronym(name) ⇒ <code>string</code>
Returns acronym

**Kind**: static method of [<code>Util</code>](#Util)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | Name to parse acronym |

<a name="Util.getLines"></a>

### Util.getLines(params, text, ctx, maxWidth) ⇒ <code>Array.&lt;string&gt;</code>
Returns array of lines

**Kind**: static method of [<code>Util</code>](#Util)  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | Params |
| text | <code>string</code> | Text |
| ctx | <code>CanvasRenderingContext2D</code> | CanvasRenderingContext2D |
| maxWidth | <code>number</code> | Max width |

