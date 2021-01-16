// 1. Given three numbers a, b (a ≤ b) and num. Create an array of evenly spaced numbers
// by the given num length over the specified interval (from a to b).


function createAneEvenlySpacedArray(a, b, num) {
  let c = b - a;
  let result = c / (num - 1);
  let arr = [];
  for (let i = a; i <= b; i += result) {
    arr.push(i);
  }
  return arr;
}
console.log(createAneEvenlySpacedArray(10, 100, 3))

//2.  Given an array of numbers. Find the index of the second maximum element.

function findIndexOfSecondMaxElement(arr) {
  let result = 0;
  let firstMaximum = -Infinity;
  let secondMaximum = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > firstMaximum) {
      firstMaximum = arr[i];
    }
  }
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] > secondMaximum && arr[j] !== firstMaximum) {
      result = arr.indexOf(arr[j]);
      secondMaximum = arr[j];
    }
  }
  return result;
}
console.log(findIndexOfSecondMaxElement([23, -98, 0, -456, 12, 8]))

// 4.  Write a function which receives an array and a number as arguments and returns a new array
// from the elements of the given array which are larger than the given number.


function findElementLargerThanNumber(arr, number){
  let result = [];
  for(let i = 0; i < arr.length; i++){
    if(arr[i] > number){
     result.push(arr[i]);
    } 
  }
  return result;
}
console.log(findElementLargerThanNumber([10, 25, 16, -5, 30, 15, 24] , 16))

//Kody kisat e ashxatum:


// 5.  Write a function, which receives two numbers as arguments and finds all numbers between
// them such that each digit of the number is even. The numbers obtained should be printed in a
// comma-separated sequence on a single line.

function sequence(a, b) {
  let numbers = [];
  for (let i = a; i <= b; i++) {
    let isAllDigitsAreEvenResult = isAllDigitsAreEven(i);
    if (isAllDigitsAreEvenResult) {
      numbers.push(i);
    }
  }
  if (numbers.length > 0) {
    return numbers.join(",")
  } else {
    return 'Such numbers does not exist.';
  }
}
function isAllDigitsAreEven(n) {
  let nStr = n + '';
  for (let j = 0; j < nStr.length; j++) {
    if (nStr[j] % 2 === 1) {
      return false;
    }
  }
  return true;
}
console.log(sequence(19, 42))