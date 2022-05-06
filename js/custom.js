$(document).ready(function(){

jQuery('#carousel-example-generic').carousel({
  interval: 3000,
});
jQuery('#world-class-experience-owl').owlCarousel({
  loop: true,
  margin: 30,  
  autoplay: true,
  dots: true,
  nav    : false,
  navText : ['<img src="https://hairtransplantdallastx.com/wp-content/uploads/2020/08/world-class-experience-icon-left.png">','<img src="https://hairtransplantdallastx.com/wp-content/uploads/2020/08/world-class-experience-icon-right.png">'],
  pagination:true,
  navigation:true,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1
    },
    767: {
      items: 2
    },
    1025: {
      items: 2
    }
  }
});
jQuery('#our-partner-owl').owlCarousel({
  loop: true,
  margin: 30,  
  autoplay: true,
  dots: false,  
  navText : ['<img src="https://hairtransplantdallastx.com/wp-content/themes/mc-guiness-dermatology/images/world-class-experience-icon-left.png">','<img src="https://hairtransplantdallastx.com/wp-content/themes/mc-guiness-dermatology/images/world-class-experience-icon-right.png">'],
  pagination:true,
  navigation:true,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    1025: {
      items: 4
    }
  }
});
jQuery('#testimonials-owl').owlCarousel({
  loop: true,
  margin: 40,  
  autoplay: true,
  dots: false,  
  navText : ['<img src="https://hairtransplantdallastx.com/wp-content/themes/mc-guiness-dermatology/images/world-class-experience-icon-left.png">','<img src="https://hairtransplantdallastx.com/wp-content/themes/mc-guiness-dermatology/images/world-class-experience-icon-right.png">'],
  pagination:true,
  navigation:true,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    1025: {
      items: 3
    }
  }
});
});
$(document).ready(function(){
    $(".fancybox").fancybox({
        openEffect: "none",
        closeEffect: "none"
    });



// ===== smooth-scroll ==== 

    $(".tm-header-list a[href^='#']").on('click', function(e) {

   // prevent default anchor click behavior
   e.preventDefault();

   // store hash
   var hash = this.hash;

   // animate
   $('html, body').animate({
       scrollTop: $(hash).offset().top
     }, 1000, function(){

       // when done, add hash to url
       // (default click behaviour)
       window.location.hash = hash;
     });

});

$(".tm-header-list a[href^='#']").on('click', function(e) {



   // prevent default anchor click behavior
   e.preventDefault();

   // store hash
   var hash = this.hash;

   // animate
   $('html, body').animate({
       scrollTop: $(hash).offset().top
     }, 500, function(){

       // when done, add hash to url
       // (default click behaviour)
       window.location.hash = hash;
     });

});// smooth-scroll end
 
 
});

jQuery(window).scroll(function(jQuery) {
   if( $(this).scrollTop() > 160 ) {
    $(".tm-header-menu").addClass("fixed-top");
  } else {
    $(".tm-header-menu").removeClass("fixed-top");
  }
});
// ===== Scroll to Top ==== 
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});
$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
})

	

jQuery('#agree_click1').click(function () {
  jQuery('.main_age21').addClass('open')
});
jQuery('#con_agree_click1').click(function () {
  jQuery('.age_verification1').addClass('remove')
});
jQuery('#con_disagree_click1').click(function () {
  jQuery('.main_age21').removeClass('open')
});








    