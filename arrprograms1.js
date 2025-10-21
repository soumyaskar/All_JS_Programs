 let arr1=[48,12,66,68,1];
 let newarr=[];

for(let i=0;i<=arr1.length;i+=2){
    newarr.push(newarr[i]);
}
console.log(newarr);
//linear search
arr2=[1,2,3,45,56,7,89]
 let x=2;
let y=10;
for( let i=0;i<=arr2.length;i++){
    if(arr2[i]==x){
        console.log("found at :" +i);
    }
    else if(arr2[i]==y){
        console.log("find at : " +i)
    }

}

//using function
let arr=[1,2,3,4,5]
let x=2;
let
// find the greatestfrom this array
let arr3 = [10, 20, 4, 556, 4891, 1, 12, 46];
let max = arr3[0]; 

for (let i = 1; i < arr3.length; i++) {
    if (arr3[i] > max) {
        max = arr3[i];
    }
}

console.log("Greatest number is:", max);
function largest(arr3) {
    let max = arr3[0];
    for (let i = 1; i < arr3.length; i++) {
        if (arr3[i] > max) {
            max = arr3[i];
        }
    }
    console.log("Largest number is:", max);
}

function largest(arr3) {
    let min = arr3[0];
    for (let i = 1; i < arr3.length; i++) {
        if (arr3[i] < min) {
            min = arr3[i];
        }
    }
    console.log("Smallest number is:", min);
}

let arr3 = [10, 20, 4, 556, 4891, 1, 12, 46];
largest(arr3);

//find the second largest
let arr=[12,35,1,10,34];
let arr2=arr.sort();
console.log(arr2[3]) 



function secondlargest(arr){
    let largest=-1,secondlargest=0;
    for( let i=0;i<arr.length;i++){
        if(arr[i]>largest){
            largest=arr[i]//6
        }
    }
    for(let i=0;i<arr.length;i++){
        if(arr[i]> secondlargest && arr[i] !=largest){
            secondlargest=arr[i];
        }
    }
    return secondlargest;
    

}
console.log(secondlargest([2,3,6,6,5]));
reverse
let arrs = [7, 6, 5, 4, 3, 2, 1];
let start = 0;
let end = arrs.length - 1;

while (start < end) {
    // Swap elements
    let temp = arrs[start];
    arrs[start] = arrs[end];
    arrs[end] = temp;

    start++;
    end--;
}

console.log(arrs);
function reversed(){
    arrs.reverse();



}
const arr=[1,2,3,4,5,6];
reversed(arr);
console.log(arr.join("  "))
complex code 
 let arr11=[1,1,2,1,3,5,1]
// find the element having most occurance and if 

function majorityelement(){
    
}