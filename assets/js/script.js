// const links = document.querySelectorAll(".header__links li");

// links.forEach((link) => {
//   link.addEventListener("click", () => {
//     link.classList.toggle("active");
//     // link.classList.remove("active")
//   });
// });
var links = document.querySelectorAll(".header__links li");
for (var i = 0, length = links.length; i < length; i++) {
  links[i].onclick = function () {
    var activeLink = document.querySelector(".header__links li.active");
    if (activeLink) activeLink.classList.remove("active");
    this.classList.add("active");
  };
}
const menuCloseBtn = document.querySelector("#menuCloseBtn");
const menuOpenBtn = document.querySelector("#menuOpenBtn");
const menu = document.querySelector("#menu");

menuCloseBtn.addEventListener("click", () => {
  menu.classList.toggle("show");
});
menuOpenBtn.addEventListener("click", () => {
  menu.classList.toggle("show");
});

