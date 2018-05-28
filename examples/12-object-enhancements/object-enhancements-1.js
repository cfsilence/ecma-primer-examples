/* Object.assign() */
/* Copies the values of all enumerable own properties from one or more source objects to a target object. */
var data = require('./object-data.js');
const newObj = {isCool: true};
console.log('newObj-->', newObj);
console.log('obj1-->', data.obj1);
const merged = Object.assign({}, data.obj1, newObj);
console.log('assign-->', merged);

/* Object.entries() */
/* Returns an array containing all of the [key, value] pairs */
var data = require('./object-data.js');
Object.entries(data.obj1).forEach( ([key, value]) => {
    console.log(`key: ${key}, value: ${value}`);
});

/* Object.keys() */
var data = require('./object-data.js');
console.log('keys-->', Object.keys(data.obj1));

/* Object.values() */
var data = require('./object-data.js');
console.log('values-->', Object.values(data.obj1));

