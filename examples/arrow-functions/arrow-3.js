window.addEventListener('load', function() {
    
    /* 'this' refers to the button with a traditional function */
    document.querySelector('#clicky').addEventListener('click', function(e){
        console.log('e-->', e, 'this-->', this);
    });

    /* 'this' refers to the Window with an arrow function */
    document.querySelector('#clicky').addEventListener('click', (e) => {
        console.log('e-->', e, 'this-->', this);
    });

});