// Classe JeuDeLaVie
export class JeuDeLaVie {
  constructor(largeur, hauteur, tailleCellule) {
    this.hauteur = hauteur;
    this.largeur = largeur;
    this.tailleCellule = tailleCellule;

    this.grille = Array.from({ length: hauteur }, () => Array(largeur).fill(0));

    this.newGrille = Array.from({ length: hauteur }, () =>
      Array(largeur).fill(0)
    );

    // Initialisation du tableau
    this.restart();
}

// Renvoie le nombre de voisin VIVANT autour grille[i][j]
  nbVoisin(i, j) {
      let res = 0;
    let ligne;
    let colonne;
    for (let li = i - 1; li < i + 2; li++) {
      ligne = li;
      if (ligne === -1) {
        ligne = this.hauteur - 1;
      } // 2 lignes nécessaires pour que le plan soit circulaire
      else if (ligne === this.hauteur) {
          ligne = 0;
      }

      for (let co = j - 1; co < j + 2; co++) {
          colonne = co;
        if (ligne !== i || colonne !== j) {
            // on enlève la case centrale

          if (colonne === -1) {
            colonne = this.largeur - 1;
          } else if (colonne === this.largeur) {
            colonne = 0;
          }

          // Si la case est VIVANT, on incrémente de 1
          if (this.grille[ligne][colonne] === 1) {
              res += 1;
          }
        }
    }
    }
    return res;
}

  next() {
    console.log("next est appelé");
      // On parcourt toutes les cases du tableau
    for (let i = 0; i < this.hauteur; i++) {
      for (let j = 0; j < this.largeur; j++) {
        let nbVoisinVivant = this.nbVoisin(i, j);
        
        // Si la case est morte
        if (this.grille[i][j] === 0) {
          if (nbVoisinVivant === 3) {
            this.newGrille[i][j] = 1;
        } else {
            this.newGrille[i][j] = 0;
          }
        }
        // Si la case est vivante
        else {
          if (nbVoisinVivant === 3 || nbVoisinVivant === 2) {
            this.newGrille[i][j] = 1;
          } else {
            this.newGrille[i][j] = 0;
          }
        }
      }
    }

    // On actualise les cases de la grille
    for (let i = 0; i < this.hauteur; i++) {
      for (let j = 0; j < this.largeur; j++) {
        this.grille[i][j] = this.newGrille[i][j];
      }
    }

    // On dessine la grille
    this.draw();
  }

  restart_blank() {
    // On actualise toutes les cases de manière aléatoire
    for (let i = 0; i < this.hauteur; i++) {
        for (let j = 0; j < this.largeur; j++) {
          this.grille[i][j] = 0;

    }
    }
    
    this.draw();
}
    restart() {
        // On actualise toutes les cases de manière aléatoire
        for (let i = 0; i < this.hauteur; i++) {
            for (let j = 0; j < this.largeur; j++) {
            if (Math.random() < 0.5) {
              this.grille[i][j] = 0;
            } else {
                this.grille[i][j] = 1;
            }
        }
        }
        
        this.draw();
}

  draw() {
    for (let li = 0; li < this.hauteur; li++) {
      for (let co = 0; co < this.largeur; co++) {
        let cas = document.getElementById(`case-ligne-${li}-colonne-${co}`);
        if (this.grille[li][co] === 0) {
          cas.classList.add("white");
          cas.classList.remove("black");
        } else {
          cas.classList.add("black");
          cas.classList.remove("white");
        }
      }
    }
  }
}
