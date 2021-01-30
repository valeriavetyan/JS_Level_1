// 1.   Given an array of nested arrays. Write a recursive function that flattens it. (Hint create function that concats arrays).

function flattenArray(arr, result = []) {
  if (!arr.length) {
    return result;
  }
  if (Array.isArray(arr[0])) {
    flattenArray(arr[0], result)
  } else {
    result.push(arr[0])
  }
  return flattenArray(arr.slice(1), result)
}
console.log(flattenArray([14, [1, [[3, []]], 1], 0]))



// 2.   Given a number. Write a function that calculates its sum of the digits and if that sum has more than 1 digit find the sum of digits of that number. Repeat that process if needed and return the result.

function calculateSumOfDigits(num) {
  let sum = 0;
  do {
    sum += num % 10;
    num = Math.floor(num / 10);
  } while (num)
  return sum < 10 ? sum : calculateSumOfDigits(sum);
}
console.log(calculateSumOfDigits(14))



// 3.   Given an array and a number N.  Write a recursive function that rotates an array N places to the left. (Hint: to add element to the beginning use arr.unshift())

function rotatesArrayToLeft(arr, N) {
  while (N === 0) {
    return arr;
  }
  let result = arr.pop();
  arr.unshift(result);
  return rotatesArrayToLeft(arr, N - 1);
}
console.log(rotatesArrayToLeft([1, 2, 3, 4, 5, 6], 3))

//5. Given the list of the following readers:
// [
// { book: &quot;Catcher in the Rye&quot;, readStatus: true, percent: 40},
// { book: &quot;Animal Farm&quot;, readStatus: true, percent: 20},
// { book: &quot;Solaris&quot;, readStatus: false, percent: 90 },
// { book: &quot;The Fall&quot;, readStatus: true, percent: 50 },
// { book: &quot;White Nights&quot;, readStatus: false, percent: 60 } ,
// { book: &quot;After Dark&quot;, readStatus: true, percent: 70 }
// ];
// Output the books sorted by the percent in descending order which readStatus is true.

function sortArrByPercentAndReadStatus(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].readStatus) {
      result.push(arr[i]);
    }
  }
  result.sort(function (a, b) {
    return b.percent - a.percent;
  })
  return result;
}
console.log(sortArrByPercentAndReadStatus([
  { book: "Catcher in the Rye", readStatus: true, percent: 40 },
  { book: "Animal Farm", readStatus: true, percent: 20 },
  { book: "Solaris", readStatus: false, percent: 90 },
  { book: "The Fall", readStatus: true, percent: 50 },
  { book: "White Nights", readStatus: false, percent: 60 },
  { book: "After Dark", readStatus: true, percent: 70 }
]))