jQuery(document).ready(function($) {
  $(".youtube-modal").on("hide.bs.modal", function(e) {
    var $this = $(this);
    var $frame = $this.find("iframe");
    $frame.attr("src", $frame.attr("src"));
  });
});
