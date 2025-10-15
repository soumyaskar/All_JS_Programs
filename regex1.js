// find the vowels from your name and store the left consonants in an array by using regex
const name="Soumya";
const vowels=name.match(/[aeiou]/gi)||[];
const consonant=name.match(/[^aeiou]/gi)||[];
console.log(vowels);
console.log(consonant);




