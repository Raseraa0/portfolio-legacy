import { Boids } from './Boids.js';
import { Vector } from './Vector.js';

export class SimpleBoids extends Boids {
  static vitLim;

  constructor(pos, vit) {
    super(pos, vit);

    this.couleur = [255,189,0,200];
    this.strock = [0,0,0,128];
    this.taille = 10;
    this.vitesseLimite = 5;
    this.forceMax = 0.10;
    this.distanceVision = 80;
    this.angleVision = 160;
    this.distanceCritique = 20;
    this.limiteBord = 20;

    SimpleBoids.vitLim = this.vitesseLimite;
  }

  static random(largeur, hauteur) {
    return new SimpleBoids(
      Vector.random(0, largeur, 0, hauteur),
      Vector.random(-SimpleBoids.vitLim, SimpleBoids.vitLim, -SimpleBoids.vitLim, SimpleBoids.vitLim)
    );
  }

  static zero() {
    return new SimpleBoids(Vector.zero(), Vector.zero());
  }
}