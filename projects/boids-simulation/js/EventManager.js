export class EventManager {
    constructor() {
      this.currentDate = 0;
      this.eventListe = [];
    }
  
    next() {
      this.currentDate++;
  
      let tailleListe = this.eventListe.length;
      let i = 0;
  
      while (i !== tailleListe) {
        const event = this.eventListe[i];
  
        if (event.getDate() <= this.currentDate) {
          event.execute();
          this.eventListe.splice(i, 1);
          tailleListe--;
        } else {
          i++;
        }
      }
    }
  
    isFinished() {
      return this.eventListe.length === 0;
    }
  
    addEvent(event) {
      this.eventListe.push(event);
    }
  }
  