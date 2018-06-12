// simplified function
const a = () => 'foo';
console.log( a() );

// single argument, implied 'return'
const b = name => `Hello, ${name}`;
console.log( b('Todd') );

// multi arg, complex return
const add = (...args) => {
  return args.reduce( (previous, current) => {
    return previous + current;
  }, 0);
};
console.log( add(1,2,3,4) );
console.log( add() );