// // if statement
// for(i=0;i<=45;i++){
//     if(i%2==0){
//     }
//     console.log(i)
    
//     }
// // elseif
// let age=56;
// if(age<=18){
//     console.log("they cannot vote")
// }
// else if(age>=18){
//    console.log("they can vote")

// }
// else{
//     console.log("hujhhygujh")
// }
// switch statement
let fruit = "apple";
let fruitmessage;
switch (fruit) {
    case "banana":
        fruitmessage = "Banana is yellow";
        break; 
    case "apple":
        fruitmessage = "apple is red";
        break; 
    default:
        fruitmessage = "unknown fruits";
}
console.log(fruitmessage); 
// break statement
const action="sat_hello";

switch(action){
    case "sat_hello":{
        console.log("message1")
        break;
    }
    case "say_hi":{
        console.log("message2");
        break;

    }
}