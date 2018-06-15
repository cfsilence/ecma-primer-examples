// no arguments, implied 'return' keyword
const a = () => 'foo';
console.log( a() );

// single argument, implied 'return' keyword
const b = name => `Hello, ${name}`;
console.log( b('Todd') );

// multiple arguments, complex return
const c = (name, age) => {
  const isOfAge = age > 20;
  return `${name} may${!isOfAge ? ' not' : ''} purchase alcohol!`;
};
console.log( c( 'Todd', 41 ) );
console.log( c( 'Dominic', 10 ) );