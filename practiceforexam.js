//  console.log(sum(2,4));

// var sum= function(a,b){
//     return a+b;
// }
// // console.log(sum(2,4));
// function  Person  ()  { 
// this  .age =  0  ; 
// setInterval  (  function  growUp  ()  { 
// // In this callback, `this` does not refer  to the Person instance. 
// // It refers to the global object, so this.age  is NaN. 
// this  .age++; 
// },  1000  ); 
// } 
// const  p =  new  Person();
// const person = {
//   name: "Soumya",
//   greet: function () {
//     setTimeout(() => {
//       console.log("Hi " + this.name);
//     }, 1000);
//   }
// };

// person.greet();
// console.log("soumya");
// console.log(typeof null);
// let a=5
// let b="5";
// console.log(a+b);
// console.log("5"+5);
// function sum(a,b){
    

// }
// sum();
// const sum=function(a,b){

// }
// console.log(sum());
// let a=5
// function Test(){
//     console.log(a);
//     let a=20

// }
// Test()
// const obj = {
//   x: 5,
//   getX: function() {
//     return this.x;
//   }
// };
// const extract = obj.getX;
// console.log(extract());
// function outer(){
//   let count = 0;
//   return function inner(){
//     count++;
//     return count;
//   }
// }
// const fn = outer();
// console.log(fn());
// console.log(fn());
let count = 0;

do {
  count++;
} while (count < 5);

console.log(count);
