// let n=5;
// let result = 1;
// for(let i=1;i<=n;i++){
//     result=result*i;
// }
// console.log("the factorial of",n ,"is" ,result);
// const division=(a,b)=>{

// }


const obj={
    name:"soumya",
    roll:123,
    age:19,
    branch:"CSE"
}
obj.age=20;
obj.name="suraj";
obj.college="nalanda"
console.log(obj);
const copy={...obj,a:555,b:"hello"}
console.log(copy);
const{name,roll,a,b}=copy;
console.log(name,roll,a,b);