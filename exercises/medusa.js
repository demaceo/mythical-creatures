class Medusa {
  constructor(name) {
    this.name = name;
    this.statues = [];
  }
  stare(person){
    person.stoned = true;
    this.statues.push(person)
    if(this.statues.length > 3){
      this.statues[0].stoned = false
      this.statues.shift()
    }
  }
}

export default Medusa;

// npm test mythical-creatures/test/magician-test.js
