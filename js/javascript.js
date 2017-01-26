
$(window).scroll(function(){
    if ($(window).scrollTop() >= 415) {
       $('nav').addClass('fixed-header');
       document.getElementById("nieuws").style.marginTop = "65px";
    }
    else {
       $('nav').removeClass('fixed-header');
       document.getElementById("nieuws").style.marginTop = "0px";
    }
});

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
