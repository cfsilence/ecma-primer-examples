class Animal {
    
  constructor(hasFur, hasPaws, numFeet=4) {
    this.hasFur = hasFur;
    this.hasPaws = hasPaws;
    this.numFeet = numFeet
  }

  speak() {
    return '';
  }

}

class Pig extends Animal {

  constructor(hasFur, hasPaws, numFeet=4, hasHooves) {
    super(hasFur, hasPaws, numFeet);
    this.hasHooves = hasHooves;
  }

  speak() {
    return 'huff';
  }
}

const p = new Pig(false, false, 4, true);
console.log( 'piggy-->', p, p.speak() );

class Chicken extends Animal {
  
  constructor(hasFur, hasPaws, numFeet=4, hasComb, hasWaddle, hasFeathers) {
    super(hasFur, hasPaws, numFeet);
    this.hasComb = hasComb;
    this.hasWaddle = hasWaddle;
    this.hasFeathers = hasFeathers;
  }

  speak() {
    return 'bawk';
  }
}

const c = new Chicken(false, false, 2, true, true, true);
console.log( 'chicken-->', c, c.speak() );

class Dog extends Animal {

  constructor(hasFur, hasPaws, numFeet=4, hasTail) {
    super(hasFur, hasPaws, numFeet);
    this.hasTail = hasTail;
  }

  speak() {
    return 'woof';
  }
}

const d = new Dog(true, true, 4, true);
console.log( 'dog-->', d, d.speak() );
