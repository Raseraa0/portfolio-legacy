import { setDetails } from "./details.js";
import { headerSetup, setupBackToTopButton } from "./header.js";

function miseEnPlace() {
  headerSetup();
  setDetails();
  setupBackToTopButton();
}

window.addEventListener("load", miseEnPlace, false);

window.addEventListener("scroll", function () {
  let allScrollDown = document.querySelectorAll(".scroll-down");
  allScrollDown.forEach(scrollDown => {
    if (window.pageYOffset > 0) {
      scrollDown.style.opacity = "0";
    } else {
      scrollDown.style.opacity = "100%";
    }
  })
});
