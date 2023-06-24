import $ from "jquery";
export function jqueryMenu() {
  $("#sidebarnav a").on("click", function () {
    $(".nav-toggler i").addClass("ri-menu-2-line");
    if (!$(this).hasClass("active")) {
      // hide any open menus and remove all other classes
      $("ul", $(this).parents("ul:first")).removeClass("in");
      $("a", $(this).parents("ul:first")).removeClass("active");

      // open our new menu and add the open class
      $(this).next("ul").addClass("in");
      $(this).addClass("active");
    } else if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this).parents("ul:first").removeClass("active");
      $(this).next("ul").removeClass("in");
    }
  });

  //myjavascript

  $("li.sidebar-item").click(function () {
    $("li.sidebar-item").removeClass("selected");
    $(this).addClass("selected");
  });

  $("span.has-arrow").click(function () {
    if (!$(this).hasClass("active")) {
      $(this).addClass("active");
      $(this).next("ul").addClass("in");
    } else {
      $(this).removeClass("active");
      $(this).next("ul").removeClass("in");
    }
  });

  $("li.sidebar-item a").click(function () {
    $("li.sidebar-item a").removeClass("active");
    $(this).addClass("active");
  });

  $("a.navbar-brand").click(function () {
    $("li.sidebar-item").removeClass("selected");
  });

  if (Number($(window).width()) < 768) {
    $(".sidebar-item-link").click(function () {
      $(`#main-wrapper`).removeClass("show-sidebar");
    });
  }

  // Auto scroll to the active nav
  if (Number($(window).width()) > 768 || window.Touch) {
    $(".scroll-sidebar").animate(
      {
        scrollTop:
          Number($("#sidebarnav .sidebar-item.selected").offset()?.top) - 80,
      },
      500
    );
  }
}
