// const links = document.querySelectorAll(".header__links li");

// links.forEach((link) => {
//   link.addEventListener("click", () => {
//     link.classList.toggle("navigation__link--current");
//     // link.classList.remove("active")
//   });
// });
var links = document.querySelectorAll(".navigation__links li");
for (var i = 0, length = links.length; i < length; i++) {
  links[i].onclick = function () {
    var activeLink = document.querySelector(".navigation__links li.active");
    if (activeLink) activeLink.classList.remove("active");
    this.classList.add("active");
  };
}

const burger = document.querySelector(".menu__icon");
const menuContent = document.querySelector(".menu__content");

burger.addEventListener("click", () => {
  document.body.classList.toggle("_lock");
  burger.classList.toggle("_active");
  menuContent.classList.toggle("_active");
});

// When the user scrolls the page, execute myFunction
window.onscroll = function () {
  myFunction();
};

// Get the header
var header = document.querySelector("header");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.scrollY > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
/* Swiper
 **************************************************************/
var swiper = swiper;
var init = false;

/* Which media query
 **************************************************************/
function swiperMode() {
  let mobile = window.matchMedia("(min-width: 0px) and (max-width: 766px)");
  let tablet = window.matchMedia("(min-width: 768.01px) and (max-width: 1024px)");
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

        pagination: {
          el: ".swiper-pagination",
        },
      });
    }
  }

  // Disable (for tablet)
  else if (tablet.matches) {
    swiper.destroy();
    init = false;
  }

  // Disable (for desktop)
  else if (desktop.matches) {
    swiper.destroy();
    init = false;
  }
}

/* On Load
 **************************************************************/
window.addEventListener("load", function () {
  swiperMode();
});

/* On Resize
 **************************************************************/
window.addEventListener("resize", function () {
  swiperMode();
});

//
// const player = videojs('vid1', {});
