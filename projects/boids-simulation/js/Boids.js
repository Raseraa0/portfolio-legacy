import { Vector } from "./Vector.js";


export class Boids {

    constructor(pos, vit) {
        this.pos = pos;
        this.vit = vit;
        this.acc = new Vector(0, 0);
    }

    setEnv(espaceTore, largeur, hauteur) {
        this.espaceTore = espaceTore;
        this.largeur = largeur;
        this.hauteur = hauteur;
    }

    posLim() {
        if (this.espaceTore) {
            if (this.pos.x < 0) {
                this.pos.x = this.largeur - this.pos.x;
            } else if (this.pos.x > this.largeur) {
                this.pos.x = this.largeur - this.pos.x;
            }
            if (this.pos.y < 0) {
                this.pos.y = this.hauteur - this.pos.y;
            } else if (this.pos.y > this.hauteur) {
                this.pos.y = this.pos.y - this.hauteur;
            }
        } else {
            if (this.pos.x < 0) {
                this.pos.x = 0;
            } else if (this.pos.x > this.largeur) {
                this.pos.x = this.largeur;
            }
            if (this.pos.y < 0) {
                this.pos.y = 0;
            } else if (this.pos.y > this.hauteur) {
                this.pos.y = this.hauteur;
            }
        }
    }

    estChampsVision(boids) {
        return this.pos.distance(boids.pos, this.hauteur, this.largeur, this.espaceTore) < this.distanceVision &&
               this.vit.angle(Vector.sub(boids.pos, this.pos)) < this.angleVision;
    }

    estChampsCritique(boids) {
        return this.pos.distance(boids.pos, this.hauteur, this.largeur, this.espaceTore) < this.distanceCritique;
    }

    cibleToForce(cible) {
        let vitesseVoulue = Vector.sub(cible, this.pos);
        vitesseVoulue.normalise();
        vitesseVoulue.mult(this.vitesseLimite);

        let force = Vector.sub(vitesseVoulue, this.vit);
        force.limite(this.forceMax);

        return force;
    }

    update() {
        this.vit.add(this.acc);
        this.vit.limite(this.vitesseLimite);

        this.pos.add(this.vit);
        this.posLim();
    }

    draw() {
        stroke(this.couleur);
        fill(this.couleur);

        if (this.taille > 3) {
            let v1 = this.vit.copy();
            v1.normalise();
            v1.mult(this.taille);

            let v2 = v1.copy();
            v2.rotate(140);

            let v23 = v1.copy();
            v23.div(-4);

            let v3 = v1.copy();
            v3.rotate(-140);

            v1.add(this.pos);
            v2.add(this.pos);
            v23.add(this.pos);
            v3.add(this.pos);

            beginShape();
            vertex(v1.x, v1.y);
            vertex(v2.x, v2.y);
            vertex(v23.x, v23.y);
            vertex(v3.x, v3.y);
            endShape(CLOSE);
        } else {
            ellipse(this.pos.x, this.pos.y, this.taille, this.taille);
        }
    }
}
