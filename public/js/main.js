$(window).scroll(function () {
  if ($(this).scrollTop() > 150) {
    $('header').addClass('show');
  } else {
    $('header').removeClass('show');
  }
});
var swiper = new Swiper("#main-slider", {
  slidesPerView: 1,
  spaceBetween: 0,
  effect: 'fade',
  autoHeight: true,
  loop: true,
  loopFillGroupWithBlank: false,
  observer: true,
  observeParents: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 8500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
AOS.init({
  easing: 'ease-in-out-sine'
});
$(document).ready(function () {
  var $root = $('html, body');
  var offset = 50;
  $('.item-main-nav').click(function () {
    var targetName = $(this).attr("href")
    var targetOffset = $(targetName).offset().top - offset
    $root.animate({
      scrollTop: targetOffset
    }, 80)
    return false;
  });
});
$(".btn-toggle").click(function () {
  $('body').addClass("no-scroll");
  $('.mobile-menu').addClass("show");
});
$(".btn-for-close").click(function () {
  $('body').removeClass("no-scroll");
  $('.mobile-menu').removeClass("show");
});
$(".link-menu-mobile").click(function () {
  $('body').removeClass("no-scroll");
  $('.mobile-menu').removeClass("show");
});
$(".open-form").click(function () {
  $('.overlay').addClass("overlayshow");
  $('.popup-wrapper').addClass("showing");
  $('body').addClass("no-scroll");
});
$(".btn-close").click(function () {
  $('.overlay').removeClass("overlayshow");
  $('.popup-wrapper').removeClass("showing");
  $('body').removeClass("no-scroll");
});
