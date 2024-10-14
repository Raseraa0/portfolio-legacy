export class Vector {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
  
    add(v) {
      this.x += v.x;
      this.y += v.y;
    }
  
    sub(v) {
      this.x -= v.x;
      this.y -= v.y;
    }
  
    mult(c) {
      this.x *= c;
      this.y *= c;
    }
  
    div(c) {
      this.x /= c;
      this.y /= c;
    }
  
    static zero() {
      return new Vector(0, 0);
    }
  
    static random(min1, max1, min2, max2) {
      const x = Math.floor(Math.random() * (max1 - min1 + 1)) + min1;
      const y = Math.floor(Math.random() * (max2 - min2 + 1)) + min2;
      return new Vector(x, y);
    }
  
    copy() {
      return new Vector(this.x, this.y);
    }
  
    static add(v1, v2) {
      return new Vector(v1.x + v2.x, v1.y + v2.y);
    }
  
    static sub(v1, v2) {
      return new Vector(v1.x - v2.x, v1.y - v2.y);
    }
  
    distance(v, hauteur, largeur, espaceTore) {
      let distanceX = Math.abs(this.x - v.x);
      let distanceY = Math.abs(this.y - v.y);
  
      if (espaceTore) {
        if (distanceX > largeur / 2) {
          distanceX = Math.abs(largeur - distanceX);
        }
        if (distanceY > hauteur / 2) {
          distanceY = Math.abs(hauteur - distanceY);
        }
      }
  
      return Math.sqrt(distanceX * distanceX + distanceY * distanceY);
    }
  
    rotate(theta) {
      const xNew = this.x * Math.cos(theta * Math.PI / 180) - this.y * Math.sin(theta * Math.PI / 180);
      const yNew = this.x * Math.sin(theta * Math.PI / 180) + this.y * Math.cos(theta * Math.PI / 180);
  
      this.x = xNew;
      this.y = yNew;
    }
  
    norme() {
      return Math.sqrt(this.x * this.x + this.y * this.y);
    }
  
    normalise() {
      if (this.norme() !== 0) {
        this.div(this.norme());
      }
    }
  
    limite(lim) {
      if (this.norme() > lim) {
        this.normalise();
        this.mult(lim);
      }
    }
  
    angle(v) {
      const x1 = this.x;
      const y1 = this.y;
      const x2 = v.x;
      const y2 = v.y;
  
      return Math.acos((x1 * x2 + y1 * y2) / Math.sqrt(x1 * x1 + y1 * y1) / Math.sqrt(x2 * x2 + y2 * y2)) * 180 / Math.PI;
    }
  
    toString() {
      return `( ${this.x}, ${this.y} )`;
    }
  }
  