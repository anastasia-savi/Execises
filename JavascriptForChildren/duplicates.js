function findDuplicates2(arr) {
  for (let a = 0; a < arr.length; a++) {
    for (let n = 0; n < arr.length; n++) {
      if (arr[a] === arr[n] && a !== n) {
        return true;
      }
    }
  }
  return false;
}

findDuplicates2([1, 4, 3]);

// function findDuplicates1(arr) {
//   for (let n = 0; n < arr.length; n++) {
//     for (let m = n + 1; m < arr.length; m++) {
//       if (arr[m] === arr[n]) {
//         return true;
//       }
//     }
//   }
// }

// findDuplicates1([1, 2, 3, 4, 2]);

// function findDuplicates2(arr) {
//   let dub = {};
//   for (let a = 0; a < arr.length; a++) {
//     if (arr[a] in dub) {
//       return true;
//     }
//     dub[arr[a]] = true;
//   }
//   return false;
// }

// findDuplicates2([1, 4, 3]);
