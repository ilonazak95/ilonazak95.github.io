'use strict';

var osoba = {
/* imie, wzrost itd to sa klucze  */
    imie: 'Wojtek',
    wzrost:  181,
    przedstawOsobe: function() {
        console.log(this.imie);
    } 
}

console.log(osoba.imie);
console.log(osoba['imie']);

osoba.przedstawOsobe();

osoba.nazwisko = 'Potocki';

console.log(osoba.nazwisko);