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
