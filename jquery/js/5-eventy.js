'use strict';

$(function(){
    
//    $("#first").click(function() {
//        $(this).css("background-color", "yellow");
//    })
    
    $("#first").on({
        "mouseover": function() {
            $(this).css("background-color", "green");
        },
        "mouseleave" : function(){
            $(this).css("background-color", "lightblue");
        },
        "click" : function() {
            console.log("click click");
        }
    });
    
    $("#first").mouseenter(function(){
        $("#second").toggle(function(){
            $(this).css({"background-color": "lightgreen",
                        "text-decoration": "underline"});
        });    
    });
});