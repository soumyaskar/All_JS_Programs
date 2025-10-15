//validate user name(only etters and digits,5-10 chars)
function namevalidation(name){
    return /^[A-Za-z0-9]{5,12}$/.test(name);

}
console.log(namevalidation("Soumyakar123"));
console.log(namevalidation(suraj_mahapatra45));
console.log(namevalidation(namevalidation(erwe3)));
//find all the emails form the paragraph
const text = "Contact us at support@example.com or sales@company.org for more info.";
const emails = text.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g);
console.log(emails);
// replace all the spaces with hyphen in a string
let text2="hello my name is soumya"
let new_text=text2.replace(/ /g,"-");
console.log(new_text);