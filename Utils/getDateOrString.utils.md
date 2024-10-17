<a name="getDateOrString"></a>

## getDateOrString(dateInput, createdTimestamp, [localDateType]) ⇒ <code>string</code>
Obtiene una cadena de fecha formateada o devuelve la entrada tal como está.

**Kind**: global function  
**Returns**: <code>string</code> - - La cadena de fecha formateada o la entrada original.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| dateInput | <code>string</code> \| <code>Date</code> |  | La fecha que se va a formatear. Puede ser una cadena de fecha (ISO 8601) or a Date object. |
| createdTimestamp | <code>number</code> |  | Una marca de tiempo de respaldo para usar si dateInput no está definido o es nulo. |
| [localDateType] | <code>string</code> | <code>&quot;&#x27;en&#x27;&quot;</code> | La configuración regional para el formato de fecha (el valor predeterminado es inglés). |

