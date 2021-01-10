// 7. Write a function, which receives an array as an argument which elements arrays of
// numbers. Find biggest negative number of each array. Return product of that numbers.If
// there is not any negative number in an array, ignore that one. Check that items of the
// given array are arrays.

function findBiggestNegativeArriesProduct(arr) {
  let result = 1;
  let min = -Infinity;
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (!Array.isArray(arr[i])) {
      return 'Invalid Argument';
    }
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] > min && arr[i][j] < max) {
        min = arr[i][j];
      }
    }
    if (min === -Infinity)
      continue;
    result *= min;
    min = -Infinity;
  }
  if (result === 1) {
    return 'No negatives';
  }
  return result;
}
console.log(findBiggestNegativeArriesProduct([[2, -9, -3, 0], [1, 2], [-4, -11, 0]]))