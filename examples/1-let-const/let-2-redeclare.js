/*
    variables defined with let cannot
    be redeclared within the same block
*/
if (true) {
  let a = 'a';
  console.log(a);
  let a = 'b';
  console.log(a);
}

/*
    variables defined with var can
    be redeclared
*/
if(true) {
  var x = 'a';
  console.log(x);
  var x = 'b';
  console.log(x);
}