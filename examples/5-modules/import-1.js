import { Conference } from './export-1.js';

window.addEventListener('load', function() {
  const weRise = new Conference('We Rise', 2000, 200, 100);
  document.getElementById('confName').innerHTML = weRise.name;
  document.getElementById('message').innerHTML = weRise.value();
  console.log(weRise);
});
