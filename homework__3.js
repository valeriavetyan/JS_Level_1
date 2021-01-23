// 1.   Write a recursive function to determine whether all digits of the number are odd or not.


function determineAreAllDigitsOdd(num) {
  while (num) {
    if ((num % 10) % 2 === 1) {
      return determineAreAllDigitsOdd((num - (num % 10)) / 10);
    } else {
      return false;
    }
  } return true;
}
console.log(determineAreAllDigitsOdd(7791))



// 3.  Given an array of numbers which is almost sorted in ascending order.  Find the index where sorting order is violated.


function findViolatedIndex(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      return arr.indexOf(arr[i]) + 1; // kam  (return i + 1)
    }
  }
  return -1;
}
console.log(findViolatedIndex([-9, -4, -4, 3, 12, 4, 5]))



// 4.   Write recursive, memorized function to get n-th Fibonacci number.

function findFibonacciNumber(num) {
  if (num <= 1) {
    return num;
  }
  return findFibonacciNumber(num - 1) + findFibonacciNumber(num - 2);
}
console.log(findFibonacciNumber(7))



// 5.   Given an array. Write a recursive function that removes the first element and returns the given array. (without using arr.unshift(),assign second element to first, third element to second...)


let index = 0;//estex index-y global scopum em haytararel,vor amen angam vorpes funkciayi argument chtanq(chgitem inchqanova chisht et metody)
function removesFirsReturnsGivenArr(arr) {
  while (arr.length !== index) {
    arr[index] = arr[index + 1];
    index++;
    return removesFirsReturnsGivenArr(arr);
  }
  arr.pop();
  return arr;
}
console.log(removesFirsReturnsGivenArr([6, 78, 'n', 0, 1]))