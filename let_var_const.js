// let and const keywords are block scoped
// redeclaration is allowed in let
if(true){
    let blockscopedvar="I am block scoped"
    console.log("blockscoped var");
}
console.log(blockscopedvar);//gives a reference error
//  temporal dead zone
console.log(x)//here we only give the value x=20 but not yet initialize

var x=20;
{
// console.log(x)
}
// var is global scoped
function testvar(){
    console.log(myvar);//opuput is undefined
    if(true){
        var myvar="hello Soumya";
    }
    console.log(myvar)
}
testvar();