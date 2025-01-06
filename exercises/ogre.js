class Ogre {
  constructor(name, home) {
    this.name = name;
    this.home = home || "Swamp";
    this.swings = 0;

  }
  encounter(human) {
    human.encounterCounter += 1;
    if(human.encounterCounter !== 0 && human.encounterCounter % 3 === 0){
    this.swingAt(human)
    }
  }
  swingAt(human) {
      this.swings += 1;
    if (this.swings !== 0 && this.swings % 2 === 0) {
      human.knockedOut = true
    }
  }
  apologize(human) {
    if (human.knockedOut === true) {
      human.knockedOut = false
    }
  }
}


export default Ogre;
// npm test mythical-creatures/test/ogre-test.js
