// 1. Given an array of numbers. Print frequency of each unique number. (Frequency is the
// count of particular element divided by the count of all elements)

function frequency(arr) {
  let result = 1;
  let a = arr.length;
  let obj = {}
  arr.sort();
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        result++;
      }
    }
    obj[arr[i]] = result / a;
    arr.splice(i, result, -1);
    result = 0;
  }
  return obj;
}
console.log(frequency([1, 2, 3]))

//Google-ic em nayel,lucmany haselem,bayc 100%-ov chem haskacel))