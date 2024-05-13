// $("body").keydown(function (event) {
//   console.log(event.which);
// });

// let keyNames = {
//   32: "space",
//   37: "left",
//   38: "up",
//   39: "right",
//   40: "down",
// };

// $("body").keydown(function (event) {
//   console.log(keyNames[event.which]);
// });

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let width = canvas.width;
let height = canvas.height;

let circle = function (x, y, radius, fillCircle) {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2, false);
  if (fillCircle) {
    ctx.fill();
  } else {
    ctx.stroke();
  }
};

let Ball = function () {
  this.x = width / 2;
  this.y = height / 2;
  this.speed = 5;
  this.xSpeed = this.speed;
  this.ySpeed = 0;
  this.size = 10;
};

Ball.prototype.move = function (direction) {
  this.x += this.xSpeed;
  this.y += this.ySpeed;

  // apeare from the different side
  // if (this.x < 0) {
  //   this.x = width;
  // } else if (this.x > width) {
  //   this.x = 0;
  // }
  // if (this.y < 0) {
  //   this.y = height;
  // } else if (this.y > height) {
  //   this.y = 0;
  // }

  //change direction if touch the border
  if (this.x < 0 || this.x > width) {
    this.xSpeed = -this.xSpeed;
  }
  if (this.y < 0 || this.y > height) {
    this.ySpeed = -this.ySpeed;
  }
};

Ball.prototype.draw = function () {
  circle(this.x, this.y, this.size, true);
};

Ball.prototype.getSize = function (letter) {
  if (this.size < 1) {
    this.size = 1;
    return alert("Increase size");
  } else {
    if (letter === "c") {
      this.size = this.size - 1;
    }
    if (letter === "v") {
      this.size = this.size + 1;
    }
  }
};

Ball.prototype.setDirection = function (direction) {
  if (this.speed < 1) {
    this.speed = 1;
    return alert("Increase speed");
  } else {
    if (direction === "up") {
      this.xSpeed = 0;
      this.ySpeed = -this.speed;
    } else if (direction === "down") {
      this.xSpeed = 0;
      this.ySpeed = this.speed;
    } else if (direction === "left") {
      this.xSpeed = -this.speed;
      this.ySpeed = 0;
    } else if (direction === "right") {
      this.xSpeed = this.speed;
      this.ySpeed = 0;
    } else if (direction === "stop") {
      this.xSpeed = 0;
      this.ySpeed = 0;
    }
  }
};

let ball = new Ball();
let keyActions = {
  32: "stop",
  37: "left",
  38: "up",
  39: "right",
  40: "down",
};

let speeds = {
  49: 1,
  50: 2,
  51: 3,
  52: 4,
  53: 5,
  54: 6,
  55: 7,
  56: 8,
  57: 9,
};

let keyletters = {
  90: "z",
  88: "x",
  67: "c",
  86: "v",
};

$("body").keydown(function (event) {
  let letter = keyletters[event.which];
  ball.changeSpeed(letter);
  ball.getSize(letter);
});

Ball.prototype.changeSpeed = function (letter) {
  if (letter === "z") {
    this.speed = this.speed / 2;
  }
  if (letter === "x") {
    this.speed = this.speed * 2;
  }
};

$("body").keydown(function (event) {
  let direction = keyActions[event.which];
  if (direction) {
    ball.setDirection(direction);
  } else {
    let speed = speeds[event.which];
    if (speed) {
      ball.speed = speed;
      ball.setDirection(direction);
    }
  }
});

setInterval(function () {
  ctx.clearRect(0, 0, width, height);
  ball.draw();
  ball.move();
  ctx.strokeRect(0, 0, width, height);
}, 30);
