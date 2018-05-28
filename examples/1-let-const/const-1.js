const a = 'first letter';
console.log(a);

{
  const a = 'alpha'; // OK, block scoped!
  console.log(a); // alpha
}

a = 'b';
