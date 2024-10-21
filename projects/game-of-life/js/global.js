import { instanceJeuDeLaVie, setupGame } from "./game/TestJeuDeLaVie.js";
import { Data } from "./generateGrid.js";

var intervalId;

function miseEnPlace() {
  const switchLight = document.querySelector(".switch-light");

  switchLight.addEventListener("click", function () {
    const body = document.querySelector("body");
    if (switchLight.classList.contains("active")) {
      switchLight.classList.remove("active");
      switchLight.classList.add("inactive");
      body.classList.add("disabled");
    } else {
      switchLight.classList.remove("inactive");
      switchLight.classList.add("active");
      body.classList.remove("disabled");
    }
  });

  const resetButton = document.querySelector(".reset");
  resetButton.addEventListener("click", resetAll);

  const blankButton = document.querySelector(".blank");
  blankButton.addEventListener("click", function () {
    resetAll();
    instanceJeuDeLaVie.restart_blank();
  });

  const playButton = document.querySelector(".play");
  playButton.addEventListener("click", function () {
    if (!playButton.classList.contains("running")) {
      playButton.classList.add("running");
      intervalId = setInterval(function () {
        instanceJeuDeLaVie.next();
      }, 100);
    }
  });

  const slider = document.querySelector(".slider-case-size");
  const valueDisplay = document.querySelector(".size-value");

  slider.addEventListener("input", function () {
    Data.t = slider.value;
    valueDisplay.textContent = slider.value;
    resetAll();
  });
}

window.addEventListener("load", miseEnPlace, false);

window.addEventListener("load", resetAll, false);
window.addEventListener("resize", resetAll, false);

function resetAll() {
  const playButton = document.querySelector(".play");
  playButton.classList.remove("running");
  clearInterval(intervalId);
  setupGame();
}
