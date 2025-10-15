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