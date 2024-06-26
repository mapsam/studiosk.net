jQuery(document).ready(function($){

  // Project Info
  $('.project-info-toggle').on('click', function(){
    $('.project-info-collapse').slideToggle(200);
    $(this).toggleClass('open');
    if($(this).hasClass('open')) {
      $(this).text('Close');
    } else {
      $(this).text('Project Info');
    }
  });

  // swiper.js
  const swiper = new Swiper('.project-swiper', {
    autoHeight: true,
    loop: true,
    effect: 'fade',
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    }
  });

  // masonry
  $('.grid').masonry({
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    percentPosition: true,
  });

  

  const enlargeParent = $('.enlarge-image');
  $('.enlarge').on('click', function() {
    const imgSrc = $(this).attr('src');
    const parent = $('.enlarge-image');
    enlargeParent.find('img').attr('src', imgSrc);
    enlargeParent.removeClass('hide');
  });

  enlargeParent.on('click', function() {
    if (!enlargeParent.hasClass('hide')) {
      enlargeParent.addClass('hide');
    }
  });

  $('.enlarge-image--close-icon').on('click', function() {
    enlargeParent.addClass('hide');
  });

  $(document).on('keydown', function(event) {
    if (event.key == "Escape" && !enlargeParent.hasClass('hide')) {
      enlargeParent.addClass('hide');
    }
  });

  ///////////////////////////////////
  // BANNER FUNCTIONS
  ///////////////////////////////////
  var speed = 300;
  if($('.galerie .item').length > 1) {
    $('.galerie .item').hide().eq(0).show();
  }
  $('#next').on('click', function(){
    next();
  });
  $('#prev').on('click', function(){
    prev();
  });

  function rotateBanner(num){
    $('.galerie .on').removeClass('on').fadeOut(speed);
    $('.galerie .item').eq(num).addClass('on').fadeIn(speed);
    num = (num+1 == $('.galerie .item').length) ? 0: num+1;
  }

  function next() {
    var s = getSliderState();
      if(s['current-slide']===s['total-slides']) {
        rotateBanner(0);
      } else {
        rotateBanner(s['current-slide']);
      }
  }

  function prev() {
    var s = getSliderState();
    if(s['current-slide']!=1) {
      rotateBanner(s['current-slide']-2);
    } else {
      rotateBanner(s['total-slides']-1);
    }
  }

  function getSliderState() {
    var current = $('.item.on');
    var slides = $('.item').length;
    var slide = $('.item').index(current) + 1;
    var s = {
      'total-slides': slides,
      'current-slide': slide
    };
    return s;
  }


  window.menu = {
    yDown: null,
    xDown: null,
    swipeMenuState: false,
    elem: document.getElementById('menu-attic'),
    button: document.getElementById('menu-button'),

    open: function() {
      menu.elem.className = 'open';
      document.body.className = 'attic_is_open';
      menu.button.className = 'open';
      menu.swipeMenuState = !menu.swipeMenuState;
    },

    close: function() {
      menu.elem.className = '';
      document.body.className = '';
      menu.button.className = '';
      menu.swipeMenuState = !menu.swipeMenuState;
    },

    toggle: function() {
      if (menu.swipeMenuState) {
        menu.close();
      } else {
        menu.open();
      }
    },

    handleTouchStart: function(event) {
      menu.xDown = event.touches[0].clientX;
      menu.yDown = event.touches[0].clientY;
    },

    handleTouchMove: function(event) {
      if ( ! menu.xDown || ! menu.yDown ) {
        return;
      }

      var xUp = event.touches[0].clientX;
      var yUp = event.touches[0].clientY;

      var xDiff = menu.xDown - xUp;
      var yDiff = menu.yDown - yUp;

      if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {
        document.body.className = 'attic_is_open'; // prevent vertical scroll during open
        if ( xDiff > 0 ) {
          if (menu.swipeMenuState) menu.close();
        } else {
          if (!menu.swipeMenuState) menu.open();
        }
      } else {
        if ( yDiff > 0 ) {
          /* up swipe, do nothing */
        } else {
          /* down swipe, do nothing */
        }
      }

      /* reset values */
      menu.xDown = null;
      menu.yDown = null;
    }
  }

  // screen swiping
  document.addEventListener('touchstart', menu.handleTouchStart, false);
  menu.button.addEventListener('click', menu.toggle, false);
  document.addEventListener('touchmove', menu.handleTouchMove, false);
});
