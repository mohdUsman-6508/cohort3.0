/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(word) {
  let letters = word.split("");
  let count = 0;

  letters.forEach((item) => {
    if (
      item == "a" ||
      item == "e" ||
      item == "i" ||
      item == "o" ||
      item == "u" ||
      item == "A" ||
      item == "E" ||
      item == "I" ||
      item == "O" ||
      item == "U"
    ) {
      count += 1;
    }
  });

  return count;
}

console.log(countVowels("qwertyuioop"));
console.log(countVowels("aeiou"));
