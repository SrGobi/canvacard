<a name="FortniteShop"></a>

## FortniteShop
Creador de tiene de artículos de Fortnite

**Kind**: global class  

* [FortniteShop](#FortniteShop)
    * [new FortniteShop()](#new_FortniteShop_new)
    * [.setToken(value)](#FortniteShop+setToken) ⇒ [<code>FortniteShop</code>](#FortniteShop)
    * [.setText(value)](#FortniteShop+setText) ⇒ [<code>FortniteShop</code>](#FortniteShop)
    * [.build([font])](#FortniteShop+build) ⇒ <code>Promise.&lt;Buffer&gt;</code>

<a name="new_FortniteShop_new"></a>

### new FortniteShop()
<img src="https://raw.githubusercontent.com/SrGobi/canvacard/refs/heads/test/fortnite_shop.png" alt="Fortnite Shop Card Preview">Para obtener un token de la API de Fortnite, visite [fortnite-api.com](https://fortnite-api.com/)

**Example**  
```js
    const shop = new canvacard.FortniteShop()
		.setToken("f4a26b940ef54a9a4238cef040bd08fa9001cd6c")
		.setText("footer", "ESP CUSTOMS X FORTNITE")

	  const FortniteShopImage = await shop.build("Luckiest Guy");
	  canvacard.write(FortniteShopImage, "./fortnite_shop.png");```
<a name="FortniteShop+setToken"></a>

### fortniteShop.setToken(value) ⇒ [<code>FortniteShop</code>](#FortniteShop)
Establecer el token de la API de Fortnite

**Kind**: instance method of [<code>FortniteShop</code>](#FortniteShop)  
**Returns**: [<code>FortniteShop</code>](#FortniteShop) - La instancia actual de FortniteShop  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | Token de la API de Fortnite |

<a name="FortniteShop+setText"></a>

### fortniteShop.setText(value) ⇒ [<code>FortniteShop</code>](#FortniteShop)
Establecer el texto del encabezado

**Kind**: instance method of [<code>FortniteShop</code>](#FortniteShop)  
**Returns**: [<code>FortniteShop</code>](#FortniteShop) - La instancia actual de FortniteShop  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | Texto del encabezado |

<a name="FortniteShop+build"></a>

### fortniteShop.build([font]) ⇒ <code>Promise.&lt;Buffer&gt;</code>
Construir la tarjeta de la tienda de Fortnite

**Kind**: instance method of [<code>FortniteShop</code>](#FortniteShop)  
**Returns**: <code>Promise.&lt;Buffer&gt;</code> - Imagen de la tarjeta de la tienda de Fortnite  
**Throws**:

- <code>APIError</code> Si no se puede obtener la información de la tienda


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [font] | <code>string</code> | <code>&quot;\&quot;Arial\&quot;&quot;</code> | Fuente de texto para la tarjeta |

