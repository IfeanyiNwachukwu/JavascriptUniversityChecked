//PROPERTIES AND METHODS (the Important Ones)

//  classList           getAttribute()           setAttribute()         appendChild()

//  append()            prepend()                removeChild()          remove()

//  removeChild()       createElement            innerText              textContect

//  innerHTML           value                    parentElement          children

//  nextSibling         previousSibling          style


//INNERTEXT -- Returns only text even if they are nested without formatting
const h1 = document.querySelector('h1');
const h1InnerText = h1.innerText;

//TEXTCONTENT  -- Returns everything within the tag as a text including the formatting
const p = document.querySelector('#main');
const ptextContent = p.textContent;


//CREATE ELememt  -- Creates an HTML element

const newH2 = document.createElement('h2');
newH2.innerText = 'I like Animals!';

//APPEND CHILD  -- append at the end of the children

const sectionToAppend = document.querySelector('section');
sectionToAppend.appendChild(newH2);

const newImg = document.createElement('img');
newImg.src = 'https://unsplash.com/photos/a-man-holding-a-small-dog-in-his-hands-NqkTxxK_2ZY';
newImg.style.width = '300px';
document.body.appendChild(newImg);

//INNERHTML -- retrieves and set text and all of the elements of an Element

const form = document.querySelector('form');

// VALUE and attributes

const inputs = document.querySelectorAll('input');
inputs[0].value = 'Taco';
//inputs[1].value = 'adcefghij';

inputs[1].placeholder = 'Please Enter Password';

inputs[2].checked = true;


// Get Attributes and Set Attributes

const rangeInput = document.querySelector('input[type="range"]');

const rangeMax = rangeInput.getAttribute('max');
const rangeMin = rangeInput.getAttribute('min');
const type     = rangeInput.getAttribute('type');
const step     = rangeInput.getAttribute('step');


rangeInput.setAttribute('min', '100');

// We can even change the type of the Element
rangeInput.setAttribute('type', 'radio');



// FInding PARENT, CHILDREN and SIBLING  --- DOM Traversing

const firstLi = document.querySelector('li');

const firstLiParent = firstLi.parentElement;

const firstLiGrandParent = firstLi.parentElement.parentElement;

const ulElement = document.querySelector('ul');
const ulChildren = ulElement.children;

const ulFirstChild = ulChildren[0];

firstLiPreviousFirstSibling = firstLi.previousElementSibling;
firstLiNexFirstSibling  = firstLi.nextElementSibling;
firstLiNextSecondSibling = firstLi.nextElementSibling.nextElementSibling;


// Changing Multiple Elements at the Same time

const allLis = document.querySelectorAll('li');

const arrayLis = [...allLis];

// arrayLis.forEach((li) => {
//     li.innerHTML = "We are <b> THE CHAMPIONS </b>"
// });

// for(let li of allLis)[
//     li.innerHTML = "We are <b> THE CHAMPIONS </b>"
// ]


// Changing Styles Using Javascript

const h1ForStyling = document.querySelector('h1');

// Best for Setting Style and not reading/retrieving current style because the style property contain only inline style
h1ForStyling.style.color = 'orange';

const pForStyling = document.querySelector('p');
pForStyling.style.backgroundColor = 'teal';



// Get COmputed Styles

const stylesForH1 =  getComputedStyle(h1ForStyling); // An object is returned containing all the properties

//stylesForH1.color


// Manipulating Classes

const todo = document.querySelector('#todos .todo');

todo.classList.add('done');

// CREATING ELEMENTS
const newestH2 = document.createElement('h2');

newestH2.innerText = 'I like animals';

newestH2.classList.add('special');



//APPEND CHILD  --- adds new element to the end of the parent

const sectionForAppending = document.querySelector('section');

sectionForAppending.appendChild(newestH2);



const parentUl = document.querySelector('ul');

const firstestLi = document.querySelector('li.todo');

const newLi = document.createElement('li');
newLi.innerText = 'I AM A NEW LI';

parentUl.insertBefore(newLi, firstLi);


//APPEND --- can insert multiple elements unlike appendchild

//PREPEND - can insert multiple elements but it makes the elements the first child


// REMOVE CHILD  -- Requires a parent to remove

const ulRemoval = document.querySelector('section ul');

const removeMe = ulRemoval.querySelector('.special');

ulRemoval.removeChild(removeMe);


//REMOVE   --- does not require a Parent

const h1ToRemove = document.querySelector('h1');

h1ToRemove.remove();









