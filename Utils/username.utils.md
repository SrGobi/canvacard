<a name="parseUsername"></a>

## parseUsername ⇒ <code>Object</code>
Function that parses the username to fit the canvas size.

**Kind**: global variable  
**Returns**: <code>Object</code> - { username: string, newSize: number, textLength: number }  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| username | <code>string</code> |  | User name |
| ctx | <code>Object</code> |  | Canvas context |
| ctx.fillStyle | <code>string</code> |  | Text color |
| ctx.textAlign | <code>string</code> |  | Text alignment |
| ctx.measureText | <code>TextMetrics</code> |  | Text size |
| [font] | <code>string</code> | <code>&quot;&#x27;Arial&#x27;&quot;</code> | Text source |
| size | <code>string</code> |  | Text size |
| maxLength | <code>number</code> |  | Maximum text length |

