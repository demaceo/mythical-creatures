class Centaur {
  constructor(centaur){
    this.name = centaur.name;
    this.breed = centaur.type;
    this.cranky = false;
    this.standing = true;
    this.layingDown = false;
    this.actionCounter = 0;
  }
  shoot(){
    this.actionCounter++;
    if(this.actionCounter >= 3){
      this.cranky = true
    }
    if(this.cranky === true || this.layingDown === true){
      return 'NO!'
    } else if(this.cranky === false || this.layingDown === false) {
      return 'Twang!!!'
    }
    return 'NO!'
  }
  run(){
    this.actionCounter++;
    if(this.actionCounter >= 3){
      this.cranky = true
    }
    if(this.cranky === true || this.layingDown === true){
      return "NO!"
    } else {
      return 'Clop clop clop clop!!!'
    }
  }
  sleep(){
    if(this.standing === true){
      return "NO!"
    }else if(this.layingDown === true){
      this.cranky = false;
      this.actionCounter = 0;
      return "ZZZZ"
    }
  }
  layDown(){
    this.standing = false;
    this.layingDown = true
  }
  standUp(){
    this.standing = true;
    this.layingDown = false;
  }
  drinkPotion(){
    if (this.standing === false){
      this.cranky = false;
      return 'Not while Im laying down!';
    } else if(this.standing === true) {
      this.cranky = true;
    }
  }
}

module.exports = Centaur;
