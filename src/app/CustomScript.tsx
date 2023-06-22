import $ from "jquery";
import settings from "./settings";
export function jqueryMenu() {
  const url = window.location + "";
  const path = url.replace(settings.url, "");
  const element = $("ul#sidebarnav a").filter(function () {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const currentHref: any = this.getAttribute("href");
    return currentHref === url || currentHref === path; // || url.href.indexOf(this.href) === 0;
  });

  element.parentsUntil(".sidebar-nav").each(function () {
    if ($(this).is("li") && $(this).children("a").length !== 0) {
      $(this).children("a").addClass("active");
      $(this).parent("ul#sidebarnav").length === 0
        ? $(this).addClass("active")
        : $(this).addClass("selected");
    } else if (!$(this).is("ul") && $(this).children("a").length === 0) {
      $(this).addClass("selected");
    } else if ($(this).is("ul")) {
      $(this).addClass("in");
    }
  });

  element.addClass("active");
  $("#sidebarnav a").on("click", function () {
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
