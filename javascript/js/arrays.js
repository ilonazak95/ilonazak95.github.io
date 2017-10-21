'use strict';

var imiona = ['Wojtek', 'Krystian', 'Łukasz'];
console.log(imiona);

imiona[3] = 'Piotrek';

console.log(imiona);

/*imie bedzie na koncu wstawione- funkcja PUSH*/

var ileElementow = imiona.push('Geralt');
console.log(imiona);
console.log(ileElementow);

/* POP - usuwa ostatni element*/
var  zdjetyElement = imiona.pop();
console.log(imiona);
console.log(zdjetyElement);


console.log('ile elementow na tablicy: ' + imiona.length);

/*JOIN*/

/*console.log(imiona.join(' - '));*/

/*reverse*/

imiona.reverse();
console.log(imiona);

/*sort*/
imiona.sort();
console.log(imiona);
