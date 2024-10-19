import { EspaceBoids2D } from "./EspaceBoids2D.js";

let espaceBoids2D;

export class Data{
  static nbBoids = 420;
  static nbPredateurs = 3;
  static espaceTore = true;
}

// Setup function for p5.js
export function setup() {
  
  // ======== MODIFIABLE ======== //
  
  /* Parametre de la fenetre graphique */
  const largeur = document.getElementById("game").offsetWidth;
  const hauteur = document.getElementById("game").offsetHeight;


  let canvas = createCanvas(largeur, hauteur);
  canvas.parent("game");
  frameRate(200);
  background(0, 0, 0, 0);

  espaceBoids2D = new EspaceBoids2D(largeur, hauteur, Data.espaceTore, Data.nbBoids, Data.nbPredateurs);
}

// Draw function for p5.js
export function draw() {
  espaceBoids2D.next();
}

