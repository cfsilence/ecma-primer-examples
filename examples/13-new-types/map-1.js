/* Map */
const m = new Map();
m.set('key', 'string key');

const arr = [1,2,3];
m.set(arr, 'array key')
const obj = {foo: 'bar'};
m.set(obj, 'object key');

console.log('map-->', m);
console.log('check key exists-->', m.has(arr));
console.log('get a value by key-->', m.get('key'));
console.log('delete an entry by key-->', m.delete('key'));
console.log('map-->', m);
console.log('get amount of entries in map-->', m.size);
/* clear all entries */
m.clear();
console.log('map-->', m);

m.set('key1', 'value1');
m.set('key2', 'value2');
m.set('key3', 'value3');

m.forEach((value, key) => {
    console.log(`${key} = ${value}`);
})