'use strict';
$(function () {
    
    $("a[href]").click(function() {
        
        $("html,body").animate({
            scrollTop: $(this.hash).offset().top
        },700);
    })
});