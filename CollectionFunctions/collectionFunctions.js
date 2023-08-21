//FOREACH

const nums = [9,8,7,6,5,4,3,2,1];

nums.forEach(function(num,idx){
    console.log(idx, num);
})

nums.forEach(function(n){
    console.log(n * n);
});

console.log("---------------------------------------");
nums.forEach(function(el){
    if(el % 2 === 0){
        console.log(el);
    }
});

console.log("---------------------------------------");
const numbers1 = [20,21,22,23,24,25,26,27];

numbers1.forEach(function(num){
    console.log(num);
})

function printTriple(n){
    console.log(n * 3);
}


numbers1.forEach(printTriple);

Seperator();

const books = 
[
    {
        title: 'Good Omens',
        authors: ['Terry Pratchett', 'Neil Gaiman'],
        rating: 4.25
    },
    {
        title: 'Bone: The Complete Edition',
        authors: ['Jeff Smith'],
        rating: 4.42
    },
    {
        title: 'American Gods',
        authors: ['Neil Gaiman'],
        rating: 4.11
    },
    {
        title: 'A Gentleman in Moscow',
        authors: ['Amor Towles'],
        rating: 4.36
    }
]

books.forEach(function(book){
    console.log(book.title.toUpperCase());
});



//MAP

const titles = books.map(function(b){
    return b.title;
});
const texts = ['rofl', 'lol', 'omg', 'ttyl'];

const caps = texts.map(function(t){
    return t.toUpperCase();
});

console.log(texts);
console.log(caps);
Seperator();

const numbersA = [ 20, 21, 22, 23, 24, 25, 26, 27 ];
const words = [ 'asap', 'byob', 'rsvp', 'diy' ];

const doubles = numbersA.map(function(num){
    return num * 2;
});

Display(doubles);

Seperator();

const numDetail = numbersA.map(function(n){
    return{
        value: n,
        isEven: n % 2 === 0
    }
});

Display(numDetail);

Seperator();
const abbrevs = words.map(function(word){
    return word.toUpperCase().split('').join('.');
});

Display(abbrevs);

Seperator();

//ARROW FUNCTIONS
//"syntactically compact alternative" to a regular function expression

const square = (x) => {
    return x * x;
}

const sum = (x,y) => {
    return x + y;
}

// Parens are optional if there's only one parameter:
const square1 = x => {
    return x * x;
}

//Use empty parens for functions with no parameters
const singASong = () => {
    return "LA LA LA LA LA LA";
}

// ARROW FUNCTIONS __Implicit Return
const isEvenA = num => (
   num % 2 === 0
);

const isEvenB = num => num % 2 === 0; //one-linear implicit return


// ARRAY.FIND
//returns the value of the first element in the array that satisfies 
//the provided testing function
//used to search based on an identifier
let movies = [
    "The Fantastic Mr. Fox",
    "Mr. and Mrs. Smith",
    "Mrs. Doubtfire",
    "Mr. Deeds"
]

let movie = movies.find(movie =>{
    return movie.includes('Mrs.')
});
Display(movie);

Seperator();

let movie2 = movies.find(m => m.indexOf('Mrs') === 0);
Display(movie2);

Seperator();

const booksA = 
[
    {
        title: 'Good Omens',
        authors: ['Terry Pratchett', 'Neil Gaiman'],
        rating: 4.25
    },
    {
        title: 'Bone: The Complete Edition',
        authors: ['Jeff Smith'],
        rating: 4.42
    },
    {
        title: 'American Gods',
        authors: ['Neil Gaiman'],
        rating: 4.11
    },
    {
        title: 'A Gentleman in Moscow',
        authors: ['Amor Towles'],
        rating: 4.36
    }
]

    const goodBook = booksA.find(b => b.rating >= 4.3);

    const neilBook = booksA.find(b => (b.authors.includes('Neil Gaiman')));


    //FILTER
    //Creates an array with all elements that
    //pass the test implemented by the provided function

    const numsFilter = [ 9, 8, 7, 6, 5, 4, 3, 2, 1 ];
    const odds = numsFilter.filter(n => {
        return n % 2 === 1 // our callback returns true or false
        // if it returns true, n is added to the filtered array
    });

    const evens = numsFilter.filter(n => n % 2 == 0);

    const smallNums = numsFilter.filter(n => n < 5);

    const booksFilter = [
        {
            title: 'Good Omens',
            authors: ['Terry Pratchett', 'Neil Gaiman'],
            rating: 4.25,
            genres: ['fiction', 'fantasy']
        },
        {
            title: 'Changing My Mind',
            authors: ['Zadie Smith'],
            rating: 3.83,
            genres: ['non-fiction', 'essays']
        },
        {
            title: 'Bone: The Complete Edition',
            authors: ['Jeff Smith'],
            rating: 4.42,
            genres: ['fiction', 'graphic novel', 'fantasy']
        },
        {
            title: 'American Gods',
            authors: ['Neil Gaiman'],
            rating: 4.11,
            genres: ['fiction', 'fantasy']
        },
        {
            title: 'A Gentleman in Moscow',
            authors: ['Amor Towles'],
            rating: 4.36,
            genres: ['fiction', 'historical fiction']
        },
        {
            title: 'The Name of the Wind',
            authors: ['Patrick Rothfuss'],
            rating: 4.54,
            genres: ['fiction', 'fantasy']
        },
        {
            title: 'The Overstory',
            authors: ['Richard Powers'],
            rating: 4.19,
            genres: ['fiction', 'short stories j']
        },
        {
            title: 'The way of Kings',
            authors: ['Brandon Sanderson'],
            rating: 4.65,
            genres: ['fantasy', 'epic']
        },
        {
            title: 'Lord of the flies',
            authors: ['William Golding'],
            rating: 3.67,
            genres: ['fiction']
        }
    ]

    const goodBooksA = booksFilter.filter(b => b.rating > 4.3);

    const fantasyBooks = booksFilter.filter(b => {
      return  b.genres.includes('fantasy')
    }
)

//EVERY
//tests whether all elements in the array pass the
//provided function. It returns a Boolean value

const wordsG = ["dog", 'dig', 'log', 'bag', 'wag'];

let isWordGreaterThanThreeLetters = wordsG.every(word => {
    return word.length === 3;
}) //true

wordsG.every(word => word[0] === 'd'); //false

wordsG.every(w => {
    let last_letter = w[w.length -1];
    return last_letter === 'g'
})  //true


//SOME
//Similar to every, but returns true if ANY of 
//the array elements pass the test , 

const wordsS = ['dog', 'jello', 'log', 'cupcake', 'bag', 'wag'];

// Are there any words longer than 4 characters?
wordsS.some(word => {
    return word.length > 4;
}); //true

//Do any words start with 'Z'?
wordsS.some(word => word[0] === 'z'); //false

//Do any words contain 'cake'?
words.some(w => w.includes('cake'));


//SORT  -- default is to convert to string before sorting
const prices = [400.50, 3000, 99.99, 35.99, 12.00, 9500];

const sortedPrice = prices.sort();

const ascSort = prices.sort(( a, b ) => a - b);
//[12, 35.99, 99.99, 400.5, 3000, 9500]

const descSort = prices.sort((a,b) => b - a);
 //[9500, 3000, 400.5, 99.99, 35.99, 12]


const booksForSorting = [
    {
        title: 'Good Omens',
        authors: ['Terry Pratchett', 'Neil Gaiman'],
        rating: 4.25,
        genres: ['fiction', 'fantasy']
    },
    {
        title: 'Changing My Mind',
        authors: ['Zadie Smith'],
        rating: 3.83,
        genres: ['non-fiction', 'essays']
    },
    {
        title: 'Bone: The Complete Edition',
        authors: ['Jeff Smith'],
        rating: 4.42,
        genres: ['fiction', 'graphic novel', 'fantasy']
    },
    {
        title: 'American Gods',
        authors: ['Neil Gaiman'],
        rating: 4.11,
        genres: ['fiction', 'fantasy']
    },
    {
        title: 'A Gentleman in Moscow',
        authors: ['Amor Towles'],
        rating: 4.36,
        genres: ['fiction', 'historical fiction']
    },
    {
        title: 'The Name of the Wind',
        authors: ['Patrick Rothfuss'],
        rating: 4.54,
        genres: ['fiction', 'fantasy']
    },
    {
        title: 'The Overstory',
        authors: ['Richard Powers'],
        rating: 4.19,
        genres: ['fiction', 'short stories j']
    },
    {
        title: 'The way of Kings',
        authors: ['Brandon Sanderson'],
        rating: 4.65,
        genres: ['fantasy', 'epic']
    },
    {
        title: 'Lord of the flies',
        authors: ['William Golding'],
        rating: 3.67,
        genres: ['fiction']
    }
]

const ascBooks = booksForSorting.sort((a,b) => b.rating - a.rating);


//REDUCE

const numsRed = [ 3, 4, 5, 6, 7];
//The first value(3) is the accumulator and the (4) is the current Value
 const product = numsRed.reduce((accumulator, currValue) => {
    return accumulator * currValue;
});

let grades = [ 89, 96, 58, 77, 62, 93, 81, 99, 73 ];

const topScore = grades.reduce((max,currVal) => {
    if(currVal > max){
        return currVal
    }
    return max;
});

// A shorter option with Math.max and Implicicit return

const topScore1 = grades.reduce((max, currVal) => (Math.max(max,currVal))

);

//Specifying the PreviousValue or accumulator value using a Reduce function

const sumRed = [10, 20, 30, 40, 50].reduce((sum, currVal) => {
    return sum + currVal;
},1000);

const votes =
['y','y','n','y','n','y','n','y','n','n','n','y','y']

const results = votes.reduce((tally,val) => {},{})





















function Display(input){
    console.log(input);
}


function Seperator(){
    console.log("------------------------------------------------------");
}