// FUNCTION DECLARATION/STATEMENT

function grumpus(){
    console.log('ugh...you again...');
    console.log('for the last time...');
    console.log('LEAVE ME ALONE!!!');
}

grumpus();

function rollDie(){
    let roll = Math.floor(Math.random() * 6) + 1;
    console.log(`Rolled: ${roll}`);
}

// we can call a function inside another function.
function throwDice(){
    rollDie();
    rollDie();
    rollDie();
    rollDie();
    rollDie();
    rollDie();
}

throwDice();


//FUNCTION ARGUMENTS
function greet(nickName){
    console.log(`Hi ${nickName}`);
};

greet('Tim');

function square(num){
    console.log(num * num);
}

square(4);

function sum( x, y ){
    console.log(x + y);
}

sum( 9, 4 );

function divide( a, b){
    console.log( a / b );
}

divide( 8, 2 ); 

//RETURN statements

function add1( x, y ){
    return x + y;
}

let total = add1(  78,  93);

function isPurple(color){
    if(color.toLowerCase() === 'purple'){
        return true;
    }
   
    return false;
   
}

function IsPurpleSimplified(color){
    return color.toLowerCase() === 'purple';
}

function containsPurple(arr){
    for(let color of arr){
        if(color === 'purple' || color === 'magenta'){
            return true;
        }
    }
    return false;
}


//EXERCISE 1
// Write a isValidPassword function
// It accepts 2 arguments: password and username
// Password must:
// - be at least  8 characters long
// - cannot contain spaces
// - cannot contain the username

// If all requirements are MediaStreamTrack, return true
// otherwise:false

function isValidPassword(password, username){
   
    return password.length >= 8 && password.indexOf(' ') === - 1 && !password.indexOf(username) === - 1;
}

isValidPassword('gambo','gam');

function isValidPassword1(password, username){
    const tooShort = password.length < 8;
    const hasSpace = password.indexOf(' ') !== -1;
    const tooSimilar = password.indexOf(username) !== -1;

    if(tooShort || hasSpace || tooSimilar) return false
    return true;
}


//EXERCISE 2
// Write a function to find the average value in an
// array of numbers
//avg([0,50]);

function avg(arr){
    console.log(`length of array ${arr.length}`);
    let avg = 0.0;
    let sum = 0;
    for(let i = 0; i <= arr.length - 1; i++){
        sum += arr[i];
        console.log(sum);
    }
    avg = sum / arr.length

    return avg;
}

const numarray = [5,5,5,5];

let avgNum = avg(numarray);
console.log(`average number -> ${avgNum}`);

function avg2(arr){
    let avg = 0.0;
    let sum = 0;
    for(let num of arr){
        sum += num;
    }
    console.log(sum);
    console.log(arr.length)
    avg = sum / arr.length;

    return avg;
}

let avgNum2 = avg2(numarray);
console.log(`average number -> ${avgNum2}`);

