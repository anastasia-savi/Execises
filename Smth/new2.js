// Переведіть текст вигляду border-left-width до borderLeftWidth
// Напишіть функцію camelize(str, callback), яка перетворює рядки «my-short-string» на «myShortString».
//
// Тобто дефіси віддаляються, а всі слова після них отримують велику букву.
//

// function camelize(str, callback) {
//     return str
//       .split("-")
//       .map((item, index) => {
//         if (index === 0) {
//           return item;
//         }
//         return callback(item);
//       })
//       .join("");
//   }

//   console.log(camelize("-webkit-transition", firstLetterToUp));

//   function firstLetterToUp(str) {
//     return str[0].toUpperCase() + str.slice(1);
//   }

// camelize("background-color", callback) == 'backgroundColor';
// camelize("list-style-image", callback) == 'listStyleImage';
// camelize("-webkit-transition", callback) == 'WebkitTransition';

// function makeProduct(name, price, callback) {
//     const product = {
//       id: Date.now(),
//       name,
//       price,
//     };
//     callback(product);
//   }

//   function ourProduct(product) {
//     console.log(product);
//   }

//   makeProduct('Apples', 100, ourProduct);

// Напишіть функцію each(array, callback), яка
// першим параметром приймає масив, а другим - функцію,
// яка застосовується до кожного елемента масиву.
// Функція each повинна повернути новий масив, елементами
// якого будуть результати виклику callback
// callback функції повинна множити елементи на 2

// function each(array, callback) {
//     const resultArray = [];

//     array.forEach((element) => {
//       resultArray.push(callback(element));
//     });
//     return resultArray;
//   }

//   function multiplyNumber(number) {
//     return number * 2;
//   }

//   console.log(each([1, 2, 3], multiplyNumber));

// Виконай рефакторинг makeDish так, щоб не потрібно було
// щоразу передавати ім'я шефа.
// Напишіть функцію makeShef(shefName), яка повертає функцію
// makeDish(dish), що пам'ятає ім'я шефа при її виклику

// const makeDish = function (shefName, dish) {
//   console.log(`${shefName} is cooking ${dish}`);
// };

// makeDish("Mango", "apple pie");
// makeDish("Poly", "muffins");

// const makeDish = function (shefName, dish) {
//     console.log(`${shefName} is cooking ${dish}`);
//   };

//   // makeDish("Mango", "apple pie");
//   // makeDish("Poly", "muffins");

//   function makeShef(shefName) {
//     return function makeDish(dish) {
//       console.log(`${shefName} is cooking ${dish}`);
//     }
//   }
//   const mango = makeShef("Mango");

//   mango("apple Pie");
//   mango("pizza");

//   const poly = makeShef("poly");

//   poly("apple Pie");
//   poly("pizza");

// function savePassword(password) {
//     return function (userPassword) {
//         return password === userPassword;
//      }
//  };
// const checkPassword = savePassword('1234');

// checkPassword('1234');
// console.log(checkPassword('1234'));
// console.log(checkPassword("12378"));

// function sayDiscont(discont) {
//     return function calcDiscont(summ) {
//       return summ - summ * (discont / 100);
//     };
//   }
//   const premium = sayDiscont(50);
//   const sizen = sayDiscont(25);
//   const clientDiscount = sayDiscont(10);
//   console.log(premium(3000));
//   console.log(sizen(5500));
//   console.log(clientDiscount(2800));

// function makeCounter() {
//     let counter = 0;
//     return {
//       increment() {
//         counter += 1;
//       },
//       decrement() {
//         counter -= 1;
//       },
//       getValue() {
//         return counter;
//       },
//     };
//   }
//   const counter1 = makeCounter();
//   counter1.increment();
//   counter1.increment();
//   counter1.increment();
//   counter1.decrement();
//   console.log(counter1.getValue());

// Виправте помилки, щоб код працював
// const jeans = {
//   price: 500,
//   showPrice() {
//     console.log(this.price);
//   },
// };
// jeans.showPrice();

// const phone = {
//   price: 1000,
// };

// phone.showPrice = jeans.showPrice;

// phone.showPrice();

// Виправте помилки, щоб код працював
// const product = {
//   price: 5000,
//   showPrice() {
//     console.log(this.price);
//   },
// };

// function callAction(action) {
//   action();
// }

// callAction(product.showPrice.bind(product));

// Потрібно викликати функцію showPrice так, щоб this вказував на об'єкт laptop

// function showPrice(number) {
//     console.log(this.price);
//     console.log(number);
// }

// const laptop = {
//   price: 1500,
// };

// showPrice.call(laptop, 1);
// showPrice.apply(laptop, [1]);

// const calculator = {
//   read(a, b) {
//     this.a = a;
//     this.b = b;
//   },
//   sum() {
//     return this.a + this.b;
//   },
//   min() {
//     return this.a - this.b;
//   },
//   mult() {
//     return this.a * this.b;
//   },
//   div() {
//     return this.a / this.b;
//   },

//   parseString() {
//     const originalString = prompt("Enter number, operator and number");
//     const [firstOperand, operator, secondOperand] = originalString
//       .replaceAll(" ", "")
//       .split(/(\D)/);

//     this.read(Number(firstOperand), Number(secondOperand));

//     switch (operator) {
//       case "+":
//         console.log(this.sum());
//         break;
//       case "-":
//         console.log(this.min());
//         break;
//       case "*":
//         console.log(this.mult());
//         break;
//     }

//     return {
//       firstOperand,
//       secondOperand,
//       operator,
//     };
//   },
// };

// calculator.parseString();
