//COMPARISONS
// == equality
5 == 5        //true
'b' == 'c'    //false
7  == '7'     //true
true == false //false
0 == false    //true
null == undefined //true


// === strict equality
5 === 5;  //true
1 === 2;  //false
2 === '2';//false
false === 0 //false

// same applies for != and !==
10 != '10'; //false
10 !== '10' //true


//IF
//Example 1
let rating = -3;

if(rating === 3){
    console.log("YOU ARE A SUPERSTAR!");
}
else if(rating === 2){
    console.log("MEETS EXPECTATION");
}
else if(rating === 1){
    console.log("NEEDS IMPROVEMENT")
}
else{
    console.log("INVALID RATING");
}

//Example 2
let num = 37;

if(num % 2 !== 0){
    console.log("ODD NUMBER");
}

//Example 3
let highScore = 1600;
let userScore = 2000;

if(userScore >= highScore){
    console.log(`Congrats, you have the new high score of ${userScore}`);
    highScore = userScore;
}
else{
    console.log(`Good Game. Your score of ${userScore} did not beat the highscore of ${highScore}`);
}

// NESTING
let password = "cat dog";
if(password.length >= 6){
    if(password.indexOf(' ') !== -1){
        console.log("Password cannot include spaces.")
    }
    else{
        console.log("Valid Password!!");
    }
}
else{
    console.log("Password too short!!");
}




//LOGICAL OPERATORS
let password1 = 'taco tuesday';

if(password.length >= 6 && password.indexOf(' ') === -1){
    console.log("Valid Password!");
}
else{
    console.log("INVALID PASSWORD!");
}

let age = 76;

if(age < 6 || age >= 65){
    console.log('You get in for free!');
}
else{
    console.log('That will be $10 please');
}

//SWITCH
let day = 3;

switch(day){
    case 1:
        console.log("Monday");
        break;
        case 2:
        console.log("Tuesday");
        break;
        case 3:
        console.log("Wednesday");
        break;
        case 4:
        console.log("Thursday");
        break;
        case 5:
        console.log("Friday");
        break;
        case 6:
        console.log("Saturday");
        break;
        case 7:
        console.log("Sunday");        break;   
        default:
            console.log("INVALID DAY") ;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  wwwwwwww
}


//TERNARY

num === 7 ? console.log('LUCKY') : console.log('BAD')