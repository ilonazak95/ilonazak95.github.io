'use strict';

var mainHeader = document.getElementById('main-header'); //przypisujemy naglowek strony do zmiennej

mainHeader.innerHTML = 'Treść nagłówka'; // dodajemy tresc do naglowka, nadpisujac ten juz dodany na poczatku

var link = document.getElementsByClassName('link')[0]; //przypisujemy pierwszy link do zmiennej
link.href = 'http://akademia108.pl'; //dodajemy(nadpisujemy) atrybut href razem z wartoscia po =

console.log(link.classList);
//link.className = 'nowa-klasa'; //nadpisuje nazwe klasy dodajac nowa 'nowa-klasa'

link.className += ' nowa-klasa'; //dodaje nowa klase do linku

/*zmiana stylu w css */
mainHeader.style.color = '#11aa22';//dodajemy style w nagłówku





