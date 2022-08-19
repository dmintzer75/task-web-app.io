"use strict";

const menu = document.querySelector(".menu-mobile");
const close = document.querySelector(".close-menu");
const nav = document.querySelector("nav");

menu.addEventListener("click", () => {
  console.log("asdsd");
  nav.classList.add("open-nav");
});

close.addEventListener("click", () => {
  nav.classList.remove("open-nav");
});
