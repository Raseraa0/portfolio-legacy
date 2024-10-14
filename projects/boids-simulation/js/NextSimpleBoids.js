import { Event } from "./Event.js";
import { PredateurBoids } from './PredateurBoids.js';
import { SimpleBoids } from './SimpleBoids.js';
import { Vector } from './Vector.js';


export class NextSimpleBoids extends Event {
    constructor(date, manager, listeBoids, nbBoids, largeur, hauteur, espaceTore) {
      super(date);
      this.listeBoids = listeBoids;
      this.nbBoids = nbBoids;
      this.largeur = largeur;
      this.hauteur = hauteur;
      this.espaceTore = espaceTore;
      this.manager = manager;
      this.pasTemps = 1;
    }
  
    execute() {
      for (let i = 0; i < this.nbBoids; i++) {
        this.listeBoids[i].acc = this.rule(this.listeBoids[i]);
      }
  
      for (let i = 0; i < this.nbBoids; i++) {
        this.listeBoids[i].update();
      }
  
      this.manager.addEvent(new NextSimpleBoids(this.date + this.pasTemps, this.manager, this.listeBoids, this.nbBoids, this.largeur, this.hauteur, this.espaceTore));
    }
  
    rule(boids) {
      let centreMasse = Vector.zero();
      let colision = Vector.zero();
      let alignement = Vector.zero();
      let pasBord = Vector.zero();
      let fuiPred = Vector.zero();
  
      let presZoneVision = false;
      let presZoneCritique = false;
      let presLimite = false;
      let presPred = false;
  
      let nbBoidsVu = 0;
  
      for (let i = 0; i < this.nbBoids; i++) {
        let other = this.listeBoids[i];
  
        if (other !== boids) {
          if (boids.estChampsVision(other) && other instanceof PredateurBoids) {
            presPred = true;
            fuiPred.add(other.pos);
          }
  
          if (boids.estChampsVision(other) && other instanceof SimpleBoids) {
            presZoneVision = true;
  
            centreMasse.add(other.pos);
            alignement.add(other.vit);
            nbBoidsVu += 1;
          }
  
          if (boids.estChampsCritique(other) && other instanceof SimpleBoids) {
            presZoneCritique = true;
  
            colision.sub(other.pos);
            colision.add(boids.pos);
          }
        }
      }
  
      if (boids.pos.x < boids.limiteBord) {
        presLimite = true;
        pasBord.add(new Vector(boids.limiteBord - boids.pos.x, 0));
      } else if (boids.pos.x > this.largeur - boids.limiteBord) {
        presLimite = true;
        pasBord.add(new Vector(-(boids.pos.x - this.largeur + boids.limiteBord), 0));
      }
      if (boids.pos.y < boids.limiteBord) {
        presLimite = true;
        pasBord.add(new Vector(0, boids.limiteBord - boids.pos.y));
      } else if (boids.pos.y > this.hauteur - boids.limiteBord) {
        presLimite = true;
        pasBord.add(new Vector(0, -(boids.pos.y - this.hauteur + boids.limiteBord)));
      }
  
      if (presZoneVision) {
        centreMasse.div(nbBoidsVu);
        alignement.div(nbBoidsVu);
        alignement.add(boids.pos);
      }
      colision.add(boids.pos);
      pasBord.add(boids.pos);
  
      let force1 = boids.cibleToForce(centreMasse);
      let force2 = boids.cibleToForce(alignement);
      let force3 = boids.cibleToForce(colision);
      force3.mult(2);
      let force4 = boids.cibleToForce(pasBord);
      force4.mult(5);
      let force5 = boids.cibleToForce(fuiPred);
      force5.mult(-20);
  
      let force = Vector.zero();
  
      if (presZoneVision) {
        force.add(force1);
        force.add(force2);
      }
      if (presZoneCritique) {
        force.add(force3);
      }
      if (presLimite && !this.espaceTore) {
        force.add(force4);
      }
      if (presPred) {
        force.add(force5);
      }
  
      return force;
    }
  }
  