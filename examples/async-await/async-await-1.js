async function a() {
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("done!"), 1000)
    });
    const result = await promise; // wait till the promise resolves (*)
    console.log(result);
    return result;
}

console.log('call it -->');
a();
console.log('it was called!');
   
