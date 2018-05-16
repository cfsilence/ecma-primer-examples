function showAvatarPromises() {
    fetch(`https://api.github.com/users/cfsilence`)
        .then( response => response.json() )
        .then( userData => {
            console.log(userData);
            fetch(`https://api.github.com/users/${userData.login}/gists`)
                .then( response => response.json() )
                .then( data => {
                    console.log(data);
                });
        })
}

async function showAvatarAsync() {
    const githubResponse = await fetch(`https://api.github.com/users/cfsilence`);
    const githubUser = await githubResponse.json();

    console.log(githubUser);

    const gists = await fetch(`https://api.github.com/users/${githubUser.login}/gists`);
    const gistResults = await gists.json();
    
    console.log(gistResults);
}

window.addEventListener('load', function(){
    document.querySelector('#clicky1').addEventListener('click', function(){
        showAvatarAsync();
    });
    document.querySelector('#clicky2').addEventListener('click', function(){
        showAvatarPromises();
    });
});