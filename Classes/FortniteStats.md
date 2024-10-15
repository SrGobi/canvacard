## Classes

<dl>
<dt><a href="#FortniteStats">FortniteStats</a></dt>
<dd><p>Creador de imagen de estadisticas de fortnite</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#formatVariable">formatVariable(prefix, variable)</a> ⇒</dt>
<dd><p>Obtiene variables y tipos</p>
</dd>
</dl>

<a name="FortniteStats"></a>

## FortniteStats
Creador de imagen de estadisticas de fortnite

**Kind**: global class  

* [FortniteStats](#FortniteStats)
    * [new FortniteStats()](#new_FortniteStats_new)
    * [.token](#FortniteStats+token) : <code>string</code>
    * [.platform](#FortniteStats+platform) : <code>string</code>
    * [.user](#FortniteStats+user) : <code>string</code>
    * [.textFooter](#FortniteStats+textFooter) : <code>string</code>
    * [.textAverageKills](#FortniteStats+textAverageKills) : <code>string</code>
    * [.textAverageKill](#FortniteStats+textAverageKill) : <code>string</code>
    * [.textWPercent](#FortniteStats+textWPercent) : <code>string</code>
    * [.textWinPercent](#FortniteStats+textWinPercent) : <code>string</code>
    * [.textKD](#FortniteStats+textKD) : <code>string</code>
    * [.textWins](#FortniteStats+textWins) : <code>string</code>
    * [.textWin](#FortniteStats+textWin) : <code>string</code>
    * [.textKills](#FortniteStats+textKills) : <code>string</code>
    * [.textKill](#FortniteStats+textKill) : <code>string</code>
    * [.textMatches](#FortniteStats+textMatches) : <code>string</code>
    * [.textMatch](#FortniteStats+textMatch) : <code>string</code>
    * [.setToken(value)](#FortniteStats+setToken) ⇒ [<code>FortniteStats</code>](#FortniteStats)
    * [.setPlatform(value)](#FortniteStats+setPlatform) ⇒ [<code>FortniteStats</code>](#FortniteStats)
    * [.setUser(value)](#FortniteStats+setUser) ⇒ [<code>FortniteStats</code>](#FortniteStats)
    * [.setText(value)](#FortniteStats+setText) ⇒ [<code>FortniteStats</code>](#FortniteStats)
    * [.build([font])](#FortniteStats+build) ⇒ <code>Promise.&lt;string&gt;</code>

<a name="new_FortniteStats_new"></a>

### new FortniteStats()
FortniteStats image builder

**Example**  
```js	 const FortniteStatsCardURL = await new FortniteStats()
        .setToken("3533192f-66bc-48b2-8df9-c03bfeb75957")
        .setUser("BLD SRGOBI")
        .setPlatform("pc")
        .setText("footer", "ESP CUSTOMS X FORTNITE")
        .toAttachment();
    await channel.send({ files: [{ attachment: FortniteStatsCardURL, name: 'FortniteStats.png' }] })```
<a name="FortniteStats+token"></a>

### fortniteStats.token : <code>string</code>
Token

**Kind**: instance property of [<code>FortniteStats</code>](#FortniteStats)  
<a name="FortniteStats+platform"></a>

### fortniteStats.platform : <code>string</code>
Plaraforma

**Kind**: instance property of [<code>FortniteStats</code>](#FortniteStats)  
<a name="FortniteStats+user"></a>

### fortniteStats.user : <code>string</code>
Nombre de usuario

**Kind**: instance property of [<code>FortniteStats</code>](#FortniteStats)  
<a name="FortniteStats+textFooter"></a>

### fortniteStats.textFooter : <code>string</code>
Texto del footer

**Kind**: instance property of [<code>FortniteStats</code>](#FortniteStats)  
<a name="FortniteStats+textAverageKills"></a>

### fortniteStats.textAverageKills : <code>string</code>
Texto AvengersKills

**Kind**: instance property of [<code>FortniteStats</code>](#FortniteStats)  
<a name="FortniteStats+textAverageKill"></a>

### fortniteStats.textAverageKill : <code>string</code>
Texto AverageKill

**Kind**: instance property of [<code>FortniteStats</code>](#FortniteStats)  
<a name="FortniteStats+textWPercent"></a>

### fortniteStats.textWPercent : <code>string</code>
Texto Porcejtage victoria

**Kind**: instance property of [<code>FortniteStats</code>](#FortniteStats)  
<a name="FortniteStats+textWinPercent"></a>

### fortniteStats.textWinPercent : <code>string</code>
Texto Porcejtage victorias

**Kind**: instance property of [<code>FortniteStats</code>](#FortniteStats)  
<a name="FortniteStats+textKD"></a>

### fortniteStats.textKD : <code>string</code>
Texto KD

**Kind**: instance property of [<code>FortniteStats</code>](#FortniteStats)  
<a name="FortniteStats+textWins"></a>

### fortniteStats.textWins : <code>string</code>
Texto Victorias

**Kind**: instance property of [<code>FortniteStats</code>](#FortniteStats)  
<a name="FortniteStats+textWin"></a>

### fortniteStats.textWin : <code>string</code>
Texto Victoria

**Kind**: instance property of [<code>FortniteStats</code>](#FortniteStats)  
<a name="FortniteStats+textKills"></a>

### fortniteStats.textKills : <code>string</code>
Texto Kills

**Kind**: instance property of [<code>FortniteStats</code>](#FortniteStats)  
<a name="FortniteStats+textKill"></a>

### fortniteStats.textKill : <code>string</code>
Texto Kill

**Kind**: instance property of [<code>FortniteStats</code>](#FortniteStats)  
<a name="FortniteStats+textMatches"></a>

### fortniteStats.textMatches : <code>string</code>
Texto Partidas jugadas

**Kind**: instance property of [<code>FortniteStats</code>](#FortniteStats)  
<a name="FortniteStats+textMatch"></a>

### fortniteStats.textMatch : <code>string</code>
Texto Partida jugada

**Kind**: instance property of [<code>FortniteStats</code>](#FortniteStats)  
<a name="FortniteStats+setToken"></a>

### fortniteStats.setToken(value) ⇒ [<code>FortniteStats</code>](#FortniteStats)
Valor del Token

**Kind**: instance method of [<code>FortniteStats</code>](#FortniteStats)  

| Param | Type |
| --- | --- |
| value | <code>string</code> | 

<a name="FortniteStats+setPlatform"></a>

### fortniteStats.setPlatform(value) ⇒ [<code>FortniteStats</code>](#FortniteStats)
Valor de la plataforma

**Kind**: instance method of [<code>FortniteStats</code>](#FortniteStats)  

| Param | Type |
| --- | --- |
| value | <code>string</code> | 

<a name="FortniteStats+setUser"></a>

### fortniteStats.setUser(value) ⇒ [<code>FortniteStats</code>](#FortniteStats)
Valor del usuario

**Kind**: instance method of [<code>FortniteStats</code>](#FortniteStats)  

| Param | Type |
| --- | --- |
| value | <code>string</code> | 

<a name="FortniteStats+setText"></a>

### fortniteStats.setText(value) ⇒ [<code>FortniteStats</code>](#FortniteStats)
Valor del texto

**Kind**: instance method of [<code>FortniteStats</code>](#FortniteStats)  

| Param | Type |
| --- | --- |
| value | <code>string</code> | 

<a name="FortniteStats+build"></a>

### fortniteStats.build([font]) ⇒ <code>Promise.&lt;string&gt;</code>
Construye la imagen de la tienda de fortnite

**Kind**: instance method of [<code>FortniteStats</code>](#FortniteStats)  
**Returns**: <code>Promise.&lt;string&gt;</code> - La imagen de la tienda de fortnite  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [font] | <code>string</code> | <code>&quot;\&quot;Arial\&quot;&quot;</code> | Familia tipográfica |

<a name="formatVariable"></a>

## formatVariable(prefix, variable) ⇒
Obtiene variables y tipos

**Kind**: global function  
**Returns**: La variable formateada  

| Param | Type | Description |
| --- | --- | --- |
| prefix | <code>object</code> | El tipo de variable |
| variable | <code>object</code> | La variable a cambiar |

