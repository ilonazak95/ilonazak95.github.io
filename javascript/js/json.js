'use strict';

var jsonOsoby =  {
    'osoby': [
        {
            imie: 'Krystian',
            nazwisko: 'Dziopa',
            wzrost: 180,
            zainteresowania: [
                {nazwa: 'podróże'},
                {nazwa: 'gotowanie'}
            ]
        },
          {
            imie: 'Dominik',
            nazwisko: 'Janusz',
            wzrost: 190,
            zainteresowania: [
                {nazwa: 'gotowanie'},
                {nazwa: 'sport'}
            ]
        },
         {
            imie: 'Iwona',
            nazwisko: 'Kowalska',
            wzrost: 160,
            zainteresowania: [
                {nazwa: 'programowanie'},
                {nazwa: 'podroze'},
                {nazwa: 'motoryzacja'}
            ]
        }
    ]
}

console.log(jsonOsoby);
console.log(jsonOsoby.osoby[0].imie);
jsonOsoby.osoby.forEach(function(element, index) {
    console.log(element.imie);
})