// 6. Write a function to compute a new string from the given one by moving the first char to
// come after the next two chars, so &quot;abc&quot; yields &quot;bca&quot;. Repeat this process for each
// subsequent group of 3 chars. Ignore any group of fewer than 3 chars at the end.


function firstComeAfterTheNextTwoChars(string) {
  let chars = '';
  let result = [];
  for (let i = 0; i < string.length; i += 3) {
    let newStr = string.slice(i, i + 3);
    result.push(newStr);
    newStr = '';
  }
  for (let i = 0; i < result.length; i++) {
    if (result[i].length === 3) {
      chars += result[i][1] + result[i][2] + result[i][0];
    } else {
      chars += result[result.length - 1];
    }
  }
  return chars;
}
console.log(firstComeAfterTheNextTwoChars('aweyoolp'))