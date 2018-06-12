/*
    functions are "hoisted"
    (available before they are defined)
*/
console.log( func1(1) );

function func1(n){
  return n;
}

/*
    classes are *not* hoisted
*/
console.log( new Clazz(1) );

class Clazz {
  constructor(n) {
    this.n = n;
  }
}