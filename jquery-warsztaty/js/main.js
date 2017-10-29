'use strict';

$(function(){
    
    var slideShow = $(".slide-show");
    var slideCount = $(".single-slide").length;
    var slideWidth = 100/slideCount;
    var slideIndex = 0;

//szerokosc kontenera .slide-show
    slideShow.css("width", (slideCount * 100) + "%");
    
 // nadanie kazdemu slajdowi szerokosc i lewy margines   
    slideShow.find(".single-slide").each(function(index){
      //console.log($(this)); 
      // this- dla kazdego konkretnego slajdu w ktorym jest iteracja 
        $(this).css({"width": slideWidth + "%",
                   "margin-left": (index * slideWidth) + "%"});
    });
    
// funkcja slide  - funkcja zmieniajaca slajdy, jak kliknieny to newSlideIndex bedzie 1+1 czyli 2; newSlideIndex = slide(slideIndex-1) - zdef. dalej
    function slide(newSlideIndex){
        if (newSlideIndex < 0 || newSlideIndex > slideCount - 1) {
            console.log("nie ma slajdu o takim indexie");
            return;
        }
        //napisy do slajdow
        var slideCaption = slideShow.find(".slide-caption").eq(newSlideIndex);
        
        var marginLeft = (newSlideIndex * (-100)) + "%";
        //ukrywamy napis zeby sie on nie pojawil przed wyswietleniem obrazka
        slideCaption.hide();
        
        slideShow.animate({"margin-left": marginLeft}, 1000, function(){
        //indexowi elementu zdefiniowanego na poczatku przypisujemy nowy index 
           slideIndex = newSlideIndex;
           slideCaption.fadeIn();
        });
    }
    
// nawigacja slidera    
    $(".prev-slide").click(function(){
        slide(slideIndex -1);
    });
        
    $(".next-slide").click(function(){
        slide(slideIndex +1);
    });
});