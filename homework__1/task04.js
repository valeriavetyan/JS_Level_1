// 4. Write a function that accepts a string(a sentence) as a parameter and finds the longest
// word within the string․ If there are several words which are the longest ones, print the
// last word(words can be separated by space, comma or hyphen).


function findTheLongestWord(string) {
  let result;
  let newStr = "";
  let arr = [];
  let max = -100000000000000000;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === "," || string[i] === "." || string[i] === "-")
      continue;
    if (string[i] !== " ") {
      newStr += string[i];
    } else {
      arr.push(newStr);
      newStr = "";
    }
  }
  arr.push(newStr);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length >= max) {
      max = arr[i].length;
      result = arr[i];
    }
  }
  return result;
}
console.log(findTheLongestWord('”Which would be worse - to live as a monster , or to die as a good man?”'))