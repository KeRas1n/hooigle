/*
const source = document.getElementById('searchtext');

const auto = document.getElementById('auto');

const inputHandler = function(e) {

  fetch('https://api.serpwow.com/live/search?api_key=CB1FBB4E92C64E16B23FF4E7008541B3&search_type=autocomplete&q=' + e.target.value + '&location=United+States')
    .then(res => res.json())
    .then(data =>  console.log(data))

}

source.addEventListener('input', inputHandler);
source.addEventListener('propertychange', inputHandler); // for IE8
// Firefox/Edge18-/IE9+ don’t fire on <select><option>
// source.addEventListener('change', inputHandler);*/

fetch('http://clients1.google.com/complete/search?hl=en&q=<your query here>&client=hp')
    .then(res => res.json())
    .then(data =>  console.log(data))