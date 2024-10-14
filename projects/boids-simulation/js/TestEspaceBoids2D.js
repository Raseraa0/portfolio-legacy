import { EspaceBoids2D } from "./EspaceBoids2D.js";

let espaceBoids2D

// Setup function for p5.js
export function setup() {
  console.log("Debut de global");

  // ======== MODIFIABLE ======== //

  /* Parametre de la fenetre graphique */
  const largeur = document.getElementById("game").offsetWidth;
  const hauteur = document.getElementById("game").offsetHeight;
  const nbBoids = 420;
  const espaceTore = true;

  let canvas = createCanvas(largeur, hauteur);
  canvas.parent("game");
  frameRate(200)
  background('#FFFFFF');

  espaceBoids2D = new EspaceBoids2D(largeur, hauteur, espaceTore, nbBoids);
}

// Draw function for p5.js
export function draw() {
  espaceBoids2D.next();
}

