jQuery(document).ready(function($) {
  $(".level-bar-inner").css("width", "0");

  $(window).on("load", function() {
    $(".level-bar-inner").each(function() {
      var itemWidth = $(this).data("level");

      $(this).animate(
        {
          width: itemWidth
        },
        800
      );
    });
  });

  $(".youtube-modal").on("hide.bs.modal", function(e) {
    var $this = $(this);
    var $frame = $this.find("iframe");
    $frame.attr("src", $frame.attr("src"));
  });
});
