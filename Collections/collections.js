//ARRAYS

//To make an empty array
let students = [];

//An array of strings
let colors = ['red','orange','yellow'];

//An array of numbers
let lottoNums = [19,22,56,12,51];

//A mixed array
let stuff = [true, 68, 'cat', null];

DisplayAll('stuff', stuff);
DisplayAll('lottoNums', lottoNums);


//ARRAYS ARE INDEXED
let colorss = ['red','orange','green','yellow'];

colorss.length //4

colorss[0]  //'red
colorss[1]  //'orange'
colorss[2]  //'yellow'
colorss[3]  //'green'
colorss[4]  //'undefined'

//MODIFYING ARRAYS

colorss[0] = 'burgundy';
colorss[2] = 'torquoise';
colorss[4] = 'lemon';
//adding a new member to the colorss array
colorss[5] = 'lilac'

colorss[colorss.length ] = 'grey'


//ARRAY Add Methods
let topSongs = [
    'First Time Ever I Saw your Face',
    'God Only Knows',
    'A Day In The Life',
    'Life on Mars'
];

topSongs.push('Fortunate Son');
//topSongs.pop();

let dishesToDo = ['big platter'];
dishesToDo.unshift('large plate');
dishesToDo.unshift('small plate');
dishesToDo.unshift('cereal bowl');
dishesToDo.unshift('mug');
//DisplayAll('dishesToDo', dishesToDo);
//dishesToDo.shift();

//CONCAT
const array1 = ['a','b','c'];
const array2 = ['d','e','f'];

console.log(array1.concat(array2)); // ['a','b','c','d','e','f']

let fruits = ['apple','banana'];
let veggies = ['asparagus','brussel spouts'];
let meats = ['steak', 'chicken breast'];

let fruitsVeggies = fruits.concat(veggies,meats);
DisplayAll('fruitsVeggies', fruitsVeggies);


//INCLUDES - returns a true or false
let ingredients = [
    'water',
    'corn starch',
    'flour',
    'cheese',
    'brown sugar',
    'shrimp',
    'eel',
    'butter'
];

ingredients.includes('fish') // false
ingredients.includes('shrimp') //true
ingredients.includes('water',3) // false
ingredients.includes('water') //true

//INDEXOF - returns index
ingredients.indexOf('eel') // 6
ingredients.indexOf('maple syrup') // -1


//REVERSE - mutates the original and reverses
let letters = ['T','c','E','P','S','E','R'];
let reversedLetters =  letters.reverse(); // ['R','E','S','P','E','C','T']

DisplayAll('letters',reversedLetters);


//JOIN - Takes an array and spits out a string
letters.join() //"T,C,E,P,S,E,R"
letters.join('&') //"T&C&E&P&S&E&R"


//SLICE -- Takes a part of the array

let animals = ['shark','salmon','whale','bear','lizard','tortoise'];

let swimmers = animals.slice(0,3) // ["shark","salmon","whale"];
let mammals = animals.slice(2,4)  // ["whale","bear"];
let quadruped = animals.slice(-3);


//SPLICE -- Mutates the array, removing or adding when specified

DisplayAll('animals',animals);

let splice1 = animals.splice(1,0,'octopus');
DisplayAll('splice1',animals);

let splice2 = animals.splice(3,2);
DisplayAll('splice2',animals);

let splice3 = animals.splice(3,0,'snake','frog')
DisplayAll('splice3',animals);


//SORT - sorts in place - default sort is based on string character
let people = ['Mrs. Robinson','Angie','Jolene','Maggie May','Roxanne'];
DisplayAll('unsorted people',people);
DisplayAll('sorted people',people.sort()); // ['Angie','Jolene','Maggie May','Mrs. Robinson','Roxanne']

let nums = [34,10,100000,67,99]
















function DisplayAll(param, val){
    console.log(`${param} -> ${val}`);
}