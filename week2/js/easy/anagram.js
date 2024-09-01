console.log("**************** Anagram ********************");

function isAnagram(str1, str2) {
  let str1Len = str1.length;
  let str2Len = str2.length;

  if (str1Len != str2Len) return false;

  let str1Arr = str1.split("").sort();
  let str2Arr = str2.split("").sort();

  for (let i = 0; i < str1Len; i++) {
    if (str1Arr[i] !== str2Arr[i]) return false;
  }

  return true;
}

console.log(isAnagram("abc", "bpa"));
