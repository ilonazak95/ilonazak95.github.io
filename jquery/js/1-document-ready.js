'use strict';

$(document).ready(function(){
    console.log('strona zaladowana');
});

//zamiast $(funtion) mozna napisac jQuery(function)
$(function(){
   console.log('wersja uproszczona document.ready');
    $('#first').css({'color': 'red'}).hide('slow').show(3000);
    
    var paragraf1 = $('#first');
    var par1 = document.getElementById('first');
    
    console.log(paragraf1);
});

