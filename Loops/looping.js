//FOR LOOPS

for(let i = 1; i <= 10; i++){
    console.log('HELLO', i);
}

for(let num = 1; num <= 20; num++){
    console.log(`${num} * ${num}  =  ${num * num}`);
}

//FOR LOOPS + ARRAYS
const animals = ['lions', 'tigers', 'bears'];

for(let i = 0; i < animals.length; i++){
    console.log(i, animals[i]);
}

const examScores = [ 98, 77, 84, 91, 57, 66];

for(let i = 0; i < examScores.length; i++){
    console.log(i, examScores[i]);
}

const myStudents = [
    {
        firstName : 'Zeus',
        grade : 86
    },
    {
        firstName : 'Artemis',
        grade : 97
    },
    {
        firstName : 'Hera',
        grade : 72
    },
    {
        firstName : 'Apollo',
        grade : 90
    }
]

for(let i = 0; i < myStudents.length; i++){

    let student = myStudents[i];
    console.log(`${student.firstName} scored ${student.grade}`);
}

const word = 'stressed';
let reversedWord = ""
for(let i = word.length - 1; i >= 0; i--){
    reversedWord += word[i];
    console.log(reversedWord);
}

//WHILE LOOPS
let j = 0;

while(j <= 5){

    console.log(j)
    j++
}

const target = Math.floor(Math.random() * 10);
let guess = Math.floor(Math.random() * 10);

while(guess !== target){
    console.log(`Target: ${target}  Guess: ${guess}`);
    guess = Math.floor(Math.random() * 10);

}

console.log(`Target: ${target}  Guess: ${guess}`);
console.log(`CONGRATS YOU WIN!!`);



//BREAK KEYWORD
for(let i = 0; i < 10; i++){
    console.log(i);

    if(i === 5){
        break;
    }
}


const target1 = Math.floor(Math.random() * 10);
let guess1 = Math.floor(Math.random() * 10);

while(true){
    if(target1 === guess1){
        break
    }
    console.log(`Target: ${target1}  Guess: ${guess1}`);
    guess1 = Math.floor(Math.random() * 10);

}
console.log(`Target: ${target}  Guess: ${guess}`);
console.log(`CONGRATS YOU WIN!!`);




//FOR...OF
let subreddits = [ 'soccer', 'popheads', 'cringe', 'books']

for(let subreddit of subreddits){
    console.log(subreddit);
}

for(let char of 'cockadoodledo'){
    console.log(char.toUpperCase());
}

const magicSquare = [
    [ 2, 7, 6 ],
    [ 9, 5, 1 ],
    [ 4, 3, 8 ]
]
console.log("-----------------------------------------");
for(let i = 0; i < magicSquare.length; i++){
    let row = magicSquare[i];
    let sum = 0;
    for(let j = 0; j < row.length; j++){
        console.log(row[j]);
        sum += row[j]
    }
    console.log(`${row} summed to ${sum}`)
}

for(let row of magicSquare){
    let sum = 0;
    for(let num of row){
        sum += num;
    }
    console.log(`${row} summed to ${sum}`);
}



//FOR ...OF with Objects
const movieReviews = {
    Arrival               : 9.5,
    Alien                 : 9,
    Amelie                : 8,
    'In Bruges'           : 9,
    Amadeus               : 10,
    'Kill Bill'           : 8,
    'Little Miss Sunshine': 8.5,
    Coraline              : 7.5
}

for(let movie of Object.keys(movieReviews)){
    console.log(movie, movieReviews[movie]);
    
}


// FOR...IN

const jeopardyWinnings = {
    regularPlay         : 2522700,
    watsonChallenge     : 300000,
    tournamentOfChampions : 3012342
}

console.log('------------------------------------hh ')
for(let prop in jeopardyWinnings){
    console.log(prop);
}