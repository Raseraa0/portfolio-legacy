import { Boids } from "./Boids.js";
import { Vector } from "./Vector.js";

export class SimpleBoids extends Boids {
  static vitLim;
  static taille;
  static vitesseLimite;
  static forceMax;
  static distanceVision;
  static angleVision;
  static distanceCritique;

  constructor(pos, vit) {
    super(pos, vit);

    this.couleur = [102, 191, 170, 200];
    this.strock = [10, 19, 17, 200];
    SimpleBoids.taille = 10;
    SimpleBoids.vitesseLimite = 5;
    SimpleBoids.forceMax = 0.1;
    SimpleBoids.distanceVision = 80;
    SimpleBoids.angleVision = 160;
    SimpleBoids.distanceCritique = 20;
    this.limiteBord = 20;
  }

  getTaille() {
    return SimpleBoids.taille;
  }

  getVitesseLimite() {
    return SimpleBoids.vitesseLimite;
  }

  getForceMax() {
    return SimpleBoids.forceMax;
  }

  getDistanceVision() {
    return SimpleBoids.distanceVision;
  }

  getAngleVision() {
    return SimpleBoids.angleVision;
  }

  getDistanceCritique() {
    return SimpleBoids.distanceCritique;
  }

  static random(largeur, hauteur) {
    return new SimpleBoids(
      Vector.random(0, largeur, 0, hauteur),
      Vector.random(
        -SimpleBoids.vitesseLimite,
        SimpleBoids.vitesseLimite,
        -SimpleBoids.vitesseLimite,
        SimpleBoids.vitesseLimite
      )
    );
  }

  static zero() {
    return new SimpleBoids(Vector.zero(), Vector.zero());
  }
}
