/*global $, jQuery*/
$(document).ready(function () {
  'use strict';

  // ========================================================================= //
  //  SMOOTH SCROLL (FIXED)
  // ========================================================================= //

  $(document).on("scroll", onScroll);

  $('a[href^="#"]').on('click', function (e) {
    var hash = this.hash;

    // 🚫 Ignore empty or placeholder hashes
    if (!hash || hash === '#') {
      return;
    }

    // 🚫 Ignore if target does not exist
    if ($(hash).length === 0) {
      return;
    }

    e.preventDefault();
    $(document).off("scroll");

    $('a').removeClass('active');

    if ($(window).width() < 768) {
      $('.nav-menu').slideUp();
    }

    $(this).addClass('active');

    $('html, body').stop().animate(
      {
        scrollTop: $(hash).offset().top - 80
      },
      500,
      'swing',
      function () {
        window.location.hash = hash;
        $(document).on("scroll", onScroll);
      }
    );
  });

  function onScroll() {
    var scrollPos = $(document).scrollTop();

    $('nav ul li a[href^="#"]').each(function () {
      var currLink = $(this);
      var refElement = $(currLink.attr("href"));

      if (
        refElement.length &&
        refElement.position().top - 90 <= scrollPos &&
        refElement.position().top + refElement.height() > scrollPos
      ) {
        $('nav ul li a').removeClass("active");
        currLink.addClass("active");
      }
    });
  }

  // ========================================================================= //
  //  NAVBAR SHOW / HIDE
  // ========================================================================= //

  $(window).scroll(function () {
    if ($(window).scrollTop() > 0) {
      $("#main-nav, #main-nav-subpage").slideDown(0);
      $("#main-nav-subpage").removeClass('subpage-nav');
    }
  });

  // ========================================================================= //
  //  RESPONSIVE MENU
  // ========================================================================= //

  $('.responsive').on('click', function () {
    $('.nav-menu').slideToggle();
  });

  // ========================================================================= //
  //  TYPED JS (SAFE INIT)
  // ========================================================================= //

  if ($('.typed').length) {
    new Typed('.typed', {
      strings: ["Wendy Segura.", "A Breaker.", "A Maker.", "A Disrupter."],
      typeSpeed: 100,
      loop: true
    });
  }

  // ========================================================================= //
  //  OWL CAROUSEL
  // ========================================================================= //

  if ($('.services-carousel').length) {
    $('.services-carousel').owlCarousel({
      autoplay: true,
      loop: true,
      margin: 20,
      dots: true,
      nav: false,
      responsive: {
        0: { items: 1 },
        768: { items: 2 },
        900: { items: 4 }
      }
    });
  }

  // ========================================================================= //
  //  PORTFOLIO ISOTOPE + FILTER (FIXED)
  // ========================================================================= //

  var $portfolioContainer = $('.portfolio-container');

  if ($portfolioContainer.length) {
    var portfolioIsotope = $portfolioContainer.isotope({
      itemSelector: '.portfolio-thumbnail',
      layoutMode: 'fitRows'
    });

    $('#portfolio-flters li').on('click', function () {
      $('#portfolio-flters li').removeClass('filter-active');
      $(this).addClass('filter-active');

      var filterValue = $(this).data('filter') || '*';
      portfolioIsotope.isotope({ filter: filterValue });
    });
  }

  // ========================================================================= //
  //  MAGNIFIC POPUP (SAFE INIT)
  // ========================================================================= //

  if ($('.popup-img').length) {
    $('.popup-img').magnificPopup({
      type: 'image',
      removalDelay: 300,
      mainClass: 'mfp-with-zoom',
      gallery: {
        enabled: true
      },
      zoom: {
        enabled: true,
        duration: 300,
        easing: 'ease-in-out',
        opener: function (openerElement) {
          return openerElement.is('img')
            ? openerElement
            : openerElement.find('img');
        }
      }
    });
  }

});
