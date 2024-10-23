import { draw, setup } from "./game/TestEspaceBoids2D.js";
import { listener, reset } from "./interaction.js";
import { init_preset_1 } from "./presets.js";

window.setup = setup;
window.draw = draw;

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

  const allPreset1 = document.querySelectorAll(".preset-1");
  allPreset1.forEach((preset1) => {
    preset1.addEventListener("click", function () {
      init_preset_1();
      setup();
    });
  });
}

window.addEventListener("load", listener, false);
window.addEventListener("resize", reset, false);

window.addEventListener("load", miseEnPlace, false);
