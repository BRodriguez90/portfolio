console.log('\'Allo \'Allo!');
$(function(){

    setTimeout(function(){
        $('.my-intro > p').fadeIn(1000);
        $('.my-silh').fadeIn(1000);
    },200);
   
    $("#nav-button").click(function(){
        $(this).toggleClass('clicked');
        $("#nav-button.clicked:focus").css("outline","none");
        $(".line2").toggleClass("line-tog");
        $("nav#overlay-nav").slideToggle(650);
       
    });
 });
