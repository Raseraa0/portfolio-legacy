import { EventManager } from "./EventManager.js";
import { NextSimpleBoids } from "./NextSimpleBoids.js";
import { PredateurBoids } from "./PredateurBoids.js";
import { SimpleBoids } from "./SimpleBoids.js";

export class EspaceBoids2D {
  constructor(largeur, hauteur, espaceTore, nbBoids) {
    console.log("Construction de EspaceBoids2D");
    this.largeur = largeur;
    this.hauteur = hauteur;
    this.nbBoids = nbBoids;
    this.espaceTore = espaceTore;

    // Initialisation du tableau des boids
    this.listeBoids = new Array(nbBoids);

    // Initialisation de la simulation
    this.restart();
  }

  // Dessine tout les boids sur la fenetre graphique
  draw() {
    console.log("On commence à dessiner les boids");
   clear();
   background('aqua');
    // On dessine les boids un par un
    for (let i = 0; i < this.nbBoids; i++) {
      this.listeBoids[i].draw();
    }
  }

  // Passage à létat suivant de la simulation
  async next() {
    if (this.manager.isFinished()) {
      console.log("Plus rien a afficher...");
    }
    // On effectue les evenements à executer
    this.manager.next();

    // On dessine les boids
    this.draw();
  }

  // Reinitialisation de la simulation
  restart() {
    console.log("Début du restart de EspaceBoids2D");
    // Pour chaque boids, on l'initialise avec des valeurs aléatoire
    // et on initialise l'environnement
    for (let i = 0; i < this.nbBoids; i++) {
      // =================== MODIFIABLE ===================
      // valeurs 200 afin d'augmenter le nombre de prédateur
      if (i % 200 != 0) {
        this.listeBoids[i] = SimpleBoids.random(this.largeur, this.hauteur);
        this.listeBoids[i].setEnv(this.espaceTore, this.largeur, this.hauteur);
      } else {
        // 1 boids sur 200 est un prédateur
        this.listeBoids[i] = PredateurBoids.random(this.largeur, this.hauteur);
        this.listeBoids[i].setEnv(this.espaceTore, this.largeur, this.hauteur);
      }
    }

    // Ajout du manager et de la première tache
    this.manager = new EventManager();
    this.manager.addEvent(
      new NextSimpleBoids(
        1,
        this.manager,
        this.listeBoids,
        this.nbBoids,
        this.largeur,
        this.hauteur,
        this.espaceTore
      )
    );
    // On dessine les boids
    this.draw();
  }
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
