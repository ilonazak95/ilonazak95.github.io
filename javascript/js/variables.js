'use strict';

var wzrost = 165;
var wiek = 21;
var wiekIlony = wiek;


console.log(wzrost);
console.log(wiek);
console.log(wiekIlony);

function wyswietlZmienna() {
    var imie = 'Karolina';
    console.log(imie);
}

var wyswietlWiek = function () {
    console.log(wiek);
}

wyswietlZmienna();
wyswietlWiek();


function mnozenie(parametr1, parametr2) {
    var wynik = parametr1 * parametr2;
    console.log('Wynik: ' + wynik);
    
    return wynik;
    //return przerywa funkcje, to co byloby pod tym nie zadziala
}

mnozenie(5, 6);
mnozenie(4, 10);

var wynikMnozenia = mnozenie(3, 5);
console.log('wynik mnożenia: ' + wynikMnozenia);












