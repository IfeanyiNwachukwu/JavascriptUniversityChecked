// OBJECT LITERAL
const fitBitData = {
    totalSteps: 308727,
    totalMiles: 211.7,
    avgCalorieBurn: 5755,
    workoutsThisWeek: '5 of 7',
    avgGoodSleep: '2:13'

};

// Accessing Object properties using dot notation
let totMiles = fitBitData.totalMiles;
DisplayAll('totalMiles',totMiles);
let averageGoodSleep = fitBitData.avgGoodSleep;
DisplayAll('average Good Sleep',averageGoodSleep);

//Accessing Object Properties with Array Brackets
const numbers = {
    100: 'one hundred',
    16:  'sixteen'
}

let hundred = numbers[100];
DisplayAll('hundred', hundred);

let sixteen = numbers[16];
DisplayAll('sixteen', sixteen);

const palette = {
    red : '#eb4d4b',
    yellow: '#f9ca24',
    blue: '#30336b',
    13: '#1330336b'
}

let redColour = palette['red'];
let thirt = palette[13]


//Updating and Adding Properties

const userReviews = {};

userReviews['queenBee49'] = 4.0;
userReviews.mrSmith78 = 3.5;
userReviews['colt'] = 5;

// Object Nesting

const student = {
    firstName : 'David',
    lastName :  'Jones',
    Strengths: ['Music', 'Art'],
    exams    : {
        midterm : 92,
        final   : 88
    }
};

let avgScore = (student.exams.midterm + student.exams.final)/2
let firstStrength = student.Strengths[0];


//Objects Inside Arrays

const shoppingCart = [
    {
        product : 'Jenga Classic',
        price   : 6.88,
        quantity: 1
    },
    {
        product : 'Echo Dot',
        price   : 29.99,
        quantity: 3
    },
    {
        product : 'Fire Stick',
        price   : 20.99,
        quantity: 2
    }
]

let jenga = shoppingCart[0].product;





















function DisplayAll(parama,value){
    console.log(`${parama} -> ${value}`);
}
