/**
 * Front End Interview Questions: Spread & Rest Operators
 * 
 * Q: What do the spread and rest operators do?
 * 
 * When, Why to use them?
 * Spread operator can be used to unwrap an Array or an Obj.
 */

const users = ['Dylan', 'Per', 'Dollan'];
const allUsers = ['Olivia', ...users];

console.log(allUsers); // ["Olivia", "Dylan", "Per", "Dollan"]

const user = { firstName: 'Dylan', lastName: 'Israel' };
const fullUser = { channel: 'codingtutorials360', ...user };
console.log(fullUser); // {channel: "codingtutorials360", firstName: "Dylan", lastName: "Israel"}

// example of over ride the original value

const user = { firstName: 'Dylan', lastName: 'Israel', channel: 'codingtutorials360' };
const defaults = { channel: 'scrimba', ...user };
console.log(defaults);

// Destructuring example

const {channel, ...remainder } = defaults;

console.log(remainder)

// Rest operator example

function addNums(...nums){
    return nums.reduce((total, current) => { return total + current; }, 0)
}

console.log(addNums(1,2,3))
console.log(addNums(1,2))