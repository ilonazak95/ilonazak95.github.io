$(function(){
    'use strict';
//find     bierze dany element
    $("body").find("p").eq(2).css("color", "blue");
    
//each - bierze wszystkie podane paragrafy
    $(".paragraf").each(function(index, element) {
        if (index != 1){
            $(this).css("background-color", "green"); // this - jesli przechodzi iteracja dla danego elementu to this odwoluje sie tylko do niego
        }
        console.log("Element : "  + element, index);
    });
})