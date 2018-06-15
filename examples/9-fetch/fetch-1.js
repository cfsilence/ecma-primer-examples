window.addEventListener('load', function(){

  document.querySelector('#clicky').addEventListener('click', function(){
      
    let users = [];

    fetch('/examples/data/users.json')
      .then( response => {
        console.log(response);
        return response;
      })
      .then( response => response.json() )
      .then( data => {
        users = data;
        console.log('fetch result-->', data);
      });
    
    console.log('users-->', users);
      
  });

  document.querySelector('#clicky2').addEventListener('click', function(){
      
    const starWars = fetch('/examples/data/star-wars.json');
    const bourne = fetch('/examples/data/bourne.json');

    Promise.all([starWars, bourne])
      .then(resp => {
        return Promise.all( resp.map( r => r.json() ) );
      })
      .then( 
        ([starWars, bourne]) => {
          alert('All data is loaded, hide the spinner!');
          console.log(starWars, bourne);
        },
        err => {
          console.log(err);
        }
      );
      
  });

});