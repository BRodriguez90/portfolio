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

    /*setTimeout(function(){
        $('.my-intro p').fadeIn(1000);
        $('.my-intro p').css('display','block');
        $('.my-intro p:first-child').animateCss('fadeIn');
        $('.my-silh').fadeIn(1000);
    },200);*/
    
   
    $('#nav-button').click(function() {
        $('#nav-button').toggleClass('clicked');
        $('#nav-button.clicked:focus').css('outline','none');
       // $('.line1,.line2,.line3').toggleClass('line-tog');
       
       $('nav#mobile-nav ul').slideToggle(700);
        
          
       //$('nav#mobile-nav ul').toggleClass('show-ul');
        
    });
    $('nav#mobile-nav li a').click(function(){
      $('#nav-button').toggleClass('clicked');
      $('nav#mobile-nav ul').slideToggle(700);
    });

    
   window.addEventListener('load',typeWriter);
   
     // Add smooth scrolling to all links
  $('a').on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== '') {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

 });