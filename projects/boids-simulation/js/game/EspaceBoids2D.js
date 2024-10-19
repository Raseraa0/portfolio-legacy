import { EventManager } from "./EventManager.js";
import { NextSimpleBoids } from "./NextSimpleBoids.js";
import { PredateurBoids } from "./PredateurBoids.js";
import { SimpleBoids } from "./SimpleBoids.js";
import { Data } from "./TestEspaceBoids2D.js";

export class EspaceBoids2D {
  constructor(largeur, hauteur, espaceTore, nbBoids, nbPredateurs) {
    this.largeur = largeur;
    this.hauteur = hauteur;
    this.nbBoids = nbBoids;
    this.nbPredateurs = nbPredateurs
    Data.espaceTore = espaceTore;

    // Initialisation du tableau des boids
    this.listeBoids = new Array(nbBoids);

    // Initialisation de la simulation
    this.restart();
  }

  // Dessine tout les boids sur la fenetre graphique
  draw() {
   clear();
   background(0, 0, 0, 0);
    // On dessine les boids un par un
    for (let i = 0; i < this.nbBoids; i++) {
      this.listeBoids[i].draw();
    }
  }

  // Passage à létat suivant de la simulation
  async next() {
    if (this.manager.isFinished()) {
    }
    // On effectue les evenements à executer
    this.manager.next();

    // On dessine les boids
    this.draw();
  }

  // Reinitialisation de la simulation
  restart() {
    // Pour chaque boids, on l'initialise avec des valeurs aléatoire
    // et on initialise l'environnement
    for (let i = 0; i < this.nbBoids; i++) {
      // =================== MODIFIABLE ===================
      // valeurs 200 afin d'augmenter le nombre de prédateur
      if (i < this.nbPredateurs) {
        this.listeBoids[i] = PredateurBoids.random(this.largeur, this.hauteur);
        this.listeBoids[i].setEnv(Data.espaceTore, this.largeur, this.hauteur);
      } else {
        // 1 boids sur 200 est un prédateur
        this.listeBoids[i] = SimpleBoids.random(this.largeur, this.hauteur);
        this.listeBoids[i].setEnv(Data.espaceTore, this.largeur, this.hauteur);
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
        Data.espaceTore
      )
    );
    // On dessine les boids
    this.draw();
  }
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
