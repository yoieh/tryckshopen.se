// dependencies of Bootstrap 4
import 'jquery';
import 'jquery-ui-dist/jquery-ui.js';
import 'popper.js';

// Bootstrap 4 (import plugins individually)
import 'bootstrap/js/dist/util';
import 'bootstrap/js/dist/alert';
import 'bootstrap/js/dist/button';
import 'bootstrap/js/dist/carousel';
import 'bootstrap/js/dist/collapse';
import 'bootstrap/js/dist/dropdown';
import 'bootstrap/js/dist/modal';
import 'bootstrap/js/dist/scrollspy';
import 'bootstrap/js/dist/tab';
import 'bootstrap/js/dist/tooltip';
import 'bootstrap/js/dist/popover';

// Font Awesome 5 (Free)
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid'; // https://fontawesome.com/icons?d=gallery&s=solid&m=free
import '@fortawesome/fontawesome-free/js/regular'; // https://fontawesome.com/icons?d=gallery&s=regular&m=free
import '@fortawesome/fontawesome-free/js/brands'; // https://fontawesome.com/icons?d=gallery&s=brands&m=free

import '../scss/index.scss';

$('#alert').click(() => {
  alert('jQuery works!');
});

// Your jQuery code
(function($) {
  'use strict'; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (
      location.pathname.replace(/^\//, '') ==
        this.pathname.replace(/^\//, '') &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate(
          {
            scrollTop: target.offset().top - 72,
          },
          1000,
          'easeInOutExpo'
        );
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 75,
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($('#mainNav').offset().top > 100) {
      $('#mainNav').addClass('navbar-scrolled');
    } else {
      $('#mainNav').removeClass('navbar-scrolled');
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Magnific popup calls
  // $('#portfolio').magnificPopup({
  //   delegate: 'a',
  //   type: 'image',
  //   tLoading: 'Loading image #%curr%...',
  //   mainClass: 'mfp-img-mobile',
  //   gallery: {
  //     enabled: true,
  //     navigateByImgClick: true,
  //     preload: [0, 1],
  //   },
  //   image: {
  //     tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
  //   },
  // });
})(jQuery); // End of use strict
