<a name="getIconPath"></a>

## getIconPath ⇒ <code>string</code>
Function to get the URL of a badge icon. If the icon is a relative path, it is transformed into an absolute URL pointing to the GitHub repository.

**Kind**: global variable  
**Returns**: <code>string</code> - Absolute URL of the icon.  
**Throws**:

- <code>APIError</code> If there is a problem building the icon URL.


| Param | Type | Description |
| --- | --- | --- |
| iconUrl | <code>string</code> | Icon name or icon URL. |

