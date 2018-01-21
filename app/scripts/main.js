console.log('\'Allo \'Allo!');
$(function() {
    /*$('.my-intro').textillate({ in: { 
        effect: 'fadeIn' 
        } 
    });*/
    let i = 0;
    const txt = 'I design things up and code them down.'; //Text
    let speed = 65; //Duration
    
    function typeWriter() {
      if (i < txt.length) {
        document.getElementById('sub-p').innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      }
    }
    $('.tags li').addClass('s_tags');

    setTimeout(function(){
        //$('.my-intro p').fadeIn(1000);
        //$('.my-intro p').css('display','block');
        //$('.my-intro p:first-child').animateCss('fadeIn');
       // $('.my-silh').fadeIn(1000);
    },200);
    
   
    $('#nav-button').click(function(){
        $(this).toggleClass('clicked');
        $('#nav-button.clicked:focus').css('outline','none');
        $('.line1,.line2,.line3').toggleClass('line-tog');
        $('nav#overlay-nav').slideToggle(650);
    });
    setTimeout(function(){
        //$(".my-silh embed").css("background-color","#e6e6e6");
    },6000);

    
   window.addEventListener('load',typeWriter);
 });