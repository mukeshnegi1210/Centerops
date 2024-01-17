$(function () {
  // scroll top ends ===============================

  $(".menu-open").click(function () {
    $(".primary-menu-outer").addClass("active");
  });
  $(".menu-close").click(function () {
    $(".primary-menu-outer").removeClass("active");
  });
  // block scroll ===============================
  $(".primary-menu li a ").click(function () {
    $(".primary-menu-outer").removeClass("active");
    var get_scroll_id = $(this).attr("data-scroll");
    $(".primary-menu li a").removeClass("active");
    $(this).addClass("active");
    $("html, body").animate(
      {
        scrollTop: $(get_scroll_id).offset().top - 70,
      },
      600
    );
  });
});

$(window).on("load", function () {
  $("#aa-preloader-area").delay(300).fadeOut("d-none");
});
