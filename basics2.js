//Lessons 3:  on JavaScript Basics if and else, do while, for loop, break and continue

let flag = false
console.log(flag)
if (!flag) {
    console.log("Condition Satisfied")
}
else {
    console.log("Condition Not Satisfied")
}

let i = 0
do {
    console.log(i)
    i++;
} while (i <= 10);

console.log("************************");

//1st 3 Multiple of 2 and 5 
let n =0
for(let k=1;k<=100;k++){
    if(k%2==0 && k%5==0){
        n++
        console.log(k)
        if(n==3)
            break
    }
    
}