<a name="getDateOrString"></a>

## getDateOrString ⇒ <code>string</code>
Gets a formatted date string or returns the input as is.

**Kind**: global variable  
**Returns**: <code>string</code> - The formatted date string or the original input.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| dateInput | <code>string</code> \| <code>Date</code> |  | The date to format. Can be a date string (ISO 8601) or a Date object. |
| createdTimestamp | <code>number</code> |  | A fallback timestamp to use if dateInput is undefined or null. |
| [localDateType] | <code>string</code> | <code>&quot;&#x27;en&#x27;&quot;</code> | The locale for the date format (default is English). |

