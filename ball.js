let Ball = function () {
  this.x = width/2;
  this.y = height/2;
  this.xSpeed = Math.floor(Math.random() * -5);
  this.ySpeed = Math.floor(Math.random() * 5);
  this.color = chooseColor();
};

let circle = function (x, y, radius, fillCircle, color) {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2, false);
  ctx.fillStyle = color;
  if (fillCircle) {
    ctx.fill();
  } else {
    ctx.stroke();
  }
};

function chooseColor () {
  var colors = ["Red", "Orange", "Yellow", "Green", "Blue", "Purple"];
  return colors[Math.floor(Math.random() * colors.length)];
};

Ball.prototype.draw = function () {
  circle(this.x, this.y, 3, true, this.color);
};

Ball.prototype.move = function () {
  this.x += this.xSpeed;
  this.y += this.ySpeed;
};

Ball.prototype.checkCollision = function () {
  if (this.x < 0 || this.x > width) {
    this.xSpeed = -this.xSpeed;
  }
  if (this.y < 0 || this.y > height) {
    this.ySpeed = -this.ySpeed;
  }
};

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
var width = canvas.width;
var height = canvas.height;
// let ball = new Ball();
let balls = [];
for (let i = 0; i < 10; i++) {
  balls.push(new Ball());
}
// setInterval(function () {
//   ctx.clearRect(0, 0, width, height);
//   ball.draw();
//   ball.move();
//   ball.checkCollision();
//   ctx.strokeRect(0, 0, width, height);
// }, 30);

setInterval(function () {
  ctx.clearRect(0, 0, width, height);
  for (let i = 0; i < balls.length; i++) {
    balls[i].draw();
    balls[i].move();
    balls[i].checkCollision();
  }
  ctx.strokeRect(0, 0, width, height);
}, 30);
