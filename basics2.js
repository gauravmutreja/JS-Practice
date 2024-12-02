let flag = true
if (!flag) {
    console.log("Condition Satisfied")
}
else {
    console.log(flag)
    console.log("Condition Not Satisfied")
}

let i = 0
do {
    console.log(i)
} while (i > 10);

console.log("************************");

//1st 3 Multiple of 2 and 5 
let n =0
for(k=1;k<=100;k++){
    if(k%2==0 && k%5==0){
        n++
        console.log(k)
        if(n==3)
            break
    }
    
}