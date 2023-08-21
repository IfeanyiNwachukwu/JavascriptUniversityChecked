//DEFAULT FUNCTION PARAMS

//The Old Way

function multiply(a,b){
    b = typeof b !== 'undefined' ? b : 1
    return a * b;
}

// The Modern Way

function multiply( a, b = 1 ){
    return a * b;
}

const greet = (person, greeting = 'hi') => {
    Display(`${greeting}, ${person}`);
}

const blah = ( x, y = [1,2,3]) => {
    console.log( x, y );
}

//N.B The Order of the Parameter matters

//SPREAD

//SPREAD for Function Calls
// Expands an iterable (array, string, etc.)
// into a list of arguments.

const nums = [ 9, 3, 2, 8 ];
Math.max(nums); //Nan

// Use Spread
Math.max(...nums); // 9

function giveMeFour( a, b, c, d ){
    Display( 'a', a );
    Display( 'b', b );
    Display( 'c', c );
    Display( 'd', d );
}

const str = 'GOAT';

giveMeFour(...str);


//SPREAD in Array Literal

const nums1 = [ 1, 2, 3 ];
const nums2 = [ 4, 5, 6 ];

const nums3 = [ ...nums1, ...nums2 ];  //[ 1, 2, 3, 4, 5, 6 ]
const nums4 = [ 'a', 'b', ...nums2];   //[ "a", "b", 4, 5, 6 ]
const nums5 = [ ...nums1, ...nums2, 7, 8, 9 ]; //[ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

const cephalods = [ 'dumbo octopus', 'humboldt squid', 'flamboyant cuttlefish' ];

const gastropods = [ 'giant african snail', 'banana slug', 'variable neon slug' ];

const cnidaria = [ 'fire coral', 'moon jelly' ];

const mollusca = [ ...cephalods, ...gastropods ];

const inverts = [ ...cephalods, ...gastropods, ...cnidaria ];

const cephCopy = [ ...cephalods ];

// You can also spread string
const str1 = 'abcdefgh';
const str1Array = [ ...str1 ] //['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']


//SPREAD in Object Literals

const feline = { legs: 4, family: 'Felidae' }
const canine = { family: 'Caninae', furry: true }

const dog = { ...canine, isPet: true } 
//{family: 'Caninae', furry: true, isPet: true}

const lion = { ...feline, genus: 'Panthera' }
//{legs: 4, family: 'Felidae', genus: 'Panthera'}

const catDog = { ...feline, ...canine }
//{legs: 4, family: 'Caninae', furry: true}


//THE ARGUMENTS OBJECT -- Old Way
//- Available inside every function
//- It's an array-like object
//. Has a length property
//. Does not have array methods like push/pop
// contains all the arguments passed to the function
// Not available inside of arrow functions!

function sumAll(){
    let total = 0;
    for ( let i = 0; i < arguments.length; i++ ){
        total += arguments[i];
    }
    return total;
}

function SumRedu(){
    const argsArr = [ ...arguments ];

    return argsArr.reduce((accumulated, currVal) => {
        return accumulated + currVal;
    });
}


//REST
//Collects all remaining arguments into an actual array

function sumRest( ...nums ){
    Display(nums);
}

sumRest(1,2,3,4,5,6,7,8,9);

function sumReduceRest( ...nums ){
    return nums.reduce((total, currVal) => {
        return total + currVal;
    })
}

function fullName( first, last, ...titles ){
    Display( 'first', first );
    Display( 'last', last );
    console.log( 'titles', titles );
}

fullName( 'Tom', 'Jones', 'III', 'Order of the Phoenix' );

const multiplyReduce = ( ...nums ) => (
    nums.reduce((total,currVal) => total * currVal)
)


// DESTRUCTURING

// Array Destructuring

const raceResults = [ 'Eliud Kipchoge', 'Feyisa Lelisa', 'Galen Rupp', 'Ghirmay Ghebreselassies', 'Alphonce Simbu', 'Jared Ward' ];

const [ gold, silver, bronze ] = raceResults;
gold //"Eliud Kipchoge"
silver //"Feyisa Lelisa"
bronze //"Galen Rupp"

const [ fastest, ...everyoneElse] = raceResults;

fastest //"Eliud Kipchoge"
everyoneElse // ['Feyisa Lelisa', 'Galen Rupp', 'Ghirmay Ghebreselassies', 'Alphonce Simbu', 'Jared Ward']

//Skipping
const [ first , , , fourth ] = raceResults;

first //"Eliud Kipchoge"
fourth //"Ghirmay Ghebreselassies"

const [ winner, ...others ] = raceResults;

others //['Feyisa Lelisa', 'Galen Rupp', 'Ghirmay Ghebreselassies', 'Alphonce Simbu', 'Jared Ward']



// Object Destructuring

// In object destructuring, Name matters - variable names must be existing key names in the object
const runner = {
    firstName: "Eliud",
    lastName:  "Kipchoge",
    country: "Kenya",
    title:  "Elder of the order of the Golden Heart of Kenya"
}

const { firstName, lastName, country} = runner;

firstName //"Eliud"
lastName  //"Kipchoge"
country   //"Kenya"


// If we want to give variables a different name from the object key

const { country: nation, title: honorific } = runner;

//NESTED Destructuring

const structuredRaceResult  = 
[ 
    {
        firstName: "Eliud",
        lastName:  "Kipchoge",
        nationality: "Kenya",
        title:  "Elder of the order of the Golden Heart of Kenya"
    },
    {
        firstName: "Haile",
        lastName:  "Miriam",
        nationality: "Ethiopia",
        title:  "Sword of the order of the Golden Heart of Ethiopia"
    }

];

const [ {}, {nationality}] = structuredRaceResult;


//PARAM Destructuring

const runnerFUllName = ({ foreName, surName }) => {
    return `${foreName}, ${surName}`;
}

const runnner = {
    foreName: "Eliud",
    surName:  "Kipchoge",
    country: "Kenya"
}

let athlete = runnerFUllName(runnner);




























function Display(input){
    console.log(input);
}