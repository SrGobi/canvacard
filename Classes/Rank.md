<a name="Rank"></a>

## Rank
**Kind**: global class  

* [Rank](#Rank)
    * [new Rank(userId)](#new_Rank_new)
    * [.setAvatar(avatarUrl, AvatarDecorationData)](#Rank+setAvatar) ⇒ [<code>Rank</code>](#Rank)
    * [.setBanner(bannerUrl, moreBackgroundBlur, disableBackgroundBlur, backgroundBrightness)](#Rank+setBanner) ⇒ [<code>Rank</code>](#Rank)
    * [.setBadges(flags, bot, frame)](#Rank+setBadges) ⇒ [<code>Rank</code>](#Rank)
    * [.setUsername(name, [discriminator], [color])](#Rank+setUsername) ⇒ [<code>Rank</code>](#Rank)
    * [.setCurrentXP(data, [color])](#Rank+setCurrentXP) ⇒ [<code>Rank</code>](#Rank)
    * [.setRequiredXP(data, [color])](#Rank+setRequiredXP) ⇒ [<code>Rank</code>](#Rank)
    * [.setRank(data, [text], [display])](#Rank+setRank) ⇒ [<code>Rank</code>](#Rank)
    * [.setLevel(data, [text], [display])](#Rank+setLevel) ⇒ [<code>Rank</code>](#Rank)
    * [.setProgressBar(color, [fillType], [rounded])](#Rank+setProgressBar) ⇒ [<code>Rank</code>](#Rank)
    * [.setProgressBarTrack(color)](#Rank+setProgressBarTrack) ⇒ [<code>Rank</code>](#Rank)
    * [.setOverlay(color, [level], [display])](#Rank+setOverlay) ⇒ [<code>Rank</code>](#Rank)
    * [.setStatus(presenceStatus)](#Rank+setStatus) ⇒ [<code>Rank</code>](#Rank)
    * [.setCreatedTimestamp(timestamp)](#Rank+setCreatedTimestamp) ⇒ [<code>Rank</code>](#Rank)

<a name="new_Rank_new"></a>

### new Rank(userId)
Rank image builder


| Param | Type | Description |
| --- | --- | --- |
| userId | <code>string</code> | ID del usuario |

**Example**  
```js const rank = new canvacard.Rank(data.id)     .setAvatar(data.avatarURL, data.avatar_decoration_data.asset)     .setBanner(data.bannerURL, true)     .setBadges(data.flags, data.bot, true)     .setCurrentXP(userData.xp)     .setRequiredXP(userData.requiredXP)     .setRank(1, "RANK", true)     .setLevel(20, "LEVEL", true)     .setStatus("online")     .setProgressBar(["#14C49E", "#FF0000"], "GRADIENT", true)     .setProgressBarTrack("#FFFFFF")     .setOverlay("#000000", 1, true)     .setUsername(data.global_name, data.discriminator)     .setCreatedTimestamp(data.createdTimestamp);  const rankImage = await rank.build("Cascadia Code PL"); canvacard.write(rankImage, "./card.png");```
<a name="Rank+setAvatar"></a>

### rank.setAvatar(avatarUrl, AvatarDecorationData) ⇒ [<code>Rank</code>](#Rank)
Establece el avatar del usuario

**Kind**: instance method of [<code>Rank</code>](#Rank)  
**Returns**: [<code>Rank</code>](#Rank) - La instancia de la clase Rank  
**Throws**:

- <code>Error</code> Si el URL o el asset no son válidos


| Param | Type | Description |
| --- | --- | --- |
| avatarUrl | <code>string</code> | URL del avatar |
| AvatarDecorationData | <code>string</code> | Asset de decoración del avatar |

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

<a name="Rank+setUsername"></a>

### rank.setUsername(name, [discriminator], [color]) ⇒ [<code>Rank</code>](#Rank)
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
| [display] | <code>boolean</code> | <code>false</code> | Mostrar o no |

<a name="Rank+setLevel"></a>

### rank.setLevel(data, [text], [display]) ⇒ [<code>Rank</code>](#Rank)
Establece el nivel del usuario

**Kind**: instance method of [<code>Rank</code>](#Rank)  
**Returns**: [<code>Rank</code>](#Rank) - La instancia de la clase Rank  
**Throws**:

- <code>Error</code> Si el URL o el asset no son válidos


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| data | <code>number</code> |  | Datos de nivel |
| [text] | <code>string</code> | <code>&quot;\&quot;LEVEL\&quot;&quot;</code> | Texto de visualización |
| [display] | <code>boolean</code> | <code>true</code> | Mostrar o no |

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

<a name="Rank+setProgressBarTrack"></a>

### rank.setProgressBarTrack(color) ⇒ [<code>Rank</code>](#Rank)
Establece la pista de la barra de progreso

**Kind**: instance method of [<code>Rank</code>](#Rank)  
**Returns**: [<code>Rank</code>](#Rank) - La instancia de la clase Rank  
**Throws**:

- <code>Error</code> Si el URL o el asset no son válidos


| Param | Type | Description |
| --- | --- | --- |
| color | <code>string</code> | Color de la pista de la barra de progreso |

<a name="Rank+setOverlay"></a>

### rank.setOverlay(color, [level], [display]) ⇒ [<code>Rank</code>](#Rank)
Establece la superposición

**Kind**: instance method of [<code>Rank</code>](#Rank)  
**Returns**: [<code>Rank</code>](#Rank) - La instancia de la clase Rank  
**Throws**:

- <code>Error</code> Si el URL o el asset no son válidos


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| color | <code>string</code> |  | Color de la superposición |
| [level] | <code>number</code> | <code>0.5</code> | Nivel de opacidad |
| [display] | <code>boolean</code> | <code>true</code> | Mostrar o no |

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

### rank.setCreatedTimestamp(timestamp) ⇒ [<code>Rank</code>](#Rank)
Establece la marca de tiempo de creación

**Kind**: instance method of [<code>Rank</code>](#Rank)  
**Returns**: [<code>Rank</code>](#Rank) - La instancia de la clase Rank  
**Throws**:

- <code>Error</code> Si el URL o el asset no son válidos


| Param | Type | Description |
| --- | --- | --- |
| timestamp | <code>number</code> | Marca de tiempo de creación |

