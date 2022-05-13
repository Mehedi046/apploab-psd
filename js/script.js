//header navigation
const mainMenu = document.querySelector('.menu');
const closeMenu = document.querySelector('.close');
const openMenu = document.querySelector('.btn-bar');

openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);
function show(){
	mainMenu.style.display = "flex";
	mainMenu.style.left = '0';
}
function close(){
	mainMenu.style.left = '-100%';
}

//Jquery plugins =====

$(document).ready(function(){
    //navbar colour change when it scroll down
    /* When the user scrolls down,then change  the navbar color.*/
$(window).on('scroll',function() {
    if($(window).scrollTop()){
      $('.header').addClass('white');
    }
    else{
      $('.header').removeClass('white');
    }
    
  });
  //Owl Carousel=====
  $('.owl-carousel').owlCarousel({
  	loop:false,
            margin:10,
            responsiveClass:true,
            autoplay:true,
            autoplaySpeed:3000,
            responsive:{
                0:{
                    items:1,
                },
                600:{
                    items:4,
                    nav:false
                },
                1000:{
                    items:5,
                }
            }

  })
  //scroll top==============
  $('.totop').tottTop({
    scrollTop:2000,
    scrollTopBtnDuration:600,
    duration:100,
  });
  //wow js started=========================
  var wow = new WOW(
    {
      boxClass:     'wow',      // animated element css class (default is wow)
      animateClass: 'animated', // animation css class (default is animated)
      offset:       0,          // distance to the element when triggering the animation (default is 0)
      mobile:       true,       // trigger animations on mobile devices (default is true)
      live:         true,       // act on asynchronously loaded content (default is true)
      callback:     function(box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
      },
      scrollContainer: null // optional scroll container selector, otherwise use window
    }
  );
  wow.init();

})