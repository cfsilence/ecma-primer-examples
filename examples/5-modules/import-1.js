import { Conference } from './export-1.js';

window.addEventListener('load', function() {
    const weRise = new Conference('We Rise', 2000, 200, 100);
    document.querySelector('#confName').innerHTML = weRise.name;
    document.querySelector('#message').innerHTML = weRise.value();
    console.log(weRise);
});
