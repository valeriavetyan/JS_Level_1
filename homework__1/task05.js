// 5. Write a function to find longest substring in a given a string without repeating characters
// except space character.
// If there are several, return the last one. Consider that all letters are lowercase.

function findLongestSubstringInSentence(string) {
  let result = '';
  for (let i = 0; i < string.length; i++) {
    let newStr = '';
    for (let j = i; j < string.length; j++) {
      if (!newStr.includes(string[j]) || string[j] === ' ') {
        newStr = newStr.concat(string[j]);
      }
      else {
        if (newStr.length >= result.length) {
          result = newStr;
        }
        break;
      }
    }
  }
  return result;
}
console.log(findLongestSubstringInSentence(`there are no two words in the english language more harmful than 'good job'.`))