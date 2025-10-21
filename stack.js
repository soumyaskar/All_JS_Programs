// let arr1=[1,3,4,5,6]
// console.log(arr1);
// arr1.push(7);
// console.log(arr1);
 
//  arr1.pop(6);
//  console.log(arr1)
// arr1.shift();
// console.log(arr1)
// take a string as input and reverse it
// let str="soumyakar";
// let reverse="";
// for(let i=0;i<str.length-1;i>= 0 ;i--){
//     reverse +=str[i];


// }
// console.log(reverse);
// 2nd way
// function reverse(a){

// return a.split('').reverse('').join('');
// }
// let a="soumya";
// console.log(reverse(a))
// make it using the stack
let str = "soumyakar";
let stack = [];
for (let char of str) {
  stack.push(char);
}
let reversedStr = "";
while (stack.length > 0) {
  reversedStr += stack.pop();
}
console.log(reversedStr);
