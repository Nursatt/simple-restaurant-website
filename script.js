$(document).ready(function(){
    $(window).scroll(function(){

        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });


    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        $('html').css("scrollBehavior", "auto");
    });


    var typed = new Typed(".intro__title", {
        strings: [ "Добро Пожаловать в grocery", "食料品へようこそ(Shokuryōhin e yōkoso)", "bienvenue à l'épicerie", "benvenuto in drogheria"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

});