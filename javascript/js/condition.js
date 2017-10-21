'use strict';

var wzrostMateusz = 190;
var wzrostOlgi = 190;

/*warunek IF*/

if (wzrostOlgi < wzrostMateusz) {
    console.log('Olga jest niższa :)')
}

/* warunek IF- ELSE*/
if (wzrostOlgi > wzrostMateusz) {
    console.log('Olga jest wyższa');
} else {
    console.log('Olga jest niższa');
}

/*waunek if else if*/
if (wzrostOlgi > wzrostMateusz) {
    console.log('Olga jest wyższa');
} else if(wzrostOlgi == wzrostMateusz){
    console.log('Olga jest tak wysoka jak Mateusz')
} else {
    console.log('Olga jest niższa');
}

/*Warunek switch*/
var kolor = 'zielony';

switch (kolor) {
    case 'czerwony':
        console.log('kolor czerwony');
        break;
    case 'zielony':
        console.log('kolor zielony');
        break;
    case 'niebieski':
        console.log('kolor niebieski');
        break;
    default:
        console.log('inny kolor');
}





