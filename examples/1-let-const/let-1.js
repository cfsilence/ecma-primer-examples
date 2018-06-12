/* assign a variable */
let a = 'hello';
console.log(a);

/* reassign it */
a = 'goodbye!';
console.log(a);

/* 
    fails on line 17 because we're trying to 
    access a variable defined outside of the 
    current block (it is assigned in a sub block) 
*/
function test() {
  if( true ) {
    let x = 'todd';
    if( true ) {
      console.log(x);
    }
  }
  console.log(x); 
}

test();