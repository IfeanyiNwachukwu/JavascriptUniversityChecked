// STRINGS

// String index
//Each character in a string has a corresponding index(a positional number)

let mySong = "surfin' USA";
//DisplaySingle(mySong[0])


//String 
//toUpperCase
let msg = "you are so grounded mr"
let newmsg = msg.toUpperCase()

DisplayAll(msg, newmsg);

//trim
let color = "  purple  ";
let trimmedColor = color.trim();
DisplayAll(color, trimmedColor);


//indexOf
let tvShow = "catdog";

tvShow.indexOf('cat');  // 0
tvShow.indexOf('dog');  // 3
tvShow.indexOf('z');    // -1 (not found)

// Slice
let str = 'supercalifragilisticexpialdocious';

str.slice(0,5); //'super'
str.slice(5);   // 'califragilisticexpialdocious'

//Replace
let sporty = "Baseball is Entertaining";

let reSporty = sporty.replace("Baseball", "Football");

DisplayAll(sporty, reSporty);





function DisplayAll(displayName, displayvalue){
   console.log(`${displayName}  ->  ${displayvalue}`)
}

function DisplaySingle(displayName){
    console.log(`${displayName}`)
 }
 

