// function calculator(a,b, operator){
    
//    if(operator==="+"){
//     console.log("sum of the number",a+b);

//    }
//    if(operator==="-"){
//     console.log("substraction of the number is",a-b);
//    }
//     if(operator==="/"){
//     console.log(" the division", a/b);

//    }
//    if (operator==="*"){
//     console.log("the mod of the number",a*b);

//    }
//    if (operator==="%"){
//     console.log("the mod of the numner",a%b);

//    }
// }
// calculator(12,6,"+");
// function calculator(a,b,operator){
//     if(operator==="+") return a+b;
//     if(operator==="-") return a-b;

//     if(operator==="*") return a*b;

//     if(operator==="/") return a/b;

//     if(operator==="%") return a%b;

//     if(operator==="**") return a**b;


// }
// console.log(calculator(5,6,"+"));
// by using switch case
const calculator= function(num1,num2,operator){
    switch(operator){
        case '+':
            result=num1+ num2;
        case '-':
            result=num1-num2;
        case '*':
            result=num1*num2;
        case '/':
           if (num2==0){
            return "error:Division by zero is not allowed";
           }
           result=num1/num2;
           break;
           default:
            return "Error: Invalid operator";
    }
    return result;
}
console.log(calculator(10,5,'+'));
console.log(calculator(10,5,'-'));
console.log(calculator(10,5,'*'));
console.log(calculator(10,5,'/'));
console.log(calculator(10,5,'%'));
