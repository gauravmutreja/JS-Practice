import Person from './basics7.js'

let person3 = new Person("Chris", "Edward")
console.log(person3.fullName())

//Inheritance
//Parent and child constructor should be same
//As the first step , call your parent class constructor in child class construtor

class Pet extends Person {  

    // constructor(firstName, lastName) {
    //     super(firstName, lastName) // calling parent class constructor
    // }

    get location() {
        return "BlueCross"
    }
}

let pet = new Pet("Sam","Sung")
console.log(pet.fullName())
console.log(pet.location)



