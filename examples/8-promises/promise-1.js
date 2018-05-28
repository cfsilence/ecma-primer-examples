/* Simple promise */
const p = new Promise(function(resolve, reject) {
    setTimeout(resolve, 1500, 'foo');
}); 

p.then( result => {
    console.log(result);
});

/* Promise.all() */
const p1 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 500, 'foo');
}); 
const p2 = new Promise(function(resolve, reject) {
    setTimeout(() => {
        console.log('p2 is done...')
        resolve('bar');
    }, 100);
}); 

Promise.all([p1, p2]).then( result => {
    console.log('p1 and p2 are done', result);
})

/* Promise catch */
const p3 = new Promise( (resolve, reject) => {
    throw 'Err...';
} );
p3.then( (result) => {
    console.log(result);
}).catch( (err) => {
    console.log('Error!', err);
});

/* Reject */
const p4 = new Promise(function(resolve, reject) {
    setTimeout(reject, 1500, 'Rejected!');
}); 

p4.then( result => {
    console.log(result);
}).catch( err => {
    console.log('Error!', err);
});
