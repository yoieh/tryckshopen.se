$(document).ready(function(){
  $('.carousel').carousel({
      'time_constant': 5000,
      'shift': 20,
      'padding': 200,
      'dist': -100,
      'no_wrap': true
  });
  function autoplay() {
      $('.carousel').carousel('next');
      setTimeout(autoplay, 1000);
  }

  autoplay()

});

/*
// Next slide
$('.carousel').carousel('next');
$('.carousel').carousel('next', 3); // Move next n times.
// Previous slide
$('.carousel').carousel('prev');
$('.carousel').carousel('prev', 4); // Move prev n times.
// Set to nth slide
$('.carousel').carousel('set', 4);
*/

  ///setTimeout(, 50);


$(window).scroll(function(){
  var wScroll = $(this).scrollTop();


  $('.parallax_btn').css({
    'transition': '.5s ease-out',
    'transform' : 'translate(0px, '+ wScroll / 4 +'%)'
  });

  $('.cat-1').css({
    'transition': '.5s cubic-bezier(0, 0, 0.41, 1.11)',
    'transform' : 'translate(0px, '+ wScroll / 1 +'%)',
  });

  $('.parallax_row-1').css({
    'transition': '.5s ease-out',
    'transform' : 'translate(0px, +'+ wScroll / 4 +'%)',
    //'opacity': wScroll / 50
  });

  $('.parallax_row-2').css({
    'transform' : 'translate(0px, +'+ wScroll / 50 +'%)',
    'transition': '.5s ease-out',
  });

  $('.parallax_row-3').css({
    'transform' : 'translate(0px, -'+ wScroll / 5 +'%)',
  });



  if (!wScroll > $('.first-card').offset().left - ($(window).width() / 2)){
    $('.first-card').css({
      'transition': '.5s ease-out',
      'opacity': wScroll / 400,
      'transform' : 'translate( +'+ wScroll / 5 +'%, 0px)',
    });
  }
});
