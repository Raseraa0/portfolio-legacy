import { Boids } from "./Boids.js";
import { Vector } from "./Vector.js";

export class PredateurBoids extends Boids {
  static taille;
  static vitesseLimite;
  static forceMax;
  static distanceVision;
  static angleVision;
  static distanceCritique;

  constructor(pos, vit) {
    super(pos, vit);

    this.couleur = [225, 60, 255, 200];
    this.strock = [10, 19, 17, 200];
    PredateurBoids.taille = 17;
    PredateurBoids.vitesseLimite = 7;
    PredateurBoids.forceMax = 0.25;
    PredateurBoids.distanceVision = 100;
    PredateurBoids.angleVision = 160;
    PredateurBoids.distanceCritique = 0;
    this.limiteBord = 20;

  }

  getTaille() {
    return PredateurBoids.taille;
  }

  getVitesseLimite() {
    return PredateurBoids.vitesseLimite;
  }

  getForceMax() {
    return PredateurBoids.forceMax;
  }

  getDistanceVision() {
    return PredateurBoids.distanceVision;
  }

  getAngleVision() {
    return PredateurBoids.angleVision;
  }

  getDistanceCritique() {
    return PredateurBoids.distanceCritique;
  }


  static random(largeur, hauteur) {
    return new PredateurBoids(
      Vector.random(0, largeur, 0, hauteur),
      Vector.random(
        -PredateurBoids.vitesseLimite,
        PredateurBoids.vitesseLimite,
        -PredateurBoids.vitesseLimite,
        PredateurBoids.vitesseLimite
      )
    );
  }

  static zero() {
    return new PredateurBoids(Vector.zero(), Vector.zero());
  }
}
