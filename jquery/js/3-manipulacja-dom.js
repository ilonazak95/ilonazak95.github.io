$(function () {

        var pobierzTekst = $("#second");
//  console.log(pobierzTekst.text());

//  zmiana tekstu w danym elemencie
        pobierzTekst.text("Zmieniony tekst naglowka");
        console.log(pobierzTekst.text());

//metoda html
        var body = $("body");
        console.log(body.html());
// nowe body bedzie stworzone
        // console.log(body.html("<p>Nowe body </p>"));

//metody dodajace nowa tresc
        //dodaje tekst wewnatrz elementu za tekstem na ktorym pracujemy
        var przykladAppend = $(".paragrafnext");
        przykladAppend.append(" Appendujemy text");
    
        // dodaje tekst poza elementem na ktorym pracujemy
        var przykladAfter = $(".paragrafnext");
        przykladAfter.after("<span id=\"spanText\">Afterujemy text</span>");
    
        var przykladPrepend = $(".paragrafnext");
        przykladPrepend.prepend(" Prependujemy text |");
    
        var przykladBefore = $(".paragrafnext");
        przykladBefore.before("Beforujemy text");
    
//metody usuwania tekstu i elementu
        var emptyPrzyklad = $(".paragrafnext");
        emptyPrzyklad.empty();
        
        var removePrzyklad = $(".paragrafnext");
        removePrzyklad.remove();
    
//metoda zmiany css
        var zmienKolor = $("#first");
        zmienKolor.css("color", "red");
    
        //zmiana wielu wlasciwosci w css
        zmienKolor.css({"color" : "green", "font-size": "4em"})
    
//edycja pol formularza
        var inputValue = $("#inputValue");
        inputValue.val("Jestem Tekstem :)");
        console.log(inputValue.val());
    
//dodanie i usuwanie klas elementu
        var drugiNaglowek = $("#second");
        drugiNaglowek.addClass("blue");
        
        drugiNaglowek.removeClass("blue");
});