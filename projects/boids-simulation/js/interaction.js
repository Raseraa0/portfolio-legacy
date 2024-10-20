import { checkboxConfig, slidersConfig } from "./Config.js";
import { Data, setup } from "./game/TestEspaceBoids2D.js";


/*ce fichier pourrait etre bcp plus optimisé, regardé le lien avec preset.js*/

export function reset() {
  Data.nbBoids = document.getElementById("slider-nb-boids").value;
  Data.nbPredateurs = document.getElementById("slider-nb-pred").value;

  slidersConfig.forEach(({ sliderId, valueId, dataKey, target }) => {
    if (target === Data) {
      const slider = document.getElementById(sliderId);
      const valueDisplay = document.getElementById(valueId);

      valueDisplay.textContent = slider.value;
      target[dataKey] = slider.value;
    }
  });

  checkboxConfig.forEach(({ checkboxId, dataKey, target }) => {
    const checkbox = document.getElementById(checkboxId);

    target[dataKey] = checkbox.checked;
  });

  setup();

  slidersConfig.forEach(({ sliderId, valueId, dataKey, target, preset1 }) => {
    if (target !== Data) {
      const slider = document.getElementById(sliderId);
      const valueDisplay = document.getElementById(valueId);

      valueDisplay.textContent = slider.value;
      target[dataKey] = slider.value;
    }
  });
}

export function listener() {
  slidersConfig.forEach(({ sliderId, valueId, dataKey, target }) => {
    const slider = document.getElementById(sliderId);
    const valueDisplay = document.getElementById(valueId);

    slider.addEventListener("input", function () {
      target[dataKey] = slider.value;
      valueDisplay.textContent = slider.value;

      if (target === Data) {
        reset();
      }
    });
  });

  checkboxConfig.forEach(({ checkboxId, dataKey, target }) => {
    const checkbox = document.getElementById(checkboxId);
    checkbox.addEventListener("click", function () {
      target[dataKey] = checkbox.checked;
    });
  });
}
