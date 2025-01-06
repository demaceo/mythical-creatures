class Fairy {
  constructor(name) {
    this.name = name;
    this.dust = 10;
    this.clothes = {
      dresses: ["Iris"]
    };
    this.disposition = "Good natured";
    this.humanWards = [];
  }
  receiveBelief() {
    this.dust += 1;
  }
  believe() {
    this.dust += 10;
  }
  makeDresses(dresses) {
    this.clothes.dresses = this.clothes.dresses.concat(dresses)
    // for(var i = 0; i< dresses.length; i++) {
    //   this.clothes.dresses.push(dresses[i])
    // }
  }
  // makeDresses = (dresses) => {
  //   this.clothes.dresses = this.clothes.dresses.concat(dresses)
  // }
  provoke() {
    this.disposition = "Vengeful";
  }
  replaceInfant(infant) {
    if (this.disposition !== "Vengeful") {
      return infant;
    } else {
      infant.disposition = "Malicious";
      this.humanWards.push(infant)
    }
    if (this.humanWards.length === 3) {
      this.disposition = "Good natured";
    }
  }
}

module.exports = Fairy;
// npm test mythical-creatures/test/fairy-test.js
