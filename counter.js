//write a function which will count how many times it has been called
function outer(){
    let count=0;
    function inner(){
        count++;
        console.log(count);
    }
    return inner;
    
}
const c=count();
c();
c();
c();

