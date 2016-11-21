


$(document).ready(function(){
  function autoplay() {
      $('.carousel').carousel('next');
      setTimeout(autoplay, 1000);
  }

  ;

  var options = [
    {selector: '.cat-1', offset: -1000,
     callback: function(){
        Materialize.fadeInImage('.triangle-isosceles')
      }
    },

    {selector: '.cat-1', offset: -1000,
    callback: function(el){
      Materialize.showStaggeredList('.cat-2');
    }}
  ];

  Materialize.scrollFire(options);

  $('ul.tabs').tabs();

  $('.carousel').carousel({
      'time_constant': 5000,
      'shift': 1,
      'padding': 200,
      'dist': -100,
      'no_wrap': false,
      'height' : 300
  });

  autoplay();
});

$(window).scroll(function(){
  var wScroll = $(this).scrollTop();

  $('.parallax_btn').css({
    'transition': '.5s ease-out',
    'transform' : 'translate(0px, +'+ wScroll / 4 +'%)'
  });

  $('.cat-1').css({
    'transition': '.5s cubic-bezier(0, 0, 0.41, 1.11)',
    'transform' : 'translate(0px, +'+ wScroll / 4 +'%)',
  });

  $('.parallax_row-1').css({
    'transition': '.5s ease-out',
    'transform' : 'translate(0px, -'+ wScroll / 8 +'%)',
  });

/*
  $('.parallax_row-2').css({
    'transform' : 'translate(0px, +'+ wScroll / 50 +'%)',
    'transition': '.5s ease-out',
  });
*/

  $('.parallax_row-3').css({
    'transition': '.5s ease-out',
    'transform' : 'translate(0px, +'+ wScroll / 2 +'%)',
  });

  /*if (!wScroll > $('.first-card').offset().left - ($(window).width() / 2)){
    $('.first-card').show("scale",{},3000).center(false, 3000);

    $('.first-card').css({
      'transition': '.5s ease-out',
      'opacity': wScroll / 400,
      'transform' : 'translate( +'+ wScroll / 5 +'%, 0px)',
    });
  /*} else {
    $('.first-card').css({
      'left': $(window).width() / 2,
    });
    console.log($(window).width() / 2);
    console.log($('.first-card').offset().left);
    //$('.first-card').offset().left == $(window).width() / 2;
  }*/
});
