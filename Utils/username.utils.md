<a name="parseUsername"></a>

## parseUsername(username, ctx, [font], size, maxLength) ⇒ <code>Object</code>
Funcion que se encarga de parsear el nombre de usuario para que se ajuste al tamaño del canvas.

**Kind**: global function  
**Returns**: <code>Object</code> - { username: string, newSize: number, textLength: number }  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| username | <code>string</code> |  | Nombre de usuario |
| ctx | <code>Object</code> |  | Contexto del canvas |
| ctx.fillStyle | <code>string</code> |  | Color del texto |
| ctx.textAlign | <code>string</code> |  | Alineacion del texto |
| ctx.measureText | <code>TextMetrics</code> |  | Medida del texto |
| [font] | <code>string</code> | <code>&quot;&#x27;Arial&#x27;&quot;</code> | Fuente del texto |
| size | <code>string</code> |  | Tamaño del texto |
| maxLength | <code>number</code> |  | Longitud maxima del texto |

