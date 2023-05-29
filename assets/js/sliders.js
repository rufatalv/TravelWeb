var swiper = swiper;
var init = false;

function swiperMode() {
  let mobile = window.matchMedia("(min-width: 0px) and (max-width: 766px)");
  let tablet = window.matchMedia(
    "(min-width: 768.01px) and (max-width: 1024px)"
  );
  let desktop = window.matchMedia("(min-width: 1025px)");

  // Enable (for mobile)
  if (mobile.matches) {
    if (!init) {
      init = true;
      swiper = new Swiper(".mySwiper", {
        loop: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        breakpoints: {
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          // when window width is >= 640px
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        },
        pagination: {
          el: ".swiper-pagination",
        },
      });
    }
  }

  // // Disable (for tablet)
  // else if (tablet.matches) {
  //   swiper.destroy();
  //   init = false;
  // }

  // // Disable (for desktop)
  // else if (desktop.matches) {
  //   swiper.destroy();
  //   init = false;
  // }
}

window.addEventListener("load", function () {
  swiperMode();
});

window.addEventListener("resize", function () {
  swiperMode();
});

var progressBarSwiper = new Swiper(".experiencesSwiper", {
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  speed: 600,
  spaceBetween: 30,

  pagination: {
    el: ".experiencesSwiper__swiper-pagination",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".experiencesSwiper__swiper-button-next",
    prevEl: ".experiencesSwiper__swiper-button-prev",
  },
});
