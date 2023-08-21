//FUNCTION EXPRESSION

//Anonymous function expression
const square = function(num){
    return num * num;
}
// console.log(square(7));

//Named Function Expression
const product = function multiply(x,y){
    return x * y;
}


//FUNCTIONS as OBJECTS
function add(x,y){
    return x + y;
}

const subtract = function(x,y){
    return x - y;
}

function multiply(x,y){
    return x * y;
}

const divide = function(x,y){
    return x / y;
}

const operations = [add, subtract, multiply, divide]

let op1 = operations[0](5,6);  //11
let op2 = operations[1](5,6);  //-1
let op3 = operations[2](5,6);  //30
let op4 = operations[3](5,6);  //0.833333333

for(let func of operations){
    let result = func(30, 5);
    console.log(result);
}

const thing = {
    doSomething : multiply
}


//FUNCTIONS as Arguments
function callTwice(func){
    func();
    func();

}
function laugh(){
    console.log("HAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHA");
}
callTwice(laugh);

function callThreeTimes(f){
    f();
    f();
    f();
}

function cry(){
    console.log("BOO HOO I'M SO SAD");
}

callThreeTimes(cry);

function repeatNTimes(action, num){
    for(let i = 0; i < num; i++){
        action();
    }
}

repeatNTimes(cry,6);


//RETURNING FUNCTIONS
//The outer function makebetweenFunc returns the inner function
function makeBetweenFunc(min, max){
    return function(val){
        return val >= min && val <= max;
    }
}

const inAgeRange = makeBetweenFunc(18,100);

inAgeRange(17); //false
inAgeRange(68); //true


function multiplyBy(num){
    return function(x){
        return x * num;
    }
}

const triple = multiplyBy(3);
triple(6); //18

//CALLBACKS

function grumpus(){
    alert("GAAAAAAAAAH GO AWAY!");
}
setTimeout(grumpus, 5000);

setTimeout(function(){
    alert("WELCOME!")
},3000);

const btn = document.querySelector('button');

btn.addEventListener('click',grumpus);