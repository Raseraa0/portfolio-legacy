import { PredateurBoids } from "./game/PredateurBoids.js";
import { SimpleBoids } from "./game/SimpleBoids.js";
import { Data } from "./game/TestEspaceBoids2D.js";

export const slidersConfig = [
  {
    sliderId: "slider-nb-boids",
    valueId: "value-nb-boids",
    dataKey: "nbBoids",
    target: Data,
    preset1: 420,
  },
  {
    sliderId: "slider-nb-pred",
    valueId: "value-nb-pred",
    dataKey: "nbPredateurs",
    target: Data,
    preset1: 3,
  },

  {
    sliderId: "slider-taille-simple",
    valueId: "value-taille-simple",
    dataKey: "taille",
    target: SimpleBoids,
    preset1: 10,
  },
  {
    sliderId: "slider-vitesse-limite-simple",
    valueId: "value-vitesse-limite-simple",
    dataKey: "vitesseLimite",
    target: SimpleBoids,
    preset1: 5,
  },
  {
    sliderId: "slider-force-max-simple",
    valueId: "value-force-max-simple",
    dataKey: "forceMax",
    target: SimpleBoids,
    preset1: 0.1,
  },
  {
    sliderId: "slider-distance-vision-simple",
    valueId: "value-distance-vision-simple",
    dataKey: "distanceVision",
    target: SimpleBoids,
    preset1: 80,
  },
  {
    sliderId: "slider-angle-vision-simple",
    valueId: "value-angle-vision-simple",
    dataKey: "angleVision",
    target: SimpleBoids,
    preset1: 160,
  },
  {
    sliderId: "slider-distance-critique-simple",
    valueId: "value-distance-critique-simple",
    dataKey: "distanceCritique",
    target: SimpleBoids,
    preset1: 20,
  },

  {
    sliderId: "slider-taille-predateur",
    valueId: "value-taille-predateur",
    dataKey: "taille",
    target: PredateurBoids,
    preset1: 17,
  },
  {
    sliderId: "slider-vitesse-limite-predateur",
    valueId: "value-vitesse-limite-predateur",
    dataKey: "vitesseLimite",
    target: PredateurBoids,
    preset1: 7,
  },
  {
    sliderId: "slider-force-max-predateur",
    valueId: "value-force-max-predateur",
    dataKey: "forceMax",
    target: PredateurBoids,
    preset1: 0.25,
  },
  {
    sliderId: "slider-distance-vision-predateur",
    valueId: "value-distance-vision-predateur",
    dataKey: "distanceVision",
    target: PredateurBoids,
    preset1: 100,
  },
  {
    sliderId: "slider-angle-vision-predateur",
    valueId: "value-angle-vision-predateur",
    dataKey: "angleVision",
    target: PredateurBoids,
    preset1: 160,
  },
  {
    sliderId: "slider-distance-critique-predateur",
    valueId: "value-distance-critique-predateur",
    dataKey: "distanceCritique",
    target: PredateurBoids,
    preset1: 0,
  },
];

export const checkboxConfig = [
  {
    checkboxId: "checkbox-est-tore",
    dataKey: "espaceTore",
    target: Data,
    preset1: true,
  },
];
