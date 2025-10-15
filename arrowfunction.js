const squre1=num=> num*num;
const substraction=(a,b)=> a-b;
const addarrow=(a,b)=>{
    return a+b;
}
const swapping=(a,b)=> {a=a+b;
b=a-b;
a=a-b;
return[a,b];
}
const sum = (a,b)=>{
    return a+b;
}
console.log(sum(2,5));
// imlicity return
const add=(a,b)=> a+b;
console.log(add(3,5));

const squre=(a)=> a*a;
console.log(squre(5));
// without any parameter
const getpi=()=>console.log("3.14");
getpi();