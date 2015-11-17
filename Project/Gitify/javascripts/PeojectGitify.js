$(document).ready(function () {
  // $("#latest-version").hide();
  // $(".screenshot").hide();
  $("#screenshot").delay(500).slideToggle(1000);

  $('.scroll-to-top').click(function() {
    $('html, body').animate({scrollTop : 0},800);
    return false;
  });

  $(window).scroll(function(){
    $(".section").each(function() {
      var section = $(this);
      var sectionScreenshot = section.find(".screenshot");

      var direction;
      if (section.hasClass("alt")) {
        direction = "left";
      } else {
        direction = "right";
      }

      if (sectionScreenshot.css('display') == 'none' && isScrolledIntoView(section)) {
        sectionScreenshot.show("slide", {
          duration: 1000,
          direction: direction
        });
      }
    });
  });

  
});



function isScrolledIntoView(elem) {
  var $elem = $(elem);
  var $window = $(window);

  var docViewTop = $window.scrollTop();
  var docViewBottom = docViewTop + $window.height();

  var elemTop = $elem.offset().top;
  var elemBottom = elemTop + $elem.height();

  return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}