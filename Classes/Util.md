<a name="Util"></a>

## Util
**Kind**: global class  

* [Util](#Util)
    * [new Util()](#new_Util_new)
    * [.validateHex(hex)](#Util.validateHex) ⇒ <code>boolean</code>
    * [.discordTime(time)](#Util.discordTime) ⇒ <code>string</code>
    * [.formatTime(time)](#Util.formatTime) ⇒ <code>string</code>
    * [.shorten(text, len)](#Util.shorten) ⇒ <code>string</code>
    * [.toAbbrev(num)](#Util.toAbbrev) ⇒ <code>string</code>
    * [.formatHex(hex, alt)](#Util.formatHex) ⇒ <code>string</code>
    * [.invertColor(hex)](#Util.invertColor) ⇒ <code>string</code>
    * [.getAcronym(name)](#Util.getAcronym) ⇒ <code>string</code>
    * [.getLines(params, text, ctx, maxWidth)](#Util.getLines) ⇒ <code>Array.&lt;string&gt;</code>
    * [.formatVariable(prefix, variable)](#Util.formatVariable) ⇒

<a name="new_Util_new"></a>

### new Util()
Canvacard Util

<a name="Util.validateHex"></a>

### Util.validateHex(hex) ⇒ <code>boolean</code>
Valida el código hexadecimal.

**Kind**: static method of [<code>Util</code>](#Util)  
**Returns**: <code>boolean</code> - Retorna verdadero si es válido  

| Param | Type | Description |
| --- | --- | --- |
| hex | <code>string</code> | Código hexadecimal para validar |

<a name="Util.discordTime"></a>

### Util.discordTime(time) ⇒ <code>string</code>
Convierte la marca de tiempo regular en una hora similar a la de Discord.

**Kind**: static method of [<code>Util</code>](#Util)  
**Returns**: <code>string</code> - Cadena de tiempo similar a Discord  

| Param | Type | Description |
| --- | --- | --- |
| time | <code>Date</code> \| <code>number</code> | Marca de tiempo para convertir |

<a name="Util.formatTime"></a>

### Util.formatTime(time) ⇒ <code>string</code>
Formatea la marca de tiempo en una cadena de fecha.

**Kind**: static method of [<code>Util</code>](#Util)  
**Returns**: <code>string</code> - Cadena de fecha formateada  

| Param | Type | Description |
| --- | --- | --- |
| time | <code>number</code> | Marca de tiempo para convertir |

<a name="Util.shorten"></a>

### Util.shorten(text, len) ⇒ <code>string</code>
Acorta el texto a una longitud específica y agrega puntos suspensivos si es necesario.

**Kind**: static method of [<code>Util</code>](#Util)  
**Returns**: <code>string</code> - Texto original o acortado  

| Param | Type | Description |
| --- | --- | --- |
| text | <code>string</code> | Texto a acortar |
| len | <code>number</code> | Longitud máxima del texto antes de acortarlo |

<a name="Util.toAbbrev"></a>

### Util.toAbbrev(num) ⇒ <code>string</code>
Convierte números en unidades como `1K`, `1M`, `1B`, etc.

**Kind**: static method of [<code>Util</code>](#Util)  
**Returns**: <code>string</code> - Número abreviado  

| Param | Type | Description |
| --- | --- | --- |
| num | <code>number</code> \| <code>string</code> | Número para abreviar |

<a name="Util.formatHex"></a>

### Util.formatHex(hex, alt) ⇒ <code>string</code>
Código hexadecimal formateado

**Kind**: static method of [<code>Util</code>](#Util)  
**Returns**: <code>string</code> - Código hexadecimal formateado  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| hex | <code>string</code> |  | Código hexadecimal para formatear |
| alt | <code>string</code> | <code>&quot;#000000&quot;</code> | Color alternativo |

<a name="Util.invertColor"></a>

### Util.invertColor(hex) ⇒ <code>string</code>
Invierte el color hexadecimal

**Kind**: static method of [<code>Util</code>](#Util)  
**Returns**: <code>string</code> - Código de color hexadecimal invertido  

| Param | Type | Description |
| --- | --- | --- |
| hex | <code>string</code> | Código de color hexadecimal para invertir |

<a name="Util.getAcronym"></a>

### Util.getAcronym(name) ⇒ <code>string</code>
Parsea el acrónimo

**Kind**: static method of [<code>Util</code>](#Util)  
**Returns**: <code>string</code> - Acrónimo  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | Nombre para analizar el acrónimo |

<a name="Util.getLines"></a>

### Util.getLines(params, text, ctx, maxWidth) ⇒ <code>Array.&lt;string&gt;</code>
Devuelve una matriz de líneas

**Kind**: static method of [<code>Util</code>](#Util)  
**Returns**: <code>Array.&lt;string&gt;</code> - Array de lineas  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | Parametros |
| text | <code>string</code> | Texto |
| ctx | <code>CanvasRenderingContext2D</code> | CanvasRenderingContext2D |
| maxWidth | <code>number</code> | Ancho máximo de la linea |

<a name="Util.formatVariable"></a>

### Util.formatVariable(prefix, variable) ⇒
Obtiene variables y tipos.

**Kind**: static method of [<code>Util</code>](#Util)  
**Returns**: La variable formateada  

| Param | Type | Description |
| --- | --- | --- |
| prefix | <code>object</code> | El tipo de variable |
| variable | <code>object</code> | La variable a cambiar |

