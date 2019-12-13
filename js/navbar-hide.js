$(function(){
    var prevScrollPos = window.pageYOffset;
    document.onscroll = function(){
        if(prevScrollPos < window.pageYOffset){
            $(".navbar-hide").css("top", "-60px");
        }
        else if(prevScrollPos > window.pageYOffset){
            $(".navbar-hide").css("top", "0px");
        }
        prevScrollPos = window.pageYOffset;
    };
});