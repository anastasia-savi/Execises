function findMiddleNumber(arr) {
  if (arr.length > 2) {
    let nearToMiddle;
    let minNumber = arr[0];
    let maxNumber = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (minNumber > arr[i]) {
        minNumber = arr[i];
      }
      if (maxNumber < arr[i]) {
        maxNumber = arr[i];
      }
    }

    let middleNumber = Math.floor((minNumber + maxNumber) / 2);
    let firstDiff = Math.abs(arr[0] - middleNumber);

    for (let n = 1; n < arr.length; n++) {
      let diffs = Math.abs(arr[n] - middleNumber);

      if (diffs < firstDiff) {
        firstDiff = diffs;
        nearToMiddle = arr[n];
      }
    }
    // console.log(nearToMiddle);
    return nearToMiddle;
  } else if (arr.length === 0) {
    return undefined;
  } else if (arr.length === 1 || arr.length === 2) {
    return (nearToMiddle = arr[0]);
  } else {
    throw Error ("Smth went wrong, i don't know");
  }
}

module.exports = findMiddleNumber;
