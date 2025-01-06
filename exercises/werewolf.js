class Werewolf {
  constructor(name){
    this.name = name;
    this.human = true;
    this.wolf = false;
    this.hungry = false
  }
  transform(){
    if(this.human === true){
      this.human = false
    }else {
      this.human = true;
      this.hungry = false
    }
    if(this.wolf === true){
      this.wolf = false
    } else {
      this.wolf = true;
      this.hungry = true
    }
  }
  eat(victim){
    if(this.hungry === true){
      this.human = true;
      this.wolf = false;
      return `${victim.name} is delicious`
    } else {
      return `not hungry for human, ${victim.name}`
    }
  }
}


export default Werewolf;
