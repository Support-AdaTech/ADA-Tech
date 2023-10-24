function scrollh() {
  $(".smooth").on("scroll", function () {
    let scrollPos = $(this).scrollTop();
    $(".content").css({
      opacity: 1.5 - scrollPos / 400,
    });
  });
}
scrollh();

$(".autoplay")
  .on("init", function (slick) {
    $(".slick-dots").on("click", function () {
      $(".autoplay").slick("slickPause");
    });
  })
  .slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

$(".tes")
  .on("init", function (slick) {
    $(".slick-dots").on("click", function () {
      $(".tes").slick("slickPause");
    });
  })
  .slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
