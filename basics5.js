//String:
//you can write string in single or double quotes
let day = "Monday "
//Length of String
console.log(day.length)

//Create substring
console.log(day.slice(0,3)) //Mon
console.log(day.slice(3,6)) //day

//Value char at ith index
console.log(day[3]) // d

//Split String into arrays
let splitDays= day.split("n")
console.log(splitDays[0])
console.log(splitDays[1])
console.log("Length of splitDays[1]: "+splitDays[1].length)
console.log("Length of splitDays[1] after trim: "+splitDays[1].trim().length)

//parseInt : to convert string to number

let date = '23' //string type as written in single quotes
let nextDate = '27'
console.log(nextDate-date)
let diff = parseInt(nextDate)-parseInt(date) //convert string to number
console.log("This is the diff in num: "+diff)
console.log("This is the diff in String: "+diff.toString())// to convert number to String

console.log("**************************")
//Program to find no. of occurence of a word in string
let quote = day+ " is a funday today"
console.log(quote)
//let val = quote.indexOf("day")
//console.log("First occurence of day is at index: "+val)
let val =0
let count =0
while(val!=-1){
    val=quote.indexOf("day",val)
    if(val!=-1)
    {   val++
        count++
    }
}
console.log("No. of time day is repeated : "+count)

console.log("**************************")
