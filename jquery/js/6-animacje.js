'use strict';

$(function() {

//hide show    
   // $("#first").hide(1000).show(1000);
    
//fadeIn fadeOut    
    $("#second").fadeOut(2000).fadeIn(2000);
   
//slideOut slideIn
     $("#third").slideUp(2000).slideDown(2000);
    
//animacja z callback'iem - funkcja zwrotna
    function callbackZwrotny() {
      console.log("Zakonczono pierwsza animacje. Uwaga! Startuje druga ! :)");
        //wywolanie funkcji po 3000, sprawi, ze funkcja sie zapetli i bedzie dzialac caly czas
        $("#first").animate({"font-size": "1em", "margin-left": "0px"}, 3000, function(){
             $("#first").animate({"font-size" : "4em", 
                         "margin-left" : "250px" },3000, callbackZwrotny)
        });
    };
    
//    callbackZwrotny(); //wywolanie funkcji
    
    $("#first").animate({"font-size" : "4em", 
                         "margin-left" : "250px" },3000, callbackZwrotny)//ten callback bez () bo ona ma sie uruchomic po 3 sekundach
    
});