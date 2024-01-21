"use strict";

const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close = document.getElementById("close");
const cartBtn = document.querySelector("#cart-btn");

//nav bar open /close
if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}
if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}
if (cartBtn) {
  cartBtn.addEventListener("click", () => {
    console.log(5 + 6);
  });
}
console.log("Hello");
