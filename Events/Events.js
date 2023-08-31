//   Clicks            mouse wheel      drags        drops
//   double click      copying          hovers       pasting
//   scrolls           form submission  audio start  Key Presses
//   screen resize     focus/blur       printing     mouse enter

// ADDEVENTLISTENER  - Specify the event type and the call back to run

// const btn = document.querySelector('button');

// btn.addEventListener('click', function(){
//     alert("CLICKED");
// });

// btn.addEventListener('mouseover', function(){
//     btn.innerText = 'STOP TOUCHING ME'
// });

// btn.addEventListener('mouseout', function(){
//     btn.innerText = 'Click Me!';
// });

// window.addEventListener('scroll', function(){
//     console.log('STOP SCROLLING');
// });

// const colors = [
//     'red',
//     'orange',
//     'yellow',
//     'green',
//     'blue',
//     'purple',
//     'indigo',
//     'violet'
// ]

// const printCOlor = function(){
//     console.log(this);
//     console.log(this.style.backgroundColor);
// };
// // The Event Object  -- COntains information about the particular event
// const changeColor = function(evt){
//     console.log(evt);
//     const h1 = document.querySelector('h1');
//     h1.style.color = this.style.backgroundColor;
// }

// const container = document.querySelector('#boxes');

// for(let color of colors){
//     const box = document.createElement('div');
//     box.style.backgroundColor = color;
//     box.classList.add('box');
//     container.appendChild(box);

//     box.addEventListener('click', changeColor);
// }

// document.body.addEventListener('keypress', function(e){
//     console.log(e);
    
// });


// // KEY EVENTS --- KeyPress   KeyPound

// const input = document.querySelector('#username');

// input.addEventListener('keydown', function(e){
//     console.log("KEYDOWN!!!");
// });

// input.addEventListener('keyup', function(e){
//     console.log("KEYUP!!!");
// });

// // KEYPRESS --- An event is only considered a keypress when letters are entered in the Input field
// input.addEventListener('keypress', function(e){
//     console.log("KEYPRESS!!!");
// });


// const addItemInput = document.querySelector('#addItem');
// const itemsUL = document.querySelector('#items');

// addItemInput.addEventListener('keypress', function(e){

//     if(e.key === 'Enter'){
//         // add a new Item to the list
//         const newItemText = this.value;
//         const newItem = document.createElement('li');
//         newItem.innerText = newItemText;
//         itemsUL.appendChild(newItem);
//         this.value = '';
//     }
//     console.log(e);
// });

const form = document.querySelector('#signup-form');

const creditCardInput = document.querySelector('#cc');
const termsCheckBox = document.querySelector('#terms');
const veggieSelect = document.querySelector('#veggie');

form.addEventListener( 'submit', function(e){
    alert("SUBMITTED THE FORM");

    console.log('cc', creditCardInput.value);
    console.log('terms', termsCheckBox.checked);
    console.log('veggieSelect', veggieSelect.value);
    e.preventDefault();
});






