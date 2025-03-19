//Functions

function add(a, b) {
    return a + b
}
let sum = add(2, 3);
console.log("Sum of two numbers is: " + sum);

//Anonymous function: 
let sumOfInteger = function (c, d) {
    return c + d
}
console.log(sumOfInteger(3, 4));

// Arrow function:
let sumOfNum = (a, b) => a + b 
console.log(sumOfNum(2, 3));

//Scope:
//var Scope: Global or functional level (not block level : no separate variable for block level)
//let scope: Global or block level {} (separate variable for block level)
//let and var:  both can be reassigned
//const - cannot be reassinged

//Global level
var greet = "Morning-Global level"
let greeting = "Morning- Global level"

if (1 == 1) { //block level
    var greet = "Afternoon- block level"
    let greeting = "Afternoon- block level"
}

function saySomething() { //function level
    var greet = "Good Night- function level"
    let greeting = "Good Night-function level"
    console.log(greet)
    console.log(greeting)
}
saySomething()
console.log(greet)
console.log(greeting)
