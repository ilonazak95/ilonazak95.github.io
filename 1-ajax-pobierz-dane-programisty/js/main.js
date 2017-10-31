'use strict';
$(function () { 
    
    $.getJSON("https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php",function(data) { 
    
        $("#przycisk").click(function(){
            console.log(data);
            $("<div></div>").attr("id","dane-programisty").insertAfter("#przycisk");
        
            $("#dane-programisty").text("Imię : " + data.imie + ", " +
                                "Nazwisko : " + data.nazwisko + ", " + 
                                "Zawód : " + data.zawod + ", " + 
                                "Firma : " + data.firma);
        });
 
    });
    
});