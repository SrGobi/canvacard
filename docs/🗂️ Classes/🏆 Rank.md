## Classes

<dl>
<dt><a href="#Rank">Rank</a></dt>
<dd></dd>
</dl>

## Typedefs

<dl>
<dt><a href="#CanvacardRankData">CanvacardRankData</a> : <code>object</code></dt>
<dd></dd>
</dl>

<a name="Rank"></a>

## Rank
**Kind**: global class  

* [Rank](#Rank)
    * [new Rank()](#new_Rank_new)
    * [.data](#Rank+data) : [<code>CanvacardRankData</code>](#CanvacardRankData)
    * [.renderEmojis([apply])](#Rank+renderEmojis) ⇒ [<code>Rank</code>](#Rank)
    * [.setFontSize(size)](#Rank+setFontSize) ⇒ [<code>Rank</code>](#Rank)
    * [.setUsername(name, color)](#Rank+setUsername) ⇒ [<code>Rank</code>](#Rank)
    * [.setProgressBar(color, [fillType], [rounded])](#Rank+setProgressBar) ⇒ [<code>Rank</code>](#Rank)
    * [.setProgressBarTrack(color)](#Rank+setProgressBarTrack) ⇒ [<code>Rank</code>](#Rank)
    * [.setOverlay(color, [level], [display])](#Rank+setOverlay) ⇒ [<code>Rank</code>](#Rank)
    * [.setRequiredXP(data, color)](#Rank+setRequiredXP) ⇒ [<code>Rank</code>](#Rank)
    * [.setCurrentXP(data, color)](#Rank+setCurrentXP) ⇒ [<code>Rank</code>](#Rank)
    * [.setRank(data, text, [display])](#Rank+setRank) ⇒ [<code>Rank</code>](#Rank)
    * [.setRankColor(text, number)](#Rank+setRankColor) ⇒ [<code>Rank</code>](#Rank)
    * [.setLevelColor(text, number)](#Rank+setLevelColor) ⇒ [<code>Rank</code>](#Rank)
    * [.setLevel(data, text, [display])](#Rank+setLevel) ⇒ [<code>Rank</code>](#Rank)
    * [.setCustomStatusColor(color)](#Rank+setCustomStatusColor) ⇒ [<code>Rank</code>](#Rank)
    * [.setStatus(status, circle, width)](#Rank+setStatus) ⇒ [<code>Rank</code>](#Rank)
    * [.setBackground(type, [data])](#Rank+setBackground) ⇒ [<code>Rank</code>](#Rank)
    * [.setAvatar(data)](#Rank+setAvatar) ⇒ [<code>Rank</code>](#Rank)
    * [.build(ops)](#Rank+build) ⇒ <code>Promise.&lt;Buffer&gt;</code>

<a name="new_Rank_new"></a>

### new Rank()
Creates Rank card

**Example**  
```js
const rank = new canvacard.Rank()
          .setAvatar(img)
          .setCurrentXP(203)
          .setRequiredXP(500)
          .setStatus("dnd")
          .setProgressBar(["#FF0000", "#0000FF"], "GRADIENT")
          .setUsername("SrGobi")
      
      rank.build()
          .then(data => {
              canvacard.write(data, "RankCard.png");
          })
```
<a name="Rank+data"></a>

### rank.data : [<code>CanvacardRankData</code>](#CanvacardRankData)
Rank card data

**Kind**: instance property of [<code>Rank</code>](#Rank)  
<a name="Rank+renderEmojis"></a>

### rank.renderEmojis([apply]) ⇒ [<code>Rank</code>](#Rank)
Si debe mostrar el nombre de usuario con emojis (si los hay)

**Kind**: instance method of [<code>Rank</code>](#Rank)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [apply] | <code>boolean</code> | <code>false</code> | Establécelo a `true` para mostrar emojis. |

<a name="Rank+setFontSize"></a>

### rank.setFontSize(size) ⇒ [<code>Rank</code>](#Rank)
Tamaño de letra

**Kind**: instance method of [<code>Rank</code>](#Rank)  

| Param | Type |
| --- | --- |
| size | <code>string</code> | 

<a name="Rank+setUsername"></a>

### rank.setUsername(name, color) ⇒ [<code>Rank</code>](#Rank)
Establecer nombre de usuario

**Kind**: instance method of [<code>Rank</code>](#Rank)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| name | <code>string</code> |  | Username |
| color | <code>string</code> | <code>&quot;#FFFFFF&quot;</code> | Username color |

<a name="Rank+setProgressBar"></a>

### rank.setProgressBar(color, [fillType], [rounded]) ⇒ [<code>Rank</code>](#Rank)
Definir el estilo de la barra de progreso

**Kind**: instance method of [<code>Rank</code>](#Rank)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| color | <code>string</code> \| <code>Array.&lt;string&gt;</code> |  | Progressbar Color |
| [fillType] | <code>&quot;COLOR&quot;</code> \| <code>&quot;GRADIENT&quot;</code> | <code>COLOR</code> | Progressbar type |
| [rounded] | <code>boolean</code> | <code>true</code> | If progressbar should have rounded edges |

<a name="Rank+setProgressBarTrack"></a>

### rank.setProgressBarTrack(color) ⇒ [<code>Rank</code>](#Rank)
Fijar la pista de la barra de progreso

**Kind**: instance method of [<code>Rank</code>](#Rank)  

| Param | Type | Description |
| --- | --- | --- |
| color | <code>string</code> | Track color |

<a name="Rank+setOverlay"></a>

### rank.setOverlay(color, [level], [display]) ⇒ [<code>Rank</code>](#Rank)
Establecer superposición de tarjetas

**Kind**: instance method of [<code>Rank</code>](#Rank)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| color | <code>string</code> |  | Overlay color |
| [level] | <code>number</code> | <code>0.5</code> | Opacity level |
| [display] | <code>boolean</code> | <code>true</code> | IF it should display overlay |

<a name="Rank+setRequiredXP"></a>

### rank.setRequiredXP(data, color) ⇒ [<code>Rank</code>](#Rank)
Establecer xp requerido

**Kind**: instance method of [<code>Rank</code>](#Rank)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| data | <code>number</code> |  | Required xp |
| color | <code>string</code> | <code>&quot;#FFFFFF&quot;</code> | Color |

<a name="Rank+setCurrentXP"></a>

### rank.setCurrentXP(data, color) ⇒ [<code>Rank</code>](#Rank)
Fijar xp actual

**Kind**: instance method of [<code>Rank</code>](#Rank)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| data | <code>number</code> |  | Current xp |
| color | <code>string</code> | <code>&quot;#FFFFFF&quot;</code> | Color |

<a name="Rank+setRank"></a>

### rank.setRank(data, text, [display]) ⇒ [<code>Rank</code>](#Rank)
Establecer rango

**Kind**: instance method of [<code>Rank</code>](#Rank)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| data | <code>number</code> |  | Current Rank |
| text | <code>string</code> | <code>&quot;RANK&quot;</code> | Display text |
| [display] | <code>boolean</code> | <code>true</code> | If it should display rank |

<a name="Rank+setRankColor"></a>

### rank.setRankColor(text, number) ⇒ [<code>Rank</code>](#Rank)
Establecer el color de visualización del rango

**Kind**: instance method of [<code>Rank</code>](#Rank)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| text | <code>string</code> | <code>&quot;#FFFFFF&quot;</code> | text color |
| number | <code>string</code> | <code>&quot;#FFFFFF&quot;</code> | Number color |

<a name="Rank+setLevelColor"></a>

### rank.setLevelColor(text, number) ⇒ [<code>Rank</code>](#Rank)
Fijar color de nivel

**Kind**: instance method of [<code>Rank</code>](#Rank)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| text | <code>string</code> | <code>&quot;#FFFFFF&quot;</code> | text color |
| number | <code>string</code> | <code>&quot;#FFFFFF&quot;</code> | number color |

<a name="Rank+setLevel"></a>

### rank.setLevel(data, text, [display]) ⇒ [<code>Rank</code>](#Rank)
Establecer nivel

**Kind**: instance method of [<code>Rank</code>](#Rank)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| data | <code>number</code> |  | Current Level |
| text | <code>string</code> | <code>&quot;LEVEL&quot;</code> | Display text |
| [display] | <code>boolean</code> | <code>true</code> | If it should display level |

<a name="Rank+setCustomStatusColor"></a>

### rank.setCustomStatusColor(color) ⇒ [<code>Rank</code>](#Rank)
Establecer color de estado personalizado

**Kind**: instance method of [<code>Rank</code>](#Rank)  

| Param | Type | Description |
| --- | --- | --- |
| color | <code>string</code> | Color to set |

<a name="Rank+setStatus"></a>

### rank.setStatus(status, circle, width) ⇒ [<code>Rank</code>](#Rank)
Establecer estado

**Kind**: instance method of [<code>Rank</code>](#Rank)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| status | <code>&quot;online&quot;</code> \| <code>&quot;idle&quot;</code> \| <code>&quot;dnd&quot;</code> \| <code>&quot;offline&quot;</code> \| <code>&quot;streaming&quot;</code> |  | User status |
| circle | <code>boolean</code> | <code>false</code> | Si el icono de estado debe ser circular. |
| width | <code>number</code> \| <code>boolean</code> | <code>5</code> | Anchura de estado |

<a name="Rank+setBackground"></a>

### rank.setBackground(type, [data]) ⇒ [<code>Rank</code>](#Rank)
Establecer imagen/color de fondo

**Kind**: instance method of [<code>Rank</code>](#Rank)  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>&quot;COLOR&quot;</code> \| <code>&quot;IMAGE&quot;</code> | Background type |
| [data] | <code>string</code> \| <code>Buffer</code> | Background color or image |

<a name="Rank+setAvatar"></a>

### rank.setAvatar(data) ⇒ [<code>Rank</code>](#Rank)
Avatar de usuario

**Kind**: instance method of [<code>Rank</code>](#Rank)  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>string</code> \| <code>Buffer</code> | Avatar data |

<a name="Rank+build"></a>

### rank.build(ops) ⇒ <code>Promise.&lt;Buffer&gt;</code>
Construye la tarjeta de rango

**Kind**: instance method of [<code>Rank</code>](#Rank)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| ops | <code>object</code> |  | Fonts |
| [ops.fontX] | <code>string</code> | <code>&quot;\&quot;MANROPE_BOLD\&quot;&quot;</code> | Bold font family |
| [ops.fontY] | <code>string</code> | <code>&quot;\&quot;MANROPE_REGULAR\&quot;&quot;</code> | Regular font family |

<a name="CanvacardRankData"></a>

## CanvacardRankData : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| width | <code>number</code> |  | Ancho de la tarjeta de rango |
| height | <code>number</code> |  | Altura de la tarjeta de rango |
| background | <code>object</code> |  | Datos de antecedentes de la tarjeta de rango |
| [background.type] | <code>&quot;image&quot;</code> \| <code>&quot;color&quot;</code> | <code>&quot;color&quot;</code> | Tipo de fondo |
| [background.image] | <code>string</code> \| <code>Buffer</code> | <code>&quot;\&quot;#23272A\&quot;&quot;</code> | Imagen de fondo (o color) |
| progressBar | <code>object</code> |  | Datos de la barra de progreso |
| [progressBar.rounded] | <code>boolean</code> | <code>true</code> | Si la barra de progreso debe redondearse |
| [progressBar.x] | <code>number</code> | <code>275.5</code> | Barra de progreso X |
| [progressBar.y] | <code>number</code> | <code>183.75</code> | Barra de progreso Y |
| [progressBar.height] | <code>number</code> | <code>37.5</code> | Altura de la barra de progreso |
| [progressBar.width] | <code>number</code> | <code>596.5</code> | Ancho de la barra de progreso |
| [progressBar.track] | <code>object</code> |  | Pista de la barra de progreso |
| [progressBar.track.color] | <code>string</code> | <code>&quot;\&quot;#484b4E\&quot;&quot;</code> | Color de la pista de la barra de progreso |
| [progressBar.bar] | <code>object</code> |  | Datos de la barra de progreso |
| [progressBar.bar.type] | <code>&quot;color&quot;</code> \| <code>&quot;gradient&quot;</code> | <code>&quot;color&quot;</code> | Tipo de barra de progreso |
| [progressBar.bar.color] | <code>string</code> \| <code>Array.&lt;string&gt;</code> | <code>&quot;\&quot;#FFFFFF\&quot;&quot;</code> | Color de la barra de la barra de progreso |
| overlay | <code>object</code> |  | Superposición de la barra de progreso |
| [overlay.display] | <code>boolean</code> | <code>true</code> | Si debería mostrar superposición |
| [overlay.level] | <code>number</code> | <code>0.5</code> | Nivel de opacidad de superposición |
| [overlay.color] | <code>string</code> | <code>&quot;\&quot;#333640\&quot;&quot;</code> | Superposición de color de fondo |
| avatar | <code>object</code> |  | Datos de avatar de la tarjeta de rango |
| [avatar.source] | <code>string</code> \| <code>Buffer</code> | <code>null</code> | Fuente de avatar |
| [avatar.x] | <code>number</code> | <code>70</code> | X |
| [avatar.y] | <code>number</code> | <code>50</code> | Y |
| [avatar.height] | <code>number</code> | <code>180</code> | altura |
| [avatar.width] | <code>number</code> | <code>180</code> | ancho |
| status | <code>object</code> |  | Estado de la tarjeta de rango |
| [status.width] | <code>number</code> | <code>5</code> | Ancho de estado |
| [status.type] | <code>&quot;online&quot;</code> \| <code>&quot;dnd&quot;</code> \| <code>&quot;idle&quot;</code> \| <code>&quot;offline&quot;</code> \| <code>&quot;streaming&quot;</code> |  | Tipo de estado |
| [status.color] | <code>string</code> | <code>&quot;\&quot;#43B581\&quot;&quot;</code> | Color de estado |
| [status.circle] | <code>boolean</code> | <code>false</code> | ¿Estado circular? |
| rank | <code>object</code> |  | Datos de rango de la tarjeta de clasificación |
| [rank.display] | <code>boolean</code> | <code>true</code> | Si debe mostrar rango |
| [rank.data] | <code>number</code> | <code>1</code> | El rango |
| [rank.textColor] | <code>string</code> | <code>&quot;\&quot;#FFFFFF\&quot;&quot;</code> | Rango de color del texto |
| [rank.color] | <code>string</code> | <code>&quot;\&quot;#F3F3F3\&quot;&quot;</code> | Color de rango |
| [rank.displayText] | <code>string</code> | <code>&quot;\&quot;RANK\&quot;&quot;</code> | Texto de visualización de rango |
| level | <code>object</code> |  | Datos de nivel de tarjeta de rango |
| [level.display] | <code>boolean</code> | <code>true</code> | Si debería mostrar el nivel |
| [level.data] | <code>number</code> | <code>1</code> | El nivel |
| [level.textColor] | <code>string</code> | <code>&quot;\&quot;#FFFFFF\&quot;&quot;</code> | color de texto de nivel |
| [level.color] | <code>string</code> | <code>&quot;\&quot;#F3F3F3\&quot;&quot;</code> | color de nivel |
| [level.displayText] | <code>string</code> | <code>&quot;\&quot;LEVEL\&quot;&quot;</code> | texto de visualización de nivel |
| previousRankXP | <code>object</code> |  | tarjeta xp de rango anterior opcional |
| [previousRankXP.data] | <code>number</code> | <code></code> | xp de rango anterior opcional |
| [previousRankXP.color] | <code>string</code> | <code>null</code> | Tabla de rango de color de rango xp anterior opcional |
| currentXP | <code>object</code> |  | Tarjeta de rango xp actual |
| [currentXP.data] | <code>number</code> | <code>0</code> | XP actual |
| [currentXP.color] | <code>string</code> | <code>&quot;\&quot;#FFFFFF\&quot;&quot;</code> | Carta de rango color xp actual |
| requiredXP | <code>object</code> |  | Tarjeta de rango requerida xp |
| [requiredXP.data] | <code>number</code> | <code>0</code> | requerido xp |
| [requiredXP.color] | <code>string</code> | <code>&quot;\&quot;#FFFFFF\&quot;&quot;</code> | Se requiere tarjeta de rango xp color |
| username | <code>object</code> |  | Datos de nombre de usuario |
| [username.name] | <code>string</code> | <code>null</code> | Nombre de usuario de la tarjeta de clasificación |
| [username.color] | <code>string</code> | <code>&quot;\&quot;#FFFFFF\&quot;&quot;</code> | Color de nombre de usuario de la tarjeta de rango |
| [renderEmojis] | <code>boolean</code> | <code>true</code> | Si debería renderizar emojis |

