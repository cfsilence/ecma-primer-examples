window.addEventListener('load', function(){
    document.querySelector('#clicky').addEventListener('click', function(){
        
        let posts = [];

        fetch('https://jsonplaceholder.typicode.com/posts')
            .then( response => response.json() )
            .then( data => {
                posts = data;
                console.log('fetch result-->', data);
            })
        
        console.log('posts-->', posts);
        
    });
});