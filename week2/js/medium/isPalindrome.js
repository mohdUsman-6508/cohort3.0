/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(word) {
  let smallWord = word.toLowerCase();
  let letters = smallWord.split("");

  let start = 0,
    end = letters.length - 1;
  while (start < end) {
    if (letters[start] !== letters[end]) return false;
    start++;
    end--;
  }
  return true;
}

console.log(isPalindrome("abCddcbA"));
