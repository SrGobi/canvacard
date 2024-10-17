## Functions

<dl>
<dt><a href="#getFirstDigitsAsDecimal">getFirstDigitsAsDecimal()</a></dt>
<dd><p>Este método toma un número grande como &quot;9360&quot; y lo convierte en un decimal pequeño como &quot;9.3&quot;.
Utilizado por <code>abbreviateNumber()</code> para formar abreviaturas como &quot;9.3K&quot;.</p>
<p>Por el momento, este método evita intencionalmente el redondeo de números para simplificar.</p>
</dd>
<dt><a href="#abbreviateNumber">abbreviateNumber()</a></dt>
<dd><p>La abreviatura sigue el formato que se ve en muchos juegos:
K - miles
M - millones
B - billones
T - trillones</p>
<p>Todos los números mayores que billones siguen el siguiente formato, utilizando cada letra del alfabeto emparejada consigo misma:
AA
BB
...
ZZ</p>
<p>Admite todos los números hasta casi un googol (100 ceros) y admite hasta 92 ceros o 93 dígitos.</p>
</dd>
</dl>

<a name="getFirstDigitsAsDecimal"></a>

## getFirstDigitsAsDecimal()
Este método toma un número grande como "9360" y lo convierte en un decimal pequeño como "9.3".Utilizado por `abbreviateNumber()` para formar abreviaturas como "9.3K".Por el momento, este método evita intencionalmente el redondeo de números para simplificar.

**Kind**: global function  
<a name="abbreviateNumber"></a>

## abbreviateNumber()
La abreviatura sigue el formato que se ve en muchos juegos:K - milesM - millonesB - billonesT - trillonesTodos los números mayores que billones siguen el siguiente formato, utilizando cada letra del alfabeto emparejada consigo misma:AABB...ZZAdmite todos los números hasta casi un googol (100 ceros) y admite hasta 92 ceros o 93 dígitos.

**Kind**: global function  
