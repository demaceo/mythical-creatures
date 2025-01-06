class Unicorn {
  constructor(name, color) {
    this.name = name;
    this.color = color || "white";
  }
  isWhite(){
    if(this.color === "white"){
      return true
    } else {
      return false
    }
  }
  says(phrase){
    return `**;* ${phrase} *;**`
  }
}

module.exports = Unicorn;


// npm test mythical-creatures/test/unicorn-test.js
