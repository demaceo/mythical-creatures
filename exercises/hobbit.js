class Hobbit {
  constructor(name) {
    (this.name = name),
      (this.age = 0),
      (this.adult = false),
      (this.old = false),
      (this.hasRing = this.name === "Frodo" ? true : false);
  }
  celebrateBirthday() {
    this.age++;
    if (this.age > 32) {
      this.adult = true;
    }
    if (this.age > 100) {
      this.old = true;
    }
  }
}

export default Hobbit;
