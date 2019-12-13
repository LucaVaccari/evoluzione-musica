$(function(){
    var prevScrollPos = window.pageYOffset;
    document.onscroll = function(){
        if(prevScrollPos < window.pageYOffset){
            $(".navbar-hide").css("top", "-100%");
        }
        else if(prevScrollPos > window.pageYOffset){
            $(".navbar-hide").css("top", "0px");
        }
        prevScrollPos = window.pageYOffset;
    };
});