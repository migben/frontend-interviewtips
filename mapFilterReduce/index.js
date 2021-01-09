/**
 * Front End Interview Questions: map() vs filter() vs reduce()
 * 
 * Q: What do map(), filter() and reduce() do?
 */

const nums = [1, 2, 3, 4, 5];

const numsAddOne = nums.map((value) => value + 1);
console.log(numsAddOne) // [2, 3, 4, 5, 6]

const evenNums = nums.filter((value) => value % 2 === 0 );
console.log(evenNums) // [2, 4]
console.log(nums) // [1, 2, 3, 4, 5]

const sum = nums.reduce((total, current) => {
    return total + current;
}, 0)

console.log(sum); // 15