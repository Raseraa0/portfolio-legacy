import { checkboxConfig, slidersConfig } from "./Config.js";

export function init_preset_1() {
  slidersConfig.forEach(({ sliderId, valueId, dataKey, target, preset1 }) => {
    const slider = document.getElementById(sliderId);
    const valueDisplay = document.getElementById(valueId);

    slider.value = preset1;
    valueDisplay.textContent = preset1;
    target[dataKey] = preset1;

  });

  checkboxConfig.forEach(({ checkboxId, dataKey, target, preset1 }) => {
    const checkbox = document.getElementById(checkboxId);

    checkbox.checked = preset1;
    target[dataKey] = preset1;

  });

}
