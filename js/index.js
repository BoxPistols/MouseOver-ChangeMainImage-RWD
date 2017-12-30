$(function() {
  var mainimg = $(".mainImage img");
  var list = $(".imageList img");

  // Set Break Point
  var w = $(window).width();
  var x = 768;
  if (w <= x) {
    // Mobile
    $(list).off("mouseenter mouseleave");
    $(list).on("click", function() {
      $(mainimg).attr("src", $(this).attr("src"));
    });
  } else {
    // PC
    $(list).hover(function() {
      $(mainimg).attr("src", $(this).attr("src"));
    });
  };

  // Scroll to Gallery-Top Only Once
  $(list).one('mouseover', function() {
    $("html,body").animate({
      scrollTop: $('.mainImage').offset().top
    }, 10);
    $(list).off('mouseover');
  });

  // For Responsive
  var timer = false;
  $(window).resize(function() {
    if (timer !== false) {
      clearTimeout(timer);
    }
    timer = setTimeout(function() {
      var w = $(window).width();
      var x = 768;
      if (w <= x) {
        // Mobile
        $(list).off("mouseenter mouseleave");
        $(list).on("click", function() {
          $(mainimg).attr("src", $(this).attr("src"));
        });
      } else {
        // PC
        $(list).hover(function() {
          $(mainimg).attr("src", $(this).attr("src"));
        });
      }
    }, 0);
  });

});
