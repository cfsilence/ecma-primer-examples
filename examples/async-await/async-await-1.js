async function a() {
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("done!"), 1000)
    });
  
    const result = await promise; // wait till the promise resolves (*)
    console.log(result);
    return result;
}

window.addEventListener('load', function(){
    console.log('load')
    document.querySelector('#clicky').addEventListener('click', function(){
        console.log('hi')
        const r = a();
        console.log(r);
    });
});
   
