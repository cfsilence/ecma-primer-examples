function showAvatarPromises() {
    fetch(`/examples/data/users.json`)
        .then( response => response.json() )
        .then( userData => {
            console.log(userData);
            const todd = userData.find( it => it.name === 'Todd Sharp' );

            fetch(`/examples/data/languages-${todd.id}.json`)
                .then( languages => languages.json() )
                .then( languages => {
                    console.log(languages);
                });
        })
}

function slightlyCleanerPromises() {
    fetch(`/examples/data/users.json`)
        .then( response => response.json() )
        .then( userData => {
            console.log(userData);
            const todd = userData.find( it => it.name === 'Todd Sharp' );
            return fetch(`/examples/data/languages-${todd.id}.json`)
        })
        .then( languages => languages.json() )
        .then( languages => {
            console.log(languages);
        });
}

async function showAvatarAsync() {
    const userResponse = await fetch(`/examples/data/users.json`);
    const users = await userResponse.json();

    console.log(users);
    const todd = users.find( it => it.name === 'Todd Sharp' );

    const languageResults = await fetch(`/examples/data/languages-${todd.id}.json`);
    const languages = await languageResults.json();
    
    console.log(languages);
}

window.addEventListener('load', function(){
    document.querySelector('#clicky1').addEventListener('click', function(){
        showAvatarAsync();
    });
    document.querySelector('#clicky2').addEventListener('click', function(){
        showAvatarPromises();
    });
    document.querySelector('#clicky3').addEventListener('click', function(){
        slightlyCleanerPromises();
    });
});