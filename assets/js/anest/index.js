/*!
 * anest js
 */

$(document).ready(function() {
  var animatedElements1 = $('.animated-elements1'),
    animatedElements2 = $('.animated-elements2'),
    animatedElements3 = $('.animated-elements3'),
    animatedElements4 = $('.animated-elements4'),
    animatedElements5 = $('.animated-elements5'),
    animatedElements6 = $('.animated-elements6'),

    container_w = $(window).width(),
    container_h = $(window).height();

  $(document).on('mousemove', function(e) {
    var pos_x = event.clientX,
      pos_y = event.clientY;

    var left = 0,
      top = 0,
      right = 0,
      bottom = 0;

    left = container_w / 2 - pos_x;
    top = container_h / 2 - pos_y;
    right = container_w / 2 + pos_x;
    bottom = container_h / 2 + pos_y;

    $(animatedElements1).css({
      transform: "translateX(" + right / 8 + "px) translateY(" + top / 8 + "px)"
    });
    $(animatedElements2).css({
      transform: "translateX(" + left / 24 + "px) translateY(" + top / 24 + "px)"
    });
    $(animatedElements3).css({
      transform: "translateX(" + left / 8 + "px) translateY(" + bottom / 8 + "px)"
    });
    $(animatedElements4).css({
      transform: "translateX(" + left / 24 + "px) translateY(" + bottom / 24 + "px)"
    });
    $(animatedElements5).css({
      transform: "translateX(" + right / 24 + "px) translateY(" + bottom / 24 + "px)"
    });
    $(animatedElements6).css({
      transform: "translateX(" + right / 8 + "px) translateY(" + top / 8 + "px)"
    });
  });
});

function showMore() {
  var element = document.getElementsByClassName("overlay");
  element[0].classList.toggle("is-displayed");
  element[1].classList.toggle("is-displayed");
  element[2].classList.toggle("is-displayed");
  element[3].classList.toggle("is-displayed");
}

(function($) {

  var isBuilder = $('html').hasClass('is-builder');

  $.isMobile = function(type) {
    var reg = [];
    var any = {
      blackberry: 'BlackBerry',
      android: 'Android',
      windows: 'IEMobile',
      opera: 'Opera Mini',
      ios: 'iPhone|iPad|iPod'
    };
    type = 'undefined' == $.type(type) ? '*' : type.toLowerCase();
    if ('*' == type) reg = $.map(any, function(v) {
      return v;
    });
    else if (type in any) reg.push(any[type]);
    return !!(reg.length && navigator.userAgent.match(new RegExp(reg.join('|'), 'i')));
  };

  $(function() {

    $('html').addClass($.isMobile() ? 'mobile' : 'desktop');

    // .mbr-parallax-background
    function initParallax(card, value, param) {
      setTimeout(function() {
        if (value) {
          $(card).outerFind('.mbr-parallax-background.' + param + ' > > *').css('background-image', 'url("' + value + '")');
        } else {
          $(card).outerFind('.mbr-parallax-background')
            .jarallax({
              speed: 0.6
            })
            .css('position', 'relative');
        }
      }, 0);
    }

    function destroyParallax(card) {
      $(card).jarallax('destroy').css('position', '');
    }

    if ($.fn.jarallax && !$.isMobile()) {
      $(window).on('update.parallax', function(event) {
        setTimeout(function() {
          var $jarallax = $('.mbr-parallax-background');

          $jarallax.jarallax('coverImage');
          $jarallax.jarallax('clipContainer');
          $jarallax.jarallax('onScroll');
        }, 0);
      });

      if (isBuilder) {
        $(document).on('add.cards', function(event) {
          initParallax(event.target);
          $(window).trigger('update.parallax');
        });

        $(document).on('changeParameter.cards', function(event, paramName, value, key) {
          if ((paramName === 'bg') || (paramName === 'li1') || (paramName === 'li2') || (paramName === 'li3')) {
            destroyParallax(event.target);

            switch (key) {
              case 'type':
                if (value.parallax === true) {
                  initParallax(event.target);
                }
                break;
              case 'value':
                if (value.type === 'image' && value.parallax === true) {
                  initParallax(event.target);
                }
                break;
              case 'parallax':
                if (value.parallax === true) {
                  initParallax(event.target);
                }
            }
          }
          if (/^li1/.test(paramName)) {
            initParallax(event.target, value, 'img1');
          }
          if (/^li2/.test(paramName)) {
            initParallax(event.target, value, 'img2');
          }
          if (/^li3/.test(paramName)) {
            initParallax(event.target, value, 'img3');
          }

          $(window).trigger('update.parallax');
        });
      } else {
        initParallax(document.body);
      }

      // for Tabs
      $(window).on('shown.bs.tab', function(e) {
        $(window).trigger('update.parallax');
      });
    }
  });

  $.fn.outerFind = function(selector) {
    return this.find(selector).addBack(selector);
  };

}(jQuery));

function x() {
  document.getElementById('contact').style.transform = 'translateY(-145px)';
}

function y() {
  document.getElementById('contact').style.transform = 'translateY(0)';
}