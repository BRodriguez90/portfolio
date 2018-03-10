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

    $('.nav-wrap').hover(function(){
      $('.s-div').toggleClass('slide');
    });

    $('#nav-button').click(function() {
        $('#nav-button').toggleClass('clicked');
        $('#nav-button.clicked:focus').css('outline','none');
       // $('.line1,.line2,.line3').toggleClass('line-tog');
       $('nav#mobile-nav ul').slideToggle(250);
       //$('nav#mobile-nav ul').toggleClass('show-ul');
    });

    $('nav#mobile-nav li a').click(function(){
      $('#nav-button').toggleClass('clicked');
      $('nav#mobile-nav ul').slideToggle(250);
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

  /*----- Chart Js -----*/
  const chart = new Chartist.Pie('.ct-chart', { 
    labels: ['HTML', 'CSS', 'JavaScript', 'jQuery','React', 'Node', 'PHP'],
    series: [
        {meta:'Pro', value:40},
        {meta:'Pro', value:40},
        {meta:'Not too shabby', value:20},
        {meta:'Not too shabby', value:20},
        {meta:'Working on it', value:5},
        {meta:'Working on it', value:5},
        {meta:'Not bad', value:15}
        /*40, 40, 20, 20, 5, 5, 15]*/
    ],
   
  }, {
    donut: true,
    low: 0,
    high: 40,
    showLabel: true,
    fullWidth: true,
    plugins:[
      Chartist.plugins.tooltip()
    ]
  });
  
  chart.on('draw', (data) => {
    if(data.type === 'slice') {
      // Get the total path length in order to use for dash array animation
      let pathLength = data.element._node.getTotalLength();
  
      // Set a dasharray that matches the path length as prerequisite to animate dashoffset
      data.element.attr({
        'stroke-dasharray': pathLength + 'px ' + pathLength + 'px'
      });
  
      // Create animation definition while also assigning an ID to the animation for later sync usage
      let animationDefinition = {
        'stroke-dashoffset': {
          id: 'anim' + data.index,
          dur: 777,
          from: -pathLength + 'px',
          to:  '0px',
          easing: Chartist.Svg.Easing.easeOutQuint,
          // We need to use `fill: 'freeze'` otherwise our animation will fall back to initial (not visible)
          fill: 'freeze'
        }
      };
  
      // If this was not the first slice, we need to time the animation so that it uses the end sync event of the previous animation
      if(data.index !== 0) {
        animationDefinition['stroke-dashoffset'].begin = 'anim' + (data.index - 1) + '.end';
      }
  
      // We need to set an initial value before the animation starts as we are not in guided mode which would do that for us
      data.element.attr({
        'stroke-dashoffset': -pathLength + 'px'
      });
  
      // We can't use guided mode as the animations need to rely on setting begin manually
      // See http://gionkunz.github.io/chartist-js/api-documentation.html#chartistsvg-function-animate
      data.element.animate(animationDefinition, false);
    }
  });
  
  // Update the chart every time it's created with a delay of 8 seconds
  /*chart.on('created', function() {
    if(window.__anim21278907124) {
      clearTimeout(window.__anim21278907124);
      window.__anim21278907124 = null;
    }
    window.__anim21278907124 = setTimeout(chart.update.bind(chart), 10000);
  });*/
  

 });