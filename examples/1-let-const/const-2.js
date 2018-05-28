const o = {};

o['a'] = 'a';
console.log(o);

o.b = 'b';
console.log(o);

// o = {};

Object.freeze(o);
o.c = 'c';
console.log(o);

const a = [];
a.push(1);
console.log(a);
a.push(2);
console.log(a);
a.splice(0,1);
console.log(a);

// a = [];

Object.freeze(a);
a.push(3);
console.log(a);