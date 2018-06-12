/* Set */
const s = new Set();
s.add(1);
s.add({id: 1});
s.add([1,2,3]);

console.log(s);
console.log('set size-->', s.size);
console.log('set values-->', s.values());
s.delete(1);
console.log(s);

let i = 0;
s.forEach( (value) => {
  console.log(`${i++}-->`, value);
});