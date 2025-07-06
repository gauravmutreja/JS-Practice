// Objects : Collection of properties and methods
let person = {
    firstName : "Gaurav",
    lastName : "Sharma",
        age : 22,
    fullName : function fullName(){
        return this.firstName+" "+this.lastName;
    },
    fullNameRev : function() { // Anonymous way to define function
    return this.lastName + " " + this.firstName;
    }

}

//Access properties of object using . notation or array notation
console.log(person.fullName())
console.log(person.fullNameRev());
console.log(person["firstName"])
console.log(person.lastName) // can access both ways
console.log(person.age)
console.log("*******************")

//update value of property
person.firstName = "Sahil"
console.log(person.fullName()) // when you access using array notation, you need to use quotes


console.log("*******************")

//add property
person.gender = "Male"
console.log(person)
//delete property
delete person.gender
console.log(person)

//Check if property exist in object
console.log('age' in person)
console.log('gender' in person)

console.log("*******************")

//iterate over properties in a loop

for(let key in person){
    console.log(person[key])
}

