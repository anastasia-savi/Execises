//Обчислити (1+1/1^2)(1+1/2^2)...(1+1/n^2)

function countNumber(n) {
    let result = 1;
    if (n <= 0 || typeof n !== 'number' || Number.isNaN(n) || n % 1 !== 0) {
        throw Error('Enter natural number');
    } else {
        for (let i = 1; i <= n; i++) {
            result *= (1 + 1 / Math.pow(i, 2))
        }
    }
    return result;
}

countNumber(6);