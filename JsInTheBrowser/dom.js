//SELECT

//Get Element By Id
const img = document.getElementById('bear-photo');
console.dir(img);

const p = document.getElementById('main');
console.dir(p);

//Get Element By TagName
const allInputs = document.getElementsByTagName('input');
console.dir(allInputs);

const input1 = allInputs[0];

console.log('-------------------------------------------')
for(let input of allInputs){
    console.log(input);
    console.log(input.value);
}

const inputsToArray = [...allInputs];

//Get Element By ClassName

const header = document.getElementsByClassName('header');

const specials = document.getElementsByClassName('special'); 


// QUERY SELECTOR
// A newer, all-in-one method to select a single element

// Finds all h1 elements
document.querySelector('h1');

//Finds first element with ID of red
document.querySelector('#red');

//Finds first element with class of big
document.querySelector('.bg');

const specificSpecial = document.querySelector('section ul li.special');

const passwordInput = document.querySelector('input[type="password"]');
// QUERY SELECTOR ALL

document.querySelectorAll('p');


