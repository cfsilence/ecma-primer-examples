/* Array.prototype.forEach() */
var data = require('./array-data.js');
data.arr1.forEach( (item, index, array) => {
  console.log( 'item_num-->', index, 'item-->', item, 'array-->', array);
});
data.arr2.forEach( (item, index, array) => {
  console.log( 'item_num-->', index, 'item-->', item);
});

/* Array.prototype.includes() */
/* 
  Determines whether an array contains a certain element, 
  returning true or false as appropriate 
*/
var data = require('./array-data.js');
console.log( 'includes 1-->', data.arr1.includes(1) );
console.log( 'includes todd-->', data.arr2.includes(data.todd) );
console.log( 'includes String-->', data.arr3.includes('String') );
console.log( 'includes ring-->', data.arr3.includes('ring') ); 

/* Array.prototype.findIndex() */
/* 
  Returns the found index in the array, if an element in the 
  array satisfies the provided testing function or -1 if not found. 
*/
var data = require('./array-data.js');
console.log( 'findIndex-->', data.arr2.findIndex( it => {
  return it.id === 1;
}) );

/* Array.prototype.find() && filter() */
/* 
  find(): Returns the found value in the array, if an element in the array 
  satisfies the provided testing function or undefined if not found.
*/
/* 
  filter(): Creates a new array with all of the elements of this 
  array for which the provided filtering function returns true. 
*/
var data = require('./array-data.js');
console.log( 'find-->', data.arr2.find( it => {
  /* returns FIRST element that satisfies condition */
  return it.charisma > 95;
}) );
console.log( 'filter-->', data.arr2.filter( it => {
  /* returns ALL elements that satisfies condition */
  return it.charisma > 95;
}) );

/* Array.prototype.every() */
/* returns boolean indicating whether elements satisfy condition */
var data = require('./array-data.js');
console.log( 'every-->', data.arr2.every( it => {
  return it.charisma > 95;
}) );

/* Array.prototype.map() */
/* returns new array containing elements returned */
var data = require('./array-data.js');
console.log( 'map-->', data.arr2.map( it => {
  return {id: it.id, name: it.name};
}) );
/* NOTE: map() returns for EVERY element, use filter or forEach to exclude! */
console.log( 'map-->', data.arr2.map( it => {
  /* doesn't do what you might think! */
  if( it.id > 2 ) {
    return it.id;
  }
}) );

/* Array.prototype.reduce() */
/* 
  Apply a function against an accumulator and each value of the array 
  (from left-to-right) as to reduce it to a single value.
*/
var data = require('./array-data.js');
console.log( 'reduce-->', data.arr1.reduce( (a, b) => {
  return a + b;
}, 0));