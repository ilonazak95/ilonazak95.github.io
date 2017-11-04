$(function () {
//    scroll menu color change
    if ($(window).scrollTop() >= 50) {
            $('#main-nav').addClass('scroll');
    }
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 50) {
            $('#main-nav').addClass('scroll');
            $('#main-nav').css({'transition':'all 0.5s'})
        }else {
            $('#main-nav').removeClass('scroll');
        }
    });
//    smooth scroll to section
    $("a[href]").click(function() {
        
        $("html,body").animate({
            scrollTop: $(this.hash).offset().top
        },700);
    })
  
});