// $(window).scroll(function() {
//   var scrollTop = $(this).scrollTop();
//   $('.homemadeParalax').css('top', -(scrollTop * 1) + 'px');
//   console.log(scrollTop);
// });
$(document).ready(function() {
  $(".button-collapse").sideNav();
  (function($) {
    $(function() {
      $('.parallax').parallax();
    });
  })(jQuery);
});
