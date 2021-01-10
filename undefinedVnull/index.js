/**
 * Front End Interview Questions: undefined vs null
 * 
 * Q: What is the difference between undefined and null?
 * 
 * It's a question why you might use one over the other, in your day to day.
 * 
 * Undefined, something does not exist | is not there.
 * 
 * Null, this is yet to have a value.
 */

const user = {
    firstName: null // Has yet to have a value but its an empty value.
};

const user2 = {
    
};

console.log(user.firstName); // null
console.log(user2.firstName) // undefined