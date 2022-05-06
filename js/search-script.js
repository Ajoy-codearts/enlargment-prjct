$(function() {
  $('a[href="#search-main"]').on("click", function(event) {
    event.preventDefault();
    $("#search-main").addClass("open");
    $('#search-main > form > input[type="search"]').focus();
  });

  $("#search-main, #search-main button.close").on("click keyup", function(event) {
    if (
      event.target == this ||
      event.target.className == "close" ||
      event.keyCode == 27
    ) {
      $(this).removeClass("open");
    }
  });

  $("form").submit(function(event) {
    event.preventDefault();
    return false;
  });
});