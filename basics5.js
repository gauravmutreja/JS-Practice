// Strings

//you can write string in single or double quotes
let day = "Monday "
let day1 = 'Tuesday'
//Length of String
console.log(day.length)

//Create substring
console.log(day.slice(0,3)) //Mon
console.log(day.slice(3,6)) //day

//Value of char at ith index
console.log(day[3]) // d

//Split String into arrays
let splitDays= day.split("n")
console.log("splitDays[0]: "+splitDays[0])
console.log("splitDays[1]: "+splitDays[1])
console.log("Length of splitDays[1]: "+splitDays[1].length)
console.log("Length of splitDays[1] after trim: "+splitDays[1].trim().length)
console.log("**************************")

//parseInt : to convert string to number

let date = '23' //string type as written in single quotes
let nextDate = '27'
let diffDate = nextDate - date;
console.log(diffDate);
console.log("type of diffDate: "+typeof(diffDate));
console.log("type of (nextDate-date): "+typeof((nextDate-date)));
let diff = parseInt(nextDate)-parseInt(date) //convert string to number
console.log("This is the diff in num: "+diff)
console.log("This is the diff in String: "+diff.toString())// to convert number to String
console.log("**************************")

//Program to find no. of occurence of a word in string
let quote = day + "is a funday today"
console.log("Quote: "+quote)

let val = quote.indexOf("day") //that is first occurence of character 'd' in string
console.log("First occurence of day is at index: "+val)
let count
while(val!=-1){
    count++;
    val= quote.slice(val+1);
}

//OR

// let val = 0;
// let count =0;
// while(val!=-1){
//     val=quote.indexOf("day",val)
//     //console.log("Next occurence of day is at index: "+val)
//     if(val!=-1)
//     {   val++
//         count++
//     }
// } when it will not find the word day, it will return -1 and exit the loop.
console.log("No. of time day is repeated : "+count)