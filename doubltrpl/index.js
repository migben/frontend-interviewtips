/**
* Front End Interview Questions: == vs ===
* 
* Q: How does == vs === differ?
one compares the value and the other one compares the type / value
*/

const value1 = 5;
const value2 = '5';

console.log(value1 == value2);
console.log(value1 === value2);