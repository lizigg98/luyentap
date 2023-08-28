function removeFirst(arr, target) {
    var idx = arr.indexOf(target);
    if (idx > -1) {
      arr.splice(idx, 1);
    }
    return arr;
  }
// const numbers = [5, 10, 15];
// console.log(removeFirst(numbers, 10)); 
  function removeAll(arr, target) {
    var i = 0;
    while (i < arr.length) {
      if (arr[i] === target) {
        arr.splice(i, 1);
      } else {
        ++i;
      }
    }
    return arr;
  }
// const numbers = [1, 1, 2, 2];
// console.log(removeAll(numbers, 1));