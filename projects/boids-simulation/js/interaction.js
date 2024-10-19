import { PredateurBoids } from "./game/PredateurBoids.js";
import { SimpleBoids } from "./game/SimpleBoids.js";
import { Data, setup } from "./game/TestEspaceBoids2D.js";

export function reset(){
  Data.nbBoids = document.getElementById("slider-nb-boids").value;    
  Data.nbPredateurs = document.getElementById("slider-nb-pred").value;
  
  setup();
  
  SimpleBoids.taille = document.getElementById("slider-taille-simple").value;
  SimpleBoids.vitesseLimite = document.getElementById("slider-vitesse-limite-simple").value;
  SimpleBoids.forceMax = document.getElementById("slider-force-max-simple").value;
  SimpleBoids.distanceVision = document.getElementById("slider-distance-vision-simple").value;
  SimpleBoids.angleVision = document.getElementById("slider-angle-vision-simple").value;
  SimpleBoids.distanceCritique = document.getElementById("slider-distance-critique-simple").value;
  
  PredateurBoids.taille = document.getElementById("slider-taille-predateur").value;
  PredateurBoids.vitesseLimite = document.getElementById("slider-vitesse-limite-predateur").value;
  PredateurBoids.forceMax = document.getElementById("slider-force-max-predateur").value;
  PredateurBoids.distanceVision = document.getElementById("slider-distance-vision-predateur").value;
  PredateurBoids.angleVision = document.getElementById("slider-angle-vision-predateur").value;
  PredateurBoids.distanceCritique = document.getElementById("slider-distance-critique-predateur").value;
}


export function listener() {
  const slidersConfig = [
    { sliderId: "slider-nb-boids", valueId: "value-nb-boids", dataKey: "nbBoids", target: Data },
    { sliderId: "slider-nb-pred", valueId: "value-nb-pred", dataKey: "nbPredateurs", target: Data },

    { sliderId: "slider-taille-simple", valueId: "value-taille-simple", dataKey: "taille", target: SimpleBoids },
    { sliderId: "slider-vitesse-limite-simple", valueId: "value-vitesse-limite-simple", dataKey: "vitesseLimite", target: SimpleBoids },
    { sliderId: "slider-force-max-simple", valueId: "value-force-max-simple", dataKey: "forceMax", target: SimpleBoids },
    { sliderId: "slider-distance-vision-simple", valueId: "value-distance-vision-simple", dataKey: "distanceVision", target: SimpleBoids },
    { sliderId: "slider-angle-vision-simple", valueId: "value-angle-vision-simple", dataKey: "angleVision", target: SimpleBoids },
    { sliderId: "slider-distance-critique-simple", valueId: "value-distance-critique-simple", dataKey: "distanceCritique", target: SimpleBoids },

    { sliderId: "slider-taille-predateur", valueId: "value-taille-predateur", dataKey: "taille", target: PredateurBoids },
    { sliderId: "slider-vitesse-limite-predateur", valueId: "value-vitesse-limite-predateur", dataKey: "vitesseLimite", target: PredateurBoids },
    { sliderId: "slider-force-max-predateur", valueId: "value-force-max-predateur", dataKey: "forceMax", target: PredateurBoids },
    { sliderId: "slider-distance-vision-predateur", valueId: "value-distance-vision-predateur", dataKey: "distanceVision", target: PredateurBoids },
    { sliderId: "slider-angle-vision-predateur", valueId: "value-angle-vision-predateur", dataKey: "angleVision", target: PredateurBoids },
    { sliderId: "slider-distance-critique-predateur", valueId: "value-distance-critique-predateur", dataKey: "distanceCritique", target: PredateurBoids }
  ];

  slidersConfig.forEach(({ sliderId, valueId, dataKey, target }) => {
    const slider = document.getElementById(sliderId);
    const valueDisplay = document.getElementById(valueId);

    slider.addEventListener("input", function () {
      target[dataKey] = slider.value;
      valueDisplay.textContent = slider.value;

      // Si la target est Data, la simulation doit être relancé
      if (target === Data) {
        reset()
      }
    });
  });

  const checkbox_est_tore = document.getElementById("checkbox-est-tore");
  checkbox_est_tore.addEventListener("click", function (){
    Data.espaceTore = checkbox_est_tore.checked;
  })
}
