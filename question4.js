//write a program to count the vowels of a word
// let str="SoumyA KaR"
// let count=(str.match(/[aeious]/gi) || []).length;
// console.log(count);
//method 2
function vowel_count(str){
    return str.match(/[aeiou]/gi).length;
}
console.log(vowel_count('I am name is Soumya sanghamitra kar'));