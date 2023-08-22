//- Add methods to objects
//- Use new object shorthand Syntax
//- Use Computed Properties
//- Understand Prototypes
//- Explain how the %$@# this 

 // Shorthand for Creating an Object
const getStats = (arr) => {

    const max = Math.max(...arr);
    const min = Math.min(...arr);
    const sum = arr.reduce((sum,r) => sum + r);
    const avg = sum / arr.length;

    return{
        max,
        min,
        sum,
        avg
    }
}

const reviews = [ 4.5, 5.0, 3.44, 2.8, 3.5, 4.0, 3.5 ];

const stats = getStats(reviews);

//COMPUTED PROPERTIES
const user = 'Jools';

const userRoles = {
    [user]: 'Admin'
}


//METHODS

const math = {
    multiply : function(x,y){
        return x * y;
    },
    divide : function(x,y){
        return x / y;
    },
    square : function(x){
        return x * x;
    },
    add : function(x,y){
        return x + y;
    }
}

// Shorthand syntax for Creating Objects

const mathA = {
    blah: 'Hi!',
    add( x, y ){
        return x + y;
    },
    multiply(x,y){
        return x * y;
    }

}

const auth = {
    username: 'TommyBot',
    login(){
        console.log("LOGGED YOU IN");
    },
    logout(){
        console.log("GOODBYE");
    }
}

//THIS
//it's a reference to the current object execution scope

function sayHi(){
    console.log("HI");
    console.log(this);
}

// use the keyword THIS to access other properties
// on the same object
const person = {
    firstName: 'Cherilyn',
    lastName:  'Sarkisian',
    nickName:  'Cher',
    fullName(){
        return `${this.firstName} ${this.lastName}`
    }
}

//The value of this depends on the invocation context
//of the function it is used in
