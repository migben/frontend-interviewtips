/**
 * Front End Interview Questions: Destructing Objects and Arrays
 * 
 * Q: What is and why might you destructure an object or array?
 * 
 * why would you use it?
 * It's a great way to provide content.
 * 
 * It's intended to provide more code readability.
 * 
 * This is part of clean code principles.
 */

const dob = [10, 25, 1987];
const [day, month, year] = dob;

const user = {
    f: 'Dylan',
    l: 'Israel'
 };
 
 const {f: firstName, l: lastName } = user;