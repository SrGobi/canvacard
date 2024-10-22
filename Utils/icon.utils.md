<a name="getIconPath"></a>

## getIconPath(iconUrl) ⇒ <code>string</code>
Función para obtener la URL del ícono de una insignia.Si el ícono es una ruta relativa, se transforma en una URL absoluta apuntando al repositorio de GitHub.

**Kind**: global function  
**Returns**: <code>string</code> - URL absoluta del ícono.  
**Throws**:

- <code>APIError</code> Si hay un problema al construir la URL del ícono.


| Param | Type | Description |
| --- | --- | --- |
| iconUrl | <code>string</code> | Nombre del ícono o URL del ícono. |

