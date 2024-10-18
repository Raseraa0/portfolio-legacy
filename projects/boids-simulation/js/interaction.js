import { Data } from "./game/TestEspaceBoids2D.js";

export function listener() {
  const slider_nb_boids = document.getElementById("slider-nb-boids");
  const value_nb_boids = document.getElementById("value-nb-boids");

  const slider_nb_pred = document.getElementById("slider-nb-pred");
  const value_nb_pred = document.getElementById("value-nb-pred");
  slider_nb_boids.addEventListener("input", function () {
    Data.nbBoids = slider_nb_boids.value;
    Data.nbPredateurs = slider_nb_pred.value;
    value_nb_boids.textContent = slider_nb_boids.value;

    setup();
  });

  slider_nb_pred.addEventListener("input", function () {
    Data.nbBoids = slider_nb_boids.value;
    Data.nbPredateurs = slider_nb_pred.value;
    value_nb_pred.textContent = slider_nb_pred.value;
    setup();
  });
}
