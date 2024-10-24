## Classes

<dl>
<dt><a href="#Rank">Rank</a></dt>
<dd></dd>
</dl>

## Functions

<dl>
<dt><a href="#setAvatar">setAvatar(avatarUrl, AvatarDecorationData, squareAvatar)</a> ⇒ <code><a href="#Rank">Rank</a></code></dt>
<dd><p>Set the user avatar</p>
</dd>
<dt><a href="#setBanner">setBanner(bannerUrl, moreBackgroundBlur, disableBackgroundBlur, backgroundBrightness)</a> ⇒ <code><a href="#Rank">Rank</a></code></dt>
<dd><p>Set the user banner</p>
</dd>
<dt><a href="#setBadges">setBadges(flags, bot, frame, customBadges)</a> ⇒ <code><a href="#Rank">Rank</a></code></dt>
<dd><p>Set the user badges and frame</p>
</dd>
<dt><a href="#setBorder">setBorder(color, allign)</a> ⇒ <code><a href="#Rank">Rank</a></code></dt>
<dd><p>Set the border of the card</p>
</dd>
<dt><a href="#setUsername">setUsername(name, [discriminator], [color], customUsername, customTag)</a> ⇒ <code><a href="#Rank">Rank</a></code></dt>
<dd><p>Set the username of the user</p>
</dd>
<dt><a href="#setCurrentXP">setCurrentXP(data, [color])</a> ⇒ <code><a href="#Rank">Rank</a></code></dt>
<dd><p>Set the current experience</p>
</dd>
<dt><a href="#setRequiredXP">setRequiredXP(data, [color])</a> ⇒ <code><a href="#Rank">Rank</a></code></dt>
<dd><p>Set the required experience</p>
</dd>
<dt><a href="#setRank">setRank(data, [text], [display])</a> ⇒ <code><a href="#Rank">Rank</a></code></dt>
<dd><p>Set the user rank</p>
</dd>
<dt><a href="#setLevel">setLevel(data, [text])</a> ⇒ <code><a href="#Rank">Rank</a></code></dt>
<dd><p>Establece el nivel del usuario</p>
</dd>
<dt><a href="#setProgressBar">setProgressBar(color, [fillType], [rounded])</a> ⇒ <code><a href="#Rank">Rank</a></code></dt>
<dd><p>Set the progress bar</p>
</dd>
<dt><a href="#setStatus">setStatus(presenceStatus)</a> ⇒ <code><a href="#Rank">Rank</a></code></dt>
<dd><p>Set the user presence status</p>
</dd>
<dt><a href="#setCreatedTimestamp">setCreatedTimestamp(timestamp, customDate)</a> ⇒ <code><a href="#Rank">Rank</a></code></dt>
<dd><p>Set the user created timestamp</p>
</dd>
<dt><a href="#build">build([font])</a> ⇒ <code>Promise.&lt;Buffer&gt;</code></dt>
<dd><p>Build the rank card</p>
</dd>
</dl>

<a name="Rank"></a>

## Rank
**Kind**: global class  
<a name="new_Rank_new"></a>

### new Rank(userId)
Rank card creator<details open> <summary>PREVIEW</summary><br>  <a>    <img src="https://raw.githubusercontent.com/SrGobi/canvacard/refs/heads/test/rank_1.png" alt="Rank Card Preview 1">  </a>  <a>    <img src="https://raw.githubusercontent.com/SrGobi/canvacard/refs/heads/test/rank_2.png" alt="Rank Card Preview 2">  </a>  <a>    <img src="https://raw.githubusercontent.com/SrGobi/canvacard/refs/heads/test/rank_3.png" alt="Rank Card Preview 3">  </a></details>


| Param | Type | Description |
| --- | --- | --- |
| userId | <code>string</code> | User ID |

**Example**  
```js
const rank = new canvacard.Rank(data.id)
  .setAvatar(data.avatarURL, data.avatar_decoration_data.asset)
  .setBanner(data.bannerURL, true)
  .setBadges(data.flags, data.bot, true)
  .setBorder("#FFFFFF", "to right")
  .setCurrentXP(userData.xp)
  .setRequiredXP(userData.requiredXP)
  .setRank(1, "RANK", true)
  .setLevel(20, "LEVEL", true)
  .setStatus("online")
  .setProgressBar(["#14C49E", "#FF0000"], "GRADIENT", true)
  .setUsername(data.global_name, data.discriminator)
  .setCreatedTimestamp(data.createdTimestamp);

const rankImage = await rank.build("Cascadia Code PL");
canvacard.write(rankImage, "./rank.png");```
<a name="setAvatar"></a>

## setAvatar(avatarUrl, AvatarDecorationData, squareAvatar) ⇒ [<code>Rank</code>](#Rank)
Set the user avatar

**Kind**: global function  
**Returns**: [<code>Rank</code>](#Rank) - The current instance of Rank  
**Throws**:

- <code>APIError</code> If the URL or asset is invalid


| Param | Type | Description |
| --- | --- | --- |
| avatarUrl | <code>string</code> | Avatar URL |
| AvatarDecorationData | <code>string</code> | Avatar decoration asset |
| squareAvatar | <code>boolean</code> | Square avatar |

<a name="setBanner"></a>

## setBanner(bannerUrl, moreBackgroundBlur, disableBackgroundBlur, backgroundBrightness) ⇒ [<code>Rank</code>](#Rank)
Set the user banner

**Kind**: global function  
**Returns**: [<code>Rank</code>](#Rank) - The current instance of Rank  
**Throws**:

- <code>APIError</code> If the URL or asset is invalid


| Param | Type | Description |
| --- | --- | --- |
| bannerUrl | <code>string</code> | Banner URL |
| moreBackgroundBlur | <code>boolean</code> | More background blur |
| disableBackgroundBlur | <code>boolean</code> | Disable background blur |
| backgroundBrightness | <code>number</code> | Background brightness |

<a name="setBadges"></a>

## setBadges(flags, bot, frame, customBadges) ⇒ [<code>Rank</code>](#Rank)
Set the user badges and frame

**Kind**: global function  
**Returns**: [<code>Rank</code>](#Rank) - The current instance of Rank  
**Throws**:

- <code>APIError</code> If the URL or asset is invalid


| Param | Type | Description |
| --- | --- | --- |
| flags | <code>number</code> | User flags |
| bot | <code>boolean</code> | Whether the user is a bot or not |
| frame | <code>boolean</code> | Badge frame |
| customBadges | <code>Array.&lt;string&gt;</code> | Custom badges |

<a name="setBorder"></a>

## setBorder(color, allign) ⇒ [<code>Rank</code>](#Rank)
Set the border of the card

**Kind**: global function  
**Returns**: [<code>Rank</code>](#Rank) - The current instance of Rank  
**Throws**:

- <code>APIError</code> If the URL or asset is invalid


| Param | Type | Description |
| --- | --- | --- |
| color | <code>string</code> \| <code>Array.&lt;string&gt;</code> | HEX color of the border, can be gradient if 2 colors are used |
| allign | <code>string</code> | Gradient alignment if 2 colors are used |

<a name="setUsername"></a>

## setUsername(name, [discriminator], [color], customUsername, customTag) ⇒ [<code>Rank</code>](#Rank)
Set the username of the user

**Kind**: global function  
**Returns**: [<code>Rank</code>](#Rank) - The current instance of Rank  
**Throws**:

- <code>APIError</code> If the URL or asset is invalid


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| name | <code>string</code> |  | Username of the user |
| [discriminator] | <code>string</code> | <code>&quot;\&quot;0\&quot;&quot;</code> | Discriminator of the user |
| [color] | <code>string</code> | <code>&quot;\&quot;#FFFFFF\&quot;&quot;</code> | Color of the username |
| customUsername | <code>string</code> |  | Custom username |
| customTag | <code>string</code> |  | Custom tag |

<a name="setCurrentXP"></a>

## setCurrentXP(data, [color]) ⇒ [<code>Rank</code>](#Rank)
Set the current experience

**Kind**: global function  
**Returns**: [<code>Rank</code>](#Rank) - The current instance of Rank  
**Throws**:

- <code>APIError</code> If the URL or asset is invalid


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| data | <code>number</code> |  | Current experience data |
| [color] | <code>string</code> | <code>&quot;\&quot;#FFFFFF\&quot;&quot;</code> | Text color |

<a name="setRequiredXP"></a>

## setRequiredXP(data, [color]) ⇒ [<code>Rank</code>](#Rank)
Set the required experience

**Kind**: global function  
**Returns**: [<code>Rank</code>](#Rank) - The current instance of Rank  
**Throws**:

- <code>APIError</code> If the URL or asset is invalid


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| data | <code>number</code> |  | Required experience data |
| [color] | <code>string</code> | <code>&quot;\&quot;#FFFFFF\&quot;&quot;</code> | Text color |

<a name="setRank"></a>

## setRank(data, [text], [display]) ⇒ [<code>Rank</code>](#Rank)
Set the user rank

**Kind**: global function  
**Returns**: [<code>Rank</code>](#Rank) - The current instance of Rank  
**Throws**:

- <code>APIError</code> If the URL or asset is invalid


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| data | <code>number</code> |  | Rank data |
| [text] | <code>string</code> | <code>&quot;\&quot;RANK\&quot;&quot;</code> | Display text |
| [display] | <code>boolean</code> | <code>false</code> | Display system rank or not |

<a name="setLevel"></a>

## setLevel(data, [text]) ⇒ [<code>Rank</code>](#Rank)
Establece el nivel del usuario

**Kind**: global function  
**Returns**: [<code>Rank</code>](#Rank) - The current instance of Rank  
**Throws**:

- <code>APIError</code> If the URL or asset is invalid


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| data | <code>number</code> |  | Level data |
| [text] | <code>string</code> | <code>&quot;\&quot;LEVEL\&quot;&quot;</code> | Display text |

<a name="setProgressBar"></a>

## setProgressBar(color, [fillType], [rounded]) ⇒ [<code>Rank</code>](#Rank)
Set the progress bar

**Kind**: global function  
**Returns**: [<code>Rank</code>](#Rank) - The current instance of Rank  
**Throws**:

- <code>APIError</code> If the URL or asset is invalid


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| color | <code>string</code> \| <code>Array.&lt;string&gt;</code> |  | Color of the progress bar, can be gradient if 2 colors are used |
| [fillType] | <code>string</code> | <code>&quot;\&quot;COLOR\&quot;&quot;</code> | Type of progress bar |
| [rounded] | <code>boolean</code> | <code>true</code> | Rounded corners of the progress bar |

<a name="setStatus"></a>

## setStatus(presenceStatus) ⇒ [<code>Rank</code>](#Rank)
Set the user presence status

**Kind**: global function  
**Returns**: [<code>Rank</code>](#Rank) - The current instance of Rank  
**Throws**:

- <code>APIError</code> If the URL or asset is invalid


| Param | Type | Description |
| --- | --- | --- |
| presenceStatus | <code>string</code> | Presence status |

<a name="setCreatedTimestamp"></a>

## setCreatedTimestamp(timestamp, customDate) ⇒ [<code>Rank</code>](#Rank)
Set the user created timestamp

**Kind**: global function  
**Returns**: [<code>Rank</code>](#Rank) - The current instance of Rank  
**Throws**:

- <code>APIError</code> If the URL or asset is invalid


| Param | Type | Description |
| --- | --- | --- |
| timestamp | <code>number</code> | Timestamp of when the user joined Discord |
| customDate | <code>string</code> \| <code>Date</code> | Custom date format for the timestamp |

<a name="build"></a>

## build([font]) ⇒ <code>Promise.&lt;Buffer&gt;</code>
Build the rank card

**Kind**: global function  
**Returns**: <code>Promise.&lt;Buffer&gt;</code> - Card image in buffer format  
**Throws**:

- <code>APIError</code> Missing field: data


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [font] | <code>string</code> | <code>&quot;\&quot;Arial\&quot;&quot;</code> | Font to use in the card |

