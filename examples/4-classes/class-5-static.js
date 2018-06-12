class Util {
  static multiply(a, b) {
    return a * b;
  }

  static divide(a, b) {
    return a / b;
  }

  static add(a, b) {
    return a + b;
  }

  static subtract(a, b) {
    return a - b;
  }
}

console.log( Util.multiply(2,5) );
console.log( Util.divide(10,2) );
console.log( Util.add(10,20) );
console.log( Util.subtract(58, 33) );

/*
    static methods can *not* be called through a class instance
*/
const util = new Util();
console.log( util.add(2,3) );