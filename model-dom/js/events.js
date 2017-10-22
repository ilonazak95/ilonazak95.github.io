'use strict';
/*dodawanie eventow */
var secondLink = document.getElementsByTagName('a')[1];

function alarm(event) {
    event.preventDefault();
    alert('Kliknięto w link!');
}

secondLink.onclick = alarm;

//addEventListener najlepiej uzywac !!!!
var thirdLink = document.getElementsByTagName('a')[2];
thirdLink.addEventListener('click', alarm);
/*usuwanie eventow*/
thirdLink.removeEventListener('click',alarm);

//----------------
function klikHeader() {
    console.log('Kliknąłeś w header');
}
document.getElementsByTagName('header')[0].addEventListener('click', klikHeader);
//----------------
function klikH1(e){
    console.log('Kliknąłeś w h1');
}
document.getElementsByTagName('h1')[0].addEventListener('click', function(e){
    e.stopPropagation();
    console.log('Kliknąłeś w h1');
});