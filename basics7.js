//Classes

export default class Person { // module.exports used to export class to another file (making it public )
    
    //Properties
    age = 27 // this is a class property and not instance prop. Hence for every instance/ obj, value of age would be same
    // location = "Canada"
    get location() // another way to define property. This is a property and not a method as we use 'get' keyword
    {
        return "Canada"
    }

    //Constructor : A method which executes bydefault when you create an obj of the class
    constructor(firstName, lastName) {
        this.firstName = firstName //firstname property of class is being assigned value of firstName passed in parameter
        this.lastName = lastName
    }

    //Another way to define constructor : A class may only have one constructor
    /*constructor() {
        this.firstName = "Rahul"
        this.lastName = "Shetty"
    }*/

    
    //Method
    fullName() {
        return this.firstName + " " + this.lastName
    }



}
//Acces property of class:
let obj = new Person();
console.log(obj);

let personObj = new Person("Arjun", "Shetty")
console.log(personObj.location);
console.log(personObj.fullName())
console.log(personObj)

let personObj2 = new Person("Shyam", "Hinduja")
console.log(personObj2.fullName())
console.log(personObj2)


