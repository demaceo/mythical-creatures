class Dragon {
  constructor(name, rider, color) {
    (this.name = name),
      (this.rider = rider),
      (this.color = color),
      (this.hungry = true),
      (this.counter = 0);
  }
  eat() {
    this.counter++;
    if (this.counter >= 3) {
      this.hungry = false;
    }
  }
}

export default Dragon;

// npm test mythical-creatures/test/dragon-test.js
