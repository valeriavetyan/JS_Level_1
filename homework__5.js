// 2.  Write a JavaScript function to get all possible subsets of given length of the given array.  Assume that all elements in the array are unique.

let arr = [1, 2, 3, 4, 5];
let num = 3;
let result = [];

function subsets(i = 0, newArr = []) {
  if (newArr.length === num) return result.push(newArr);
  if (arr.length === i) return;
  subsets(i + 1, newArr.concat(arr[i]));

  return subsets(i + 1, newArr)
}

function getAllPossibleSubsets() {
  subsets();
  return result;
}
console.log(getAllPossibleSubsets())



// 3.  Create constructor function which instances would be objects with already implemented method &quot;map&quot; (like Array.map).

function ObjWidthMap() {
  this.map = function (fn) {
    let obj = {};
    for (let key in this) {
      if (key === "map") continue
      const newProp = fn(this[key], key, this)
      obj[key] = newProp
    }
    return obj
  }
}