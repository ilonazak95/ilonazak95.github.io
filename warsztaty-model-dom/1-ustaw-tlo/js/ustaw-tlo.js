'use strict';

function ustawTlo() {
    /* //pobiera pierwszy paragraf [0] (bo to tablica) i nadaje mu czerwony kolor
     document.getElementsByTagName('p')[0].style.background = 'red';
     document.getElementsByTagName('p')[1].style.background = 'yellow';
     */
    for (var i = 0; i < document.getElementsByTagName('p').length; i++) {
        if (i % 2 == 0) {
            document.getElementsByTagName('p')[i].style.background = 'red';
        } else {
            document.getElementsByTagName('p')[i].style.background = 'yellow';
        }

    }
    document.getElementById('przycisk').value = 'Zeruj Tło';
    
    document.getElementById('przycisk').removeEventListener('click', ustawTlo);
    document.getElementById('przycisk').addEventListener('click', zerujTlo);
}

function zerujTlo(){
    for(var i = 0; i < document.getElementsByTagName('p').length; i++) {
        document.getElementsByTagName('p')[i].style.background = '';
    }
    document.getElementById('przycisk').value = 'Ustaw Tło';
    
    document.getElementById('przycisk').removeEventListener('click', zerujTlo);
    document.getElementById('przycisk').addEventListener('click', ustawTlo);
}

document.getElementById('przycisk').addEventListener('click',ustawTlo);

     //to samo inne rozwiazanie

    /*var pParzyste = document.querySelectorAll('p:nth-child(2n)');
    pParzyste.forEach(function (paragraf) {
        paragraf.style.background = "rgb(255,0,0)";
    });
    var pNieparzyste = document.querySelectorAll('p:nth-child(2n-1)');
    pNieparzyste.forEach(function (paragraf) {
        paragraf.style.background = "rgb(255,100,0)";
    });*/
