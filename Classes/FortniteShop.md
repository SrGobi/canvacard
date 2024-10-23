## Functions

<dl>
<dt><a href="#setToken">setToken(value)</a> ⇒ <code><a href="#FortniteShop">FortniteShop</a></code></dt>
<dd><p>Establecer el token de la API de Fortnite</p>
</dd>
<dt><a href="#setText">setText(value)</a> ⇒ <code><a href="#FortniteShop">FortniteShop</a></code></dt>
<dd><p>Establecer el texto del encabezado</p>
</dd>
<dt><a href="#build">build([font])</a> ⇒ <code>Promise.&lt;Buffer&gt;</code></dt>
<dd><p>Construir la tarjeta de la tienda de Fortnite</p>
</dd>
</dl>

<a name="FortniteShop"></a>

## FortniteShop
<img src="https://raw.githubusercontent.com/SrGobi/canvacard/refs/heads/test/fortnite_shop.png" alt="Fortnite Shop Card Preview">Para obtener un token de la API de Fortnite, visite [fortnite-api.com](https://fortnite-api.com/)

**Kind**: global classCreador de tiene de artículos de Fortnite  
**Example**  
```js
    const shop = new canvacard.FortniteShop()
		.setToken("f4a26b940ef54a9a4238cef040bd08fa9001cd6c")
		.setText("footer", "ESP CUSTOMS X FORTNITE")

	  const FortniteShopImage = await shop.build("Luckiest Guy");
	  canvacard.write(FortniteShopImage, "./fortnite_shop.png");```
<a name="setToken"></a>

## setToken(value) ⇒ [<code>FortniteShop</code>](#FortniteShop)
Establecer el token de la API de Fortnite

**Kind**: global function  
**Returns**: [<code>FortniteShop</code>](#FortniteShop) - La instancia actual de FortniteShop  
**Throws**:

- <code>APIError</code> Si no se proporciona un token válido


| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | Token de la API de Fortnite |

<a name="setText"></a>

## setText(value) ⇒ [<code>FortniteShop</code>](#FortniteShop)
Establecer el texto del encabezado

**Kind**: global function  
**Returns**: [<code>FortniteShop</code>](#FortniteShop) - La instancia actual de FortniteShop  
**Throws**:

- <code>APIError</code> Si el valor no es una cadena


| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | Texto del encabezado |

<a name="build"></a>

## build([font]) ⇒ <code>Promise.&lt;Buffer&gt;</code>
Construir la tarjeta de la tienda de Fortnite

**Kind**: global function  
**Returns**: <code>Promise.&lt;Buffer&gt;</code> - Imagen de la tarjeta de la tienda de Fortnite  
**Throws**:

- <code>APIError</code> Si no se puede obtener la información de la tienda


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [font] | <code>string</code> | <code>&quot;\&quot;Arial\&quot;&quot;</code> | Fuente de texto para la tarjeta |

