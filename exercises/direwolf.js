class Direwolf {
  constructor(name, home, size) {
    this.name = name;
    this.home = home || "Beyond the Wall";
    this.size = size || "Massive";
    this.starksToProtect = [];
    this.huntsWhiteWalkers = true;
  }
  protect(stark) {
    if (this.home === stark.location && this.starksToProtect.length < 2) {
      this.starksToProtect.push(stark);
      stark.safe = true;
      this.huntsWhiteWalkers = false;
    }
  }
  leave(stark) {
    this.starksToProtect = [];
    stark.safe = false;
  }
}

export default Direwolf;
// npm test mythical-creatures/test/direwolf-test.js
