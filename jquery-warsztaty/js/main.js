'use strict';

$(function(){
    
    var slideShow = $(".slide-show");
    var slideCount = $(".single-slide").length;
    var slideWidth = 100/slideCount;
    var slideIndex = 0;

    slideShow.css("width", (slideCount * 100) + "%");
    
    slideShow.find(".single-slide").each(function(index){
      //console.log($(this)); 
        $(this).css({"width": slideWidth + "%",
                   "margin-left": (index * slideWidth) + "%"});
    });
    
    function slide(newSlideIndex){
        if (newSlideIndex < 0 || newSlideIndex > slideCount - 1) {
            console.log("nie ma slajdu o takim indexie");
            return;
        }
        var slideCaption = slideShow.find(".slide-caption").eq(newSlideIndex);
        
        var marginLeft = (newSlideIndex * (-100)) + "%";
        
        slideCaption.hide();
        
        slideShow.animate({"margin-left": marginLeft}, 1000, function(){
           slideIndex = newSlideIndex;
            slideCaption.fadeIn();
        });
    }
    
    
    $(".prev-slide").click(function(){
        slide(slideIndex -1);
    });
        
    $(".next-slide").click(function(){
        slide(slideIndex +1);
    });
});