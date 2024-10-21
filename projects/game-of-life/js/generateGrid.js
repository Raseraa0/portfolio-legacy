import { instanceJeuDeLaVie } from "./game/TestJeuDeLaVie.js";

export class Data {
  static t = 30;
}

export function generateGrid() {
  const game = document.getElementById("game");
  const height = game.offsetHeight;
  const width = game.offsetWidth;
  const t = Data.t;

  const h = Math.round(height / t);
  const w = Math.round(width / t);

  while (game.firstChild) {
    game.removeChild(game.firstChild);
  }

  for (let li = 0; li < h; li++) {
    const newLine = document.createElement("div");
    newLine.classList.add("ligne");
    newLine.id = `ligne-${li}`;

    for (let co = 0; co < w; co++) {
      const newCase = document.createElement("div");
      newCase.classList.add("case");
      newCase.classList.add(`ligne-${li}`);
      newCase.classList.add(`colonne-${co}`);
      newCase.style.height = `${t}px`;
      newCase.style.width = `${t}px`;

      newCase.id = `case-ligne-${li}-colonne-${co}`;

      newCase.addEventListener("click", function () {
        if (instanceJeuDeLaVie.grille[li][co] === 0) {
          instanceJeuDeLaVie.grille[li][co] = 1;
          newCase.classList.add("black");
          newCase.classList.remove("white");
        } else {
          instanceJeuDeLaVie.grille[li][co] = 0;
          newCase.classList.add("white");
          newCase.classList.remove("black");
        }
      });

      newLine.appendChild(newCase);
    }
    game.appendChild(newLine);
  }

  return {
    hauteur: h,
    largeur: w,
    tailleCellule: t,
  };
}
