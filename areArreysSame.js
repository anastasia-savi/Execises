function areArreysSame(arr1, arr2) {
    if (arr1.length != arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++){
        for (let j = 0; j < arr2.length; j++){
            if (arr1[i] != arr2[j]) {
                return false;
            }
return true
        }
    }
}

module.exports = areArreysSame;