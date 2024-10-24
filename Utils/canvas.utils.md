## Members

<dl>
<dt><a href="#generateBadgesCanvas">generateBadgesCanvas</a> ⇒ <code>Promise.&lt;Buffer&gt;</code></dt>
<dd><p>Generate the badge canvas</p>
</dd>
<dt><a href="#genBase">genBase</a> ⇒ <code>Promise.&lt;Buffer&gt;</code></dt>
<dd><p>Generate the card background</p>
</dd>
<dt><a href="#genFrame">genFrame</a> ⇒ <code>Promise.&lt;Buffer&gt;</code></dt>
<dd><p>Generate the card frame</p>
</dd>
<dt><a href="#genBorder">genBorder</a> ⇒ <code>Promise.&lt;Buffer&gt;</code></dt>
<dd><p>Generate the edges of the card with a multi-color gradient</p>
</dd>
<dt><a href="#genTextAndAvatar">genTextAndAvatar</a> ⇒ <code>Promise.&lt;Buffer&gt;</code></dt>
<dd><p>Generate the card text and avatar</p>
</dd>
<dt><a href="#genAvatarFrame">genAvatarFrame</a> ⇒ <code>Promise.&lt;Buffer&gt;</code></dt>
<dd><p>This function generates the avatar frame</p>
</dd>
<dt><a href="#cutAvatarStatus">cutAvatarStatus</a> ⇒ <code>Promise.&lt;Buffer&gt;</code></dt>
<dd><p>This function cuts the presence status on the card</p>
</dd>
<dt><a href="#genStatus">genStatus</a> ⇒ <code>Promise.&lt;Buffer&gt;</code></dt>
<dd><p>Sets the presence status on the card</p>
</dd>
<dt><a href="#genBotVerifBadge">genBotVerifBadge</a> ⇒ <code>Promise.&lt;Buffer&gt;</code></dt>
<dd><p>Generate the bot verification badge</p>
</dd>
<dt><a href="#addShadow">addShadow</a> ⇒ <code>Promise.&lt;Buffer&gt;</code></dt>
<dd><p>Shadows for the canvas</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#genXpBar">genXpBar(options)</a> ⇒ <code>Promise.&lt;Buffer&gt;</code></dt>
<dd><p>Generate the experience bar</p>
</dd>
</dl>

<a name="generateBadgesCanvas"></a>

## generateBadgesCanvas ⇒ <code>Promise.&lt;Buffer&gt;</code>
Generate the badge canvas

**Kind**: global variable  
**Returns**: <code>Promise.&lt;Buffer&gt;</code> - Canvas  

| Param | Type | Description |
| --- | --- | --- |
| user | <code>Object</code> | User object |
| user.bot | <code>string</code> | If the user is a bot |
| user.id | <code>string</code> | User ID |
| user.flags | <code>Object</code> | User Badges |
| user.discriminator | <code>string</code> | User Discriminator |
| options | <code>Object</code> | Object of options |
| options.customBadges | <code>Array.&lt;string&gt;</code> | Custom Badges |
| options.overwriteBadges | <code>boolean</code> | Overwrite the badges |

<a name="genBase"></a>

## genBase ⇒ <code>Promise.&lt;Buffer&gt;</code>
Generate the card background

**Kind**: global variable  
**Returns**: <code>Promise.&lt;Buffer&gt;</code> - Canvas  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | Object of options |
| avatarData | <code>string</code> | Avatar URL |
| bannerData | <code>string</code> | Banner URL |

<a name="genFrame"></a>

## genFrame ⇒ <code>Promise.&lt;Buffer&gt;</code>
Generate the card frame

**Kind**: global variable  
**Returns**: <code>Promise.&lt;Buffer&gt;</code> - Canvas  

| Param | Type |
| --- | --- |
| badgesData | <code>Object</code> | 
| badgesData.canvas | <code>CanvasElemet</code> | 
| badgesData.badgesLength | <code>string</code> | 
| options | <code>Object</code> | 
| options.badgesFrame | <code>string</code> | 

<a name="genBorder"></a>

## genBorder ⇒ <code>Promise.&lt;Buffer&gt;</code>
Generate the edges of the card with a multi-color gradient

**Kind**: global variable  
**Returns**: <code>Promise.&lt;Buffer&gt;</code> - Canvas  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | Options object |
| options.borderColor | <code>string</code> \| <code>Array.&lt;string&gt;</code> | It can be a color or an array of colors |
| options.borderAllign | <code>string</code> | Edge direction ('vertical' or 'horizontal') |

<a name="genTextAndAvatar"></a>

## genTextAndAvatar ⇒ <code>Promise.&lt;Buffer&gt;</code>
Generate the card text and avatar

**Kind**: global variable  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| user | <code>Object</code> |  | User data |
| user.username | <code>string</code> |  | User name |
| user.discriminator | <code>string</code> |  | User discriminator |
| user.bot | <code>boolean</code> |  | If the user is a bot |
| user.createdTimestamp | <code>number</code> |  | User creation timestamp |
| user.id | <code>string</code> |  | User ID |
| options | <code>Object</code> |  | Options object |
| options.customUsername | <code>string</code> |  | Custom username |
| options.usernameColor | <code>string</code> |  | Username color |
| options.customSubtitle | <code>string</code> |  | Custom subtitle |
| options.subtitleColor | <code>string</code> |  | Subtitle color |
| options.customDate | <code>string</code> \| <code>Date</code> |  | Custom date |
| options.localDateType | <code>string</code> |  | Local format for the date, for example, 'en' | 'es', etc. |
| options.customTag | <code>string</code> |  | Custom tag |
| options.tagColor | <code>string</code> |  | HEX Color of the label |
| options.squareAvatar | <code>boolean</code> |  | Change the shape of the avatar to a square |
| options.presenceStatus | <code>boolean</code> |  | Show presence status |
| rankData | <code>Object</code> |  | Range data |
| avatarData | <code>string</code> |  | Avatar URL |
| [font] | <code>string</code> | <code>&quot;\&quot;Arial\&quot;&quot;</code> | Typeface family |

<a name="genAvatarFrame"></a>

## genAvatarFrame ⇒ <code>Promise.&lt;Buffer&gt;</code>
This function generates the avatar frame

**Kind**: global variable  
**Returns**: <code>Promise.&lt;Buffer&gt;</code> - Canvas  

| Param | Type | Description |
| --- | --- | --- |
| user | <code>Object</code> | User data |
| user.avatar_decoration_data | <code>Object</code> | Avatar decoration data |
| user.avatar_decoration_data.asset | <code>string</code> | Avatar decoration asset |
| options | <code>Object</code> | Object of options |
| options.presenceStatus | <code>string</code> | User presence |

<a name="cutAvatarStatus"></a>

## cutAvatarStatus ⇒ <code>Promise.&lt;Buffer&gt;</code>
This function cuts the presence status on the card

**Kind**: global variable  
**Returns**: <code>Promise.&lt;Buffer&gt;</code> - Canvas  

| Param | Type | Description |
| --- | --- | --- |
| canvasToEdit | <code>Image</code> \| <code>Canvas</code> | Image or canvas to edit |
| options | <code>Object</code> | Object of options |
| options.presenceStatus | <code>string</code> | User presence |

<a name="genStatus"></a>

## genStatus ⇒ <code>Promise.&lt;Buffer&gt;</code>
Sets the presence status on the card

**Kind**: global variable  
**Returns**: <code>Promise.&lt;Buffer&gt;</code> - Canvas  

| Param | Type | Description |
| --- | --- | --- |
| canvasToEdit | <code>Image</code> \| <code>Canvas</code> | Image or canvas to edit |
| options | <code>Object</code> | Object of options |
| options.presenceStatus | <code>string</code> | User presence |

<a name="genBotVerifBadge"></a>

## genBotVerifBadge ⇒ <code>Promise.&lt;Buffer&gt;</code>
Generate the bot verification badge

**Kind**: global variable  
**Returns**: <code>Promise.&lt;Buffer&gt;</code> - Canvas  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| user | <code>Object</code> |  | User object |
| user.username | <code>string</code> |  | User name |
| user.flags | <code>number</code> |  | Numeric value of the user flags |
| [font] | <code>string</code> | <code>&quot;\&quot;Arial\&quot;&quot;</code> | Typeface family |

<a name="addShadow"></a>

## addShadow ⇒ <code>Promise.&lt;Buffer&gt;</code>
Shadows for the canvas

**Kind**: global variable  
**Returns**: <code>Promise.&lt;Buffer&gt;</code> - Canvas  

| Param | Type | Description |
| --- | --- | --- |
| canvasToEdit | <code>Image</code> \| <code>Canvas</code> | Image or canvas to edit |

<a name="genXpBar"></a>

## genXpBar(options) ⇒ <code>Promise.&lt;Buffer&gt;</code>
Generate the experience bar

**Kind**: global function  
**Returns**: <code>Promise.&lt;Buffer&gt;</code> - Canvas  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | Options object |
| options.rankData | <code>Object</code> | Rank data |
| options.rankData.currentXp | <code>number</code> | User current XP |
| options.rankData.requiredXp | <code>number</code> | XP required to level up |
| options.rankData.level | <code>number</code> | User level |
| options.rankData.rank | <code>number</code> | User rank |
| options.rankData.barColor | <code>string</code> \| <code>Array.&lt;string&gt;</code> | Color of the XP bar |
| options.rankData.levelColor | <code>string</code> | Color of the level text |
| options.rankData.autoColorRank | <code>boolean</code> | Automatically color the rank |

