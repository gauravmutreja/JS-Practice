// 3 ways to create an array
var arr = Array(6) // just give the length
var arr = new Array(1, 2, 10, 50, 60) //give actual elements while creating an obj
console.log("arr: " + arr);

var marks = [10, 20, 30, 40, 50] // directly the elements in box braces
console.log(marks);



// print 3rd element 
console.log(marks[2]);
// Update element using index
arr[2] = 99
console.log(marks);
// Find length of array
console.log(arr.length)
console.log("****************")

// add element at the end
marks.push(100)
console.log(marks)

// Remove the last element
marks.pop()
console.log(marks)

// add element at the beginning
marks.unshift(12)
console.log(marks)

// Remove the first element
marks.shift()
console.log(marks)

// Remove elements from the middle  (index, no of elements to remove)
marks.splice(2, 2)
console.log(marks)  // 10,20,50

// Add elements in the middle (index, no of elements to remove, elements to add)
marks.splice(2, 0, 3, 4)
console.log(marks)  // 10,20,3,4,50

// Create a sub array from existing aray using slice(startIndex, lastIndex+1)
subMarks = arr.slice(3, 6)
console.log("SubMarks: " + subMarks)
console.log("Final array = " + marks)

// Check if element exist in array using includes()
console.log("Array contains/includes element 50: " + marks.includes(50))
console.log("Array contains/includes element 60: " + marks.indexOf(60))

console.log("****************")
// Traditional way to calculate sum of all elements in array
let sum = 0
for (let i = 0; i < marks.length; i++) {
    sum += marks[i]
}
console.log("Sum of marks: " + sum)

// Using reduce method
let total = marks.reduce((sum, eachMark) => sum + eachMark, 0)
console.log(total)
console.log("****************")

// Traditional way to find even numbers in array
var score = [12, 13, 14, 15, 16]
var evenScore = []
for (let i = 0; i < score.length; i++) {
    if (score[i] % 2 == 0)
        evenScore.push(score[i])
}
console.log("evenScore using traditional method: " + evenScore)

// Using filter method
let evenScore2 = score.filter(eachScore => eachScore % 2 == 0)
console.log("evenScore2 using filter method : " + evenScore2)

console.log("****************")

// Traditional way to multiply each even number by 3 and then sum all
var sumEvenScore = 0
for (let i = 0; i < evenScore.length; i++) {
    sumEvenScore += evenScore[i] * 3
}
console.log("sumOfEvenScore  using traditional method: " + sumEvenScore)  // 12*3 + 14*3 + 16*3 = 18 + 42 + 48 = 108

// Using map method
var mappedEvenScore = evenScore.map(score => score * 3)
console.log("mappedEvenScoreArray: " + mappedEvenScore)
console.log("****************")

//Chaining all 3 methods
console.log("Chaining all 3 methods: ")

let score1 = [12, 13, 14, 15, 16]

let sumOfMappedFilterArray =
    score1.filter(eachVal => eachVal % 2 == 0) // filter even numbers
        .map(eachVal => eachVal * 3) // multiply each even number by 3
        .reduce((sum, eachVal) => sum + eachVal, 0) // sum all the numbers
console.log("sumOfMappedFilterArray: " + sumOfMappedFilterArray)
console.log("****************")

//Sorting String:

let fruits = ["apple", "banana", "mango", "chiku"]

// Sorting of strings in ascending order
console.log(fruits.sort()
)
//Sorting of strings in descending order
console.log(fruits.reverse()
)

//Sorting numbers:
var nums = [12, 18, 13, 17, 21, 3]

//Ascending order:
console.log("Ascending order: " + nums.sort((a, b) => a - b))

//Descending order:
console.log("Descending order: " + nums.sort((a, b) => b - a)
)