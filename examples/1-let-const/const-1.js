const a = 'first letter';
console.log(a);

{
  // shadow variable - discouraged!
  const a = 'alpha'; // OK, block scoped!
  console.log(a); // alpha
}

a = 'b';
