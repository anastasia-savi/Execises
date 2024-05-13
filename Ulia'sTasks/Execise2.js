// Задано натуральное число n. Вычеслить:
// 1/sin1 + 1/sin1+sin2+...1/sin1+sin2+...+sinn  
//1.18839510551 + 0.57117777157 + 0.52857239861
//sin1=0.841470985
//sin2=0.90929742682
//sin3=0.14112000806
function countNumber(n) {
  let result = 0;
  if (n <= 0 || typeof n !== "number" || Number.isNaN(n) || n % 1 !== 0) {
    throw Error("Enter natural number");
  } else {
    for (let i = 1; i <= n; i++) {
      let exp = 0;
      for (let m = 1; m <= i; m++) {
        exp += Math.sin(m);
      }
      result += 1 / exp;
    }
  }
  console.log(result);
  return result;
}

countNumber(3);
