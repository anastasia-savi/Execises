//Задано натуральное число n. Вычеслить:
//√2+√2+...+√2 корень в корне...

function countNumber(n) {
  let exp = 0;
  if (n <= 0 || typeof n !== "number" || Number.isNaN(n) || n % 1 !== 0) {
    throw Error("Enter natural number");
  }
  for (let i = 1; i <= n; i++) {
    exp = Math.sqrt(2 + exp);
  }
  return exp;
}

console.log(countNumber(3));

//посмотреть видео о том что происходит при вызове функции
//присваивается
