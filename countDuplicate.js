/*You are given an array of numbers. Count how many times the a number is repeated in the array.

sample-input: numbers = [5,6,11,12,98, 5]

find: 5

output: 2


sample-input:

numbers = [5,6,11,12,98, 5]

find: 25

output: 0 */

function countDuplicate(array, find) {
  let count = 0;

  for (const element of array) {
    if (element === find) count++;
  }
  return count;
}

const numbers = [5, 6, 11, 12, 98, 5];
console.log(`5 founded ${countDuplicate(numbers, 5)} times.`);
console.log(`25 founded ${countDuplicate(numbers, 25)} times.`);
