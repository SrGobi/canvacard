## Classes

<dl>
<dt><a href="#FortniteShop">FortniteShop</a></dt>
<dd></dd>
</dl>

## Functions

<dl>
<dt><a href="#setToken">setToken(value)</a> ⇒ <code><a href="#FortniteShop">FortniteShop</a></code></dt>
<dd><p>Set the Fortnite API token</p>
</dd>
<dt><a href="#setText">setText(value)</a> ⇒ <code><a href="#FortniteShop">FortniteShop</a></code></dt>
<dd><p>Set the text for the Fortnite Shop card</p>
</dd>
<dt><a href="#build">build([font])</a> ⇒ <code>Promise.&lt;Buffer&gt;</code></dt>
<dd><p>Build the Fortnite Shop card</p>
</dd>
</dl>

<a name="FortniteShop"></a>

## FortniteShop
**Kind**: global class  
<a name="new_FortniteShop_new"></a>

### new FortniteShop()
Fortnite Shop card creator<details open> <summary>PREVIEW</summary><br>  <a>    <img src="https://raw.githubusercontent.com/SrGobi/canvacard/refs/heads/test/fortnite_shop.png" alt="Fortnite Shop Card Preview">  </a></details>To obtain a Fortnite API token, visit [fortnite-api.com](https://fortnite-api.com/)

**Example**  
```js
const shop = new canvacard.FortniteShop()
  .setToken("f4a26b940ef54a9a4238cef040bd08fa9001cd6c")
  .setText("footer", "ESP CUSTOMS X FORTNITE")

const FortniteShopImage = await shop.build("Luckiest Guy");
canvacard.write(FortniteShopImage, "./fortnite_shop.png");```
<a name="setToken"></a>

## setToken(value) ⇒ [<code>FortniteShop</code>](#FortniteShop)
Set the Fortnite API token

**Kind**: global function  
**Returns**: [<code>FortniteShop</code>](#FortniteShop) - The current instance of FortniteShop  
**Throws**:

- <code>APIError</code> If the value is not a string


| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | Fortnite API token |

<a name="setText"></a>

## setText(value) ⇒ [<code>FortniteShop</code>](#FortniteShop)
Set the text for the Fortnite Shop card

**Kind**: global function  
**Returns**: [<code>FortniteShop</code>](#FortniteShop) - The current instance of FortniteShop  
**Throws**:

- <code>APIError</code> If the value is not a string


| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | Text to set for the card |

<a name="build"></a>

## build([font]) ⇒ <code>Promise.&lt;Buffer&gt;</code>
Build the Fortnite Shop card

**Kind**: global function  
**Returns**: <code>Promise.&lt;Buffer&gt;</code> - Card image in buffer format  
**Throws**:

- <code>APIError</code> If the token is not provided


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [font] | <code>string</code> | <code>&quot;\&quot;Arial\&quot;&quot;</code> | Font to use for the card |

