// const { event } = require("jquery");

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

//square
// ctx.fillRect(0, 0, 10, 10);

//squares
// for (let i = 0; i < 8; i++) {
//   ctx.fillRect(i * 10, i * 10, 10, 10);
// }

//robot
// ctx.fillRect(80, 0, 50, 50);
// ctx.fillRect(100, 50, 10, 20);
// ctx.fillRect(65, 70, 80, 80);
// ctx.fillRect(35, 70, 30, 10);
// ctx.fillRect(145, 70, 30, 10);
// ctx.fillRect(65, 150, 10, 50);
// ctx.fillRect(135, 150, 10, 50);

//funny man
// ctx.strokeStyle = "Pink";
// ctx.lineWidth = 3;
// ctx.beginPath();
// ctx.moveTo(50, 10);
// ctx.lineTo(70, 10);
// ctx.moveTo(70, 10);
// ctx.lineTo(70, 30);
// ctx.moveTo(70, 30);
// ctx.lineTo(50, 30);
// ctx.moveTo(50, 30);
// ctx.lineTo(50, 10);
// ctx.moveTo(60, 30);
// ctx.lineTo(60, 70);
// ctx.moveTo(60, 50);
// ctx.lineTo(80, 30);
// ctx.moveTo(60, 50);
// ctx.lineTo(40, 30);
// ctx.moveTo(60, 70);
// ctx.lineTo(40, 100);
// ctx.moveTo(60, 70);
// ctx.lineTo(80, 100);
// ctx.stroke();

//house
// ctx.fillStyle = "Blue";
// ctx.beginPath();
// ctx.moveTo(100, 100);
// ctx.lineTo(100, 60);
// ctx.lineTo(130, 30);
// ctx.lineTo(160, 60);
// ctx.lineTo(160, 100);
// ctx.lineTo(100, 100);
// ctx.fill();

//circle
// ctx.lineWidth = 2;
// ctx.strokeStyle = "Green";
// ctx.beginPath();
// ctx.arc(50, 50, 20, 0, Math.PI / 2, false);
// ctx.stroke();
// ctx.beginPath();
// ctx.arc(100, 50, 20, 0, Math.PI, false);
// ctx.stroke();
// ctx.beginPath();
// ctx.arc(150, 50, 20, 0, Math.PI * 2, false);
// ctx.stroke();

//snowman
// let snowman = function (xx, yy) {
//   let circle = function (x, y, radius) {
//     ctx.beginPath();
//     ctx.arc(x, y, radius, 0, Math.PI * 2, false);
//     ctx.stroke();
//   };

//   let point = function (x, y, radius, color) {
//     ctx.beginPath();
//     ctx.fillStyle = color;
//     ctx.arc(x, y, radius, 0, Math.PI * 2, false);
//     ctx.fill();
//   };
//   circle(xx, yy, 20);
//   circle(xx, yy + 50, 30);
//   point(xx - 8, yy - 2, 3, "Blue");
//   point(xx + 8, yy - 2, 3, "Blue");
//   point(xx + 8, yy - 2, 3, "Blue");
//   point(xx, yy + 5, 3, "Orange");
//   point(xx, yy + 35, 3, "Black");
//   point(xx, yy + 50, 3, "Black");
//   point(xx, yy + 65, 3, "Black");
// };

// snowman(70, 50);

// point(42, 48, 3, "Blue");
// point(58, 48, 3, "Blue");
// point(58, 48, 3, "Blue");
// point(50, 55, 3, "Orange");
// point(50, 85, 3, "Black");
// point(50, 100, 3, "Black");
// point(50, 115, 3, "Black");

//draw points
// let points = [
//   [50, 50],
//   [50, 100],
//   [100, 100],
//   [100, 50],
//   [50, 50],
// ];

// let mysteryPoints = [
//   [50, 50],
//   [50, 100],
//   [25, 120],
//   [100, 50],
//   [70, 90],
//   [100, 90],
//   [70, 120],
// ];

// function drawPoints(arr) {
//   ctx.beginPath();
//   ctx.lineWidth = 2;
//   ctx.strokeStyle = "Green";
//   ctx.moveTo(arr[0][0], arr[0][1]);
//   for (let i = 1; i < arr.length; i++) {
//     if (i === 3) {
//       ctx.moveTo(arr[i][0], arr[i][1]);
//       continue;
//     }
//     ctx.lineTo(arr[i][0], arr[i][1]);

//     ctx.stroke();
//   }
// }

// drawPoints(points);
// drawPoints(mysteryPoints);

// ctx.strokeStyle = "Pink";
// ctx.lineWidth = 3;
// ctx.beginPath();
// ctx.moveTo(50, 50);
// ctx.lineTo(50, 100);
// ctx.lineTo(25, 120);
// ctx.moveTo(100, 50);
// ctx.lineTo(70, 90);
// ctx.lineTo(100, 90);
// ctx.lineTo(70, 120);
// ctx.stroke();

//painter
// function drawmouse() {
//   $("canvas").mousemove(function (event) {
//     ctx.beginPath();
//     ctx.fillStyle = "Black";
//     ctx.arc(event.pageX, event.pageY,3, 0, Math.PI * 2, false);
//     ctx.fill();
//   });
// }

// drawmouse();

