const nav = document.querySelector(".nav-links");
const burger = document.querySelector(".burger");
const link = nav.querySelectorAll("a");

burger.addEventListener("click", () => {
  nav.classList.toggle("nav-open");
  burger.classList.toggle("toggle");
});
link.forEach((links) => {
  links.addEventListener("click", () => {
    nav.classList.toggle("nav-open");
    burger.classList.toggle("toggle");
  });
});
