/* old way */
const language = 'javascript';

const user = {
    name: 'Todd Sharp',
    city: 'Blairsville',
    state: 'GA'
}

user[language] = 'fun!';

console.log(user);

/*
    now we can use variables
    directly within our 
    object literal 
    declaration
*/

const user2 = {
    name: 'Todd Sharp',
    city: 'Blairsville',
    state: 'GA',
    [language]: 'fun!',
}

console.log(user2);

/* 
    since computed property names
    are evaluated at runtime 
    we can NOT combine them with 
    property value shorthands
    which is a compile time 
    syntactic enhancement
*/ 
const someArr = [1,2,3];
const user3 = {
    [someArr]
};