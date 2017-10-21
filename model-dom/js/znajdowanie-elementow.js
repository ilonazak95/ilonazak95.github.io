'use strict' ;

/*znajdowanie po ID */
var parFirst = document.getElementById('parFirst');
console.log(parFirst);

/*znajdowanie po klasie*/
var link = document.getElementsByClassName('link');
console.log(link);

/* znajdowanie po tag name */

var linkiPoTagu = document.getElementsByTagName('p');
console.log(linkiPoTagu);

/*selektor query selector all pokazuje wszystkie elementy */

var wszystkieLinki = document.querySelectorAll('.link');
console.log(wszystkieLinki);

/* query selektor pokazuje pierwszy element*/
/*var pierwszyLink = document.querySelector('.link');
console.log(pierwszyLink);


wszystkieLinki.forEach(function(link, index){
        console.log(link.outerHTML)
})

pierwszyLink.forEach(function(link, index){
       console.log(link.innerHTML)
})
*/
var elementParent = document.getElementById('parFirst').parentNode;
//console.log(elementParent);


console.log( document.getElementById( "parFirst" ).children );
console.log( document.getElementById( "parFirst" ).childNodes );
console.log( document.getElementById( "parFirst" ).childNodes[1] );
console.log( document.getElementById( "parFirst" ).firstChild );
console.log( document.getElementById( "parFirst" ).lastChild );





