// LESSON 1 - Datatypes and keywords var, let and const

console.log("Hello World")
let a = 4
let b = 4.5
var c = "Gaurav"
let d = true
console.log(a+" = "+typeof(a))
console.log(b+" = "+typeof(b))
console.log(c+" = "+typeof(c))
console.log(d+" = "+typeof(d))
console.log(e=a+b)
const f = a+e;
console.log(f)
console.log(!d)
console.log(!!d)

var c = a+b
console.log("Var: redeclaring & reassigning variables both are posible")
console.log(c)

d = false
console.log("Let: redeclaring not but reassigning is possible")
console.log(d)

f = 3  // this raises an error - TypeError: Assignment to constant variable.
console.log(b)
console.log("Const: neither redeclaring nor reassigning is possible")
