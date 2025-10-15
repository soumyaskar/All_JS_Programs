// let num=7;
// if( num % num==0 && num%1==0){
//     return true;
// // }
// function isprime(num){
//     if(num<=2) return false;
//     for(let i=2; Math.sqrt(num);i++){
//         if(num%i===0) return false;
//     }
//     return true;
        
    
// }
// console.log(isprime(19));
// Function to check if a number is prime
function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

let arr = [19,17,16,14,222,21];
let primeCheck;


for (let i = 0; i < arr.length; i++) {
    if (isPrime(arr[i])) {
        console.log("true");
    } else {
        console.log("false");
    }
}

console.log(primeCheck);
