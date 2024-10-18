import { Boids } from './Boids.js';
import { Vector } from './Vector.js';


export class PredateurBoids extends Boids {
    static vitLim;
  
    constructor(pos, vit) {
      super(pos, vit);
  
      this.couleur = [0,255,255,200];
      this.strock = [255,255,255,128];
      this.taille = 17;
      this.vitesseLimite = 7;
      this.forceMax = 0.25;
      this.distanceVision = 100;
      this.angleVision = 160;
      this.distanceCritique = 0;
      this.limiteBord = 20;
  
      PredateurBoids.vitLim = this.vitesseLimite;
    }
  
    static random(largeur, hauteur) {
      return new PredateurBoids(
        Vector.random(0, largeur, 0, hauteur),
        Vector.random(-PredateurBoids.vitLim, PredateurBoids.vitLim, -PredateurBoids.vitLim, PredateurBoids.vitLim)
      );
    }
  
    static zero() {
      return new PredateurBoids(Vector.zero(), Vector.zero());
    }
  }