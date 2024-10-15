<a name="Rank"></a>

## Rank
Creador tarjetas de rango

**Kind**: global class  

* [Rank](#Rank)
    * [new Rank(userId)](#new_Rank_new)
    * [.setAvatar(avatarUrl, AvatarDecorationData, squareAvatar, presenceStatus)](#Rank+setAvatar) ⇒ [<code>Rank</code>](#Rank)
    * [.setBanner(bannerUrl, moreBackgroundBlur, disableBackgroundBlur, backgroundBrightness)](#Rank+setBanner) ⇒ [<code>Rank</code>](#Rank)
    * [.setBadges(flags, bot, frame)](#Rank+setBadges) ⇒ [<code>Rank</code>](#Rank)
    * [.setBorder(color, allign)](#Rank+setBorder) ⇒ [<code>Rank</code>](#Rank)
    * [.setUsername(name, [discriminator], [color], customUsername, customTag)](#Rank+setUsername) ⇒ [<code>Rank</code>](#Rank)
    * [.setCurrentXP(data, [color])](#Rank+setCurrentXP) ⇒ [<code>Rank</code>](#Rank)
    * [.setRequiredXP(data, [color])](#Rank+setRequiredXP) ⇒ [<code>Rank</code>](#Rank)
    * [.setRank(data, [text], [display])](#Rank+setRank) ⇒ [<code>Rank</code>](#Rank)
    * [.setLevel(data, [text])](#Rank+setLevel) ⇒ [<code>Rank</code>](#Rank)
    * [.setProgressBar(color, [fillType], [rounded])](#Rank+setProgressBar) ⇒ [<code>Rank</code>](#Rank)
    * [.setStatus(presenceStatus)](#Rank+setStatus) ⇒ [<code>Rank</code>](#Rank)
    * [.setCreatedTimestamp(timestamp, customDate)](#Rank+setCreatedTimestamp) ⇒ [<code>Rank</code>](#Rank)
    * [.build([font])](#Rank+build) ⇒ <code>Promise.&lt;Buffer&gt;</code>

<a name="new_Rank_new"></a>

### new Rank(userId)
<details open> <summary>PREVIEW</summary><br>  <a>    <img src="https://raw.githubusercontent.com/SrGobi/canvacard/refs/heads/test/rank_1.png" alt="Rank Card Preview 1">  </a>  <a>    <img src="https://raw.githubusercontent.com/SrGobi/canvacard/refs/heads/test/rank_2.png" alt="Rank Card Preview 2">  </a>  <a>    <img src="https://raw.githubusercontent.com/SrGobi/canvacard/refs/heads/test/rank_3.png" alt="Rank Card Preview 3">  </a></details>


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
      .setProgressBarTrack("#FFFFFF")
      .setOverlay("#000000", 1, true)
      .setUsername(data.global_name, data.discriminator)
      .setCreatedTimestamp(data.createdTimestamp);

    const rankImage = await rank.build("Cascadia Code PL");
    canvacard.write(rankImage, "./card.png");```
<a name="Rank+setAvatar"></a>

### rank.setAvatar(avatarUrl, AvatarDecorationData, squareAvatar, presenceStatus) ⇒ [<code>Rank</code>](#Rank)
Establece el avatar del usuario

**Kind**: instance method of [<code>Rank</code>](#Rank)  
**Returns**: [<code>Rank</code>](#Rank) - La instancia de la clase Rank  
**Throws**:

- <code>Error</code> Si el URL o el asset no son válidos


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| avatarUrl | <code>string</code> |  | URL del avatar |
| AvatarDecorationData | <code>string</code> |  | Asset de decoración del avatar |
| squareAvatar | <code>boolean</code> | <code>false</code> | Cambiar la forma del avatar a un cuadrado |
| presenceStatus | <code>string</code> |  | Estado de presencia |

<a name="Rank+setBanner"></a>

### rank.setBanner(bannerUrl, moreBackgroundBlur, disableBackgroundBlur, backgroundBrightness) ⇒ [<code>Rank</code>](#Rank)
Establece el banner del usuario

**Kind**: instance method of [<code>Rank</code>](#Rank)  
**Returns**: [<code>Rank</code>](#Rank) - La instancia de la clase Rank  
**Throws**:

- <code>Error</code> Si el URL o el asset no son válidos


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| bannerUrl | <code>string</code> |  | URL del banner |
| moreBackgroundBlur | <code>boolean</code> | <code>false</code> | Más desenfoque de fondo |
| disableBackgroundBlur | <code>boolean</code> | <code>false</code> | Desactivar desenfoque de fondo |
| backgroundBrightness | <code>number</code> | <code>0</code> | Brillo de fondo |

<a name="Rank+setBadges"></a>

### rank.setBadges(flags, bot, frame) ⇒ [<code>Rank</code>](#Rank)
Establece las insignias del usuario

**Kind**: instance method of [<code>Rank</code>](#Rank)  
**Returns**: [<code>Rank</code>](#Rank) - La instancia de la clase Rank  
**Throws**:

- <code>Error</code> Si el URL o el asset no son válidos


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| flags | <code>number</code> |  | Insignias del usuario |
| bot | <code>boolean</code> | <code>false</code> | Si el usuario es un bot o no |
| frame | <code>boolean</code> | <code>false</code> | Marco de insignias |

<a name="Rank+setBorder"></a>

### rank.setBorder(color, allign) ⇒ [<code>Rank</code>](#Rank)
Establece el borde de la tarjeta

**Kind**: instance method of [<code>Rank</code>](#Rank)  
**Returns**: [<code>Rank</code>](#Rank) - La instancia de la clase Rank  
**Throws**:

- <code>Error</code> Si el URL o el asset no son válidos


| Param | Type | Description |
| --- | --- | --- |
| color | <code>string</code> \| <code>Array.&lt;string&gt;</code> | Color HEX del borde, puede ser degradado si se usan 2 colores |
| allign | <code>string</code> | Alineación de degradado si se usan 2 colores |

<a name="Rank+setUsername"></a>

### rank.setUsername(name, [discriminator], [color], customUsername, customTag) ⇒ [<code>Rank</code>](#Rank)
Establece el nombre de usuario

**Kind**: instance method of [<code>Rank</code>](#Rank)  
**Returns**: [<code>Rank</code>](#Rank) - La instancia de la clase Rank  
**Throws**:

- <code>Error</code> Si el URL o el asset no son válidos


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| name | <code>string</code> |  | Nombre de usuario |
| [discriminator] | <code>string</code> | <code>&quot;\&quot;0\&quot;&quot;</code> | Discriminador del usuario |
| [color] | <code>string</code> | <code>&quot;\&quot;#FFFFFF\&quot;&quot;</code> | Color del texto |
| customUsername | <code>string</code> |  | Nombre de usuario personalizado |
| customTag | <code>string</code> |  | Tag personalizado |

<a name="Rank+setCurrentXP"></a>

### rank.setCurrentXP(data, [color]) ⇒ [<code>Rank</code>](#Rank)
Establece el nivel de experiencia actual

**Kind**: instance method of [<code>Rank</code>](#Rank)  
**Returns**: [<code>Rank</code>](#Rank) - La instancia de la clase Rank  
**Throws**:

- <code>Error</code> Si el URL o el asset no son válidos


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| data | <code>number</code> |  | Datos de experiencia actual |
| [color] | <code>string</code> | <code>&quot;\&quot;#FFFFFF\&quot;&quot;</code> | Color del texto |

<a name="Rank+setRequiredXP"></a>

### rank.setRequiredXP(data, [color]) ⇒ [<code>Rank</code>](#Rank)
Establece la experiencia requerida

**Kind**: instance method of [<code>Rank</code>](#Rank)  
**Returns**: [<code>Rank</code>](#Rank) - La instancia de la clase Rank  
**Throws**:

- <code>Error</code> Si el URL o el asset no son válidos


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| data | <code>number</code> |  | Datos de experiencia requerida |
| [color] | <code>string</code> | <code>&quot;\&quot;#FFFFFF\&quot;&quot;</code> | Color del texto |

<a name="Rank+setRank"></a>

### rank.setRank(data, [text], [display]) ⇒ [<code>Rank</code>](#Rank)
Establece el ranking del usuario

**Kind**: instance method of [<code>Rank</code>](#Rank)  
**Returns**: [<code>Rank</code>](#Rank) - La instancia de la clase Rank  
**Throws**:

- <code>Error</code> Si el URL o el asset no son válidos


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| data | <code>number</code> |  | Datos de ranking |
| [text] | <code>string</code> | <code>&quot;\&quot;RANK\&quot;&quot;</code> | Texto de visualización |
| [display] | <code>boolean</code> | <code>false</code> | Mostrar o no el sistema de rango |

<a name="Rank+setLevel"></a>

### rank.setLevel(data, [text]) ⇒ [<code>Rank</code>](#Rank)
Establece el nivel del usuario

**Kind**: instance method of [<code>Rank</code>](#Rank)  
**Returns**: [<code>Rank</code>](#Rank) - La instancia de la clase Rank  
**Throws**:

- <code>Error</code> Si el URL o el asset no son válidos


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| data | <code>number</code> |  | Datos de nivel |
| [text] | <code>string</code> | <code>&quot;\&quot;LEVEL\&quot;&quot;</code> | Texto de visualización |

<a name="Rank+setProgressBar"></a>

### rank.setProgressBar(color, [fillType], [rounded]) ⇒ [<code>Rank</code>](#Rank)
Establece la barra de progreso

**Kind**: instance method of [<code>Rank</code>](#Rank)  
**Returns**: [<code>Rank</code>](#Rank) - La instancia de la clase Rank  
**Throws**:

- <code>Error</code> Si el URL o el asset no son válidos


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| color | <code>string</code> \| <code>Array.&lt;string&gt;</code> |  | Color de la barra de progreso |
| [fillType] | <code>string</code> | <code>&quot;\&quot;COLOR\&quot;&quot;</code> | Tipo de relleno |
| [rounded] | <code>boolean</code> | <code>true</code> | Redondear o no |

<a name="Rank+setStatus"></a>

### rank.setStatus(presenceStatus) ⇒ [<code>Rank</code>](#Rank)
Establece el estado del usuario

**Kind**: instance method of [<code>Rank</code>](#Rank)  
**Returns**: [<code>Rank</code>](#Rank) - La instancia de la clase Rank  
**Throws**:

- <code>Error</code> Si el URL o el asset no son válidos


| Param | Type | Description |
| --- | --- | --- |
| presenceStatus | <code>string</code> | Estado del usuario |

<a name="Rank+setCreatedTimestamp"></a>

### rank.setCreatedTimestamp(timestamp, customDate) ⇒ [<code>Rank</code>](#Rank)
Establece la marca de tiempo de creación

**Kind**: instance method of [<code>Rank</code>](#Rank)  
**Returns**: [<code>Rank</code>](#Rank) - La instancia de la clase Rank  
**Throws**:

- <code>Error</code> Si el URL o el asset no son válidos


| Param | Type | Description |
| --- | --- | --- |
| timestamp | <code>number</code> | Marca de tiempo de creación |
| customDate | <code>string</code> \| <code>Date</code> | Fecha o texto personalizado para usar en lugar de cuando el usuario se unió a Discord |

<a name="Rank+build"></a>

### rank.build([font]) ⇒ <code>Promise.&lt;Buffer&gt;</code>
Construye la tarjeta de rango

**Kind**: instance method of [<code>Rank</code>](#Rank)  
**Returns**: <code>Promise.&lt;Buffer&gt;</code> - La tarjeta de rango en formato de buffer  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [font] | <code>string</code> | <code>&quot;\&quot;Arial\&quot;&quot;</code> | Familia tipográfica |

