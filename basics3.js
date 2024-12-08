var arr1 = Array(6)
var arr1 = new Array(10, 20, 30, 4, 5, 6, 7)
console.log(arr1)
var marks = [1, 20, 30, 40, 50]
console.log(marks)
console.log(marks[1])
marks[2] = 30
console.log(marks[2])
console.log(marks.length)
console.log("****************")
marks.push(100)
console.log(marks)
marks.pop()
marks.unshift(12)
console.log(marks)

console.log(marks.includes(50))
console.log(marks.indexOf(60))
let submarks = marks.slice(2, 5)
console.log(submarks)

console.log("****************")
// Reduce
let sum = 0
for (let i = 0; i < marks.length; i++) {
    sum += marks[i]
}
console.log("Sum of marks: " + sum)

let total = marks.reduce(
    (sum, eachMark) => sum + eachMark
    , 0
)
console.log(total)
console.log("****************")

//Filter

var score = [12, 13, 14, 15, 16]
var evenScore = []
for (let i = 0; i < score.length; i++) {
    if (score[i] % 2 == 0)
        evenScore.push(score[i])
}
console.log("evenScore : " + evenScore)
let evenScore2 = score.filter(eachScore => eachScore % 2 == 0)
console.log("evenScore2 : " + evenScore2)

console.log("****************")

//Map to multiply each value of array by 3

var mappedEvenScore = evenScore.map(score => score * 3)
console.log(mappedEvenScore)

var sumMappedScore = mappedEvenScore.reduce((sum, eachValue) => sum + eachValue, 0)
console.log(sumMappedScore)

//Chaining all 3 methods
console.log("Chaining all 3 methods")

let score1 = [12, 13, 14, 15, 16]

let sumOfMappedFilterArray =
    score1.filter(eachVal => eachVal % 2 == 0)
        .map(eachVal => eachVal * 3)
        .reduce((sum, eachVal) => sum + eachVal, 0)

console.log(sumOfMappedFilterArray)
console.log("****************")

//Sorting String:

let fruits = ["apple", "banana", "mango", "chiku"]

//Sorting in ascending order
console.log(fruits.sort()
)
//Sorting in descending order
console.log(fruits.reverse()
)

//Sorting numbers:
var nums = [12, 18, 13, 17, 21, 3]

//Ascending order:
console.log("Ascending order:" + nums.sort((a, b) => a - b))

//Descending order:
console.log("Descending order:" + nums.sort((a, b) => b - a)
)