## Functions

<dl>
<dt><a href="#generateBadgesCanvas">generateBadgesCanvas(user, options)</a> ⇒ <code>Promise.&lt;Buffer&gt;</code></dt>
<dd><p>Generar el canvas de insignias</p>
</dd>
<dt><a href="#genBase">genBase(options, avatarData, bannerData)</a> ⇒ <code>Promise.&lt;Buffer&gt;</code></dt>
<dd><p>Genera el fondo de la tarjeta</p>
</dd>
<dt><a href="#genFrame">genFrame(badgesData, options)</a> ⇒</dt>
<dd><p>Genera el marco de la tarjeta</p>
</dd>
<dt><a href="#genBorder">genBorder(options)</a> ⇒</dt>
<dd><p>Genera los bordes de la tarjeta con un gradiente de varios colores</p>
</dd>
<dt><a href="#genTextAndAvatar">genTextAndAvatar(user, options, rankData, avatarData, [font])</a> ⇒ <code>Promise.&lt;Buffer&gt;</code></dt>
<dd><p>Genera el texto y el avatar de la tarjeta</p>
</dd>
<dt><a href="#genAvatarFrame">genAvatarFrame(user, options)</a> ⇒ <code>Promise.&lt;Buffer&gt;</code></dt>
<dd><p>Esta función genera el marco del avatar</p>
</dd>
<dt><a href="#cutAvatarStatus">cutAvatarStatus(canvasToEdit, options)</a> ⇒ <code>Promise.&lt;Buffer&gt;</code></dt>
<dd><p>Esta función corta el estado de presencia en la tarjeta</p>
</dd>
<dt><a href="#genStatus">genStatus(canvasToEdit, options)</a> ⇒ <code>Promise.&lt;Buffer&gt;</code></dt>
<dd><p>Establece el estado de presencia en la tarjeta</p>
</dd>
<dt><a href="#genBotVerifBadge">genBotVerifBadge(user, [font])</a> ⇒ <code>Promise.&lt;Buffer&gt;</code></dt>
<dd><p>Generar la insignia de verificación de bot</p>
</dd>
<dt><a href="#genXpBar">genXpBar(options)</a> ⇒ <code>Promise.&lt;Buffer&gt;</code></dt>
<dd><p>Generar la barra de experiencia</p>
</dd>
<dt><a href="#addShadow">addShadow(canvasToEdit)</a> ⇒ <code>Promise.&lt;Buffer&gt;</code></dt>
<dd><p>Sombras para el canvas</p>
</dd>
</dl>

<a name="generateBadgesCanvas"></a>

## generateBadgesCanvas(user, options) ⇒ <code>Promise.&lt;Buffer&gt;</code>
Generar el canvas de insignias

**Kind**: global function  
**Returns**: <code>Promise.&lt;Buffer&gt;</code> - Canvas  

| Param | Type | Description |
| --- | --- | --- |
| user | <code>Object</code> | Objeto de usuario |
| user.bot | <code>string</code> | Si el usuario es un bot |
| user.id | <code>string</code> | ID del usuario |
| user.flags | <code>Object</code> | Insignias del usuario |
| user.discriminator | <code>string</code> | Discriminador del usuario |
| options | <code>Object</code> | Objeto de opciones |
| options.customBadges | <code>Array.&lt;string&gt;</code> | Insignias personalizadas |
| options.overwriteBadges | <code>boolean</code> | Sobreescribir las insignias |

<a name="genBase"></a>

## genBase(options, avatarData, bannerData) ⇒ <code>Promise.&lt;Buffer&gt;</code>
Genera el fondo de la tarjeta

**Kind**: global function  
**Returns**: <code>Promise.&lt;Buffer&gt;</code> - Canvas  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | Objeto de opciones |
| avatarData | <code>string</code> | URL del avatar |
| bannerData | <code>string</code> | URL del banner |

<a name="genFrame"></a>

## genFrame(badgesData, options) ⇒
Genera el marco de la tarjeta

**Kind**: global function  
**Returns**: Canvas  

| Param | Type |
| --- | --- |
| badgesData | <code>Object</code> | 
| badgesData.canvas | <code>CanvasElemet</code> | 
| badgesData.badgesLength | <code>string</code> | 
| options | <code>Object</code> | 
| options.badgesFrame | <code>string</code> | 

<a name="genBorder"></a>

## genBorder(options) ⇒
Genera los bordes de la tarjeta con un gradiente de varios colores

**Kind**: global function  
**Returns**: Canvas  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> |  |
| options.borderColor | <code>string</code> \| <code>Array.&lt;string&gt;</code> | Puede ser un color o un array de colores |
| options.borderAllign | <code>string</code> | Dirección del borde ('vertical' o 'horizontal') |

<a name="genTextAndAvatar"></a>

## genTextAndAvatar(user, options, rankData, avatarData, [font]) ⇒ <code>Promise.&lt;Buffer&gt;</code>
Genera el texto y el avatar de la tarjeta

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| user | <code>Object</code> |  | Datos del usuario |
| user.username | <code>string</code> |  | Nombre de usuario |
| user.discriminator | <code>string</code> |  | Discriminador |
| user.bot | <code>boolean</code> |  | Es un bot |
| user.createdTimestamp | <code>number</code> |  | Marca de tiempo de creación |
| user.id | <code>string</code> |  | ID del usuario |
| options | <code>Object</code> |  | Opciones de la tarjeta |
| options.customUsername | <code>string</code> |  | Nombre de usuario personalizado |
| options.usernameColor | <code>string</code> |  | Color del nombre de usuario |
| options.customSubtitle | <code>string</code> |  | Subtítulo personalizado |
| options.subtitleColor | <code>string</code> |  | Color del subtítulo |
| options.customDate | <code>string</code> \| <code>Date</code> |  | Fecha personalizada |
| options.localDateType | <code>string</code> |  | Formato local para la fecha, por ejemplo, 'en' | 'es', etc. |
| options.customTag | <code>string</code> |  | Tag personalizado |
| options.tagColor | <code>string</code> |  | Color HEX de la etiqueta |
| options.squareAvatar | <code>boolean</code> |  | Cambiar la forma del avatar a un cuadrado |
| options.presenceStatus | <code>boolean</code> |  | Mostrar el estado de presencia |
| rankData | <code>Object</code> |  | Datos de rango |
| avatarData | <code>string</code> |  | URL del avatar |
| [font] | <code>string</code> | <code>&quot;\&quot;Arial\&quot;&quot;</code> | Familia tipográfica |

<a name="genAvatarFrame"></a>

## genAvatarFrame(user, options) ⇒ <code>Promise.&lt;Buffer&gt;</code>
Esta función genera el marco del avatar

**Kind**: global function  
**Returns**: <code>Promise.&lt;Buffer&gt;</code> - Canvas  

| Param | Type | Description |
| --- | --- | --- |
| user | <code>Object</code> | Objeto del usuario |
| user.avatar_decoration_data | <code>Object</code> | Datos de decoración del avatar |
| user.avatar_decoration_data.asset | <code>string</code> | Asset de decoración del avatar |
| options | <code>Object</code> | Objeto de opciones |
| options.presenceStatus | <code>string</code> | Presencia del usuario |

<a name="cutAvatarStatus"></a>

## cutAvatarStatus(canvasToEdit, options) ⇒ <code>Promise.&lt;Buffer&gt;</code>
Esta función corta el estado de presencia en la tarjeta

**Kind**: global function  
**Returns**: <code>Promise.&lt;Buffer&gt;</code> - Canvas  

| Param | Type | Description |
| --- | --- | --- |
| canvasToEdit | <code>Image</code> \| <code>Canvas</code> | Imagen o canvas a editar |
| options | <code>Object</code> | Objeto de opciones |
| options.presenceStatus | <code>string</code> | Presencia del usuario |

<a name="genStatus"></a>

## genStatus(canvasToEdit, options) ⇒ <code>Promise.&lt;Buffer&gt;</code>
Establece el estado de presencia en la tarjeta

**Kind**: global function  
**Returns**: <code>Promise.&lt;Buffer&gt;</code> - Canvas  

| Param | Type | Description |
| --- | --- | --- |
| canvasToEdit | <code>Image</code> \| <code>Canvas</code> | Imagen o canvas a editar |
| options | <code>Object</code> | Objeto de opciones |
| options.presenceStatus | <code>string</code> | Presencia del usuario |

<a name="genBotVerifBadge"></a>

## genBotVerifBadge(user, [font]) ⇒ <code>Promise.&lt;Buffer&gt;</code>
Generar la insignia de verificación de bot

**Kind**: global function  
**Returns**: <code>Promise.&lt;Buffer&gt;</code> - Canvas  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| user | <code>Object</code> |  | Objeto de usuario |
| user.username | <code>string</code> |  | Nombre de usuario |
| user.flags | <code>number</code> |  | Valor numérico de las flags del usuario |
| [font] | <code>string</code> | <code>&quot;\&quot;Arial\&quot;&quot;</code> | Familia tipográfica |

<a name="genXpBar"></a>

## genXpBar(options) ⇒ <code>Promise.&lt;Buffer&gt;</code>
Generar la barra de experiencia

**Kind**: global function  
**Returns**: <code>Promise.&lt;Buffer&gt;</code> - Canvas  

| Param | Type |
| --- | --- |
| options | <code>Object</code> | 
| options.rankData | <code>Object</code> | 
| options.rankData.currentXp | <code>number</code> | 
| options.rankData.requiredXp | <code>number</code> | 
| options.rankData.level | <code>number</code> | 
| options.rankData.rank | <code>number</code> | 
| options.rankData.barColor | <code>string</code> \| <code>Array.&lt;string&gt;</code> | 
| options.rankData.levelColor | <code>string</code> | 
| options.rankData.autoColorRank | <code>boolean</code> | 

<a name="addShadow"></a>

## addShadow(canvasToEdit) ⇒ <code>Promise.&lt;Buffer&gt;</code>
Sombras para el canvas

**Kind**: global function  
**Returns**: <code>Promise.&lt;Buffer&gt;</code> - Canvas  

| Param | Type | Description |
| --- | --- | --- |
| canvasToEdit | <code>Image</code> \| <code>Canvas</code> | Imagen o canvas a editar |

