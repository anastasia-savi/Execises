//move to the right side
// let canvas = document.getElementById("canvas");
// let ctx = canvas.getContext("2d");
// let position = 0;
// setInterval(function () {
//   ctx.clearRect(0, 0, 200, 200);
//   ctx.fillRect(position, 0, 20, 20);
//   position++;
//   if (position > 200) {
//     position = 0;
//   }
// }, 30);

//make size bigger
// let canvas = document.getElementById("canvas");
// let ctx = canvas.getContext("2d");
// let size = 0;
// setInterval(function () {
//   ctx.clearRect(0, 0, 200, 200);
//   ctx.fillRect(0, 0, size, size);
//   size++;
//   if (size > 200) {
//     size = 0;
//   }
// }, 30);

//random move of bee
let circle = function (x, y, radius, fillCircle) {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2, false);
  if (fillCircle) {
    ctx.fill();
  } else {
    ctx.stroke();
  }
};

let drawBee = function (x, y) {
  ctx.lineWidth = 2;
  ctx.strokeStyle = "Black";
  ctx.fillStyle = "Gold";

  circle(x, y, 8, true);
  circle(x, y, 8, false);
  circle(x - 5, y - 11, 5, false);
  circle(x + 5, y - 11, 5, false);
  circle(x - 2, y - 1, 2, false);
  circle(x + 2, y - 1, 2, false);
};

let update = function (coordinate) {
  let offset = Math.random() * 4 - 2;
  coordinate += offset;
  if (coordinate > 200) {
    coordinate = 200;
  }
  if (coordinate < 0) {
    coordinate = 0;
  }
  return coordinate;
};

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let x = 100;
let y = 100;
setInterval(function () {
  ctx.clearRect(0, 0, 200, 200);
  drawBee(x, y);
  x = update(x);
  y = update(y);
  ctx.strokeRect(0, 0, 200, 200);
}, 30);
