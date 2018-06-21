class Animal {
    
  constructor(hasFur, hasPaws, numFeet=4) {
    this.hasFur = hasFur;
    this.hasPaws = hasPaws;
    this.numFeet = numFeet;
  }

  speak() {
    return '';
  }

}

const animal = new Animal();
console.log(animal);