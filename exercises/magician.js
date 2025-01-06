class Magician {
  constructor(magician) {
    this.name = magician.name;
    if(magician.topHat === undefined) {
      this.topHat = true
    } else {
      this.topHat = magician.topHat;
    }
    this.confident = false;
    this.castCounter = 0;
  }
  incantation(spell) {
    return spell.toUpperCase() + "!";
  }
  cast(){
    this.castCounter++;
    if(this.castCounter >= 3){
      this.confident = true;
    }
    if(this.topHat === true){
      return "PULL RABBIT FROM TOP HAT";
    } else {
      return "PULL DOVE FROM SLEEVE";
    }
  }
  performShowStopper(){
    if(this.confident === false){
      return 'Oh no! Practice more before attempting this trick!'
    } else {
      return 'WOW! The magician totally just sawed that person in half!'
    }
  }
}

export default Magician;
// npm test mythical-creatures/test/magician-test.js
