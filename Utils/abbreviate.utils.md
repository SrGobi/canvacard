## Members

<dl>
<dt><a href="#getFirstDigitsAsDecimal">getFirstDigitsAsDecimal</a></dt>
<dd><p>This method takes a large number like &quot;9360&quot; and converts it to a small decimal like &quot;9.3&quot;. Used by <code>abbreviateNumber()</code> to form abbreviations such as &quot;9.3K&quot;. For the moment, this method intentionally avoids rounding numbers for simplicity.</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#abbreviateNumber">abbreviateNumber()</a></dt>
<dd><p>The abbreviation follows the format seen in many games:
K - thousands
M - millions
B - billons
T - trillons</p>
<p>All numbers greater than billions follow the following format, using each letter of the alphabet paired with itself:
AA
BB
...
ZZ</p>
<p>It supports all numbers up to almost a googol (100 zeros) and supports up to 92 zeros or 93 digits.</p>
</dd>
</dl>

<a name="getFirstDigitsAsDecimal"></a>

## getFirstDigitsAsDecimal
This method takes a large number like "9360" and converts it to a small decimal like "9.3". Used by `abbreviateNumber()` to form abbreviations such as "9.3K". For the moment, this method intentionally avoids rounding numbers for simplicity.

**Kind**: global variable  
<a name="abbreviateNumber"></a>

## abbreviateNumber()
The abbreviation follows the format seen in many games:K - thousandsM - millionsB - billonsT - trillonsAll numbers greater than billions follow the following format, using each letter of the alphabet paired with itself:AABB...ZZIt supports all numbers up to almost a googol (100 zeros) and supports up to 92 zeros or 93 digits.

**Kind**: global function  
