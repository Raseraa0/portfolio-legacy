export class Event {
    constructor(date) {
      this.date = date;
    }
  
    getDate() {
      return this.date;
    }
  
    execute() {
      throw new Error("Method 'execute()' must be implemented.");
    }
  }