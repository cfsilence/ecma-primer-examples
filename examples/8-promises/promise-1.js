/* Promise */
const iceCreamPromise = new Promise( function(resolve, reject) {
  return resolve('ice cream');
});

console.log(iceCreamPromise);

iceCreamPromise.then( result => {
  console.log(result);
});

/* Promise.all() */
const p1 = new Promise(function(resolve, reject) {
  setTimeout(resolve, 500, 'foo');
}); 
const p2 = new Promise(function(resolve, reject) {
  setTimeout(() => {
    console.log('p2 is done...');
    resolve('bar');
  }, 100);
}); 

Promise.all([p1, p2]).then( ([p1,p2]) => {
  console.log('p1 and p2 are done', p1, p2);
});

/* Pay no attention to this...Polyfill `finally()` to `Promise.prototype` (since my demo runs in Node) */
Promise.prototype.finally = function(onFinally) {
  return this.then(
    /* onFulfilled */
    res => Promise.resolve(onFinally()).then(() => res),
    /* onRejected */
    err => Promise.resolve(onFinally()).then(() => { throw err; })
  );
};
/* Promise catch */
const p3 = new Promise( (resolve, reject) => {
  throw 'Err...';
} );
p3.then( (result) => {
  console.log(result);
}).catch( (err) => {
  console.log('Error!', err);
}).finally( () => {
  console.log('finally!');
});

/* Reject */
const p4 = new Promise(function(resolve, reject) {
  reject('Rejected!');
}); 

p4.then( result => {
  console.log(result);
}).catch( err => {
  console.log('Error!', err);
});
