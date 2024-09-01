/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [
  - Output: 9
*/

function findLargestElement(numbers) {
  let largest = numbers[0];

  numbers.forEach((item) => {
    if (largest < item) largest = item;
  });
  return largest;
}

let nums = [3, 7, 2, 9, 1];
console.log(findLargestElement(nums));
