//Classes

export default class Person { // module.exports used to export class to another file (making it public )

    age = 27 // this is a class property and not instance prop. Hence for every instance/ obj, value of age would be same
    // location = "Canada"
    get location() // This is a property and not a method as we use 'get' keyword
    {
        return "Canada"
    }
    // constructor() { // All instance property and variable are defined inside constructor
    //     this.firstName = "Tim"
    //     this.lastName = "Thakur"
    // }
    //Constructor : A method which executes bydefault when you create an obj of the class
    constructor(firstName, lastName) {
        this.firstName = firstName //firstname property of class is being assigned value of firstName passed in parameter
        this.lastName = lastName
    }
    
    //Method
    fullName() {
        return this.firstName + " " + this.lastName
    }



}
//Acces property of class:
let person = new Person("Rahul", "Shetty")
console.log(person)
console.log(person.fullName())
let person2 = new Person("Shyam", "Hinduja")
console.log(person2)
console.log(person2.fullName())
// let obj2 = new Person("Rahul", "Shetty")
// console.log(obj2.fullName())


