import { generateGrid } from "../generateGrid.js";
import { JeuDeLaVie } from "./JeuDeLaVie.js";

export var instanceJeuDeLaVie;

export function setupGame() {
  const { largeur, hauteur, tailleCellule } = generateGrid();

  instanceJeuDeLaVie = new JeuDeLaVie(largeur, hauteur, tailleCellule);
}
