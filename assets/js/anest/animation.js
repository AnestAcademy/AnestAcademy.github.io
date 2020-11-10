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