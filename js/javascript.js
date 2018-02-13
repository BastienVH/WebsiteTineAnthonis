/* Smooth-scroll */
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
// Fix navbar to top of view
$('#nav').affix({
  offset: {
    top: $('header').height()
  }
});	
// put class active on menu item on click
$(".nav a").on("click", function(){
  $(".nav").find(".active").removeClass("active");
  $(this).parent().addClass("active");
});
// Close responsive menu on click
$('.nav a').on('click', function() {
  // check if window is small enough so dropdown is created
  var toggle = $(".navbar-toggle").is(":visible");
  if (toggle) {
    $(".navbar-collapse").collapse('hide');
  }
});