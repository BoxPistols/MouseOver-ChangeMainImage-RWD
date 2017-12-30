$(function() {
  var mainimg = $(".mainImage img");
  var list = $(".imageList img");
  // $(list).on("click", function() {
  //   $(mainimg).attr("src", $(this).attr("src"));
  // });
  $(list).hover(function() {
    $(mainimg).attr("src", $(this).attr("src"));
  });
  var timer = false;
  $(window).resize(function() {
    if (timer !== false) {
      clearTimeout(timer);
    }
    timer = setTimeout(function() {
      var w = $(window).width();
      var x = 768;

      if (w <= x) {
        $(list).off("mouseenter mouseleave");
        $(list).on("click", function() {
          $(mainimg).attr("src", $(this).attr("src"));
        });
      } else {
        $(list).hover(function() {
          $(mainimg).attr("src", $(this).attr("src"));
        });
      }
    }, 0);
  });
});
