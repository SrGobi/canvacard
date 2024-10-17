export = abbreviateNumber;
/**
 * La abreviatura sigue el formato que se ve en muchos juegos:
 * K - miles
 * M - millones
 * B - billones
 * T - trillones
 *
 * Todos los números mayores que billones siguen el siguiente formato, utilizando cada letra del alfabeto emparejada consigo misma:
 * AA
 * BB
 * ...
 * ZZ
 *
 * Admite todos los números hasta casi un googol (100 ceros) y admite hasta 92 ceros o 93 dígitos.
 */
declare function abbreviateNumber(number: any): string;
//# sourceMappingURL=abbreviate.utils.d.ts.map