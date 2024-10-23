## Functions

<dl>
<dt><a href="#setAvatar">setAvatar(avatarUrl, AvatarDecorationData, squareAvatar)</a> ⇒ <code><a href="#Rank">Rank</a></code></dt>
<dd><p>Establece el avatar del usuario</p>
</dd>
<dt><a href="#setBanner">setBanner(bannerUrl, moreBackgroundBlur, disableBackgroundBlur, backgroundBrightness)</a> ⇒ <code><a href="#Rank">Rank</a></code></dt>
<dd><p>Establece el banner del usuario</p>
</dd>
<dt><a href="#setBadges">setBadges(flags, bot, frame, customBadges)</a> ⇒ <code><a href="#Rank">Rank</a></code></dt>
<dd><p>Establece las insignias del usuario</p>
</dd>
<dt><a href="#setBorder">setBorder(color, allign)</a> ⇒ <code><a href="#Rank">Rank</a></code></dt>
<dd><p>Establece el borde de la tarjeta</p>
</dd>
<dt><a href="#setUsername">setUsername(name, [discriminator], [color], customUsername, customTag)</a> ⇒ <code><a href="#Rank">Rank</a></code></dt>
<dd><p>Establece el nombre de usuario</p>
</dd>
<dt><a href="#setCurrentXP">setCurrentXP(data, [color])</a> ⇒ <code><a href="#Rank">Rank</a></code></dt>
<dd><p>Establece el nivel de experiencia actual</p>
</dd>
<dt><a href="#setRequiredXP">setRequiredXP(data, [color])</a> ⇒ <code><a href="#Rank">Rank</a></code></dt>
<dd><p>Establece la experiencia requerida</p>
</dd>
<dt><a href="#setRank">setRank(data, [text], [display])</a> ⇒ <code><a href="#Rank">Rank</a></code></dt>
<dd><p>Establece el ranking del usuario</p>
</dd>
<dt><a href="#setLevel">setLevel(data, [text])</a> ⇒ <code><a href="#Rank">Rank</a></code></dt>
<dd><p>Establece el nivel del usuario</p>
</dd>
<dt><a href="#setProgressBar">setProgressBar(color, [fillType], [rounded])</a> ⇒ <code><a href="#Rank">Rank</a></code></dt>
<dd><p>Establece la barra de progreso</p>
</dd>
<dt><a href="#setStatus">setStatus(presenceStatus)</a> ⇒ <code><a href="#Rank">Rank</a></code></dt>
<dd><p>Establece el estado del usuario</p>
</dd>
<dt><a href="#setCreatedTimestamp">setCreatedTimestamp(timestamp, customDate)</a> ⇒ <code><a href="#Rank">Rank</a></code></dt>
<dd><p>Establece la marca de tiempo de creación</p>
</dd>
<dt><a href="#build">build([font])</a> ⇒ <code>Promise.&lt;Buffer&gt;</code></dt>
<dd><p>Construye la tarjeta de rango</p>
</dd>
</dl>

<a name="Rank"></a>

## Rank
<details open> <summary>PREVIEW</summary><br>  <a>    <img src="https://raw.githubusercontent.com/SrGobi/canvacard/refs/heads/test/rank_1.png" alt="Rank Card Preview 1">  </a>  <a>    <img src="https://raw.githubusercontent.com/SrGobi/canvacard/refs/heads/test/rank_2.png" alt="Rank Card Preview 2">  </a>  <a>    <img src="https://raw.githubusercontent.com/SrGobi/canvacard/refs/heads/test/rank_3.png" alt="Rank Card Preview 3">  </a></details>

**Kind**: global classCreador tarjetas de rango  

| Param | Type | Description |
| --- | --- | --- |
| userId | <code>string</code> | ID del usuario |

**Example**  
```js
    const rank = new canvacard.Rank(data.id)
      .setAvatar(data.avatarURL, data.avatar_decoration_data.asset)
      .setBanner(data.bannerURL, true)
      .setBadges(data.flags, data.bot, true)
      .setCurrentXP(userData.xp)
      .setRequiredXP(userData.requiredXP)
      .setRank(1, "RANK", true)
      .setLevel(20, "LEVEL", true)
      .setStatus("online")
      .setProgressBar(["#14C49E", "#FF0000"], "GRADIENT", true)
      .setOverlay("#000000", 1, true)
      .setUsername(data.global_name, data.discriminator)
      .setCreatedTimestamp(data.createdTimestamp);

    const rankImage = await rank.build("Cascadia Code PL");
    canvacard.write(rankImage, "./rank.png");```
<a name="setAvatar"></a>

## setAvatar(avatarUrl, AvatarDecorationData, squareAvatar) ⇒ [<code>Rank</code>](#Rank)
Establece el avatar del usuario

**Kind**: global function  
**Returns**: [<code>Rank</code>](#Rank) - La instancia de la clase Rank  
**Throws**:

- <code>APIError</code> Si el URL o el asset no son válidos


| Param | Type | Description |
| --- | --- | --- |
| avatarUrl | <code>string</code> | URL del avatar |
| AvatarDecorationData | <code>string</code> | Asset de decoración del avatar |
| squareAvatar | <code>boolean</code> | Cambiar la forma del avatar a un cuadrado |

<a name="setBanner"></a>

## setBanner(bannerUrl, moreBackgroundBlur, disableBackgroundBlur, backgroundBrightness) ⇒ [<code>Rank</code>](#Rank)
Establece el banner del usuario

**Kind**: global function  
**Returns**: [<code>Rank</code>](#Rank) - La instancia de la clase Rank  
**Throws**:

- <code>APIError</code> Si el URL o el asset no son válidos


| Param | Type | Description |
| --- | --- | --- |
| bannerUrl | <code>string</code> | URL del banner |
| moreBackgroundBlur | <code>boolean</code> | Más desenfoque de fondo |
| disableBackgroundBlur | <code>boolean</code> | Desactivar desenfoque de fondo |
| backgroundBrightness | <code>number</code> | Brillo de fondo |

<a name="setBadges"></a>

## setBadges(flags, bot, frame, customBadges) ⇒ [<code>Rank</code>](#Rank)
Establece las insignias del usuario

**Kind**: global function  
**Returns**: [<code>Rank</code>](#Rank) - La instancia de la clase Rank  
**Throws**:

- <code>APIError</code> Si el URL o el asset no son válidos


| Param | Type | Description |
| --- | --- | --- |
| flags | <code>number</code> | Insignias del usuario |
| bot | <code>boolean</code> | Si el usuario es un bot o no |
| frame | <code>boolean</code> | Marco de insignias |
| customBadges | <code>Array.&lt;string&gt;</code> | Insignias personalizadas |

<a name="setBorder"></a>

## setBorder(color, allign) ⇒ [<code>Rank</code>](#Rank)
Establece el borde de la tarjeta

**Kind**: global function  
**Returns**: [<code>Rank</code>](#Rank) - La instancia de la clase Rank  
**Throws**:

- <code>APIError</code> Si el URL o el asset no son válidos


| Param | Type | Description |
| --- | --- | --- |
| color | <code>string</code> \| <code>Array.&lt;string&gt;</code> | Color HEX del borde, puede ser degradado si se usan 2 colores |
| allign | <code>string</code> | Alineación de degradado si se usan 2 colores |

<a name="setUsername"></a>

## setUsername(name, [discriminator], [color], customUsername, customTag) ⇒ [<code>Rank</code>](#Rank)
Establece el nombre de usuario

**Kind**: global function  
**Returns**: [<code>Rank</code>](#Rank) - La instancia de la clase Rank  
**Throws**:

- <code>APIError</code> Si el URL o el asset no son válidos


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| name | <code>string</code> |  | Nombre de usuario |
| [discriminator] | <code>string</code> | <code>&quot;\&quot;0\&quot;&quot;</code> | Discriminador del usuario |
| [color] | <code>string</code> | <code>&quot;\&quot;#FFFFFF\&quot;&quot;</code> | Color del texto |
| customUsername | <code>string</code> |  | Nombre de usuario personalizado |
| customTag | <code>string</code> |  | Tag personalizado |

<a name="setCurrentXP"></a>

## setCurrentXP(data, [color]) ⇒ [<code>Rank</code>](#Rank)
Establece el nivel de experiencia actual

**Kind**: global function  
**Returns**: [<code>Rank</code>](#Rank) - La instancia de la clase Rank  
**Throws**:

- <code>APIError</code> Si el URL o el asset no son válidos


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| data | <code>number</code> |  | Datos de experiencia actual |
| [color] | <code>string</code> | <code>&quot;\&quot;#FFFFFF\&quot;&quot;</code> | Color del texto |

<a name="setRequiredXP"></a>

## setRequiredXP(data, [color]) ⇒ [<code>Rank</code>](#Rank)
Establece la experiencia requerida

**Kind**: global function  
**Returns**: [<code>Rank</code>](#Rank) - La instancia de la clase Rank  
**Throws**:

- <code>APIError</code> Si el URL o el asset no son válidos


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| data | <code>number</code> |  | Datos de experiencia requerida |
| [color] | <code>string</code> | <code>&quot;\&quot;#FFFFFF\&quot;&quot;</code> | Color del texto |

<a name="setRank"></a>

## setRank(data, [text], [display]) ⇒ [<code>Rank</code>](#Rank)
Establece el ranking del usuario

**Kind**: global function  
**Returns**: [<code>Rank</code>](#Rank) - La instancia de la clase Rank  
**Throws**:

- <code>APIError</code> Si el URL o el asset no son válidos


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| data | <code>number</code> |  | Datos de ranking |
| [text] | <code>string</code> | <code>&quot;\&quot;RANK\&quot;&quot;</code> | Texto de visualización |
| [display] | <code>boolean</code> | <code>false</code> | Mostrar o no el sistema de rango |

<a name="setLevel"></a>

## setLevel(data, [text]) ⇒ [<code>Rank</code>](#Rank)
Establece el nivel del usuario

**Kind**: global function  
**Returns**: [<code>Rank</code>](#Rank) - La instancia de la clase Rank  
**Throws**:

- <code>APIError</code> Si el URL o el asset no son válidos


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| data | <code>number</code> |  | Datos de nivel |
| [text] | <code>string</code> | <code>&quot;\&quot;LEVEL\&quot;&quot;</code> | Texto de visualización |

<a name="setProgressBar"></a>

## setProgressBar(color, [fillType], [rounded]) ⇒ [<code>Rank</code>](#Rank)
Establece la barra de progreso

**Kind**: global function  
**Returns**: [<code>Rank</code>](#Rank) - La instancia de la clase Rank  
**Throws**:

- <code>APIError</code> Si el URL o el asset no son válidos


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| color | <code>string</code> \| <code>Array.&lt;string&gt;</code> |  | Color de la barra de progreso |
| [fillType] | <code>string</code> | <code>&quot;\&quot;COLOR\&quot;&quot;</code> | Tipo de relleno |
| [rounded] | <code>boolean</code> | <code>true</code> | Redondear o no |

<a name="setStatus"></a>

## setStatus(presenceStatus) ⇒ [<code>Rank</code>](#Rank)
Establece el estado del usuario

**Kind**: global function  
**Returns**: [<code>Rank</code>](#Rank) - La instancia de la clase Rank  
**Throws**:

- <code>APIError</code> Si el URL o el asset no son válidos


| Param | Type | Description |
| --- | --- | --- |
| presenceStatus | <code>string</code> | Estado del usuario |

<a name="setCreatedTimestamp"></a>

## setCreatedTimestamp(timestamp, customDate) ⇒ [<code>Rank</code>](#Rank)
Establece la marca de tiempo de creación

**Kind**: global function  
**Returns**: [<code>Rank</code>](#Rank) - La instancia de la clase Rank  
**Throws**:

- <code>APIError</code> Si el URL o el asset no son válidos


| Param | Type | Description |
| --- | --- | --- |
| timestamp | <code>number</code> | Marca de tiempo de creación |
| customDate | <code>string</code> \| <code>Date</code> | Fecha o texto personalizado para usar en lugar de cuando el usuario se unió a Discord |

<a name="build"></a>

## build([font]) ⇒ <code>Promise.&lt;Buffer&gt;</code>
Construye la tarjeta de rango

**Kind**: global function  
**Returns**: <code>Promise.&lt;Buffer&gt;</code> - Imagen de la tarjeta de rango en formato de buffer  
**Throws**:

- <code>APIError</code> Faltan datos


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [font] | <code>string</code> | <code>&quot;\&quot;Arial\&quot;&quot;</code> | Fuente de texto para la tarjeta |

