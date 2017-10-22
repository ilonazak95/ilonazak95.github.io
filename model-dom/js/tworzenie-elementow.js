'use strict';

var istniejacyWezel = document.getElementById('parSecond');
console.log(istniejacyWezel);

var newElement = document.createElement('p') ; //stworz nowy element p
var newElementContent = document.createTextNode('To jest nowy paragraf');//stworz tekst dla nowego elementu p

newElement.appendChild(newElementContent); //dodaj tekst do elementu p

console.log(newElement);

istniejacyWezel.appendChild(newElement);
istniejacyWezel.removeChild(newElement);


/*zamiana dzieci*/

/*var parFirstDiv = document.getElementById('parFirst');
var linkWParagrafie = document.getElementById('parFirst').children[2];
console.log(linkWParagrafie);
parFirstDiv.replaceChild(newElement, linkWParagrafie);*/

//dodaj znacznik <br> po każdym linu i usun z nich atrybut klasy 

var allLinks = document.getElementsByTagName('a');
console.log(allLinks);

for (var i = 0; i < allLinks.length; i++){
    var br = document.createElement('br');
    allLinks[i].parentNode.insertBefore(br, allLinks[i].nextSibling);
    allLinks[i].removeAttribute('class'); //usun atrybut klasy
    allLinks[i].setAttribute('id', 'link-id-'+i); //dodaj atrybut
}
















