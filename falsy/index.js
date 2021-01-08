/**
 * Front End Interview Questions: Falsy Values
 * 
 * Q: What are falsey values in JavaScript?
 */

if(null) {
    console.log('null')
}

if(undefined) {
    console.log('undefined')
}

const arr = [];

if(arr.length > 0) {
    console.log('0')
}

const word = '';

if(word.length > 0) {
    console.log('empty')
}

if(false) {
    console.log('false')
}