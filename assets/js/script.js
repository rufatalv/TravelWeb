const links = document.querySelectorAll(".header__links li");

links.forEach((link) => {
  link.addEventListener("click", () => {
    link.classList.toggle("active");
  });
});

const menuCloseBtn = document.querySelector("#menuCloseBtn");
const menuOpenBtn = document.querySelector("#menuOpenBtn");
const menu = document.querySelector("#menu");

menuCloseBtn.addEventListener("click", () => {
  menu.classList.toggle("show");
});
menuOpenBtn.addEventListener("click", () => {
  menu.classList.toggle("show");
});