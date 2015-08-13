// Anchor Tag Smooth Page Scroll
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

// Responsive Slides
$(document).ready(function() {
  $('#email').click(function() {
    $('#myemail').fadeIn('200');
  });
  $('.slide-title-large').css('right', $('.rslides').width()/40);
  $('.slide-title-large').css('bottom', $('.rslides').height()/50);
});

